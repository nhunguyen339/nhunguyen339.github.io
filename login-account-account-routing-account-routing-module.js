(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-account-account-routing-account-routing-module"],{

/***/ "./src/app/login/account/account-routing/account-routing-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/login/account/account-routing/account-routing-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: AccountRoutingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingRoutingModule", function() { return AccountRoutingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _user_infor_user_infor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-infor/user-infor.component */ "./src/app/login/account/user-infor/user-infor.component.ts");
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../account.component */ "./src/app/login/account/account.component.ts");
/* harmony import */ var _order_manage_order_manage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../order-manage/order-manage.component */ "./src/app/login/account/order-manage/order-manage.component.ts");
/* harmony import */ var _models_login_logout_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/login-logout/auth.guard */ "./src/app/models/login-logout/auth.guard.ts");
/* harmony import */ var _order_manage_order_by_id_order_by_id_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../order-manage/order-by-id/order-by-id.component */ "./src/app/login/account/order-manage/order-by-id/order-by-id.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var accountRoutes = [
    {
        path: '',
        component: _account_component__WEBPACK_IMPORTED_MODULE_3__["AccountComponent"], canActivate: [_models_login_logout_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        children: [
            {
                path: '', canActivate: [_models_login_logout_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
                component: _user_infor_user_infor_component__WEBPACK_IMPORTED_MODULE_2__["UserInforComponent"],
            },
            {
                path: 'user-infor', canActivate: [_models_login_logout_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
                component: _user_infor_user_infor_component__WEBPACK_IMPORTED_MODULE_2__["UserInforComponent"],
            },
            {
                path: 'order-manage',
                children: [
                    { path: ':_id', component: _order_manage_order_by_id_order_by_id_component__WEBPACK_IMPORTED_MODULE_6__["OrderByIdComponent"], canActivate: [_models_login_logout_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
                    { path: '', component: _order_manage_order_manage_component__WEBPACK_IMPORTED_MODULE_4__["OrderManageComponent"], canActivate: [_models_login_logout_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] }
                ]
            }
        ]
    }
];
var AccountRoutingRoutingModule = /** @class */ (function () {
    function AccountRoutingRoutingModule() {
    }
    AccountRoutingRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(accountRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AccountRoutingRoutingModule);
    return AccountRoutingRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/account/account-routing/account-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/login/account/account-routing/account-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: AccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function() { return AccountRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _account_routing_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account-routing-routing.module */ "./src/app/login/account/account-routing/account-routing-routing.module.ts");
/* harmony import */ var _user_infor_user_infor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-infor/user-infor.component */ "./src/app/login/account/user-infor/user-infor.component.ts");
/* harmony import */ var _order_manage_order_manage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../order-manage/order-manage.component */ "./src/app/login/account/order-manage/order-manage.component.ts");
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../account.component */ "./src/app/login/account/account.component.ts");
/* harmony import */ var _order_manage_order_by_id_order_by_id_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../order-manage/order-by-id/order-by-id.component */ "./src/app/login/account/order-manage/order-by-id/order-by-id.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AccountRoutingModule = /** @class */ (function () {
    function AccountRoutingModule() {
    }
    AccountRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _account_routing_routing_module__WEBPACK_IMPORTED_MODULE_2__["AccountRoutingRoutingModule"]
            ],
            declarations: [
                _user_infor_user_infor_component__WEBPACK_IMPORTED_MODULE_3__["UserInforComponent"],
                _order_manage_order_manage_component__WEBPACK_IMPORTED_MODULE_4__["OrderManageComponent"],
                _account_component__WEBPACK_IMPORTED_MODULE_5__["AccountComponent"],
                _order_manage_order_by_id_order_by_id_component__WEBPACK_IMPORTED_MODULE_6__["OrderByIdComponent"]
            ],
        })
    ], AccountRoutingModule);
    return AccountRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/account/account.component.css":
