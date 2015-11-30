define([], function() {
    'use strict';

    var NewGuestController = function($scope, $routeParams, $location, GuestRepository) {

        this.scope = $scope;

        GuestRepository.get(
            { id:$routeParams.eventId },
            function(event) {
                this.scope.event = event;
            }.bind(this),
            function() {}
        );


        this.scope.addGuest = function(Oldevent,newGuest) {
            window.alert(Oldevent.guests.length);
            if(Oldevent.guests.length < Oldevent.maximalAmountOfGuests) {
                GuestRepository.add(
                    Oldevent,newGuest,
                    function(event) {
                        $location.path('/events/' + $routeParams.eventId);
                    }
                    ,
                    function() {}
                );
            }

        };
    };

    return NewGuestController;
});