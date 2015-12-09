define(['app/model/guest'], function(Guest) {
    'use strict';

    var NewGuestController = function($scope, $routeParams, $location, GuestRepository, EventRepository) {

        this.scope = $scope;

        var eventId = $routeParams.eventId;

        this.scope.eventId = eventId;
        this.scope.guest = new Guest();
        this.scope.add = function(){


            var amountOfGuests = 0;
            var e;

            EventRepository.get(eventId, function(event) {
                //window.alert(event.maximalAmountOfGuests);
                e = event;
               event.guests.forEach(function (guest) {
                    if(!guest.canceled) {
                        amountOfGuests++;
                    }
               });

            });

            window.alert(amountOfGuests);

            if(amountOfGuests < e.maximalAmountOfGuests) {
                GuestRepository.add(eventId,$scope.guest, function(){
                        $location.path('/events/'+eventId);
                    }
                );
            } else {
                window.alert("maximal amount of guests reached");
            }


        };
    };

    return NewGuestController;
});