/*!*****************************************************!*\
  !*** ./src/app/login/account/account.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-menu ul {\r\n  list-style: none;\r\n  padding-left: 0 ;\r\n}\r\n.user-menu ul li {\r\n  padding-bottom: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/account/account.component.html":
/*!******************************************************!*\
  !*** ./src/app/login/account/account.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"currentUser\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-4 col-md-3\">\r\n        <h4 class=\" ins-bg-second text-white p-2 mb-3\"><a routerLink=\"/homepage\" class=\"text-white\">Book mall</a></h4>\r\n        <div class=\"user-menu\">\r\n          <ul>\r\n            <li>\r\n              <a class=\"ins-a-brand\" routerLinkActive=\"active\"\r\n              routerLink=\"./user-infor\">Thông tin tài khoản</a>\r\n            </li>\r\n            <li>\r\n              <a class=\"ins-a-brand\">Thông báo của tôi</a>\r\n            </li>\r\n            <li>\r\n              <a class=\"ins-a-brand\" routerLink=\"./order-manage\">Quản lí đơn hàng</a>\r\n            </li>\r\n            <li>\r\n              <a class=\"ins-a-brand\">Sổ địa chỉ</a>\r\n            </li>\r\n            <li>\r\n              <a class=\"ins-a-brand\">Thông tin thanh toán</a>\r\n            </li>\r\n            <li>\r\n              <a class=\"ins-a-brand\">Sản phẩm bạn đã xem</a>\r\n            </li>\r\n            <li>\r\n              <a class=\"ins-a-brand\">Hỏi đáp</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-8 col-md-9\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/account/account.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login/account/account.component.ts ***!
  \****************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _models_login_logout_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/login-logout/user */ "./src/app/models/login-logout/user.ts");
/* harmony import */ var _models_login_logout_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/login-logout/user.service */ "./src/app/models/login-logout/user.service.ts");
/* harmony import */ var _models_login_logout_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/login-logout/authentication.service */ "./src/app/models/login-logout/authentication.service.ts");
/* harmony import */ var _models_login_logout_login_status_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/login-logout/login-status.service */ "./src/app/models/login-logout/login-status.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountComponent = /** @class */ (function () {
    function AccountComponent(userService, authenticationService, loginStatusService) {
        var _this = this;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.loginStatusService = loginStatusService;
        this.currentUser = new _models_login_logout_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.status = false;
        loginStatusService.status$.subscribe(function (status) {
            _this.status = status;
            if (status) {
                _this.getUser();
            }
            _this.currentUser = JSON.parse(localStorage.getItem('_currentUser'));
            console.log(_this.status);
            // this.getUser();
        });
    }
    AccountComponent.prototype.ngOnInit = function () {
        // this.getUser();
        // this.getOrders();
    };
    AccountComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.loginStatusService.setStatus(false);
        console.log('logout');
    };
    AccountComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (_) {
            return _this.currentUser = _.user;
        });
    };
    AccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/login/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.css */ "./src/app/login/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [_models_login_logout_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _models_login_logout_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _models_login_logout_login_status_service__WEBPACK_IMPORTED_MODULE_4__["LoginStatusService"]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/login/account/order-manage/order-by-id/order-by-id.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/login/account/order-manage/order-by-id/order-by-id.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".order-by-id table td,.order-by-id table tr th {\r\n    border: 0.5px solid #eee;\r\n    padding: 10px 20px;\r\n}\r\n.order-by-id table {\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/login/account/order-manage/order-by-id/order-by-id.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/login/account/order-manage/order-by-id/order-by-id.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"order-by-id\">\n  <h4 class=\" ins-bg-second text-white p-2 mb-3\">Order {{currentOrder._id}}</h4>\n  <div>\n    <table>\n      <thead>\n        <tr>\n          <th>Sản phẩm</th>\n          <th>Giá</th>\n          <th>Số lượng</th>\n          <th>Tổng tiền</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let book of currentOrder.books\">\n          <td><a class=\"ins-a-brand\"routerLink=\"/detail/{{book._book._id}}\">{{book._book?.title}}</a></td>\n          <td>{{book.price}}</td>\n          <td>{{book.quantity}}</td>\n          <td>{{book.quantity*book.price}}</td>\n        </tr>\n      </tbody>\n    </table>\n    <div>\n      <b class=\"my-3 float-right\">Tổng cộng: {{currentOrder.total}}</b>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/account/order-manage/order-by-id/order-by-id.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/login/account/order-manage/order-by-id/order-by-id.component.ts ***!
  \*********************************************************************************/
/*! exports provided: OrderByIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByIdComponent", function() { return OrderByIdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _models_cart_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/cart/order.service */ "./src/app/models/cart/order.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _models_cart_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/cart/order */ "./src/app/models/cart/order.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderByIdComponent = /** @class */ (function () {
    function OrderByIdComponent(orderService, route) {
        this.orderService = orderService;
        this.route = route;
        this.currentOrder = new _models_cart_order__WEBPACK_IMPORTED_MODULE_3__["Order"]();
    }
    OrderByIdComponent.prototype.ngOnInit = function () {
        this.currentOrder = new _models_cart_order__WEBPACK_IMPORTED_MODULE_3__["Order"]();
        this.getOrder();
    };
    OrderByIdComponent.prototype.getOrder = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('_id');
        this.orderService.getOrder(id).subscribe(function (_) { return _this.currentOrder = _; });
    };
    OrderByIdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-by-id',
            template: __webpack_require__(/*! ./order-by-id.component.html */ "./src/app/login/account/order-manage/order-by-id/order-by-id.component.html"),
            styles: [__webpack_require__(/*! ./order-by-id.component.css */ "./src/app/login/account/order-manage/order-by-id/order-by-id.component.css")]
        }),
        __metadata("design:paramtypes", [_models_cart_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], OrderByIdComponent);
    return OrderByIdComponent;
}());



