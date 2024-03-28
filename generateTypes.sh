#!/bin/bash
mv ./algorithms/math/calculatePi.js ./tmp/calculatePi.js.tmp;
pnpm exec jsdoc -t node_modules/@otris/jsdoc-tsd -r ./algorithms -d types.d.ts;
mv ./tmp/calculatePi.js.tmp ./algorithms/math/calculatePi.js;
