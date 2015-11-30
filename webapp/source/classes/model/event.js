define(['app/services/uuidService'], function(UUIDService) {
	'use strict';

	var Event = function(name, description, targetGroup, contributionsDescription, location, times, maximalAmountOfGuests, id) {
		this.id = id || UUIDService.getRandomUuid();
		this.name = name;
		this.description = description;
		this.targetGroup = targetGroup;
		this.contributionsDescription = contributionsDescription;
		this.location = location;
		this.times = times;
		this.maximalAmountOfGuests = maximalAmountOfGuests;

		Object.defineProperty(this, 'begin', {
			get: function() {
				return this.times.begin;
			},
			set: function(begin) {
				this.times.begin = begin;
			}
		});

		Object.defineProperty(this, 'end', {
			get: function() {
				return this.times.end;
			},
			set: function(end) {
				this.times.end = end;
			}
		});
	};

	/**
	 * Create Event object from data transfer object (json object)
	 */
	Event.createFromDTO = function(eventDTO) {
		var event = new Event(
			eventDTO.name,
			eventDTO.description,
			eventDTO.targetGroup,
			eventDTO.contributionsDescription,
			eventDTO.location,
			{'begin':new Date(eventDTO.times.begin),'end':new Date(eventDTO.times.end)},
			eventDTO.maximalAmountOfGuests,
			eventDTO.id
		);
		if(eventDTO.guests) {
			event.guests = eventDTO.guests;
		}
		return event;
	};


	return Event;
});
