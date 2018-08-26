#!/bin/bash

rm -r ../microdraw/app/public/js/tools/vue-components/css &&
rm -r ../microdraw/app/public/js/tools/vue-components/js &&

cp -r ./dist/static/css ../microdraw/app/public/js/tools/vue-components/ &&
cp -r ./dist/static/js ../microdraw/app/public/js/tools/vue-components/