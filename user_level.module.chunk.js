webpackJsonp(["user_level.module"],{

/***/ "../../../../../src/app/user_level/user_level.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".glyphicon {\r\n    cursor: pointer !important;\r\n}\r\n.row {\r\n    margin: 10px 0px !important;\r\n}\r\n#page-len {\r\n    width: 80px;\r\n    margin: 0px 10px;\r\n    display: inline;\r\n}\r\n\r\n.tab-pager {\r\n    border-radius: 50%; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user_level/user_level.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-8\">\r\n        <label>Show </label>\r\n        <select id=\"page-len\" size=\"1\" class=\"form-control\" (change)=\"pageLimitChanged($event.target.value)\">\r\n            <option *ngFor=\"let item of pageOptions\" value=\"{{item}}\">{{item}}</option>\r\n        </select>\r\n        <label> Rows</label>\r\n    </div>\r\n    <div class=\"col-md-4\" >\r\n        <div class=\"input-group\">\r\n            <input class=\"form-control\" ng-model=\"searchText\" placeholder=\"Search\" type=\"search\" ng-change=\"search()\" /> \r\n            <span class=\"input-group-addon\">\r\n                <span class=\"glyphicon glyphicon-search\"></span>\r\n            </span>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">      \r\n        <a class=\"btn btn-primary btn-sm\">&lt;</a>\r\n        <a class=\"btn btn-primary btn-sm\">&gt;</a>\r\n        <span style=\"\r\n        margin: 8px;\r\n        font-size: 12px;\">You are viewing {{offset}} - {{add(offset,pageLimit)}} rows of 100 rows</span>\r\n        <a class=\"btn btn-primary btn-sm pull-right\">\r\n            <span class=\"glyphicon glyphicon-plus\"></span> Add New User Level\r\n        </a>\r\n        \r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">      \r\n        <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" class=\"datatable table table-striped\">\r\n        <!--table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" class=\"datatable table table-striped table-bordered\"-->\r\n        <!--table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" class=\"table  table-hover data-table myTable\"-->\r\n            <thead>\r\n                <tr>\r\n                    <th></th>\r\n                    <th>Name</th>\r\n                    <th>Description</th>\r\n                    <th>Updated</th>\r\n                    <th>Created</th>\r\n                    <th></th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of arrUserLevel\">\r\n                    <td class=\"center\">\r\n                        <input type=\"checkbox\" value=\"Bike\" >\r\n                    </td>\r\n                    <td class=\"center\">\r\n                        <input value={{item.name}} type=\"textbox\" class=\"form-control\"/>\r\n                    </td>\r\n                    <td>\r\n                        <input value={{item.desc}}  type=\"textbox\" class=\"form-control\"/>\r\n                    </td>\r\n                    <td class=\"center\">{{item.updated}}</td>\r\n                    <td class=\"center\">{{item.created}}</td>\r\n                    <td  id=\"{{item.id}}\" class=\"center\">\r\n                        <span class=\"glyphicon glyphicon-edit\"></span>\r\n                        <span class=\"glyphicon glyphicon-floppy-disk\"></span>\r\n                        <span (click)=\"this.delete()\" class=\"glyphicon glyphicon-trash\"></span>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/user_level/user_level.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLevelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_level_service__ = __webpack_require__("../../../../../src/app/user_level/user_level.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_level_model__ = __webpack_require__("../../../../../src/app/user_level/user_level.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_index__ = __webpack_require__("../../../../../src/app/utils/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserLevelComponent = (function () {
    function UserLevelComponent(userLevelService, alertService) {
        this.userLevelService = userLevelService;
        this.alertService = alertService;
        this.loading = true;
        this.pageLimit = __WEBPACK_IMPORTED_MODULE_3__utils_index__["c" /* Constants */].DEFAULT.TABLE_PAGINATION_LIMIT;
        this.offset = __WEBPACK_IMPORTED_MODULE_3__utils_index__["c" /* Constants */].DEFAULT.OFFSET;
        this.pageOptions = __WEBPACK_IMPORTED_MODULE_3__utils_index__["c" /* Constants */].DEFAULT.TABLE_PAGE_OPTIONS;
        this.arrUserLevel = new Array();
        this.loading = true;
        this.getAll(0);
    }
    UserLevelComponent.prototype.getAll = function (offset) {
        var _this = this;
        if (offset == null) {
            offset = 0;
        }
        this.userLevelService.getAll(offset).subscribe(function (data) {
            if (data.data != undefined) {
                var ul = JSON.parse(data.data);
                ul.forEach(function (e) {
                    var u = new __WEBPACK_IMPORTED_MODULE_2__user_level_model__["a" /* UserLevel */];
                    u.id = e.id;
                    u.name = e.name;
                    u.desc = e.desc;
                    u.updated = e.updated;
                    u.created = e.created;
                    _this.arrUserLevel.push(u);
                });
            }
            else {
                _this.alertService.error(data.message);
            }
            _this.loading = false;
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    UserLevelComponent.prototype.getUserLevel = function (userLevelId) {
        var _this = this;
        this.userLevelService.getUserLevel(userLevelId).subscribe(function (data) {
            if (data.data != undefined) {
                var ul = JSON.parse(data.data);
                _this.alertService.success(data.message);
            }
            else {
                _this.alertService.error(data.message);
            }
            _this.loading = false;
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    UserLevelComponent.prototype.delete = function () {
        //console.log(this);    
    };
    UserLevelComponent.prototype.pageLimitChanged = function (value) {
        this.pageLimit = value;
    };
    UserLevelComponent.prototype.add = function (a, b) {
        var r = a + b;
        return parseInt(r.toString());
    };
    UserLevelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-level',
            template: __webpack_require__("../../../../../src/app/user_level/user_level.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user_level/user_level.component.css")]
        })
        //declare let $: any;
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_level_service__["a" /* UserLevelService */], __WEBPACK_IMPORTED_MODULE_3__utils_index__["b" /* AlertService */]])
    ], UserLevelComponent);
    return UserLevelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user_level/user_level.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLevel; });
