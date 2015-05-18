/// <reference path="menu.html.ts" />
/// <reference path="menu-ctrl.ts" />
/// <reference path="../../typings/tsd.d.ts" />

'use strict';

angular.module('starter')

.config(function($stateProvider) {

	$stateProvider.state('app', {
		url: '/app',
		abstract: true,
		template: menu.html,
		controller: 'MenuCtrl as menu'
	});
})

.controller('MenuCtrl', App.MenuCtrl);


