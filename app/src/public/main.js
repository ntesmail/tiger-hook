(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./errorMessage/errorMessageManage.module": [
		"./src/app/page/errorMessage/errorMessageManage.module.ts",
		"common",
		"errorMessage-errorMessageManage-module"
	],
	"./memoryManage/memoryManage.module": [
		"./src/app/page/memoryManage/memoryManage.module.ts",
		"common",
		"memoryManage-memoryManage-module"
	],
	"./traceManage/traceManage.module": [
		"./src/app/page/traceManage/traceManage.module.ts",
		"common",
		"traceManage-traceManage-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
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

module.exports = "<nz-layout class=\"layout\">\n  <nz-header>\n    <div class=\"logo\">\n      <span>Node监控中心</span>\n    </div>\n    <app-header-menu [titles]=\"titles\" (onSelect)=\"selectHeaderMenu($event)\"></app-header-menu>\n  </nz-header>\n  <router-outlet></router-outlet>\n</nz-layout>\n"

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
        this.titles = [{
                //   title: '应用桶管理',
                //   type: 1
                // }, {
                title: '应用管理',
                type: 2,
            }];
        var headerMenu = this.location.path().split("/")[1];
        switch (headerMenu) {
            case "application":
                this.titles[0].selected = true;
                break;
        }
    }
    /**
     * description: 选择对应的大菜单
     * author: 金炳<hzjinbing@163.com>
     */
    AppComponent.prototype.selectHeaderMenu = function (headerMenuType) {
        console.log("select menu: " + headerMenuType);
        // this.menuType = headerMenuType
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_HeaderMenu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/HeaderMenu.component */ "./src/app/components/HeaderMenu.component.ts");
/* harmony import */ var _components_sideMenu_SideMenu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sideMenu/SideMenu.component */ "./src/app/components/sideMenu/SideMenu.component.ts");
/* harmony import */ var _components_sideMenu_types_ApplicationSideMenu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/sideMenu/types/ApplicationSideMenu.component */ "./src/app/components/sideMenu/types/ApplicationSideMenu.component.ts");
/* harmony import */ var _Directives_UnWrap_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Directives/UnWrap.directive */ "./src/app/Directives/UnWrap.directive.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/common.module */ "./src/app/common/common.module.ts");
/* harmony import */ var _page_applicationManage_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page/applicationManage.module */ "./src/app/page/applicationManage.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5___default.a);
var routers = [{
        path: '',
        redirectTo: 'application/dashboard',
        pathMatch: 'full'
    }];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_HeaderMenu_component__WEBPACK_IMPORTED_MODULE_6__["HeaderMenuComponent"],
                _components_sideMenu_SideMenu_component__WEBPACK_IMPORTED_MODULE_7__["SideMenuComponent"],
                _components_sideMenu_types_ApplicationSideMenu_component__WEBPACK_IMPORTED_MODULE_8__["ApplicationSideMenuComponent"],
                _Directives_UnWrap_directive__WEBPACK_IMPORTED_MODULE_9__["UnWrapDirective"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _common_common_module__WEBPACK_IMPORTED_MODULE_11__["AppCommonModule"],
                _page_applicationManage_module__WEBPACK_IMPORTED_MODULE_12__["ApplicationManageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(routers, { useHash: true })
            ],
            providers: [{ provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["zh_CN"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/AppLocation.service.ts":
/*!***********************************************!*\
  !*** ./src/app/common/AppLocation.service.ts ***!
  \***********************************************/
/*! exports provided: AppLocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLocationService", function() { return AppLocationService; });
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


var AppLocationService = /** @class */ (function () {
    function AppLocationService(location) {
        this.location = location;
    }
    AppLocationService.prototype.generateUrl = function () {
        var path = this.location.path();
        console.log(path);
        var result = path.split('?');
        var url = '';
        var queryParams = {};
        if (result.length > 1) {
            url = result[0];
            var queryParamsTmp = result[1].split('&');
            queryParamsTmp.filter(function (item) {
                if (item.indexOf("=") >= 0) {
                    return true;
                }
            }).map(function (item) {
                var result = item.split('=');
                queryParams[result[0]] = result[1];
            });
        }
        console.log(url, queryParams);
        return { url: url, queryParams: queryParams };
    };
    AppLocationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], AppLocationService);
    return AppLocationService;
}());



/***/ }),

