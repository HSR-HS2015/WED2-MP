define([], function() {
    'use strict';

    var EditGuestController = function($scope, $routeParams, $location, GuestRepository) {

        this.scope = $scope;

        var eventId = $routeParams.eventId;
        var guestId = $routeParams.guestId;


        GuestRepository.get(eventId,guestId,function(guest){
            this.scope.guest = guest;
        }.bind(this));


        this.scope.update = function(){
            GuestRepository.update(eventId, $scope.guest, function() {
                $location.path('/events/' + eventId );
            });
        };

    };

    return EditGuestController;
});