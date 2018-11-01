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

module.exports = ".pt{\n  padding-top: 30px;\n}\n/*.blue{\n  background: #b31569 linear-gradient(0deg,#b31569,#e63250);\n  min-height: 1024px;\n}\n*/\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"blue\">\n  <div class=\"container\">\n    <div class=\"row pt\">\n      <div class=\"col-md-2\">\n        <img class=\"img-fluid\" src=\"https://bacc.tech/wp-content/uploads/2018/07/Artboard-1.png\" />\n      </div>\n      <div class=\"col-md-7\"></div>\n      <div class=\"col-md-3\" *ngIf=\"loggedin\">\n        <div ngbDropdown class=\"d-inline-block\">\n          <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>{{user.Email}}</button>\n          <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n            <button class=\"dropdown-item\">Settings</button>\n            <button class=\"dropdown-item\" (click)=\"logout()\">Logout</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-wallet *ngIf=\"loggedin\"></app-wallet>\n  <app-login *ngIf=\"!loggedin\"></app-login>\n</div>\n"

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
    function AppComponent(cookies, login) {
        this.cookies = cookies;
        this.login = login;
        this.title = 'app';
        this.loggedin = false;
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
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_cookies_service__WEBPACK_IMPORTED_MODULE_1__["CookiesService"], _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













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

module.exports = "<div *ngIf=\"historylist\">\n  <p *ngIf=\"message\">\n    Here you transaction history will be shown\n  </p>\n  <div *ngFor=\"let entry of historylist.result\">\n    <div *ngIf=\"entry.to==user.Pub\">\n      <h4>{{entry.from}} => {{entry.to}}</h4>\n      <a><pre>success: {{entry.hash}}</pre></a>\n      Amount: {{entry.value/1000000000000000000}}\n    </div>\n  </div>\n\n</div>\n\n"

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

module.exports = "/*\n * Specific styles of signin component\n */\n/*\n * General styles\n */\nbody, html {\n  height: 100%;\n  background-repeat: no-repeat;\n  background-image: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));\n}\n.card-container.card {\n  max-width: 450px;\n  padding: 40px 40px;\n}\n.btn {\n  font-weight: 700;\n  height: 36px;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  cursor: default;\n}\n/*\n * Card component\n */\n.card {\n  background-color: #F7F7F7;\n  /* just in case there no content*/\n  padding: 20px 25px 30px;\n  margin: 0 auto 25px;\n  margin-top: 50px;\n  /* shadows and rounded borders */\n  border-radius: 2px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n.profile-img-card {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 10px;\n  display: block;\n  border-radius: 50%;\n}\n/*\n * Form styles\n */\n.profile-name-card {\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  margin: 10px 0 0;\n  min-height: 1em;\n}\n.reauth-email {\n  display: block;\n  color: #404040;\n  line-height: 2;\n  margin-bottom: 10px;\n  font-size: 14px;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  box-sizing: border-box;\n}\n.form-signin #inputEmail,\n.form-signin #inputPassword,\n.form-signin #otp{\n  direction: ltr;\n  height: 44px;\n  font-size: 16px;\n}\n.form-signin input[type=email],\n.form-signin input[type=password],\n.form-signin input[type=text],\n.form-signin button {\n  width: 100%;\n  display: block;\n  margin-bottom: 10px;\n  z-index: 1;\n  position: relative;\n  box-sizing: border-box;\n}\n.form-signin .form-control:focus {\n  border-color: rgb(104, 145, 162);\n  outline: 0;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\n}\n.btn.btn-signin {\n  /*background-color: #4d90fe; */\n  /*background-color: rgb(104, 145, 162);*/\n  /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\n  padding: 0px;\n  font-weight: 700;\n  font-size: 14px;\n  height: 36px;\n  border-radius: 3px;\n  border: none;\n  transition: all 0.218s;\n}\n.btn.btn-signin:hover,\n.btn.btn-signin:active,\n.btn.btn-signin:focus {\n  /*background-color: rgb(12, 97, 33);*/\n}\n.forgot-password {\n  color: rgb(104, 145, 162);\n}\n.forgot-password:hover,\n.forgot-password:active,\n.forgot-password:focus{\n  color: rgb(12, 97, 33);\n}\n"

/***/ }),

