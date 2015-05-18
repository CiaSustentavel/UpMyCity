/// <reference path="app.ts" />

/// <reference path="menu/menu.ts" />
/// <reference path="activity/activity.ts" />
/// <reference path="friends/friends.ts" />
/// <reference path="gallery/gallery.ts" />
/// <reference path="login/login.ts" />
/// <reference path="profile/profile.ts" />


angular.module('starter')

.config(function($stateProvider, $urlRouterProvider) {

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/login');
});
