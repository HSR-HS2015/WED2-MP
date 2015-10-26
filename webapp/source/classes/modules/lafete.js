/**
 * Created by silvanadrian on 25/10/15.
 */

// declare dependency to angular (similar to import in java)


define(['frameworks/angular', 'app/controllers/eventListController'],
    function (Angular, EventListController) {
        'use strict';

        var Lafete = Angular.module('lafete', []);
        Lafete.controller('EventListController', EventListController);
        EventListController.$inject = ['$scope'];

        return Lafete;
    });