define(['tests/factories/eventFactory', 'app/model/event', 'app/repository/eventRepository', 'libraries/angularMocks'],
	function (EventFactory, Event, EventRepository, AngularMocks) {
	'use strict';

	describe('EventRepository', function() {
		var event,events, eventRepository, $http, $httpBackend;

		// setup
		beforeEach(AngularMocks.inject(function($injector) {
			$http = $injector.get('$http');
			$httpBackend = $injector.get('$httpBackend');

			eventRepository = new EventRepository($http);
			event = EventFactory.createEvent(1);
			events = [EventFactory.createEvent(1), EventFactory.createEvent(2)];

			$httpBackend.when('GET', '/api/events/1').respond(event);
			$httpBackend.when('GET', '/api/events/null').respond(404, 'Event not found.');
			$httpBackend.when('GET', '/api/events/abcdedf').respond(404, 'Event not found.');
			$httpBackend.when('POST', '/api/events').respond(event);
      $httpBackend.when('POST', '/api/events/1').respond(event);
			$httpBackend.when('GET', eventRepository.urls.all).respond({
				events: events
			});
		}));

		afterEach(function() {
			$httpBackend.verifyNoOutstandingExpectation();
			$httpBackend.verifyNoOutstandingRequest();
		});

		describe('get()', function() {
			describe('by object id', function() {
				it('returns the object', function() {
					eventRepository.get(event.id, function(newEvent){
						expect(event.id).toEqual(newEvent.id);
					}, function(){});
					$httpBackend.flush();
				});
			});

			describe('by inexistent object id', function() {
				it('returns null', function() {
					eventRepository.get(null, function() {
					}, function(error){
						expect(error).toEqual('Event not found.');
					});

					eventRepository.get('abcdedf', function() {
					}, function(error){
						expect(error).toEqual('Event not found.');
					});
					$httpBackend.flush();
				});
			});
		});

		describe('all()', function() {

			it('returns an Array', function() {
				eventRepository.all(function(events) {
					expect(events).toEqual(jasmine.any(Array));
				}, function(){});
				$httpBackend.flush();
			});

			it('returns two events', function() {
				eventRepository.all(function(events) {
					expect(events.length).toBe(2);
				}, function(){});
				$httpBackend.flush();
			});

			it('returns real javascript objects', function() {
				eventRepository.all(function(events) {
					expect(events[0]).toEqual(jasmine.any(Event));
					expect(events[1]).toEqual(jasmine.any(Event));
				}, function(){});
				$httpBackend.flush();
			});
		});

		describe('add()', function() {
					it('inserts element', function() {
						eventRepository.add(event, function(newEvent){
							expect(newEvent.id).toEqual(event.id);
						}, function(){});
						$httpBackend.flush();
					});
				});

	});
});
