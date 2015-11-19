define(['frameworks/angular', 'app/controllers/event/listController',
		'app/controllers/event/detailController','app/controllers/event/newController',
		'app/repository/eventRepository', 'app/controllers/guest/newController', 'app/controllers/guest/editController'
		, 'libraries/angularRoute'],
	function (Angular, EventListController, EventDetailController, NewEventController, EventRepository, NewGuestController, EditGuestController) {
	'use strict';

	/* modules */
	var Lafete = Angular.module('lafete',['ngRoute']);

	Lafete.value('Configuration', {
		urls: {
			all: '/api/events',
			byId: '/api/events/{eventId}',
			add: '/api/events',
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

	NewGuestController.$inject = ['$scope', '$routeParams', '$location', 'EventRepository'];
	Lafete.controller('NewGuestController', NewGuestController);

	EditGuestController.$inject = ['$scope', '$routeParams', '$location', 'EventRepository'];
	Lafete.controller('EditGuestController', EditGuestController);

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
			controller: 'NewGuestController',
			templateUrl: '/views/guest/edit.html'
		})
		.when('/events/:eventId/guests/:guestId/edit', {
			controller: 'EditGuestController',
			templateUrl: '/views/guest/edit.html'
		})
		.otherwise({
			redirectTo: '/events'
		});
	});

	return Lafete;
});
