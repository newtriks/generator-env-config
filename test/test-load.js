/*global describe, beforeEach, it*/
'use strict';

var assert = require('assert');

describe('env-config generator', function () {
    it('can be imported without blowing up', function () {
        var app = require('../app');
        assert(app !== undefined);
    });

    it('env can be imported without blowing up', function () {
        var app = require('../env');
        assert(app !== undefined);
    });

    it('angular can be imported without blowing up', function () {
        var app = require('../angular');
        assert(app !== undefined);
    });
});
