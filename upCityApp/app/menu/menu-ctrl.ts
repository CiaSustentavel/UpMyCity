/// <reference path="../../typings/tsd.d.ts" />

module App {
	export class MenuCtrl {

		loginData = {};
		isExpanded: boolean;
		hasHeaderFabLeft: boolean;
		hasHeaderFabRight: boolean;

		static $inject = [];
		constructor() {

			// Form data for the login modal
			this.loginData = {};
			this.isExpanded = false;
			this.hasHeaderFabLeft = false;
			this.hasHeaderFabRight = false;

			var navIcons = document.getElementsByClassName('ion-navicon');
			var activeToggle = function (e){this.classList.toggle('active')};
			
			for (var i = 0; i < navIcons.length; i++) {
				navIcons[i].addEventListener('click', activeToggle);
			}
		}

		private _firtElem(tagName: string) {
			return (<HTMLElement>document.getElementsByTagName(tagName)[0])
		}

		////////////////////////////////////////
		// Layout Methods
		////////////////////////////////////////
	
		hideNavBar() {
			this._firtElem('ion-nav-bar').style.display = 'none';
		}

		showNavBar() {
			this._firtElem('ion-nav-bar').style.display = 'block';
		}

		noHeader() {
			var content = document.getElementsByTagName('ion-content');
			for (var i = 0; i < content.length; i++) {
				var el = <HTMLElement>content[i];

				if (el.classList.contains('has-header')) {
					el.classList.toggle('has-header');
				}
			}
		}

		setExpanded(_bool) {
			this.isExpanded = _bool;
		}

		setHeaderFab(_location) {
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
		}

		hasHeader() {
			var content = document.getElementsByTagName('ion-content');
			for (var i = 0; i < content.length; i++) {
				var el = <HTMLElement>content[i];
				if (!el.classList.contains('has-header')) {
					el.classList.toggle('has-header');
				}
			}
		}

		hideHeader() {
			this.hideNavBar();
			this.noHeader();
		}

		showHeader() {
			this.showNavBar();
			this.hasHeader();
		}

		clearFabs() {
			var fab = this._firtElem('button-fab');

			if (fab) {
				fab.remove();
			}
		}
	}
}