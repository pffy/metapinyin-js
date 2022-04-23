# Generate metapinyin for Hanyu Pinyin indexing

+ `MetaPinyin` provides static functions for generating metapinyin
+ This is the JavaScript version.
+ Used in [pbjkit][pbjkit].


# INSTALL

> **NOTE:** Requires [NodeJS][nodejs].

```bash
$ npm i git+https://github.com/pffy/metapinyin-js.git
```

Or:
```
$ npm i github:pffy/metapinyin-js
```

# Functions

Metapinyin describes any Hanyu Pinyin indexing construct that helps in the storage and retrieval of Hanyu Pinyin documents. Metapinyin is very useful for developers of NoSQL serverless databases that handle Mandarin Chinese language data sets.

### `pmash`
```
static pmash(string) : string
```
  + Mashes Hanyu Pinyin.
  + Removes the spaces between Hanyu Pinyin text.
  + Used in Hanyu Pinyin dictionary searches for narrower results.
  + Used in audio indexing

Example:
```javascript
// sheng1ri4kuai4le
const pmash = MetaPinyin.pmash('sheng1 ri4 kuai4 le4');
```

### `pbash`
```
static pbash(string) : string
```
  + Bashes Hanyu Pinyin.
  + Removes the digits and spaces between Hanyu Pinyin text.
  + Used in Hanyu Pinyin dictionary searches for broader results.

Example:
```javascript
// shengrikuaile
const pbash = MetaPinyin.pbash('sheng1 ri4 kuai4 le4');
```

### `phash`
```
static phash(string) : string
```
  + Hashes Hanyu Pinyin.
  + Returns a string of alpha-only characters, in alphabetical order.
  + Used in spell checkers or auto-correct.
  + Used in helper functions for queries.

Example:
```javascript
// aeghiklnrsu
const phash = MetaPinyin.pbash('sheng1 ri4 kuai4 le4');
```

### `psmash`
```
static psmash(string) : string
```
  + Smashes Hanyu Pinyin.
  + Returns a string of alpha-only initials.
  + Used in [Hanyu Pinyin input method editors][ime].
  + Used in social media, SMS, and other ICT
    + Twitter search: [srkl][srkl] is used to wish 'happy birthday'

Example:
```javascript
// srkl
const psmash = MetaPinyin.psmash('sheng1 ri4 kuai4 le4');
```


### `pcrash`
```
static pcrash(string) : string
```
  + Crashes Hanyu Pinyin.
  + Returns a string of alpha-only initials.
  + Used in big data collation.

Example:
```javascript
// klrs
const pcrash = MetaPinyin.pcrash('sheng1 ri4 kuai4 le4');
```


### `vacuum`
```
static vacuum(string) : string
```
  + Removes excess spaces between Hanyu Pinyin segments.

Example:
```javascript
// hao3 hao3 hao3
const vacuum = MetaPinyin.vacuum('hao3  hao3    hao3');
```

# Licenses
  + MIT License: https://opensource.org/licenses/MIT

[pbjkit]: https://github.com/pffy/pbjkit
[srkl]: https://twitter.com/search?q=srkl&f=live
[ime]: https://developer.mozilla.org/en-US/docs/Glossary/Input_method_editor
[nodejs]: https://nodejs.org
