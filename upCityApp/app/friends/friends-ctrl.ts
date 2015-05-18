/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../Menu/menu.ts" />

declare var ionic:any; //global, try fix this;

module App {
	export class FriendsCtrl {
		menu:MenuCtrl;
		isExpanded:boolean;
		
		static $inject = ['$scope','$stateParams', '$timeout'];
		constructor($scope:FriendsCtrl, $stateParams, $timeout) {
			// Set Header
			$scope.menu.showHeader();
			$scope.menu.clearFabs();
			$scope.menu.setHeaderFab('left');
		
			// Delay expansion
			$timeout(() => {
				$scope.isExpanded = true;
				$scope.menu.setExpanded(true);
			}, 300);
		
			// Set Motion
			ionic.material.motion.fadeSlideInRight();
		
			// Set Ink
			ionic.material.ink.displayEffect();
		}
	}
}