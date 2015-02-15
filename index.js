'use strict';

var Nightmare = require('nightmare');
var chalk = require('chalk');

/**
 * from-url
 * From a given url, list resources requested
 * and check with pattern matching
 * @class FromUrl

/**
 * Display properties
 */

var wait = chalk.yellow('.');

/**
 * from-url Constructor
 *
 * @constructor FromUrl
 * @param {String} url  to fetch
 * @param {String} pattern to check
 * @param {Function} callback once page loaded
 * @return {FromUrl} this
 */

var FromUrl = function FromUrl(url, pattern, callback) {
  if (!(this instanceof FromUrl)) {
    return new FromUrl(url, pattern, callback);
  }

  this._goto(url, pattern, callback);
  return this;
};

/**
 * FromUrl prototype and properties
 */

var prototype = FromUrl.prototype;
prototype.constructor = FromUrl;
prototype.FromUrl = FromUrl;
prototype._assets = {};

/**
 * goto url with Nightmare
 *
 * @method _goto
 * @param {String} url  to fetch
 * @param {String} pattern to check
 * @param {Function} callback once page loaded
 * @return {FromUrl} this
 */

prototype._goto = function(url, pattern, callback) {
  var nightmare = new Nightmare();
  var fetch = this._fetch.bind(this, pattern);
  var self = this;

  nightmare
    .on('resourceRequested', fetch)
    .goto(url)
    .wait()
    .run(function(err, nightmare) {
      callback && callback(err, self._assets);
    });


  return this;
};

/**
 * Pattern match or not with resources
 *
 * @method _match
 * @param {String} asset of resources
 * @param {String} pattern to check
 * @return {Boolean} match or not
 */
prototype._match = function(asset, pattern) {
  return asset.indexOf(pattern) >= 0;
};

/**
 * Wait to list all requested ressources
 *
 * @method _fetch
 * @param {String} pattern    to check
 * @param {Object} requestData
 * @return {FromUrl} this
 */
prototype._fetch = function(pattern, requestData) {
  var url = requestData.url;

  this._assets[url] = this._match(url, pattern);
  process.stdout.write(wait);

  return this;
};

module.exports = FromUrl;
