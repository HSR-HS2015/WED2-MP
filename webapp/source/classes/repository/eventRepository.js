define(['app/model/event'], function(Event) {
	'use strict';

	var EventRepository = function($http) {
		this.urls = {
			all: '/api/events',
			get: '/api/events/:eventId',
			add: '/api/events'
		}

		this.events = [];

		/**
		 * Get all events
		 *
		 * @return Event[]
		 */
		this.all = function(successCallback) {
			$http.get(this.urls.all)
				.success(function(data) {
					// map applys a function on every element in the array and returns the result as new array
					var events = data.events.map(function(eventDTO) {
						return Event.createFromDTO(eventDTO);
					});
					successCallback(events);
				});
		};
		/**
		 * Find event by identifier
		 *
		 * @param string identifier
		 * @return Event or null
		 */
		this.get = function(identifier) {
			var event = this.events.filter(function(event) {
		        return event.id == identifier
		    })[0];
			return (event) ? event : null;
		};
		/**
		 * Add event if not already in list
		 * @param Event event
		 * @return boolean if added successfull
		 */
		this.add = function(event) {
			if(this.get(event.id)) {
				return false;
			} else {
				this.events.push(event);
				return true;
			}
		};

		// initialization
		this.events.push(
			new Event(
				'Lunch',
				null,
				'everyone',
				'nothing',
				{
					name: 'Luncheteria',
					street: 'Bahnhofstrasse',
					zipCode: 8640,
					city: 'Rapperswil'
				},
				{
					begin: new Date('2015-10-10T12:00:00.000Z'),
					end: new Date('2015-10-10T13:00:00.000Z')
				},
				null,
				'76ba7b42-0534-4d1f-9c0c-5b07488b0c2c'
			)
		);
		this.events.push(
			new Event(
				'Dinner',
				null,
				'everyone',
				'nothing',
				{
					name: 'Dinneria',
					street: 'Bahnhofstrasse',
					zipCode: 8000,
					city: 'Zürich'
				},
				{
					begin: new Date('2015-04-05T18:00:00.000Z'),
					end: new Date('2015-04-05T20:00:00.000Z')
				},
				null,
				'e27726fa-5334-41d1-8db0-f3d9510fcf89'
			)
		);
		this.events.push(
			new Event(
				'Dinner',
				null,
				'everyone',
				'nothing',
				{
					name: 'Dinneria',
					street: 'Wedelweg',
					zipCode: 8640,
					city: 'Rapperswil'
				},
				{
					begin: new Date('2015-12-08T17:00:00.000Z'),
					end: new Date('2015-12-08T19:00:00.000Z')
				},
				null,
				'39f0881d-ce23-44e9-81c3-1c8157380894'
			)
		);
	};

	return EventRepository;
});
