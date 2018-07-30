(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./login/account/account-routing/account-routing.module": [
		"./src/app/login/account/account-routing/account-routing.module.ts",
		"login-account-account-routing-account-routing-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/add-genre/add-genre.component.css":
/*!***************************************************!*\
  !*** ./src/app/add-genre/add-genre.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-genre/add-genre.component.html":
/*!****************************************************!*\
  !*** ./src/app/add-genre/add-genre.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\r\n    <div class=\"row justify-content-center my-4 d-flex \">\r\n        <label for=\"\" class=\"col-md-4 col-12 m-0\">Create new name Genre: </label>\r\n        <div class=\"col-md-4 col-12\">\r\n            <input type=\"text\" class=\"w-100\" #genreName>\r\n            <button  (click)=\"add(genreName.value); genreName.value=''\" class=\"btn ins-btn-outline-brand float-right mt-4\">Add</button>\r\n            <ul class=\"list-unstyled\">\r\n              <li>\r\n                  <a *ngFor=\"let genre of genres\" class=\"dropdown-item px-0 ins-a-brand\" routerLink=\"/category\">{{genre.name}}</a>\r\n              </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div> -->\r\n<div class=\"container\">\r\n    <div class=\"row justify-content-center my-4 d-flex \">\r\n        <label for=\"\" class=\"col-md-4 col-12 m-0\">Create new name Genre: </label>\r\n        <div class=\"col-md-4 col-12\">\r\n            <input type=\"text\" class=\"w-100\" [(ngModel)]=\"name\">\r\n            <button  (click)=\"add()\" class=\"btn ins-btn-outline-brand float-right mt-4\">Add</button>\r\n            <ul class=\"list-unstyled d-inline-block\">\r\n              <li *ngFor=\"let genre of genres\"   class=\"d-flex py-3 justify-content-between align-items-center\">\r\n                  <a (click)=\"onSelect(genre)\" class=\"dropdown-item px-0 ins-a-brand\" >{{genre.name}}</a>\r\n                  <button  (click)=\"delete(genre)\" class=\"btn ins-a-brand\">x</button>\r\n              </li>\r\n            </ul>\r\n            <div *ngIf=\"selectedGenre\">\r\n              <h2>{{selectedGenre.name | uppercase }}</h2>\r\n              <div><span>id:</span>{{selectedGenre._id}}</div>\r\n              <label for=\"\"> name:\r\n                <input type=\"text\" class=\"w-100\" [(ngModel)]=\"selectedGenre.name\" >\r\n              </label>\r\n              <button   (click)=\"save()\" class=\"btn ins-btn-outline-brand float-right mt-4\">Save</button>\r\n              <button   (click)=\"goBack()\" class=\"btn ins-btn-outline-brand float-right mt-4\">Back</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/add-genre/add-genre.component.ts":
/*!**************************************************!*\
  !*** ./src/app/add-genre/add-genre.component.ts ***!
  \**************************************************/
/*! exports provided: AddGenreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGenreComponent", function() { return AddGenreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _models_genre__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/genre */ "./src/app/models/genre.ts");
/* harmony import */ var _models_genre_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/genre.service */ "./src/app/models/genre.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddGenreComponent = /** @class */ (function () {
    function AddGenreComponent(genreService, route, location) {
        this.genreService = genreService;
        this.route = route;
        this.location = location;
        this.genres = [];
    }
    AddGenreComponent.prototype.ngOnInit = function () {
        this.getGenres();
        // this.newGenre = new Genre()
        // this.newGenre.name = '';
    };
    AddGenreComponent.prototype.getGenres = function () {
        var _this = this;
        this.genreService.getGenres()
            .subscribe(function (genres) { return _this.genres = genres; });
    };
    AddGenreComponent.prototype.add = function () {
        var _this = this;
        if (this.name.length > 0) {
            var newGenre = new _models_genre__WEBPACK_IMPORTED_MODULE_1__["Genre"]();
            this.genreService.addGenre(newGenre)
                .subscribe(function (genre) {
                _this.name = "";
                _this.genres.push(genre);
            });
        }
    };
    // addDisable():boolean {
    //   return this.newGenre.name.length == 0;
    // }
    AddGenreComponent.prototype.delete = function (genre) {
        this.genres = this.genres.filter(function (g) { return g !== genre; });
        this.genreService.deleteGenre(genre).subscribe();
    };
    AddGenreComponent.prototype.onSelect = function (genre) {
        this.selectedGenre = genre;
    };
    AddGenreComponent.prototype.save = function () {
        this.genreService.updateGenre(this.selectedGenre)
            .subscribe();
    };
    AddGenreComponent.prototype.goBack = function () {
        return this.location.back();
    };
    AddGenreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-genre',
            template: __webpack_require__(/*! ./add-genre.component.html */ "./src/app/add-genre/add-genre.component.html"),
            styles: [__webpack_require__(/*! ./add-genre.component.css */ "./src/app/add-genre/add-genre.component.css")]
        }),
        __metadata("design:paramtypes", [_models_genre_service__WEBPACK_IMPORTED_MODULE_2__["GenreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], AddGenreComponent);
    return AddGenreComponent;
}());



/***/ }),

/***/ "./src/app/app-bootstrap/app-bootstrap.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/app-bootstrap/app-bootstrap.module.ts ***!
  \*******************************************************/
/*! exports provided: AppBootstrapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBootstrapModule", function() { return AppBootstrapModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppBootstrapModule = /** @class */ (function () {
    function AppBootstrapModule() {
    }
    AppBootstrapModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot()
            ],
            declarations: [],
            exports: [ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__["BsDropdownModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"]]
        })
    ], AppBootstrapModule);
    return AppBootstrapModule;
}());



/***/ }),

/***/ "./src/app/app-custom/app-custom.module.ts":
/*!*************************************************!*\
  !*** ./src/app/app-custom/app-custom.module.ts ***!
  \*************************************************/
/*! exports provided: AppCustomModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppCustomModule", function() { return AppCustomModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.pipe */ "./src/app/app-custom/search.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppCustomModule = /** @class */ (function () {
    function AppCustomModule() {
    }
    AppCustomModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [
                _search_pipe__WEBPACK_IMPORTED_MODULE_2__["SearchPipe"]
            ],
            declarations: [_search_pipe__WEBPACK_IMPORTED_MODULE_2__["SearchPipe"]]
        })
    ], AppCustomModule);
    return AppCustomModule;
}());



/***/ }),

/***/ "./src/app/app-custom/search.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/app-custom/search.pipe.ts ***!
  \*******************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, queryString) {
        if (value == null) {
            return null;
        }
        if (value == "") {
            return null;
        }
        if (queryString !== undefined) {
            return value.filter(function (item) { return item.model.toLowerCase().indexOf(queryString.toLowerCase()) !== -1; });
        }
        else {
            return value;
        }
    };
    SearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _models_login_logout_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./models/login-logout/auth.guard */ "./src/app/models/login-logout/auth.guard.ts");
/* harmony import */ var _login_new_custumer_new_custumer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/new-custumer/new-custumer.component */ "./src/app/login/new-custumer/new-custumer.component.ts");
/* harmony import */ var _login_registered_custumer_registered_custumer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/registered-custumer/registered-custumer.component */ "./src/app/login/registered-custumer/registered-custumer.component.ts");
/* harmony import */ var _checkout_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./checkout/payment-success/payment-success.component */ "./src/app/checkout/payment-success/payment-success.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: '', redirectTo: '/homepage', pathMatch: 'full' },
    { path: 'homepage', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"] },
    { path: 'category', component: _category_category_component__WEBPACK_IMPORTED_MODULE_3__["CategoryComponent"] },
    { path: 'detail/:_id', component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailComponent"] },
    {
        path: 'checkout', component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_5__["CheckoutComponent"], children: [{
                path: 'payment-success', component: _checkout_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_12__["PaymentSuccessComponent"]
            }], canActivate: [_models_login_logout_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
    },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__["CartComponent"] },
    { path: 'registered-custumer', component: _login_registered_custumer_registered_custumer_component__WEBPACK_IMPORTED_MODULE_11__["RegisteredCustumerComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"] },
    {
        path: 'account', canActivate: [_models_login_logout_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
        loadChildren: './login/account/account-routing/account-routing.module#AccountRoutingModule'
    },
    { path: 'new-custumer', component: _login_new_custumer_new_custumer_component__WEBPACK_IMPORTED_MODULE_10__["NewCustumerComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n<!-- <a href=\"./login/account/account-routing/account-routing#\"></a> -->\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_bootstrap_app_bootstrap_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-bootstrap/app-bootstrap.module */ "./src/app/app-bootstrap/app-bootstrap.module.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _homepage_slide_slide_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./homepage/slide/slide.component */ "./src/app/homepage/slide/slide.component.ts");
/* harmony import */ var _homepage_list_item_support_list_item_support_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./homepage/list-item-support/list-item-support.component */ "./src/app/homepage/list-item-support/list-item-support.component.ts");
/* harmony import */ var _homepage_new_feature_best_product_new_feature_best_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./homepage/new-feature-best-product/new-feature-best-product.component */ "./src/app/homepage/new-feature-best-product/new-feature-best-product.component.ts");
/* harmony import */ var _homepage_list_item_company_list_item_company_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./homepage/list-item-company/list-item-company.component */ "./src/app/homepage/list-item-company/list-item-company.component.ts");
/* harmony import */ var _product_detail_more_detail_more_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product-detail/more-detail/more-detail.component */ "./src/app/product-detail/more-detail/more-detail.component.ts");
/* harmony import */ var _product_detail_description_description_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./product-detail/description/description.component */ "./src/app/product-detail/description/description.component.ts");
/* harmony import */ var _product_detail_review_review_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./product-detail/review/review.component */ "./src/app/product-detail/review/review.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _homepage_similar_product_similar_product_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./homepage/similar-product/similar-product.component */ "./src/app/homepage/similar-product/similar-product.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _category_filter_product_filter_product_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./category/filter-product/filter-product.component */ "./src/app/category/filter-product/filter-product.component.ts");
/* harmony import */ var _category_sort_way_sort_way_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./category/sort-way/sort-way.component */ "./src/app/category/sort-way/sort-way.component.ts");
/* harmony import */ var _category_category_product_category_product_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./category/category-product/category-product.component */ "./src/app/category/category-product/category-product.component.ts");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "./src/app/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _block_template_product_block_template_product_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./block-template-product/block-template-product.component */ "./src/app/block-template-product/block-template-product.component.ts");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pagination/pagination.component */ "./src/app/pagination/pagination.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _cart_list_product_cart_list_product_cart_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./cart/list-product-cart/list-product-cart.component */ "./src/app/cart/list-product-cart/list-product-cart.component.ts");
/* harmony import */ var _total_cart_total_cart_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./total-cart/total-cart.component */ "./src/app/total-cart/total-cart.component.ts");
/* harmony import */ var _list_item_policy_list_item_policy_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./list-item-policy/list-item-policy.component */ "./src/app/list-item-policy/list-item-policy.component.ts");
/* harmony import */ var _checkout_checkout_product_checkout_product_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./checkout/checkout-product/checkout-product.component */ "./src/app/checkout/checkout-product/checkout-product.component.ts");
/* harmony import */ var _checkout_checkout_product_personal_information_personal_information_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./checkout/checkout-product/personal-information/personal-information.component */ "./src/app/checkout/checkout-product/personal-information/personal-information.component.ts");
/* harmony import */ var _checkout_checkout_product_addresses_addresses_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./checkout/checkout-product/addresses/addresses.component */ "./src/app/checkout/checkout-product/addresses/addresses.component.ts");
/* harmony import */ var _checkout_checkout_product_shipping_methods_shipping_methods_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./checkout/checkout-product/shipping-methods/shipping-methods.component */ "./src/app/checkout/checkout-product/shipping-methods/shipping-methods.component.ts");
/* harmony import */ var _login_new_custumer_new_custumer_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./login/new-custumer/new-custumer.component */ "./src/app/login/new-custumer/new-custumer.component.ts");
/* harmony import */ var _login_registered_custumer_registered_custumer_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./login/registered-custumer/registered-custumer.component */ "./src/app/login/registered-custumer/registered-custumer.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _product_detail_review_modal_review_modal_review_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./product-detail/review/modal-review/modal-review.component */ "./src/app/product-detail/review/modal-review/modal-review.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _models_book_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./models/book.service */ "./src/app/models/book.service.ts");
/* harmony import */ var _models_genre_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./models/genre.service */ "./src/app/models/genre.service.ts");
/* harmony import */ var _models_banner_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./models/banner.service */ "./src/app/models/banner.service.ts");
/* harmony import */ var _nav_search_search_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./nav/search/search.component */ "./src/app/nav/search/search.component.ts");
/* harmony import */ var _add_genre_add_genre_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./add-genre/add-genre.component */ "./src/app/add-genre/add-genre.component.ts");
/* harmony import */ var _models_login_logout_auth_guard__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./models/login-logout/auth.guard */ "./src/app/models/login-logout/auth.guard.ts");
/* harmony import */ var _models_login_logout_authentication_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./models/login-logout/authentication.service */ "./src/app/models/login-logout/authentication.service.ts");
/* harmony import */ var _models_login_logout_user_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./models/login-logout/user.service */ "./src/app/models/login-logout/user.service.ts");
/* harmony import */ var _models_login_logout_jwt_interceptor__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./models/login-logout/jwt.interceptor */ "./src/app/models/login-logout/jwt.interceptor.ts");
/* harmony import */ var _models_login_logout_login_status_service__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./models/login-logout/login-status.service */ "./src/app/models/login-logout/login-status.service.ts");
/* harmony import */ var _app_custom_app_custom_module__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./app-custom/app-custom.module */ "./src/app/app-custom/app-custom.module.ts");
/* harmony import */ var _models_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./models/cart/shopping-cart.service */ "./src/app/models/cart/shopping-cart.service.ts");
/* harmony import */ var _nav_nav_list_cart_nav_list_cart_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./nav/nav-list-cart/nav-list-cart.component */ "./src/app/nav/nav-list-cart/nav-list-cart.component.ts");
/* harmony import */ var _models_cart_order_service__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./models/cart/order.service */ "./src/app/models/cart/order.service.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _checkout_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./checkout/payment-success/payment-success.component */ "./src/app/checkout/payment-success/payment-success.component.ts");
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
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_bootstrap_app_bootstrap_module__WEBPACK_IMPORTED_MODULE_6__["AppBootstrapModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _app_custom_app_custom_module__WEBPACK_IMPORTED_MODULE_49__["AppCustomModule"],
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_7__["ProductDetailComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__["HomepageComponent"],
                _homepage_slide_slide_component__WEBPACK_IMPORTED_MODULE_9__["SlideComponent"],
                _homepage_list_item_support_list_item_support_component__WEBPACK_IMPORTED_MODULE_10__["ListItemSupportComponent"],
                _homepage_new_feature_best_product_new_feature_best_product_component__WEBPACK_IMPORTED_MODULE_11__["NewFeatureBestProductComponent"],
                _homepage_list_item_company_list_item_company_component__WEBPACK_IMPORTED_MODULE_12__["ListItemCompanyComponent"],
                _product_detail_more_detail_more_detail_component__WEBPACK_IMPORTED_MODULE_13__["MoreDetailComponent"],
                _product_detail_description_description_component__WEBPACK_IMPORTED_MODULE_14__["DescriptionComponent"],
                _product_detail_review_review_component__WEBPACK_IMPORTED_MODULE_15__["ReviewComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_16__["NavComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
                _homepage_similar_product_similar_product_component__WEBPACK_IMPORTED_MODULE_18__["SimilarProductComponent"],
                _category_category_component__WEBPACK_IMPORTED_MODULE_19__["CategoryComponent"],
                _category_filter_product_filter_product_component__WEBPACK_IMPORTED_MODULE_20__["FilterProductComponent"],
                _category_sort_way_sort_way_component__WEBPACK_IMPORTED_MODULE_21__["SortWayComponent"],
                _category_category_product_category_product_component__WEBPACK_IMPORTED_MODULE_22__["CategoryProductComponent"],
                _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_23__["BreadcrumbComponent"],
                _block_template_product_block_template_product_component__WEBPACK_IMPORTED_MODULE_24__["BlockTemplateProductComponent"],
                _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_25__["PaginationComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_26__["CartComponent"],
                _cart_list_product_cart_list_product_cart_component__WEBPACK_IMPORTED_MODULE_27__["ListProductCartComponent"],
                _total_cart_total_cart_component__WEBPACK_IMPORTED_MODULE_28__["TotalCartComponent"],
                _list_item_policy_list_item_policy_component__WEBPACK_IMPORTED_MODULE_29__["ListItemPolicyComponent"],
                _checkout_checkout_product_checkout_product_component__WEBPACK_IMPORTED_MODULE_30__["CheckoutProductComponent"],
                _checkout_checkout_product_personal_information_personal_information_component__WEBPACK_IMPORTED_MODULE_31__["PersonalInformationComponent"],
                _checkout_checkout_product_addresses_addresses_component__WEBPACK_IMPORTED_MODULE_32__["AddressesComponent"],
                _checkout_checkout_product_shipping_methods_shipping_methods_component__WEBPACK_IMPORTED_MODULE_33__["ShippingMethodsComponent"],
                _login_new_custumer_new_custumer_component__WEBPACK_IMPORTED_MODULE_34__["NewCustumerComponent"],
                _login_registered_custumer_registered_custumer_component__WEBPACK_IMPORTED_MODULE_35__["RegisteredCustumerComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_36__["ContactComponent"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_53__["CheckoutComponent"],
                _product_detail_review_modal_review_modal_review_component__WEBPACK_IMPORTED_MODULE_37__["ModalReviewComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_38__["PageNotFoundComponent"],
                _nav_search_search_component__WEBPACK_IMPORTED_MODULE_42__["SearchComponent"],
                _add_genre_add_genre_component__WEBPACK_IMPORTED_MODULE_43__["AddGenreComponent"],
                _nav_nav_list_cart_nav_list_cart_component__WEBPACK_IMPORTED_MODULE_51__["NavListCartComponent"],
                _checkout_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_54__["PaymentSuccessComponent"]
            ],
            providers: [
                _models_book_service__WEBPACK_IMPORTED_MODULE_39__["BookService"],
                _models_genre_service__WEBPACK_IMPORTED_MODULE_40__["GenreService"],
                _models_banner_service__WEBPACK_IMPORTED_MODULE_41__["BannerService"],
                _models_login_logout_auth_guard__WEBPACK_IMPORTED_MODULE_44__["AuthGuard"],
                _models_login_logout_authentication_service__WEBPACK_IMPORTED_MODULE_45__["AuthenticationService"],
                _models_login_logout_user_service__WEBPACK_IMPORTED_MODULE_46__["UserService"],
                _models_login_logout_login_status_service__WEBPACK_IMPORTED_MODULE_48__["LoginStatusService"],
                _models_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_50__["ShoppingCartService"],
                _models_cart_order_service__WEBPACK_IMPORTED_MODULE_52__["OrderService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _models_login_logout_jwt_interceptor__WEBPACK_IMPORTED_MODULE_47__["JwtInterceptor"],
                    multi: true
                }
                // LocalStorageService
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/block-template-product/block-template-product.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/block-template-product/block-template-product.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/block-template-product/block-template-product.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/block-template-product/block-template-product.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"books$\">\r\n  <div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12 ins-block-template\" *ngFor='let book of books$ | async'>\r\n    <div class=\"card text-center border-0 my-4 ins-card-product\">\r\n      <a routerLink=\"/detail/{{book._id}}\">\r\n        <img class=\"ins-img-product\" src=\"{{book.images.main}}\" alt=\"\">\r\n      </a>\r\n      <span class=\" btn-danger rounded-circle ins-btn-deal\">\r\n        -{{100 - ((book.sellingPrice  / book.previousPrice) * 100)}}%\r\n      </span>\r\n      <div class=\"card-body border-top\">\r\n        <h5 class=\"card-title ins-card-title\">\r\n          <a routerLink=\"/detail/{{book._id}}\" class=\"ins-a-brand\">{{book.title}}</a>\r\n        </h5>\r\n        <b>{{book.sellingPrice}} </b>\r\n        <small class=\"text-muted\">\r\n          |\r\n          <s> {{book.previousPrice}}</s>\r\n        </small>\r\n        <br>\r\n        <small class=\"text-muted\">&#9733; &#9733; &#9733; &#9733; &#9734;</small>\r\n        <br>\r\n        <button class=\"uk-button uk-button-default uk-modal-close ins-btn-outline-brand mt-2\" type=\"button\" (click)=\"addItem(book, 1)\" onclick=\"UIkit.notification({message: '<span uk-icon=\\'icon: check\\'></span> Add to cart successful. '})\">Add cart</button>\r\n        <!-- <button type=\"button\" class=\"btn ins-btn-outline-brand mt-2\" (click)=\"addItem(book, 1)\">Add to cart</button> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- *ngIf=\"productInCart(book) | async \" -->"

/***/ }),

/***/ "./src/app/block-template-product/block-template-product.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/block-template-product/block-template-product.component.ts ***!
  \****************************************************************************/
/*! exports provided: BlockTemplateProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockTemplateProductComponent", function() { return BlockTemplateProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _models_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/book.service */ "./src/app/models/book.service.ts");
/* harmony import */ var _models_cart_cart_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/cart/cart-item */ "./src/app/models/cart/cart-item.ts");
/* harmony import */ var _models_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/cart/shopping-cart.service */ "./src/app/models/cart/shopping-cart.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BlockTemplateProductComponent = /** @class */ (function () {
    function BlockTemplateProductComponent(route, bookService, shoppingCartService) {
        this.route = route;
        this.bookService = bookService;
        this.shoppingCartService = shoppingCartService;
        this.currentItem = new _models_cart_cart_item__WEBPACK_IMPORTED_MODULE_2__["CartItem"]();
    }
    BlockTemplateProductComponent.prototype.ngOnInit = function () {
        this.getBooks();
        this.shoppingCartService.initCart();
        this.shoppingCart = JSON.parse(this.shoppingCartService.getStorage());
    };
    BlockTemplateProductComponent.prototype.getBooks = function () {
        var _this = this;
        this.books$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) {
            return _this.bookService.getBooks();
        }));
    };
    // getBooks(): void {
    //   this.bookService.getBooks()
    //     .subscribe(books => this.books = books);
    // }
    // =================shoppping cart ===================
    BlockTemplateProductComponent.prototype.addItem = function (book, quantity) {
        this.shoppingCartService.addItem(book, quantity);
        this.shoppingCartService.calculateTotal();
        this.shoppingCartService.calculateCounted();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], BlockTemplateProductComponent.prototype, "filterGenres", void 0);
    BlockTemplateProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-block-template-product',
            template: __webpack_require__(/*! ./block-template-product.component.html */ "./src/app/block-template-product/block-template-product.component.html"),
            styles: [__webpack_require__(/*! ./block-template-product.component.css */ "./src/app/block-template-product/block-template-product.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _models_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"],
            _models_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartService"]])
    ], BlockTemplateProductComponent);
    return BlockTemplateProductComponent;
}());



