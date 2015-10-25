/**
 * Created by fabian on 21/10/2015.
 */
require.config({
    // base url relative to the index.html
    baseUrl: './',
    paths: {
        'angular': '../frameworks/angular/angular.min'
    },
    // angular does not support async loading out of the box -> use the shim loader
    shim: {
        'angular': {
            exports: 'angular'
        }
    }
});

define(['angular'], function (angular) {
    var app = angular.module("lafete");
    return angular.bootstrap(app);
});