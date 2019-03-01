(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pt{\r\n  padding-top: 30px;\r\n}\r\n/*.blue{\r\n  background: #b31569 linear-gradient(0deg,#b31569,#e63250);\r\n  min-height: 1024px;\r\n}\r\n*/\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"blue\">\r\n  <div class=\"container\">\r\n    <div class=\"row pt\">\r\n      <div class=\"col-md-2\">\r\n        <img class=\"img-fluid\" src=\"assets/pidex_logo.jpeg\" />\r\n      </div>\r\n      <div class=\"col-md-6\" *ngIf=\"loggedin\"></div>\r\n      <div class=\"col-md-3\" *ngIf=\"loggedin\">\r\n        <div ngbDropdown class=\"d-inline-block\">\r\n          <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>{{user.Email}}</button>\r\n          <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n            <!--button class=\"dropdown-item\">Settings</button-->\r\n            <button class=\"dropdown-item\" (click)=\"logout()\">{{'logout'|translate}}</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-2 offset-md-8\" *ngIf=\"!loggedin\">\r\n        <div ngbDropdown class=\"d-inline-block\">\r\n          <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>Lang/語言</button>\r\n          <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n            <!--button class=\"dropdown-item\">Settings</button-->\r\n            <button class=\"dropdown-item\" (click)=\"tset('en')\">English</button>\r\n            <button class=\"dropdown-item\" (click)=\"tset('zh')\">中文</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <app-wallet *ngIf=\"loggedin\"></app-wallet>\r\n  <app-login *ngIf=\"!loggedin\"></app-login>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cookies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cookies.service */ "./src/app/cookies.service.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(translate, cookies, login) {
        this.translate = translate;
        this.cookies = cookies;
        this.login = login;
        this.title = 'app';
        this.loggedin = false;
        if (this.cookies.getCookie("lang") == '') {
            console.log(this.cookies.getCookie("lang"));
            translate.setDefaultLang('en');
        }
        else {
            translate.setDefaultLang(this.cookies.getCookie('lang'));
        }
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        //translate.use('en');
        if (this.cookies.getCookie('usr') != '') {
            this.user = (JSON.parse(this.cookies.getCookie('usr')));
            if (this.user.ID > 0) {
                this.loggedin = true;
            }
        } //jhh
    }
    AppComponent.prototype.logout = function () {
        this.login.logout();
    };
    AppComponent.prototype.tset = function (lang) {
        this.translate.use(lang);
        this.cookies.setCookie("lang", lang, 222);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _cookies_service__WEBPACK_IMPORTED_MODULE_1__["CookiesService"], _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wallet/wallet.component */ "./src/app/wallet/wallet.component.ts");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./history/history.component */ "./src/app/history/history.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _kyc_kyc_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./kyc/kyc.component */ "./src/app/kyc/kyc.component.ts");
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-intl-tel-input */ "./node_modules/ngx-intl-tel-input/index.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_14__["TranslateHttpLoader"](http);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_4__["WalletComponent"],
                _history_history_component__WEBPACK_IMPORTED_MODULE_5__["HistoryComponent"],
                _kyc_kyc_component__WEBPACK_IMPORTED_MODULE_10__["KYCComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_11__["NgxIntlTelInputModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_12__["BsDropdownModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot([]),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
                    }
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cookies.service.ts":
/*!************************************!*\
  !*** ./src/app/cookies.service.ts ***!
  \************************************/
/*! exports provided: CookiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookiesService", function() { return CookiesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CookiesService = /** @class */ (function () {
    function CookiesService() {
    }
    CookiesService.prototype.getCookie = function (name) {
        var ca = document.cookie.split(';');
        var caLen = ca.length;
        var cookieName = name + "=";
        var c;
        for (var i = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, '');
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return '';
    };
    CookiesService.prototype.deleteCookie = function (name) {
        this.setCookie(name, '', -1);
    };
    CookiesService.prototype.setCookie = function (name, value, expireDays, path) {
        if (path === void 0) { path = ''; }
        var d = new Date();
        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        var expires = "expires=" + d.toUTCString();
        var cpath = path ? "; path=" + path : '';
        document.cookie = name + "=" + value + "; " + expires + cpath;
    };
    CookiesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CookiesService);
    return CookiesService;
}());



/***/ }),

/***/ "./src/app/history.service.ts":
/*!************************************!*\
  !*** ./src/app/history.service.ts ***!
  \************************************/