/***/ }),

/***/ "./src/app/breadcrumb/breadcrumb.component.css":
/*!*****************************************************!*\
  !*** ./src/app/breadcrumb/breadcrumb.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/breadcrumb/breadcrumb.component.html":
/*!******************************************************!*\
  !*** ./src/app/breadcrumb/breadcrumb.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"breadcrumb\" *ngIf=\"book\">\r\n    <ol class=\"breadcrumb mb-0 pl-0\">\r\n      <li class=\"breadcrumb-item\"><a routerLink=\"/homepage\" class=\"text-dark\">Home</a></li>\r\n      <li class=\"breadcrumb-item ins-text-second \" aria-current=\"page\" >{{book.title}}</li>\r\n    </ol>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/breadcrumb/breadcrumb.component.ts":
/*!****************************************************!*\
  !*** ./src/app/breadcrumb/breadcrumb.component.ts ***!
  \****************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _models_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/book.service */ "./src/app/models/book.service.ts");
/* harmony import */ var _models_book__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/book */ "./src/app/models/book.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(bookService, route, location) {
        this.bookService = bookService;
        this.route = route;
        this.location = location;
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
        // this.getBook();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_book__WEBPACK_IMPORTED_MODULE_2__["Book"])
    ], BreadcrumbComponent.prototype, "book", void 0);
    BreadcrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumb.component.css */ "./src/app/breadcrumb/breadcrumb.component.css")]
        }),
        __metadata("design:paramtypes", [_models_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <app-breadcrumb></app-breadcrumb>\r\n    <div class=\"row ins-shopping-cart\">\r\n        <div class=\"col-md-8 col-12\">\r\n            <app-list-product-cart></app-list-product-cart>\r\n        </div>\r\n        <div class=\"col-md-4 col-12\">\r\n            <app-total-cart></app-total-cart>\r\n            <div class=\"d-flex justify-content-center my-4\"><a  routerLink=\"/checkout\" ><button class=\"btn ins-btn-outline-brand\" [disabled]=\"shoppingCart.items_counted==0\">Check out</button></a></div>\r\n            <app-list-item-policy></app-list-item-policy>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _models_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/book.service */ "./src/app/models/book.service.ts");
/* harmony import */ var _models_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/cart/shopping-cart.service */ "./src/app/models/cart/shopping-cart.service.ts");
/* harmony import */ var _models_cart_shopping_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/cart/shopping-cart */ "./src/app/models/cart/shopping-cart.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartComponent = /** @class */ (function () {
    function CartComponent(shoppingCartService, bookService) {
        var _this = this;
        this.shoppingCartService = shoppingCartService;
        this.bookService = bookService;
        this.itemsToOrder = false;
        this.shoppingCart = new _models_cart_shopping_cart__WEBPACK_IMPORTED_MODULE_3__["ShoppingCart"]();
        shoppingCartService.totalStatus$.subscribe(function (status) {
            _this.shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
        });
    }
    CartComponent.prototype.ngOnInit = function () {
        this.shoppingCartService.initCart();
        this.shoppingCart = JSON.parse(this.shoppingCartService.getStorage());
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [_models_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartService"],
            _models_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/cart/list-product-cart/list-product-cart.component.css":
/*!************************************************************************!*\
  !*** ./src/app/cart/list-product-cart/list-product-cart.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ins-icon-delete {\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/cart/list-product-cart/list-product-cart.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/cart/list-product-cart/list-product-cart.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\" ins-bg-second text-white p-2 mb-0\">Shopping cart</h4>\r\n<div class=\"py-4\">\r\n    <ul class=\"list-unstyled\">\r\n        <li class=\"border-bottom mb-4\" *ngFor=\"let item of shoppingCart.items\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-3\"> \r\n                    <a routerLink=\"/detail/{{item.productId}}\">\r\n                        <img src=\"{{item.image}}\" class=\"w-100 ins-box-shadow mb-4\" alt=\"\">\r\n                    </a>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <a class=\"ins-a-brand\" routerLink=\"/detail/{{item.productId}}\">{{item.title}}</a>\r\n                    <br>\r\n                    <b>{{item.sellingPrice}} </b>\r\n                    <small class=\"text-muted\">\r\n                        |\r\n                        <s>{{item.previousPrice}}</s>\r\n                    </small>\r\n                </div>\r\n                <div class=\"col-md-5 d-flex justify-content-between\">\r\n                    <div class=\" mb-4\">\r\n                        <label class=\"d-block \" for=\"number-of-product\">Quantity:</label>\r\n                        <input class=\"ins-input-quantity-color\" type=\"number\" name=\"\" [(ngModel)]=\"item.quantity\" (change)=\"updateCart()\" min=\"0\">\r\n                    </div>\r\n                    <div>\r\n                        <p>Total'item:</p>\r\n                        <h5>{{item.quantity*item.sellingPrice}}</h5>\r\n                    </div>\r\n                    <div>\r\n                        <i (click)=\"removeItem(item)\" class=\"ins-icon-delete material-icons ins-text-second\">delete</i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/cart/list-product-cart/list-product-cart.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/cart/list-product-cart/list-product-cart.component.ts ***!
  \***********************************************************************/
/*! exports provided: ListProductCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListProductCartComponent", function() { return ListProductCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _models_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/cart/shopping-cart.service */ "./src/app/models/cart/shopping-cart.service.ts");
/* harmony import */ var _models_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/book.service */ "./src/app/models/book.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListProductCartComponent = /** @class */ (function () {
    function ListProductCartComponent(shoppingCartService, bookService) {
        var _this = this;
        this.shoppingCartService = shoppingCartService;
        this.bookService = bookService;
        this.books = [];
        shoppingCartService.totalStatus$.subscribe(function (status) {
            _this.shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
        });
    }
    ListProductCartComponent.prototype.ngOnInit = function () {
        this.shoppingCartService.initCart();
        this.shoppingCart = JSON.parse(this.shoppingCartService.getStorage());
    };
    ListProductCartComponent.prototype.removeItem = function (cartItem) {
        this.shoppingCartService.removeItem(cartItem);
        this.shoppingCartService.calculateTotal();
        this.shoppingCartService.calculateCounted();
        this.shoppingCartService.setStorage();
    };
    ListProductCartComponent.prototype.getBooks = function () {
        var _this = this;
        this.bookService.getBooks().subscribe(function (books) {
            _this.books = books;
        });
    };
    ListProductCartComponent.prototype.updateCart = function () {
        this.shoppingCartService.updateCart(this.shoppingCart);
        this.shoppingCartService.setStorage();
        console.log('update');
    };
    ListProductCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-product-cart',
            template: __webpack_require__(/*! ./list-product-cart.component.html */ "./src/app/cart/list-product-cart/list-product-cart.component.html"),
            styles: [__webpack_require__(/*! ./list-product-cart.component.css */ "./src/app/cart/list-product-cart/list-product-cart.component.css")]
        }),
        __metadata("design:paramtypes", [_models_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"],
            _models_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"]])
    ], ListProductCartComponent);
    return ListProductCartComponent;
}());



/***/ }),

/***/ "./src/app/category/category-product/category-product.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/category/category-product/category-product.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.ins-img-category {\r\n  position: relative;\r\n}\r\n.ins-img-category div {\r\n  position: absolute;\r\n  top: 50px;\r\n  width: 300px;\r\n  left: 50px;\r\n  font-size: 30px;\r\n  font-weight: 100;\r\n}\r\n.ins-img-category img {\r\n  height: 250px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/category/category-product/category-product.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/category/category-product/category-product.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"ins-img-category\">\r\n  <img class=\"\"  src=\"https://res.cloudinary.com/dtbgme8xe/image/upload/v1531459728/bookshop-angular/img-5.jpg\" alt=\"\">\r\n  <div class=\"display-4\">\r\n    SALE TẤT CẢ CÁC SẢN PHẨM\r\n  </div>\r\n</div>\r\n<h4 class=\" ins-bg-second text-white p-2 mb-0 mt-4\">Frid Conjed Fox</h4>\r\n    <app-sort-way></app-sort-way>\r\n    <div class=\"ins-list-filter-product \">\r\n        <app-block-template-product></app-block-template-product>\r\n        <app-pagination></app-pagination>\r\n    </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/category/category-product/category-product.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/category/category-product/category-product.component.ts ***!
  \*************************************************************************/
/*! exports provided: CategoryProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryProductComponent", function() { return CategoryProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoryProductComponent = /** @class */ (function () {
    // @Input() filterGenres:Book[];
    function CategoryProductComponent() {
    }
    CategoryProductComponent.prototype.ngOnInit = function () {
    };
    CategoryProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-product',
            template: __webpack_require__(/*! ./category-product.component.html */ "./src/app/category/category-product/category-product.component.html"),
            styles: [__webpack_require__(/*! ./category-product.component.css */ "./src/app/category/category-product/category-product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CategoryProductComponent);
    return CategoryProductComponent;
}());



/***/ }),

/***/ "./src/app/category/category.component.css":
/*!*************************************************!*\
  !*** ./src/app/category/category.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/category/category.component.html":
/*!**************************************************!*\
  !*** ./src/app/category/category.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <!-- .row1:breadcrumb -->\r\n  <!-- nho bo input do -->\r\n  <app-breadcrumb></app-breadcrumb>\r\n  <!-- .row1:breadcrumb-end -->\r\n\r\n  <!-- row2: filter -->\r\n  <div class=\"row ins-filter-product\">\r\n    <div class=\"col-md-3\">\r\n      <!-- <div class=\"col-md-3\"> -->\r\n      <div class=\"ins-search-filter\">\r\n        <h5 class=\"border-bottom pb-2\">\r\n          <b>Filter By</b>\r\n        </h5>\r\n        <button type=\"button\" class=\"btn ins-bg-second text-white d-flex align-items-center mt-4\">\r\n          <i class=\"material-icons mr-2\">check</i> Clear all</button>\r\n        <section class=\"mt-4\">\r\n          <h5 class=\"border-bottom py-2\">\r\n            <b>Genres</b>\r\n          </h5>\r\n          <ul class=\"list-unstyled mt-0 pl-0\">\r\n            <li *ngFor=\"let genre of genres\">\r\n              <a class=\"ins-a-brand\" (click)=\"filteredGenres(genre._id)\">{{genre.name}}</a>\r\n            </li>\r\n          </ul>\r\n        </section>\r\n        <section class=\"mt-4\">\r\n          <h5 class=\"border-bottom py-2\">\r\n            <b>Publisher</b>\r\n          </h5>\r\n          <ul class=\"list-unstyled mt-0 pl-0\">\r\n            <li *ngFor=\"let book of books$ | async\">\r\n              <a class=\"ins-a-brand\">{{book.publisher}}</a>\r\n            </li>\r\n          </ul>\r\n        </section>\r\n        <section class=\"pt-4\">\r\n          <h5 class=\"border-bottom py-2\">\r\n            <b>Price</b>\r\n          </h5>\r\n          <div class=\"input-group\">\r\n            <ul class=\"list-unstyled mb-0\">\r\n              <li>\r\n                <input class=\"p-2\" type=\"radio\" name=\"price\">\r\n                <label for=\"\">\r\n                  <a href=\"\" class=\"ins-a-brand\">$8.00 - $11.00 (3)</a>\r\n                </label>\r\n              </li>\r\n              <li>\r\n                <input class=\"p-2\" type=\"radio\" name=\"price\">\r\n                <label for=\"\">\r\n                  <a href=\"\" class=\"ins-a-brand\">$12.00 - $15.00 (3)</a>\r\n                </label>\r\n              </li>\r\n              <li>\r\n                <input class=\"p-2\" type=\"radio\" name=\"price\">\r\n                <label for=\"\">\r\n                  <a href=\"\" class=\"ins-a-brand\">$29.00 - $35.00 (3)</a>\r\n                </label>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </section>\r\n      </div>\r\n      <!-- </div> -->\r\n\r\n    </div>\r\n    <div class=\"col-md-9 ins-filter-product-list position-relative\">\r\n      <app-category-product ></app-category-product>\r\n    </div>\r\n  </div>\r\n  <!-- row2: filter-end -->\r\n</div>"

/***/ }),

/***/ "./src/app/category/category.component.ts":
/*!************************************************!*\
  !*** ./src/app/category/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _models_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/book.service */ "./src/app/models/book.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _models_genre_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/genre.service */ "./src/app/models/genre.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(bookService, route, genreService) {
        this.bookService = bookService;
        this.route = route;
        this.genreService = genreService;
    }
    CategoryComponent.prototype.ngOnInit = function () {
        this.getGenres();
        this.getBooks();
    };
    CategoryComponent.prototype.getGenres = function () {
        var _this = this;
        this.genreService.getGenres()
            .subscribe(function (genres) { return _this.genres = genres; });
    };
    CategoryComponent.prototype.getBooks = function () {
        var _this = this;
        this.books$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) {
            return _this.bookService.getBooks();
        }));
    };
    // to use for filteredGenres() because books$ can't filter
    CategoryComponent.prototype.getBooks_ = function () {
        var _this = this;
        this.bookService.getBooks().subscribe(function (_) { return _this.books = _; });
    };
    CategoryComponent.prototype.filteredGenres = function (genre) {
        this.filterGenres = this.books.filter(function (_) { return _.genre._id = genre._id; });
    };
    CategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.css */ "./src/app/category/category.component.css")]
        }),
        __metadata("design:paramtypes", [_models_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _models_genre_service__WEBPACK_IMPORTED_MODULE_3__["GenreService"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/category/filter-product/filter-product.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/category/filter-product/filter-product.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/category/filter-product/filter-product.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/category/filter-product/filter-product.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <!-- <div class=\"ins-search-filter\">\r\n      <h5 class=\"border-bottom pb-2\"><b>Filter By</b></h5>\r\n      <button type=\"button\" class=\"btn ins-bg-second text-white d-flex align-items-center mt-4\"><i class=\"material-icons mr-2\">check</i> Clear all</button>\r\n      <section class=\"mt-4\" >\r\n          <h5 class=\"border-bottom py-2\"><b>Genres</b></h5>\r\n        <ul class=\"list-unstyled mt-0 pl-0\">\r\n          <li *ngFor=\"let genre of genres\">\r\n            <a class=\"ins-a-brand\" (click)=\"filteredGenres(genre._id)\">{{genre.name}}</a>\r\n          </li>\r\n        </ul>\r\n      </section>\r\n      <section class=\"mt-4\" >\r\n          <h5 class=\"border-bottom py-2\"><b>Publisher</b></h5>\r\n        <ul class=\"list-unstyled mt-0 pl-0\">\r\n          <li *ngFor=\"let book of books$ | async\">\r\n            <a class=\"ins-a-brand\">{{book.publisher}}</a>\r\n          </li>\r\n        </ul>\r\n      </section>\r\n      <section class=\"pt-4\">\r\n        <h5 class=\"border-bottom py-2\"><b>Price</b></h5>\r\n        <div class=\"input-group\">\r\n          <ul class=\"list-unstyled mb-0\">\r\n            <li>\r\n              <input class=\"p-2\" type=\"radio\" name=\"price\">\r\n              <label for=\"\"><a href=\"\" class=\"ins-a-brand\">$8.00 - $11.00 (3)</a></label>\r\n            </li>\r\n            <li>\r\n              <input class=\"p-2\" type=\"radio\" name=\"price\">\r\n              <label for=\"\"><a href=\"\" class=\"ins-a-brand\">$12.00 - $15.00 (3)</a></label>\r\n            </li>\r\n            <li>\r\n              <input class=\"p-2\" type=\"radio\" name=\"price\" >\r\n              <label for=\"\"><a href=\"\" class=\"ins-a-brand\">$29.00 - $35.00 (3)</a></label>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </section>\r\n    </div> -->\r\n"

/***/ }),

/***/ "./src/app/category/filter-product/filter-product.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/category/filter-product/filter-product.component.ts ***!
  \*********************************************************************/
/*! exports provided: FilterProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterProductComponent", function() { return FilterProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _models_genre_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/genre.service */ "./src/app/models/genre.service.ts");
/* harmony import */ var _models_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/book.service */ "./src/app/models/book.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FilterProductComponent = /** @class */ (function () {
    function FilterProductComponent(genreService, bookService, route) {
        this.genreService = genreService;
        this.bookService = bookService;
        this.route = route;
    }
    FilterProductComponent.prototype.ngOnInit = function () {
        this.getGenres();
        this.getBooks();
    };
    FilterProductComponent.prototype.getGenres = function () {
        var _this = this;
        this.genreService.getGenres()
            .subscribe(function (genres) { return _this.genres = genres; });
    };
    FilterProductComponent.prototype.getBooks = function () {
        var _this = this;
        this.books$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            return _this.bookService.getBooks();
        }));
    };
    // to use for filteredGenres() because books$ can't filter
    FilterProductComponent.prototype.getBooks_ = function () {
        var _this = this;
        this.bookService.getBooks().subscribe(function (_) { return _this.books = _; });
    };
    FilterProductComponent.prototype.filteredGenres = function (genre) {
        this.filterGenres = this.books.filter(function (_) { return _.genre._id = genre._id; });
    };
    FilterProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filter-product',
            template: __webpack_require__(/*! ./filter-product.component.html */ "./src/app/category/filter-product/filter-product.component.html"),
            styles: [__webpack_require__(/*! ./filter-product.component.css */ "./src/app/category/filter-product/filter-product.component.css")]
        }),
        __metadata("design:paramtypes", [_models_genre_service__WEBPACK_IMPORTED_MODULE_1__["GenreService"],
            _models_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], FilterProductComponent);
    return FilterProductComponent;
}());



