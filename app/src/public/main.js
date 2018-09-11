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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Directives/UnWrap.directive.ts":
/*!************************************************!*\
  !*** ./src/app/Directives/UnWrap.directive.ts ***!
  \************************************************/
/*! exports provided: UnWrapDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnWrapDirective", function() { return UnWrapDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnWrapDirective = /** @class */ (function () {
    function UnWrapDirective(elementRef) {
        this.elementRef = elementRef;
    }
    UnWrapDirective.prototype.ngAfterViewInit = function () {
        var nativeElement = this.elementRef.nativeElement;
        jquery__WEBPACK_IMPORTED_MODULE_1__(nativeElement).removeAttr("app-unwrap").unwrap();
    };
    UnWrapDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[app-unwrap]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UnWrapDirective);
    return UnWrapDirective;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout class=\"layout\">\n  <nz-header>\n    <div class=\"logo\">\n      <span>Node监控中心</span>\n    </div>\n    <app-header-menu [titles]=\"titles\" (onSelect)=\"selectHeaderMenu($event)\"></app-header-menu>\n  </nz-header>\n  <nz-layout>\n    <nz-sider [nzWidth]=\"200\" style=\"background:#fff\">\n      <app-side-nav [menuType]=\"menuType\"></app-side-nav>\n    </nz-sider>\n    <nz-layout style=\"padding:0 24px 24px\">\n        <router-outlet></router-outlet>\n    </nz-layout>\n  </nz-layout>\n</nz-layout>\n"

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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
    function AppComponent(location) {
        this.location = location;
        this.menuType = 1;
        this.titles = [{
                title: '应用桶管理',
                type: 1
            }, {
                title: '应用管理',
                type: 2,
            }, {
                title: '节点管理',
                type: 3
            }, {
                title: '权限管理',
                type: 4
            }];
        var headerMenu = this.location.path().split("/")[1];
        switch (headerMenu) {
            case "application":
                this.titles[1].selected = true;
                this.menuType = 2;
                break;
            case "node":
                this.titles[2].selected = true;
                this.menuType = 3;
                break;
            case "permission":
                this.titles[3].selected = true;
                this.menuType = 4;
                break;
        }
    }
    /**
     * description: 选择对应的大菜单
     * author: 金炳<hzjinbing@163.com>
     */
    AppComponent.prototype.selectHeaderMenu = function (headerMenuType) {
        console.log("select menu: " + headerMenuType);
        this.menuType = headerMenuType;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: ["\n  .logo {\n    width: 120px;\n    height: 31px;\n    color: #ccc;\n    float: left;\n    font-size: 16px;\n  }\n  "]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_HeaderMenu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/HeaderMenu.component */ "./src/app/components/HeaderMenu.component.ts");
/* harmony import */ var _components_sideMenu_SideMenu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sideMenu/SideMenu.component */ "./src/app/components/sideMenu/SideMenu.component.ts");
/* harmony import */ var _components_sideMenu_types_ApplicationSideMenu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sideMenu/types/ApplicationSideMenu.component */ "./src/app/components/sideMenu/types/ApplicationSideMenu.component.ts");
/* harmony import */ var _Directives_UnWrap_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Directives/UnWrap.directive */ "./src/app/Directives/UnWrap.directive.ts");
/* harmony import */ var _components_sideMenu_types_ApplicationManage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/sideMenu/types/ApplicationManage.component */ "./src/app/components/sideMenu/types/ApplicationManage.component.ts");
/* harmony import */ var _page_memoryManage_memoryManage_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page/memoryManage/memoryManage.module */ "./src/app/page/memoryManage/memoryManage.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_errorMessage_errorMessageManage_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page/errorMessage/errorMessageManage.module */ "./src/app/page/errorMessage/errorMessageManage.module.ts");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./common/common.module */ "./src/app/common/common.module.ts");
/* harmony import */ var _page_traceManage_traceManage_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./page/traceManage/traceManage.module */ "./src/app/page/traceManage/traceManage.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_4___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
                _components_HeaderMenu_component__WEBPACK_IMPORTED_MODULE_5__["HeaderMenuComponent"],
                _components_sideMenu_SideMenu_component__WEBPACK_IMPORTED_MODULE_6__["SideMenuComponent"],
                _components_sideMenu_types_ApplicationSideMenu_component__WEBPACK_IMPORTED_MODULE_7__["ApplicationSideMenuComponent"],
                _Directives_UnWrap_directive__WEBPACK_IMPORTED_MODULE_8__["UnWrapDirective"],
                _components_sideMenu_types_ApplicationManage_component__WEBPACK_IMPORTED_MODULE_9__["ApplicationManageComponent"],
            ],
            imports: [
                _common_common_module__WEBPACK_IMPORTED_MODULE_13__["AppCommonModule"],
                _page_memoryManage_memoryManage_module__WEBPACK_IMPORTED_MODULE_10__["MemoryManageModule"],
                _page_errorMessage_errorMessageManage_module__WEBPACK_IMPORTED_MODULE_12__["ErrorMessageManageModule"],
                _page_traceManage_traceManage_module__WEBPACK_IMPORTED_MODULE_14__["TraceManageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot([], { useHash: true })
            ],
            providers: [{ provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["zh_CN"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/common.module.ts":
/*!*****************************************!*\
  !*** ./src/app/common/common.module.ts ***!
  \*****************************************/
/*! exports provided: AppCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppCommonModule", function() { return AppCommonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm5/ngx-echarts.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var modules = [
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"],
    ngx_echarts__WEBPACK_IMPORTED_MODULE_6__["NgxEchartsModule"]
];
var AppCommonModule = /** @class */ (function () {
    function AppCommonModule() {
    }
    AppCommonModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: modules.slice(),
            exports: modules.slice()
        })
    ], AppCommonModule);
    return AppCommonModule;
}());



/***/ }),

/***/ "./src/app/components/HeaderMenu.component.html":
/*!******************************************************!*\
  !*** ./src/app/components/HeaderMenu.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul nz-menu [nzTheme]=\"'dark'\" [nzMode]=\"'horizontal'\" style=\"line-height: 64px;\">\n  <li nz-menu-item *ngFor=\"let item of titles\" (click)=\"selectItem(item)\" [nzSelected]=\"item.selected\">{{item.title}}</li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/HeaderMenu.component.ts":
/*!****************************************************!*\
  !*** ./src/app/components/HeaderMenu.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderMenuComponent", function() { return HeaderMenuComponent; });
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

var HeaderMenuComponent = /** @class */ (function () {
    function HeaderMenuComponent() {
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    HeaderMenuComponent.prototype.ngOnChanges = function (changes) {
        console.log(this.titles);
    };
    HeaderMenuComponent.prototype.ngOnInit = function () {
    };
    HeaderMenuComponent.prototype.selectItem = function (item) {
        this.onSelect.emit(item.type);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("titles"),
        __metadata("design:type", Array)
    ], HeaderMenuComponent.prototype, "titles", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], HeaderMenuComponent.prototype, "onSelect", void 0);
    HeaderMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header-menu',
            template: __webpack_require__(/*! ./HeaderMenu.component.html */ "./src/app/components/HeaderMenu.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HeaderMenuComponent);
    return HeaderMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/sideMenu/SideMenu.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/sideMenu/SideMenu.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"menuType == 1\">\n  <app-application-side-menu></app-application-side-menu>\n</ng-container>\n<ng-container *ngIf=\"menuType != 1\">\n  <app-application-manage></app-application-manage>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/components/sideMenu/SideMenu.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/sideMenu/SideMenu.component.ts ***!
  \***********************************************************/
/*! exports provided: SideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuComponent", function() { return SideMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideMenuComponent = /** @class */ (function () {
    function SideMenuComponent() {
    }
    SideMenuComponent.prototype.ngOnChanges = function (changes) {
        if (changes["menuType"]) {
            if (changes["menuType"].previousValue == 1 || changes["menuType"].previousValue == 2) {
                // 由于部分结构是把对应的节点删除了，所以此处需要把对应的remove掉。
                jquery__WEBPACK_IMPORTED_MODULE_1__("app-side-nav ul").remove();
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SideMenuComponent.prototype, "menuType", void 0);
    SideMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-nav',
            template: __webpack_require__(/*! ./SideMenu.component.html */ "./src/app/components/sideMenu/SideMenu.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], SideMenuComponent);
    return SideMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/sideMenu/types/ApplicationManage.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/sideMenu/types/ApplicationManage.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul nz-menu [nzMode]=\"'inline'\" style=\"height:100%\" app-unwrap=\"\">\n  <li nz-submenu *ngFor=\"let item of applications\" [nzOpen]=\"item.open\">\n    <span title><i class=\"anticon anticon-laptop\"></i>{{item.name}}</span>\n    <ul>\n      <li nz-menu-item [nzSelected]=\"item.tabs.dashboard\" (click)=\"goPath(item, 'dashboard')\">\n        <a routerLinkActive=\"true\" routerLink=\"application/dashboard\">Dashboard</a>\n      </li>\n      <li nz-menu-item [nzSelected]=\"item.tabs.alertManage\">告警配置</li>\n      <li nz-menu-item [nzSelected]=\"item.tabs.logAnalyze\">日志分析</li>\n      <li nz-menu-item [nzSelected]=\"item.tabs.appStructure\">服务结构</li>\n      <li nz-menu-item [nzSelected]=\"item.tabs.errorMessage\" (click)=\"goPath(item, 'errorMessage')\">\n        <a routerLinkActive=\"true\" routerLink=\"application/errorMessage\">错误信息</a>\n      </li>\n      <li nz-menu-item [nzSelected]=\"item.tabs.appStatus\" (click)=\"goPath(item, 'appStatus')\">\n        <a routerLinkActive=\"true\" routerLink=\"application/appStatus\">状态跟踪</a>\n      </li>\n      <li nz-menu-item [nzSelected]=\"item.tabs.traceManage\" (click)=\"goPath(item, 'traceManage')\">\n        <a routerLinkActive=\"true\" routerLink=\"application/traceManage\">链路跟踪</a>\n      </li>\n      <li nz-menu-item [nzSelected]=\"item.tabs.remoteDebug\">远程调试</li>\n    </ul>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/sideMenu/types/ApplicationManage.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/sideMenu/types/ApplicationManage.component.ts ***!
  \**************************************************************************/
/*! exports provided: ApplicationManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationManageComponent", function() { return ApplicationManageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var ApplicationManageComponent = /** @class */ (function () {
    function ApplicationManageComponent(location, router, httpClient) {
        this.location = location;
        this.router = router;
        this.httpClient = httpClient;
        this.applications = [];
    }
    /**
     * description: 获取应用列表
     * author: 金炳<hzjinbing@163.com>
     */
    ApplicationManageComponent.prototype.getApplicationList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.httpClient.get("/xhr/application/getAppList.do").subscribe(function (data) {
                            resolve(data.data);
                            console.log(data);
                        });
                    })];
            });
        });
    };
    ApplicationManageComponent.prototype.initSideNav = function () {
        return __awaiter(this, void 0, void 0, function () {
            var applications, result, paths, allQueryParams, _loop_1, this_1, i, state_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getApplicationList()];
                    case 1:
                        applications = _a.sent();
                        this.applications = applications.map(function (item) {
                            return {
                                name: item,
                                open: true,
                                tabs: {
                                    dashboard: false,
                                    alertManage: false,
                                    logAnalyze: false,
                                    appStructure: false,
                                    errorMessage: false,
                                    appStatus: false,
                                    traceManage: false,
                                    remoteDebug: false
                                }
                            };
                        });
                        result = this.location.path().split("?");
                        if (result.length < 2) {
                            return [2 /*return*/];
                        }
                        paths = this.location.path().split("?")[0].split("/");
                        console.log(paths);
                        allQueryParams = result[1].split('&');
                        _loop_1 = function (i) {
                            if (allQueryParams[i].split('=')[0] == 'app') {
                                console.log(allQueryParams[i].split('=')[1]);
                                var application = this_1.applications.filter(function (application) {
                                    if (application.name == allQueryParams[i].split('=')[1]) {
                                        return true;
                                    }
                                });
                                if (application.length > 0) {
                                    application[0].tabs[paths[2]] = true;
                                    return "break";
                                }
                            }
                        };
                        this_1 = this;
                        for (i = 0; i < allQueryParams.length; i++) {
                            state_1 = _loop_1(i);
                            if (state_1 === "break")
                                break;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ApplicationManageComponent.prototype.ngOnInit = function () {
        this.initSideNav();
    };
    ApplicationManageComponent.prototype.goPath = function (item, path) {
        var params = {
            app: item.name
        };
        var queryPath = '';
        Object.keys(params).map(function (item) {
            if (queryPath.length > 0) {
                queryPath += '&' + item + "=" + params[item];
            }
            else {
                queryPath += item + "=" + params[item];
            }
        });
        this.location.go('/application/' + path, queryPath);
    };
    ApplicationManageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-application-manage',
            template: __webpack_require__(/*! ./ApplicationManage.component.html */ "./src/app/components/sideMenu/types/ApplicationManage.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ApplicationManageComponent);
    return ApplicationManageComponent;
}());



/***/ }),

/***/ "./src/app/components/sideMenu/types/ApplicationSideMenu.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/sideMenu/types/ApplicationSideMenu.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul nz-menu [nzMode]=\"'inline'\" style=\"height:100%\" app-unwrap=\"\">\n  <li nz-submenu nzOpen=\"true\">\n    <span title><i class=\"anticon anticon-user\"></i>应用管理</span>\n    <ul>\n      <li nz-menu-item>option1</li>\n      <li nz-menu-item>option2</li>\n      <li nz-menu-item>option3</li>\n      <li nz-menu-item>option4</li>\n    </ul>\n  </li>\n  <li nz-submenu nzOpen=\"true\">\n    <span title><i class=\"anticon anticon-laptop\"></i>业务模块</span>\n    <ul>\n      <li nz-menu-item>option5</li>\n      <li nz-menu-item>option6</li>\n      <li nz-menu-item>option7</li>\n      <li nz-menu-item>option8</li>\n    </ul>\n  </li>\n  <li nz-submenu nzOpen=\"true\">\n    <span title><i class=\"anticon anticon-notification\"></i>权限模块</span>\n    <ul>\n      <li nz-menu-item>option9</li>\n      <li nz-menu-item>option10</li>\n      <li nz-menu-item>option11</li>\n      <li nz-menu-item>option12</li>\n    </ul>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/sideMenu/types/ApplicationSideMenu.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/sideMenu/types/ApplicationSideMenu.component.ts ***!
  \****************************************************************************/
/*! exports provided: ApplicationSideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationSideMenuComponent", function() { return ApplicationSideMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ApplicationSideMenuComponent = /** @class */ (function () {
    function ApplicationSideMenuComponent() {
    }
    ApplicationSideMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-application-side-menu',
            template: __webpack_require__(/*! ./ApplicationSideMenu.component.html */ "./src/app/components/sideMenu/types/ApplicationSideMenu.component.html")
        })
    ], ApplicationSideMenuComponent);
    return ApplicationSideMenuComponent;
}());