/*! exports provided: HistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryService", function() { return HistoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HistoryService = /** @class */ (function () {
    function HistoryService(http) {
        this.http = http;
    }
    HistoryService.prototype.auth = function (apikey) {
        return this.http.get("https://api.etherscan.io/api?module=account&action=txlist&address=" + apikey + "&startblock=0&endblock=99999999&sort=asc&apikey=YMHDHW84RT1GJQBM9V44J3F59VXGIFSGMK", _login_service__WEBPACK_IMPORTED_MODULE_3__["httpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('fetchhistory')));
    };
    HistoryService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    HistoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], HistoryService);
    return HistoryService;
}());



/***/ }),

/***/ "./src/app/history/history.component.css":
/*!***********************************************!*\
  !*** ./src/app/history/history.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/history/history.component.html":
/*!************************************************!*\
  !*** ./src/app/history/history.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"historylist\">\r\n  <p *ngIf=\"!historylist.result[0]\">\r\n    {{\"HEREYOURTRANSACTIONHISTORYWILLBESHOWN\"|translate}}\r\n  </p>\r\n  <div *ngFor=\"let entry of historylist.result\">\r\n    <div *ngIf=\"entry.to==user.Pub.toLowerCase()\">\r\n      <h4>{{entry.from}} => {{entry.to}}</h4>\r\n      <a><pre>{{\"SUCCESS\"|translate}}: {{entry.hash}}</pre></a>\r\n      Amount: {{entry.value/1000000000000000000}}\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/history/history.component.ts":
/*!**********************************************!*\
  !*** ./src/app/history/history.component.ts ***!
  \**********************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _history_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../history.service */ "./src/app/history.service.ts");
/* harmony import */ var _cookies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cookies.service */ "./src/app/cookies.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HistoryComponent = /** @class */ (function () {
    function HistoryComponent(http, historyservice, cookies) {
        this.http = http;
        this.historyservice = historyservice;
        this.cookies = cookies;
        if (this.cookies.getCookie('usr') != '') {
            this.user = (JSON.parse(this.cookies.getCookie('usr')));
            if (this.user.ID > 0) {
                this.loggedin = true;
            }
        }
    }
    HistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.historyservice.auth(this.user.Pub)
            .subscribe(function (us) {
            console.log(us);
            _this.historylist = us;
            _this.message = us.message;
        });
    };
    HistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! ./history.component.html */ "./src/app/history/history.component.html"),
            styles: [__webpack_require__(/*! ./history.component.css */ "./src/app/history/history.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _history_service__WEBPACK_IMPORTED_MODULE_2__["HistoryService"], _cookies_service__WEBPACK_IMPORTED_MODULE_3__["CookiesService"]])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/kyc.service.ts":
/*!********************************!*\
  !*** ./src/app/kyc.service.ts ***!
  \********************************/
/*! exports provided: KYCService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KYCService", function() { return KYCService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _cookies_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cookies.service */ "./src/app/cookies.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var KYCService = /** @class */ (function () {
    function KYCService(http, cookies) {
        this.http = http;
        this.cookies = cookies;
    }
    KYCService.prototype.auth = function (apikey, name, idnum, country, age) {
        var _this = this;
        // let refid = RegisterService.getParameterByName('refid', null) || '10099'
        return this.http.get(_login_service__WEBPACK_IMPORTED_MODULE_2__["BASEAPI"] + 'account/KYC/' + apikey + '/' + name + '/' + idnum + '/' + country + '/' + age, _login_service__WEBPACK_IMPORTED_MODULE_2__["httpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (user) {
            // console.log(LoginService.getFormUrlEncoded(this.authData));
            _this.cookies.setCookie('usr', JSON.stringify(user), 1);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('fetchhistory')));
    };
    KYCService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            // this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    KYCService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _cookies_service__WEBPACK_IMPORTED_MODULE_5__["CookiesService"]])
    ], KYCService);
    return KYCService;
}());



/***/ }),

