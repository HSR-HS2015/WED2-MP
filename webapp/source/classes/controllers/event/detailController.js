define([], function() {
	'use strict';

	var EventDetailController = function($scope, $routeParams, EventRepository, GuestRepository) {
		this.scope = $scope;

		var eventId = $routeParams.eventId;
		EventRepository.get(
			eventId,
			function(event) {
				this.scope.event = event;
			}.bind(this),
			function() {}
		);

		this.scope.cancel = function(guest) {
			guest.canceled = true;
			GuestRepository.update(eventId, guest, function() {
				$location.path('/events/' + $routeParams.eventId );
			});


		}

	}

	return EventDetailController;
});