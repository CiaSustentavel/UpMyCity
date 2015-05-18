/// <reference path="friends.html.ts" />
/// <reference path="friends-ctrl.ts" />
/// <reference path="../../typings/tsd.d.ts" />

'use strict';

angular.module('starter')

.config(function($stateProvider) {
	$stateProvider.state('app.friends', {
		url: '/friends',
        views: {
            'menuContent': {
                template: friends.html,
                controller: 'FriendsCtrl as friend'
            },
            'fabContent': {
                template: '<button id="fab-friends" class="button button-fab button-fab-top-left expanded button-energized-900 spin"><i class="icon ion-chatbubbles"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-friends').classList.toggle('on');
                    }, 900);
                }            }
        }
	});
})
.controller('FriendsCtrl', App.FriendsCtrl);