/***/ "./src/app/kyc/kyc.component.css":
/*!***************************************!*\
  !*** ./src/app/kyc/kyc.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * Specific styles of signin component\r\n */\r\n/*\r\n * General styles\r\n */\r\nbody, html {\r\n  height: 100%;\r\n  background-repeat: no-repeat;\r\n  background-image: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));\r\n}\r\n.card-container.card {\r\n  max-width: 450px;\r\n  padding: 40px 40px;\r\n}\r\n.btn {\r\n  font-weight: 700;\r\n  height: 36px;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n      user-select: none;\r\n  cursor: default;\r\n}\r\n/*\r\n * Card component\r\n */\r\n.card {\r\n  background-color: #F7F7F7;\r\n  /* just in case there no content*/\r\n  padding: 20px 25px 30px;\r\n  margin: 0 auto 25px;\r\n  margin-top: 50px;\r\n  /* shadows and rounded borders */\r\n  border-radius: 2px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n.profile-img-card {\r\n  width: 96px;\r\n  height: 96px;\r\n  margin: 0 auto 10px;\r\n  display: block;\r\n  border-radius: 50%;\r\n}\r\n/*\r\n * Form styles\r\n */\r\n.profile-name-card {\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  margin: 10px 0 0;\r\n  min-height: 1em;\r\n}\r\n.reauth-email {\r\n  display: block;\r\n  color: #404040;\r\n  line-height: 2;\r\n  margin-bottom: 10px;\r\n  font-size: 14px;\r\n  text-align: center;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  box-sizing: border-box;\r\n}\r\n.form-signin #inputEmail,\r\n.form-signin #inputPassword,\r\n.form-signin #otp{\r\n  direction: ltr;\r\n  height: 44px;\r\n  font-size: 16px;\r\n}\r\n.form-signin input[type=email],\r\n.form-signin input[type=password],\r\n.form-signin input[type=text],\r\n.form-signin button {\r\n  width: 100%;\r\n  display: block;\r\n  margin-bottom: 10px;\r\n  z-index: 1;\r\n  position: relative;\r\n  box-sizing: border-box;\r\n}\r\n.form-signin .form-control:focus {\r\n  border-color: rgb(104, 145, 162);\r\n  outline: 0;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\r\n}\r\n.btn.btn-signin {\r\n  /*background-color: #4d90fe; */\r\n  /*background-color: rgb(104, 145, 162);*/\r\n  /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\r\n  padding: 0px;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  height: 36px;\r\n  border-radius: 3px;\r\n  border: none;\r\n  transition: all 0.218s;\r\n}\r\n.btn.btn-signin:hover,\r\n.btn.btn-signin:active,\r\n.btn.btn-signin:focus {\r\n  /*background-color: rgb(12, 97, 33);*/\r\n}\r\n.forgot-password {\r\n  color: rgb(104, 145, 162);\r\n}\r\n.forgot-password:hover,\r\n.forgot-password:active,\r\n.forgot-password:focus{\r\n  color: rgb(12, 97, 33);\r\n}\r\n"

/***/ }),

