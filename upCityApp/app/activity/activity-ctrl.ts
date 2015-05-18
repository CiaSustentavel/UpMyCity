/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../Menu/menu.ts" />

declare var ionic:any;//global, try fix this.

module App {
	'use strict';
	
	export class ActivityCtrl {
		menu:MenuCtrl;
		isExpanded:boolean;
		
		static $inject = ['$scope','$timeout'];
		constructor($scope:ActivityCtrl, $timeout:angular.ITimeoutService){
			
		    $scope.menu.showHeader();
		    $scope.menu.clearFabs();
		    $scope.isExpanded = true;
		    $scope.menu.setExpanded(true);
		    $scope.menu.setHeaderFab('right');
		
		    $timeout(() => 
		        ionic.material.motion.fadeSlideIn({
		            selector: '.animate-fade-slide-in .item'
		        })
		    , 200);
		
		    // Activate ink for controller
		    ionic.material.ink.displayEffect();
		}
	}	
}