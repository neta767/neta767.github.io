function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [ngClass]=\"{'dark-theme': isDarkTheme}\" class=\"container\">\r\n    <div class=\"mat-app-background\">\r\n        <app-top-bar (toogleDarkThemeEvent)=\"changeTheme($event)\"></app-top-bar>\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/error-dialg/error-dialg.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error-dialg/error-dialg.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppErrorDialgErrorDialgComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 mat-dialog-title>{{data}}</h1>\r\n<div mat-dialog-actions>\r\n    <button mat-button (click)=\"onOKClick()\">OK</button>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/favorites-list/favorites-list.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/favorites-list/favorites-list.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFavoritesListFavoritesListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <div *ngFor=\"let city of fav\">\r\n        <a [routerLink]=\"['/home', city.id, city.city]\">\r\n            <mat-card class=\"card-class\">\r\n                <p class=\"city-class\">{{city.city}}</p>\r\n                <p class=\"text-class\">{{city.temCelsius}}°</p>\r\n                <p class=\"text-class\">{{city.weatherText}}</p>\r\n            </mat-card>\r\n        </a>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.html":
  /*!**********************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.html ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n\r\n    <form [formGroup]=\"searchForm\">\r\n        <mat-form-field class=\"form-container\">\r\n            <input matInput placeholder=\"City\" #citySearch formControlName=\"citySearch\">\r\n            <button mat-icon-button matSuffix (click)=\"searchWeatherByName(citySearch.value)\">\r\n                <mat-icon>search</mat-icon>\r\n            </button>\r\n        </mat-form-field>\r\n    </form>\r\n\r\n    <div *ngIf=\"!hasError\" class=\"body-container\">\r\n        <div class=\"body\">\r\n            <div class=\"current-weather-container\">\r\n                <div>\r\n                    <span class=\"city-class\">{{currentWeather.city}}</span>\r\n                    <span *ngIf=\"celsius\" class=\"degree-class\">{{currentWeather.temCelsius}}°</span>\r\n                    <span *ngIf=\"!celsius\" class=\"degree-class\">{{currentWeather.temFahrenheit}}°</span>\r\n                </div>\r\n                <div class=\"text-container\">\r\n                    <span>{{currentWeather.weatherText}}</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"function-container\">\r\n                <div class=\"favorite-container\">\r\n                    <button mat-icon-button matSuffix (click)=\"updateFavoritesLise()\">\r\n                        <mat-icon *ngIf=\"!inFavList\" matTooltip=\"Add to favorites\">favorite</mat-icon>\r\n                        <mat-icon *ngIf=\"inFavList\" matTooltip=\"Remove from favorites\" color=\"warn\">favorite</mat-icon>\r\n                    </button>\r\n                </div>\r\n                <mat-button-toggle-group #group=\"matButtonToggleGroup\" value=\"c\"\r\n                    (change)=\"onUnitTemChange(group.value)\">\r\n                    <mat-button-toggle value=\"c\">\r\n                        C°\r\n                    </mat-button-toggle>\r\n                    <mat-button-toggle value=\"f\">\r\n                        F°\r\n                    </mat-button-toggle>\r\n                </mat-button-toggle-group>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"week-weather-class\">\r\n            <div *ngFor=\"let day of weekForecast\">\r\n                <mat-card>\r\n                    <p class=\"day-class\">{{day.day}}</p>\r\n                    <p *ngIf=\"celsius\" class=\"tem-class\">{{day.temCelsius}}°</p>\r\n                    <p *ngIf=\"!celsius\" class=\"tem-class\">{{day.temFahrenheit}}°</p>\r\n                </mat-card>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPageNotFoundPageNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <span class=\"text\">\r\n        Page not found :(\r\n    </span>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/top-bar/top-bar.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/top-bar/top-bar.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTopBarTopBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar>\r\n    <mat-toolbar-row>\r\n        <span class=\"space-class\">Weather</span>\r\n        <nav mat-tab-nav-bar>\r\n            <a mat-tab-link *ngFor=\"let link of navLinks\" [routerLink]=\"link.link\" routerLinkActive\r\n                #rla=\"routerLinkActive\" [active]=\"rla.isActive\">{{link.label}}\r\n            </a>\r\n        </nav>\r\n        <mat-slide-toggle [checked]=\"isDarkTheme\" (change)=\"toggleDarkTheme($event.checked)\"></mat-slide-toggle>\r\n    </mat-toolbar-row>\r\n</mat-toolbar>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: appRouting, AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appRouting", function () {
      return appRouting;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home */
    "./src/app/home/home.ts");
    /* harmony import */


    var _favorites_list_favorites_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./favorites-list/favorites-list.component */
    "./src/app/favorites-list/favorites-list.component.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }, {
      path: 'home',
      component: _home_home__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: 'home/:id/:name',
      component: _home_home__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: 'favorites',
      component: _favorites_list_favorites_list_component__WEBPACK_IMPORTED_MODULE_5__["FavoritesListComponent"]
    }, {
      path: '**',
      component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"]
    }];

    var appRouting = _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes);

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
      declarations: []
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxrbGlcXG5ldGEta2xlbWFuLTEtMS0yMFxcd2VhdGhlci1hcHAvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ1EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgICAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9IiwiLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'weather-app';
      }

      _createClass(AppComponent, [{
        key: "changeTheme",
        value: function changeTheme(theme) {
          this.isDarkTheme = theme;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _favorites_list_favorites_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./favorites-list/favorites-list.component */
    "./src/app/favorites-list/favorites-list.component.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _home_home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home */
    "./src/app/home/home.ts");
    /* harmony import */


    var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./top-bar/top-bar.component */
    "./src/app/top-bar/top-bar.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/esm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/esm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _store_fav_reducer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./store/fav.reducer */
    "./src/app/store/fav.reducer.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _error_dialg_error_dialg_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./error-dialg/error-dialg.component */
    "./src/app/error-dialg/error-dialg.component.ts"); //components
    //modules
    //material
    //store


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _favorites_list_favorites_list_component__WEBPACK_IMPORTED_MODULE_4__["FavoritesListComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"], _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_7__["TopBarComponent"], _error_dialg_error_dialg_component__WEBPACK_IMPORTED_MODULE_25__["ErrorDialg"]],
      entryComponents: [_error_dialg_error_dialg_component__WEBPACK_IMPORTED_MODULE_25__["ErrorDialg"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ReactiveFormsModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__["MatButtonToggleModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_24__["StoreModule"].forRoot({
        fav: _store_fav_reducer__WEBPACK_IMPORTED_MODULE_20__["favReducer"]
      })],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/error-dialg/error-dialg.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/error-dialg/error-dialg.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppErrorDialgErrorDialgComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "::ng-deep.mat-dialog-actions {\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3ItZGlhbGcvQzpcXFVzZXJzXFxrbGlcXG5ldGEta2xlbWFuLTEtMS0yMFxcd2VhdGhlci1hcHAvc3JjXFxhcHBcXGVycm9yLWRpYWxnXFxlcnJvci1kaWFsZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZXJyb3ItZGlhbGcvZXJyb3ItZGlhbGcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZXJyb3ItZGlhbGcvZXJyb3ItZGlhbGcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAubWF0LWRpYWxvZy1hY3Rpb25ze1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn0iLCI6Om5nLWRlZXAubWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/error-dialg/error-dialg.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/error-dialg/error-dialg.component.ts ***!
    \******************************************************/

  /*! exports provided: ErrorDialg */

  /***/
  function srcAppErrorDialgErrorDialgComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorDialg", function () {
      return ErrorDialg;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    var ErrorDialg =
    /*#__PURE__*/
    function () {
      function ErrorDialg(dialogRef, data) {
        _classCallCheck(this, ErrorDialg);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(ErrorDialg, [{
        key: "onOKClick",
        value: function onOKClick() {
          this.dialogRef.close();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ErrorDialg;
    }();

    ErrorDialg.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    ErrorDialg = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-error-dialg',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./error-dialg.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/error-dialg/error-dialg.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./error-dialg.component.scss */
      "./src/app/error-dialg/error-dialg.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], ErrorDialg);
    /***/
  },

  /***/
  "./src/app/favorites-list/favorites-list.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/favorites-list/favorites-list.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFavoritesListFavoritesListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  display: flex;\n  flex-direction: row;\n  height: 100vh;\n  flex-wrap: wrap;\n}\n\na {\n  text-decoration: none;\n}\n\nmat-card {\n  margin: 0.5em;\n}\n\n.city-class {\n  font-size: 20px;\n  font-weight: bold;\n  text-align: center;\n}\n\n.text-class {\n  font-size: 20px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmF2b3JpdGVzLWxpc3QvQzpcXFVzZXJzXFxrbGlcXG5ldGEta2xlbWFuLTEtMS0yMFxcd2VhdGhlci1hcHAvc3JjXFxhcHBcXGZhdm9yaXRlcy1saXN0XFxmYXZvcml0ZXMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmF2b3JpdGVzLWxpc3QvZmF2b3JpdGVzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDQyxlQUFBO0VBQ0Esa0JBQUE7QUNDRCIsImZpbGUiOiJzcmMvYXBwL2Zhdm9yaXRlcy1saXN0L2Zhdm9yaXRlcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gICAgbWFyZ2luOiAwLjVlbTtcclxufVxyXG5cclxuLmNpdHktY2xhc3N7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgfVxyXG5cclxuLnRleHQtY2xhc3N7XHJcbiBmb250LXNpemU6IDIwcHg7XHJcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iLCIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5tYXQtY2FyZCB7XG4gIG1hcmdpbjogMC41ZW07XG59XG5cbi5jaXR5LWNsYXNzIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGV4dC1jbGFzcyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/favorites-list/favorites-list.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/favorites-list/favorites-list.component.ts ***!
    \************************************************************/

  /*! exports provided: FavoritesListComponent */

  /***/
  function srcAppFavoritesListFavoritesListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoritesListComponent", function () {
      return FavoritesListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");

    var FavoritesListComponent =
    /*#__PURE__*/
    function () {
      function FavoritesListComponent(store) {
        _classCallCheck(this, FavoritesListComponent);

        this.store = store;
        this.fav = [];
        var obj;
        this.store.select(function (el) {
          return obj = el;
        }).subscribe();
        this.fav = obj.fav.fav;
      }

      _createClass(FavoritesListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FavoritesListComponent;
    }();

    FavoritesListComponent.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }];
    };

    FavoritesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-favorites-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./favorites-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/favorites-list/favorites-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./favorites-list.component.scss */
      "./src/app/favorites-list/favorites-list.component.scss")).default]
    })], FavoritesListComponent);
    /***/
  },

  /***/
  "./src/app/home/home.scss":
  /*!********************************!*\
    !*** ./src/app/home/home.scss ***!
    \********************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n.form-container {\n  max-width: 250px;\n  margin-top: 1em;\n  margin-left: 1em;\n}\n\n.body-container {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.body {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: row;\n}\n\n.current-weather-container {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  justify-content: center;\n  align-items: center;\n}\n\n.city-class {\n  font-size: 20px;\n  margin-right: 1em;\n}\n\n.degree-class {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.text-container {\n  text-align: center;\n  color: gray;\n  font-size: 40px;\n  margin: 0.5em;\n}\n\n.function-container {\n  margin-right: 1em;\n}\n\n.favorite-container {\n  display: flex;\n  justify-content: center;\n}\n\n.week-weather-class {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  flex-grow: 1;\n  flex-wrap: wrap;\n}\n\n.day-class {\n  font-size: 20px;\n  font-weight: bold;\n  text-align: center;\n}\n\n.tem-class {\n  font-size: 20px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGtsaVxcbmV0YS1rbGVtYW4tMS0xLTIwXFx3ZWF0aGVyLWFwcC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNHLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDQUw7O0FER0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREdDO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDRCxzQkFBQTtBQ0FEOztBREdDO0VBQ0MsWUFBQTtFQUNJLGFBQUE7RUFDRCxtQkFBQTtBQ0FMOztBREdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ0FGOztBREdDO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0FMOztBREdDO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURHQztFQUNDLGVBQUE7RUFDQSxrQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgXHJcbiAgLmNvbnRhaW5lcntcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuIH1cclxuXHJcbiAuYm9keS1jb250YWluZXJ7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gfVxyXG5cclxuIC5ib2R5e1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uY3VycmVudC13ZWF0aGVyLWNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jaXR5LWNsYXNze1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxufVxyXG5cclxuLmRlZ3JlZS1jbGFzc3tcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50ZXh0LWNvbnRhaW5lcntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgZm9udC1zaXplOjQwcHggO1xyXG4gIG1hcmdpbjogMC41ZW07XHJcbn1cclxuXHJcbi5mdW5jdGlvbi1jb250YWluZXJ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbn1cclxuXHJcbi5mYXZvcml0ZS1jb250YWluZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuIC53ZWVrLXdlYXRoZXItY2xhc3N7XHJcbiAgICAgZGlzcGxheTogZmxleDtcclxuICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiB9XHJcblxyXG4gLmRheS1jbGFzc3tcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG5cclxuIC50ZW0tY2xhc3N7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH0iLCIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5mb3JtLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMjUwcHg7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbn1cblxuLmJvZHktY29udGFpbmVyIHtcbiAgZmxleC1ncm93OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYm9keSB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmN1cnJlbnQtd2VhdGhlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWdyb3c6IDE7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2l0eS1jbGFzcyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG5cbi5kZWdyZWUtY2xhc3Mge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGV4dC1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDQwcHg7XG4gIG1hcmdpbjogMC41ZW07XG59XG5cbi5mdW5jdGlvbi1jb250YWluZXIge1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cblxuLmZhdm9yaXRlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ud2Vlay13ZWF0aGVyLWNsYXNzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uZGF5LWNsYXNzIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGVtLWNsYXNzIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/home.ts":
  /*!******************************!*\
    !*** ./src/app/home/home.ts ***!
    \******************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../rest.service */
    "./src/app/rest.service.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _store_fav_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../store/fav.actions */
    "./src/app/store/fav.actions.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _error_dialg_error_dialg_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../error-dialg/error-dialg.component */
    "./src/app/error-dialg/error-dialg.component.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(rest, route, store, formBuilder, dialog) {
        _classCallCheck(this, HomeComponent);

        this.rest = rest;
        this.route = route;
        this.store = store;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.hasError = true;
        this.metric = 'true';
        this.celsius = true;
        this.inFavList = false;
        this.currentWeather = {
          id: '',
          city: '',
          weatherText: '',
          temCelsius: '',
          temFahrenheit: ''
        };
        this.emptyForecast = {
          day: '',
          temCelsius: '',
          temFahrenheit: ''
        };
        this.weekForecast = [this.emptyForecast, this.emptyForecast, this.emptyForecast, this.emptyForecast, this.emptyForecast];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.searchForm = this.formBuilder.group({
            citySearch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[a-zA-Z \-\']+')]
          });

          if (this.route.snapshot.paramMap.get('id') != null && this.route.snapshot.paramMap.get('name') != null) {
            //update city info
            this.updateInfo(this.route.snapshot.paramMap.get('id'), this.route.snapshot.paramMap.get('name'));
          } else {
            //get loaction by coords
            navigator.geolocation.getCurrentPosition(function (success) {
              _this.rest.getGeopositionByCoords(success.coords.latitude.toString() + ',' + success.coords.longitude.toString()).subscribe(function (res) {
                _this.updateInfo(res.Key, res.LocalizedName);
              }, function (error) {
                return _this.showError(error);
              });
            });
          }
        }
      }, {
        key: "updateInfo",
        value: function updateInfo(locationKey, name) {
          var _this2 = this;

          //get current weather in locationKey
          this.rest.getCurrentConditions(locationKey.toString()).subscribe(function (res) {
            _this2.currentWeather = {
              city: name,
              id: locationKey,
              temCelsius: res[0].Temperature.Metric.Value,
              temFahrenheit: res[0].Temperature.Imperial.Value,
              weatherText: res[0].WeatherText
            };
          }, function (error) {
            return _this2.showError(error);
          }); //get 5 Days Forecasts in celsius

          this.rest.getForecasts(locationKey, 'true').subscribe(function (res) {
            for (var index = 0; index < 5; index++) {
              _this2.weekForecast[index] = {
                day: _this2.getDayInWeek(new Date(res.DailyForecasts[index].Date).getDay()),
                temCelsius: res.DailyForecasts[index].Temperature.Maximum.Value
              };
            }
          }, function (error) {
            return _this2.showError(error);
          }); //get 5 Days Forecasts in fahrenheit

          this.rest.getForecasts(locationKey, 'false').subscribe(function (res) {
            for (var index = 0; index < 5; index++) {
              _this2.weekForecast[index].temFahrenheit = res.DailyForecasts[index].Temperature.Maximum.Value;
              _this2.weekForecast[index].day = _this2.weekForecast[index].day;
              _this2.weekForecast[index].temCelsius = _this2.weekForecast[index].temCelsius;
            }

            _this2.isOnTheFavoritesLise();

            _this2.hasError = false;
          }, function (error) {
            return _this2.showError(error);
          });
        }
      }, {
        key: "getDayInWeek",
        value: function getDayInWeek(num) {
          var dayNames = {
            0: 'Sunday',
            1: 'Monday',
            2: 'Tuesday',
            3: 'Wednesday',
            4: 'Thursday',
            5: 'Friday',
            6: 'Saturday'
          };
          return dayNames[num];
          ;
        }
      }, {
        key: "onUnitTemChange",
        value: function onUnitTemChange(temUnit) {
          temUnit === 'c' ? this.celsius = true : this.celsius = false;
        }
      }, {
        key: "searchWeatherByName",
        value: function searchWeatherByName(cityName) {
          var _this3 = this;

          if (this.searchForm.invalid) {
            this.showError('Search is valid only in english');
            return;
          }

          this.rest.getAutocomplete(cityName).subscribe(function (res) {
            //update city info
            _this3.updateInfo(res[0].Key, res[0].LocalizedName);
          }, function (error) {
            return _this3.showError(error);
          });
        }
      }, {
        key: "isOnTheFavoritesLise",
        value: function isOnTheFavoritesLise() {
          var _this4 = this;

          setTimeout(function () {
            var obj;

            _this4.store.select(function (x) {
              return obj = x;
            }).subscribe();

            _this4.inFavList = obj.fav.fav.some(function (el) {
              return el.id === _this4.currentWeather.id;
            });
          }, 0);
        }
      }, {
        key: "updateFavoritesLise",
        value: function updateFavoritesLise() {
          if (!this.inFavList) {
            this.store.dispatch(new _store_fav_actions__WEBPACK_IMPORTED_MODULE_4__["AddToFav"](this.currentWeather));
          } else {
            this.store.dispatch(new _store_fav_actions__WEBPACK_IMPORTED_MODULE_4__["RemoveFromFav"](this.currentWeather));
          }

          this.inFavList = !this.inFavList;
        }
      }, {
        key: "showError",
        value: function showError(error) {
          this.hasError = true;

          if (this.dialog.openDialogs.length == 0) {
            this.dialog.open(_error_dialg_error_dialg_component__WEBPACK_IMPORTED_MODULE_8__["ErrorDialg"], {
              width: '250px',
              data: error
            });
          }
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.scss */
      "./src/app/home/home.scss")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/page-not-found/page-not-found.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPageNotFoundPageNotFoundComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  display: flex;\n  min-height: 100vh;\n}\n\n.text {\n  display: flex;\n  flex-grow: 1;\n  color: gray;\n  font-size: 35px;\n  font-weight: bold;\n  justify-content: center;\n  margin-top: 3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvQzpcXFVzZXJzXFxrbGlcXG5ldGEta2xlbWFuLTEtMS0yMFxcd2VhdGhlci1hcHAvc3JjXFxhcHBcXHBhZ2Utbm90LWZvdW5kXFxwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0MsaUJBQUE7QUNDTDs7QURFQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDRixpQkFBQTtFQUNBLHVCQUFBO0VBQ0UsZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLnRleHR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAzZW07XHJcbn0iLCIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi50ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxO1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDNlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/page-not-found/page-not-found.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.ts ***!
    \************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PageNotFoundComponent =
    /*#__PURE__*/
    function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page-not-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page-not-found.component.scss */
      "./src/app/page-not-found/page-not-found.component.scss")).default]
    })], PageNotFoundComponent);
    /***/
  },

  /***/
  "./src/app/rest.service.ts":
  /*!*********************************!*\
    !*** ./src/app/rest.service.ts ***!
    \*********************************/

  /*! exports provided: RestService */

  /***/
  function srcAppRestServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RestService", function () {
      return RestService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var RestService =
    /*#__PURE__*/
    function () {
      function RestService(http) {
        _classCallCheck(this, RestService);

        this.http = http;
        this.url = 'https://dataservice.accuweather.com/';
        this.apiKey = 'p6LxgnGQ6hvcznFR5xsGzELOF3L3mysb';
      } // Handle API errors


      _createClass(RestService, [{
        key: "handleError",
        value: function handleError(error) {
          if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code ".concat(error.status, ", ") + "body was: ".concat(error.error));
          } // return an observable with a user-facing error message


          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
        }
      }, {
        key: "getAutocomplete",
        value: function getAutocomplete(city) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('apikey', this.apiKey).set('q', city);
          return this.http.get("".concat(this.url, "locations/v1/cities/autocomplete"), {
            params: params
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), // retry a failed request up to 1 times
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError) // then handle the error    
          );
        }
      }, {
        key: "getCurrentConditions",
        value: function getCurrentConditions(locationKey) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('apikey', this.apiKey);
          return this.http.get("".concat(this.url, "currentconditions/v1/").concat(locationKey), {
            params: params
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), // retry a failed request up to 1 times
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError) // then handle the error    
          );
        }
      }, {
        key: "getForecasts",
        value: function getForecasts(locationKey, metric) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('apikey', this.apiKey).set('metric', metric);
          return this.http.get("".concat(this.url, "forecasts/v1/daily/5day/").concat(locationKey), {
            params: params
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), // retry a failed request up to 1 times
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError) // then handle the error    
          );
        }
      }, {
        key: "getGeopositionByCoords",
        value: function getGeopositionByCoords(coords) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('apikey', this.apiKey).set('q', coords);
          return this.http.get("".concat(this.url, "locations/v1/cities/geoposition/search"), {
            params: params
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), // retry a failed request up to 1 times
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError) // then handle the error    
          );
        }
      }]);

      return RestService;
    }();

    RestService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    RestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], RestService);
    /***/
  },

  /***/
  "./src/app/store/fav.actions.ts":
  /*!**************************************!*\
    !*** ./src/app/store/fav.actions.ts ***!
    \**************************************/

  /*! exports provided: ActionTypes, AddToFav, RemoveFromFav */

  /***/
  function srcAppStoreFavActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionTypes", function () {
      return ActionTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddToFav", function () {
      return AddToFav;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RemoveFromFav", function () {
      return RemoveFromFav;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ActionTypes;

    (function (ActionTypes) {
      ActionTypes["Add"] = "[Product] Add to fav";
      ActionTypes["Remove"] = "[Product] Remove from fav";
      ActionTypes["LoadFavs"] = "[Products] Load list of fav";
    })(ActionTypes || (ActionTypes = {}));

    var AddToFav = function AddToFav(payload) {
      _classCallCheck(this, AddToFav);

      this.payload = payload;
      this.type = ActionTypes.Add;
    };

    var RemoveFromFav = function RemoveFromFav(payload) {
      _classCallCheck(this, RemoveFromFav);

      this.payload = payload;
      this.type = ActionTypes.Remove;
    };
    /***/

  },

  /***/
  "./src/app/store/fav.reducer.ts":
  /*!**************************************!*\
    !*** ./src/app/store/fav.reducer.ts ***!
    \**************************************/

  /*! exports provided: initialState, favReducer */

  /***/
  function srcAppStoreFavReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "favReducer", function () {
      return favReducer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _fav_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./fav.actions */
    "./src/app/store/fav.actions.ts");

    var initialState = {
      fav: []
    };

    function favReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _fav_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].Add:
          return Object.assign({}, state, {
            fav: [].concat(_toConsumableArray(state.fav), [action.payload])
          });

        case _fav_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].Remove:
          return Object.assign({}, state, {
            fav: _toConsumableArray(state.fav.filter(function (item) {
              return item.id !== action.payload.id;
            }))
          });

        default:
          return state;
      }
    }
    /***/

  },

  /***/
  "./src/app/top-bar/top-bar.component.scss":
  /*!************************************************!*\
    !*** ./src/app/top-bar/top-bar.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTopBarTopBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".space-class {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wLWJhci9DOlxcVXNlcnNcXGtsaVxcbmV0YS1rbGVtYW4tMS0xLTIwXFx3ZWF0aGVyLWFwcC9zcmNcXGFwcFxcdG9wLWJhclxcdG9wLWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdG9wLWJhci90b3AtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdG9wLWJhci90b3AtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNlLWNsYXNze1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbn0iLCIuc3BhY2UtY2xhc3Mge1xuICBmbGV4OiAxIDEgYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/top-bar/top-bar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/top-bar/top-bar.component.ts ***!
    \**********************************************/

  /*! exports provided: TopBarComponent */

  /***/
  function srcAppTopBarTopBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopBarComponent", function () {
      return TopBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var TopBarComponent =
    /*#__PURE__*/
    function () {
      function TopBarComponent(router) {
        _classCallCheck(this, TopBarComponent);

        this.router = router;
        this.toogleDarkThemeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.activeLinkIndex = -1;
        this.navLinks = [{
          label: 'Home',
          link: './home',
          index: 0
        }, {
          label: 'Favorites',
          link: './favorites',
          index: 1
        }];
      }

      _createClass(TopBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.router.events.subscribe(function (res) {
            _this5.activeLinkIndex = _this5.navLinks.indexOf(_this5.navLinks.find(function (tab) {
              return tab.link === '.' + _this5.router.url;
            }));
          });
        }
      }, {
        key: "toggleDarkTheme",
        value: function toggleDarkTheme(checked) {
          this.toogleDarkThemeEvent.emit(checked);
        }
      }]);

      return TopBarComponent;
    }();

    TopBarComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], TopBarComponent.prototype, "toogleDarkThemeEvent", void 0);
    TopBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-top-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./top-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/top-bar/top-bar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./top-bar.component.scss */
      "./src/app/top-bar/top-bar.component.scss")).default]
    })], TopBarComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\kli\neta-kleman-1-1-20\weather-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map