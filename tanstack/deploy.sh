#!/bin/bash
set -e

cd "$(dirname "$0")"

# Load env vars (USER + IP2)
source ../.env

APP_DIR="/var/www/app"
SSH_KEY="~/.ssh/cubingapp"

check_node_version() {
  if ! command -v node >/dev/null 2>&1; then
    echo "⚠️ Node.js not found locally. Vite expects 20.19+ or 22.12+."
    return
  fi

  local node_version
  node_version=$(node -v | sed 's/^v//')
  local major=${node_version%%.*}
  local rest=${node_version#*.}
  local minor=${rest%%.*}

  # Vite supports Node 20.19+ or 22.12+ (or newer majors).
  if [[ "$major" -gt 22 ]] || [[ "$major" -eq 20 && "$minor" -ge 19 ]] || [[ "$major" -eq 22 && "$minor" -ge 12 ]]; then
    return
  fi

  echo "⚠️ Node.js $node_version is below Vite's recommended minimum (20.19+ or 22.12+)."
  echo "   Build may still succeed under Bun, but upgrading Node removes this warning."
}

echo "📦 Installing dependencies locally..."
bun install

check_node_version

echo "🏗 Building locally..."
DISABLE_PRERENDER=1 bun run build

echo "🗜 Creating deployment archive..."
rm -f deploy.tar.gz
# Build archive from a clean staging directory to avoid macOS xattrs
# (e.g. LIBARCHIVE.xattr.com.apple.provenance) in the tar headers.
STAGING_DIR=$(mktemp -d)
trap 'rm -rf "$STAGING_DIR"' EXIT

rsync -a --delete .output/ "$STAGING_DIR/.output/"
cp package.json bun.lock "$STAGING_DIR/"

if command -v xattr >/dev/null 2>&1; then
  xattr -rc "$STAGING_DIR" || true
fi

COPYFILE_DISABLE=1 tar -C "$STAGING_DIR" -czf deploy.tar.gz .output package.json bun.lock

echo "📤 Uploading to VPS..."
scp -i ~/.ssh/cubingapp deploy.tar.gz $USER@$IP2:/tmp/

echo "🚀 Deploying on VPS..."
ssh -T -i ~/.ssh/cubingapp $USER@$IP2 << EOF
  set -e
  export BUN_INSTALL="\$HOME/.bun"
  export PATH="\$BUN_INSTALL/bin:\$PATH"

  mkdir -p $APP_DIR
  cd $APP_DIR

  echo "Stopping old server (if running)..."
  pkill -f ".output/server/index.mjs" || true

  echo "Cleaning old build..."
  rm -rf .output

  echo "Extracting new build..."
  tar --warning=no-unknown-keyword -xzf /tmp/deploy.tar.gz

  if ! command -v bun >/dev/null 2>&1; then
    echo "Bun not found on VPS. Installing..."
    curl -fsSL https://bun.sh/install | bash
    export BUN_INSTALL="\$HOME/.bun"
    export PATH="\$BUN_INSTALL/bin:\$PATH"
  fi

  if ! command -v bun >/dev/null 2>&1; then
    echo "❌ Bun installation failed on VPS."
    exit 1
  fi

  echo "Installing production deps..."
  bun install --production

  echo "Starting server..."
  nohup bun .output/server/index.mjs > app.log 2>&1 &

  echo "✅ Deployment complete!"
EOF

rm deploy.tar.gz
echo "🎉 Done!"