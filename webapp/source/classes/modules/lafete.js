define(['frameworks/angular', 'app/controllers/event/listController', 'app/controllers/event/detailController', 'app/repository/eventRepository', 'libraries/angularRoute'],
	function (Angular, EventListController, EventDetailController, EventRepository) {
	'use strict';

	/* modules */
	var Lafete = Angular.module('lafete',['ngRoute']);

	Lafete.value('Configuration', {
		urls: {
			all: '/api/events',
			byId: '/api/events/{eventId}',
			add: '/api/events'
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

	/* routes */
	Lafete.config(function($routeProvider) {

		$routeProvider.when('/events', {
			controller: 'EventListController',
			templateUrl: '/views/event/list.html'
		})
		.when('/events/:eventId', {
			controller: 'EventDetailController',
			templateUrl: '/views/event/detail.html'
		})
		.otherwise({
			redirectTo: '/events'
		});
	});

	return Lafete;
});