/***/ }),

/***/ "./src/app/page/errorMessage/errorMessageManage.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/page/errorMessage/errorMessageManage.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-content>\n  <div nz-row class=\"ant-advanced-search-form\">\n    <div nz-col [nzSpan]=\"24\">\n      <h1>错误信息</h1>\n    </div>\n    <div nz-col [nzSpan]=\"8\">\n      <span>服务名: </span>\n      <span>tiger-ape</span>\n    </div>\n    <div nz-col [nzSpan]=\"8\">\n      <span>节点数量: </span>\n      <span>8</span>\n    </div>\n  </div>\n  <div style=\"margin-top: 20px;\">\n    <div style=\"float: left; width: 200px; height: 200px; border:1px solid #ccc\">\n      <ul>\n        <li>10.10.1.1</li>\n        <li>10.10.10.2</li>\n      </ul>\n    </div>\n    <div style=\"margin-left: 220px;\">\n      <nz-table class=\"m-table--unclear\" [nzData]=\"errorMessages\" #errorMessagesTable>\n        <thead>\n          <tr>\n            <th>错误信息</th>\n            <th>错误堆栈</th>\n            <th>出现次数</th>\n            <th>上一次出现的时间</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let errorMessage of errorMessagesTable.data\">\n            <td [innerHtml]=\"errorMessage.content.message\"></td>\n            <td [innerHtml]=\"errorMessage.content.stack\"></td>\n            <td>{{errorMessage.content.count}}</td>\n            <td>{{errorMessage.content.lastTime | date: 'yyyy-MM-dd HH:mm:ss'}}</td>\n          </tr>\n        </tbody>\n      </nz-table>\n    </div>\n  </div>\n</nz-content>\n"

/***/ }),

/***/ "./src/app/page/errorMessage/errorMessageManage.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/page/errorMessage/errorMessageManage.component.ts ***!
  \*******************************************************************/
/*! exports provided: ErrorMessageManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessageManageComponent", function() { return ErrorMessageManageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorMessageManageComponent = /** @class */ (function () {
    function ErrorMessageManageComponent(httpClient) {
        this.httpClient = httpClient;
        this.errorMessages = [];
    }
    ErrorMessageManageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpClient.get("/xhr/application/getErrorMessage.do", {}).subscribe(function (data) {
            var keys = Object.keys(data.data);
            _this.errorMessages = keys.map(function (item) {
                var md5 = item;
                var content = data.data[item];
                content.message = content.message.replace(/\n/g, '<br/>');
                content.stack = content.stack.replace(/\n/g, '<br/>');
                return {
                    md5: md5,
                    content: content
                };
            });
            console.log(_this.errorMessages);
        });
    };
    ErrorMessageManageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./errorMessageManage.component.html */ "./src/app/page/errorMessage/errorMessageManage.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ErrorMessageManageComponent);
    return ErrorMessageManageComponent;
}());



/***/ }),

/***/ "./src/app/page/errorMessage/errorMessageManage.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/page/errorMessage/errorMessageManage.module.ts ***!
  \****************************************************************/
/*! exports provided: ErrorMessageManageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessageManageModule", function() { return ErrorMessageManageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _errorMessageManage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errorMessageManage.component */ "./src/app/page/errorMessage/errorMessageManage.component.ts");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/common.module */ "./src/app/common/common.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routers = [{
        path: 'application/errorMessage',
        component: _errorMessageManage_component__WEBPACK_IMPORTED_MODULE_2__["ErrorMessageManageComponent"]
    }];
var ErrorMessageManageModule = /** @class */ (function () {
    function ErrorMessageManageModule() {
    }
    ErrorMessageManageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routers), _common_common_module__WEBPACK_IMPORTED_MODULE_3__["AppCommonModule"]],
            declarations: [_errorMessageManage_component__WEBPACK_IMPORTED_MODULE_2__["ErrorMessageManageComponent"]],
            exports: []
        })
    ], ErrorMessageManageModule);
    return ErrorMessageManageModule;
}());



/***/ }),

/***/ "./src/app/page/memoryManage/memoryManage.component.html":
/*!***************************************************************!*\
  !*** ./src/app/page/memoryManage/memoryManage.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-content>\n  <form nz-form class=\"ant-advanced-search-form\">\n    <div nz-row>\n      <div nz-col [nzSpan]=\"24\">\n        <h1>Dashboard</h1>\n      </div>\n      <div nz-col [nzSpan]=\"8\">\n        <span>服务名: </span>\n        <span>tiger-ape</span>\n      </div>\n      <div nz-col [nzSpan]=\"8\">\n        <span>节点数量: </span>\n        <span>8</span>\n      </div>\n    </div>\n  </form>\n  <div style=\"margin-top: 20px;\">\n    <div nz-row>\n      <div style=\"float: left; width: 200px; height: 200px; border:1px solid #ccc\">\n        <ul>\n          <li>10.10.1.1</li>\n          <li>10.10.10.2</li>\n        </ul>\n      </div>\n      <div style=\"margin-left: 220px;\">\n        <div echarts [options]=\"chartOption\" class=\"demo-chart\" *ngIf=\"!loading\"></div>\n        <div class=\"loading\" *ngIf=\"loading\">\n          <nz-spin></nz-spin>\n        </div>\n      </div>\n    </div>\n  </div>\n</nz-content>\n"

/***/ }),

/***/ "./src/app/page/memoryManage/memoryManage.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/page/memoryManage/memoryManage.component.ts ***!
  \*************************************************************/
