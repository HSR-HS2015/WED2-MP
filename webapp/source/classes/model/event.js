define(['app/services/uuidService'], function(UUIDService) {
	'use strict';

	var Event = function(name, description, targetGroup, contributionsDescription, location, times, maximalAmountOfGuests, id, guests) {
		this.id = id || UUIDService.getRandomUuid();
		this.name = name;
		this.description = description;
		this.targetGroup = targetGroup;
		this.contributionsDescription = contributionsDescription;
		this.location = location;
		this.times = times;
		this.maximalAmountOfGuests = maximalAmountOfGuests || 2;
		this.guests=guests || [];


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
		return new Event(
			eventDTO.name,
			eventDTO.description,
			eventDTO.targetGroup,
			eventDTO.contributionsDescription,
			eventDTO.location,
			eventDTO.times,
			eventDTO.maximalAmountOfGuests,
			eventDTO.id,
			eventDTO.guests
		);

	};


	return Event;
});