/***/ "./src/app/kyc/kyc.component.html":
/*!****************************************!*\
  !*** ./src/app/kyc/kyc.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card card-container\" *ngIf=\"step1\">\n    <p id=\"d-name\" class=\"profile-name-card\"></p>\n    <pre style=\"max-height: 400px;overflow-scrolling: auto; overflow-wrap: break-spaces\">\n        重要聲明\n請仔細閱讀本白皮書免責聲明部分，並諮詢法律和財務專家以獲得進一步的指導。\n\n本系統是一份初步草案，將在BACCHUS酒神代幣可供兌換之可能前進行修訂，其中包括有關以下方面的訊息:\n\t兌換BACCHUS酒神幣可能受到限制的國家（若有）；和\n\t兌換BACCHUS酒神幣相關的其他風險。\n\n白皮書的最終版本將在BACCHUS酒神代幣可供兌換之前上載在BACCHUS酒神網站，以供任何人士兌換決定之前的全面審查。\n\n本白皮書草案不應被誤解為兌換或徵求兌換的方案。本白皮書草案中列出的人員不是也不會兌換BACCHUS酒神代幣。進行BACCHUS酒神代幣可供兌換的法定公司名稱將稍後披露。\n\nBACCHUS酒神代幣並不打算在任何司法管轄區構成證券。本白皮書不構成任何類型的招股說明書或要約，也不構成對任何司法管轄區證券或招攬投資證券的要約。本白皮書不構成兌換或徵求兌換BACCHUS酒神代幣的任何意見或任何意見的一部分，也不構成任何合同或投資決定的基礎或依賴于任何合同或投資決定。\n\n兌換BACCHUS酒神幣可能受到限制的國家\n投資於BACCHUS酒神團隊涉及風險，僅適合擁有富裕資金的人士參與，而他們對BACCHUS酒神團隊中投資的流動性亦沒有迫切的要求，他們亦對BACCHUS酒神團隊所涉及的風險完全瞭解並願意承擔，且有足夠的財務資源來承受這些風險。投資者必須能夠承擔他們在BACCHUS酒神團隊中全部投資的損失。團隊中的權益不存在公開市場，且在預期的未來亦不會出現。團隊亦對投資者退股或轉讓權益有諸多限制。\n\n權益僅售予在認購協議中作出（其中包括）以下陳述的投資者：\n(a)\t他自承費用且僅出於投資目的而購買權益，且不會轉售或分派\n(b)\t他明白權益並無依照美國《證券法》或外國類似證券法進行登記，而其轉讓權利受美國《證券法》及美國、州和國外基金相關法律條文所限制，且當中權益並不存在市場；\n(c)\t他是：\ni.\t一名美國《證券法》D條例中的“受信投資者”；\nii.\t且不是一名美國《證券法》S條例中的“美國人”。\n\n團隊將要求身為合夥企業、集團公司、有限責任公司、信託公司或其它實體的潛在投資者做出陳述，其內容旨在使團隊豁免作為一家投資公司根據投資公司法進行註冊。各潛在投資者均須簽署和交付一份認購協定，作出其它陳述，並符合認購協議所述其它標準。可按投資者要求向其提供一份認購協定以及一份合夥協定。若干司法權區的投資者或須符合所在司法權區的證券法規提出的其它要求或標準。與本項目無關。\n上述適當性標準為潛在投資者的最低適當性要求。各潛在合資格投資者以及其投資、稅務、法律、會計顧問和其它顧問徵詢意見確定此投資是否適合該投資者。\n\n1\t對於開曼群島投資者：\n于開曼群島不可向公眾發售本權益或邀約認購權益。\n\n2\t對於中華人民共和國投資者：\n不可向中華人民共和國公眾直接或間接發售權益，不可向中華人民共和國公眾提供本文（並無提交給中國證券監督管理委員會）和本文所載有關團隊權益的發售材料和資訊，上述BACCHUS酒神團隊不可用於向中華人民共和國公眾進行認購發售或出售權益。BACCHUS酒神團隊權益只可發售或出售予獲准進行外匯業務及在中國以外進行離岸投資業務的中國機構。根據中國相關外匯管制規定，中國投資者須遵守外匯管制批准和備案的規定。投資者須負責從中華人民共和國相關政府部門取得所有相關的政府批文、審核、許可或登記（若有），這些部門包括但不限於國家外匯管理局、中國證券監督管理委員會、中國銀行業監督管理委員會、中華人民共和國商務部、國家發改委和其它相關監管機構。投資者須遵守中華人民共和國的相關規定，包括但不限於相關外匯規定（例如返程投資的規定）及/或海外投資規定。\n\n3\t對於香港投資者：\n本白皮書並未提交給相關公司註冊處進行註冊，香港監管機構並未審閱其內容。香港證券及期貨事務監察委員會並未批准此團隊。因此：\n(a)\t不可在香港通過任何形式向香港證券及期貨條例（香港法例第571章）定義的“專業投資者”以外的人士發售或出售權益，本白皮書亦不可依據上述法例的任何規則，或對照公司條例（香港法例第32章）列出的定義而構成“招股書”，或在按公司條例規定未構成向公開募集的其它各種情況下發售或出售權益；及\n(b)\t除非權益僅針對或打算針對香港之外的人士或“專業投資者”發售，任何人均不得在香港或其它地方對香港公眾發佈或為發佈之目的而留存任何與權益相關的邀請、廣告或其它檔（除非按照香港證券法規的要求可以這樣操作）。香港監管機構並無審閱本私募備忘錄的內容。建議閣下處理發售時須謹慎。若閣下對本文內容有疑問，閣下應聽取獨立的專業意見。\n\n4.\t對於日本投資者：\n權益發售並無且將不會根據日本證券及交易法進行登記，除非依據日本證券及交易法和其它日本相關法規所提供的豁免，不可在日本直接或間接向其居民發售或出售權益。\n\n\n5.\t於韓國投資者：\n團隊和投資經理均無根據韓國法律規定就本白皮書的接受者購買權益的資格作出相關陳述；韓國相關法律包括但不限於外匯交易法和相關規定。權益並無根據韓國證券及交易法或韓國間接投資資產管理法進行登記。除非跟從韓國相關法例，權益將不可在韓國直接或間接提供、出售或派發、或提供、出售或派發予重新提供或轉售之任何韓國居民。\n\n6.\t對於盧森堡投資者：\n根據盧森堡證券及期貨法第289章第304條的規定，本白皮書所述發售或邀約只可對機構投資者或其它人士進行，而根據第305條的規定則只可向資深投資者而非普通公眾發售或邀約。根據上述盧森堡法例，本白皮書並非招股書，因此，有關招股書內容的法定責任並不適用。潛在投資者須仔細考慮投資是否適合他們。本白皮書並無在盧森堡金融管理局登記為招股書，因此，本白皮書和其它與發售或出售或邀約認購或購買權益之有關檔或材料不可分發給盧森堡普通公眾，或對盧森堡任何普通公眾\n\n發售或出售或邀約認購或購買此權益，除非發售或出售或邀約認購或購買予\n(a)\t機構投資者或其它人士（根據盧森堡證券及期貨法第304條規定的條件；\n(b)\t資深投資者（根據盧森堡證券及期貨法第305條規定的條件；或\n(c)\t其它人士（根據盧森堡證券及期貨法其它適用條文規定的條件。除非通過法律效用，上述盧森堡人士認購或購買的權益不可轉讓。）\n\n\n7.\t對於臺灣投資者：\n團隊並無且不會在臺灣政府機構進行登記。在臺灣出售權益須遵守當地法律規定和限制。不可在臺灣出售、發行或公開發售權益，及只可以私募形式對在臺灣的資深投資者出售。臺灣並無任何人士或公司實體被授權發售或出售權益，或就權益的發售和出售提供意見或作為仲介提供服務。\n\n8.\t對於泰國投資者：\n編制本文的目僅計畫對泰國機構投資者發售權益。本文並非招股書。不可在泰國公開發售權益。\n\n9.\t其它司法權區：\n於沒有遵守登記規定或其它法律規定而進行權益發售或邀約認購或購買權益屬於非法的司法權區，本文並不構成發售權益或邀約認購或購買任何權益。本文不會在任何司法權區根據相關證券法律登記為招股書。若干司法權區可能禁止分發本文，取得本文的人士必須知曉和遵守這些限制。\n\n本文中討論的某些事項涉及我們未來的業績，包括但不限於BACCHUS酒神未來的收入、收益、策略和前景。所有非依據歷史性資料所做的陳述均構成“前瞻性陳述”。這些前瞻性陳述存在風險和不確定性，可能會導致實際結果與預期不符。這些陳述是基於管理層的信念以及管理層依據目前獲得的資訊所做的設想。在本文中，“預期”、“打算”、“估計”、“相信”、“期望”、“應該”、“潛在”、“預測”、“項目”或類似這些用詞的使用，旨屬前瞻性陳述。\n\n謹請讀者注意，不要過分依賴這些前瞻性陳述而作出任何個人決定。儘管我們盡一切努力確保本白皮書中所有資訊的準確性和最新性，但這些材料絕不構成專業意見。 BACCHUS酒神既不保證也不承擔對本文內容的準確性、可靠性、當前性（如本白皮書）或完整性的責任。有意投資此平臺的個人應在徵求本文所載任何資訊之前尋求獨立的專業意見。本白皮書中列出的任何資訊並沒有受到監管機構審查或批准。本白皮書沒有或將要根據任何司法管 轄區 的法律、監管要求或規則，採取這樣的行動。本白皮書的發佈，分發或傳播並不意味著己經遵守適用的 法律、法規要求或規定。\n\n藉由您接受或依賴本白皮書或其任何部分而產生或與之有關的決定，在適用的法律、法規和規則允許的最大範圍內，BACCHUS酒神及其關聯公司和代幣發行合作夥伴不承擔任何形式的侵權、合同或其他方面的任何間接、特殊、附帶、間接或其他損失（包括但不限於收入，收入或利潤的損失，以及使用或資料的丟失）。BACCHUS酒神及其附屬公司和代幣發行合作夥伴不會以任何形式向任何實體或個人作出或聲稱做出任何陳述、保證或承諾，包括與真相、準確性有關的陳述，保證或承諾以及本系統白皮書中提供的任何資訊的完整性。\n    </pre>\n    <button class=\"btn btn-lg btn-outline-primary btn-block btn-signin\" type=\"submit\" (click)=\"step2=true;step1=false;\">同意</button>\n    <button class=\"btn btn-lg btn-outline-primary btn-block btn-signin\" type=\"submit\" >不同意</button>\n  </div>\n  <div class=\"card card-container\" *ngIf=\"step2\">\n    <p id=\"d-nsame\" class=\"profile-name-card\"></p>\n    <form class=\"form-signin\">\n      <span id=\"d-email\" class=\"reauth-email\"></span>\n      <input  [(ngModel)]=\"name\" name=\"inputEmail\" class=\"form-control\" placeholder=\"你的名字\" required autofocus>\n      <input [(ngModel)]=\"idnum\"  name=\"inputPhone\" class=\"form-control\" placeholder=\"身份證字號\" required>\n      <input [(ngModel)]=\"country\"  name=\"inputPhone\" class=\"form-control\" placeholder=\"國籍\" required>\n      <input [(ngModel)]=\"age\" type=\"number\" name=\"inputPhone\" class=\"form-control\" placeholder=\"年齡\" required>\n\n\n      <!--label>\n        <input type=\"checkbox\" value=\"remember-me\"> Remember me\n      </label-->\n\n      <button class=\"btn btn-lg btn-outline-primary btn-block btn-signin\" type=\"submit\" (click)=\"reg()\">Submit</button>\n      <div *ngIf=\"newusr\">\n        <!--p >你的 password 是 {{newusr.Password}}</p>\n        <!--p >你的 TOTP Key 是 {{newusr.Key}}</p>\n        <p-- >這些資料只會出現一次，請謹記。</p-->\n        <p>從現在開始，你就可以登入並且購買BACS。</p>\n      </div>\n    </form>\n  </div>\n</div>\n"

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

module.exports = "/*\n * Specific styles of signin component\n */\n/*\n * General styles\n */\nbody, html {\n  height: 100%;\n  background-repeat: no-repeat;\n  background-image: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));\n}\n.card-container.card {\n  max-width: 350px;\n  padding: 40px 40px;\n}\n.btn {\n  font-weight: 700;\n  height: 36px;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  cursor: default;\n}\n/*\n * Card component\n */\n.card {\n  background-color: #F7F7F7;\n  /* just in case there no content*/\n  padding: 20px 25px 30px;\n  margin: 0 auto 25px;\n  margin-top: 50px;\n  /* shadows and rounded borders */\n  border-radius: 2px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n.profile-img-card {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 10px;\n  display: block;\n  border-radius: 50%;\n}\n/*\n * Form styles\n */\n.profile-name-card {\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  margin: 10px 0 0;\n  min-height: 1em;\n}\n.reauth-email {\n  display: block;\n  color: #404040;\n  line-height: 2;\n  margin-bottom: 10px;\n  font-size: 14px;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  box-sizing: border-box;\n}\n.form-signin #inputEmail,\n.form-signin #inputPassword,\n.form-signin #otp{\n  direction: ltr;\n  height: 44px;\n  font-size: 16px;\n}\n.form-signin input[type=email],\n.form-signin input[type=password],\n.form-signin input[type=text],\n.form-signin button {\n  width: 100%;\n  display: block;\n  margin-bottom: 10px;\n  z-index: 1;\n  position: relative;\n  box-sizing: border-box;\n}\n.form-signin .form-control:focus {\n  border-color: rgb(104, 145, 162);\n  outline: 0;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\n}\n.btn.btn-signin {\n  /*background-color: #4d90fe; */\n  /*background-color: rgb(104, 145, 162);*/\n  /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\n  padding: 0px;\n  font-weight: 700;\n  font-size: 14px;\n  height: 36px;\n  border-radius: 3px;\n  border: none;\n  transition: all 0.218s;\n}\n.btn.btn-signin:hover,\n.btn.btn-signin:active,\n.btn.btn-signin:focus {\n  /*background-color: rgb(12, 97, 33);*/\n}\n.forgot-password {\n  color: rgb(104, 145, 162);\n}\n.forgot-password:hover,\n.forgot-password:active,\n.forgot-password:focus{\n  color: rgb(12, 97, 33);\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card card-container\" >\n    <!-- <img class=\"profile-img-card\" src=\"//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120\" alt=\"\" /> -->\n    <img id=\"profile-img\" class=\"profile-img-card\" src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\" />\n    <p id=\"profile-name\" class=\"profile-name-card\"></p>\n    <form class=\"form-signin\">\n      <span id=\"reauth-email\" class=\"reauth-email\"></span>\n      <input  [(ngModel)]=\"authData.email\" type=\"email\" name=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\n      <input [(ngModel)]=\"authData.password\" type=\"password\" name=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required>\n\n      <div id=\"remember\" class=\"checkbox\">\n        <!--label>\n          <input type=\"checkbox\" value=\"remember-me\"> Remember me\n        </label-->\n      </div>\n      <button class=\"btn btn-lg btn-outline-primary btn-block btn-signin\" type=\"submit\" (click)=\"add()\">Sign in</button>\n      <p *ngIf=\"faillogin\">Login failed!</p>\n    </form><!-- /form -->\n    <!--a class=\"forgot-password\">\n      Forgot the password?\n    </a><br-->\n    <a class=\"btn btn-primary btn-sm\" (click)=\"registerscreen=true\">\n      Register\n    </a>\n  </div><!-- /card-container -->\n  <div class=\"card card-container\" *ngIf=\"registerscreen\">\n    <p id=\"d-name\" class=\"profile-name-card\"></p>\n    <form class=\"form-signin\">\n      <span id=\"d-email\" class=\"reauth-email\"></span>\n      <input  [(ngModel)]=\"emailreg\" type=\"email\" name=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\n      <div class=\"input-group\">\n        <ngx-intl-tel-input [(value)]=\"phonereg\"></ngx-intl-tel-input>\n        <input [(ngModel)]=\"pwreg\" type=\"password\" name=\"inputPhone\" class=\"form-control\" placeholder=\"設定密碼 \" required>\n        <input [(ngModel)]=\"pwreg2\" type=\"password\" name=\"inputPhone\" class=\"form-control\" placeholder=\"確認密碼 \" required>\n        <p *ngIf=\"pwnm\">Passwords do not match</p>\n      </div>\n\n\n\n        <!--label>\n          <input type=\"checkbox\" value=\"remember-me\"> Remember me\n        </label-->\n\n      <button class=\"btn btn-lg btn-outline-primary btn-block btn-signin\" type=\"submit\" (click)=\"reg()\">Register</button>\n      <div *ngIf=\"newusr\">\n        <!--p >你的 password 是 {{newusr.Password}}</p>\n        <!--p >你的 TOTP Key 是 {{newusr.Key}}</p>\n        <p-- >這些資料只會出現一次，請謹記。</p-->\n        <p>從現在開始，你就可以登入並且購買BACS。</p>\n      </div>\n    </form>\n  </div>\n</div><!-- /container -->\n"

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

module.exports = ".pt{\n  padding-top: 30px;\n}\n"

/***/ }),

