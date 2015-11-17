define(['frameworks/angular', 'app/controllers/event/listController', 'app/controllers/event/detailController','app/controllers/event/newController','app/repository/eventRepository', 'libraries/angularRoute', 'app/controllers/guest/newController'],
	function (Angular, EventListController, EventDetailController, NewEventController, EventRepository, NewGuestController) {
	'use strict';

	/* modules */
	var Lafete = Angular.module('lafete',['ngRoute']);

	Lafete.value('Configuration', {
		urls: {
			all: '/api/events',
			byId: '/api/events/{eventId}',
			addEvent: '/api/events',
			allGuests: 'api/events/{eventId}/guests',
			guestbyId: 'api/events/{eventId}/guests/{guestId}',
			addGuest: '/api/events/{eventId}/guests'
		}
	});

	/* services */
	EventRepository.$inject = ['$http', 'Configuration'];
	Lafete.service('EventRepository', EventRepository);

	/* controllers */
	EventListController.$inject = ['$scope', 'EventRepository'];
	Lafete.controller('EventListController', EventListController);

	EventDetailController.$inject = ['$scope', '$routeParams', 'EventRepository'];
	Lafete.controller('EventDetailController', EventDetailController);

	NewEventController.$inject = ['$scope', '$location', 'EventRepository'];
	Lafete.controller('NewEventController', NewEventController);

	/* routes */
	Lafete.config(function($routeProvider) {

		$routeProvider.when('/events', {
			controller: 'EventListController',
			templateUrl: '/views/event/list.html'
		})
		.when('/events/new', {
			controller: 'NewEventController',
			templateUrl: '/views/event/edit.html'
		})
		.when('/events/:eventId', {
			controller: 'EventDetailController',
			templateUrl: '/views/event/detail.html'
		})
		.when('/events/:eventId/new', {
			controller: 'newGuestController',
			templateUrl: '/views/guest/edit.html'
		})
		.otherwise({
			redirectTo: '/events'
		});
	});

	return Lafete;
});