/***/ }),

/***/ "./src/app/category/sort-way/sort-way.component.css":
/*!**********************************************************!*\
  !*** ./src/app/category/sort-way/sort-way.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/category/sort-way/sort-way.component.html":
/*!***********************************************************!*\
  !*** ./src/app/category/sort-way/sort-way.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12 col-12\">\r\n      <ul class=\"list-unstyled d-flex justify-content-between align-items-center mt-4 mb-0\">\r\n        <li>\r\n          <div class=\"ins-filter-view float-left\">\r\n            <a href=\"\"><i class=\"material-icons text-white ins-bg-second p-2\">format_list_bulleted</i></a>\r\n            <a href=\"\"><i class=\"material-icons text-white ins-bg-second p-2 ml-2\">grid_on</i></a>\r\n          </div>\r\n        </li>\r\n        <li>\r\n          <select class=\"btn ins-input-quantity-color w-100 float-right\" name=\"Sort\" value=\"Sort\" id=\"\">\r\n            <optgroup label=\"Price\">\r\n              <option value=\"Price\">High to low</option>\r\n              <option value=\"Price\">Low to high</option>\r\n            </optgroup>\r\n            <optgroup label=\"Name\">\r\n              <option value=\"Price\">A to Z</option>\r\n              <option value=\"Price\">Z to A</option>\r\n            </optgroup>\r\n          </select>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/category/sort-way/sort-way.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/category/sort-way/sort-way.component.ts ***!
  \*********************************************************/
/*! exports provided: SortWayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortWayComponent", function() { return SortWayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SortWayComponent = /** @class */ (function () {
    function SortWayComponent() {
    }
    SortWayComponent.prototype.ngOnInit = function () {
    };
    SortWayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sort-way',
            template: __webpack_require__(/*! ./sort-way.component.html */ "./src/app/category/sort-way/sort-way.component.html"),
            styles: [__webpack_require__(/*! ./sort-way.component.css */ "./src/app/category/sort-way/sort-way.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SortWayComponent);
    return SortWayComponent;
}());



/***/ }),

/***/ "./src/app/checkout/checkout-product/addresses/addresses.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/checkout/checkout-product/addresses/addresses.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/checkout/checkout-product/addresses/addresses.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/checkout/checkout-product/addresses/addresses.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5 class=\"mb-0\">\r\n    <button class=\"btn btn-link p-0 mb-4 ins-a-brand\" data-toggle=\"collapse\" data-target=\"#addresses\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n      <h5>2 Addresses</h5>\r\n    </button>\r\n</h5>\r\n<div id=\"addresses\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\r\n    <p>The selected address will be used both as your personal address (for invoice) and as your delivery address.</p>\r\n    <section class=\"clearfix\">\r\n        <div class=\"row mt-4 d-flex align-items-center\">\r\n            <label for=\"\" class=\"col-md-3 m-0\">First Name</label>\r\n            <div class=\"col-md-6\">\r\n                <input type=\"text\" class=\"w-100\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row mt-4 d-flex align-items-center\">\r\n            <label for=\"\" class=\"col-md-3 m-0\">Last Name</label>\r\n            <div class=\"col-md-6\">\r\n                <input type=\"text\"  class=\"w-100\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row mt-4 d-flex align-items-center\">\r\n            <label for=\"\" class=\"col-md-3 m-0\">Company</label>\r\n            <div class=\"col-md-6\">\r\n                <input type=\"text\"  class=\"w-100\">\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n                Optional\r\n            </div>\r\n        </div>\r\n        <div class=\"row mt-4 d-flex align-items-center\">\r\n            <label for=\"\" class=\"col-md-3 m-0\">Address</label>\r\n            <div class=\"col-md-6\">\r\n                <input type=\"text\"  class=\"w-100\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row mt-4 d-flex align-items-center\">\r\n            <label for=\"\" class=\"col-md-3 m-0\">Address Complement</label>\r\n            <div class=\"col-md-6\">\r\n                <input type=\"text\"  class=\"w-100\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row mt-4 d-flex align-items-center\">\r\n            <label for=\"\" class=\"col-md-3 m-0\">City</label>\r\n            <div class=\"col-md-6\">\r\n                <input type=\"text\"  class=\"w-100\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row mt-4 d-flex align-items-center\">\r\n            <label for=\"\" class=\"col-md-3 m-0\">State</label>\r\n            <div class=\"col-md-6\">\r\n                <input type=\"text\"  class=\"w-100\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row mt-4 d-flex align-items-center\">\r\n            <label for=\"\" class=\"col-md-3 m-0\">Zip/Postal Code</label>\r\n            <div class=\"col-md-6\">\r\n                <input type=\"text\"  class=\"w-100\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row mt-4 d-flex align-items-center\">\r\n            <label for=\"\" class=\"col-md-3 m-0\">Country</label>\r\n            <div class=\"col-md-6\">\r\n                <input type=\"text\"  class=\"w-100\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row mt-4 d-flex align-items-center\">\r\n            <label for=\"\" class=\"col-md-3 m-0\">Phone</label>\r\n            <div class=\"col-md-6\">\r\n                <input type=\"Phone\"  class=\"w-100\">\r\n            </div>\r\n        </div>\r\n        <button class=\"btn ins-btn-outline-brand float-right mt-4\">Continue</button>\r\n    </section>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/checkout/checkout-product/addresses/addresses.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/checkout/checkout-product/addresses/addresses.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddressesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressesComponent", function() { return AddressesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddressesComponent = /** @class */ (function () {
    function AddressesComponent() {
    }
    AddressesComponent.prototype.ngOnInit = function () {
    };
    AddressesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addresses',
            template: __webpack_require__(/*! ./addresses.component.html */ "./src/app/checkout/checkout-product/addresses/addresses.component.html"),
            styles: [__webpack_require__(/*! ./addresses.component.css */ "./src/app/checkout/checkout-product/addresses/addresses.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddressesComponent);
    return AddressesComponent;
}());



/***/ }),

/***/ "./src/app/checkout/checkout-product/checkout-product.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/checkout/checkout-product/checkout-product.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table td, th {\r\n\tpadding: 16px;\r\n\r\n}\r\n table tr {\r\n\tborder-top: 1px solid #eee;\r\n}\r\n table tr:first-child {\r\n\tborder-top: 0px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/checkout/checkout-product/checkout-product.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/checkout/checkout-product/checkout-product.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"checkoutForm\" #formCheckout=\"ngForm\">\r\n    <div>\r\n        <h4 class=\" ins-bg-second text-white p-2 mb-0\">Checkout</h4>\r\n        <div id=\"accordion\">\r\n            <ul class=\"list-unstyled\">\r\n                <li class=\"ins-pb\">\r\n                    <app-personal-information></app-personal-information>\r\n                </li>\r\n                <li class=\"ins-pb\">\r\n                    <app-addresses></app-addresses>\r\n                </li>\r\n                <li class=\"ins-pb\">\r\n                    <h5 class=\"mb-0\">\r\n                        <button class=\"btn btn-link p-0 mb-4 ins-a-brand\" data-toggle=\"collapse\" data-target=\"#shippingMethod\" aria-expanded=\"true\"\r\n                            aria-controls=\"collapseOne\">\r\n                            <h5>3 Shipping Methods</h5>\r\n                        </button>\r\n                    </h5>\r\n                    <div id=\"shippingMethod\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\r\n                        <section class=\"clearfix\">\r\n                            <table>\r\n                                <tr>\r\n                                    <th></th>\r\n                                    <th>Price</th>\r\n                                    <th>Method</th>\r\n                                    <th>Carrier</th>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <input type=\"radio\" value=\"20000\" name=\"shippingMethod\">\r\n                                    </td>\r\n                                    <td>$15</td>\r\n                                    <td>Table Rate</td>\r\n                                    <td>Best Way</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <input type=\"radio\" name=\"shippingMethod\">\r\n                                    </td>\r\n                                    <td>$4.00</td>\r\n                                    <td>Table Rate</td>\r\n                                    <td>Best Way</td>\r\n                                </tr>\r\n                            </table>\r\n                            <button class=\"btn ins-btn-outline-brand float-right mt-4\">Continue</button>\r\n                        </section>\r\n                    </div>\r\n                </li>\r\n                <li class=\"ins-pb\">\r\n                    <h5 class=\"mb-0\">\r\n                        <button class=\"btn btn-link p-0 mb-4 ins-a-brand\" data-toggle=\"collapse\" data-target=\"#reviewPayment\" aria-expanded=\"true\"\r\n                            aria-controls=\"collapseOne\">\r\n                            <h5>4 Payment & Review</h5>\r\n                        </button>\r\n                    </h5>\r\n                    <div id=\"reviewPayment\" class=\"collapse\" aria-labelledby=\"reviewPayment\" data-parent=\"#accordion\">\r\n                        <section class=\"clearfix\">\r\n                            <table id=\"payment\" class=\"payment\">\r\n                                <tr>\r\n                                    <td>\r\n                                        <input type=\"radio\" name=\"payement\" data-toggle=\"collapse\" data-target=\"#payByCheck\" aria-expanded=\"true\" aria-controls=\"payByCheck\">\r\n                                    </td>\r\n                                    <td>Pay by Check</td>\r\n\r\n                                </tr>\r\n                                <tr>\r\n                                    <td></td>\r\n                                    <td id=\"payByCheck\" class=\"collapse\" aria-labelledby=\"payByCheck\" data-parent=\"#payment\">\r\n                                        <table class=\"ins payment-by-check \">\r\n                                            <tr>\r\n                                                <td>\r\n                                                    Amount\r\n                                                </td>\r\n                                                <td>\r\n                                                    $26.12 (tax incl.)\r\n                                                </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>\r\n                                                    Payee\r\n                                                </td>\r\n                                                <td>\r\n                                                    <input type=\"text\">\r\n                                                </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>\r\n                                                    Send your check to this address\r\n                                                </td>\r\n                                                <td>\r\n                                                    <input type=\"text\">\r\n                                                </td>\r\n                                            </tr>\r\n                                        </table>\r\n                                    </td>\r\n                                    <td></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <input type=\"radio\" name=\"payement\" data-toggle=\"collapse\" data-target=\"#payByBank\" aria-expanded=\"true\" aria-controls=\"payByBank\">\r\n                                    </td>\r\n                                    <td>Pay by Bank</td>\r\n\r\n                                </tr>\r\n                                <tr>\r\n                                    <td></td>\r\n                                    <td id=\"payByBank\" class=\"collapse\" aria-labelledby=\"payByBank\" data-parent=\"#payment\">\r\n                                        <p>Please transfer the invoice amount to our bank account. You will receive our order\r\n                                            confirmation by email containing bank details and order number. Goods will be\r\n                                            reserved 7 days for you and we'll process the order immediately after receiving\r\n                                            the payment.</p>\r\n                                    </td>\r\n                                    <td></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <input type=\"checkbox\">\r\n                                    </td>\r\n                                    <td>I agree to the terms of service and will adhere to them unconditionally.</td>\r\n                                </tr>\r\n                            </table>\r\n                            <button (click)=\"ordered()\" [disabled]=\"shoppingCart.items_counted==0\" routerLink=\"./payment-success\" class=\"btn ins-btn-outline-brand float-right mt-4\">\r\n                                <b>ORDER WITH AN OBLIGATION TO PAY</b>\r\n                            </button>\r\n\r\n                        </section>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n            <div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/checkout/checkout-product/checkout-product.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/checkout/checkout-product/checkout-product.component.ts ***!
  \*************************************************************************/
/*! exports provided: CheckoutProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutProductComponent", function() { return CheckoutProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _models_cart_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/cart/order */ "./src/app/models/cart/order.ts");
/* harmony import */ var _models_login_logout_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/login-logout/user */ "./src/app/models/login-logout/user.ts");
/* harmony import */ var _models_cart_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/cart/order.service */ "./src/app/models/cart/order.service.ts");
/* harmony import */ var _models_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/cart/shopping-cart.service */ "./src/app/models/cart/shopping-cart.service.ts");
/* harmony import */ var _models_login_logout_login_status_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/login-logout/login-status.service */ "./src/app/models/login-logout/login-status.service.ts");
/* harmony import */ var _models_login_logout_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/login-logout/user.service */ "./src/app/models/login-logout/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CheckoutProductComponent = /** @class */ (function () {
    function CheckoutProductComponent(orderService, shoppingCartService, loginStatusService, userService) {
        var _this = this;
        this.orderService = orderService;
        this.shoppingCartService = shoppingCartService;
        this.loginStatusService = loginStatusService;
        this.userService = userService;
        this.currentUser = new _models_login_logout_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.statusUser = false;
        this.orderCurrent = new _models_cart_order__WEBPACK_IMPORTED_MODULE_1__["Order"]();
        this.shippingOptions = [
            { method: 'viettel post', value: 20000, time: '2 days' },
            { method: 'PT expression', value: 30000, time: '1 day' }
        ];
        shoppingCartService.totalStatus$.subscribe(function (status) {
            _this.shoppingCart = JSON.parse(_this.shoppingCartService.getStorage());
        });
    }
    CheckoutProductComponent.prototype.ngOnInit = function () {
        this.checkToken();
        this.shoppingCartService.initCart();
        this.shoppingCart = JSON.parse(this.shoppingCartService.getStorage());
        this.checkoutForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({});
    };
    CheckoutProductComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (_) { return _this.currentUser = _.user; });
    };
    ;
    CheckoutProductComponent.prototype.checkToken = function () {
        if (localStorage.getItem('_currentUser')) {
            this.statusUser = true;
            this.loginStatusService.setStatus(this.statusUser);
            this.getUser();
        }
        else {
            this.loginStatusService.setStatus(this.statusUser);
        }
        console.log('check');
    };
    CheckoutProductComponent.prototype.ordered = function () {
        var _this = this;
        this.shoppingCartService.updateCart(this.shoppingCart);
        this.itemsToOrder = this.shoppingCart.items.length;
        if (this.itemsToOrder > 0) {
            this.orderCurrent.total = this.shoppingCart.total;
            this.orderCurrent._user._id = this.currentUser._id;
            this.orderCurrent._user.email = this.currentUser.email;
            if (this.shoppingCart) {
                for (var i = 0; i < this.shoppingCart.items.length; i++) {
                    var books_ = new _models_cart_order__WEBPACK_IMPORTED_MODULE_1__["BOOK"]();
                    books_._book._id = this.shoppingCart.items[i].productId;
                    books_._book.title = this.shoppingCart.items[i].title;
                    books_.price = this.shoppingCart.items[i].sellingPrice;
                    books_.quantity = this.shoppingCart.items[i].quantity;
                    this.orderCurrent.books.push(books_);
                }
            }
            this.orderService.addOrder(this.orderCurrent).
                subscribe(function (data) {
                localStorage.setItem("_orderCurrent", JSON.stringify(data));
                _this.orderService.setOrderStatus(JSON.parse(localStorage.getItem("_orderCurrent")));
                console.log("Da dat hang thanh cong\nThanh tien: " + data.total + "\nSo luong sach: " + data.books.length);
                _this.orderCurrent.books = new Array();
                _this.orderCurrent._user = new _models_cart_order__WEBPACK_IMPORTED_MODULE_1__["_User"]();
                _this.shoppingCartService.removeShoppingCart();
            });
        }
    };
    CheckoutProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkout-product',
            template: __webpack_require__(/*! ./checkout-product.component.html */ "./src/app/checkout/checkout-product/checkout-product.component.html"),
            styles: [__webpack_require__(/*! ./checkout-product.component.css */ "./src/app/checkout/checkout-product/checkout-product.component.css")]
        }),
        __metadata("design:paramtypes", [_models_cart_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"],
            _models_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingCartService"],
            _models_login_logout_login_status_service__WEBPACK_IMPORTED_MODULE_5__["LoginStatusService"],
            _models_login_logout_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
    ], CheckoutProductComponent);
    return CheckoutProductComponent;
}());



/***/ }),

