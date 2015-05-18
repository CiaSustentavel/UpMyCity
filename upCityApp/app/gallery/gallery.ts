/// <reference path="gallery.html.ts" />
/// <reference path="gallery-ctrl.ts" />
/// <reference path="../../typings/tsd.d.ts" />

'use strict';

angular.module('starter')

.config(function($stateProvider) {
	$stateProvider.state('app.gallery', {
		url: '/gallery',
        views: {
            'menuContent': {
                template: gallery.html,
                controller: 'GalleryCtrl as gallery'
            },
            'fabContent': {
                template: '<button id="fab-gallery" class="button button-fab button-fab-top-right expanded button-energized-900 drop"><i class="icon ion-heart"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-gallery').classList.toggle('on');
                    }, 600);
                }  }
        }
	});
})
.controller('GalleryCtrl', App.GalleryCtrl);
