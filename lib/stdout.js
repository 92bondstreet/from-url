'use strict';

var chalk = require('chalk');
var logSymbols = require('log-symbols');

/**
 * Print properties
 */
var info = chalk.yellow;
var success = chalk.green;
var error = chalk.red;
var symSuccess = logSymbols.success;
var symError = logSymbols.error;

/**
 * Log assets with symbols
 *
 * @method logWithSymbols
 * @param {String} asset    Asset url
 * @param {match} Boolean   asset with pattern
 */

var logWithSymbols = function logWithSymbols(asset, match) {
  if (match === true) {
    console.log(symSuccess, asset);
  } else {
    console.log(symError, asset);
  }
};

/**
 * Log assets with colors
 *
 * @method logWithColors
 * @param {String} asset    Asset url
 * @param {Boolean} match   asset with pattern
 */

var logWithColors = function logWithColors(asset, match) {
  if (match === true) {
    process.stdout.write(success(asset) + '\n');
  } else {
    process.stdout.write(error(asset) + '\n');
  }
};

/**
 * Stdout printer
 *
 * @method printer
 * @param {Object} assets  List of assets
 * @param {Function} how   How to print
 */

var printer = function printer(assets, how){
  process.stdout.write(info('\n\nRequested resources:\n\n'));
  for (var asset in assets) {
    how(asset, assets[asset]);
  }
  process.stdout.write(info('\nDone.\n'));
};


/**
 * Stdout with symbols
 *
 * @method symbols
 * @param  {Object} err    Error
 * @param  {Object} assets List of assets
 */
var symbols = function symbols(err, assets) {
  if (err) {
    console.log(err.stack);
  }

  printer(assets, logWithSymbols);
};

/**
 * Stdout with colors
 *
 * @method colors
 * @param  {Object} err    Error
 * @param  {Object} assets List of assets
 */
var colors = function colors(err, assets) {
  if (err) {
    console.log(err.stack);
  }

  printer(assets, logWithColors);
};

module.exports = symbols;
module.exports.colors = colors;
module.exports.symbols = symbols;
