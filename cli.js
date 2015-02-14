#!/usr/bin/env node
'use strict';
var meow = require('meow');
var fromUrl = require('./');

var cli = meow({
  'help': [
    'Usage',
    '  from-url --url=<input> --pattern=<input>',
    '',
    'Example',
    '  from-url --url=https://github.com/ --pattern=assets-cdn.github.com'
  ].join('\n')
});

var url = cli.flags.url;
var pattern = cli.flags.pattern;

fromUrl(url);
