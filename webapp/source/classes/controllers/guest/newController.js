define([], function() {
    'use strict';

    var NewGuestController = function($scope, $routeParams, $location, EventRepository) {

        this.scope = $scope;

        EventRepository.get(
            { id:$routeParams.eventId },
            function(event) {
                this.scope.event = event;
            }.bind(this),
            function() {}
        );


        this.scope.addGuest = function(Oldevent,newGuest) {
            EventRepository.addGuest(
                Oldevent,newGuest,
                function(event) {
                    $location.path('/events/' + $routeParams.eventId);
                }
                ,
                function() {}
            );
        };
    };

    return NewGuestController;
});