/***/ "./src/app/wallet/wallet.component.html":
/*!**********************************************!*\
  !*** ./src/app/wallet/wallet.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!kycscreen\">\n<div class=\"container pt\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h3>Token</h3>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"jumbotron\">\n            <h1>\n              {{baccbalance+user.Initamount}} BACCHUS\n            </h1>\n            <p>~{{balance/1000000000000000000+user.Initamount/1300}} ETH</p>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-12\">\n              <button class=\"btn btn-primary btn-lg\" (click)=\"open(content)\" disabled>\n                發送\n              </button>\n              <button class=\"btn btn-primary btn-lg\" (click)=\"open(content2)\">\n                購買\n              </button>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row pt\">\n    <div class=\"col-md-9\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h3>History</h3>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-12\">\n              <app-history></app-history>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-12\">\n              <a class=\"btn btn-outline-primary btn-lg\" href=\"http://commerce.bacc.tech/BACCHUS+區塊鏈+白皮書V6.pdf\" target=\"_blank\">\n                Whitepaper\n              </a>\n            </div>\n          </div>\n          <!--div class=\"row\">\n            <div class=\"col-12\">\n              <button class=\"btn btn-outline-primary btn-lg\">\n                MVP Version\n              </button>\n            </div>\n          </div-->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Send BACC</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>Your Ethereum Address</p>\n    <input [(ngModel)]=\"dest\" name=\"dest\" class=\"form-control\"  placeholder=\"0x..........\"/>\n    <pre>Do not withdraw tokens to an exchange and only withdraw to wallets which support ERC20 tokens (MEW, Metamask, MIST, Ethereum wallet and others)\n    </pre>\n    <p>Amount BACS</p>\n    <input class=\"form-control\" type=\"number\" name=\"size\" [(ngModel)]=\"size\" placeholder=\"20\"/>\n    <pre>Min Withdrawal: 500 BACS\n    </pre>\n    <p *ngIf=\"sendresult\">{{sendresult}}</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Send</button>\n  </div>\n</ng-template>\n\n\n<ng-template #content2 let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Receive</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"input-group mb-3\">\n      <input id=\"myInput\" type=\"text\" class=\"form-control\" [value]=\"user.Pub\" placeholder=\"Recipient's username\" aria-label=\"Recipient's username\" aria-describedby=\"button-addon2\">\n      <div class=\"input-group-append\">\n        <button class=\"btn btn-outline-secondary\" type=\"button\" id=\"button-addon2\" (click)=\"myFunction()\">Copy</button>\n      </div>\n    </div>\n    <p>1 ETH = 1300 BACS</p>\n    <pre>Send BACS to this address. 使用二維碼轉賬請小心核對地址</pre>\n    <img class=\"img-fluid\" src=\"https://sales.bacc.tech/cgi/qr_img.php?d={{user.Pub}}&e=M&s=4\"  alt=\"\">\n  </div>\n</ng-template>\n</div>\n<div *ngIf=\"kycscreen\"><app-kyc></app-kyc></div>\n"

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

module.exports = __webpack_require__(/*! /home/alexho/WebstormProjects/bacchuswallet/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map