/***/ "./src/app/checkout/checkout-product/personal-information/personal-information.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/checkout/checkout-product/personal-information/personal-information.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/checkout/checkout-product/personal-information/personal-information.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/checkout/checkout-product/personal-information/personal-information.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5 class=\"mb-0\">\r\n    <button class=\"btn btn-link p-0 my-4 ins-a-brand\" data-toggle=\"collapse\" data-target=\"#personalInformation\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n      <h5>1 Personal information</h5>\r\n    </button>\r\n</h5>\r\n<div id=\"personalInformation\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\r\n    <nav class=\"\">\r\n        <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n          <a class=\"nav-item nav-link active ins-a-brand\" id=\"nav-new-products-tab\" data-toggle=\"tab\" href=\"#nav-OrderAsGuest\" role=\"tab\" aria-controls=\"nav-home\"\r\n            aria-selected=\"true\">Order as Guest</a>\r\n          <a class=\"nav-item nav-link ins-a-brand\" id=\"nav-featured-products-tab\" data-toggle=\"tab\" href=\"#nav-SignIn\" role=\"tab\" aria-controls=\"nav-profile\"\r\n            aria-selected=\"false\">Sign in</a>\r\n        </div>\r\n    </nav>\r\n    <div class=\"tab-content\" id=\"nav-tabContent\">\r\n        <div class=\"tab-pane fade show active\" id=\"nav-OrderAsGuest\" role=\"tabpanel\" aria-labelledby=\"nav-home-tab\">\r\n            <section class=\"clearfix\">\r\n                <div class=\"row mt-4 d-flex align-items-center\">\r\n                    <label for=\"\" class=\"col-md-3 m-0\">Gender</label>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"d-inline\">\r\n                            <input type=\"radio\" id=\"mr\"  name=\"gender\" class=\"\">\r\n                            <label for=\"mr\">\r\n                                Mr.\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"d-inline ml-4\">\r\n                            <input type=\"radio\" id=\"mrs\" name=\"gender\" class=\"\">\r\n                            <label for=\"mrs\">\r\n                                Mrs.\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row mt-4 d-flex align-items-center\">\r\n                    <label for=\"\" class=\"col-md-3 m-0\">First Name</label>\r\n                    <div class=\"col-md-6\">\r\n                        <input type=\"text\" class=\"w-100\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row mt-4 d-flex align-items-center\">\r\n                    <label for=\"\" class=\"col-md-3 m-0\">Last Name</label>\r\n                    <div class=\"col-md-6\">\r\n                        <input type=\"text\"  class=\"w-100\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row mt-4 d-flex align-items-center\">\r\n                    <label for=\"\" class=\"col-md-3 m-0\">Email</label>\r\n                    <div class=\"col-md-6\">\r\n                        <input type=\"email\"  class=\"w-100\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row mt-4 d-flex align-items-center\">\r\n                    <div class=\"col-md-12\">\r\n                        <b>Create an account (optional) </b> <br>\r\n                        <span class=\"text-muted\">And save time on your next order!</span>\r\n                    </div>\r\n                </div>\r\n                <button class=\"btn ins-btn-outline-brand float-right mt-4\">Continue</button>\r\n            </section>\r\n        </div>\r\n        <div class=\"tab-pane fade show\" id=\"nav-SignIn\" role=\"tabpanel\" aria-labelledby=\"nav-home-tab\">\r\n            <section class=\"clearfix\">\r\n                <div class=\"row mt-4 d-flex align-items-center\">\r\n                    <label for=\"\" class=\"col-md-3 m-0\">Email</label>\r\n                    <div class=\"col-md-6\">\r\n                        <input type=\"email\" class=\"w-100\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row mt-4 d-flex align-items-center\">\r\n                    <label for=\"\" class=\"col-md-3 m-0\">Password</label>\r\n                    <div class=\"col-md-6\">\r\n                        <input type=\"Password\" class=\"w-100\">\r\n                        <span class=\"mt-4\"><a href=\"#\" class=\"ins-a-brand\">Forgot your password?</a></span>\r\n                    </div>\r\n\r\n                </div>\r\n                <button class=\"btn ins-btn-outline-brand float-right mt-4\">Continue</button>\r\n            </section>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/checkout/checkout-product/personal-information/personal-information.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/checkout/checkout-product/personal-information/personal-information.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: PersonalInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInformationComponent", function() { return PersonalInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PersonalInformationComponent = /** @class */ (function () {
    function PersonalInformationComponent() {
    }
    PersonalInformationComponent.prototype.ngOnInit = function () {
    };
    PersonalInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-personal-information',
            template: __webpack_require__(/*! ./personal-information.component.html */ "./src/app/checkout/checkout-product/personal-information/personal-information.component.html"),
            styles: [__webpack_require__(/*! ./personal-information.component.css */ "./src/app/checkout/checkout-product/personal-information/personal-information.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PersonalInformationComponent);
    return PersonalInformationComponent;
}());



/***/ }),

/***/ "./src/app/checkout/checkout-product/shipping-methods/shipping-methods.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/checkout/checkout-product/shipping-methods/shipping-methods.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table td, th {\r\n\tpadding: 16px;\r\n\r\n}\r\n table tr {\r\n\tborder-top: 1px solid #eee;\r\n}\r\n table tr:first-child {\r\n\tborder-top: 0px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/checkout/checkout-product/shipping-methods/shipping-methods.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/checkout/checkout-product/shipping-methods/shipping-methods.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h5 class=\"mb-0\">\r\n    <button class=\"btn btn-link p-0 mb-4 ins-a-brand\" data-toggle=\"collapse\" data-target=\"#shippingMethod\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n      <h5>3 Shipping Methods</h5>\r\n    </button>\r\n</h5>\r\n<div id=\"shippingMethod\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\r\n    <section class=\"clearfix\">\r\n        <table>\r\n            <tr>\r\n                <th></th>\r\n                <th>Price</th>\r\n                <th>Method</th>\r\n                <th>Carrier</th>\r\n            </tr>\r\n            <tr>\r\n                <td><input type=\"radio\" value=\"20000\" name=\"shippingMethod\"></td>\r\n                <td>$15</td>\r\n                <td>Table Rate</td>\r\n                <td>Best Way</td>\r\n            </tr>\r\n            <tr>\r\n                <td><input type=\"radio\" name=\"shippingMethod\"></td>\r\n                <td>$4.00</td>\r\n                <td>Table Rate</td>\r\n                <td>Best Way</td>\r\n            </tr>\r\n        </table>\r\n        <button class=\"btn ins-btn-outline-brand float-right mt-4\">Continue</button>\r\n    </section>\r\n</div> -->"

/***/ }),

/***/ "./src/app/checkout/checkout-product/shipping-methods/shipping-methods.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/checkout/checkout-product/shipping-methods/shipping-methods.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ShippingMethodsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingMethodsComponent", function() { return ShippingMethodsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShippingMethodsComponent = /** @class */ (function () {
    function ShippingMethodsComponent() {
    }
    ShippingMethodsComponent.prototype.ngOnInit = function () {
    };
    ShippingMethodsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shipping-methods',
            template: __webpack_require__(/*! ./shipping-methods.component.html */ "./src/app/checkout/checkout-product/shipping-methods/shipping-methods.component.html"),
            styles: [__webpack_require__(/*! ./shipping-methods.component.css */ "./src/app/checkout/checkout-product/shipping-methods/shipping-methods.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShippingMethodsComponent);
    return ShippingMethodsComponent;
}());



/***/ }),

/***/ "./src/app/checkout/checkout.component.css":
/*!*************************************************!*\
  !*** ./src/app/checkout/checkout.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/checkout/checkout.component.html":
/*!**************************************************!*\
  !*** ./src/app/checkout/checkout.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <app-breadcrumb></app-breadcrumb>\r\n    <div [hidden]=\"shoppingCart.items_counted==0\" class=\"row ins-shopping-cart\">\r\n        <div class=\"col-md-8 col-12\">\r\n            <app-checkout-product></app-checkout-product>\r\n         </div>  \r\n  \r\n        <div class=\"col-md-4 col-12 \">\r\n            <app-total-cart></app-total-cart>\r\n            <app-list-item-policy></app-list-item-policy>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"row justify-content-center\">\r\n            <router-outlet></router-outlet>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _models_login_logout_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/login-logout/user.service */ "./src/app/models/login-logout/user.service.ts");
/* harmony import */ var _models_cart_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/cart/order.service */ "./src/app/models/cart/order.service.ts");
/* harmony import */ var _models_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/cart/shopping-cart.service */ "./src/app/models/cart/shopping-cart.service.ts");
/* harmony import */ var _models_login_logout_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/login-logout/user */ "./src/app/models/login-logout/user.ts");
/* harmony import */ var _models_cart_order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/cart/order */ "./src/app/models/cart/order.ts");
/* harmony import */ var _models_login_logout_login_status_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/login-logout/login-status.service */ "./src/app/models/login-logout/login-status.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(orderService, shoppingCartService, loginStatusService, userService) {
        var _this = this;
        this.orderService = orderService;
        this.shoppingCartService = shoppingCartService;
        this.loginStatusService = loginStatusService;
        this.userService = userService;
        this.currentUser = new _models_login_logout_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.statusUser = false;
        this.orderCurrent = new _models_cart_order__WEBPACK_IMPORTED_MODULE_5__["Order"]();
        shoppingCartService.totalStatus$.subscribe(function (status) {
            _this.shoppingCart = JSON.parse(_this.shoppingCartService.getStorage());
        });
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        this.checkToken();
        this.shoppingCartService.initCart();
        this.shoppingCart = JSON.parse(this.shoppingCartService.getStorage());
    };
    CheckoutComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (_) { return _this.currentUser = _.user; });
    };
    ;
    CheckoutComponent.prototype.checkToken = function () {
        if (localStorage.getItem('_currentUser')) {
            this.statusUser = true;
            this.loginStatusService.setStatus(this.statusUser);
            this.getUser();
        }
        else {
            this.loginStatusService.setStatus(this.statusUser);
        }
        console.log('check');
    };
    CheckoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/checkout/checkout.component.css")]
        }),
        __metadata("design:paramtypes", [_models_cart_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"],
            _models_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartService"],
            _models_login_logout_login_status_service__WEBPACK_IMPORTED_MODULE_6__["LoginStatusService"],
            _models_login_logout_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/checkout/payment-success/payment-success.component.css":
/*!************************************************************************!*\
  !*** ./src/app/checkout/payment-success/payment-success.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/checkout/payment-success/payment-success.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/checkout/payment-success/payment-success.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mb-3 border p-4\">\n  <h2>Đặt hàng thành công</h2>\n  <p>mã số đơn hàng của bạn:</p>\n  <button routerLink=\"/account/order-manage/{{orderCurrent._id}}\" class=\"btn ins-btn-outline-brand  mt-4\">\n{{orderCurrent._id}}\n  </button>\n  <h3>Cảm ơn bạn đã mua hàng tại\n    <a routerLink=\"/homepage\" class=\"ins-a-brand\">Book mall</a>\n  </h3>\n</div>"

/***/ }),

/***/ "./src/app/checkout/payment-success/payment-success.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/checkout/payment-success/payment-success.component.ts ***!
  \***********************************************************************/
/*! exports provided: PaymentSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentSuccessComponent", function() { return PaymentSuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _models_cart_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/cart/order */ "./src/app/models/cart/order.ts");
/* harmony import */ var _models_cart_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/cart/order.service */ "./src/app/models/cart/order.service.ts");
/* harmony import */ var _models_login_logout_login_status_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/login-logout/login-status.service */ "./src/app/models/login-logout/login-status.service.ts");
/* harmony import */ var _models_login_logout_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/login-logout/user.service */ "./src/app/models/login-logout/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var _models_login_logout_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/login-logout/user */ "./src/app/models/login-logout/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PaymentSuccessComponent = /** @class */ (function () {
    function PaymentSuccessComponent(loginStatusService, orderService, userService) {
        var _this = this;
        this.loginStatusService = loginStatusService;
        this.orderService = orderService;
        this.userService = userService;
        this.statusUser = false;
        this.currentUser = new _models_login_logout_user__WEBPACK_IMPORTED_MODULE_6__["User"]();
        this.order = new _models_cart_order__WEBPACK_IMPORTED_MODULE_1__["Order"]();
        loginStatusService.status$.subscribe(function (status) {
            // this.status = status;
            if (status) {
                _this.getUser();
            }
            // this.currentUser = JSON.parse(localStorage.getItem('_currentUser'));
            // console.log(this.status);
        });
        orderService.totalStatus$.subscribe(function (status) {
            _this.orderCurrent = JSON.parse(localStorage.getItem('_orderCurrent'));
            console.log(_this.orderCurrent);
        });
    }
    PaymentSuccessComponent.prototype.ngOnInit = function () {
        this.orderCurrent = JSON.parse(localStorage.getItem('_orderCurrent'));
        this.getOrder();
        this.checkToken();
    };
    PaymentSuccessComponent.prototype.getOrder = function () {
        var _this = this;
        this.orderCurrent = JSON.parse(localStorage.getItem('_orderCurrent'));
        console.log(this.orderCurrent._id);
        this.orderService.getOrder(this.orderCurrent._id).subscribe(function (_) { return _this.order = _; });
    };
    PaymentSuccessComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(function (_) { return _this.currentUser = _.user; });
    };
    ;
    PaymentSuccessComponent.prototype.checkToken = function () {
        if (localStorage.getItem('_currentUser')) {
            this.statusUser = true;
            this.loginStatusService.setStatus(this.statusUser);
            this.getUser();
        }
        else {
            this.loginStatusService.setStatus(this.statusUser);
        }
        console.log('check');
    };
    PaymentSuccessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment-success',
            template: __webpack_require__(/*! ./payment-success.component.html */ "./src/app/checkout/payment-success/payment-success.component.html"),
            styles: [__webpack_require__(/*! ./payment-success.component.css */ "./src/app/checkout/payment-success/payment-success.component.css")]
        }),
        __metadata("design:paramtypes", [_models_login_logout_login_status_service__WEBPACK_IMPORTED_MODULE_3__["LoginStatusService"],
            _models_cart_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"],
            _models_login_logout_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], PaymentSuccessComponent);
    return PaymentSuccessComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"container\">\r\n      <app-breadcrumb></app-breadcrumb>\r\n        <div class=\"row mb-4\">\r\n            <div class=\"col-md-6\">\r\n                <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1165.2526037312562!2d106.66450329363212!3d10.778575542738814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752edac4908a95%3A0xc5aeffa01d2db400!2zMjY4IFTDtCBIaeG6v24gVGjDoG5oLCBDxrAgeMOhIELhuq9jIEjhuqNpLCBQaMaw4budbmcgMTUsIFF14bqtbiAxMCwgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1526636203424\"\r\n                 class=\"w-100  h-100\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <h4 class=\" ins-bg-second text-white p-2 mb-0\">Write Us</h4>\r\n                <section class=\"clearfix\">\r\n                    <div class=\"row mt-4 d-flex align-items-center\">\r\n                        <label for=\"\" class=\"col-md-3 m-0\">Name</label>\r\n                        <div class=\"col-md-6\">\r\n                            <input type=\"text\" id=\"\" class=\"w-100\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row mt-4 d-flex align-items-center\">\r\n                        <label for=\"\" class=\"col-md-3 m-0\">Email</label>\r\n                        <div class=\"col-md-6\">\r\n                            <input type=\"text\" id=\"\" class=\"w-100\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row mt-4 d-flex align-items-center\">\r\n                        <label for=\"\" class=\"col-md-3 m-0\">Phone Number</label>\r\n                        <div class=\"col-md-6\">\r\n                            <input type=\"text\" id=\"\" class=\"w-100\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row mt-4 d-flex align-items-center\">\r\n                        <label for=\"\" class=\"col-md-3 m-0\">What's on your mind?</label>\r\n                        <div class=\"col-md-6\">\r\n                            <textarea name=\"\" id=\"\" class=\"w-100\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                </section>\r\n                <button class=\"btn ins-btn-outline-brand float-right mt-4\">Send us</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  /* footer */\r\n  .payment-app .payment {\r\n    width: 100%;\r\n  }\r\n  .ins-footer-2 i {\r\n    font-size: 19px;\r\n    color: rgb(172, 147, 108);\r\n  }\r\n  /* .footer-year {\r\n    background-color:rgb(0, 171, 169) ;\r\n  } */\r\n  /* footer-end */\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\r\n<footer class=\"ins-pt\">\r\n  <div class=\"container\">\r\n    <!-- row-1 -->\r\n    <div class=\"row ins-pb text-center d-flex align-items-center ins-footer-2\">\r\n      <div class=\"col-md-4\">\r\n        <i class=\"material-icons\">drafts</i>\r\n        <h4> Sign up to\r\n          <strong>Newletter</strong>\r\n        </h4>\r\n        <p>Get\r\n          <b>30% Off</b> First Pusrchase!</p>\r\n      </div>\r\n      <div class=\"col-md-8\">\r\n        <div class=\"input-group\">\r\n          <input type=\"search\" id=\"inputSignUpLetter\" class=\"input-group-text form-control ins-input-search\" placeholder=\"Your Email Address\"\r\n            aria-label=\"YourEmail\" aria-describedby=\"basic-addon1\">\r\n          <div class=\"input-group-append\">\r\n            <button type=\"submit\" class=\"btn ins-btn-outline-brand form-control\" aria-describedby=\"input\">Subscribe</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- row-1-end -->\r\n    <!-- row-2 -->\r\n    <div class=\"row ins-footer-2 ins-pb\">\r\n      <div class=\"col-md-4 mb-3 col-sm-12\">\r\n        <a class=\"navbar-brand display-5 ins-a-brand mb-2 pt-0\" routerLink=\"/homepage\">\r\n          <b>Book</b> mall</a>\r\n        <p class=\"d-flex\">\r\n          <i class=\"material-icons mr-1\">home</i>Book mall, 42 street 12345 Puffinville France</p>\r\n        <p class=\"d-flex\">\r\n          <i class=\"material-icons mr-1\">phone</i>Phone: 0239475556</p>\r\n        <p class=\"d-flex\">\r\n          <i class=\"material-icons mr-1\">email</i>Email: digitalmall@gmail.com</p>\r\n        <p class=\"d-flex\">\r\n          <i class=\"material-icons mr-1\">alarm</i>Time: 8:00 - 19:00, Monday - Saturday</p>\r\n          <div class=\"ins-share-icon\">\r\n            <!-- <a href=\"http://www.facebook.com/share.php?u=http://mas1.magikthemes.com/index.php/fluence/non-fiction/educational-media.html&t=\">\r\n              <i class=\"fab fa-facebook-f \"></i>\r\n            </a> -->\r\n            <i class=\"fab fa-youtube\"></i>\r\n            <a href=\"http://www.linkedin.com/shareArticle?mini=true&url=http://mas1.magikthemes.com/index.php/fluence/non-fiction/educational-media.html&title=&source=BLOGNAME&summary=EXCERPT\">\r\n              <i class=\"fab fa-linkedin-in\"></i>\r\n            </a>\r\n            <!-- <a href=\"https://plus.google.com/share?url=http://mas1.magikthemes.com/index.php/fluence/non-fiction/educational-media.html\">\r\n              <i class=\"fab fa-google-plus-g\"></i>\r\n            </a> -->\r\n              <a href=\"http://twitter.com/home?status=%20-%20http://mas1.magikthemes.com/index.php/fluence/non-fiction/educational-media.html\">\r\n                  <i class=\"fab fa-twitter\"></i>\r\n              </a>\r\n          </div>\r\n        </div>\r\n      <div class=\"col-md-2 col-6\">\r\n        <h6>Our Company</h6>\r\n        <ul class=\"list-unstyled\">\r\n          <li class=\"mb-2\">\r\n            <a href=\"\" class=\"ins-a-footer\">Delivery</a>\r\n          </li>\r\n          <li class=\"mb-2\">\r\n            <a href=\"\" class=\"ins-a-footer\">Legal Notice</a>\r\n          </li>\r\n          <li class=\"mb-2\">\r\n            <a href=\"\" class=\"ins-a-footer\">About us</a>\r\n          </li>\r\n          <li class=\"mb-2\">\r\n            <a  class=\"ins-a-footer\">Secure payment</a>\r\n          </li>\r\n          <li class=\"mb-2\">\r\n            <a routerLink=\"/contact\" class=\"ins-a-footer\">Contact us </a>\r\n          </li>\r\n        </ul>\r\n\r\n      </div>\r\n      <div class=\"col-md-2 col-6\">\r\n        <h6>Your account</h6>\r\n        <ul class=\"list-unstyled\">\r\n          <li class=\"mb-2\">\r\n            <a href=\"\" class=\"ins-a-footer\">Personal info</a>\r\n          </li>\r\n          <li class=\"mb-2\">\r\n            <a href=\"\" class=\"ins-a-footer\">Credit slips</a>\r\n          </li>\r\n          <li class=\"mb-2\">\r\n            <a href=\"\" class=\"ins-a-footer\">Orders</a>\r\n          </li>\r\n          <li class=\"mb-2\">\r\n            <a href=\"\" class=\"ins-a-footer\">\r\n              <Address></Address>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-12 payment-app\">\r\n        <h6>Payment</h6>\r\n        <img class=\"payment\" src=\"https://res.cloudinary.com/dtbgme8xe/image/upload/v1531461696/bookshop-angular/Paypa.png\" alt=\"\">\r\n        <h6 class=\"mt-4\">Mobile App</h6>\r\n        <img src=\"https://res.cloudinary.com/dtbgme8xe/image/upload/v1531461690/bookshop-angular/googleplay.png\" alt=\"\">\r\n        <img src=\"https://res.cloudinary.com/dtbgme8xe/image/upload/v1531461682/bookshop-angular/appstore.png\">\r\n      </div>\r\n    </div>\r\n    <!-- row-2-end -->\r\n  </div>\r\n  <!-- /.container -->\r\n  <div class=\"footer-year\">\r\n    <div class=\"container\">\r\n      <p class=\"text-center mb-0\">© 2018 nhu . All Rights Reserved</p>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ins-img-single {\r\n  position: relative;\r\n}\r\n.ins-img-single div {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n.ins-nav-category {\r\n  font-size: 15px;\r\n  position: absolute;\r\n  z-index: 1000;\r\n  background: rgb(0, 0, 0, 0.7);\r\n  height: 100%;\r\n  padding: 10px;\r\n}\r\n.ins-nav-category  a {\r\n  color:  white;\r\n  \r\n}\r\n.ins-nav-category  a:hover {\r\n  color:  rgb(172, 147, 108);\r\n  background: transparent;\r\n\r\n}\r\n@media (max-width: 767.98px) {\r\n  .ins-nav-category {\r\n    display: none; \r\n  }\r\n}\r\n.ins-img-single .display-3 {\r\n  font-size: 6vmin;\r\n}"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div> -->\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"\">\r\n        <!-- <div class=\"col-md-3 col-sm-4\"> -->\r\n        <ul class=\"list-unstyled ins-nav-category\">\r\n          <li>\r\n            <a *ngFor=\"let genre of genres\" class=\"dropdown-item px-0\" routerLink=\"/category\">{{genre.name}}</a>\r\n            <a class=\"dropdown-item px-0\" routerLink=\"/category\">more...</a>\r\n            \r\n          </li>\r\n        </ul>\r\n        <!-- </div> -->\r\n        <!-- <div class=\"col-md-9 col-sm-8\"> -->\r\n        <app-slide [banners]=\"banners\"></app-slide>\r\n        <!-- </div> -->\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <app-list-item-support></app-list-item-support>\r\n  <app-new-feature-best-product></app-new-feature-best-product>\r\n  <div class=\"row ins-img-single-quote\">\r\n    <div class=\"d-flex align-items-center mt-4\">\r\n      <div class=\"col-md-8\">\r\n        <video controls class=\"video w-100\" muted loop preload=\"auto\">\r\n          <source src=\"https://res.cloudinary.com/dtbgme8xe/video/upload/v1531459759/bookshop-angular/video.mp4\" type=\"video/mp4\">\r\n        </video>\r\n      </div>\r\n      <div class=\"col-md-4 p-4\">\r\n        <h2> Lorem ipsum dolor sit amet. </h2>\r\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam doloribus distinctio placeat nisi error, at aliquid\r\n          reprehenderit aut corporis cumque.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <app-similar-product></app-similar-product>\r\n  <div class=\"ins-img-single mt-4 \">\r\n    <img src=\"https://res.cloudinary.com/dtbgme8xe/image/upload/v1531459773/bookshop-angular/paper.png\" class=\"w-100\" alt=\"\">\r\n    <div>\r\n      <p class=\"display-3\">Wellcome to our Store</p>\r\n      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, alias!</p>\r\n    </div>\r\n  </div>\r\n  <app-list-item-company></app-list-item-company>\r\n</div>\r\n\r\n<!-- </div> -->"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _models_banner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/banner.service */ "./src/app/models/banner.service.ts");
