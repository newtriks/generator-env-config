/*global describe, beforeEach, it*/
'use strict';

var assert = require('assert');

describe('env-config generator', () => {
    it('can be imported without blowing up', () => {
        var app = require('../app');
        assert(app !== undefined);
    });

    it('env can be imported without blowing up', () => {
        var app = require('../env');
        assert(app !== undefined);
    });

    it('angular can be imported without blowing up', () => {
        var app = require('../angular');
        assert(app !== undefined);
    });
});
