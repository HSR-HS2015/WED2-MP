define(['app/model/event','app/model/guest'], function(Event,Guest) {
	'use strict';

	var GuestRepository = function($http, Configuration) {

		/**
		 * Update guest in event
		 * @param Event event
		 * @param Guest guest
		 */

		this.update = function(event,guest,successCallback, errorCallback) {
			$http.post(Configuration.urls.guestbyId.replace('{eventId}', event.id).replace('{guestId}', guest.id))
				.success(function(guestDTO) {
					successCallback(Event.createFromDTO(guestDTO));
				})
				.error(errorCallback);
		};

		/**
		 * Add guest to event
		 * @param Event event
		 * @param Guest guest
		 */

		this.add = function(event,guest,successCallback, errorCallback) {
			$http.post(Configuration.urls.addGuest.replace('{eventId}',event.id),guest)
				.success(function(guestDTO) {
					successCallback(Guest.createFromDTO(guestDTO));
				})
				.error(errorCallback);
		};

		/**
		 * Get All Guests of specific Event
		 * @param Event event
		 * @param Guest guest
		 */

		this.get = function(event,guest,successCallback, errorCallback) {
			$http.get(Configuration.urls.guestbyId.replace('{eventId}', event.eventid).replace('{guestId}', guest.id))
				.success(function(guestDTO) {
					successCallback(Guest.createFromDTO(guestDTO));
				})
				.error(errorCallback);
		};
	};

	return GuestRepository;
});