/*! exports provided: MemoryManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryManageComponent", function() { return MemoryManageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MemoryManageComponent = /** @class */ (function () {
    function MemoryManageComponent(http, fb) {
        this.http = http;
        this.fb = fb;
        this.controlArray = [];
        this.isCollapse = true;
        this.loading = false;
    }
    MemoryManageComponent.prototype.initData = function () {
        var _this = this;
        this.loading = true;
        setTimeout(function () {
            _this.http.get("/xhr/application/getProcessInfo.do").subscribe(function (result) {
                var xAxis = {};
                var currentTime = new Date(result.data.currentTime);
                var time = parseInt("" + (new Date(result.data.currentTime).getTime() - new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate()).getTime()) / 5 / 1000);
                for (var i = 0; i < time; i++) {
                    xAxis["" + i] = {
                        rss: 0,
                        heapTotal: 0,
                        heapUsed: 0,
                        external: 0
                    };
                }
                _this.chartOption = {
                    title: {
                        text: 'tiger-ape内存变化监控',
                        subtext: '检测进程的process相关信息',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            animation: false
                        }
                    },
                    legend: {
                        data: ['rss', 'heapUsed', 'heapTotal'],
                        x: 'left'
                    },
                    toolbox: {
                        feature: {
                            dataZoom: {
                                yAxisIndex: 'none'
                            },
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    dataZoom: [{
                            type: 'inside',
                            start: 0,
                            end: 100
                        }, {
                            start: 0,
                            end: 100,
                            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                            handleSize: '80%',
                            handleStyle: {
                                color: '#fff',
                                shadowBlur: 3,
                                shadowColor: 'rgba(0, 0, 0, 0.6)',
                                shadowOffsetX: 2,
                                shadowOffsetY: 2
                            }
                        }],
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        axisLine: { onZero: true },
                        data: []
                    },
                    yAxis: {
                        name: '使用的内存量/Kb',
                        type: 'value'
                    },
                    series: [
                        {
                            name: 'heapUsed',
                            type: 'line',
                            symbolSize: 8,
                            hoverAnimation: false,
                            data: [
                                0.97, 0.96, 0.96, 0.95, 0.95, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.93, 0.92, 0.91, 0.9, 0.89, 0.88, 0.87, 0.87, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.87, 0.88, 0.9, 0.93, 0.96, 0.99, 1.03, 1.06, 1.1, 1.14, 1.17, 1.2, 1.23, 1.26, 1.29, 1.33, 1.36, 1.4, 1.43, 1.45, 1.48, 1.49, 1.51, 1.51, 1.5, 1.49, 1.47, 1.44, 1.41, 1.37, 1.34, 1.3, 1.27, 1.24, 1.22, 1.2, 1.19, 1.18, 1.16, 1.15, 1.14, 1.13, 1.12, 1.11, 1.11, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.09, 1.09, 1.08, 1.07, 1.06, 1.05, 1.04, 1.03, 1.03, 1.02, 1.01, 1.01, 1, 0.99, 0.98, 0.97, 0.96, 0.96, 0.95, 0.95, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.93, 0.92, 0.91, 0.9, 0.89, 0.88, 0.87, 0.87, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.85, 0.84, 0.83, 0.82, 0.81, 0.8, 0.8, 0.79, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.77, 0.75, 0.73, 0.71, 0.68, 0.65, 0.63, 0.61, 0.59, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.57, 0.57, 0.57, 0.56, 0.55, 0.55, 0.54, 0.54, 0.53, 0.52, 0.52, 0.51, 0.51, 0.5, 0.5, 0.49, 0.48, 0.48, 0.47, 0.47, 0.47, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.52, 0.67, 0.9, 1.19, 1.52, 1.87, 2.22, 2.55, 2.84, 3.07, 3.22, 3.28, 3.28, 3.28, 3.28, 3.28, 3.28, 3.28, 3.28, 3.28, 3.28, 3.28, 3.28, 3.28, 3.24, 3.13, 2.97, 2.77, 2.54, 2.3, 2.05, 1.82, 1.62, 1.46, 1.35, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.3, 1.26, 1.21, 1.14, 1.06, 0.97, 0.89, 0.81, 0.74, 0.69, 0.65, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.63, 0.63, 0.62, 0.62, 0.61, 0.6, 0.59, 0.59, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.59, 0.61, 0.63, 0.65, 0.68, 0.71, 0.73, 0.75, 0.77, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.77, 0.75, 0.73, 0.71, 0.68, 0.65, 0.63, 0.61, 0.59, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.59, 0.59, 0.6, 0.61, 0.62, 0.62, 0.63, 0.63, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.65, 0.66, 0.68, 0.69, 0.71, 0.73, 0.74, 0.76, 0.77, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.79, 0.81, 0.82, 0.84, 0.86, 0.88, 0.9, 0.92, 0.93, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.93, 0.92, 0.91, 0.9, 0.89, 0.88, 0.87, 0.87, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.85, 0.84, 0.82, 0.8, 0.78, 0.76, 0.75, 0.73, 0.72, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.72, 0.73, 0.74, 0.76, 0.78, 0.79, 0.82, 0.84, 0.86, 0.89, 0.91, 0.94, 0.97, 1, 1.02, 1.05, 1.08, 1.11, 1.14, 1.17, 1.19, 1.22, 1.25, 1.27, 1.29, 1.31, 1.33, 1.35, 1.36, 1.38, 1.39, 1.39, 1.4, 1.4, 1.4, 1.39, 1.37, 1.35, 1.32, 1.29, 1.26, 1.22, 1.18, 1.14, 1.1, 1.05, 1.01, 0.97, 0.93, 0.89, 0.85, 0.82, 0.78, 0.76, 0.74, 0.72, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.72, 0.73, 0.74, 0.75, 0.77, 0.78, 0.8, 0.82, 0.84, 0.87, 0.89, 0.92, 0.94, 0.97, 0.99, 1.02, 1.05, 1.08, 1.1, 1.13, 1.16, 1.18, 1.21, 1.23, 1.26, 1.28, 1.3, 1.32, 1.34, 1.35, 1.37, 1.38, 1.39, 1.4, 1.41, 1.41, 1.42, 1.42, 1.43, 1.43, 1.43, 1.44, 1.44, 1.44, 1.44, 1.45, 1.45, 1.45, 1.46, 1.46, 1.46, 1.47, 1.47, 1.48, 1.48, 1.49, 1.5, 1.51, 1.54, 1.62, 1.73, 1.88, 2.05, 2.24, 2.45, 2.67, 2.89, 3.11, 3.31, 3.51, 3.69, 3.86, 4.03, 4.18, 4.33, 4.48, 4.62, 4.76, 4.89, 5.02, 5.16, 5.29, 5.43, 5.57, 5.71, 5.86, 6.02, 6.18, 6.36, 6.54, 6.73, 6.93, 7.15, 7.38, 7.62, 7.88, 8.16, 8.46, 8.77, 9.11, 9.46, 9.84, 10.24, 10.67, 11.12, 11.6, 12.3, 13.66, 16, 38.43, 82.21, 146.6, 218.7, 226, 225.23, 223.08, 219.78, 212, 199.82, 184.6, 168, 151.65, 137.21, 126.31, 119.94, 115.52, 112.06, 108.92, 105.44, 101, 94.56, 86.36, 77.67, 69.76, 63.9, 60.38, 57.41, 54.84, 52.57, 50.56, 48.71, 46.97, 45.25, 43.48, 41.6, 39.5, 37.19, 34.81, 32.46, 30.27, 28.36, 26.85, 25.86, 25.5, 25.5, 25.5, 25.5, 25.5, 25.5, 25.5, 25.5, 25.5, 25.5, 25.5, 25.5, 25.5, 25.27, 24.65, 23.7, 22.52, 21.17, 19.75, 18.33, 16.98, 15.8, 14.85, 14.23, 14, 14.02, 14.08, 14.17, 14.29, 14.44, 14.61, 14.8, 15.01, 15.23, 15.47, 15.71, 15.95, 16.19, 16.43, 16.67, 16.89, 17.1, 17.29, 17.46, 17.61, 17.73, 17.82, 17.88, 17.9, 17.63, 16.88, 15.75, 14.33, 12.71, 10.98, 9.23, 7.56, 6.05, 4.81, 3.92, 3.47, 3.28, 3.1, 2.93, 2.76, 2.61, 2.46, 2.32, 2.19, 2.07, 1.96, 1.85, 1.75, 1.66, 1.58, 1.51, 1.44, 1.39, 1.34, 1.29, 1.26, 1.23, 1.22, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.21, 1.21, 1.21, 1.21, 1.22, 1.22, 1.22, 1.23, 1.23, 1.23, 1.24, 1.24, 1.25, 1.25, 1.25, 1.26, 1.26, 1.27, 1.27, 1.27, 1.28, 1.28, 1.28, 1.29, 1.29, 1.29, 1.29, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.29, 1.29, 1.29, 1.29, 1.28, 1.28, 1.28, 1.27, 1.27, 1.26, 1.25, 1.25, 1.24, 1.23, 1.23, 1.22, 1.21, 1.2, 1.16, 1.06, 0.95, 0.83, 0.74, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.69, 0.69, 0.69, 0.69, 0.69, 0.69, 0.69, 0.69, 0.68, 0.68, 0.68, 0.68, 0.68, 0.68, 0.67, 0.67, 0.67, 0.67, 0.67, 0.67, 0.67, 0.66, 0.66, 0.66, 0.66, 0.66, 0.66, 0.66, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.65, 0.66, 0.68, 0.69, 0.71, 0.73, 0.74, 0.76, 0.77, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.8, 0.86, 0.95, 1.08, 1.25, 1.46, 1.7, 1.97, 2.28, 2.63, 3.01, 3.42, 3.87, 4.35, 4.86, 5.4, 5.98, 6.59, 7.92, 10.49, 14.04, 18.31, 23.04, 27.98, 32.87, 37.45, 41.46, 44.64, 46.74, 47.5, 46.86, 45.16, 42.77, 40.04, 37.33, 35, 32.74, 30.21, 27.7, 25.5, 23.9, 23.2, 23.06, 22.94, 22.84, 22.77, 22.72, 22.7, 22.8, 23.23, 23.95, 24.91, 26.04, 27.3, 28.76, 30.7, 33.39, 37.12, 42.15, 48.77, 65.22, 252.1, 257, 237.32, 221.19, 212, 208.67, 206.89, 205.2, 202.15, 189.82, 172, 165.3, 160.49, 156.8, 153.44, 149.62, 144.6, 138.27, 131, 123.11, 114.9, 106.69, 98.79, 91.5, 85.13, 80, 75.53, 71.03, 66.65, 62.54, 58.85, 55.73, 53.31, 51.75, 51.2, 56.53, 68.25, 80, 91.01, 102.03, 109, 112.37, 115.29, 117.68, 119.48, 120.61, 121, 119.45, 115.57, 110.52, 105.47, 101.58, 100, 99.97, 99.94, 99.92, 99.9, 99.88, 99.86, 99.85, 99.84, 99.83, 99.82, 99.81, 99.81, 99.8, 99.8, 99.8, 122.15, 163.65, 186, 182.96, 175.15, 164.56, 153.18, 143, 136, 131.37, 126.98, 122.81, 118.85, 115.09, 111.52, 108.13, 104.9, 101.83, 98.9, 96.11, 93.44, 90.87, 88.41, 86.04, 83.74, 81.51, 79.33, 77.2, 75.1, 73.02, 70.95, 68.88, 66.8, 64.87, 63.14, 61.4, 59.53, 57.67, 56, 54.6, 53.36, 52.2, 51.05, 49.85, 48.5, 46.87, 44.92, 42.74, 40.42, 38.04, 35.69, 33.46, 31.44, 29.72, 28.38, 27.51, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.14, 26.97, 26.7, 26.35, 25.95, 25.49, 25.02, 24.53, 24.04, 23.58, 23.16, 22.8, 22.46, 22.11, 21.75, 21.39, 21.03, 20.69, 20.36, 20.05, 19.78, 19.54, 19.35, 19.2, 19.09, 19, 18.92, 18.85, 18.79, 18.74, 18.68, 18.62, 18.56, 18.49, 18.4, 18.3, 18.17, 18.02, 17.83, 17.63, 17.41, 17.18, 16.93, 16.68, 16.43, 16.18, 15.93, 15.7, 15.47, 15.22, 14.97, 14.71, 14.45, 14.18, 13.93, 13.68, 13.44, 13.21, 13, 12.8, 12.62, 12.46, 12.31, 12.16, 12.03, 11.89, 11.76, 11.62, 11.48, 11.33, 11.17, 11, 10.81, 10.59, 10.36, 10.12, 9.86, 9.61, 9.36, 9.12, 8.89, 8.68, 8.5, 8.35, 8.21, 8.08, 7.94, 7.81, 7.68, 7.56, 7.46, 7.36, 7.29, 7.23, 7.19, 7.18, 7.51, 8.42, 9.81, 11.58, 13.63, 15.86, 18.16, 20.44, 22.58, 24.49, 26.06, 27.2, 28.08, 28.95, 29.81, 30.65, 31.48, 32.28, 33.07, 33.82, 34.55, 35.25, 35.92, 36.56, 37.15, 37.71, 38.23, 38.7, 39.13, 39.5, 39.83, 40.1, 40.31, 40.47, 40.57, 40.6, 40.49, 40.16, 39.64, 38.94, 38.09, 37.1, 36, 34.79, 33.51, 32.17, 30.79, 29.39, 27.99, 26.6, 25.25, 23.96, 22.75, 21.63, 20.63, 19.76, 19.04, 18.49, 18.14, 18, 17.97, 17.95, 17.94, 17.92, 17.91, 17.9, 17.89, 17.88, 17.87, 17.85, 17.83, 17.8, 17.7, 17.46, 17.13, 16.7, 16.21, 15.68, 15.13, 14.57, 14.04, 13.56, 13.14, 12.8, 12.52, 12.27, 12.02, 11.79, 11.57, 11.37, 11.16, 10.97, 10.78, 10.59, 10.39, 10.2, 10.01, 9.81, 9.63, 9.44, 9.26, 9.08, 8.9, 8.73, 8.56, 8.39, 8.22, 8.06, 7.9, 7.73, 7.57, 7.41, 7.25, 7.09, 6.94, 6.79, 6.65, 6.52, 6.4, 6.28, 6.17, 6.08, 5.98, 5.9, 5.81, 5.73, 5.65, 5.57, 5.49, 5.41, 5.32, 5.23, 5.14, 5.04, 4.94, 4.84, 4.74, 4.63, 4.53, 4.43, 4.33, 4.23, 4.13, 4.03, 3.93, 3.81, 3.69, 3.57, 3.45, 3.33, 3.22, 3.12, 3.04, 2.98, 2.93, 2.92, 2.92, 2.92, 2.92, 2.92, 2.92, 2.92, 2.92, 2.92, 2.92, 2.92, 2.92, 2.92, 2.9, 2.86, 2.8, 2.71, 2.62, 2.52, 2.42, 2.33, 2.24, 2.18, 2.14, 2.12, 2.12, 2.12, 2.12, 2.12, 2.12, 2.12, 2.12, 2.12, 2.12, 2.12, 2.12, 2.12, 2.1, 2.06, 2, 1.91, 1.82, 1.71, 1.61, 1.5, 1.4, 1.32, 1.25, 1.2, 1.16, 1.13, 1.1, 1.06, 1.03, 1, 0.97, 0.93, 0.9, 0.87, 0.85, 0.82, 0.79, 0.77, 0.74, 0.72, 0.69, 0.67, 0.65, 0.63, 0.61, 0.59, 0.58, 0.56, 0.54, 0.53, 0.52, 0.51, 0.5, 0.49, 0.48, 0.48, 0.47, 0.47, 0.46, 0.46, 0.47, 0.48, 0.5, 0.53, 0.56, 0.59, 0.62, 0.64, 0.67, 0.69, 0.7, 0.71, 0.71, 0.71, 0.71, 0.7, 0.7, 0.7, 0.69, 0.69, 0.69, 0.68, 0.68, 0.67, 0.67, 0.67, 0.66, 0.66, 0.65, 0.65, 0.65, 0.65, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.65, 0.65, 0.65, 0.66, 0.66, 0.67, 0.68, 0.69, 0.69, 0.7, 0.71, 0.73, 0.74, 0.75, 0.76, 0.78, 0.8, 0.81, 0.83, 0.85, 0.87, 0.89, 0.92, 0.94, 0.97, 0.99, 1.02, 1.05, 1.08, 1.11, 1.15, 1.18, 1.32, 1.66, 2.21, 2.97, 3.94, 5.11, 6.5, 8.1, 9.9, 11.92, 14.15, 16.6, 22.3, 22.8, 24.48, 30.38, 35.74, 42.4, 57.14, 94.04, 112.9, 123.4, 130.4, 130, 119.4, 120.7, 116.8, 118.1, 119.4, 124.8, 143.5, 204, 294, 319.2, 328.4, 365, 350.8, 347.6, 347.6, 325, 331.6, 319.2, 308, 308, 308, 308, 296.8, 300, 281, 278.4, 270.6, 271, 253.6, 233.5, 219.2, 207.8, 205.9, 204, 189.6, 178.8, 173.4, 160, 154.4, 146, 145, 140.5, 130.4, 126.2, 116.8, 112.9, 106.5, 101.6, 98.51, 82.67, 67.3, 80.05, 76.12, 72.3, 71.02, 69.78, 67.3, 67.3, 68.54, 57.6, 71.02, 66.06, 59.12, 57.14, 55.16, 55.16, 52.19, 52.19, 51.2, 48.56, 44.16, 43, 45.92, 49.44, 44.16, 36.48, 35.74, 35, 32.36, 37.22, 32.36, 32.36, 32.36, 33.68, 32.36, 31.7, 35.74, 29.72, 32.36, 30.38, 29.72, 28.4, 28.4, 28.4, 27.28, 25.6, 25.04, 23.92, 22.3, 21.8, 21.8, 21.8, 22.8, 21.8, 25.6, 22.8, 22.8, 17.8, 16.04, 16.04, 16.04, 16.04, 16.04, 16.04, 16.04, 16.04, 16.04, 16.04, 15.02, 14, 14.03, 14.11, 14.25, 14.45, 14.72, 15.06, 15.46, 15.95, 16.51, 17.15, 17.87, 18.69, 19.59, 20.59, 21.69, 22.88, 24.18, 25.59, 27.1, 28.73, 30.48, 32.34, 34.33, 36.44, 38.69, 41.06, 43.57, 46.22, 49.01, 51.95, 55.04, 58.27, 61.66, 65.21, 68.92, 72.8, 88.09, 104.9, 105.7, 110.3, 111.6, 110.3, 106.5, 105.7, 103.3, 100, 97.02, 98.8, 91.07, 83.98, 88.09, 81.36, 78.74, 77.43, 77.43, 73.5, 74.81, 72.63, 68.58, 66.4, 68.54, 69.78, 67.3, 64.82, 61.1, 59.12, 56.15, 53.18, 50.32, 49.44, 44.16, 36.5, 42.4, 37.96, 37.22, 33.68, 36.48, 35.74, 35, 35, 37.22, 37.22, 39.44, 32.6, 34.54, 36.48, 35.74, 34.34, 33.68, 33.02, 31.04, 29.72, 29.72, 29.72, 26.16, 25.6, 29.72, 18.3, 22.3, 21.3, 21.8, 21.8, 20.3, 20.8, 25.04, 25.04, 25.6, 25.6, 25.04, 25.6, 25.04, 25.6, 23.92, 25.04, 21.3, 21.8, 22.3, 21.8, 20.8, 16.1, 20.3, 18.3, 13.22, 19.3, 19.3, 18.3, 14.4, 13.86, 13.36, 12.9, 12.48, 12.1, 11.75, 11.43, 11.15, 10.9, 10.67, 10.48, 10.31, 10.16, 10.04, 9.93, 9.85, 9.78, 9.73, 9.69, 9.67, 9.65, 9.65, 12.08, 8.67, 11.7, 11.38, 10.65, 9.84, 9.32, 9.07, 8.85, 8.66, 8.49, 8.35, 8.22, 8.1, 7.98, 7.86, 7.74, 7.61, 7.47, 7.31, 7.14, 6.96, 6.78, 6.58, 6.39, 6.19, 5.99, 5.78, 5.58, 5.39, 5.2, 5.01, 4.83, 4.67, 4.51, 4.37, 4.24, 4.12, 4.02, 3.95, 3.89, 3.85, 3.84, 4.41, 5.77, 7.39, 8.75, 9.32, 9.18, 9, 8.94, 8.88, 8.83, 8.78, 8.73, 8.68, 8.64, 8.6, 8.56, 8.53, 8.5, 8.47, 8.45, 8.42, 8.4, 8.39, 8.37, 8.36, 8.35, 8.35, 8.34, 8.34, 8.67, 9.65, 9.62, 9.53, 9.4, 9.21, 8.98, 8.7, 8.4, 8.06, 7.69, 7.3, 6.89, 6.47, 6.03, 5.59, 5.14, 4.7, 4.26, 3.83, 3.42, 3.02, 2.65, 2.3, 1.98, 1.7, 1.45, 1.25, 1.09, 0.99, 0.94, 0.92, 0.91, 0.89, 0.87, 0.85, 0.84, 0.82, 0.81, 0.79, 0.78, 0.77, 0.75, 0.74, 0.73, 0.72, 0.71, 0.7, 0.69, 0.68, 0.67, 0.66, 0.65, 0.64, 0.64, 0.63, 0.63, 0.62, 0.62, 0.61, 0.61, 0.61, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.61, 0.61, 0.61, 0.61, 0.61, 0.61, 0.62, 0.62, 0.62, 0.62, 0.63, 0.63, 0.63, 0.63, 0.63, 0.64, 0.64, 0.64, 0.64, 0.64, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.64, 0.63, 0.62, 0.6, 0.59, 0.57, 0.55, 0.54, 0.53, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.51, 0.51, 0.51, 0.5, 0.5, 0.49, 0.48, 0.47, 0.47, 0.46, 0.45, 0.45, 0.44, 0.43, 0.42, 0.42, 0.41, 0.41, 0.41, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.41, 0.42, 0.43, 0.44, 0.46, 0.48, 0.5, 0.53, 0.55, 0.58, 0.61, 0.64, 0.67, 0.7, 0.73, 0.77, 0.8, 0.83, 0.87, 0.9, 0.93, 0.96, 0.99, 1.02, 1.05, 1.08, 1.1, 1.12, 1.14, 1.16, 1.17, 1.18, 1.19, 1.2, 1.2, 1.2, 1.19, 1.17, 1.15, 1.12, 1.09, 1.06, 1.02, 0.98, 0.94, 0.9, 0.86, 0.82, 0.78, 0.74, 0.7, 0.66, 0.63, 0.6, 0.57, 0.55, 0.53, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.51, 0.51, 0.5, 0.5, 0.49, 0.49, 0.48, 0.47, 0.47, 0.47, 0.46, 0.46, 0.45, 0.45, 0.45, 0.44, 0.44, 0.44, 0.43, 0.43, 0.43, 0.42, 0.42, 0.42, 0.41, 0.41, 0.41, 0.41, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.41, 0.41, 0.41, 0.41, 0.41, 0.41, 0.41, 0.41, 0.41, 0.41, 0.41, 0.41, 0.41, 0.41, 0.41, 0.42, 0.42, 0.42, 0.42, 0.42, 0.42, 0.42, 0.42, 0.42, 0.43, 0.43, 0.43, 0.43, 0.43, 0.43, 0.44, 0.44, 0.44, 0.44, 0.44, 0.44, 0.45, 0.45, 0.45
                            ]
                        }, {
                            name: 'rss',
                            type: 'line',
                            symbolSize: 8,
                            hoverAnimation: false,
                            data: [
                                0.97, 0.96, 0.96, 0.95, 0.95, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.93, 0.92, 0.91, 0.9, 0.89, 0.88, 0.87, 0.87, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.87, 0.88, 0.9, 0.93, 0.96, 0.99, 1.03, 1.06, 1.1, 1.14, 1.17, 1.2, 1.23, 1.26, 1.29, 1.33, 1.36, 1.4, 1.43, 1.45, 1.48, 1.49, 1.51, 1.51, 1.5, 1.49, 1.47, 1.44, 1.41, 1.37, 1.34, 1.3, 1.27, 1.24, 1.22, 1.2, 1.19, 1.18, 1.16, 1.15, 1.14, 1.13, 1.12, 1.11, 1.11, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.09, 1.09, 1.08, 1.07, 1.06, 1.05, 1.04, 1.03, 1.03, 1.02, 1.01, 1.01, 1, 0.99, 0.98, 0.97, 0.96, 0.96, 0.95, 0.95, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.93, 0.92, 0.91, 0.9, 0.89, 0.88, 0.87, 0.87, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.85, 0.84, 0.83, 0.82, 0.81, 0.8, 0.8, 0.79, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.77, 0.75, 0.73, 0.71, 0.68, 0.65, 0.63, 0.61, 0.59, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.57, 0.57, 0.57, 0.56, 0.55, 0.55, 0.54, 0.54, 0.53, 0.52, 0.52, 0.51, 0.51, 0.5, 0.5, 0.49, 0.48, 0.48, 0.47, 0.47, 0.47, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.52, 0.67, 0.9, 1.19, 1.52, 1.87, 2.22, 2.55, 2.84, 3.07, 3.22, 3.28, 3.28, 3.28, 3.28, 3.28, 3.28, 3.28, 3.28, 3.28, 3.28, 3.28, 3.28, 3.28, 3.24, 3.13, 2.97, 2.77, 2.54, 2.3, 2.05, 1.82, 1.62, 1.46, 1.35, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.3, 1.26, 1.21, 1.14, 1.06, 0.97, 0.89, 0.81, 0.74, 0.69, 0.65, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.63, 0.63, 0.62, 0.62, 0.61, 0.6, 0.59, 0.59, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.59, 0.61, 0.63, 0.65, 0.68, 0.71, 0.73, 0.75, 0.77, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.77, 0.75, 0.73, 0.71, 0.68, 0.65, 0.63, 0.61, 0.59, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.59, 0.59, 0.6, 0.61, 0.62, 0.62, 0.63, 0.63, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.65, 0.66, 0.68, 0.69, 0.71, 0.73, 0.74, 0.76, 0.77, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.79, 0.81, 0.82, 0.84, 0.86, 0.88, 0.9, 0.92, 0.93, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.93, 0.92, 0.91, 0.9, 0.89, 0.88, 0.87, 0.87, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.85, 0.84, 0.82, 0.8, 0.78, 0.76, 0.75, 0.73, 0.72, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.72, 0.73, 0.74, 0.76, 0.78, 0.79, 0.82, 0.84, 0.86, 0.89, 0.91, 0.94, 0.97, 1, 1.02, 1.05, 1.08, 1.11, 1.14, 1.17, 1.19, 1.22, 1.25, 1.27, 1.29, 1.31, 1.33, 1.35, 1.36, 1.38, 1.39, 1.39, 1.4, 1.4, 1.4, 1.39, 1.37, 1.35, 1.32, 1.29, 1.26, 1.22, 1.18, 1.14, 1.1, 1.05, 1.01, 0.97, 0.93, 0.89, 0.85, 0.82, 0.78, 0.76, 0.74, 0.72, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.72, 0.73, 0.74, 0.75, 0.77, 0.78, 0.8, 0.82, 0.84, 0.87, 0.89, 0.92, 0.94, 0.97, 0.99, 1.02, 1.05, 1.08, 1.1, 1.13, 1.16, 1.18, 1.21, 1.23, 1.26, 1.28, 1.3, 1.32, 1.34, 1.35, 1.37, 1.38, 1.39, 1.4, 1.41, 1.41, 1.42, 1.42, 1.43, 1.43, 1.43, 1.44, 1.44, 1.44, 1.44, 1.45, 1.45, 1.45, 1.46, 1.46, 1.46, 1.47, 1.47, 1.48, 1.48, 1.49, 1.5, 1.51, 1.54, 1.62, 1.73, 1.88, 2.05, 2.24, 2.45, 2.67, 2.89, 3.11, 3.31, 3.51, 3.69, 3.86, 4.03, 4.18, 4.33, 4.48, 4.62, 4.76, 4.89, 5.02, 5.16, 5.29, 5.43, 5.57, 5.71, 5.86, 6.02, 6.18, 6.36, 6.54, 6.73, 6.93, 7.15, 7.38, 7.62, 7.88, 8.16, 8.46, 8.77, 9.11, 9.46, 9.84, 10.24, 10.67, 11.12, 11.6, 12.3, 13.66, 16, 38.43, 82.21, 146.6, 218.7, 226, 225.23, 223.08, 219.78, 212, 199.82, 184.6, 168, 151.65, 137.21, 126.31, 119.94, 115.52, 112.06, 108.92, 105.44, 101, 94.56, 86.36, 77.67, 69.76, 63.9, 60.38, 57.41, 54.84, 52.57, 50.56, 48.71, 46.97, 45.25, 43.48, 41.6, 39.5, 37.19, 34.81, 32.46, 30.27, 28.36, 26.85, 25.86, 25.5, 25.5, 25.5, 25.5, 25.5, 25.5, 25.5, 25.5, 25.5, 25.5, 25.5, 25.5, 25.5, 25.27, 24.65, 23.7, 22.52, 21.17, 19.75, 18.33, 16.98, 15.8, 14.85, 14.23, 14, 14.02, 14.08, 14.17, 14.29, 14.44, 14.61, 14.8, 15.01, 15.23, 15.47, 15.71, 15.95, 16.19, 16.43, 16.67, 16.89, 17.1, 17.29, 17.46, 17.61, 17.73, 17.82, 17.88, 17.9, 17.63, 16.88, 15.75, 14.33, 12.71, 10.98, 9.23, 7.56, 6.05, 4.81, 3.92, 3.47, 3.28, 3.1, 2.93, 2.76, 2.61, 2.46, 2.32, 2.19, 2.07, 1.96, 1.85, 1.75, 1.66, 1.58, 1.51, 1.44, 1.39, 1.34, 1.29, 1.26, 1.23, 1.22, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.21, 1.21, 1.21, 1.21, 1.22, 1.22, 1.22, 1.23, 1.23, 1.23, 1.24, 1.24, 1.25, 1.25, 1.25, 1.26, 1.26, 1.27, 1.27, 1.27, 1.28, 1.28, 1.28, 1.29, 1.29, 1.29, 1.29, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.29, 1.29, 1.29, 1.29, 1.28, 1.28, 1.28, 1.27, 1.27, 1.26, 1.25, 1.25, 1.24, 1.23, 1.23, 1.22, 1.21, 1.2, 1.16, 1.06, 0.95, 0.83, 0.74, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.69, 0.69, 0.69, 0.69, 0.69, 0.69, 0.69, 0.69, 0.68, 0.68, 0.68, 0.68, 0.68, 0.68, 0.67, 0.67, 0.67, 0.67, 0.67, 0.67, 0.67, 0.66, 0.66, 0.66, 0.66, 0.66, 0.66, 0.66, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.65, 0.66, 0.68, 0.69, 0.71, 0.73, 0.74, 0.76, 0.77, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.8, 0.86, 0.95, 1.08, 1.25, 1.46, 1.7, 1.97, 2.28, 2.63, 3.01, 3.42, 3.87, 4.35, 4.86, 5.4, 5.98, 6.59, 7.92, 10.49, 14.04, 18.31, 23.04, 27.98, 32.87, 37.45, 41.46, 44.64, 46.74, 47.5, 46.86, 45.16, 42.77, 40.04, 37.33, 35, 32.74, 30.21, 27.7, 25.5, 23.9, 23.2, 23.06, 22.94, 22.84, 22.77, 22.72, 22.7, 22.8, 23.23, 23.95, 24.91, 26.04, 27.3, 28.76, 30.7, 33.39, 37.12, 42.15, 48.77, 65.22, 252.1, 257, 237.32, 221.19, 212, 208.67, 206.89, 205.2, 202.15, 189.82, 172, 165.3, 160.49, 156.8, 153.44, 149.62, 144.6, 138.27, 131, 123.11, 114.9, 106.69, 98.79, 91.5, 85.13, 80, 75.53, 71.03, 66.65, 62.54, 58.85, 55.73, 53.31, 51.75, 51.2, 56.53, 68.25, 80, 91.01, 102.03, 109, 112.37, 115.29, 117.68, 119.48, 120.61, 121, 119.45, 115.57, 110.52, 105.47, 101.58, 100, 99.97, 99.94, 99.92, 99.9, 99.88, 99.86, 99.85, 99.84, 99.83, 99.82, 99.81, 99.81, 99.8, 99.8, 99.8, 122.15, 163.65, 186, 182.96, 175.15, 164.56, 153.18, 143, 136, 131.37, 126.98, 122.81, 118.85, 115.09, 111.52, 108.13, 104.9, 101.83, 98.9, 96.11, 93.44, 90.87, 88.41, 86.04, 83.74, 81.51, 79.33, 77.2, 75.1, 73.02, 70.95, 68.88, 66.8, 64.87, 63.14, 61.4, 59.53, 57.67, 56, 54.6, 53.36, 52.2, 51.05, 49.85, 48.5, 46.87, 44.92, 42.74, 40.42, 38.04, 35.69, 33.46, 31.44, 29.72, 28.38, 27.51, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.14, 26.97, 26.7, 26.35, 25.95, 25.49, 25.02, 24.53, 24.04, 23.58, 23.16, 22.8, 22.46, 22.11, 21.75, 21.39, 21.03, 20.69, 20.36, 20.05, 19.78, 19.54, 19.35, 19.2, 19.09, 19, 18.92, 18.85, 18.79, 18.74, 18.68, 18.62, 18.56, 18.49, 18.4, 18.3, 18.17, 18.02, 17.83, 17.63, 17.41, 17.18, 16.93, 16.68, 16.43, 16.18, 15.93, 15.7, 15.47, 15.22, 14.97, 14.71, 14.45, 14.18, 13.93, 13.68, 13.44, 13.21, 13, 12.8, 12.62, 12.46, 12.31, 12.16, 12.03, 11.89, 11.76, 11.62, 11.48, 11.33, 11.17, 11, 10.81, 10.59, 10.36, 10.12, 9.86, 9.61, 9.36, 9.12, 8.89, 8.68, 8.5, 8.35, 8.21, 8.08, 7.94, 7.81, 7.68, 7.56, 7.46, 7.36, 7.29, 7.23, 7.19, 7.18, 7.51, 8.42, 9.81, 11.58, 13.63, 15.86, 18.16, 20.44, 22.58, 24.49, 26.06, 27.2, 28.08, 28.95, 29.81, 30.65, 31.48, 32.28, 33.07, 33.82, 34.55, 35.25, 35.92, 36.56, 37.15, 37.71, 38.23, 38.7, 39.13, 39.5, 39.83, 40.1, 40.31, 40.47, 40.57, 40.6, 40.49, 40.16, 39.64, 38.94, 38.09, 37.1, 36, 34.79, 33.51, 32.17, 30.79, 29.39, 27.99, 26.6, 25.25, 23.96, 22.75, 21.63, 20.63, 19.76, 19.04, 18.49, 18.14, 18, 17.97, 17.95, 17.94, 17.92, 17.91, 17.9, 17.89, 17.88, 17.87, 17.85, 17.83, 17.8, 17.7, 17.46, 17.13, 16.7, 16.21, 15.68, 15.13, 14.57, 14.04, 13.56, 13.14, 12.8, 12.52, 12.27, 12.02, 11.79, 11.57, 11.37, 11.16, 10.97, 10.78, 10.59, 10.39, 10.2, 10.01, 9.81, 9.63, 9.44, 9.26, 9.08, 8.9, 8.73, 8.56, 8.39, 8.22, 8.06, 7.9, 7.73, 7.57, 7.41, 7.25, 7.09, 6.94, 6.79, 6.65, 6.52, 6.4, 6.28, 6.17, 6.08, 5.98, 5.9, 5.81, 5.73, 5.65, 5.57, 5.49, 5.41, 5.32, 5.23, 5.14, 5.04, 4.94, 4.84, 4.74, 4.63, 4.53, 4.43, 4.33, 4.23, 4.13, 4.03, 3.93, 3.81, 3.69, 3.57, 3.45, 3.33, 3.22, 3.12, 3.04, 2.98, 2.93, 2.92, 2.92, 2.92, 2.92, 2.92, 2.92, 2.92, 2.92, 2.92, 2.92, 2.92, 2.92, 2.92, 2.9, 2.86, 2.8, 2.71, 2.62, 2.52, 2.42, 2.33, 2.24, 2.18, 2.14, 2.12, 2.12, 2.12, 2.12, 2.12, 2.12, 2.12, 2.12, 2.12, 2.12, 2.12, 2.12, 2.12, 2.1, 2.06, 2, 1.91, 1.82, 1.71, 1.61, 1.5, 1.4, 1.32, 1.25, 1.2, 1.16, 1.13, 1.1, 1.06, 1.03, 1, 0.97, 0.93, 0.9, 0.87, 0.85, 0.82, 0.79, 0.77, 0.74, 0.72, 0.69, 0.67, 0.65, 0.63, 0.61, 0.59, 0.58, 0.56, 0.54, 0.53, 0.52, 0.51, 0.5, 0.49, 0.48, 0.48, 0.47, 0.47, 0.46, 0.46, 0.47, 0.48, 0.5, 0.53, 0.56, 0.59, 0.62, 0.64, 0.67, 0.69, 0.7, 0.71, 0.71, 0.71, 0.71, 0.7, 0.7, 0.7, 0.69, 0.69, 0.69, 0.68, 0.68, 0.67, 0.67, 0.67, 0.66, 0.66, 0.65, 0.65, 0.65, 0.65, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.65, 0.65, 0.65, 0.66, 0.66, 0.67, 0.68, 0.69, 0.69, 0.7, 0.71, 0.73, 0.74, 0.75, 0.76, 0.78, 0.8, 0.81, 0.83, 0.85, 0.87, 0.89, 0.92, 0.94, 0.97, 0.99, 1.02, 1.05, 1.08, 1.11, 1.15, 1.18, 1.32, 1.66, 2.21, 2.97, 3.94, 5.11, 6.5, 8.1, 9.9, 11.92, 14.15, 16.6, 22.3, 22.8, 24.48, 30.38, 35.74, 42.4, 57.14, 94.04, 112.9, 123.4, 130.4, 130, 119.4, 120.7, 116.8, 118.1, 119.4, 124.8, 143.5, 204, 294, 319.2, 328.4, 365, 350.8, 347.6, 347.6, 325, 331.6, 319.2, 308, 308, 308, 308, 296.8, 300, 281, 278.4, 270.6, 271, 253.6, 233.5, 219.2, 207.8, 205.9, 204, 189.6, 178.8, 173.4, 160, 154.4, 146, 145, 140.5, 130.4, 126.2, 116.8, 112.9, 106.5, 101.6, 98.51, 82.67, 67.3, 80.05, 76.12, 72.3, 71.02, 69.78, 67.3, 67.3, 68.54, 57.6, 71.02, 66.06, 59.12, 57.14, 55.16, 55.16, 52.19, 52.19, 51.2, 48.56, 44.16, 43, 45.92, 49.44, 44.16, 36.48, 35.74, 35, 32.36, 37.22, 32.36, 32.36, 32.36, 33.68, 32.36, 31.7, 35.74, 29.72, 32.36, 30.38, 29.72, 28.4, 28.4, 28.4, 27.28, 25.6, 25.04, 23.92, 22.3, 21.8, 21.8, 21.8, 22.8, 21.8, 25.6, 22.8, 22.8, 17.8, 16.04, 16.04, 16.04, 16.04, 16.04, 16.04, 16.04, 16.04, 16.04, 16.04, 15.02, 14, 14.03, 14.11, 14.25, 14.45, 14.72, 15.06, 15.46, 15.95, 16.51, 17.15, 17.87, 18.69, 19.59, 20.59, 21.69, 22.88, 24.18, 25.59, 27.1, 28.73, 30.48, 32.34, 34.33, 36.44, 38.69, 41.06, 43.57, 46.22, 49.01, 51.95, 55.04, 58.27, 61.66, 65.21, 68.92, 72.8, 88.09, 104.9, 105.7, 110.3, 111.6, 110.3, 106.5, 105.7, 103.3, 100, 97.02, 98.8, 91.07, 83.98, 88.09, 81.36, 78.74, 77.43, 77.43, 73.5, 74.81, 72.63, 68.58, 66.4, 68.54, 69.78, 67.3, 64.82, 61.1, 59.12, 56.15, 53.18, 50.32, 49.44, 44.16, 36.5, 42.4, 37.96, 37.22, 33.68, 36.48, 35.74, 35, 35, 37.22, 37.22, 39.44, 32.6, 34.54, 36.48, 35.74, 34.34, 33.68, 33.02, 31.04, 29.72, 29.72, 29.72, 26.16, 25.6, 29.72, 18.3, 22.3, 21.3, 21.8, 21.8, 20.3, 20.8, 25.04, 25.04, 25.6, 25.6, 25.04, 25.6, 25.04, 25.6, 23.92, 25.04, 21.3, 21.8, 22.3, 21.8, 20.8, 16.1, 20.3, 18.3, 13.22, 19.3, 19.3, 18.3, 14.4, 13.86, 13.36, 12.9, 12.48, 12.1, 11.75, 11.43, 11.15, 10.9, 10.67, 10.48, 10.31, 10.16, 10.04, 9.93, 9.85, 9.78, 9.73, 9.69, 9.67, 9.65, 9.65, 12.08, 8.67, 11.7, 11.38, 10.65, 9.84, 9.32, 9.07, 8.85, 8.66, 8.49, 8.35, 8.22, 8.1, 7.98, 7.86, 7.74, 7.61, 7.47, 7.31, 7.14, 6.96, 6.78, 6.58, 6.39, 6.19, 5.99, 5.78, 5.58, 5.39, 5.2, 5.01, 4.83, 4.67, 4.51, 4.37, 4.24, 4.12, 4.02, 3.95, 3.89, 3.85, 3.84, 4.41, 5.77, 7.39, 8.75, 9.32, 9.18, 9, 8.94, 8.88, 8.83, 8.78, 8.73, 8.68, 8.64, 8.6, 8.56, 8.53, 8.5, 8.47, 8.45, 8.42, 8.4, 8.39, 8.37, 8.36, 8.35, 8.35, 8.34, 8.34, 8.67, 9.65, 9.62, 9.53, 9.4, 9.21, 8.98, 8.7, 8.4, 8.06, 7.69, 7.3, 6.89, 6.47, 6.03, 5.59, 5.14, 4.7, 4.26, 3.83, 3.42, 3.02, 2.65, 2.3, 1.98, 1.7, 1.45, 1.25, 1.09, 0.99, 0.94, 0.92, 0.91, 0.89, 0.87, 0.85, 0.84, 0.82, 0.81, 0.79, 0.78, 0.77, 0.75, 0.74, 0.73, 0.72, 0.71, 0.7, 0.69, 0.68, 0.67, 0.66, 0.65, 0.64, 0.64, 0.63, 0.63, 0.62, 0.62, 0.61, 0.61, 0.61, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.61, 0.61, 0.61, 0.61, 0.61, 0.61, 0.62, 0.62, 0.62, 0.62, 0.63, 0.63, 0.63, 0.63, 0.63, 0.64, 0.64, 0.64, 0.64, 0.64, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.64, 0.63, 0.62, 0.6, 0.59, 0.57, 0.55, 0.54, 0.53, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.51, 0.51, 0.51, 0.5, 0.5, 0.49, 0.48, 0.47, 0.47, 0.46, 0.45, 0.45, 0.44, 0.43, 0.42, 0.42, 0.41, 0.41, 0.41, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.41, 0.42, 0.43, 0.44, 0.46, 0.48, 0.5, 0.53, 0.55, 0.58, 0.61, 0.64, 0.67, 0.7, 0.73, 0.77, 0.8, 0.83, 0.87, 0.9, 0.93, 0.96, 0.99, 1.02, 1.05, 1.08, 1.1, 1.12, 1.14, 1.16, 1.17, 1.18, 1.19, 1.2, 1.2, 1.2, 1.19, 1.17, 1.15, 1.12, 1.09, 1.06, 1.02, 0.98, 0.94, 0.9, 0.86, 0.82, 0.78, 0.74, 0.7, 0.66, 0.63, 0.6, 0.57, 0.55, 0.53, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.51, 0.51, 0.5, 0.5, 0.49, 0.49, 0.48, 0.47, 0.47, 0.47, 0.46, 0.46, 0.45, 0.45, 0.45, 0.44, 0.44, 0.44, 0.43, 0.43, 0.43, 0.42, 0.42, 0.42, 0.41, 0.41, 0.41, 0.41, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.41, 0.41, 0.41, 0.41, 0.41, 0.41, 0.41, 0.41, 0.41, 0.41, 0.41, 0.41, 0.41, 0.41, 0.41, 0.42, 0.42, 0.42, 0.42, 0.42, 0.42, 0.42, 0.42, 0.42, 0.43, 0.43, 0.43, 0.43, 0.43, 0.43, 0.44, 0.44, 0.44, 0.44, 0.44, 0.44, 0.45, 0.45, 0.45
                            ],
                        }, {
                            name: 'heapTotal',
                            type: 'line',
                            symbolSize: 8,
                            hoverAnimation: false,
                            data: [
                                0.97, 0.96, 0.96, 0.95, 0.95, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.93, 0.92, 0.91, 0.9, 0.89, 0.88, 0.87, 0.87, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.87, 0.88, 0.9, 0.93, 0.96, 0.99, 1.03, 1.06, 1.1, 1.14, 1.17, 1.2, 1.23, 1.26, 1.29, 1.33, 1.36, 1.4, 1.43, 1.45, 1.48, 1.49, 1.51, 1.51, 1.5, 1.49, 1.47, 1.44, 1.41, 1.37, 1.34, 1.3, 1.27, 1.24, 1.22, 1.2, 1.19, 1.18, 1.16, 1.15, 1.14, 1.13, 1.12, 1.11, 1.11, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.09, 1.09, 1.08, 1.07, 1.06, 1.05, 1.04, 1.03, 1.03, 1.02, 1.01, 1.01, 1, 0.99, 0.98, 0.97, 0.96, 0.96, 0.95, 0.95, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.93, 0.92, 0.91, 0.9, 0.89, 0.88, 0.87, 0.87, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.85, 0.84, 0.83, 0.82, 0.81, 0.8, 0.8, 0.79, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.77, 0.75, 0.73, 0.71, 0.68, 0.65, 0.63, 0.61, 0.59, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.57, 0.57, 0.57, 0.56, 0.55, 0.55, 0.54, 0.54, 0.53, 0.52, 0.52, 0.51, 0.51, 0.5, 0.5, 0.49, 0.48, 0.48, 0.47, 0.47, 0.47, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.52, 0.67, 0.9, 1.19, 1.52, 1.87, 2.22, 2.55, 2.84, 3.07, 3.22, 3.28, 3.28, 3.28, 3.28, 3.28, 3.28, 3.28, 3.28, 3.28, 3.28, 3.28, 3.28, 3.28, 3.24, 3.13, 2.97, 2.77, 2.54, 2.3, 2.05, 1.82, 1.62, 1.46, 1.35, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.31, 1.3, 1.26, 1.21, 1.14, 1.06, 0.97, 0.89, 0.81, 0.74, 0.69, 0.65, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.63, 0.63, 0.62, 0.62, 0.61, 0.6, 0.59, 0.59, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.59, 0.61, 0.63, 0.65, 0.68, 0.71, 0.73, 0.75, 0.77, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.77, 0.75, 0.73, 0.71, 0.68, 0.65, 0.63, 0.61, 0.59, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.58, 0.59, 0.59, 0.6, 0.61, 0.62, 0.62, 0.63, 0.63, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.65, 0.66, 0.68, 0.69, 0.71, 0.73, 0.74, 0.76, 0.77, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.79, 0.81, 0.82, 0.84, 0.86, 0.88, 0.9, 0.92, 0.93, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.93, 0.92, 0.91, 0.9, 0.89, 0.88, 0.87, 0.87, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.85, 0.84, 0.82, 0.8, 0.78, 0.76, 0.75, 0.73, 0.72, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.72, 0.73, 0.74, 0.76, 0.78, 0.79, 0.82, 0.84, 0.86, 0.89, 0.91, 0.94, 0.97, 1, 1.02, 1.05, 1.08, 1.11, 1.14, 1.17, 1.19, 1.22, 1.25, 1.27, 1.29, 1.31, 1.33, 1.35, 1.36, 1.38, 1.39, 1.39, 1.4, 1.4, 1.4, 1.39, 1.37, 1.35, 1.32, 1.29, 1.26, 1.22, 1.18, 1.14, 1.1, 1.05, 1.01, 0.97, 0.93, 0.89, 0.85, 0.82, 0.78, 0.76, 0.74, 0.72, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.72, 0.73, 0.74, 0.75, 0.77, 0.78, 0.8, 0.82, 0.84, 0.87, 0.89, 0.92, 0.94, 0.97, 0.99, 1.02, 1.05, 1.08, 1.1, 1.13, 1.16, 1.18, 1.21, 1.23, 1.26, 1.28, 1.3, 1.32, 1.34, 1.35, 1.37, 1.38, 1.39, 1.4, 1.41, 1.41, 1.42, 1.42, 1.43, 1.43, 1.43, 1.44, 1.44, 1.44, 1.44, 1.45, 1.45, 1.45, 1.46, 1.46, 1.46, 1.47, 1.47, 1.48, 1.48, 1.49, 1.5, 1.51, 1.54, 1.62, 1.73, 1.88, 2.05, 2.24, 2.45, 2.67, 2.89, 3.11, 3.31, 3.51, 3.69, 3.86, 4.03, 4.18, 4.33, 4.48, 4.62, 4.76, 4.89, 5.02, 5.16, 5.29, 5.43, 5.57, 5.71, 5.86, 6.02, 6.18, 6.36, 6.54, 6.73, 6.93, 7.15, 7.38, 7.62, 7.88, 8.16, 8.46, 8.77, 9.11, 9.46, 9.84, 10.24, 10.67, 11.12, 11.6, 12.3, 13.66, 16, 38.43, 82.21, 146.6, 218.7, 226, 225.23, 223.08, 219.78, 212, 199.82, 184.6, 168, 151.65, 137.21, 126.31, 119.94, 115.52, 112.06, 108.92, 105.44, 101, 94.56, 86.36, 77.67, 69.76, 63.9, 60.38, 57.41, 54.84, 52.57, 50.56, 48.71, 46.97, 45.25, 43.48, 41.6, 39.5, 37.19, 34.81, 32.46, 30.27, 28.36, 26.85, 25.86, 25.5, 25.5, 25.5, 25.5, 25.5, 25.5, 25.5, 25.5, 25.5, 25.5, 25.5, 25.5, 25.5, 25.27, 24.65, 23.7, 22.52, 21.17, 19.75, 18.33, 16.98, 15.8, 14.85, 14.23, 14, 14.02, 14.08, 14.17, 14.29, 14.44, 14.61, 14.8, 15.01, 15.23, 15.47, 15.71, 15.95, 16.19, 16.43, 16.67, 16.89, 17.1, 17.29, 17.46, 17.61, 17.73, 17.82, 17.88, 17.9, 17.63, 16.88, 15.75, 14.33, 12.71, 10.98, 9.23, 7.56, 6.05, 4.81, 3.92, 3.47, 3.28, 3.1, 2.93, 2.76, 2.61, 2.46, 2.32, 2.19, 2.07, 1.96, 1.85, 1.75, 1.66, 1.58, 1.51, 1.44, 1.39, 1.34, 1.29, 1.26, 1.23, 1.22, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.21, 1.21, 1.21, 1.21, 1.22, 1.22, 1.22, 1.23, 1.23, 1.23, 1.24, 1.24, 1.25, 1.25, 1.25, 1.26, 1.26, 1.27, 1.27, 1.27, 1.28, 1.28, 1.28, 1.29, 1.29, 1.29, 1.29, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.29, 1.29, 1.29, 1.29, 1.28, 1.28, 1.28, 1.27, 1.27, 1.26, 1.25, 1.25, 1.24, 1.23, 1.23, 1.22, 1.21, 1.2, 1.16, 1.06, 0.95, 0.83, 0.74, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.69, 0.69, 0.69, 0.69, 0.69, 0.69, 0.69, 0.69, 0.68, 0.68, 0.68, 0.68, 0.68, 0.68, 0.67, 0.67, 0.67, 0.67, 0.67, 0.67, 0.67, 0.66, 0.66, 0.66, 0.66, 0.66, 0.66, 0.66, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.65, 0.66, 0.68, 0.69, 0.71, 0.73, 0.74, 0.76, 0.77, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.8, 0.86, 0.95, 1.08, 1.25, 1.46, 1.7, 1.97, 2.28, 2.63, 3.01, 3.42, 3.87, 4.35, 4.86, 5.4, 5.98, 6.59, 7.92, 10.49, 14.04, 18.31, 23.04, 27.98, 32.87, 37.45, 41.46, 44.64, 46.74, 47.5, 46.86, 45.16, 42.77, 40.04, 37.33, 35, 32.74, 30.21, 27.7, 25.5, 23.9, 23.2, 23.06, 22.94, 22.84, 22.77, 22.72, 22.7, 22.8, 23.23, 23.95, 24.91, 26.04, 27.3, 28.76, 30.7, 33.39, 37.12, 42.15, 48.77, 65.22, 252.1, 257, 237.32, 221.19, 212, 208.67, 206.89, 205.2, 202.15, 189.82, 172, 165.3, 160.49, 156.8, 153.44, 149.62, 144.6, 138.27, 131, 123.11, 114.9, 106.69, 98.79, 91.5, 85.13, 80, 75.53, 71.03, 66.65, 62.54, 58.85, 55.73, 53.31, 51.75, 51.2, 56.53, 68.25, 80, 91.01, 102.03, 109, 112.37, 115.29, 117.68, 119.48, 120.61, 121, 119.45, 115.57, 110.52, 105.47, 101.58, 100, 99.97, 99.94, 99.92, 99.9, 99.88, 99.86, 99.85, 99.84, 99.83, 99.82, 99.81, 99.81, 99.8, 99.8, 99.8, 122.15, 163.65, 186, 182.96, 175.15, 164.56, 153.18, 143, 136, 131.37, 126.98, 122.81, 118.85, 115.09, 111.52, 108.13, 104.9, 101.83, 98.9, 96.11, 93.44, 90.87, 88.41, 86.04, 83.74, 81.51, 79.33, 77.2, 75.1, 73.02, 70.95, 68.88, 66.8, 64.87, 63.14, 61.4, 59.53, 57.67, 56, 54.6, 53.36, 52.2, 51.05, 49.85, 48.5, 46.87, 44.92, 42.74, 40.42, 38.04, 35.69, 33.46, 31.44, 29.72, 28.38, 27.51, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.2, 27.14, 26.97, 26.7, 26.35, 25.95, 25.49, 25.02, 24.53, 24.04, 23.58, 23.16, 22.8, 22.46, 22.11, 21.75, 21.39, 21.03, 20.69, 20.36, 20.05, 19.78, 19.54, 19.35, 19.2, 19.09, 19, 18.92, 18.85, 18.79, 18.74, 18.68, 18.62, 18.56, 18.49, 18.4, 18.3, 18.17, 18.02, 17.83, 17.63, 17.41, 17.18, 16.93, 16.68, 16.43, 16.18, 15.93, 15.7, 15.47, 15.22, 14.97, 14.71, 14.45, 14.18, 13.93, 13.68, 13.44, 13.21, 13, 12.8, 12.62, 12.46, 12.31, 12.16, 12.03, 11.89, 11.76, 11.62, 11.48, 11.33, 11.17, 11, 10.81, 10.59, 10.36, 10.12, 9.86, 9.61, 9.36, 9.12, 8.89, 8.68, 8.5, 8.35, 8.21, 8.08, 7.94, 7.81, 7.68, 7.56, 7.46, 7.36, 7.29, 7.23, 7.19, 7.18, 7.51, 8.42, 9.81, 11.58, 13.63, 15.86, 18.16, 20.44, 22.58, 24.49, 26.06, 27.2, 28.08, 28.95, 29.81, 30.65, 31.48, 32.28, 33.07, 33.82, 34.55, 35.25, 35.92, 36.56, 37.15, 37.71, 38.23, 38.7, 39.13, 39.5, 39.83, 40.1, 40.31, 40.47, 40.57, 40.6, 40.49, 40.16, 39.64, 38.94, 38.09, 37.1, 36, 34.79, 33.51, 32.17, 30.79, 29.39, 27.99, 26.6, 25.25, 23.96, 22.75, 21.63, 20.63, 19.76, 19.04, 18.49, 18.14, 18, 17.97, 17.95, 17.94, 17.92, 17.91, 17.9, 17.89, 17.88, 17.87, 17.85, 17.83, 17.8, 17.7, 17.46, 17.13, 16.7, 16.21, 15.68, 15.13, 14.57, 14.04, 13.56, 13.14, 12.8, 12.52, 12.27, 12.02, 11.79, 11.57, 11.37, 11.16, 10.97, 10.78, 10.59, 10.39, 10.2, 10.01, 9.81, 9.63, 9.44, 9.26, 9.08, 8.9, 8.73, 8.56, 8.39, 8.22, 8.06, 7.9, 7.73, 7.57, 7.41, 7.25, 7.09, 6.94, 6.79, 6.65, 6.52, 6.4, 6.28, 6.17, 6.08, 5.98, 5.9, 5.81, 5.73, 5.65, 5.57, 5.49, 5.41, 5.32, 5.23, 5.14, 5.04, 4.94, 4.84, 4.74, 4.63, 4.53, 4.43, 4.33, 4.23, 4.13, 4.03, 3.93, 3.81, 3.69, 3.57, 3.45, 3.33, 3.22, 3.12, 3.04, 2.98, 2.93, 2.92, 2.92, 2.92, 2.92, 2.92, 2.92, 2.92, 2.92, 2.92, 2.92, 2.92, 2.92, 2.92, 2.9, 2.86, 2.8, 2.71, 2.62, 2.52, 2.42, 2.33, 2.24, 2.18, 2.14, 2.12, 2.12, 2.12, 2.12, 2.12, 2.12, 2.12, 2.12, 2.12, 2.12, 2.12, 2.12, 2.12, 2.1, 2.06, 2, 1.91, 1.82, 1.71, 1.61, 1.5, 1.4, 1.32, 1.25, 1.2, 1.16, 1.13, 1.1, 1.06, 1.03, 1, 0.97, 0.93, 0.9, 0.87, 0.85, 0.82, 0.79, 0.77, 0.74, 0.72, 0.69, 0.67, 0.65, 0.63, 0.61, 0.59, 0.58, 0.56, 0.54, 0.53, 0.52, 0.51, 0.5, 0.49, 0.48, 0.48, 0.47, 0.47, 0.46, 0.46, 0.47, 0.48, 0.5, 0.53, 0.56, 0.59, 0.62, 0.64, 0.67, 0.69, 0.7, 0.71, 0.71, 0.71, 0.71, 0.7, 0.7, 0.7, 0.69, 0.69, 0.69, 0.68, 0.68, 0.67, 0.67, 0.67, 0.66, 0.66, 0.65, 0.65, 0.65, 0.65, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.65, 0.65, 0.65, 0.66, 0.66, 0.67, 0.68, 0.69, 0.69, 0.7, 0.71, 0.73, 0.74, 0.75, 0.76, 0.78, 0.8, 0.81, 0.83, 0.85, 0.87, 0.89, 0.92, 0.94, 0.97, 0.99, 1.02, 1.05, 1.08, 1.11, 1.15, 1.18, 1.32, 1.66, 2.21, 2.97, 3.94, 5.11, 6.5, 8.1, 9.9, 11.92, 14.15, 16.6, 22.3, 22.8, 24.48, 30.38, 35.74, 42.4, 57.14, 94.04, 112.9, 123.4, 130.4, 130, 119.4, 120.7, 116.8, 118.1, 119.4, 124.8, 143.5, 204, 294, 319.2, 328.4, 365, 350.8, 347.6, 347.6, 325, 331.6, 319.2, 308, 308, 308, 308, 296.8, 300, 281, 278.4, 270.6, 271, 253.6, 233.5, 219.2, 207.8, 205.9, 204, 189.6, 178.8, 173.4, 160, 154.4, 146, 145, 140.5, 130.4, 126.2, 116.8, 112.9, 106.5, 101.6, 98.51, 82.67, 67.3, 80.05, 76.12, 72.3, 71.02, 69.78, 67.3, 67.3, 68.54, 57.6, 71.02, 66.06, 59.12, 57.14, 55.16, 55.16, 52.19, 52.19, 51.2, 48.56, 44.16, 43, 45.92, 49.44, 44.16, 36.48, 35.74, 35, 32.36, 37.22, 32.36, 32.36, 32.36, 33.68, 32.36, 31.7, 35.74, 29.72, 32.36, 30.38, 29.72, 28.4, 28.4, 28.4, 27.28, 25.6, 25.04, 23.92, 22.3, 21.8, 21.8, 21.8, 22.8, 21.8, 25.6, 22.8, 22.8, 17.8, 16.04, 16.04, 16.04, 16.04, 16.04, 16.04, 16.04, 16.04, 16.04, 16.04, 15.02, 14, 14.03, 14.11, 14.25, 14.45, 14.72, 15.06, 15.46, 15.95, 16.51, 17.15, 17.87, 18.69, 19.59, 20.59, 21.69, 22.88, 24.18, 25.59, 27.1, 28.73, 30.48, 32.34, 34.33, 36.44, 38.69, 41.06, 43.57, 46.22, 49.01, 51.95, 55.04, 58.27, 61.66, 65.21, 68.92, 72.8, 88.09, 104.9, 105.7, 110.3, 111.6, 110.3, 106.5, 105.7, 103.3, 100, 97.02, 98.8, 91.07, 83.98, 88.09, 81.36, 78.74, 77.43, 77.43, 73.5, 74.81, 72.63, 68.58, 66.4, 68.54, 69.78, 67.3, 64.82, 61.1, 59.12, 56.15, 53.18, 50.32, 49.44, 44.16, 36.5, 42.4, 37.96, 37.22, 33.68, 36.48, 35.74, 35, 35, 37.22, 37.22, 39.44, 32.6, 34.54, 36.48, 35.74, 34.34, 33.68, 33.02, 31.04, 29.72, 29.72, 29.72, 26.16, 25.6, 29.72, 18.3, 22.3, 21.3, 21.8, 21.8, 20.3, 20.8, 25.04, 25.04, 25.6, 25.6, 25.04, 25.6, 25.04, 25.6, 23.92, 25.04, 21.3, 21.8, 22.3, 21.8, 20.8, 16.1, 20.3, 18.3, 13.22, 19.3, 19.3, 18.3, 14.4, 13.86, 13.36, 12.9, 12.48, 12.1, 11.75, 11.43, 11.15, 10.9, 10.67, 10.48, 10.31, 10.16, 10.04, 9.93, 9.85, 9.78, 9.73, 9.69, 9.67, 9.65, 9.65, 12.08, 8.67, 11.7, 11.38, 10.65, 9.84, 9.32, 9.07, 8.85, 8.66, 8.49, 8.35, 8.22, 8.1, 7.98, 7.86, 7.74, 7.61, 7.47, 7.31, 7.14, 6.96, 6.78, 6.58, 6.39, 6.19, 5.99, 5.78, 5.58, 5.39, 5.2, 5.01, 4.83, 4.67, 4.51, 4.37, 4.24, 4.12, 4.02, 3.95, 3.89, 3.85, 3.84, 4.41, 5.77, 7.39, 8.75, 9.32, 9.18, 9, 8.94, 8.88, 8.83, 8.78, 8.73, 8.68, 8.64, 8.6, 8.56, 8.53, 8.5, 8.47, 8.45, 8.42, 8.4, 8.39, 8.37, 8.36, 8.35, 8.35, 8.34, 8.34, 8.67, 9.65, 9.62, 9.53, 9.4, 9.21, 8.98, 8.7, 8.4, 8.06, 7.69, 7.3, 6.89, 6.47, 6.03, 5.59, 5.14, 4.7, 4.26, 3.83, 3.42, 3.02, 2.65, 2.3, 1.98, 1.7, 1.45, 1.25, 1.09, 0.99, 0.94, 0.92, 0.91, 0.89, 0.87, 0.85, 0.84, 0.82, 0.81, 0.79, 0.78, 0.77, 0.75, 0.74, 0.73, 0.72, 0.71, 0.7, 0.69, 0.68, 0.67, 0.66, 0.65, 0.64, 0.64, 0.63, 0.63, 0.62, 0.62, 0.61, 0.61, 0.61, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.61, 0.61, 0.61, 0.61, 0.61, 0.61, 0.62, 0.62, 0.62, 0.62, 0.63, 0.63, 0.63, 0.63, 0.63, 0.64, 0.64, 0.64, 0.64, 0.64, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.64, 0.63, 0.62, 0.6, 0.59, 0.57, 0.55, 0.54, 0.53, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.51, 0.51, 0.51, 0.5, 0.5, 0.49, 0.48, 0.47, 0.47, 0.46, 0.45, 0.45, 0.44, 0.43, 0.42, 0.42, 0.41, 0.41, 0.41, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.41, 0.42, 0.43, 0.44, 0.46, 0.48, 0.5, 0.53, 0.55, 0.58, 0.61, 0.64, 0.67, 0.7, 0.73, 0.77, 0.8, 0.83, 0.87, 0.9, 0.93, 0.96, 0.99, 1.02, 1.05, 1.08, 1.1, 1.12, 1.14, 1.16, 1.17, 1.18, 1.19, 1.2, 1.2, 1.2, 1.19, 1.17, 1.15, 1.12, 1.09, 1.06, 1.02, 0.98, 0.94, 0.9, 0.86, 0.82, 0.78, 0.74, 0.7, 0.66, 0.63, 0.6, 0.57, 0.55, 0.53, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.51, 0.51, 0.5, 0.5, 0.49, 0.49, 0.48, 0.47, 0.47, 0.47, 0.46, 0.46, 0.45, 0.45, 0.45, 0.44, 0.44, 0.44, 0.43, 0.43, 0.43, 0.42, 0.42, 0.42, 0.41, 0.41, 0.41, 0.41, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.41, 0.41, 0.41, 0.41, 0.41, 0.41, 0.41, 0.41, 0.41, 0.41, 0.41, 0.41, 0.41, 0.41, 0.41, 0.42, 0.42, 0.42, 0.42, 0.42, 0.42, 0.42, 0.42, 0.42, 0.43, 0.43, 0.43, 0.43, 0.43, 0.43, 0.44, 0.44, 0.44, 0.44, 0.44, 0.44, 0.45, 0.45, 0.45
                            ],
                        }
                    ]
                };
                Object.assign(xAxis, result.data.processInfo);
                _this.chartOption.xAxis.data = Object.keys(xAxis).map(function (item) {
                    var time = new Date(2018, 8, 7).getTime() + 5 * 1000 * parseInt(item);
                    var currentDay = new Date(time);
                    var result = currentDay.getFullYear() + "-" + (currentDay.getMonth() + 1) + "-" + currentDay.getDate() + " " + currentDay.getHours() + ":" + currentDay.getMinutes() + ":" + currentDay.getSeconds();
                    return result;
                });
                var allResult = [];
                var rsses = [];
                var heapTotals = [];
                for (var i = 0; i < Object.keys(xAxis).length; i++) {
                    allResult.push(xAxis[i].heapUsed / 1024);
                    rsses.push(xAxis[i].rss / 1024);
                    heapTotals.push(xAxis[i].heapTotal / 1024);
                }
                _this.chartOption.series[0].data = allResult;
                _this.chartOption.series[1].data = rsses;
                _this.chartOption.series[2].data = heapTotals;
                _this.loading = false;
            });
        }, 0);
    };
    MemoryManageComponent.prototype.ngOnInit = function () {
        this.initData();
        this.validateForm = this.fb.group({});
        for (var i = 0; i < 10; i++) {
            this.controlArray.push({ index: i, show: i < 6 });
            this.validateForm.addControl("field" + i, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]());
        }
    };
    MemoryManageComponent.prototype.toggleCollapse = function () {
        var _this = this;
        this.isCollapse = !this.isCollapse;
        this.controlArray.forEach(function (c, index) {
            c.show = _this.isCollapse ? (index < 6) : true;
        });
    };
    MemoryManageComponent.prototype.resetForm = function () {
        this.validateForm.reset();
    };
    MemoryManageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-memory-manage',
            template: __webpack_require__(/*! ./memoryManage.component.html */ "./src/app/page/memoryManage/memoryManage.component.html"),
            styles: [
                ".demo-chart {\n        height: 600px;\n     }\n     .loading{\n        text-align: center;\n        background: rgba(0,0,0,0.05);\n        border-radius: 4px;\n        margin-bottom: 20px;\n        padding: 30px 50px;\n        margin: 20px 0;\n      }\n\n      [nz-form-label] {\n        overflow: visible;\n      }\n\n      button {\n        margin-left: 8px;\n      }"
            ]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], MemoryManageComponent);
    return MemoryManageComponent;
}());



