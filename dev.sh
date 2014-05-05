#!/bin/sh

sass --scss --watch css:css &
when-changed -r js/sector8/ python js/closure-library/closure/bin/build/closurebuilder.py --root=js/closure-library/ --root=js/sector8/ --namespace="goog.dom" --namespace="sector8.game" --output_mode=script --compiler_jar=/home/joel/source/closure-compiler/build/compiler.jar --output_file=js/bundle.js &

