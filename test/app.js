/**
 * @license
 * Copyright (c) 2016 The IBM Research authors. All rights reserved.
 * This code may only be used under the MIT style license found at https://ibmresearch.github.io/LICENSE.txt
 * The complete set of authors may be found at https://ibmresearch.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://ibmresearch.github.io/CONTRIBUTORS.txt
 */

'use strict';

const path = require('path');

const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-polymer-init-ibm-element:app', () => {
  before(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        elementName: 'ibm-element',
        elementDescription: 'IBM element description',
        githubOrganization: 'IBMResearch'
      })
      .toPromise();
  });

  it('creates files', () => {
    assert.file([
      'demo/index.html',
      'test/.eslintrc.json',
      'test/ibm-element.html',
      'test/index.html',
      '.gitignore',
      '.eslintrc.json',
      'bower.json',
      'ibm-element.html',
      'index.html',
      'LICENSE',
      'README.md'
    ]);
  });
});
