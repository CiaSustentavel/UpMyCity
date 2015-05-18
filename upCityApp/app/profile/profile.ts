/// <reference path="profile.html.ts" />
/// <reference path="profile-ctrl.ts" />
/// <reference path="../../typings/tsd.d.ts" />

'use strict';

angular.module('starter')

.config(function($stateProvider) {
	$stateProvider.state('app.profile', {
		url: '/profile',
        views: {
            'menuContent': {
                template: profile.html,
                controller: 'ProfileCtrl as profile'
            },
            'fabContent': {
                template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-plus"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-profile').classList.toggle('on');
                    }, 800);
                }
            }
        }
	});
})
.controller('ProfileCtrl', App.ProfileCtrl);