/***/ }),

/***/ "./src/app/page/memoryManage/memoryManage.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/page/memoryManage/memoryManage.module.ts ***!
  \**********************************************************/
/*! exports provided: MemoryManageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryManageModule", function() { return MemoryManageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _memoryManage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./memoryManage.component */ "./src/app/page/memoryManage/memoryManage.component.ts");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/common.module */ "./src/app/common/common.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routers = [{
        path: 'application/dashboard',
        component: _memoryManage_component__WEBPACK_IMPORTED_MODULE_2__["MemoryManageComponent"]
    }];
var MemoryManageModule = /** @class */ (function () {
    function MemoryManageModule() {
    }
    MemoryManageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routers), _common_common_module__WEBPACK_IMPORTED_MODULE_3__["AppCommonModule"]],
            declarations: [_memoryManage_component__WEBPACK_IMPORTED_MODULE_2__["MemoryManageComponent"]],
            exports: []
        })
    ], MemoryManageModule);
    return MemoryManageModule;
}());



/***/ }),

/***/ "./src/app/page/traceManage/components/appRequestDashboard.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/page/traceManage/components/appRequestDashboard.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngFor=\"let item of httpRequestInfos\" class=\"m-httpRequestInfo\">\n    <div>\n      <p>url: {{item.url}} 【{{item.method}}】平均耗时: {{item.averageUseTime}}ms 累计请求数量: {{item.count}}次</p>\n      <nz-progress [nzPercent]=\"item.percent\" nzStatus=\"active\"></nz-progress>\n    </div>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/page/traceManage/components/appRequestDashboard.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/page/traceManage/components/appRequestDashboard.component.ts ***!
  \******************************************************************************/
