/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../Menu/menu.ts" />

declare var ionic:any; //global, try fix this. 

module App{
    'use strict';
    
    export class LoginCtrl{
        menu:MenuCtrl;
        
        static $inject = ['$scope','$timeout'];
        constructor($scope:LoginCtrl, $timeout:angular.ITimeoutService){
            
            $scope.menu.clearFabs();
            
            $timeout(() => $scope.menu.hideHeader(), 0);
            
            ionic.material.ink.displayEffect();                
        }
    }
}