/* harmony import */ var _models_genre_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/genre.service */ "./src/app/models/genre.service.ts");
/* harmony import */ var _models_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/book.service */ "./src/app/models/book.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(genreService, bannerService, bookService) {
        this.genreService = genreService;
        this.bannerService = bannerService;
        this.bookService = bookService;
    }
    HomepageComponent.prototype.ngOnInit = function () {
        this.getGenres();
        this.getBanners();
        this.getNewProduct();
        this.getBestProduct();
        this.getFeatureProduct();
    };
    HomepageComponent.prototype.getGenres = function () {
        var _this = this;
        this.genreService.getGenres()
            .subscribe(function (genres) { return _this.genres = genres.slice(1, 7); });
    };
    HomepageComponent.prototype.getBanners = function () {
        var _this = this;
        this.bannerService.getBanners()
            .subscribe(function (banners) { return _this.banners = banners; });
    };
    HomepageComponent.prototype.getNewProduct = function () {
        var _this = this;
        this.bookService.getBooks()
            .subscribe(function (newProducts) { return _this.newProducts = newProducts; });
    };
    HomepageComponent.prototype.getBestProduct = function () {
        var _this = this;
        this.bookService.getBooks()
            .subscribe(function (bestProducts) { return _this.bestProducts = bestProducts; });
    };
    HomepageComponent.prototype.getFeatureProduct = function () {
        var _this = this;
        this.bookService.getBooks()
            .subscribe(function (featureProducts) { return _this.featureProducts = featureProducts; });
    };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [_models_genre_service__WEBPACK_IMPORTED_MODULE_2__["GenreService"],
            _models_banner_service__WEBPACK_IMPORTED_MODULE_1__["BannerService"],
            _models_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/homepage/list-item-company/list-item-company.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/homepage/list-item-company/list-item-company.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  /* ins-list-item-2 */\r\n  .ins-list-item-2 img {\r\n    width: 100%;\r\n    box-shadow: 2px 2px 10px 4px #eee;\r\n  }\r\n  /* ins-list-item-2-end */\r\n"

/***/ }),

/***/ "./src/app/homepage/list-item-company/list-item-company.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/homepage/list-item-company/list-item-company.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ins-list-item-2 ins-py d-flex justify-content-between\">\r\n    <a>\r\n      <img src=\"https://res.cloudinary.com/dtbgme8xe/image/upload/v1531459725/bookshop-angular/logo4.png\" alt=\"\">\r\n    </a>\r\n    <a >\r\n      <img src=\"https://res.cloudinary.com/dtbgme8xe/image/upload/v1531459721/bookshop-angular/logo3.png\" alt=\"\">\r\n    </a>\r\n    <a >\r\n      <img src=\"https://res.cloudinary.com/dtbgme8xe/image/upload/v1531459719/bookshop-angular/logo2.png\" alt=\"\">\r\n    </a>\r\n    <a  >\r\n      <img src=\"https://res.cloudinary.com/dtbgme8xe/image/upload/v1531459718/bookshop-angular/logo1.png\" alt=\"\">\r\n    </a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/homepage/list-item-company/list-item-company.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/homepage/list-item-company/list-item-company.component.ts ***!
  \***************************************************************************/
/*! exports provided: ListItemCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemCompanyComponent", function() { return ListItemCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListItemCompanyComponent = /** @class */ (function () {
    function ListItemCompanyComponent() {
    }
    ListItemCompanyComponent.prototype.ngOnInit = function () {
    };
    ListItemCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-item-company',
            template: __webpack_require__(/*! ./list-item-company.component.html */ "./src/app/homepage/list-item-company/list-item-company.component.html"),
            styles: [__webpack_require__(/*! ./list-item-company.component.css */ "./src/app/homepage/list-item-company/list-item-company.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListItemCompanyComponent);
    return ListItemCompanyComponent;
}());



/***/ }),

/***/ "./src/app/homepage/list-item-support/list-item-support.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/homepage/list-item-support/list-item-support.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " /* list-item-1 */\r\n .ins-list-item-1 .media p, .ins-list-item-1 .media h5 {\r\n  margin-bottom: 0px;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n}\r\n i.material-icons.ins-icon-1 {\r\n  font-size: 40px;\r\n  color:rgb(172, 147, 108);\r\n}\r\n /* list-item-1-end */\r\n p {\r\n  margin-top: 0px;\r\n}"

/***/ }),

/***/ "./src/app/homepage/list-item-support/list-item-support.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/homepage/list-item-support/list-item-support.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row  ins-list-item-1 ins-pt\">\r\n  <div class=\"col-md-3 col-6 mt-3\">\r\n    <div class=\"media\">\r\n      <i class=\"material-icons align-self-center ins-icon-1 mr-3\">local_shipping</i>\r\n      <div class=\"media-body\">\r\n        <h5>FREE SHIPPING</h5>\r\n        <p>Free Shipping On All Order</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-3 col-6 mt-3\">\r\n    <div class=\"media\">\r\n      <i class=\"material-icons align-self-center ins-icon-1 mr-3\">sync</i>\r\n      <div class=\"media-body\">\r\n        <h5>MONEY GUARANTEE</h5>\r\n        <p>30 Day Money Back</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-3 col-6 mt-3\">\r\n    <div class=\"media\">\r\n      <i class=\"material-icons align-self-center ins-icon-1 mr-3\">verified_user</i>\r\n      <div class=\"media-body\">\r\n        <h5>ONLINE SUPPORT</h5>\r\n        <p>Technical Support 24/7</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-3 col-6 mt-3\">\r\n    <div class=\"media \">\r\n      <i class=\"material-icons align-self-center ins-icon-1 mr-3\">card_membership</i>\r\n      <div class=\"media-body\">\r\n        <h5>MEMBER DISCOUNT</h5>\r\n        <p>Up to 40% Discount</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/homepage/list-item-support/list-item-support.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/homepage/list-item-support/list-item-support.component.ts ***!
  \***************************************************************************/
/*! exports provided: ListItemSupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemSupportComponent", function() { return ListItemSupportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListItemSupportComponent = /** @class */ (function () {
    function ListItemSupportComponent() {
    }
    ListItemSupportComponent.prototype.ngOnInit = function () {
    };
    ListItemSupportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-item-support',
            template: __webpack_require__(/*! ./list-item-support.component.html */ "./src/app/homepage/list-item-support/list-item-support.component.html"),
            styles: [__webpack_require__(/*! ./list-item-support.component.css */ "./src/app/homepage/list-item-support/list-item-support.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListItemSupportComponent);
    return ListItemSupportComponent;
}());



/***/ }),

/***/ "./src/app/homepage/new-feature-best-product/new-feature-best-product.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/homepage/new-feature-best-product/new-feature-best-product.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/homepage/new-feature-best-product/new-feature-best-product.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/homepage/new-feature-best-product/new-feature-best-product.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row ins-pt\">\r\n    <div class=\"col-md-12\">\r\n    <nav class=\"\">\r\n        <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n          <a  class=\"nav-item nav-link active ins-a-brand\" id=\"nav-new-products-tab\" data-toggle=\"tab\" href=\"#nav-new-products\" role=\"tab\" aria-controls=\"nav-home\"\r\n            aria-selected=\"true\">New products</a>\r\n          <a class=\"nav-item nav-link ins-a-brand\" id=\"nav-featured-products-tab\" data-toggle=\"tab\" href=\"#nav-featured-products\" role=\"tab\" aria-controls=\"nav-profile\"\r\n            aria-selected=\"false\">Featured product</a>\r\n          <a class=\"nav-item nav-link ins-a-brand\" id=\"nav-best-seller-tab\" data-toggle=\"tab\" href=\"#nav-best-seller\" role=\"tab\" aria-controls=\"nav-contact\"\r\n            aria-selected=\"false\">Best Seller</a>\r\n        </div>\r\n      </nav>\r\n      <div class=\"tab-content\" id=\"nav-tabContent\">\r\n        <div class=\"tab-pane fade show active\" id=\"nav-new-products\" role=\"tabpanel\" aria-labelledby=\"nav-home-tab\">\r\n            <app-block-template-product ></app-block-template-product>\r\n        </div>\r\n        <div class=\"tab-pane fade\" id=\"nav-featured-products\" role=\"tabpanel\" aria-labelledby=\"nav-profile-tab\">\r\n            <app-block-template-product ></app-block-template-product>\r\n        </div>\r\n        <div class=\"tab-pane fade\" id=\"nav-best-seller\" role=\"tabpanel\" aria-labelledby=\"nav-contact-tab\">\r\n            <app-block-template-product></app-block-template-product>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/homepage/new-feature-best-product/new-feature-best-product.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/homepage/new-feature-best-product/new-feature-best-product.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: NewFeatureBestProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewFeatureBestProductComponent", function() { return NewFeatureBestProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewFeatureBestProductComponent = /** @class */ (function () {
    function NewFeatureBestProductComponent() {
        this.books = [];
    }
    NewFeatureBestProductComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], NewFeatureBestProductComponent.prototype, "books", void 0);
    NewFeatureBestProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-feature-best-product',
            template: __webpack_require__(/*! ./new-feature-best-product.component.html */ "./src/app/homepage/new-feature-best-product/new-feature-best-product.component.html"),
            styles: [__webpack_require__(/*! ./new-feature-best-product.component.css */ "./src/app/homepage/new-feature-best-product/new-feature-best-product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewFeatureBestProductComponent);
    return NewFeatureBestProductComponent;
}());



/***/ }),

/***/ "./src/app/homepage/similar-product/similar-product.component.css":
/*!************************************************************************!*\
  !*** ./src/app/homepage/similar-product/similar-product.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/homepage/similar-product/similar-product.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/homepage/similar-product/similar-product.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row today-deal \">\r\n  <div class=\"col-md-12 header-deal mt-4\">\r\n    <span class=\"display-4 ins-text-brand\">Sale</span>\r\n  </div>\r\n</div>\r\n<app-block-template-product></app-block-template-product>\r\n"

/***/ }),

/***/ "./src/app/homepage/similar-product/similar-product.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/homepage/similar-product/similar-product.component.ts ***!
  \***********************************************************************/
/*! exports provided: SimilarProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimilarProductComponent", function() { return SimilarProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SimilarProductComponent = /** @class */ (function () {
    function SimilarProductComponent() {
    }
    SimilarProductComponent.prototype.ngOnInit = function () {
    };
    SimilarProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-similar-product',
            template: __webpack_require__(/*! ./similar-product.component.html */ "./src/app/homepage/similar-product/similar-product.component.html"),
            styles: [__webpack_require__(/*! ./similar-product.component.css */ "./src/app/homepage/similar-product/similar-product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SimilarProductComponent);
    return SimilarProductComponent;
}());



/***/ }),

/***/ "./src/app/homepage/slide/slide.component.css":
/*!****************************************************!*\
  !*** ./src/app/homepage/slide/slide.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-caption {\r\n  top: 100px;\r\n  position: absolute;\r\n}\r\n.carousel-caption p {\r\n  width: 500px;\r\n}\r\n.caption-right {\r\n  right: 100px;\r\n  left: auto;\r\n}\r\n.caption-left {\r\n  left: 100px;\r\n  right: auto;\r\n}\r\n/* slide */\r\n.ins-slide-home {\r\n    margin: 0px !important  ;\r\n  }\r\n.img-fluid {\r\n    width: 100%;\r\n  }\r\n/* slide-end */\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/homepage/slide/slide.component.html":
/*!*****************************************************!*\
  !*** ./src/app/homepage/slide/slide.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div *ngIf=\"banners\">\r\n            <div id=\"carouselExampleIndicators\" class=\"carousel slide ins-slide-home\" data-ride=\"carousel\">\r\n              <ol class=\"carousel-indicators\">\r\n                <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\r\n                <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\r\n                <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\r\n                <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"3\"></li>\r\n              </ol>\r\n              <div class=\"carousel-inner\" role=\"listbox\">\r\n                <div class=\"carousel-item active\">\r\n                  <img class=\"d-block img-fluid\" src=\"{{banners[0].imageUrl}}\" alt=\"First slide\">\r\n                  <div class=\"carousel-caption d-none d-md-block caption-right\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"carousel-item \">\r\n                  <img class=\"d-block img-fluid\" src=\"{{banners[1].imageUrl}}\" alt=\"Second slide\">\r\n                  <div class=\"carousel-caption d-none d-md-block caption-right\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"carousel-item \">\r\n                  <img class=\"d-block img-fluid\" src=\"{{banners[2].imageUrl}}\" alt=\"Third slide\">\r\n                  <div class=\"carousel-caption d-none d-md-block caption-right\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"carousel-item \">\r\n                  <img class=\"d-block img-fluid\" src=\"{{banners[3].imageUrl}}\" alt=\"Fourth slide\">\r\n                  <div class=\"carousel-caption d-none d-md-block caption-right\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\r\n                <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n                <span class=\"sr-only\">Previous</span>\r\n              </a>\r\n              <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\r\n                <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n                <span class=\"sr-only\">Next</span>\r\n              </a>\r\n            </div>\r\n          </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/homepage/slide/slide.component.ts":
/*!***************************************************!*\
  !*** ./src/app/homepage/slide/slide.component.ts ***!
  \***************************************************/
/*! exports provided: SlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideComponent", function() { return SlideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SlideComponent = /** @class */ (function () {
    function SlideComponent() {
    }
    SlideComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SlideComponent.prototype, "banners", void 0);
    SlideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slide',
            template: __webpack_require__(/*! ./slide.component.html */ "./src/app/homepage/slide/slide.component.html"),
            styles: [__webpack_require__(/*! ./slide.component.css */ "./src/app/homepage/slide/slide.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SlideComponent);
    return SlideComponent;
}());



/***/ }),

/***/ "./src/app/list-item-policy/list-item-policy.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/list-item-policy/list-item-policy.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/list-item-policy/list-item-policy.component.html":
/*!******************************************************************!*\
  !*** ./src/app/list-item-policy/list-item-policy.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-4\">\r\n    <span class=\"mt-3 d-flex align-items-center\">\r\n            <i class=\"material-icons ins-text-second mr-2\">check</i> Security policy\r\n        </span>\r\n        <span class=\"mt-3 d-flex align-items-center\">\r\n            <i class=\"material-icons ins-text-second mr-2\">local_shipping</i> Delivery policy\r\n        </span>\r\n        <span class=\"mt-3 d-flex align-items-center\">\r\n            <i class=\"material-icons ins-text-second mr-2\">swap_horiz</i> Return policy\r\n    </span>\r\n</div>\r\n      "

/***/ }),

/***/ "./src/app/list-item-policy/list-item-policy.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/list-item-policy/list-item-policy.component.ts ***!
  \****************************************************************/
/*! exports provided: ListItemPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemPolicyComponent", function() { return ListItemPolicyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListItemPolicyComponent = /** @class */ (function () {
    function ListItemPolicyComponent() {
    }
    ListItemPolicyComponent.prototype.ngOnInit = function () {
    };
    ListItemPolicyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-item-policy',
            template: __webpack_require__(/*! ./list-item-policy.component.html */ "./src/app/list-item-policy/list-item-policy.component.html"),
            styles: [__webpack_require__(/*! ./list-item-policy.component.css */ "./src/app/list-item-policy/list-item-policy.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListItemPolicyComponent);
    return ListItemPolicyComponent;
}());



/***/ }),

/***/ "./src/app/login/new-custumer/new-custumer.component.css":
/*!***************************************************************!*\
  !*** ./src/app/login/new-custumer/new-custumer.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper-sign {\r\n  margin: 100px 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/new-custumer/new-custumer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/login/new-custumer/new-custumer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"row justify-content-center ins-customer-login\">\r\n    <div class=\"col-9 col-md-7 col-lg-6\">\r\n      <div class=\"wrapper-sign\">\r\n        <h4 class=\" ins-bg-second text-white p-2 mb-3\">New Member</h4>\r\n        <form [formGroup]=\"userForm\" #newMember=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n          <div [hidden]=\"newMember.submitted && newMember.valid && !error\">\r\n            <div class=\"form-group\">\r\n              <label for=\"username\">Username</label>\r\n              <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && newUserControl.email.errors }\"/>\r\n              <div *ngIf=\"submitted && newUserControl.email.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"newUserControl.email.errors['required']\">Username is required</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"password\">Password</label>\r\n              <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && newUserControl.email.errors }\"/>\r\n              <div *ngIf=\"submitted && newUserControl.password.errors\" class=\"invalid-feedback\" >\r\n                <div *ngIf=\"newUserControl.password.errors['required']\">Password is required</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"password\">Last Name</label>\r\n              <input type=\"text\" formControlName=\"last\" class=\"form-control\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"password\">First Name</label>\r\n              <input type=\"text\" formControlName=\"first\" class=\"form-control\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"password\">Phone</label>\r\n              <input type=\"phone\" formControlName=\"phone\" placeholder=\"\" class=\"form-control\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <button type=\"submit\" [disabled]=\"userForm.invalid\" class=\"btn btn-primary\">Sign out</button>\r\n              <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\r\n              />\r\n            </div>\r\n          </div> \r\n        </form>\r\n        <div>\r\n          <h2 *ngIf=\"newMember.submitted && userForm.valid && !error\">Successfull Sign in</h2>\r\n          <p *ngIf=\"error\" class=\"alert alert-danger\">{{error.error.error | json}}</p>\r\n          <a routerLink=\"/registered-custumer\" class=\"ins-a-brand\">Là thành viên? Đăng Nhập tại đây.</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/new-custumer/new-custumer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/login/new-custumer/new-custumer.component.ts ***!
  \**************************************************************/
