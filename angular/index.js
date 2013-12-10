'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var AngularGenerator = module.exports = function AngularGenerator(args, options, config) {
  yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(AngularGenerator, yeoman.generators.NamedBase);

AngularGenerator.prototype.files = function files() {
  this.template('_config.js', 'config/' + this.name + '.js');
};