/*! exports provided: AppRequestDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRequestDashboardComponent", function() { return AppRequestDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppRequestDashboardComponent = /** @class */ (function () {
    function AppRequestDashboardComponent(httpClient) {
        this.httpClient = httpClient;
        this.httpRequestInfos = [];
    }
    AppRequestDashboardComponent.prototype.ngOnInit = function () {
        this.initHttpRequqestInfos();
    };
    AppRequestDashboardComponent.prototype.initHttpRequqestInfos = function () {
        var self = this;
        this.httpClient.get("/xhr/application/getHttpRequestInfos.do").subscribe(function (data) {
            var counts = data.data.reduce(function (currentValue, item) {
                return currentValue + item.count;
            }, 0);
            data.data.map(function (item) {
                item.percent = (item.count / counts * 100).toFixed(2);
            });
            self.httpRequestInfos = data.data.sort(function (a, b) {
                return b.count > a.count;
            });
        });
    };
    AppRequestDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-dashboard',
            template: __webpack_require__(/*! ./appRequestDashboard.component.html */ "./src/app/page/traceManage/components/appRequestDashboard.component.html"),
            styles: ["\n    .m-httpRequestInfo{\n      padding: 20px;\n      border: 1px solid #ccc;\n      margin-bottom: 20px;\n      padding: 5px;\n      border-radius: 4px;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppRequestDashboardComponent);
    return AppRequestDashboardComponent;
}());



/***/ }),