/***/ "./src/app/common/Application.service.ts":
/*!***********************************************!*\
  !*** ./src/app/common/Application.service.ts ***!
  \***********************************************/
/*! exports provided: ApplicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationService", function() { return ApplicationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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



var ApplicationService = /** @class */ (function () {
    function ApplicationService(httpClient, location) {
        this.httpClient = httpClient;
        this.location = location;
        this.applications = [];
    }
    /**
     * description: 获取应用列表
     * author: 金炳<hzjinbing@163.com>
     */
    ApplicationService.prototype.getApplicationList = function () {
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
    /**
     * description: 刷新应用列表
     * author: 金炳<hzjinbing@163.com>
     */
    ApplicationService.prototype.refreshAppList = function () {
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
                        allQueryParams = result[1].split('&');
                        _loop_1 = function (i) {
                            if (allQueryParams[i].split('=')[0] == 'app') {
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
    /**
     * description: 获取当前应用管理这边是在哪个页面
     * author: 金炳<hzjinbing@163.com>
     */
    ApplicationService.prototype.getCurrentApp = function () {
        var currentApplication = this.applications.filter(function (item) {
            var keys = Object.keys(item.tabs);
            for (var i = 0; i < keys.length; i++) {
                if (keys[i]) {
                    return true;
                }
            }
            return false;
        });
        if (currentApplication.length > 0) {
            return currentApplication[0];
        }
        else {
            return null;
        }
    };
    ApplicationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], ApplicationService);
    return ApplicationService;
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm5/ngx-echarts.js");
/* harmony import */ var _Application_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Application.service */ "./src/app/common/Application.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _AppLocation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AppLocation.service */ "./src/app/common/AppLocation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var modules = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NgZorroAntdModule"],
    ngx_echarts__WEBPACK_IMPORTED_MODULE_4__["NgxEchartsModule"],
    _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]
];
var services = [
    _Application_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"],
    _AppLocation_service__WEBPACK_IMPORTED_MODULE_7__["AppLocationService"]
];
var AppCommonModule = /** @class */ (function () {
    function AppCommonModule() {
    }
    AppCommonModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: modules.slice(),
            providers: services.slice(),
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

module.exports = "<ng-container *ngIf=\"menuType == 1\">\n  <app-application-side-menu></app-application-side-menu>\n</ng-container>\n<ng-container *ngIf=\"menuType != 1\">\n\n</ng-container>\n"

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

/***/ "./src/app/page/applicationManage.component.html":
/*!*******************************************************!*\
  !*** ./src/app/page/applicationManage.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout>\n  <nz-sider [nzWidth]=\"200\" style=\"background:#fff;\">\n    <app-application-side-nav></app-application-side-nav>\n  </nz-sider>\n  <nz-layout style=\"padding:0 24px 24px\">\n    <router-outlet></router-outlet>\n  </nz-layout>\n</nz-layout>\n"

/***/ }),

/***/ "./src/app/page/applicationManage.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/page/applicationManage.component.ts ***!
  \*****************************************************/
/*! exports provided: ApplicationManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationManageComponent", function() { return ApplicationManageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _common_AppLocation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/AppLocation.service */ "./src/app/common/AppLocation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApplicationManageComponent = /** @class */ (function () {
    function ApplicationManageComponent(location, appLocationService) {
        this.location = location;
        this.appLocationService = appLocationService;
    }
    ApplicationManageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./applicationManage.component.html */ "./src/app/page/applicationManage.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _common_AppLocation_service__WEBPACK_IMPORTED_MODULE_2__["AppLocationService"]])
    ], ApplicationManageComponent);
    return ApplicationManageComponent;
}());



/***/ }),

/***/ "./src/app/page/applicationManage.module.ts":
/*!**************************************************!*\
  !*** ./src/app/page/applicationManage.module.ts ***!
  \**************************************************/
/*! exports provided: ApplicationManageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationManageModule", function() { return ApplicationManageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/common.module */ "./src/app/common/common.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _applicationManage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./applicationManage.component */ "./src/app/page/applicationManage.component.ts");
/* harmony import */ var _common_ApplicationSideNav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/ApplicationSideNav.component */ "./src/app/page/common/ApplicationSideNav.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{
        path: 'application',
        component: _applicationManage_component__WEBPACK_IMPORTED_MODULE_3__["ApplicationManageComponent"],
        children: [{
                path: 'dashboard',
                loadChildren: './memoryManage/memoryManage.module#MemoryManageModule'
            }, {
                path: 'errorMessage',
                loadChildren: './errorMessage/errorMessageManage.module#ErrorMessageManageModule'
            }, {
                path: 'traceManage',
                loadChildren: './traceManage/traceManage.module#TraceManageModule'
            }]
    }];
