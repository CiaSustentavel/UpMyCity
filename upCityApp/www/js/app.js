angular.module('starter', ['ionic', 'firebase'])
    .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});
var menu;
(function (menu) {
    menu.html = '<ion-side-menus enable-menu-with-back-views="true">    <ion-side-menu-content>        <ion-nav-bar class="bar-assertive-900" ng-class="{expanded: menu.isExpanded, \'has-header-fab-left\': menu.hasHeaderFabLeft, \'has-header-fab-right\': menu.hasHeaderFabRight}" align-title="left">            <ion-nav-back-button class="no-text">            </ion-nav-back-button>            <ion-nav-buttons side="right">                <button class="button button-icon button-clear ion-android-more-vertical" menu-toggle="right">                </button>            </ion-nav-buttons>        </ion-nav-bar>        <ion-nav-view name="fabContent"></ion-nav-view>        <ion-nav-view name="menuContent" ng-class="{expanded: menu.isExpanded}" ></ion-nav-view>    </ion-side-menu-content>    <ion-side-menu side="right">        <ion-header-bar class="dark-bg expanded">            <span class="avatar" style="background: url(\'img/crown.jpg\'); background-size: cover;"></span>            <h2>Thronester</h2>        </ion-header-bar>        <ion-content class="stable-bg has-expanded-header">            <ion-list>                <ion-item nav-clear menu-close ui-sref="app.activity">                    Activity                </ion-item>                <ion-item nav-clear menu-close ui-sref="app.login">                    Login                </ion-item>                <ion-item nav-clear menu-close ui-sref="app.profile">                    Profile                </ion-item>                <ion-item nav-clear menu-close ui-sref="app.friends">                    Friends                </ion-item>                <ion-item nav-clear menu-close ui-sref="app.gallery">                    Gallery                </ion-item>            </ion-list>        </ion-content>    </ion-side-menu></ion-side-menus>';
})(menu || (menu = {}));
/// <reference path="../../typings/tsd.d.ts" />
var App;
(function (App) {
    var MenuCtrl = (function () {
        function MenuCtrl() {
            this.loginData = {};
            this.loginData = {};
            this.isExpanded = false;
            this.hasHeaderFabLeft = false;
            this.hasHeaderFabRight = false;
            var navIcons = document.getElementsByClassName('ion-navicon');
            var activeToggle = function (e) { this.classList.toggle('active'); };
            for (var i = 0; i < navIcons.length; i++) {
                navIcons[i].addEventListener('click', activeToggle);
            }
        }
        MenuCtrl.prototype._firtElem = function (tagName) {
            return document.getElementsByTagName(tagName)[0];
        };
        MenuCtrl.prototype.hideNavBar = function () {
            this._firtElem('ion-nav-bar').style.display = 'none';
        };
        MenuCtrl.prototype.showNavBar = function () {
            this._firtElem('ion-nav-bar').style.display = 'block';
        };
        MenuCtrl.prototype.noHeader = function () {
            var content = document.getElementsByTagName('ion-content');
            for (var i = 0; i < content.length; i++) {
                var el = content[i];
                if (el.classList.contains('has-header')) {
                    el.classList.toggle('has-header');
                }
            }
        };
        MenuCtrl.prototype.setExpanded = function (_bool) {
            this.isExpanded = _bool;
        };
        MenuCtrl.prototype.setHeaderFab = function (_location) {
            var hasHeaderFabLeft = false;
            var hasHeaderFabRight = false;
            switch (_location) {
                case 'left':
                    hasHeaderFabLeft = true;
                    break;
                case 'right':
                    hasHeaderFabRight = true;
                    break;
            }
            this.hasHeaderFabLeft = hasHeaderFabLeft;
            this.hasHeaderFabRight = hasHeaderFabRight;
        };
        MenuCtrl.prototype.hasHeader = function () {
            var content = document.getElementsByTagName('ion-content');
            for (var i = 0; i < content.length; i++) {
                var el = content[i];
                if (!el.classList.contains('has-header')) {
                    el.classList.toggle('has-header');
                }
            }
        };
        MenuCtrl.prototype.hideHeader = function () {
            this.hideNavBar();
            this.noHeader();
        };
        MenuCtrl.prototype.showHeader = function () {
            this.showNavBar();
            this.hasHeader();
        };
        MenuCtrl.prototype.clearFabs = function () {
            var fab = this._firtElem('button-fab');
            if (fab) {
                fab.remove();
            }
        };
        MenuCtrl.$inject = [];
        return MenuCtrl;
    })();
    App.MenuCtrl = MenuCtrl;
})(App || (App = {}));
/// <reference path="menu.html.ts" />
/// <reference path="menu-ctrl.ts" />
/// <reference path="../../typings/tsd.d.ts" />
'use strict';
angular.module('starter')
    .config(function ($stateProvider) {
    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        template: menu.html,
        controller: 'MenuCtrl as menu'
    });
})
    .controller('MenuCtrl', App.MenuCtrl);
