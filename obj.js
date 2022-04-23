#!/usr/bin/env node
"use strict";
/*
 * name     : obj.js
 * job      : Hanyu Pinyin utility class
 * git      : https://github.com/pffy/metapinyin-js
 * author   : The Pffy Authors https://pffy.dev
 * license  : https://opensource.org/licenses/MIT
 */
class MetaPinyin {

  // a Hanyu Pinyin string:
  // sheng1 ri4 kuai4 le4

  // Mashes the Hanyu Pinyin.
  // sheng1ri4kuai4le4
  // Returns a string without non-alphanum chars
  static pmash(str) {
    return '' + str.replace(/[^A-Z0-9]/ig, '').trim();
  }

  // Bashes the Hanyu Pinyin.
  // shengrikuaile
  // Returns a string without non-alpha chars
  static pbash(str) {
    return '' + str.replace(/[^A-Z]/ig, '').trim();
  }

  // Hashes the Hanyu Pinyin.
  // aeghiklnrsu
  // Returns an alpha string with chars ordered by alpha
  static phash(str) {
    return '' + str.replace(/[^A-Z]/ig, '')
      .split('').filter(function (x, idx, arr) {
        return arr.indexOf(x) === idx;
      }).sort().join('').trim();
  }

  // Smashes the Hanyu Pinyin.
  // srkl
  // Returns an alpha string of initials
  static psmash(str) {
    return '' + str.split(/\s/)
      .map(x => x.charAt(0)).join('').trim();
  }

  // Crashes the Hanyu Pinyin.
  // klrs
  // Returns an alpha string with initials ordered by alpha
  static pcrash(str) {
    return '' + str.split(/\s/)
      .map(x => x.charAt(0))
      .filter(function (x, idx, arr) {
        return arr.indexOf(x) === idx;
      }).sort().join('').trim();
  }

  // Removes excess space between pinyin
  static vacuum(str) {
    return '' + str.replace(/[^\S\n]{2,}/g, ' ').trim();
  }
}

module.exports = MetaPinyin;
