# from-url
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

> Check assets hostname

## Keynote

From a given url, display list of requested resources matching a {hostname,pattern}

## Install

```sh
$ npm install --save from-url
```


## Usage

```js
var from = require('from-url');

from('https://github.com/','assets-cdn.github.com', function(err, assets) {
  for(var url in assets){
    console.log(assets[url]);
    //=> true || false
  }
});

from('https://github.com/','cdn', function(err, assets) {
  for(var url in assets){
    console.log(assets[url]);
    //=> true || false
  }
});
```

```sh
$ npm install --global from-url
$ from-url --help

    Example
      from-url --url=https://github.com/ --pattern=assets-cdn.github.com
      ✔︎ https://assets-cdn.github.com/assets/github.js
      ✖ https://collector-cdn.github.com/assets/api.js

```

### Options

##### `--url`

The given url

#### `--pattern`

Check the pattern with the resources requested

#### `--color`

Colorize the output

## License

MIT © [Yassine AZZOUT](yass.io)


[npm-url]: https://npmjs.org/package/from-url
[npm-image]: https://badge.fury.io/js/from-url.svg
[travis-url]: https://travis-ci.org/92bondstreet/from-url
[travis-image]: https://travis-ci.org/92bondstreet/from-url.svg?branch=master
[daviddm-url]: https://david-dm.org/92bondstreet/from-url.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/92bondstreet/from-url
