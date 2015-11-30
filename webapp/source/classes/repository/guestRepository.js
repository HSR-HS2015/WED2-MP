define(['app/model/guest'], function(Guest) {
	'use strict';

	var GuestRepository = function($http, Configuration) {

		this.urls = {
			get: '/api/events/{eventId}/guests/{guestId}',
			add: '/api/events/{eventId}/guests'
		}

		/**
		 * Update guest in event
		 * @param id eventId
		 * @param Guest guest
		 */

		this.update = function(eventId,guest,successCallback) {
			$http.post(this.urls.get.replace('{eventId}', eventId).replace('{guestId}', guest.id), guest)
				.success(function () {
					successCallback(true);
				});
		};

		/**
		 * Add guest to event specific
		 * @param id eventId
		 * @param Guest guest
		 */

		this.add = function(eventId,guest,successCallback) {
			$http.post(this.urls.add.replace('{eventId}', eventId),guest)
				.success(function() {
					successCallback(true);
				});
		};

		/**
		 * Get All Guests of specific Event
		 * @param id eventId
		 * @param Guest guest
		 */

		this.get = function (eventId, guestId, successCallback) {
			$http.get(this.urls.get.replace('{eventId}', eventId).replace('{guestId}', guestId))
				.success(function(guestDTO){
					successCallback(Guest.createFromDTO(guestDTO));
				});
		};
	};

	return GuestRepository;
});