/***/ "./src/app/kyc/kyc.component.html":
/*!****************************************!*\
  !*** ./src/app/kyc/kyc.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"card card-container\" *ngIf=\"step1\">\r\n    <p id=\"d-name\" class=\"profile-name-card\"></p>\r\n    <pre style=\"max-height: 400px;overflow-scrolling: auto; overflow-wrap: break-spaces\">\r\n      重要声明\r\n你承认、理解并同意，如果你是下列地理区域或国家的公民、国民、居民（税务或其他）、居所 和/或绿卡持有人，你将无资格购买任何的PIDEX（i）PIDEX的出售很可能被解释为出售一种证券 （无论如何命名）或投资产品和/或（ii）适用法律、法令、条例、条约或行政法禁止访问或参与PIDEX数字资产销售或PIDEX World平台，和/或（包括但不限于美利坚合众国、加拿大、新西兰、中华人 民共和国和大韩民国）\r\n\r\n所有的出资将被用于提高、促进一个分布式全球游戏社区的研究、设计和开发、倡导，该社区以一种新的游戏模式和激励系统运行，使忠实游戏玩家适当地得到报酬，并使游戏开发者通过透明的营销工具接触玩家，让真正的游戏爱好者能够与其他玩家分享他们的体验。本公司和/或其各附属公司将开发、管理 和运营PIDEX World平台\r\n\r\n本白皮书仅用于通知PIDEX的潜在贡献者，阐述我们的愿景及针对PIDEX系统的架构和技术方法的建议和意见。本白皮书在各方面均不具有约束力，不对任何方形成任何种类的法律义务。它仅用于信息传递目的，不得包含在任何合约内，不承诺传递任何材料、代码或功能，请自行判断是否决定购买。\r\n\r\nPIDEX系统的最终实施将受到监管风险，参与者的参与以及所采用的开发技术的影响。PIDEX系统的最终实施受制于法规及监管政策的变动、捐助者参与力度及系统所采用技术的开发程度。无论任何阶段，任何情况（包括但不限于基于法律法规及相关政策要求或任何商业业务所需的情况），关于本白皮书所涉及的技术和产品的开发事宜，PIDEX均有独断决定权。本白皮书所做陈述仅供参考，不构成任何承诺，谨请诸 位充分考虑自身的风险承受能力，自行判断后进行捐助和/或参与。\r\n\r\n玩家在参与游戏和线上游戏时需承担风险，软件可能会遭遇攻击，出现漏洞、运营者错误和其它不可预测的问题，可能会导致所存储的价值丢失。\r\n\r\n此外，你承认，情况可能会发生变化，因此本白皮书可能因此而过时;本公司 没有义务进行与此种情况有关的更新或更正。\r\n\r\n请仔细阅读白皮书中“法律考虑，风险和免责声明”部分的内容。\r\n        </pre>\r\n    <button class=\"btn btn-lg btn-outline-primary btn-block btn-signin\" type=\"submit\" (click)=\"step2=true;step1=false;\">{{'agree'|translate}}</button>\r\n    <button class=\"btn btn-lg btn-outline-primary btn-block btn-signin\" type=\"submit\" >{{'notagree'|translate}}</button>\r\n  </div>\r\n  <div class=\"card card-container\" *ngIf=\"step2\">\r\n    <p id=\"d-nsame\" class=\"profile-name-card\"></p>\r\n    <form class=\"form-signin\">\r\n      <span id=\"d-email\" class=\"reauth-email\"></span>\r\n      <input  [(ngModel)]=\"name\" name=\"inputEmail\" class=\"form-control\" [placeholder]=\"'yourname'|translate\" required autofocus>\r\n      <input [(ngModel)]=\"idnum\"  name=\"inputPhone\" class=\"form-control\" [placeholder]=\"'idnum'|translate\" required>\r\n      <input [(ngModel)]=\"country\"  name=\"inputPhone\" class=\"form-control\" [placeholder]=\"'country'|translate\" required>\r\n      <input [(ngModel)]=\"age\" type=\"number\" name=\"inputPhone\" class=\"form-control\" [placeholder]=\"'age'|translate\" required>\r\n\r\n\r\n      <!--label>\r\n        <input type=\"checkbox\" value=\"remember-me\"> Remember me\r\n      </label-->\r\n\r\n      <button class=\"btn btn-lg btn-outline-primary btn-block btn-signin\" type=\"submit\" (click)=\"reg()\">{{'submit'|translate}}</button>\r\n      <div *ngIf=\"newusr\">\r\n        <!--p >你的 password 是 {{newusr.Password}}</p>\r\n        <!--p >你的 TOTP Key 是 {{newusr.Key}}</p>\r\n        <p-- >這些資料只會出現一次，請謹記。</p-->\r\n        <p>{{'loginandbuy'|translate}}</p>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/kyc/kyc.component.ts":
/*!**************************************!*\
  !*** ./src/app/kyc/kyc.component.ts ***!
  \**************************************/
/*! exports provided: KYCComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KYCComponent", function() { return KYCComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _kyc_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kyc.service */ "./src/app/kyc.service.ts");
/* harmony import */ var _cookies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cookies.service */ "./src/app/cookies.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KYCComponent = /** @class */ (function () {
    function KYCComponent(kycservice, cookies) {
        this.kycservice = kycservice;
        this.cookies = cookies;
        this.step1 = true;
        if (this.cookies.getCookie('usr') != '') {
            this.user = (JSON.parse(this.cookies.getCookie('usr')));
        }
    }
    KYCComponent.prototype.ngOnInit = function () {
    };
    KYCComponent.prototype.reg = function () {
        var _this = this;
        // console.log('clicked');
        this.kycservice.auth(this.user.APIKey, this.name.trim(), this.idnum.trim(), this.country.trim(), this.age)
            .subscribe(function (user) {
            _this.newusr = user;
            location.reload();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], KYCComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], KYCComponent.prototype, "age", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], KYCComponent.prototype, "idnum", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], KYCComponent.prototype, "country", void 0);
    KYCComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-kyc',
            template: __webpack_require__(/*! ./kyc.component.html */ "./src/app/kyc/kyc.component.html"),
            styles: [__webpack_require__(/*! ./kyc.component.css */ "./src/app/kyc/kyc.component.css")]
        }),
        __metadata("design:paramtypes", [_kyc_service__WEBPACK_IMPORTED_MODULE_1__["KYCService"], _cookies_service__WEBPACK_IMPORTED_MODULE_2__["CookiesService"]])
    ], KYCComponent);
    return KYCComponent;
}());



/***/ }),

