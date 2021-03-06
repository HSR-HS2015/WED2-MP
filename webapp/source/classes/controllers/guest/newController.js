define(['app/model/guest'], function(Guest) {
    'use strict';

    var NewGuestController = function($scope, $routeParams, $location, GuestRepository, EventRepository) {

        this.scope = $scope

        var eventId = $routeParams.eventId;

        this.scope.eventId = eventId;
        this.scope.guest = new Guest();
        this.scope.add = function(){

            EventRepository.get(eventId, function(event) {
                var amountOfGuests = 0;
               event.guests.forEach(function (guest) {
                    if(!guest.canceled) {
                        amountOfGuests++;
                    }
               });

                if(amountOfGuests < event.maximalAmountOfGuests) {
                    GuestRepository.add(eventId,$scope.guest, function(){
                            $location.path('/events/'+eventId);
                        }
                    );
                } else {
                    window.alert("maximal amount of guests reached");
                }

            });
        };
    };

    return NewGuestController;
});