var activity;
(function (activity) {
    activity.html = '<ion-view view-title="Activity">    <ion-content ng-class="{expanded:activity.isExpanded}" class="animate-fade-slide-in">        <div class="item card-item">            <div ui-sref="app.gallery" class="card stable-bg ink ink-dark">                <div class="item item-avatar item-text-wrap">                    <span class="avatar" style="background-image: url(\'img/shay.png\');"></span>                    <strong>Shay Hasson</strong> reported on a problem nearby his house.                    <div class="card-footer text-right">                        <i class="icon ion-chatbubbles positive"></i> 6                        <i class="icon ion-heart assertive"></i> 23                        <div class="pull-left">                            <i class="icon ion-clock"></i> just now                        </div>                    </div>                </div>            </div>        </div>        <div class="item card-item">            <div ui-sref="app.gallery" class="card stable-bg ink ink-dark">                <div class="item item-avatar item-text-wrap">                    <span class="avatar" style="background-image: url(\'img/david.png\');"></span>                    <strong>David Beckett</strong> says "Perhaps it could be solved by..."                    <div class="card-footer text-right">                        <i class="icon ion-chatbubble positive"></i> 2                        <i class="icon ion-heart assertive"></i> 4                        <div class="pull-left">                            <i class="icon ion-clock"></i> 12 mins ago                        </div>                    </div>                </div>            </div>        </div>        <div class="item card-item">            <div ui-sref="app.gallery" class="card stable-bg ink ink-dark">                <div class="item item-avatar item-text-wrap">                    <span class="avatar" style="background-image: url(\'img/abraao.png\');"></span>                    <strong>Abraão Alves</strong> added a gallery <strong>Problems in the main Avenue</strong> ...                    <div class="card-footer text-right">                        <i class="icon ion-chatbubble positive"></i> 2                        <i class="icon ion-heart assertive"></i> 4                        <div class="pull-left">                            <i class="icon ion-clock"></i> 3 hrs ago                        </div>                    </div>                </div>            </div>        </div>    </ion-content></ion-view>';
})(activity || (activity = {}));
/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../Menu/menu.ts" />
var App;
(function (App) {
    'use strict';
    var ActivityCtrl = (function () {
        function ActivityCtrl($scope, $timeout) {
            $scope.menu.showHeader();
            $scope.menu.clearFabs();
            $scope.isExpanded = true;
            $scope.menu.setExpanded(true);
            $scope.menu.setHeaderFab('right');
            $timeout(function () {
                return ionic.material.motion.fadeSlideIn({
                    selector: '.animate-fade-slide-in .item'
                });
            }, 200);
            ionic.material.ink.displayEffect();
        }
        ActivityCtrl.$inject = ['$scope', '$timeout'];
        return ActivityCtrl;
    })();
    App.ActivityCtrl = ActivityCtrl;
})(App || (App = {}));
/// <reference path="activity.html.ts" />
/// <reference path="activity-ctrl.ts" />
/// <reference path="../../typings/tsd.d.ts" />
'use strict';
angular.module('starter')
    .config(function ($stateProvider) {
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
var friends;
(function (friends) {
    friends.html = '<ion-view view-title="Friends">    <ion-content ng-class="{expanded:friend.isExpanded}">        <div class="content has-header">            <div class="list animate-fade-slide-in-right">                <a href="#/app/profile" class="item item-avatar item-icon-right">                    <img src="img/shay.png">                    <h2>Shay Hasson</h2>                    <p>Israel</p>                    <i class="icon ion-chatbubble muted"></i>                </a>                <a href="#/app/profile" class="item item-avatar item-icon-right">                    <img src="img/david.png">                    <h2>David Beckett</h2>                    <p>England</p>                    <i class="icon ion-chatbubble muted"></i>                </a>                <a href="#/app/profile" class="item item-avatar item-icon-right">                    <img src="img/abraao.png">                    <h2>Abraão Alves</h2>                    <p>Brazil</p>                    <i class="icon ion-chatbubble muted"></i>                </a>                <a href="#/app/profile" class="item item-avatar item-icon-right">                    <img src="img/matheus.png">                    <h2>Matheus Albuquerque</h2>                    <p>Brazil</p>                    <i class="icon ion-chatbubble muted"></i>                </a>            </div>        </div>    </ion-content></ion-view>';
})(friends || (friends = {}));
/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../Menu/menu.ts" />
var App;
(function (App) {
    var FriendsCtrl = (function () {
        function FriendsCtrl($scope, $stateParams, $timeout) {
            $scope.menu.showHeader();
            $scope.menu.clearFabs();
            $scope.menu.setHeaderFab('left');
            $timeout(function () {
                $scope.isExpanded = true;
                $scope.menu.setExpanded(true);
            }, 300);
            ionic.material.motion.fadeSlideInRight();
            ionic.material.ink.displayEffect();
        }
        FriendsCtrl.$inject = ['$scope', '$stateParams', '$timeout'];
        return FriendsCtrl;
    })();
    App.FriendsCtrl = FriendsCtrl;
})(App || (App = {}));
/// <reference path="friends.html.ts" />
/// <reference path="friends-ctrl.ts" />
/// <reference path="../../typings/tsd.d.ts" />
'use strict';
angular.module('starter')
    .config(function ($stateProvider) {
    $stateProvider.state('app.friends', {
        url: '/friends',
        views: {
            'menuContent': {
                template: friends.html,
                controller: 'FriendsCtrl as friend'
            },
            'fabContent': {
                template: '<button id="fab-friends" class="button button-fab button-fab-top-left expanded button-energized-900 spin"><i class="icon ion-chatbubbles"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-friends').classList.toggle('on');
                    }, 900);
                } }
        }
    });
})
    .controller('FriendsCtrl', App.FriendsCtrl);
