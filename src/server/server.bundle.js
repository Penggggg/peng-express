/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _Midwares = __webpack_require__(28);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = (0, _express2.default)();
	app.listen('127.0.0.1', '80', {
	    mulProcess: 2,
	    type: 'http'
	});

	app.use((0, _Midwares.BodyParser)());

	app.get('/', function (req, res) {
	    res.end('hello world');
	});

	app.get('/cat', function (req, res) {
	    res.end('cat');
	});

	app.get('/user/:name', function (req, res) {
	    res.end('user');
	});

	app.get('/a/b', function (req, res) {
	    res.end('a.b');
	});

	app.get('/animal/:name/:sex', function (req, res) {
	    res.end('animal');
	});

	app.get('/beau/girl/:name', function (req, res) {
	    res.end('beau');
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _Http = __webpack_require__(22);

	var _Http2 = _interopRequireDefault(_Http);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var express = void 0;

	exports.default = express = function express() {
	    return new App();
	};

	var App = function () {
	    function App() {
	        (0, _classCallCheck3.default)(this, App);

	        this._http = new _Http2.default();
	    }

	    (0, _createClass3.default)(App, [{
	        key: '_init',
	        value: function _init() {}
	    }, {
	        key: 'listen',
	        value: function listen(domain, port, opt) {
	            var _this = this,
	                _arguments = arguments;

	            process.nextTick(function () {
	                _this._http.listen.apply(_this._http, _arguments);
	            });
	        }
	    }, {
	        key: 'get',
	        value: function get(pathname, callback) {
	            this._http.addRoute(pathname, callback, 'GET');
	        }
	    }, {
	        key: 'post',
	        value: function post(pathname, callback) {}
	    }, {
	        key: 'use',
	        value: function use(midware) {
	            this._http.addMidware(midware);
	        }
	    }]);
	    return App;
	}();

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(4);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(5), __esModule: true };

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(6);
	var $Object = __webpack_require__(9).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(7);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(17), 'Object', {defineProperty: __webpack_require__(13).f});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(8)
	  , core      = __webpack_require__(9)
	  , ctx       = __webpack_require__(10)
	  , hide      = __webpack_require__(12)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 8 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 9 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(11);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(13)
	  , createDesc = __webpack_require__(21);
	module.exports = __webpack_require__(17) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(14)
	  , IE8_DOM_DEFINE = __webpack_require__(16)
	  , toPrimitive    = __webpack_require__(20)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(17) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(15);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(17) && !__webpack_require__(18)(function(){
	  return Object.defineProperty(__webpack_require__(19)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(18)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(15)
	  , document = __webpack_require__(8).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(15);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _http = __webpack_require__(23);

	var _http2 = _interopRequireDefault(_http);

	var _cluster = __webpack_require__(24);

	var _cluster2 = _interopRequireDefault(_cluster);

	var _os = __webpack_require__(25);

	var _os2 = _interopRequireDefault(_os);

	var _child_process = __webpack_require__(26);

	var _child_process2 = _interopRequireDefault(_child_process);

	var _Utils = __webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Http = function () {
	    function Http() {
	        (0, _classCallCheck3.default)(this, Http);

	        this.routes = [];
	        this.midwares = [];
	    }

	    (0, _createClass3.default)(Http, [{
	        key: 'addMidware',
	        value: function addMidware(midware) {
	            try {
	                if (typeof midware !== 'function') {
	                    throw "TypeError: Http addMidware";
	                } else {
	                    this.midwares.push(midware);
	                }
	            } catch (e) {
	                console.log(e);
	            }
	        }
	    }, {
	        key: 'addRoute',
	        value: function addRoute(route, cb, method) {
	            try {
	                var _params = [];
	                var __hasParams__ = /\:/.test(route);
	                if (typeof arguments[0] !== 'string' || typeof arguments[1] !== 'function') {
	                    console.log('TypeError: Http _addRoute');
	                    throw "TypeError: Http _addRoute";
	                } else {
	                    if (__hasParams__) {
	                        var _f = route.split(':');
	                        route = _f[0].slice(0, route.length - 1);
	                        for (var i = 1; i < _f.length; i++) {
	                            if (i === _f.length - 1) {
	                                _params.push(_f[i]);
	                            } else {
	                                _params.push(_f[i].substring(0, _f[i].length - 1));
	                            }
	                        }
	                    }
	                    this.routes.push({
	                        route: __hasParams__ ? route.split(':')[0].substring(0, route.length - 1) : route,
	                        cb: cb,
	                        method: method,
	                        params: _params
	                    });
	                }
	            } catch (e) {
	                console.log(e);
	            }
	        }
	    }, {
	        key: 'listen',
	        value: function listen(domain, port, opt) {
	            switch (opt.type) {
	                case 'http':
	                    this._makeHttpServer.apply(this, arguments);
	                    break;
	                default:
	                    break;
	            }
	        }
	    }, {
	        key: '_makeHttpServer',
	        value: function _makeHttpServer(domain, port, opt) {
	            var _this = this;

	            try {

	                _http2.default.createServer(function (req, res) {
	                    // 1. run the midwares
	                    _this._runMidwares(_this.midwares, req, res)();
	                    // 2. switch routes and method
	                    _this._matchRoute(_this.routes, req, res)();
	                }).listen(Number(port), domain);
	                console.log('server is listening in ' + domain + ': ' + port);
	            } catch (e) {
	                console.log('create server error');
	            }
	        }
	    }, {
	        key: '_runMidwares',
	        value: function _runMidwares(midwares, req, res) {
	            var _this2 = this;

	            return function () {
	                midwares.map(function (midware) {
	                    midware(req, res, _this2.routes);
	                });
	            };
	        }
	    }, {
	        key: '_matchRoute',
	        value: function _matchRoute(routes, req, res) {
	            return function () {
	                routes.map(function (route) {
	                    if ((0, _Utils.matchReqRoute)(route, req.path)) {
	                        route.cb(req, res);return;
	                    }
	                });
	            };
	        }
	    }]);
	    return Http;
	}();

	exports.default = Http;

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("http");

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = require("cluster");

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("os");

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("child_process");

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var matchReqRoute = exports.matchReqRoute = function matchReqRoute(route, path) {

	    var _deep = path.match(/\//g).length;
	    var _paralength = route.params.length;

	    if (_deep === 1) {
	        return path === route.route ? true : false;
	    } else if (_deep >= 2) {
	        if (_paralength === 0) {
	            return path === route.route ? true : false;
	        } else {
	            // 1. 存在 2. 强等 3. 参数个数符合
	            if (path.indexOf(route.route) === 0) {
	                var _a = path.slice(route.route.length);
	                if (_a.indexOf('/') === 0 && _a.split('/').length - 1 === _paralength) {
	                    return true;
	                }
	            }
	        }
	    }
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 *  BodyParser
	 *  parse the query in req.query
	 *  parse the path in req.path
	 *  parse the params in req.params
	 *  parse the cookies in req.cookies
	 */
	var BodyParser = exports.BodyParser = function BodyParser() {
	    return function (req, res, routes) {

	        var __hasQuery__ = /\?/g.test(req.url);
	        var __hasCookies__ = /\=/g.test(req.headers.cookie);
	        var _url = req.url;

	        // init
	        req.query = {};
	        req.params = {};
	        req.cookies = {};

	        // 0. parse the cookies
	        if (__hasCookies__) {
	            var cookies = req.headers.cookie.split(';');
	            cookies.map(function (cookie) {
	                var a = cookie.split('=');
	                req.cookies[a[0]] = a[1];
	            });
	        }

	        // 1. parse the path and query
	        if (!__hasQuery__) {
	            req.path = _url;
	        }

	        // 2. parse the path and query
	        if (__hasQuery__) {
	            var _uurl = _url.split('?');
	            req.path = _uurl[0];
	            _uurl[1].split('&').map(function (query) {
	                var _q = query.split('=');
	                req.query[_q[0]] = _q[1];
	            });
	        }

	        // 3. parse the params
	        routes.map(function (route) {
	            var _deep = req.path.match(/\//g).length;
	            var _paralength = route.params.length;

	            if (_deep > 1 && _paralength > 0) {
	                if (req.path.indexOf(route.route) === 0) {
	                    var _a = req.path.slice(route.route.length);
	                    if (_a.indexOf('/') === 0) {
	                        (function () {
	                            var _b = _a.split('/');
	                            route.params.map(function (param, index) {
	                                req.params[param] = _b[index + 1];
	                            });
	                        })();
	                    }
	                }
	            }
	        });
	        console.log(req.path);
	    };
	};

/***/ }
/******/ ]);