/*! exports provided: NewCustumerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCustumerComponent", function() { return NewCustumerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _models_login_logout_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/login-logout/user.service */ "./src/app/models/login-logout/user.service.ts");
/* harmony import */ var _models_login_logout_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/login-logout/user */ "./src/app/models/login-logout/user.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewCustumerComponent = /** @class */ (function () {
    // infoSign : InfoSign;
    function NewCustumerComponent(formBuilder, userService, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
        this.submitted = false;
        this.loading = false;
    }
    NewCustumerComponent.prototype.ngOnInit = function () {
        this.newUser = new _models_login_logout_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.newUser.email = '';
        this.newUser.password = '';
        this.newUser.last = '';
        this.newUser.first = '';
        this.newUser.phone = 0;
        // ======formGroup==
        // this.userForm = new FormGroup({
        //   'email': new FormControl(this.newUser.email, Validators.required),
        //   'password': new FormControl(this.newUser.password, Validators.required),
        //   'last': new FormControl(this.newUser.last),
        //   'first': new FormControl(this.newUser.first),
        //   'phone': new FormControl(this.newUser.phone)
        // })
        this.userForm = this.formBuilder.group({
            email: [this.newUser.email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: [this.newUser.password, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            last: [this.newUser.last],
            first: [this.newUser.first],
            phone: [this.newUser.phone]
        });
    };
    Object.defineProperty(NewCustumerComponent.prototype, "newUserControl", {
        get: function () { return this.userForm.controls; },
        enumerable: true,
        configurable: true
    });
    NewCustumerComponent.prototype.onSubmit = function () {
        var _this = this;
        // thay cho ngModel
        // this.loading = true;
        this.submitted = true;
        this.newUser.email = this.userForm.value.email;
        this.newUser.password = this.userForm.value.password;
        this.newUser.last = this.userForm.value.last;
        this.newUser.first = this.userForm.value.first;
        this.newUser.phone = this.userForm.value.phone;
        this.userService.createUser(this.newUser).subscribe(function (data) {
        }, function (error) {
            _this.error = error;
            _this.loading = false;
        });
    };
    NewCustumerComponent.prototype.successLogin = function () {
        this.router.navigate(['/success-login']);
    };
    NewCustumerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-custumer',
            template: __webpack_require__(/*! ./new-custumer.component.html */ "./src/app/login/new-custumer/new-custumer.component.html"),
            styles: [__webpack_require__(/*! ./new-custumer.component.css */ "./src/app/login/new-custumer/new-custumer.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _models_login_logout_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NewCustumerComponent);
    return NewCustumerComponent;
}());



/***/ }),

/***/ "./src/app/login/registered-custumer/registered-custumer.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/login/registered-custumer/registered-custumer.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper-login {\r\n  margin: 100px 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/registered-custumer/registered-custumer.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/login/registered-custumer/registered-custumer.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h4 class=\" ins-bg-second text-white p-2 mb-0\">Registered Custumer</h4>\r\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" class=\"clearfix\">\r\n  <div class=\"row mt-4 d-flex align-items-center\">\r\n    <div class=\"form-group\">\r\n      <label for=\"\" class=\"col-md-3 m-0\">\r\n        <label for=\"username\">Username</label>\r\n      </label>\r\n      <div class=\"col-md-6\">\r\n        <input type=\"text\" formControlName=\"username\">\r\n        <div *ngIf=\"submitted && f.username.errors\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"f.username.errors.required\">Username is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-4 d-flex align-items-center\">\r\n    <div>\r\n      <label for=\"\" class=\"col-md-3 m-0\">Password</label>\r\n      <div class=\"col-md-6\">\r\n        <input type=\"Password\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" formControlName=\"password\">\r\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-4 d-flex align-items-center\">\r\n    <p class=\"col-md-3\"></p>\r\n    <p class=\"col-md-9\">\r\n      <a href=\"\" class=\"ins-a-brand\">Forgot Your Password?</a>\r\n    </p>\r\n  </div>\r\n  <button [disabled]=\"loading\" class=\"btn ins-btn-outline-brand float-right mt-4\">Sign in</button>\r\n  <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n  <div *ngIf=\"error\" class=\"\">{{error}}</div>\r\n</form> -->\r\n<!-- <div class=\"alert alert-info\">\r\n    Username: test<br />\r\n    Password: test\r\n</div> -->\r\n\r\n<div class=\"row justify-content-center ins-customer-login\">\r\n  <div class=\"col-9 col-md-7 col-lg-6\">\r\n    <div class=\"wrapper-login\">\r\n      <h4 class=\" ins-bg-second text-white p-2 mb-3\">Registered Custumer</h4>\r\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-group\">\r\n          <label for=\"username\">Username</label>\r\n          <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\"\r\n          />\r\n          <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"password\">Password</label>\r\n          <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"\r\n          />\r\n          <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\r\n          <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\r\n          />\r\n        </div>\r\n        <div *ngIf=\"error\" class=\"alert alert-danger\">{{error.error.error | json}}</div>\r\n      </form>\r\n      <div>\r\n        <a routerLink=\"/new-custumer\" class=\"ins-a-brand\">Thành viên mới? Đăng Kí tại đây.</a>\r\n        <br>\r\n        <span>Jennyjohn@gmail.com</span>\r\n        <br>\r\n        <span>1234567890nhhu</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/registered-custumer/registered-custumer.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/login/registered-custumer/registered-custumer.component.ts ***!
  \****************************************************************************/
/*! exports provided: RegisteredCustumerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisteredCustumerComponent", function() { return RegisteredCustumerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var _models_login_logout_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/login-logout/authentication.service */ "./src/app/models/login-logout/authentication.service.ts");
/* harmony import */ var _models_login_logout_login_status_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/login-logout/login-status.service */ "./src/app/models/login-logout/login-status.service.ts");
// import { Component, OnInit } from '@angular/core';
// import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { first } from 'rxjs/operators';
// import { AuthenticationService } from '../../models/login-logout/authentication.service';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisteredCustumerComponent = /** @class */ (function () {
    function RegisteredCustumerComponent(formBuilder, route, router, authenticationService, loginStatusService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loginStatusService = loginStatusService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    RegisteredCustumerComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/account';
    };
    Object.defineProperty(RegisteredCustumerComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisteredCustumerComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.loginStatusService.setStatus(true);
            console.log('login set status');
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.error = error;
            _this.loading = false;
        });
    };
    RegisteredCustumerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registered-custumer',
            template: __webpack_require__(/*! ./registered-custumer.component.html */ "./src/app/login/registered-custumer/registered-custumer.component.html"),
            styles: [__webpack_require__(/*! ./registered-custumer.component.css */ "./src/app/login/registered-custumer/registered-custumer.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _models_login_logout_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _models_login_logout_login_status_service__WEBPACK_IMPORTED_MODULE_5__["LoginStatusService"]])
    ], RegisteredCustumerComponent);
    return RegisteredCustumerComponent;
}());



/***/ }),

/***/ "./src/app/models/banner.service.ts":
/*!******************************************!*\
  !*** ./src/app/models/banner.service.ts ***!
  \******************************************/
/*! exports provided: BannerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerService", function() { return BannerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BannerService = /** @class */ (function () {
    function BannerService(http) {
        this.http = http;
        this.bannersUrl = "https://green-web-bookstore.herokuapp.com/api/banners";
    }
    BannerService.prototype.getBanners = function () {
        return this.http.get(this.bannersUrl);
    };
    BannerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BannerService);
    return BannerService;
}());



/***/ }),

/***/ "./src/app/models/book.service.ts":
/*!****************************************!*\
  !*** ./src/app/models/book.service.ts ***!
  \****************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-type': 'application/json' })
};
var BookService = /** @class */ (function () {
    function BookService(http) {
        this.http = http;
        this.booksUrl = "https://green-web-bookshop.herokuapp.com/api/books";
    }
    BookService.prototype.getBooks = function () {
        return this.http.get(this.booksUrl);
    };
    BookService.prototype.getBook = function (id) {
        var url = this.booksUrl + "/" + id;
        return this.http.get(url);
    };
    BookService.prototype.searchBooks = function (term) {
        if (!term.trim()) {
            return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }
        return this.http.get(this.booksUrl + "/search/" + term);
    };
    BookService.prototype.deleteBook = function (book) {
        //const id = typeof genre === "string" ? genre : genre._id;
        //const id:string;
        var url = this.booksUrl + "/" + book._id;
        return this.http.delete(url, httpOptions);
    };
    BookService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BookService);
    return BookService;
}());



/***/ }),

/***/ "./src/app/models/book.ts":
/*!********************************!*\
  !*** ./src/app/models/book.ts ***!
  \********************************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image */ "./src/app/models/image.ts");
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./size */ "./src/app/models/size.ts");
/* harmony import */ var _genre__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./genre */ "./src/app/models/genre.ts");



var Book = /** @class */ (function () {
    function Book() {
        this.images = new _image__WEBPACK_IMPORTED_MODULE_0__["Image"]();
        this.size = new _size__WEBPACK_IMPORTED_MODULE_1__["Size"]();
        this.genre = new _genre__WEBPACK_IMPORTED_MODULE_2__["Genre"]();
    }
    return Book;
}());



/***/ }),

/***/ "./src/app/models/cart/cart-item.ts":
/*!******************************************!*\
  !*** ./src/app/models/cart/cart-item.ts ***!
  \******************************************/
/*! exports provided: CartItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItem", function() { return CartItem; });
var CartItem = /** @class */ (function () {
    function CartItem() {
        this.quantity = 0;
    }
    return CartItem;
}());



/***/ }),

/***/ "./src/app/models/cart/order.service.ts":
/*!**********************************************!*\
  !*** ./src/app/models/cart/order.service.ts ***!
  \**********************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _login_logout_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login-logout/user */ "./src/app/models/login-logout/user.ts");
/* harmony import */ var _login_logout_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login-logout/user.service */ "./src/app/models/login-logout/user.service.ts");
/* harmony import */ var _login_logout_login_status_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login-logout/login-status.service */ "./src/app/models/login-logout/login-status.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-type': 'application/json' })
};
var OrderService = /** @class */ (function () {
    function OrderService(http, userService, loginStatusService) {
        var _this = this;
        this.http = http;
        this.userService = userService;
        this.loginStatusService = loginStatusService;
        this.ordersUrl = 'http://green-web-bookshop.herokuapp.com/api/orders';
        this.currentUser = new _login_logout_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.statusUser = false;
        this.totalSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.totalStatus$ = this.totalSource.asObservable();
        loginStatusService.status$.subscribe(function (status) {
            _this.status = status;
            _this.getUser();
            console.log(_this.status);
            // this.getUser();
        });
    }
    OrderService.prototype.ngOnInit = function () {
        this.checkToken();
    };
    OrderService.prototype.setOrderStatus = function (order) {
        this.totalSource.next(order);
    };
    OrderService.prototype.getUser = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (_) { return _this.currentUser = _.user; });
        console.log(this.currentUser);
    };
    ;
    OrderService.prototype.checkToken = function () {
        if (localStorage.getItem('_currentUser')) {
            this.statusUser = true;
            this.loginStatusService.setStatus(this.statusUser);
            this.getUser();
        }
        else {
            this.loginStatusService.setStatus(this.statusUser);
        }
        console.log(this.currentUser);
    };
    OrderService.prototype.addOrder = function (order) {
        return this.http.post(this.ordersUrl, order, httpOptions);
    };
    OrderService.prototype.getOrders = function () {
        this.checkToken();
        console.log(this.currentUser._id);
        var url = this.ordersUrl + "/user/" + this.currentUser._id;
        return this.http.get(url);
    };
    OrderService.prototype.getOrder = function (id) {
        var url = this.ordersUrl + "/" + id;
        return this.http.get(url);
    };
    OrderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _login_logout_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _login_logout_login_status_service__WEBPACK_IMPORTED_MODULE_5__["LoginStatusService"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/models/cart/order.ts":
/*!**************************************!*\
  !*** ./src/app/models/cart/order.ts ***!
  \**************************************/
/*! exports provided: Order, BOOK, _User, _Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOOK", function() { return BOOK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_User", function() { return _User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Book", function() { return _Book; });
var Order = /** @class */ (function () {
    function Order() {
        this._user = new _User();
        this.books = new Array();
    }
    return Order;
}());

var BOOK = /** @class */ (function () {
    function BOOK() {
        this._book = new _Book();
    }
    return BOOK;
}());

var _User = /** @class */ (function () {
    function _User() {
    }
    return _User;
}());

var _Book = /** @class */ (function () {
    function _Book() {
    }
    return _Book;
}());



/***/ }),

/***/ "./src/app/models/cart/shopping-cart.service.ts":
/*!******************************************************!*\
  !*** ./src/app/models/cart/shopping-cart.service.ts ***!
  \******************************************************/
/*! exports provided: ShoppingCartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartService", function() { return ShoppingCartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _cart_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart-item */ "./src/app/models/cart/cart-item.ts");
/* harmony import */ var _book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../book.service */ "./src/app/models/book.service.ts");
/* harmony import */ var _shopping_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopping-cart */ "./src/app/models/cart/shopping-cart.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShoppingCartService = /** @class */ (function () {
    function ShoppingCartService(bookService) {
        var _this = this;
        this.bookService = bookService;
        this.books = [];
        this.totalSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.totalStatus$ = this.totalSource.asObservable();
        this.bookService.getBooks()
            .subscribe(function (books) { return _this.books = books; });
    }
    ShoppingCartService.prototype.ngOnInit = function () {
    };
    ShoppingCartService.prototype.initCart = function () {
        if (this.getStorage()) {
            this.shoppingCart = JSON.parse(this.getStorage());
            console.log('parse shoppingCart from storage');
        }
        else {
            this.shoppingCart = new _shopping_cart__WEBPACK_IMPORTED_MODULE_3__["ShoppingCart"]();
            this.setStorage();
            console.log('tao moi shoppingCart');
        }
    };
    ShoppingCartService.prototype.getStorage = function () {
        return localStorage.getItem('shoppingCart');
    };
    ShoppingCartService.prototype.setStorage = function () {
        localStorage.setItem("shoppingCart", JSON.stringify(this.shoppingCart));
        this.totalSource.next(JSON.stringify(this.shoppingCart));
    };
    ShoppingCartService.prototype.removeStorage = function () {
        localStorage.removeItem('shoppingCart');
    };
    ShoppingCartService.prototype.updateCart = function (shoppingCart) {
        this.shoppingCart = shoppingCart;
        this.calculateCounted();
        this.calculateTotal();
        this.setStorage();
    };
    ShoppingCartService.prototype.addItem = function (book, quantity) {
        var _this = this;
        this.bookService.getBooks()
            .subscribe(function (books) { return _this.books = books; });
        var item = new _cart_item__WEBPACK_IMPORTED_MODULE_1__["CartItem"]();
        var findItem = this.shoppingCart.items.find(function (p) { return p.productId == book._id; });
        if (findItem) {
            var findIndex = this.shoppingCart.items.findIndex(function (i) { return i.productId == book._id; });
            this.shoppingCart.items[findIndex].quantity += quantity;
            // this.shoppingCart.items[findIndex].image = book.images.main;
            // this.shoppingCart.items[findIndex].title = book.title;
            console.log('item already exist');
        }
        else {
            item.quantity = quantity;
            item.productId = book._id;
            item.image = book.images.main;
            item.title = book.title;
            item.sellingPrice = book.sellingPrice;
            item.previousPrice = book.previousPrice;
            this.shoppingCart.items.push(item);
            console.log('add new item');
        }
        this.shoppingCart.items_counted = this.shoppingCart.items_counted + quantity;
        this.setStorage();
    };
    ShoppingCartService.prototype.removeItem = function (cartItem) {
        var shoppingCart = new _shopping_cart__WEBPACK_IMPORTED_MODULE_3__["ShoppingCart"]();
        var findItem = this.shoppingCart.items.find(function (p) { return p.productId == cartItem.productId; });
        if (findItem) {
            var findIndex = this.shoppingCart.items.findIndex(function (i) { return i.productId == cartItem.productId; });
            this.shoppingCart.items[findIndex].quantity = 0;
            shoppingCart.items_counted = this.shoppingCart.items_counted - this.shoppingCart.items[findIndex].quantity;
            shoppingCart.items = this.shoppingCart.items.filter(function (b) { return b.quantity > 0; });
            console.log("remove item " + cartItem.title);
        }
        else {
            console.log('item is not add before');
        }
        this.shoppingCart.items = shoppingCart.items;
        this.setStorage();
    };
    // removeItem(book: Book) {
    //     const shoppingCart = new ShoppingCart();
    //     let findItem = this.shoppingCart.items.find((p) => p.productId == book._id);
    //     if (findItem) {
    //         let findIndex = this.shoppingCart.items.findIndex((i) => i.productId == book._id);
    //         this.shoppingCart.items[findIndex].quantity = 0;
    //         shoppingCart.items = this.shoppingCart.items.filter((b) => b.quantity > 0);
    //         console.log(`remove item ${book.title}`);
    //     } else {
    //         console.log('item is not add before');
    //     }
    //     this.shoppingCart.items = shoppingCart.items;
    //     this.setStorage(this.shoppingCart);
    // }
    ShoppingCartService.prototype.calculateTotal = function () {
        var _this = this;
        var total = 0;
        var _loop_1 = function (i) {
            var findItem = this_1.shoppingCart.items.find(function (p) { return p.productId == _this.shoppingCart.items[i].productId; });
            total += (this_1.shoppingCart.items[i].quantity) * findItem.sellingPrice;
        };
        var this_1 = this;
        for (var i = 0; i < this.shoppingCart.items.length; i++) {
            _loop_1(i);
        }
        this.shoppingCart.total = total;
        this.setStorage();
        console.log(JSON.parse(this.getStorage()).total);
        console.log('service');
    };
    ShoppingCartService.prototype.calculateCounted = function () {
        var count = 0;
        for (var i = 0; i < this.shoppingCart.items.length; i++) {
            count += this.shoppingCart.items[i].quantity;
        }
        this.shoppingCart.items_counted = count;
        this.setStorage();
        console.log(count);
    };
    ShoppingCartService.prototype.removeShoppingCart = function () {
        if (this.getStorage()) {
            localStorage.removeItem('shoppingCart');
            this.initCart();
            this.calculateCounted();
            this.calculateTotal();
            this.setStorage();
            console.log('remove shoppingCart');
        }
    };
    ShoppingCartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"]])
    ], ShoppingCartService);
    return ShoppingCartService;
}());



/***/ }),

/***/ "./src/app/models/cart/shopping-cart.ts":
/*!**********************************************!*\
  !*** ./src/app/models/cart/shopping-cart.ts ***!
  \**********************************************/