/***/ "./src/app/login.service.ts":
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/*! exports provided: BASEAPI, User, AuthData, httpOptions, LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASEAPI", function() { return BASEAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthData", function() { return AuthData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpOptions", function() { return httpOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _cookies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cookies.service */ "./src/app/cookies.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BASEAPI = 'https://api.bacc.tech/api/v1/';
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var AuthData = /** @class */ (function () {
    function AuthData() {
    }
    return AuthData;
}());

var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' })
};
var LoginService = /** @class */ (function () {
    function LoginService(http, cookies) {
        this.http = http;
        this.cookies = cookies;
        this.heroesUrl = BASEAPI + 'account/login/'; // URL to web api\
    }
    LoginService_1 = LoginService;
    LoginService.prototype.logout = function () {
        this.cookies.deleteCookie('usr');
        this.cookies.deleteCookie('loggedinonce');
        location.reload();
    };
    LoginService.getFormUrlEncoded = function (toConvert) {
        var formBody = [];
        for (var property in toConvert) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(toConvert[property]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        return formBody.join('&');
    };
    LoginService.prototype.auth = function (email, password, otp) {
        var _this = this;
        return this.http.get(this.heroesUrl + email + '/' + password + '/' + otp, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (user) {
            console.log(LoginService_1.getFormUrlEncoded(_this.authData));
            _this.cookies.setCookie('usr', JSON.stringify(user), 1);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('fetchuser')));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    LoginService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    LoginService = LoginService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _cookies_service__WEBPACK_IMPORTED_MODULE_4__["CookiesService"]])
    ], LoginService);
    return LoginService;
    var LoginService_1;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * Specific styles of signin component\r\n */\r\n/*\r\n * General styles\r\n */\r\nbody, html {\r\n  height: 100%;\r\n  background-repeat: no-repeat;\r\n  background-image: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));\r\n}\r\n.card-container.card {\r\n  max-width: 350px;\r\n  padding: 40px 40px;\r\n}\r\n.btn {\r\n  font-weight: 700;\r\n  height: 36px;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n      user-select: none;\r\n  cursor: default;\r\n}\r\n/*\r\n * Card component\r\n */\r\n.card {\r\n  background-color: #F7F7F7;\r\n  /* just in case there no content*/\r\n  padding: 20px 25px 30px;\r\n  margin: 0 auto 25px;\r\n  margin-top: 50px;\r\n  /* shadows and rounded borders */\r\n  border-radius: 2px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n.profile-img-card {\r\n  width: 96px;\r\n  height: 96px;\r\n  margin: 0 auto 10px;\r\n  display: block;\r\n  border-radius: 50%;\r\n}\r\n/*\r\n * Form styles\r\n */\r\n.profile-name-card {\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  margin: 10px 0 0;\r\n  min-height: 1em;\r\n}\r\n.reauth-email {\r\n  display: block;\r\n  color: #404040;\r\n  line-height: 2;\r\n  margin-bottom: 10px;\r\n  font-size: 14px;\r\n  text-align: center;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  box-sizing: border-box;\r\n}\r\n.form-signin #inputEmail,\r\n.form-signin #inputPassword,\r\n.form-signin #otp{\r\n  direction: ltr;\r\n  height: 44px;\r\n  font-size: 16px;\r\n}\r\n.form-signin input[type=email],\r\n.form-signin input[type=password],\r\n.form-signin input[type=text],\r\n.form-signin button {\r\n  width: 100%;\r\n  display: block;\r\n  margin-bottom: 10px;\r\n  z-index: 1;\r\n  position: relative;\r\n  box-sizing: border-box;\r\n}\r\n.form-signin .form-control:focus {\r\n  border-color: rgb(104, 145, 162);\r\n  outline: 0;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\r\n}\r\n.btn.btn-signin {\r\n  /*background-color: #4d90fe; */\r\n  /*background-color: rgb(104, 145, 162);*/\r\n  /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\r\n  padding: 0px;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  height: 36px;\r\n  border-radius: 3px;\r\n  border: none;\r\n  transition: all 0.218s;\r\n}\r\n.btn.btn-signin:hover,\r\n.btn.btn-signin:active,\r\n.btn.btn-signin:focus {\r\n  /*background-color: rgb(12, 97, 33);*/\r\n}\r\n.forgot-password {\r\n  color: rgb(104, 145, 162);\r\n}\r\n.forgot-password:hover,\r\n.forgot-password:active,\r\n.forgot-password:focus{\r\n  color: rgb(12, 97, 33);\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"card card-container\" >\r\n    <!-- <img class=\"profile-img-card\" src=\"//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120\" alt=\"\" /> -->\r\n    <img id=\"profile-img\" class=\"profile-img-card\" src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\" />\r\n    <p id=\"profile-name\" class=\"profile-name-card\"></p>\r\n    <form class=\"form-signin\">\r\n      <span id=\"reauth-email\" class=\"reauth-email\"></span>\r\n      <input  [(ngModel)]=\"authData.email\" type=\"email\" name=\"inputEmail\" class=\"form-control\" [placeholder]=\"'email'|translate\" required autofocus>\r\n      <input [(ngModel)]=\"authData.password\" type=\"password\" name=\"inputPassword\" class=\"form-control\" [placeholder]=\"'password'|translate \" required>\r\n\r\n      <div id=\"remember\" class=\"checkbox\">\r\n        <!--label>\r\n          <input type=\"checkbox\" value=\"remember-me\"> Remember me\r\n        </label-->\r\n      </div>\r\n      <button class=\"btn btn-lg btn-outline-primary btn-block btn-signin\" type=\"submit\" (click)=\"add()\">{{'login'|translate}}</button>\r\n      <p *ngIf=\"faillogin\">{{'loginfailed'|translate}}</p>\r\n    </form><!-- /form -->\r\n    <!--a class=\"forgot-password\">\r\n      Forgot the password?\r\n    </a><br-->\r\n    <a class=\"btn btn-primary btn-sm\" (click)=\"registerscreen=true\">\r\n      {{'register'|translate}}\r\n    </a>\r\n  </div><!-- /card-container -->\r\n  <div class=\"card card-container\" *ngIf=\"registerscreen\">\r\n    <p id=\"d-name\" class=\"profile-name-card\"></p>\r\n    <form class=\"form-signin\">\r\n      <span id=\"d-email\" class=\"reauth-email\"></span>\r\n      <input  [(ngModel)]=\"emailreg\" type=\"email\" name=\"inputEmail\" class=\"form-control\" [placeholder]=\"'email'|translate\" required autofocus>\r\n      <div class=\"input-group\">\r\n        <ngx-intl-tel-input [(value)]=\"phonereg\"></ngx-intl-tel-input>\r\n        <input [(ngModel)]=\"pwreg\" type=\"password\" name=\"inputPhone\" class=\"form-control\" [placeholder]=\"'password'|translate \" required>\r\n        <input [(ngModel)]=\"pwreg2\" type=\"password\" name=\"inputPhone\" class=\"form-control\" [placeholder]=\"'confirmpass'|translate\" required>\r\n        <p *ngIf=\"pwnm\">Passwords do not match</p>\r\n      </div>\r\n\r\n\r\n\r\n        <!--label>\r\n          <input type=\"checkbox\" value=\"remember-me\"> Remember me\r\n        </label-->\r\n\r\n      <button class=\"btn btn-lg btn-outline-primary btn-block btn-signin\" type=\"submit\" (click)=\"reg()\">Register</button>\r\n      <div *ngIf=\"newusr\">\r\n        <!--p >你的 password 是 {{newusr.Password}}</p>\r\n        <!--p >你的 TOTP Key 是 {{newusr.Key}}</p>\r\n        <p-- >這些資料只會出現一次，請謹記。</p-->\r\n        <p>{{'loginandbuy'|translate}}</p>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div><!-- /container -->\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../register.service */ "./src/app/register.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, regservice) {
        this.loginService = loginService;
        this.regservice = regservice;
        this.authData = {
            email: '',
            password: '',
            otp: ''
        };
        this.registerscreen = false;
    }
    LoginComponent.prototype.returnloginstatus = function () {
        return this.loggedin;
    };
    LoginComponent.prototype.add = function () {
        var _this = this;
        // console.log('clicked');
        this.loginService.auth(this.authData.email.trim().toLowerCase(), this.authData.password.trim(), '990993')
            .subscribe(function (user) {
            if (user.ID > 0) {
                console.log('Login Successful');
                location.reload();
            }
            else {
                _this.faillogin = true;
                //this.errmsh = user.Name;
            }
        });
    };
    LoginComponent.prototype.reg = function () {
        var _this = this;
        // console.log('clicked');
        if (this.pwreg == this.pwreg2) {
            this.regservice.auth(this.emailreg.trim().toLowerCase(), this.phonereg.trim(), this.pwreg.trim())
                .subscribe(function (user) {
                _this.newusr = user;
            });
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
        if (this.pwreg != this.pwreg2) {
            this.pwnm = true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _login_service__WEBPACK_IMPORTED_MODULE_1__["AuthData"])
    ], LoginComponent.prototype, "authData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "emailreg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "phonereg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "areacode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "pwreg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "pwreg2", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"], _register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register.service.ts":
