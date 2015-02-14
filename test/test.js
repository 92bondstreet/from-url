/*global describe, it */
'use strict';
var assert = require('assert');
var fromUrl = require('../');


/**
 * Some values for testing
 */

var asset = 'https://assets-cdn.github.com/index.js';
var hostname = 'assets-cdn.github.com';
var libHostname = 'lib-cdn.github.com';
var pattern = 'cdn';
var libPattern = 'lib';


describe('from-url node module', function () {
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
});