/***/ "./src/app/page/traceManage/traceManage.component.html":
/*!*************************************************************!*\
  !*** ./src/app/page/traceManage/traceManage.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-content>\n  <form nz-form class=\"ant-advanced-search-form\">\n    <div nz-row>\n      <div nz-col [nzSpan]=\"24\">\n        <h1>Dashboard</h1>\n      </div>\n      <div nz-col [nzSpan]=\"8\">\n        <span>服务名: </span>\n        <span>tiger-ape</span>\n      </div>\n      <div nz-col [nzSpan]=\"8\">\n        <span>节点数量: </span>\n        <span>8</span>\n      </div>\n    </div>\n  </form>\n  <div style=\"margin-top: 20px;\">\n    <div nz-row>\n      <div style=\"float: left; width: 200px; height: 200px; border:1px solid #ccc\">\n        <ul>\n          <li>10.10.1.1</li>\n          <li>10.10.10.2</li>\n        </ul>\n      </div>\n      <div style=\"margin-left: 220px;\">\n        <app-request-dashboard></app-request-dashboard>\n      </div>\n    </div>\n  </div>\n</nz-content>\n"

/***/ }),

/***/ "./src/app/page/traceManage/traceManage.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/page/traceManage/traceManage.component.ts ***!
  \***********************************************************/
