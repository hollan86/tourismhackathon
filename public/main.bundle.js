webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n\n<div class=\"jumbotron text-center\">\n  <div style=\"text-align:center\">\n    <h1>{{title}}</h1>\n    <!--<img width=\"30\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=\">-->\n  </div>\n\n  <form (submit)=\"onSubmit()\">\n  <div class=\"form-group\">\n    <label>What are your interests?</label>\n    <input type=\"text\" [(ngModel)]=\"budget\" name=\"budget\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n<p></p>\n<p></p>\n<!--<router-outlet></router-outlet>-->\n<app-mapcomponent [locs]=\"schedules\"></app-mapcomponent>\n\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_commservice_service__ = __webpack_require__("../../../../../src/app/services/commservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(router, commserviceService) {
        this.router = router;
        this.commserviceService = commserviceService;
        this.title = 'Discover Edinburgh!';
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    AppComponent.prototype.ngOnInit = function () {
        //this.router.navigate(['map']);
    };
    AppComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('testing');
        var userpref = {
            budget: this.budget
        };
        this.commserviceService.getBudget(userpref).subscribe(function (data) {
            // if(data.success){
            //     console.log(data);
            //
            // } else {
            //   console.log(data);
            // }
            _this.schedules = data;
            console.log(_this.budget);
            //console.log(data);
            //---------------------
            var arr = [];
            data.forEach(function (current_value) {
                var keys = Object.keys(current_value);
                for (var i = 0; i < keys.length; i++) {
                    var key = keys[i];
                    if (key == 'schedules') {
                        console.log(current_value[key][0].place.lat);
                        arr.push({
                            lat: current_value[key][0].place.lat,
                            lng: current_value[key][0].place.lng
                        });
                    }
                }
            });
            // data.forEach(function(current_value) {
            //   var keys = Object.keys(current_value);
            //   for(var i=0;i<keys.length;i++){
            //     var key = keys[i];
            //     if (key == 'schedules'){
            //       console.log(current_value[key][0]);
            //       this.schedules.push({
            //         lat: current_value[key][0].place.lat,
            //         lng: current_value[key][0].place.lng
            //       });
            //     }
            //   }
            // });
            console.log('object created');
            //console.log(arr);
            _this.schedules = arr;
            console.log(_this.schedules);
            //this.ngOnInit();
            //this.router.navigate(['map']);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_commservice_service__["a" /* CommserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_commservice_service__["a" /* CommserviceService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_commservice_service__ = __webpack_require__("../../../../../src/app/services/commservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_mapcomponent_mapcomponent_component__ = __webpack_require__("../../../../../src/app/components/mapcomponent/mapcomponent.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    { path: 'map', component: __WEBPACK_IMPORTED_MODULE_8__components_mapcomponent_mapcomponent_component__["a" /* MapcomponentComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_mapcomponent_mapcomponent_component__["a" /* MapcomponentComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyAqnwMbodqpzWtOL6Z_WOGkzn45uMfwOII'
            })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_commservice_service__["a" /* CommserviceService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/mapcomponent/mapcomponent.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/mapcomponent/mapcomponent.component.html":
/***/ (function(module, exports) {

module.exports = "<agm-map [latitude]=55.9533 [longitude]=-3.1883>\n  <agm-marker *ngFor=\"let schedule of locs\" [latitude]=\"schedule.lat\" [longitude]=\"schedule.lng\"></agm-marker>\n</agm-map>\n"

/***/ }),

/***/ "../../../../../src/app/components/mapcomponent/mapcomponent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapcomponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapcomponentComponent = (function () {
    function MapcomponentComponent() {
    }
    MapcomponentComponent.prototype.ngOnInit = function () {
        console.log('map loaded....');
        console.log(this.locs);
    };
    return MapcomponentComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], MapcomponentComponent.prototype, "locs", void 0);
MapcomponentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-mapcomponent',
        template: __webpack_require__("../../../../../src/app/components/mapcomponent/mapcomponent.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/mapcomponent/mapcomponent.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MapcomponentComponent);

//# sourceMappingURL=mapcomponent.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/commservice.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommserviceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommserviceService = (function () {
    function CommserviceService(http) {
        this.http = http;
        this.isDev = true; // Change to false before deployment
    }
    CommserviceService.prototype.getBudget = function (budget) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('datapoints/listapi');
        return this.http.post(ep, budget, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CommserviceService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/profile');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CommserviceService.prototype.prepEndpoint = function (ep) {
        if (this.isDev) {
            return ep;
        }
        else {
            return 'http://localhost:3000/' + ep;
        }
    };
    return CommserviceService;
}());
CommserviceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CommserviceService);

var _a;
//# sourceMappingURL=commservice.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map