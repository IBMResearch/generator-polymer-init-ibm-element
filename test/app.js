/*
 * @license
 * Copyright (c) 2016 The IBM Research Emergent Solutions authors. All rights reserved.
 * This code may only be used under the MIT style license found at https://ibmresearch.github.io/LICENSE.txt
 * The complete set of authors may be found at https://ibmresearch.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://ibmresearch.github.io/CONTRIBUTORS.txt
 */

'use strict';

var path = require('path');

var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-polymer-init-ibm-element:app', function() {
  before(function() {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        name: 'ibm-element',
        description: 'IBM element description'
      })
      .toPromise();
  });

  it('creates files', function() {
    assert.file([
      'demo/index.html',
      'test/ibm-element.html',
      'test/index.html',
      '.gitignore',
      'ibm-element.html',
      'bower.json',
      'index.html',
      'LICENSE',
      'README.md'
    ]);
  });
});
