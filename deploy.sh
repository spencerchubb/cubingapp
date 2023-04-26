cp ./ui/varsProd.ts ./ui/src/lib/scripts/common/vars.ts
npm run build --prefix ui

firebase deploy --only hosting

cd ui
cp ./ui/varsDev.ts ./ui/src/lib/scripts/common/vars.ts