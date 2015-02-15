#!/usr/bin/env node

'use strict';
var meow = require('meow');
var fromUrl = require('./');
var chalk = require('chalk');
var logSymbols = require('log-symbols');

/**
 * Print properties
 */
var info = chalk.yellow;
var success = logSymbols.success;
var error = logSymbols.error;


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

  process.stdout.write(info('\n\nRequested resources:\n\n'));
  for (var asset in assets){
    log(asset,assets[asset]);
  }
  process.stdout.write(info('\nDone.\n'));
};

var log = function log(asset, match){
  if(match === true){
    console.log(success, asset);
  }
  else{
    console.log(error, asset);
  }
};


/**
 * Start
 */
process.stdout.write(info('Fetching ' + url + ' in progress\n'));
fromUrl(url, pattern, stdout);