/***/ }),

/***/ "./src/app/login/account/order-manage/order-manage.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/login/account/order-manage/order-manage.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".order-manage table td,.order-manage table tr th {\r\n    border: 0.5px solid #eee;\r\n    padding: 10px 20px;\r\n}\r\n.order-manage table {\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/login/account/order-manage/order-manage.component.html":
/*!************************************************************************!*\
  !*** ./src/app/login/account/order-manage/order-manage.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"order-manage\">\n  <h4 class=\" ins-bg-second text-white p-2 mb-3\">Đơn hàng của {{currentUser.first}}</h4>\n  <div>\n    <table class=\"mb-3\">\n    <thead>\n      <tr>\n        <th>Id</th>\n        <th>Sản phẩm</th>\n        <th>Tổng tiền</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let order of orders\">\n        <td><a routerLink=\"./{{order._id}}\">{{order._id}}</a></td>\n        <td >\n          <ul class=\"list-unstyled\" *ngFor=\"let book of order.books\">\n            <li>\n                <a routerLink=\"/detail/{{book._book?._id}}\" class=\"ins-a-brand\">{{book._book?.title}}</a>\n            </li>\n          </ul>\n        </td>\n        <td>\n          {{order.total}}\n        </td>\n      </tr>\n    </tbody>\n\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/account/order-manage/order-manage.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/login/account/order-manage/order-manage.component.ts ***!
  \**********************************************************************/
/*! exports provided: OrderManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderManageComponent", function() { return OrderManageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _models_cart_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/cart/order.service */ "./src/app/models/cart/order.service.ts");
/* harmony import */ var _models_login_logout_login_status_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/login-logout/login-status.service */ "./src/app/models/login-logout/login-status.service.ts");
/* harmony import */ var _models_login_logout_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/login-logout/user */ "./src/app/models/login-logout/user.ts");
/* harmony import */ var _models_login_logout_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/login-logout/user.service */ "./src/app/models/login-logout/user.service.ts");
/* harmony import */ var _models_cart_order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/cart/order */ "./src/app/models/cart/order.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderManageComponent = /** @class */ (function () {
    function OrderManageComponent(orderService, loginStatusService, userService) {
        var _this = this;
        this.orderService = orderService;
        this.loginStatusService = loginStatusService;
        this.userService = userService;
        this.orders = new Array();
        this.books = new Array();
        this._book = new _models_cart_order__WEBPACK_IMPORTED_MODULE_5__["_Book"]();
        this._user = new _models_cart_order__WEBPACK_IMPORTED_MODULE_5__["_User"]();
        this.currentUser = new _models_login_logout_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.statusUser = false;
        loginStatusService.status$.subscribe(function (status) {
            _this.status = status;
            if (status) {
                _this.getUser();
            }
            _this.currentUser = JSON.parse(localStorage.getItem('_currentUser'));
            console.log(_this.status);
            // this.getUser();
            console.log('const');
        });
    }
    OrderManageComponent.prototype.ngOnInit = function () {
        this.orders = new Array();
        // this.orders[1].books[1]._book.title;
        this.books = new Array();
        this._book = new _models_cart_order__WEBPACK_IMPORTED_MODULE_5__["_Book"]();
        this._user = new _models_cart_order__WEBPACK_IMPORTED_MODULE_5__["_User"]();
        this.checkToken();
        this.getOrders();
        console.log();
    };
    OrderManageComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (_) { return _this.currentUser = _.user; });
    };
    ;
    OrderManageComponent.prototype.checkToken = function () {
        if (localStorage.getItem('_currentUser')) {
            this.statusUser = true;
            this.loginStatusService.setStatus(this.statusUser);
            this.getUser();
        }
        else {
            this.loginStatusService.setStatus(this.statusUser);
        }
        console.log('check');
        console.log(this.currentUser);
    };
    //get order of _id User
    OrderManageComponent.prototype.getOrders = function () {
        var _this = this;
        this.orders = new Array();
        this.books = new Array();
        this._book = new _models_cart_order__WEBPACK_IMPORTED_MODULE_5__["_Book"]();
        this._user = new _models_cart_order__WEBPACK_IMPORTED_MODULE_5__["_User"]();
        this.orderService.getOrders().subscribe(function (_) { return _this.orders = _; });
    };
    OrderManageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-manage',
            template: __webpack_require__(/*! ./order-manage.component.html */ "./src/app/login/account/order-manage/order-manage.component.html"),
            styles: [__webpack_require__(/*! ./order-manage.component.css */ "./src/app/login/account/order-manage/order-manage.component.css")]
        }),
        __metadata("design:paramtypes", [_models_cart_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"],
            _models_login_logout_login_status_service__WEBPACK_IMPORTED_MODULE_2__["LoginStatusService"],
            _models_login_logout_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], OrderManageComponent);
    return OrderManageComponent;
}());