var gallery;
(function (gallery) {
    gallery.html = '<ion-view view-title="Gallery">    <ion-content ng-class="{expanded:gallery.isExpanded}" class="animate-fade-slide-in">        <div class="list half">            <div ui-sref="app.profile" class="card card-gallery item item-text-wrap">                <div class="ink dark-bg">                    <h2>Professorville</h2>                    <img class="full-image" src="img/professorville.png">                </div>                <div class="item tabs tabs-secondary tabs-icon-left">                    <a class="tab-item stable-bg assertive">                        <i class="icon ion-heart"></i>                        4                    </a>                    <a class="tab-item stable-bg positive-900">                        <i class="icon ion-chatbubbles"></i>                        2                    </a>                </div>            </div>        </div>        <div class="list half">            <div ui-sref="app.profile" class="card card-gallery item item-text-wrap">                <div class="ink dark-bg">                    <h2>Elizabeth F. Gamble Garden</h2>                    <img class="full-image" src="img/small-and-beautiful-garden.jpg">                </div>                <div class="item tabs tabs-secondary tabs-icon-left">                    <a class="tab-item stable-bg assertive">                        <i class="icon ion-heart"></i>                        22                    </a>                    <a class="tab-item stable-bg positive-900">                        <i class="icon ion-chatbubbles"></i>                        9                    </a>                </div>            </div>            <div ui-sref="app.profile" class="card card-gallery item item-text-wrap">                <div class="ink dark-bg">                    <h2>Downtown Palo Alto Farmer\'s Market</h2>                    <img class="full-image" src="img/downtown-palo-alto-farmer.jpg">                </div>                <div class="item tabs tabs-secondary tabs-icon-left">                    <a class="tab-item stable-bg assertive">                        <i class="icon ion-heart"></i>                        8                    </a>                    <a class="tab-item stable-bg positive-900">                        <i class="icon ion-chatbubbles"></i>                        0                    </a>                </div>            </div>        </div>    </ion-content></ion-view>';
})(gallery || (gallery = {}));
/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../Menu/menu.ts" />
var App;
(function (App) {
    'use strict';
    var GalleryCtrl = (function () {
        function GalleryCtrl($scope) {
            $scope.menu.showHeader();
            $scope.menu.clearFabs();
            $scope.isExpanded = true;
            $scope.menu.setExpanded(true);
            $scope.menu.setHeaderFab(false);
            ionic.material.ink.displayEffect();
            ionic.material.motion.pushDown({
                selector: '.push-down'
            });
            ionic.material.motion.fadeSlideInRight({
                selector: '.animate-fade-slide-in .item'
            });
        }
        GalleryCtrl.$inject = ['$scope'];
        return GalleryCtrl;
    })();
    App.GalleryCtrl = GalleryCtrl;
})(App || (App = {}));
/// <reference path="gallery.html.ts" />
/// <reference path="gallery-ctrl.ts" />
/// <reference path="../../typings/tsd.d.ts" />
'use strict';
angular.module('starter')
    .config(function ($stateProvider) {
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
                } }
        }
    });
})
    .controller('GalleryCtrl', App.GalleryCtrl);
