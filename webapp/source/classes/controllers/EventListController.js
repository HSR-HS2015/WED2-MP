/**
 * Created by silvanadrian on 25/10/15.
 */

define([], function() {

    var EventListController = function($scope) {
        $scope.events = [
            { name: 'Lunch', place: 'Rapperswil', date: new Date('2015-10-10T10:00:00.000Z') },
            { name: 'Dinner', place: 'Zürich', date: new Date('2015-04-05T16:00:00.000Z') },
            { name: 'Dinner', place: 'Rapperswil', date: new Date('2015-12-08T17:00:00.000Z') }
        ];
    };

    // ListController export
    return EventListController;
});