/*! exports provided: ShoppingCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCart", function() { return ShoppingCart; });
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this.items = new Array();
        this.items_counted = 0;
        this.total = 0;
        this.amount = 0;
        this.discount = 0;
        this.shipping = 0;
    }
    return ShoppingCart;
}());

// export class ItemsFound {
//     book: Book = new Book();
//     quatity : number;
// } 


/***/ }),

/***/ "./src/app/models/genre.service.ts":
/*!*****************************************!*\
  !*** ./src/app/models/genre.service.ts ***!
  \*****************************************/
/*! exports provided: GenreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenreService", function() { return GenreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-type': 'application/json' })
};
var GenreService = /** @class */ (function () {
    function GenreService(http) {
        this.http = http;
        this.genresUrl = "https://green-web-bookshop.herokuapp.com/api/genres";
    }
    GenreService.prototype.getGenres = function () {
        return this.http.get(this.genresUrl);
    };
    ;
    GenreService.prototype.getGenre = function (id) {
        var url = this.genresUrl + "/" + id;
        return this.http.get(url);
    };
    ;
    GenreService.prototype.addGenre = function (genre) {
        return this.http.post(this.genresUrl, genre, httpOptions);
    };
    GenreService.prototype.deleteGenre = function (genre) {
        var url = this.genresUrl + "/" + genre._id;
        return this.http.delete(url, httpOptions);
    };
    GenreService.prototype.updateGenre = function (genre) {
        var url = this.genresUrl + "/" + genre._id;
        return this.http.put(url, genre, httpOptions);
    };
    GenreService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GenreService);
    return GenreService;
}());



/***/ }),

/***/ "./src/app/models/genre.ts":
/*!*********************************!*\
  !*** ./src/app/models/genre.ts ***!
  \*********************************/
/*! exports provided: Genre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Genre", function() { return Genre; });
var Genre = /** @class */ (function () {
    function Genre() {
    }
    return Genre;
}());



/***/ }),

/***/ "./src/app/models/image.ts":
/*!*********************************!*\
  !*** ./src/app/models/image.ts ***!
  \*********************************/
/*! exports provided: Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
var Image = /** @class */ (function () {
    function Image() {
    }
    return Image;
}());



/***/ }),

/***/ "./src/app/models/login-logout/auth.guard.ts":
/*!***************************************************!*\
  !*** ./src/app/models/login-logout/auth.guard.ts ***!
  \***************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('_currentUser')) {
            return true;
        }
        this.router.navigate(['/registered-custumer'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/models/login-logout/authentication.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/models/login-logout/authentication.service.ts ***!
  \***************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        this.loginUrl = "http://green-web-ecommerce.herokuapp.com/v1/users/login";
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post(this.loginUrl, { email: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            if (res && res.token) {
                localStorage.setItem('_currentUser', JSON.stringify({ username: username, token: res.token }));
            }
        }));
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('_currentUser');
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/models/login-logout/jwt.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/models/login-logout/jwt.interceptor.ts ***!
  \********************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        var _currentUser = JSON.parse(localStorage.getItem('_currentUser'));
        if (_currentUser && _currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "" + _currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/models/login-logout/login-status.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/models/login-logout/login-status.service.ts ***!
  \*************************************************************/
/*! exports provided: LoginStatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginStatusService", function() { return LoginStatusService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);

var LoginStatusService = /** @class */ (function () {
    function LoginStatusService() {
        this.statusSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.status$ = this.statusSource.asObservable();
    }
    LoginStatusService.prototype.setStatus = function (status) {
        this.statusSource.next(status);
        console.log('setStatus service');
    };
    return LoginStatusService;
}());



/***/ }),

/***/ "./src/app/models/login-logout/user.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/models/login-logout/user.service.ts ***!
  \*****************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOption = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-type': 'application/json' })
};
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.usersUrl = "http://green-web-ecommerce.herokuapp.com/v1/users";
    }
    UserService.prototype.getAll = function () {
        return this.http.get(this.usersUrl);
    };
    // khi tạo thì chỉ tạo phần thân là User, còn khi get về thì api sẽ
    // tự động tạo thêm cái element khác trong Users
    UserService.prototype.createUser = function (user) {
        return this.http.post(this.usersUrl, user, httpOption).pipe();
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/models/login-logout/user.ts":
/*!*********************************************!*\
  !*** ./src/app/models/login-logout/user.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/models/size.ts":
/*!********************************!*\
  !*** ./src/app/models/size.ts ***!
  \********************************/
/*! exports provided: Size */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Size", function() { return Size; });
var Size = /** @class */ (function () {
    function Size() {
    }
    return Size;
}());



/***/ }),

/***/ "./src/app/nav/nav-list-cart/nav-list-cart.component.css":
/*!***************************************************************!*\
  !*** ./src/app/nav/nav-list-cart/nav-list-cart.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav/nav-list-cart/nav-list-cart.component.html":
/*!****************************************************************!*\
  !*** ./src/app/nav/nav-list-cart/nav-list-cart.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-unstyled ins-wapper-cart\">\n  <li *ngFor=\"let item of shoppingCart.items\" class=\" float-left mb-4\">\n    <div class=\"row\">\n      <div class=\"col-3\">\n        <a routerLink=\"/detail/{{item.productId}}\">\n          <img src=\"{{item.image}}\" alt=\"\">\n        </a>\n      </div>\n      <div class=\"col-9\">\n        <div>\n          <a class=\"ins-a-brand\" routerLink=\"/detail/{{item.productId}}\">{{item.title}}</a>\n          <i (click)=\"removeItem(item)\" class=\"ins-icon-delete material-icons ins-text-second float-right\">delete</i>\n        </div>\n        <b>{{item.sellingPrice}} x {{item.quantity}}</b>\n      </div>\n    </div>\n  </li>\n  <li class=\"float-left d-flex\">\n    <a routerLink=\"/checkout\">\n      <button class=\"btn ins-btn-outline-brand float-right\" [disabled]=\"shoppingCart.items_counted==0\"  type=\"button\">Checkout</button>\n    </a>\n    <a routerLink=\"/cart\">\n      <button class=\"btn ins-btn-outline-brand float-right ml-2\" [disabled]=\"shoppingCart.items_counted==0\" type=\"button\">View cart</button>\n    </a>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/nav/nav-list-cart/nav-list-cart.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/nav/nav-list-cart/nav-list-cart.component.ts ***!
  \**************************************************************/
/*! exports provided: NavListCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavListCartComponent", function() { return NavListCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _models_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/cart/shopping-cart.service */ "./src/app/models/cart/shopping-cart.service.ts");
/* harmony import */ var _models_cart_shopping_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/cart/shopping-cart */ "./src/app/models/cart/shopping-cart.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavListCartComponent = /** @class */ (function () {
    function NavListCartComponent(shoppingCartService) {
        var _this = this;
        this.shoppingCartService = shoppingCartService;
        this.shoppingCart = new _models_cart_shopping_cart__WEBPACK_IMPORTED_MODULE_2__["ShoppingCart"]();
        shoppingCartService.totalStatus$.subscribe(function (status) {
            _this.shoppingCart = JSON.parse(_this.getStorage());
            console.log(_this.shoppingCart.total);
        });
    }
    NavListCartComponent.prototype.ngOnInit = function () {
        this.shoppingCartService.initCart();
        this.shoppingCart = JSON.parse(this.getStorage());
    };
    NavListCartComponent.prototype.getStorage = function () {
        return localStorage.getItem('shoppingCart');
    };
    NavListCartComponent.prototype.removeItem = function (cartItem) {
        this.shoppingCartService.removeItem(cartItem);
        this.shoppingCartService.calculateTotal();
        this.shoppingCartService.calculateCounted();
        this.shoppingCartService.setStorage();
    };
    NavListCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-list-cart',
            template: __webpack_require__(/*! ./nav-list-cart.component.html */ "./src/app/nav/nav-list-cart/nav-list-cart.component.html"),
            styles: [__webpack_require__(/*! ./nav-list-cart.component.css */ "./src/app/nav/nav-list-cart/nav-list-cart.component.css")]
        }),
        __metadata("design:paramtypes", [_models_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"]])
    ], NavListCartComponent);
    return NavListCartComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n .ins-nav-top ul:nth-of-type(2) {\r\n  right: 0;\r\n}\r\n.navbar-brand {\r\n  /* position: absolute;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  top: 0px; */\r\n  font-size: 40px;\r\n}\r\n.dropdown-menu {\r\n  font-size: 15px;\r\n  padding: 12px;\r\n}\r\n.ins-nav-category {\r\n  padding-top: 0px;\r\n  padding-bottom: 0px;\r\n}\r\n.navbar-toggler-icon {\r\n  color:  rgb(172, 147, 108);\r\n}\r\n.uk-dropdown {\r\n  width: 312px;\r\n}\r\n.ins-wapper-img-cart img {\r\n  width: 100%;\r\n}\r\n.ins-wapper-cart {\r\n  font-size: 14px;\r\n  height: 0px;\r\n}\r\n.ins-logo-offcanvas {\r\n  font-size: 40px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar w-100 navbar-expand-lg navbar-light bg-lights ins-nav-main mb-3 \">\r\n  <div class=\"uk-offcanvas-content\">\r\n    <button class=\"uk-button uk-button-default mr-3\" type=\"button\" uk-toggle=\"target: #offcanvas-slide\">Category</button>\r\n    <div id=\"offcanvas-slide\" uk-offcanvas=\"overlay: false\">\r\n      <div class=\"uk-offcanvas-bar\">\r\n        <button class=\"uk-offcanvas-close\" type=\"button\" uk-close></button>\r\n        <a routerLink=\"/homepage\" class=\"text-white ins-logo-offcanvas\">\r\n          <b>Book</b> mall</a>\r\n        <ul class=\"list-unstyled\">\r\n          <li *ngFor=\"let genre of genres\">\r\n            <a routerLink=\"/category\" class=\"px-0 ins-a-brand\">{{genre.name}}</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <a class=\"navbar-brand ins-a-brand display-4 text-dark\" routerLink=\"/homepage\">\r\n    <b>Book</b> mall\r\n  </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\"\r\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse ins-nav-collapse\" id=\"navbarResponsive\">\r\n    <ul class=\"navbar-nav ml-auto\">\r\n      <li class=\"nav-item mr-3\">\r\n        <app-search></app-search>\r\n      </li>\r\n      <li class=\"nav-item mr-3 float-left navbar-text d-flex align-items-center \">\r\n        <div class=\"uk-inline\">\r\n          <div class=\"d-flex\">\r\n            <a routerLink=\"/account\" class=\"pr-1 py-0 ins-a-brand\">\r\n              <i class=\"material-icons\">account_circle</i>\r\n            </a>\r\n            <small>\r\n              <a routerLink=\"/account\" class=\"nav-link ins-a-brand px-0 my-0\">\r\n                <div *ngIf=\"currentUser\">\r\n                  {{currentUser.last}} {{currentUser.first}}\r\n                </div>\r\n              </a>\r\n            </small>\r\n          </div>\r\n          <div class=\"uk-dropdown\" uk-dropdown=\"animation: uk-animation-slide-top-small;pos: bottom-right; duration: 700\">\r\n            <ul class=\"list-unstyled\">\r\n              <li *ngIf=\"currentUser\">\r\n                <a routerLink=\"/account\" class=\"ins-a-brand\">Hi {{currentUser.last}}</a>\r\n              </li>\r\n              <li *ngIf=\"currentUser\">\r\n                <a routerLink=\"/account\" class=\"ins-a-brand\">Thông tin tài khoản</a>\r\n              </li>\r\n              <li *ngIf=\"currentUser\">\r\n                <a routerLink=\"/account/order-manage\" class=\"ins-a-brand\">Quản lý đơn hàng</a>\r\n              </li>\r\n              <li *ngIf=\"currentUser\" class=\"float-right\">\r\n                <a class=\"uk-button uk-button-default\" href=\"#modal-center\" uk-toggle>Logout</a>\r\n\r\n                <div id=\"modal-center\" class=\"uk-flex-top\" uk-modal>\r\n                  <div class=\"uk-modal-dialog uk-modal-body uk-margin-auto-vertical\">\r\n\r\n                    <button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\r\n\r\n                    <p>Do you want to logout?</p>\r\n\r\n                    <button class=\"uk-button uk-button-default uk-modal-close demo float-right\" type=\"button\" (click)=\"logout()\" onclick=\"UIkit.notification({message: '<span uk-icon=\\'icon: check\\'></span> Logout Successful'})\">Yes</button>\r\n                    <button class=\"uk-button uk-button-danger uk-modal-close float-right mr-2\" type=\"button\">Cancel</button>\r\n\r\n                  </div>\r\n                </div>\r\n              </li>\r\n\r\n              <li *ngIf=\"!currentUser\">\r\n                <a routerLink=\"/registered-custumer\" class=\"ins-a-brand\">Login</a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item mr-3 float-left navbar-text d-flex align-items-center \">\r\n        <div class=\"uk-inline\">\r\n          <div class=\"d-flex\">\r\n            <a routerLink=\"/cart\" class=\"pl-1 my-0 ins-a-brand\">\r\n              <i class=\"material-icons\">shopping_cart</i>\r\n            </a>\r\n            <small>\r\n              <a routerLink=\"/cart\" class=\"nav-link ins-a-brand px-0 my-0\">Cart({{shoppingCart.items_counted}})</a>\r\n            </small>\r\n          </div>\r\n          <div class=\"uk-dropdown p-3\" uk-dropdown=\"animation: uk-animation-slide-top-small;pos: bottom-right; duration: 700\">\r\n            <app-nav-list-cart></app-nav-list-cart>\r\n          </div>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n\r\n  </div>\r\n</nav>\r\n\r\n\r\n<!-- <li class=\"nav-item\">\r\n          <a routerLink=\"/add-genre\">Add genre</a>\r\n        </li> -->"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _models_genre_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/genre.service */ "./src/app/models/genre.service.ts");
/* harmony import */ var _models_banner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/banner.service */ "./src/app/models/banner.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var _models_login_logout_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/login-logout/user.service */ "./src/app/models/login-logout/user.service.ts");
/* harmony import */ var _models_login_logout_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/login-logout/user */ "./src/app/models/login-logout/user.ts");
/* harmony import */ var _models_login_logout_login_status_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/login-logout/login-status.service */ "./src/app/models/login-logout/login-status.service.ts");
/* harmony import */ var _models_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/cart/shopping-cart.service */ "./src/app/models/cart/shopping-cart.service.ts");
/* harmony import */ var _models_login_logout_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/login-logout/authentication.service */ "./src/app/models/login-logout/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var NavComponent = /** @class */ (function () {
    function NavComponent(genreService, bannerService, userService, loginStatusService, shoppingCartService, authenticationService) {
        var _this = this;
        this.genreService = genreService;
        this.bannerService = bannerService;
        this.userService = userService;
        this.loginStatusService = loginStatusService;
        this.shoppingCartService = shoppingCartService;
        this.authenticationService = authenticationService;
        this.currentUser = new _models_login_logout_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
        this.statusUser = false;
        loginStatusService.status$.subscribe(function (status) {
            _this.status = status;
            if (status) {
                _this.getUser();
            }
            _this.currentUser = JSON.parse(localStorage.getItem('_currentUser'));
            console.log(_this.status);
        });
        shoppingCartService.totalStatus$.subscribe(function (status) {
            _this.shoppingCart = JSON.parse(_this.getStorage());
            console.log(_this.shoppingCart.total);
        });
    }
    NavComponent.prototype.ngOnInit = function () {
        this.checkToken(); // in checkToken() have getUser();
        this.getGenres();
        this.getBanners();
        this.shoppingCartService.initCart();
        this.shoppingCart = JSON.parse(this.getStorage());
    };
    NavComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (_) { return _this.currentUser = _.user; });
    };
    ;
    NavComponent.prototype.getGenres = function () {
        var _this = this;
        this.genreService.getGenres()
            .subscribe(function (genres) { return _this.genres = genres; });
    };
    NavComponent.prototype.getBanners = function () {
        var _this = this;
        this.bannerService.getBanners()
            .subscribe(function (banners) { return _this.banners = banners; });
    };
    NavComponent.prototype.getStorage = function () {
        return localStorage.getItem('shoppingCart');
    };
    NavComponent.prototype.checkToken = function () {
        if (localStorage.getItem('_currentUser')) {
            this.statusUser = true;
            this.loginStatusService.setStatus(this.statusUser);
            this.getUser();
        }
        else {
            this.loginStatusService.setStatus(this.statusUser);
        }
        console.log('check');
    };
    NavComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.loginStatusService.setStatus(false);
        console.log('logout');
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [_models_genre_service__WEBPACK_IMPORTED_MODULE_1__["GenreService"],
            _models_banner_service__WEBPACK_IMPORTED_MODULE_2__["BannerService"],
            _models_login_logout_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _models_login_logout_login_status_service__WEBPACK_IMPORTED_MODULE_6__["LoginStatusService"],
            _models_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__["ShoppingCartService"],
            _models_login_logout_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/nav/search/search.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav/search/search.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n  border : 1px solid rgb(0, 171, 169);\r\n}\r\n\r\n@media (max-width: 991px) {\r\n  .ins-nav-collapse ul li {\r\n    padding: 8px 0px;\r\n  }\r\n}\r\n\r\n.ins-search-result {\r\n  list-style: none;\r\n  background-color: #fff;\r\n  position: absolute;\r\n  z-index: 1000;\r\n  right: 35px;\r\n  padding: 15px;\r\n  width: 330px;\r\n}\r\n\r\ninput {\r\n  width: 160px;\r\n  float: right;\r\n}\r\n\r\n.uk-navbar-toggle {\r\n  height: 50px;\r\n  padding: 0;\r\n}\r\n\r\n::-moz-placeholder {\r\n  font-size: 14px;\r\n}\r\n\r\n.uk-search-navbar .uk-search-input {\r\n  font-size: 16px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/nav/search/search.component.html":
/*!**************************************************!*\
  !*** ./src/app/nav/search/search.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"input-group\">\r\n    <input type=\"search\" id=\"inputSearchHeader\" class=\"input-group-text form-control ins-input-search\" placeholder=\"go search\"\r\n      aria-label=\"Username\" aria-describedby=\"basic-addon1\" #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" >\r\n      <ul class=\"ins-search-result\">\r\n        <li *ngFor=\"let book of books$ | async\" >\r\n          <a routerLink=\"/product-detail/{{book._id}}\">\r\n            {{book.title}}\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    <div class=\"input-group-append\">\r\n      <button type=\"submit\" class=\"btn form-control\" aria-describedby=\"inputSearchHeader\" >Search</button>\r\n    </div>\r\n</div> -->\r\n<div class=\"uk-navbar-right\">\r\n\r\n  <div>\r\n      <a class=\"uk-navbar-toggle\" uk-search-icon href=\"#\"></a>\r\n      <div class=\"uk-drop\" uk-drop=\"mode: click; pos: left-center; offset: 0\">\r\n          <form class=\"uk-search uk-search-navbar\">\r\n              <input [(ngModel)]=\"queryString\" [ngModelOptions]=\"{standalone: true}\" #searchBox (keyup)=\"search(searchBox.value)\" id=\"search-box\" class=\"uk-search-input\" type=\"search\" placeholder=\"Search...\" autofocus>\r\n          </form>\r\n      </div>\r\n  </div>\r\n\r\n</div>\r\n<ul *ngIf=\"searchBox.value\" class=\"ins-search-result\">\r\n  <li class=\"mb-3\" *ngFor=\"let book of books$ |async\">\r\n    <a class=\"ins-a-brand\" routerLink=\"/detail/{{book._id}}\">{{book.title}}</a>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/nav/search/search.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav/search/search.component.ts ***!
  \************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var _models_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/book.service */ "./src/app/models/book.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = /** @class */ (function () {
    function SearchComponent(bookService) {
        this.bookService = bookService;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    SearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.books$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), 
        // switch to new search observable each time the term changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (term) { return _this.bookService.searchBooks(term); }));
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/nav/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/nav/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_models_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "error 404 !\r\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pagination/pagination.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pagination/pagination.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pagination/pagination.component.html":
/*!******************************************************!*\
  !*** ./src/app/pagination/pagination.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12 \">\r\n      <nav aria-label=\"Page navigation pagination \">\r\n        <ul class=\"pagination justify-content-end mb-4\">\r\n          <li class=\"page-item disabled\">\r\n            <a class=\"page-link\" routerLink=\"/\" tabindex=\"-1\">Previous</a>\r\n          </li>\r\n          <li class=\"page-item\"><a class=\"page-link active\" href=\"#\">1</a></li>\r\n          <li class=\"page-item\"><a class=\"page-link ins-a-brand \" href=\"#\">2</a></li>\r\n          <li class=\"page-item\"><a class=\"page-link ins-a-brand \" href=\"#\">3</a></li>\r\n          <li class=\"page-item\">\r\n            <a class=\"page-link ins-a-brand \" href=\"#\">Next</a>\r\n          </li>\r\n        </ul>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/pagination/pagination.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pagination/pagination.component.ts ***!
  \****************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
    }
    PaginationComponent.prototype.ngOnInit = function () {
    };
    PaginationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/app/pagination/pagination.component.html"),
            styles: [__webpack_require__(/*! ./pagination.component.css */ "./src/app/pagination/pagination.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/product-detail/description/description.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/product-detail/description/description.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ins-description ul {\r\n  justify-content: center;\r\n  border: none;\r\n}\r\n.ins-description li {\r\n  background: transparent;\r\n  margin: 0 30px;\r\n\r\n}\r\n.ins-description li a {\r\n  background:transparent;\r\n  padding: 10px 0;\r\n  border: none;\r\n  display: inline;\r\n}\r\n.ins-description ul li a:hover {\r\n  transition: all 300ms ease-in;\r\n      -webkit-transition: all 300ms ease-in;\r\n      -moz-transition: all 300ms ease-in;\r\n      -ms-transition: all 300ms ease-in;\r\n      -o-transition: all 300ms ease-in;\r\n  border-bottom: 2px solid rgb(172, 147, 108);\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/product-detail/description/description.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/product-detail/description/description.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row ins-description\">\r\n  <div class=\"col-12 col-md-12\">\r\n    <ul class=\"nav nav-tabs mb-3 \" id=\"myTab\" role=\"tablist\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link ins-a-brand\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">Full Description</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link ins-a-brand\" id=\"product-detail-tab\" data-toggle=\"tab\" href=\"#product-detail\" role=\"tab\" aria-controls=\"product-detail\"\r\n          aria-selected=\"false\">Product detail</a>\r\n      </li>\r\n    </ul>\r\n    <div class=\"tab-content \" id=\"myTabContent\">\r\n      <div class=\"tab-pane fade \" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\r\n        <div [innerHTML]=\"book.fullDescription\"></div>\r\n      </div>\r\n      <div class=\"tab-pane fade \" id=\"product-detail\" role=\"tabpanel\" aria-labelledby=\"product-detail-tab\">\r\n        <p>\r\n          <b>Ngày Đăng: </b>{{book.releaseDate}}</p>\r\n        <p>\r\n          <b>Sku: </b>{{book.sku}}</p>\r\n        <p>\r\n          <b>Tên sách: </b>{{book.title}}</p>\r\n        <p>\r\n          <b>Tác giả: </b>{{book.author}}</p>\r\n        <p>\r\n          <b>NXB: </b>{{book.publisher}}</p>\r\n        <p>\r\n          <b>Số trang: </b>{{book.pages}}</p>\r\n        <p>\r\n          <b>Kích thướt(\r\n            <span *ngIf=\"book.size?.height\">height</span> \r\n              <span *ngIf=\"book.size?.height && book.size?.width\">x</span>\r\n            <span *ngIf=\"book.size?.width\">width</span> \r\n                <span *ngIf=\"book.size?.width && book.size?.depth\">x</span>\r\n            <span *ngIf=\"book.size?.depth\">depth</span> ):\r\n          </b>\r\n          {{book.size?.height}}\r\n          <span *ngIf=\"book.size?.width && book.size?.height \">x</span>\r\n          {{book.size?.width}}\r\n            <span *ngIf=\"book.size?.depth && book.size?.width\">x</span>\r\n             {{book.size?.depth}} cm\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/product-detail/description/description.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/product-detail/description/description.component.ts ***!
  \*********************************************************************/
/*! exports provided: DescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionComponent", function() { return DescriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _models_book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/book */ "./src/app/models/book.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DescriptionComponent = /** @class */ (function () {
    function DescriptionComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_book__WEBPACK_IMPORTED_MODULE_1__["Book"])
    ], DescriptionComponent.prototype, "book", void 0);
    DescriptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-description',
            template: __webpack_require__(/*! ./description.component.html */ "./src/app/product-detail/description/description.component.html"),
            styles: [__webpack_require__(/*! ./description.component.css */ "./src/app/product-detail/description/description.component.css")]
        })
    ], DescriptionComponent);
    return DescriptionComponent;
}());



