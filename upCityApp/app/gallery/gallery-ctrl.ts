/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../Menu/menu.ts" />

declare var ionic: any;//global, try fix this.

module App {
	'use strict';

	export class GalleryCtrl {
		menu: MenuCtrl;
		isExpanded: boolean;

		static $inject = ['$scope'];
		constructor($scope:GalleryCtrl) {

			$scope.menu.showHeader();
			$scope.menu.clearFabs();
			$scope.isExpanded = true;
			$scope.menu.setExpanded(true);
			$scope.menu.setHeaderFab(false);
			
			// Activate ink for controller
			ionic.material.ink.displayEffect();

			ionic.material.motion.pushDown({
				selector: '.push-down'
			});
			ionic.material.motion.fadeSlideInRight({
				selector: '.animate-fade-slide-in .item'
			});
		}
	}
}