define([], function() {
    'use strict';

    var EditEventController = function($scope, $routeParams, $location, EventRepository) {

        this.scope = $scope;

        var eventId = $routeParams.eventId;

        this.scope.event = EventRepository.get(eventId,function(event){
            this.scope.event = event;
        }.bind(this));


        this.scope.update = function(){
            EventRepository.update($scope.event, function(){
                    $location.path('/events/' + eventId)
                }
            );
        };

    };

    return EditEventController;
});