/*!*************************************!*\
  !*** ./src/app/register.service.ts ***!
  \*************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterService = /** @class */ (function () {
    function RegisterService(http, activatedRoute) {
        this.http = http;
        this.activatedRoute = activatedRoute;
    }
    RegisterService_1 = RegisterService;
    RegisterService.getParameterByName = function (name, url) {
        if (!url)
            url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url);
        if (!results)
            return null;
        if (!results[2])
            return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    };
    // @ts-ignore
    RegisterService.prototype.auth = function (email, phone, pw) {
        var refid = RegisterService_1.getParameterByName('refid', null) || '10099';
        return this.http.get(_login_service__WEBPACK_IMPORTED_MODULE_2__["BASEAPI"] + 'account/register/' + email + '/' + phone + '/' + refid + '/' + pw, _login_service__WEBPACK_IMPORTED_MODULE_2__["httpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('fetchhistory')));
    };
    RegisterService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            // this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    RegisterService = RegisterService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], RegisterService);
    return RegisterService;
    var RegisterService_1;
}());



/***/ }),

/***/ "./src/app/wallet.service.ts":
/*!***********************************!*\
  !*** ./src/app/wallet.service.ts ***!
  \***********************************/
/*! exports provided: StandardResponse, WalletService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardResponse", function() { return StandardResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletService", function() { return WalletService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StandardResponse = /** @class */ (function () {
    function StandardResponse() {
    }
    return StandardResponse;
}());

