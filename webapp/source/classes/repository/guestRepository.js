define(['app/model/guest'], function(Guest) {
	'use strict';

	var GuestRepository = function($http) {

		this.urls = {
			get: '/api/events/{eventId}/guests/{guestId}',
			add: '/api/events/{eventId}/guests'
		}

		/**
		 * Update guest in event
		 * @param id eventId
		 * @param Guest guest
		 */

		this.update = function(eventId,guest,successCallback,errorCallback) {
			$http.post(this.urls.get.replace('{eventId}', eventId).replace('{guestId}', guest.id), guest)
				.success(function () {
					successCallback(Guest.createFromDTO(guest));
				})
				.error(errorCallback);
		};

		/**
		 * Add guest to event specific
		 * @param id eventId
		 * @param Guest guest
		 */

		this.add = function(eventId,guest,successCallback,errorCallback) {
			$http.post(this.urls.add.replace('{eventId}', eventId),guest)
				.success(function() {
					successCallback(Guest.createFromDTO(guest));
				})
				.error(errorCallback);
		};

		/**
		 * Get All Guests of specific Event
		 * @param id eventId
		 * @param Guest guest
		 */

		this.get = function (eventId, guestId, successCallback,errorCallback) {
			$http.get(this.urls.get.replace('{eventId}', eventId).replace('{guestId}', guestId))
				.success(function(guestDTO){
					successCallback(Guest.createFromDTO(guestDTO));
				})
				.error(errorCallback);
		};
	};

	return GuestRepository;
});