var login;
(function (login) {
    login.html = '<ion-view view-title="Login" align-title="left">    <ion-content style="background: url(img/login.jpg) center; background-size: cover;">        <div class="hero no-header flat">            <div class="content">                <div class="app-icon"></div>                <img src="img/logo.png">            </div>        </div>        <div class="list">            <ion-md-input placeholder="Username" highlight-color="balanced" type="text"></ion-md-input>            <ion-md-input placeholder="Password" highlight-color="energized" type="password"></ion-md-input>        </div>        <div class="padding">            <button ui-sref="app.profile" class="button button-full button-assertive ink">Login</button>        </div>        <div class="button-bar social-login">            <button class="button button-small button-border icon-left ion-social-google button-assertive-900">Google+</button>            <button class="button button-small button-border icon-left ion-social-twitter button-calm-900">Twitter</button>            <button class="button button-small button-border icon-left ion-social-facebook button-positive-900">Facebook</button>        </div>    </ion-content></ion-view>';
})(login || (login = {}));
/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../Menu/menu.ts" />
var App;
(function (App) {
    'use strict';
    var LoginCtrl = (function () {
        function LoginCtrl($scope, $timeout) {
            $scope.menu.clearFabs();
            $timeout(function () { return $scope.menu.hideHeader(); }, 0);
            ionic.material.ink.displayEffect();
        }
        LoginCtrl.$inject = ['$scope', '$timeout'];
        return LoginCtrl;
    })();
    App.LoginCtrl = LoginCtrl;
})(App || (App = {}));
/// <reference path="login.html.ts" />
/// <reference path="login-ctrl.ts" />
/// <reference path="../../typings/tsd.d.ts" />
'use strict';
angular.module('starter')
    .config(function ($stateProvider) {
    $stateProvider.state('app.login', {
        url: '/login',
        views: {
            'menuContent': {
                template: login.html,
                controller: 'LoginCtrl as login'
            },
            'fabContent': {
                template: ''
            }
        }
    });
})
    .controller('LoginCtrl', App.LoginCtrl);