var WalletService = /** @class */ (function () {
    function WalletService(http) {
        this.http = http;
        this.http1Options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"](),
            responseType: 'text'
        };
    }
    WalletService.prototype.auth = function (user) {
        return this.http.get("https://api.etherscan.io/api?module=account&action=balance&address=" + user.Pub + "&tag=latest&apikey=%20YMHDHW84RT1GJQBM9V44J3F59VXGIFSGMK", _login_service__WEBPACK_IMPORTED_MODULE_3__["httpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('fetchhistory')));
    };
    WalletService.prototype.sendtransaction = function (apikey, size, dest) {
        return this.http.get(_login_service__WEBPACK_IMPORTED_MODULE_3__["BASEAPI"] + 'trade/createorder/' + apikey + '/' + size + '/' + dest, this.http1Options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('fetchhistory')));
    };
    WalletService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    WalletService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WalletService);
    return WalletService;
}());



/***/ }),

/***/ "./src/app/wallet/wallet.component.css":
/*!*********************************************!*\
  !*** ./src/app/wallet/wallet.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pt{\r\n  padding-top: 30px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/wallet/wallet.component.html":
/*!**********************************************!*\
  !*** ./src/app/wallet/wallet.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!kycscreen\">\r\n<div class=\"container pt\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <p *ngFor=\"let alert of alerts\">\r\n        <ngb-alert [type]=\"alert.type\" (close)=\"close(alert)\">{{ alert.message }}</ngb-alert>\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h3>Token</h3>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"jumbotron\">\r\n            <h1>\r\n              {{baccbalance+user.Initamount}} PDX\r\n            </h1>\r\n            <p>~{{balance/1000000000000000000+user.Initamount/1500}} ETH</p>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-12\">\r\n              <button class=\"btn btn-primary btn-lg\" (click)=\"open(content)\" disabled>\r\n                {{'send'|translate}}\r\n              </button>\r\n              <button class=\"btn btn-primary btn-lg\" (click)=\"open(content2)\">\r\n                {{'buy'|translate}}\r\n              </button>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row pt\">\r\n    <div class=\"col-md-9\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h3>History</h3>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-12\">\r\n              <app-history></app-history>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-12\">\r\n              <a class=\"btn btn-outline-primary btn-lg\" href=\"assets/PidexWhitepaperVer2.1.7.docx\" target=\"_blank\">\r\n                {{'whitepaper'|translate}}\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <!--div class=\"row\">\r\n            <div class=\"col-12\">\r\n              <button class=\"btn btn-outline-primary btn-lg\">\r\n                MVP Version\r\n              </button>\r\n            </div>\r\n          </div-->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<ng-template #content let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">{{'send'|translate}} BACS</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <p>{{'yourethereumaddress'|translate}}</p>\r\n    <input [(ngModel)]=\"dest\" name=\"dest\" class=\"form-control\"  placeholder=\"0x..........\"/>\r\n    <pre>{{'donotwithdraw'|translate}}Do not withdraw tokens to an exchange and only withdraw to wallets which support ERC20 tokens (MEW, Metamask, MIST, Ethereum wallet and others)\r\n    </pre>\r\n    <p>{{'amount'|translate}} PDX</p>\r\n    <input class=\"form-control\" type=\"number\" name=\"size\" [(ngModel)]=\"size\" placeholder=\"20\"/>\r\n    <pre>{{'minwithdraw'|translate}}: 500 PDX\r\n    </pre>\r\n    <p *ngIf=\"sendresult\">{{sendresult}}</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">{{'send'|translate}}</button>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n<ng-template #content2 let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">{{'buy'|translate}}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"input-group mb-3\">\r\n      <input id=\"myInput\" type=\"text\" class=\"form-control\" [value]=\"user.Pub\" placeholder=\"Recipient's username\" aria-label=\"Recipient's username\" aria-describedby=\"button-addon2\">\r\n      <div class=\"input-group-append\">\r\n        <button class=\"btn btn-outline-secondary\" type=\"button\" id=\"button-addon2\" (click)=\"myFunction()\">{{'copy'|translate}}</button>\r\n      </div>\r\n    </div>\r\n    <p>1 ETH = 1500 PDX</p>\r\n    <pre>{{'send'|translate}} ETH {{'tothisaddress'|translate}}. {{'checkforqr'|translate}}</pre>\r\n    <img class=\"img-fluid\" src=\"https://sales.bacc.tech/cgi/qr_img.php?d={{user.Pub}}&e=M&s=4\"  alt=\"\">\r\n  </div>\r\n</ng-template>\r\n</div>\r\n<div *ngIf=\"kycscreen\"><app-kyc></app-kyc></div>\r\n"

/***/ }),

