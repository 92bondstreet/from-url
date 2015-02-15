#!/usr/bin/env node

'use strict';
var meow = require('meow');
var fromUrl = require('./');
var chalk = require('chalk');


/**
 * Print properties
 */
var info = chalk.yellow;

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

/**
 * Print list of assets
 */

var stdout = function stdout(err, assets) {
  if (err) {
    console.log(err.stack);
  }
  console.log(assets);
};


/**
 * Start
 */
process.stdout.write(info('Fetching ' + url + ' in progress\n'));
fromUrl(url, pattern, stdout);
