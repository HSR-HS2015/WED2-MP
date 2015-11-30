define(['frameworks/angular', 'app/controllers/event/listController',
		'app/controllers/event/detailController','app/controllers/event/newController',
		'app/repository/eventRepository','app/repository/guestRepository', 'app/controllers/guest/newController',
		'app/controllers/guest/editController', 'app/controllers/event/editController', 'libraries/angularRoute'],
	function (Angular, EventListController, EventDetailController, NewEventController, EventRepository, GuestRepository, NewGuestController, EditGuestController,EditEventController) {
	'use strict';

	/* modules */
	var Lafete = Angular.module('lafete',['ngRoute']);

	/* services */
	EventRepository.$inject = ['$http'];
	Lafete.service('EventRepository', EventRepository);

	GuestRepository.$inject = ['$http'];
	Lafete.service('GuestRepository', GuestRepository);

	/* controllers */
	EventListController.$inject = ['$scope', 'EventRepository'];
	Lafete.controller('EventListController', EventListController);

	EventDetailController.$inject = ['$scope', '$routeParams', 'EventRepository','GuestRepository'];
	Lafete.controller('EventDetailController', EventDetailController);

	NewEventController.$inject = ['$scope', '$location', 'EventRepository'];
	Lafete.controller('NewEventController', NewEventController);

	NewGuestController.$inject = ['$scope', '$routeParams', '$location','GuestRepository'];
	Lafete.controller('NewGuestController', NewGuestController);

	EditGuestController.$inject = ['$scope', '$routeParams', '$location', 'GuestRepository'];
	Lafete.controller('EditGuestController', EditGuestController);

	EditEventController.$inject = ['$scope', '$routeParams', '$location','EventRepository'];
	Lafete.controller('EditEventController', EditEventController);

	/* routes */
	Lafete.config(function($routeProvider) {

		$routeProvider.when('/events', {
			controller: 'EventListController',
			templateUrl: '/views/event/list.html'
		})
		.when('/events/new', {
			controller: 'NewEventController',
			templateUrl: '/views/event/new.html'
		})
		.when('/events/:eventId', {
			controller: 'EventDetailController',
			templateUrl: '/views/event/detail.html'
		})
		.when('/events/:eventId/edit', {
			controller: 'EditEventController',
			templateUrl: '/views/event/edit.html'
		})
		.when('/events/:eventId/new', {
			controller: 'NewGuestController',
			templateUrl: '/views/guest/new.html'
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
