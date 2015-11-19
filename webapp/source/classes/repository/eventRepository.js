define(['app/model/event','app/model/guest'], function(Event,Guest) {
	'use strict';

	var EventRepository = function($http, Configuration) {
		/**
		 * Get all events
		 *
		 * @return Event[]
		 */
		this.all = function(successCallback, errorCallback) {
			$http.get(Configuration.urls.all)
				.success(function(data) {
					// map applys a function on every element in the array and returns the result as new array
					var events = data.events.map(function(eventDTO) {
						return Event.createFromDTO(eventDTO);
					});
					successCallback(events);
				})
				.error(errorCallback);
		};

		/**
		 * Find event by identifier
		 *
		 * @param string identifier
		 */
		this.get = function(event, successCallback, errorCallback) {
			$http.get(Configuration.urls.byId.replace('{eventId}', event.id))
				.success(function(eventDTO) {
					successCallback(Event.createFromDTO(eventDTO));
				})
				.error(errorCallback);
		};


		/**
		 * Add event
		 * @param Event event
		 */
		this.add = function(event, successCallback, errorCallback) {
			$http.post(Configuration.urls.add, event)
				.success(function(eventDTO) {
					successCallback(Event.createFromDTO(eventDTO));
				})
				.error(errorCallback);
		};


		this.updateGuest = function(event,guest,successCallback, errorCallback) {
			$http.post(Configuration.urls.guestbyId.replace('{eventId}', event.id).replace('{guestId}', guest.id))
				.success(function(guestDTO) {
					successCallback(Event.createFromDTO(guestDTO));
				})
				.error(errorCallback);
		};

		this.addGuest = function(event,guest,successCallback, errorCallback) {
			$http.post(Configuration.urls.addGuest.replace('{eventId}',event.id),guest)
				.success(function(guestDTO) {
					successCallback(Guest.createFromDTO(guestDTO));
				})
				.error(errorCallback);
		};

		this.getGuest = function(event,guest,successCallback, errorCallback) {
			$http.get(Configuration.urls.guestbyId.replace('{eventId}', event.eventid).replace('{guestId}', guest.id))
				.success(function(guestDTO) {
					successCallback(Guest.createFromDTO(guestDTO));
				})
				.error(errorCallback);
		};
	};

	return EventRepository;
});
