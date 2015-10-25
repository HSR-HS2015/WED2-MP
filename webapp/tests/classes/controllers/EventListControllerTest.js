/**
 * Created by silvanadrian on 25/10/15.
 */

define([], function () {
    'use strict';
    beforeEach(module("lafete"));
    describe('EventListController', function() {
        var scope = {};
        var eventController = new EventListController(scope);
        describe('property scope', function() {
            it('contains 3 events', function() {
                expect(length(eventController)).toBe(3);
            });
        });
    });
});