/***/ }),

/***/ "./src/app/login/account/user-infor/user-infor.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/login/account/user-infor/user-infor.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/account/user-infor/user-infor.component.html":
/*!********************************************************************!*\
  !*** ./src/app/login/account/user-infor/user-infor.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h4 class=\" ins-bg-second text-white p-2 mb-3\">Thông tin tài khoản</h4>\n    <div>\n      <table>\n        <tr>\n          <td>Họ tên:</td>\n          <td> {{currentUser.first}} {{currentUser.last}}</td>\n        </tr>\n        <tr>\n          <td>Phone:</td>\n          <td>{{currentUser.phone}}</td>\n        </tr>\n        <tr>\n          <td>Email:</td>\n          <td>{{currentUser.email}}</td>\n        </tr>\n        <tr>\n          <td>Id:</td>\n          <td>{{currentUser._id}}</td>\n        </tr>\n      </table>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/login/account/user-infor/user-infor.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/login/account/user-infor/user-infor.component.ts ***!
  \******************************************************************/
/*! exports provided: UserInforComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInforComponent", function() { return UserInforComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var _models_login_logout_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/login-logout/user */ "./src/app/models/login-logout/user.ts");
/* harmony import */ var _models_login_logout_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/login-logout/user.service */ "./src/app/models/login-logout/user.service.ts");
/* harmony import */ var _models_login_logout_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/login-logout/authentication.service */ "./src/app/models/login-logout/authentication.service.ts");
/* harmony import */ var _models_login_logout_login_status_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/login-logout/login-status.service */ "./src/app/models/login-logout/login-status.service.ts");
/* harmony import */ var _models_cart_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/cart/order.service */ "./src/app/models/cart/order.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserInforComponent = /** @class */ (function () {
    function UserInforComponent(userService, authenticationService, loginStatusService, orderService) {
        var _this = this;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.loginStatusService = loginStatusService;
        this.orderService = orderService;
        this.currentUser = new _models_login_logout_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.status = false;
        loginStatusService.status$.subscribe(function (status) {
            _this.status = status;
            if (status) {
                _this.getUser();
            }
            _this.currentUser = JSON.parse(localStorage.getItem('_currentUser'));
            console.log(_this.status);
            // this.getUser();
        });
    }
    UserInforComponent.prototype.ngOnInit = function () {
        this.checkToken();
    };
    UserInforComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.loginStatusService.setStatus(false);
        console.log('logout');
    };
    UserInforComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (_) {
            return _this.currentUser = _.user;
        });
    };
    UserInforComponent.prototype.checkToken = function () {
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
    UserInforComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-infor',
            template: __webpack_require__(/*! ./user-infor.component.html */ "./src/app/login/account/user-infor/user-infor.component.html"),
            styles: [__webpack_require__(/*! ./user-infor.component.css */ "./src/app/login/account/user-infor/user-infor.component.css")]
        }),
        __metadata("design:paramtypes", [_models_login_logout_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _models_login_logout_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _models_login_logout_login_status_service__WEBPACK_IMPORTED_MODULE_5__["LoginStatusService"],
            _models_cart_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"]])
    ], UserInforComponent);
    return UserInforComponent;
}());



/***/ })

}]);
//# sourceMappingURL=login-account-account-routing-account-routing-module.js.map