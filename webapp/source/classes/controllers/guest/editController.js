define([], function() {
    'use strict';

    var EditGuestController = function($scope, $routeParams, $location, EventRepository) {

        this.scope = $scope;

        EventRepository.get(
            { id:$routeParams.eventId },
            function(event) {
                this.scope.event = event;
            }.bind(this),
            function() {}
        );

        console.log($routeParams.guestId);
        this.scope = $scope;
        EventRepository.getGuest(
            { id:$routeParams.guestId },
            function(guest) {
                this.scope.guest = guest;
            }.bind(this),
            function() {}
        );

    };

    return EditGuestController;
});