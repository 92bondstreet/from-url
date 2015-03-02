/*global describe, it */
'use strict';
var assert = require('assert');
// We use createFromUrl to expose the constructor
var from = require('../index').createFromUrl();

/**
 * Some values for testing
 */

var asset = 'https://assets-cdn.github.com/index.js';
var hostname = 'assets-cdn.github.com';
var libHostname = 'lib-cdn.github.com';
var pattern = 'cdn';
var libPattern = 'lib';

describe('from-url node module', function () {

  describe('constructor', function(){
    it('should be a FromUrl instance', function () {
      assert.equal(from instanceof from.FromUrl, true, '');
    });
  });


  describe('_match()', function(){
    it('should detect matching between url and hostname', function () {
      var match = from._match(asset, hostname);
      assert.equal(match, true, hostname + ' matches with ' + asset);
    });
    it('should detect matching between url and pattern', function () {
      var match = from._match(asset, pattern);
      assert.equal(match, true, hostname + ' matches with ' + asset);
    });
    it('should detect a non-matching between url and hostname', function () {
      var match = from._match(asset, libHostname);
      assert.equal(match, false, libHostname + ' doesn\'t match with ' + asset);
    });
    it('should detect a non-matching between url and pattern', function () {
      var match = from._match(asset, libPattern);
      assert.equal(match, false, libPattern + ' doesn\'t match with ' + asset);
    });
  });

  describe('_fetch()', function(){
    it('should save the url with matching value', function () {
      var assets = [];
      from._fetch(hostname, {'url': asset});
      assets = from._assets;
      assert.ok(assets[asset], 'url saved');
    });
  });

});