var profile;
(function (profile) {
    profile.html = '<ion-view view-title="Profile">    <ion-content ng-class="{expanded:profile.isExpanded}">        <div class="hero slide-up" style="background-image: url(\'img/ne_cearafortaleza0098.jpg\');">            <div class="content">                <div class="avatar" style="background-image: url(\'img/shira.png\');"></div>                <h3><a class="light">Shira Abel</a></h3>            </div>        </div>        <div class="tabs tabs-dark tabs-icon-top static">            <a ui-sref="app.activity" class="tab-item">                <i class="icon ion-arrow-graph-up-right"></i> Activity            </a>            <a ui-sref="app.friends" class="tab-item">                <i class="icon ion-android-people muted"></i> Friends            </a>            <a ui-sref="app.gallery" class="tab-item">                <i class="icon ion-images muted"></i> Photos            </a>        </div>        <h4 class="content padding double-padding-x">My City <i class="icon ion-location muted"></i></h4>        <div class="list animate-fade-slide-in-right">            <a ui-sref="app.friends" class="item item-avatar item-icon-right">              <img src="img/onibus.jpg">              <h2>Professorville</h2>              <p>Urban mobility</p>              <i class="icon ion-android-bicycle muted"></i>            </a>            <a ui-sref="app.friends" class="item item-avatar item-icon-right">                <img src="img/small-and-beautiful-garden.jpg">                <h2>Elizabeth F. Gamble Garden</h2>                <p>Public transportation</p>                <i class="icon ion-android-bus muted"></i>            </a>            <a ui-sref="app.friends" class="item item-avatar item-icon-right">                <img src="img/downtown-palo-alto-farmer.jpg">                <h2>Downtown Palo Alto Farmer\'s Market</h2>                <p>Urban mobility</p>                <i class="icon ion-android-bicycle muted"></i>            </a>        </div>    </ion-content></ion-view>';
})(profile || (profile = {}));
/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../Menu/menu.ts" />
var App;
(function (App) {
    'use strict';
    var ProfileCtrl = (function () {
        function ProfileCtrl($scope, $timeout) {
            $scope.menu.showHeader();
            $scope.menu.clearFabs();
            $scope.isExpanded = false;
            $scope.menu.setExpanded(false);
            $scope.menu.setHeaderFab(false);
            $timeout(function () {
                return ionic.material.motion.slideUp({
                    selector: '.slide-up'
                });
            }, 300);
            $timeout(function () {
                return ionic.material.motion.fadeSlideInRight({
                    startVelocity: 3000
                });
            }, 700);
            ionic.material.ink.displayEffect();
        }
        ProfileCtrl.$inject = ['$scope', '$timeout'];
        return ProfileCtrl;
    })();
    App.ProfileCtrl = ProfileCtrl;
})(App || (App = {}));
/// <reference path="profile.html.ts" />
/// <reference path="profile-ctrl.ts" />
/// <reference path="../../typings/tsd.d.ts" />
'use strict';
angular.module('starter')
    .config(function ($stateProvider) {
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
/// <reference path="app.ts" />
/// <reference path="menu/menu.ts" />
/// <reference path="activity/activity.ts" />
/// <reference path="friends/friends.ts" />
/// <reference path="gallery/gallery.ts" />
/// <reference path="login/login.ts" />
/// <reference path="profile/profile.ts" />
angular.module('starter')
    .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/app/login');
});
/// <reference path="../../typings/tsd.d.ts" />
var App;
(function (App) {
    FireBaseData.$inject = ['$firebase'];
    function FireBaseData($firebase) {
        var ref = new Firebase("https://luminous-fire-3429.firebaseio.com/"), refExpenses = new Firebase("https://luminous-fire-3429.firebaseio.com/expenses"), refRoomMates = new Firebase("https://luminous-fire-3429.firebaseio.com/room-mates");
        return {
            ref: function () {
                return ref;
            },
            refExpenses: function () {
                return refExpenses;
            },
            refRoomMates: function () {
                return refRoomMates;
            }
        };
    }
    App.FireBaseData = FireBaseData;
    angular.module('starter').factory('FireBaseData', FireBaseData);
})(App || (App = {}));
//# sourceMappingURL=app.js.map