/*global describe, it */
'use strict';
var assert = require('assert');
var fromUrl = require('../index')();

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
      assert.equal(fromUrl instanceof fromUrl.FromUrl, true, '');
    });
  });


  describe('_match()', function(){
    it('should detect matching between url and hostname', function () {
      var match = fromUrl._match(asset, hostname);
      assert.equal(match, true, hostname + ' matches with ' + asset);
    });
    it('should detect matching between url and pattern', function () {
      var match = fromUrl._match(asset, pattern);
      assert.equal(match, true, hostname + ' matches with ' + asset);
    });
    it('should detect a non-matching between url and hostname', function () {
      var match = fromUrl._match(asset, libHostname);
      assert.equal(match, false, libHostname + ' doesn\'t match with ' + asset);
    });
    it('should detect a non-matching between url and pattern', function () {
      var match = fromUrl._match(asset, libPattern);
      assert.equal(match, false, libPattern + ' doesn\'t match with ' + asset);
    });
  });

  describe('_fetch()', function(){
    it('should save the url with matching value', function () {
      var assets = [];
      fromUrl._fetch(hostname, {'url': asset});
      assets = fromUrl._assets;
      assert.ok(assets[asset], 'url saved');
    });
  });

});
