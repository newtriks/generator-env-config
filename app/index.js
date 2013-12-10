'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var EnvConfigGenerator = module.exports = function EnvConfigGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);
  this.hookFor('env-config:env', { args: args.length ? args : ['development'] });
};

util.inherits(EnvConfigGenerator, yeoman.generators.Base);

EnvConfigGenerator.prototype.app = function app() {
  this.mkdir('config');
};
