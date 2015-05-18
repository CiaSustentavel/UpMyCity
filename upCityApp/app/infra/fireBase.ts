/// <reference path="../../typings/tsd.d.ts" />

module App{
	FireBaseData.$inject = ['$firebase'];
	
	export function FireBaseData($firebase){
		
	    var ref = new Firebase("https://luminous-fire-3429.firebaseio.com/"),
	        refExpenses = new Firebase("https://luminous-fire-3429.firebaseio.com/expenses"),
	        refRoomMates = new Firebase("https://luminous-fire-3429.firebaseio.com/room-mates");
	    return {
	        ref: function() {
	            return ref;
	        },
	        refExpenses: function() {
	            return refExpenses;
	        },
	        refRoomMates: function() {
	            return refRoomMates;
	        }
	    }
	}

	angular.module('starter') .factory('FireBaseData', FireBaseData);
}
