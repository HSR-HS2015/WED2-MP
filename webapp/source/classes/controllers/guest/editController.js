define([], function() {
    'use strict';

    var EditGuestController = function($scope, $routeParams, $location, GuestRepository, EventRepository) {

        this.scope = $scope;

        EventRepository.get(
            { id:$routeParams.eventId },
            function(event) {
                this.scope.event = event;
            }.bind(this),
            function() {}
        );


        GuestRepository.get(
            { eventid:$routeParams.eventId },
            { id:$routeParams.guestId },
            function(event,guest) {
                this.scope.guest = event;
            }.bind(this),
            function() {}
        );


        this.scope.updateGuest = function(Oldevent,newGuest) {
            GuestRepository.update(
                Oldevent,newGuest,
                function(event) {
                    $location.path('/events/' + $routeParams.eventId);
                }
                ,
                function() {}
            );
        };

    };

    return EditGuestController;
});