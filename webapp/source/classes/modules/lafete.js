define(['frameworks/angular', 'app/controllers/event/listController', 'app/controllers/event/detailController', 'app/repository/eventRepository', 'libraries/angularRoute'],
	function (Angular, EventListController, EventDetailController, EventRepository) {
	'use strict';

	/* modules */
	var Lafete = Angular.module('lafete',['ngRoute']);

	/* services */
	EventRepository.$inject = ['$http'];
	Lafete.service('EventRepository', EventRepository);

	/* controllers */
	EventListController.$inject = ['$scope', 'EventRepository'];
	Lafete.controller('EventListController', EventListController);

	EventDetailController.$inject = ['$scope', '$routeParams', 'EventRepository'];
	Lafete.controller('EventDetailController', EventDetailController);

	/* routes */
	Lafete.config(function($routeProvider) {
		$routeProvider.when('/', {
			controller: 'EventListController',
			templateUrl: '/views/event/list.html'
		})
		.when('/events/:eventId', {
			controller: 'EventDetailController',
			templateUrl: '/views/event/detail.html'
		})
		.otherwise({
			redirectTo: '/'
		});
	});

	return Lafete;
});