/*! exports provided: TraceManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraceManageComponent", function() { return TraceManageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TraceManageComponent = /** @class */ (function () {
    function TraceManageComponent() {
    }
    TraceManageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./traceManage.component.html */ "./src/app/page/traceManage/traceManage.component.html")
        })
    ], TraceManageComponent);
    return TraceManageComponent;
}());



/***/ }),

/***/ "./src/app/page/traceManage/traceManage.module.ts":
/*!********************************************************!*\
  !*** ./src/app/page/traceManage/traceManage.module.ts ***!
  \********************************************************/
/*! exports provided: TraceManageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraceManageModule", function() { return TraceManageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/common.module */ "./src/app/common/common.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _traceManage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./traceManage.component */ "./src/app/page/traceManage/traceManage.component.ts");
/* harmony import */ var _components_appRequestDashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/appRequestDashboard.component */ "./src/app/page/traceManage/components/appRequestDashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routers = [{
        path: 'application/traceManage',
        component: _traceManage_component__WEBPACK_IMPORTED_MODULE_3__["TraceManageComponent"]
    }];
var TraceManageModule = /** @class */ (function () {
    function TraceManageModule() {
    }
    TraceManageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_common_common_module__WEBPACK_IMPORTED_MODULE_1__["AppCommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routers)],
            declarations: [_traceManage_component__WEBPACK_IMPORTED_MODULE_3__["TraceManageComponent"], _components_appRequestDashboard_component__WEBPACK_IMPORTED_MODULE_4__["AppRequestDashboardComponent"]],
            exports: []
        })
    ], TraceManageModule);
    return TraceManageModule;
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
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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

module.exports = __webpack_require__(/*! /Users/stone-jin/code/tiger/tiger-hook/app/web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map