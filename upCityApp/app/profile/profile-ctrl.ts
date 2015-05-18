/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../Menu/menu.ts" />

declare var ionic: any;//global, try fix this.

module App {
	'use strict';

	export class ProfileCtrl {
		menu: MenuCtrl;
		isExpanded: boolean;

		static $inject = ['$scope','$timeout'];
		constructor($scope:ProfileCtrl, $timeout: angular.ITimeoutService) {
			
			// Set Header
			$scope.menu.showHeader();
			$scope.menu.clearFabs();
			$scope.isExpanded = false;
			$scope.menu.setExpanded(false);
			$scope.menu.setHeaderFab(false);

			// Set Motion
			$timeout(() =>
				ionic.material.motion.slideUp({
					selector: '.slide-up'
				})
			, 300);

			$timeout(() => 
				ionic.material.motion.fadeSlideInRight({
					startVelocity: 3000
				})
			, 700);

			// Set Ink
			ionic.material.ink.displayEffect();
		}
	}
}