var ApplicationManageModule = /** @class */ (function () {
    function ApplicationManageModule() {
    }
    ApplicationManageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_common_common_module__WEBPACK_IMPORTED_MODULE_1__["AppCommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            declarations: [_applicationManage_component__WEBPACK_IMPORTED_MODULE_3__["ApplicationManageComponent"], _common_ApplicationSideNav_component__WEBPACK_IMPORTED_MODULE_4__["ApplicationSideComponent"]],
            exports: []
        })
    ], ApplicationManageModule);
    return ApplicationManageModule;
}());



/***/ }),

/***/ "./src/app/page/common/ApplicationSideNav.component.html":
/*!***************************************************************!*\
  !*** ./src/app/page/common/ApplicationSideNav.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul nz-menu [nzMode]=\"'inline'\" style=\"height:100%\" app-unwrap=\"\">\n  <li nz-submenu *ngFor=\"let item of applications\" [nzOpen]=\"item.open\">\n    <span title><i class=\"anticon anticon-laptop\"></i>{{item.name}}</span>\n    <ul>\n      <li nz-menu-item [nzSelected]=\"item.tabs.dashboard\" (click)=\"goPath(item, 'dashboard')\">\n        <a routerLinkActive=\"true\" routerLink=\"dashboard\" [queryParams]=\"{app: item.name}\">Dashboard</a>\n      </li>\n      <!--<li nz-menu-item [nzSelected]=\"item.tabs.alertManage\">告警配置</li>-->\n      <!--<li nz-menu-item [nzSelected]=\"item.tabs.logAnalyze\">日志分析</li>-->\n      <!--<li nz-menu-item [nzSelected]=\"item.tabs.appStructure\">服务结构</li>-->\n      <li nz-menu-item [nzSelected]=\"item.tabs.errorMessage\" (click)=\"goPath(item, 'errorMessage')\">\n        <a routerLinkActive=\"true\" routerLink=\"errorMessage\" [queryParams]=\"{app: item.name}\">错误信息</a>\n      </li>\n      <!--<li nz-menu-item [nzSelected]=\"item.tabs.appStatus\" (click)=\"goPath(item, 'appStatus')\">-->\n        <!--<a routerLinkActive=\"true\" routerLink=\"appStatus\" [queryParams]=\"{app: item.name}\">状态跟踪</a>-->\n      <!--</li>-->\n      <li nz-menu-item [nzSelected]=\"item.tabs.traceManage\" (click)=\"goPath(item, 'traceManage')\">\n        <a routerLinkActive=\"true\" routerLink=\"traceManage\" [queryParams]=\"{app: item.name}\">链路跟踪</a>\n      </li>\n      <!--<li nz-menu-item [nzSelected]=\"item.tabs.remoteDebug\">远程调试</li>-->\n    </ul>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/page/common/ApplicationSideNav.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/page/common/ApplicationSideNav.component.ts ***!
  \*************************************************************/
/*! exports provided: ApplicationSideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationSideComponent", function() { return ApplicationSideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_Application_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/Application.service */ "./src/app/common/Application.service.ts");
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





var ApplicationSideComponent = /** @class */ (function () {
    function ApplicationSideComponent(location, router, httpClient, applicationService) {
        this.location = location;
        this.router = router;
        this.httpClient = httpClient;
        this.applicationService = applicationService;
        this.applications = [];
        this.applications = this.applicationService.applications;
    }
    ApplicationSideComponent.prototype.initApplicationData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.applicationService.refreshAppList()];
                    case 1:
                        _a.sent();
                        this.applications = this.applicationService.applications;
                        return [2 /*return*/];
                }
            });
        });
    };
    ApplicationSideComponent.prototype.ngOnInit = function () {
        this.initApplicationData();
    };
    ApplicationSideComponent.prototype.goPath = function (item, path) {
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
    ApplicationSideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-application-side-nav',
            template: __webpack_require__(/*! ./ApplicationSideNav.component.html */ "./src/app/page/common/ApplicationSideNav.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _common_Application_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"]])
    ], ApplicationSideComponent);
    return ApplicationSideComponent;
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