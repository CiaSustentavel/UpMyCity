/// <reference path="activity.html.ts" />
/// <reference path="activity-ctrl.ts" />
/// <reference path="../../typings/tsd.d.ts" />

'use strict';

angular.module('starter')

.config(function($stateProvider) {
	$stateProvider.state('app.activity', {
		url: '/activity',
        views: {
            'menuContent': {
                template: activity.html,
                controller: 'ActivityCtrl as activity'
            },
            'fabContent': {
                template: '<button id="fab-activity" class="button button-fab button-fab-top-right expanded button-energized-900 flap"><i class="icon ion-paper-airplane"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-activity').classList.toggle('on');
                    }, 200);
                }
            }
        }
	});
})
.controller('ActivityCtrl', App.ActivityCtrl);
