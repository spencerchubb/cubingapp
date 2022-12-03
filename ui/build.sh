errMsg="Please specify prod or dev for the build type. For example: ./build.sh prod"

if [ -z "$1" ]; then
    echo $errMsg
    exit 1
elif [ $1 = "prod" ]; then
    echo "Building for production..."
    cp ./varsProd.ts ./src/scripts/common/vars.ts
    node build-prod.js
elif [ $1 = "dev" ]; then
    echo "Building for development..."
    cp ./varsDev.ts ./src/scripts/common/vars.ts
    node build-dev.js
else
    echo $errMsg
    exit 1
fi

echo "esbuild complete. typechecking files..."

tsc --noEmit