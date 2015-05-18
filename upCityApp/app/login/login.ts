/// <reference path="login.html.ts" />
/// <reference path="login-ctrl.ts" />
/// <reference path="../../typings/tsd.d.ts" />

'use strict';

angular.module('starter')

.config(function($stateProvider) {
	$stateProvider.state('app.login', {
		url: '/login',
        views: {
            'menuContent': {
                template: login.html,
                controller: 'LoginCtrl as login'
            },
            'fabContent': {
                template: ''
            }
        }
	});
})
.controller('LoginCtrl', App.LoginCtrl);