var UserLevel = (function () {
    function UserLevel() {
    }
    return UserLevel;
}());



/***/ }),

/***/ "../../../../../src/app/user_level/user_level.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLevelModule", function() { return UserLevelModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_level_component__ = __webpack_require__("../../../../../src/app/user_level/user_level.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_level_service__ = __webpack_require__("../../../../../src/app/user_level/user_level.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_level_router__ = __webpack_require__("../../../../../src/app/user_level/user_level.router.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var UserLevelModule = (function () {
    function UserLevelModule() {
    }
    UserLevelModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__user_level_router__["a" /* routes */])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__user_level_component__["a" /* UserLevelComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__user_level_service__["a" /* UserLevelService */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_3__user_level_component__["a" /* UserLevelComponent */]
            ]
        })
    ], UserLevelModule);
    return UserLevelModule;
}());



/***/ }),

/***/ "../../../../../src/app/user_level/user_level.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_level_component__ = __webpack_require__("../../../../../src/app/user_level/user_level.component.ts");

var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__user_level_component__["a" /* UserLevelComponent */]
    }
];


/***/ }),

/***/ "../../../../../src/app/user_level/user_level.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLevelService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_index__ = __webpack_require__("../../../../../src/app/utils/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserLevelService = (function () {
    function UserLevelService(http) {
        this.http = http;
    }
    UserLevelService.prototype.getUserLevel = function (userLevelId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__utils_index__["c" /* Constants */].API_ENDPOINT + '/user-level/' + userLevelId, this.jwt()).map(function (response) { return response.json(); });
    };
    UserLevelService.prototype.getAll = function (offset) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__utils_index__["c" /* Constants */].API_ENDPOINT + '/user-level/offset/' + offset, this.jwt()).map(function (response) { return response.json(); });
    };
    // private helper methods
    UserLevelService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        }
    };
    UserLevelService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UserLevelService);
    return UserLevelService;
}());



/***/ })

});
//# sourceMappingURL=user_level.module.chunk.js.map