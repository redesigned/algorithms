#!/bin/bash
mv ./algorithms/math/calculatePi.js ./calculatePi.js.tmp
pnpm exec jsdoc -t node_modules/@otris/jsdoc-tsd -r ./algorithms -d types.d.ts
mv ./calculatePi.js.tmp ./algorithms/math/calculatePi.js