/***/ "./src/app/wallet/wallet.component.ts":
/*!********************************************!*\
  !*** ./src/app/wallet/wallet.component.ts ***!
  \********************************************/
/*! exports provided: WalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletComponent", function() { return WalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cookies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cookies.service */ "./src/app/cookies.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _wallet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wallet.service */ "./src/app/wallet.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ALERTS = [{
        type: 'success',
        message: '酒神代幣預售在 2018年11月7日香港UTC+8 的00:00上開始，並將一直持續到2019年2月6日香港UTC+8的23:59\n' +
            '以30%MORE COIN 預售5000萬TOKEN',
    }
];
var WalletComponent = /** @class */ (function () {
    function WalletComponent(cookies, modalService, walletservice) {
        this.cookies = cookies;
        this.modalService = modalService;
        this.walletservice = walletservice;
        if (this.cookies.getCookie('usr') != '') {
            this.user = (JSON.parse(this.cookies.getCookie('usr')));
            if (this.user.ID > 0 && this.user.Name) {
                this.loggedin = true;
            }
            else {
                this.kycscreen = true;
            }
        }
        this.reset();
    }
    WalletComponent.prototype.myFunction = function () {
        /* Get the text field */
        var copyText = document.getElementById("myInput");
        /* Select the text field */
        copyText.select();
        /* Copy the text inside the text field */
        document.execCommand("copy");
        /* Alert the copied text */
        alert("Copied the text: " + copyText.value);
    };
    WalletComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.walletservice.auth(this.user)
            .subscribe(function (user) {
            _this.balance = user.result;
            _this.baccbalance = Math.floor(user.result * 1300 / 1000000000000000000);
            console.log(user);
        });
    };
    WalletComponent.prototype.send = function () {
        var _this = this;
        this.walletservice.sendtransaction(this.user.APIKey, this.size, this.dest).subscribe(function (result) {
            _this.sendresult = result;
        });
    };
    WalletComponent.prototype.close = function (alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    };
    WalletComponent.prototype.reset = function () {
        this.alerts = Array.from(ALERTS);
    };
    WalletComponent.prototype.open = function (content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            //this.closeResult = `Closed with: ${result}`;
        }, function (reason) {
            //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WalletComponent.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WalletComponent.prototype, "dest", void 0);
    WalletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wallet',
            template: __webpack_require__(/*! ./wallet.component.html */ "./src/app/wallet/wallet.component.html"),
            styles: [__webpack_require__(/*! ./wallet.component.css */ "./src/app/wallet/wallet.component.css")]
        }),
        __metadata("design:paramtypes", [_cookies_service__WEBPACK_IMPORTED_MODULE_1__["CookiesService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _wallet_service__WEBPACK_IMPORTED_MODULE_3__["WalletService"]])
    ], WalletComponent);
    return WalletComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\bacchuswallet\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map