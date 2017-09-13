/**
 * @license
 * Copyright (c) 2016 The IBM Research authors. All rights reserved.
 * This code may only be used under the MIT style license found at https://ibmresearch.github.io/LICENSE.txt
 * The complete set of authors may be found at https://ibmresearch.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://ibmresearch.github.io/CONTRIBUTORS.txt
 */

'use strict';

const yeoman = require('yeoman-generator');

function generateDefaultElementName(appname) {
  if (appname.includes('-')) {
    return appname;
  } else {
    return `${appname}-element`;
  }
}

function generateDefaultElementClassName(defaultElementName) {
  const words = defaultElementName.split('-');
  const upperCaseWords = words.map((word) => {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
  });

  return upperCaseWords.join('');
}

module.exports = yeoman.Base.extend({
  initializing: function() {
    // Yeoman replaces dashes with spaces. We want dashes.
    this.appname = this.appname.replace(/\s+/g, '-');
  },

  prompting: function() {
    const that = this;
    const defaultElementName = generateDefaultElementName(this.appname);
    const prompts = [
      {
        name: 'elementName',
        type: 'input',
        message: 'Name of the element',
        default: defaultElementName,
        validate(elementName) {
          const elementNameContainsHyphen = elementName.includes('-');
          if (!elementNameContainsHyphen) {
            that.log('\nCustom elements must include a hyphen in their name. Please, try again.');
          }

          return elementNameContainsHyphen;
        }
      },
      {
        name: 'elementClassName',
        type: 'input',
        message: 'Name of the element class',
        default: generateDefaultElementClassName(defaultElementName)
      },
      {
        name: 'elementDescription',
        type: 'input',
        message: 'Brief description of the element'
      },
      {
        name: 'githubOrganization',
        type: 'input',
        message: 'GitHub organization',
        default: 'IBMResearch'
      }
    ];

    return this.prompt(prompts).then(function(props) {
      this.props = props;
    }.bind(this));
  },

  writing: function() {
    this.fs.copy(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore')
    );

    this.fs.copy(
      this.templatePath('.eslintrc.json'),
      this.destinationPath('.eslintrc.json')
    );

    this.fs.copy(
      this.templatePath('.travis.yml'),
      this.destinationPath('.travis.yml')
    );

    this.fs.copy(
      this.templatePath('test/.eslintrc.json'),
      this.destinationPath('test/.eslintrc.json')
    );

    this.fs.copyTpl(
      this.templatePath() + '/**/!(_)*',
      this.destinationPath(),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('_element.html'),
      this.destinationPath(this.props.elementName + '.html'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('test/_element.html'),
      this.destinationPath('test/' + this.props.elementName + '.html'),
      this.props
    );
  },

  install: function() {
    this.installDependencies({
      npm: false
    });
  }
});
