/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('env-config generator', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('env-config:app', [
                '../../app',
                '../../env'
            ]);
            done();
        }.bind(this));
    });

    it('creates expected files and directories', function (done) {
        var expected = [
            'config/',
            'config/environments/',
            'config/environments/development.json'
        ];

        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });
});

describe('env-config env sub-generator', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('env-config:env', [
                '../../env'
            ],
            ['staging']);
            done();
        }.bind(this));
    });

    it('creates expected files and directories', function (done) {
        var expected = [
            'config/environments/staging.json'
        ];

        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });
});

describe('env-config angular sub-generator', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('env-config:angular', [
                '../../angular'
            ],
            ['config']);
            done();
        }.bind(this));
    });

    it('creates expected files and directories', function (done) {
        var expected = [
            'config/config.js'
        ];

        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });
});
