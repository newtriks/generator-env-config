'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var EnvGenerator = module.exports = function EnvGenerator(args, options, config) {
  yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(EnvGenerator, yeoman.generators.NamedBase);

EnvGenerator.prototype.files = function files() {
  this.mkdir('config/environments');
  this.template('_development.json', 'config/environments/' + this.name + '.json');
};
