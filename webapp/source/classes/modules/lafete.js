/**
 * Created by silvanadrian on 25/10/15.
 */

// declare dependency to angular (similar to import in java)
define(['frameworks/angular', 'application/listController'], function(Angular, EventListController) {

    // Create new empty app/module named 'lafete'
    var Lafete = Angular.module('lafete', []);

    EventListController.$inject = ['$scope'];

    Lafete.controller( // Controller
        'EventListController',
        EventListController
    );

    // export module to use it in other classes
    return Lafete;
});