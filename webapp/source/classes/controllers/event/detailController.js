define([], function() {
	'use strict';

	var EventDetailController = function($scope, $routeParams, EventRepository) {
		this.scope = $scope;
		this.scope.event = EventRepository.get($routeParams.eventId);
	}

	return EventDetailController;
});
