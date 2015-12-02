define(['app/model/guest'], function(Guest) {
    'use strict';

    var NewGuestController = function($scope, $routeParams, $location, GuestRepository) {

        this.scope = $scope;

        var eventId = $routeParams.eventId;

        this.scope.eventId = eventId;
        this.scope.guest = new Guest();
        this.scope.add = function(){
            GuestRepository.add(eventId,$scope.guest, function(){
                    $location.path('/events/'+eventId);
                }
            );
        };
    };

    return NewGuestController;
});
