#!/usr/bin/env node
"use strict";
/*
 * name     : test1.js
 * job      : test for MetaPinyin class
 * git      : https://github.com/pffy/metapinyin-js
 * author   : The Pffy Authors https://pffy.dev
 * license  : https://opensource.org/licenses/MIT
 */

const MetaPinyin = require('../obj');

const str = 'sheng1 ri4 kuai4 le4';
console.log('p: %s', str);
console.log('');
console.log('pmash: %s', MetaPinyin.pmash(str));
console.log('pbash: %s', MetaPinyin.pbash(str));
console.log('phash: %s', MetaPinyin.phash(str));
console.log('psmash: %s', MetaPinyin.psmash(str));
console.log('pcrash: %s', MetaPinyin.pcrash(str));

const spacedout = 'hao3  hao3    hao3';
console.log('spaced out: %s', spacedout);
console.log('vacuumed: %s', MetaPinyin.vacuum(spacedout));
