define(['app/model/event'], function(Event) {
	'use strict';

	var EventRepository = function($http) {

		this.urls = {
			all: '/api/events',
			get: '/api/events/{eventId}',
			add: '/api/events'
		}

		/**
		 * Get all events
		 *
		 * @return Event[]
		 */
		this.all = function(successCallback, errorCallback) {
			$http.get(this.urls.all)
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
		 * Find event by eventId
		 *
		 * @param string eventId
		 */
		this.get = function (eventId, successCallback,errorCallback) {
			$http.get(this.urls.get.replace('{eventId}', eventId))
				.success(function(eventDTO) {
					successCallback(Event.createFromDTO(eventDTO));
				})
				.error(errorCallback);
		}

		/**
		 * Add event
		 * @param Event event
		 */
		this.add = function(event, successCallback, errorCallback) {
			$http.post(this.urls.add, event)
				.success(function(eventDTO) {
					successCallback(Event.createFromDTO(eventDTO));
				})
				.error(errorCallback);
		};


		/**
		 * Update Event
		 * @param Event event
		 */
		this.update = function(event,successCallback,errorCallback){
			$http.post(this.urls.get.replace('{eventId}',event.id),event)
				.success(function(){
					successCallback(Guest.createFromDTO(event));
				})
				.error(errorCallback);
		};
	};

	return EventRepository;
});