/***/ }),

/***/ "./src/app/product-detail/more-detail/more-detail.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/product-detail/more-detail/more-detail.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".breadcrumb {\r\n    background-color: transparent;\r\n  }\r\n\r\n\r\n\r\n\r\n  /* row1:detail */\r\n\r\n\r\n\r\n\r\n  .ins-detail-img span {\r\n    top: 20px;\r\n    left: 20px;\r\n    border-radius: 50% !important;\r\n  }\r\n\r\n\r\n\r\n\r\n  .ins-detail-img ul li img {\r\n    width: 25%;\r\n  }\r\n\r\n\r\n\r\n\r\n  .ins-detail .ins-detail-add-to-cart input {\r\n    width: 50px;\r\n  }\r\n\r\n"

/***/ }),

/***/ "./src/app/product-detail/more-detail/more-detail.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/product-detail/more-detail/more-detail.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row ins-detail\">\r\n    <div class=\"col-md-12 col-12\" >\r\n      <h4 class=\" ins-bg-second text-white p-2 mb-3\">{{book.title}}</h4>\r\n      <p>{{book.shortDescription}}</p>\r\n    </div>\r\n    <div class=\"col-md-6 col-12  ins-detail-img\">\r\n      <img class=\"my-3 w-100 ins-box-shadow\" src=\"{{book.images.main}}\" alt=\"\">\r\n      <span class=\"btn btn-danger rounded-circle ins-btn-deal\">\r\n          -{{100 - ((book.sellingPrice  / book.previousPrice) * 100)}}%\r\n      </span>\r\n      <ul class=\"list-unstyled d-block mb-4\">\r\n        <li class=\"d-inline mr-2\"><img class=\"img-thumbnail\" src=\"{{book.images.main}}\" alt=\"\"></li>\r\n      </ul>\r\n    </div>\r\n\r\n    <div class=\"col-md-6 col-12 ins-detail-text pl-4 mt-4\">\r\n      <h3 class=\"ins-text-brand\">{{book.sellingPrice}}</h3>\r\n      <small class=\"text-muted\">\r\n          | <s> {{book.previousPrice}}</s>\r\n      </small>\r\n      <!-- <label class=\"d-block mt-3\" for=\"input-color\">Color:</label>\r\n      <select class=\"btn ins-input-quantity-color\" name=\"\" id=\"input-color\">\r\n        <option value=\"\" class=\"active\">White</option>\r\n        <option value=\"\" class=\"active\">Black</option>\r\n        <option value=\"\" class=\"active\">Pink</option>\r\n      </select> -->\r\n      <div class=\"ins-detail-add-to-cart mt-3  d-flex \">\r\n        <input class=\" btn p-2 ins-btn-outline-brand\" type=\"number\" name=\"\" value=\"1\" [(ngModel)]=\"inputQuantity\" min=\"1\">\r\n        <!-- <button type=\"button\" (click)=\"addItem(book)\" class=\"btn ins-btn-outline-brand ml-4\">Add to cart</button> -->\r\n        <button class=\"uk-button uk-button-default uk-modal-close ins-btn-outline-brand ml-4\" type=\"button\" (click)=\"addItem(book)\" onclick=\"UIkit.notification({message: '<span uk-icon=\\'icon: check\\'></span> Add to cart successful. '})\">Add cart</button>\r\n\r\n        <span class=\"ml-4 d-flex align-items-center\">\r\n            <i class=\"material-icons ins-text-second\">check</i> <b>In stock</b>\r\n        </span>\r\n      </div>\r\n      <app-list-item-policy></app-list-item-policy>\r\n      <hr>\r\n      <div class=\"ins-share-icon\">\r\n          <!-- <a href=\"http://www.facebook.com/share.php?u=http://mas1.magikthemes.com/index.php/fluence/non-fiction/educational-media.html&t=\">\r\n            <i class=\"fab fa-facebook-f \"></i>\r\n          </a> -->\r\n          <i class=\"fab fa-youtube\"></i>\r\n          <a href=\"http://www.linkedin.com/shareArticle?mini=true&url=http://mas1.magikthemes.com/index.php/fluence/non-fiction/educational-media.html&title=&source=BLOGNAME&summary=EXCERPT\">\r\n            <i class=\"fab fa-linkedin-in\"></i>\r\n          </a>\r\n          <!-- <a href=\"https://plus.google.com/share?url=http://mas1.magikthemes.com/index.php/fluence/non-fiction/educational-media.html\">\r\n            <i class=\"fab fa-google-plus-g\"></i>\r\n          </a> -->\r\n            <a href=\"http://twitter.com/home?status=%20-%20http://mas1.magikthemes.com/index.php/fluence/non-fiction/educational-media.html\">\r\n                <i class=\"fab fa-twitter\"></i>\r\n            </a>\r\n        </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/product-detail/more-detail/more-detail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/product-detail/more-detail/more-detail.component.ts ***!
  \*********************************************************************/
/*! exports provided: MoreDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreDetailComponent", function() { return MoreDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _models_book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/book */ "./src/app/models/book.ts");
/* harmony import */ var _models_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/cart/shopping-cart.service */ "./src/app/models/cart/shopping-cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MoreDetailComponent = /** @class */ (function () {
    function MoreDetailComponent(shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
        this.inputQuantity = 1;
    }
    MoreDetailComponent.prototype.ngOnInit = function () {
        // this.shoppingCartService.initCart();
    };
    MoreDetailComponent.prototype.addItem = function (book) {
        this.shoppingCartService.addItem(book, this.inputQuantity);
        this.shoppingCartService.calculateTotal();
        this.shoppingCartService.calculateCounted();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_book__WEBPACK_IMPORTED_MODULE_1__["Book"])
    ], MoreDetailComponent.prototype, "book", void 0);
    MoreDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-more-detail',
            template: __webpack_require__(/*! ./more-detail.component.html */ "./src/app/product-detail/more-detail/more-detail.component.html"),
            styles: [__webpack_require__(/*! ./more-detail.component.css */ "./src/app/product-detail/more-detail/more-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_models_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartService"]])
    ], MoreDetailComponent);
    return MoreDetailComponent;
}());



/***/ }),

/***/ "./src/app/product-detail/product-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"book$ | async as book\"  class=\"container\">\r\n    <!-- .row1:breadcrumb -->\r\n    <app-breadcrumb [book]=\"book\"></app-breadcrumb>\r\n    <!-- .row1:breadcrumb-end -->\r\n\r\n    <!-- .row2: detail  -->\r\n    <app-more-detail [book]=\"book\" ></app-more-detail>\r\n    <!-- .row2: detail-end -->\r\n\r\n    <!-- row3: description -->\r\n    <app-description [book]=\"book\"></app-description>\r\n    <!-- row3: description-end -->\r\n\r\n    <!-- row4:review -->\r\n    <app-review [book]=\"book\" ></app-review>\r\n    <!-- row4:review-end -->\r\n\r\n    <!-- row5: product relative -->\r\n    <app-block-template-product ></app-block-template-product>\r\n    <!-- row5: product relative-end -->\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _models_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/book.service */ "./src/app/models/book.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(location, route, bookService) {
        this.location = location;
        this.route = route;
        this.bookService = bookService;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        this.getBook();
    };
    // getBook(): void {
    //   let id: string;
    //   id = this.route.snapshot.paramMap.get('_id');
    //   this.bookService.getBook(id)
    //     .subscribe(book => this.book = book);
    // }
    ProductDetailComponent.prototype.getBook = function () {
        var _this = this;
        this.book$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) {
            return _this.bookService.getBook(params.get('_id'));
        }));
    };
    ProductDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.css */ "./src/app/product-detail/product-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _models_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/product-detail/review/modal-review/modal-review.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/product-detail/review/modal-review/modal-review.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-header, .modal-footer {\r\n  border: none;\r\n}\r\n/* .modal-header {\r\n  background-color: rgb(172, 147, 108);\r\n} */\r\n.modal-header img {\r\n  box-shadow: 2px 2px 10px 4px #eee;\r\n}\r\n"

/***/ }),

/***/ "./src/app/product-detail/review/modal-review/modal-review.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/product-detail/review/modal-review/modal-review.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"writeYourReview\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"mb-4 text-white p-2 ins-bg-second w-100\" ><b>Write your Review</b><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button></h5>\r\n\r\n      </div>\r\n      <div class=\"row modal-body\">\r\n        <div class=\"col-md-6\" *ngIf=\"book\">\r\n          <img src=\"{{book.images.main}}\" class=\"w-75\" alt=\"\">\r\n          <br>\r\n          <b class=\"my-4 d-block\">{{book.title}}</b>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <form>\r\n            <div class=\"form-group\">\r\n              <label for=\"titleReview\" class=\"col-form-label\">Your title review:</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"titleReview\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"yourReview\" class=\"col-form-label\">Your review:</label>\r\n              <textarea class=\"form-control\" id=\"yourReview\"></textarea>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"userName\" class=\"col-form-label\">User name:</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"userName\">\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\r\n        <button type=\"button\" class=\"btn ins-btn-outline-brand\">Submit review</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/product-detail/review/modal-review/modal-review.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/product-detail/review/modal-review/modal-review.component.ts ***!
  \******************************************************************************/
/*! exports provided: ModalReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalReviewComponent", function() { return ModalReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _models_book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/book */ "./src/app/models/book.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalReviewComponent = /** @class */ (function () {
    function ModalReviewComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_book__WEBPACK_IMPORTED_MODULE_1__["Book"])
    ], ModalReviewComponent.prototype, "book", void 0);
    ModalReviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-review',
            template: __webpack_require__(/*! ./modal-review.component.html */ "./src/app/product-detail/review/modal-review/modal-review.component.html"),
            styles: [__webpack_require__(/*! ./modal-review.component.css */ "./src/app/product-detail/review/modal-review/modal-review.component.css")]
        })
    ], ModalReviewComponent);
    return ModalReviewComponent;
}());



/***/ }),

/***/ "./src/app/product-detail/review/review.component.css":
/*!************************************************************!*\
  !*** ./src/app/product-detail/review/review.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-detail/review/review.component.html":
/*!*************************************************************!*\
  !*** ./src/app/product-detail/review/review.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row ins-review ins-py\">\r\n    <div class=\"col-md-12 col-12\">\r\n      <h5 class=\"mb-4 text-white p-2 ins-bg-second\" ><b>Review</b></h5>\r\n      <button type=\"button\" class=\"ins-btn-outline-brand btn  \" data-toggle=\"modal\" data-target=\"#writeYourReview\">Write your review</button>\r\n\r\n      <app-modal-review [book]=\"book\"></app-modal-review>\r\n\r\n      <p class=\"my-3 d-block ins-text-second\">Be the first to write your review !</p>\r\n\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/product-detail/review/review.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/product-detail/review/review.component.ts ***!
  \***********************************************************/
/*! exports provided: ReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponent", function() { return ReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _models_book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/book */ "./src/app/models/book.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewComponent = /** @class */ (function () {
    function ReviewComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_book__WEBPACK_IMPORTED_MODULE_1__["Book"])
    ], ReviewComponent.prototype, "book", void 0);
    ReviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-review',
            template: __webpack_require__(/*! ./review.component.html */ "./src/app/product-detail/review/review.component.html"),
            styles: [__webpack_require__(/*! ./review.component.css */ "./src/app/product-detail/review/review.component.css")]
        })
    ], ReviewComponent);
    return ReviewComponent;
}());



/***/ }),

/***/ "./src/app/total-cart/total-cart.component.css":
/*!*****************************************************!*\
  !*** ./src/app/total-cart/total-cart.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/total-cart/total-cart.component.html":
/*!******************************************************!*\
  !*** ./src/app/total-cart/total-cart.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"border\">\r\n    <h4 class=\" ins-bg-second text-white p-2 mb-0 \">Total</h4>\r\n    <ul class=\"list-unstyle p-4 mb-0\">\r\n        <li class=\"d-flex justify-content-between border-bottom mb-4 pb-4\">\r\n            <span>items</span>\r\n            <span>{{shoppingCart.items_counted}}</span>\r\n        </li>\r\n        <li class=\"d-flex justify-content-between border-bottom mb-4 pb-4\">\r\n            <span>Amount</span>\r\n            <span>{{shoppingCart.total}}</span>\r\n        </li>\r\n        <li class=\"d-flex justify-content-between border-bottom mb-4 pb-4\">\r\n            <span>Shipping</span>\r\n            <span>Free</span>\r\n        </li>\r\n        <li class=\"d-flex justify-content-between border-bottom mb-4 pb-4\">\r\n            <span>Discount</span>\r\n            <span>0</span>\r\n        </li>\r\n        <li class=\"d-flex justify-content-between pb-4\">\r\n            <span>\r\n                <b>Total</b>\r\n            </span>\r\n            <span>\r\n                <h5>{{shoppingCart.total}}</h5>\r\n            </span>\r\n        </li>\r\n    </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/total-cart/total-cart.component.ts":
/*!****************************************************!*\
  !*** ./src/app/total-cart/total-cart.component.ts ***!
  \****************************************************/
/*! exports provided: TotalCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalCartComponent", function() { return TotalCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _models_cart_shopping_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/cart/shopping-cart */ "./src/app/models/cart/shopping-cart.ts");
/* harmony import */ var _models_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/cart/shopping-cart.service */ "./src/app/models/cart/shopping-cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TotalCartComponent = /** @class */ (function () {
    function TotalCartComponent(shoppingCartService) {
        var _this = this;
        this.shoppingCartService = shoppingCartService;
        this.shoppingCart = new _models_cart_shopping_cart__WEBPACK_IMPORTED_MODULE_1__["ShoppingCart"]();
        shoppingCartService.totalStatus$.subscribe(function (status) {
            _this.shoppingCart = JSON.parse(_this.getStorage());
        });
    }
    TotalCartComponent.prototype.ngOnInit = function () {
        this.shoppingCart = JSON.parse(this.getStorage());
    };
    TotalCartComponent.prototype.getStorage = function () {
        return localStorage.getItem('shoppingCart');
    };
    TotalCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-total-cart',
            template: __webpack_require__(/*! ./total-cart.component.html */ "./src/app/total-cart/total-cart.component.html"),
            styles: [__webpack_require__(/*! ./total-cart.component.css */ "./src/app/total-cart/total-cart.component.css")]
        }),
        __metadata("design:paramtypes", [_models_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartService"]])
    ], TotalCartComponent);
    return TotalCartComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
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

module.exports = __webpack_require__(/*! C:\Users\home\Desktop\project-final-green\angular-digital-mall-component\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map