#!/bin/bash

set -o errexit -o nounset

rm -rf ./build
mkdir -p ./build/assets

cp -r ./assets/* ./build/assets
cp ./assets/_redirects ./build/
cp ./assets/robots.txt ./build/

npm run build
