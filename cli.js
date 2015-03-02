#!/usr/bin/env node

'use strict';
var meow = require('meow');
var from = require('./');
var chalk = require('chalk');
var stdout = require('./lib/stdout');

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
 * Check arguments and fallback to the cli Helper
 */

if (!url || !pattern){
  cli.showHelp();
}

/**
 * Start
 */
process.stdout.write(info('Fetching ' + url + ' in progress\n'));
from(url, pattern, stdout);
