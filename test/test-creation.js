/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('env-config generator', () => {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), err => {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('env-config:app', [
                '../../app',
                '../../env'
            ]);
            done();
        });
    });

    it('creates expected files and directories', function (done) {
        var expected = [
            'config/',
            'config/environments/',
            'config/environments/development.json'
        ];

        this.app.options['skip-install'] = true;
        this.app.run({}, () => {
            helpers.assertFiles(expected);
            done();
        });
    });
});

describe('env-config env sub-generator', () => {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), err => {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('env-config:env', [
                '../../env'
            ],
            ['staging']);
            done();
        });
    });

    it('creates expected files and directories', function (done) {
        var expected = [
            'config/environments/staging.json'
        ];

        this.app.options['skip-install'] = true;
        this.app.run({}, () => {
            helpers.assertFiles(expected);
            done();
        });
    });
});

describe('env-config angular sub-generator', () => {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), err => {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('env-config:angular', [
                '../../angular'
            ],
            ['config']);
            done();
        });
    });

    it('creates expected files and directories', function (done) {
        var expected = [
            'config/config.js'
        ];

        this.app.options['skip-install'] = true;
        this.app.run({}, () => {
            helpers.assertFiles(expected);
            done();
        });
    });
});
