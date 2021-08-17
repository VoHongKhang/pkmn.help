/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/ 		var prefetchChunks = data[3] || [];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		// chunk prefetching for javascript
/******/ 		prefetchChunks.forEach(function(chunkId) {
/******/ 			if(installedChunks[chunkId] === undefined) {
/******/ 				installedChunks[chunkId] = null;
/******/ 				var link = document.createElement('link');
/******/
/******/ 				if (__webpack_require__.nc) {
/******/ 					link.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				link.rel = "prefetch";
/******/ 				link.as = "script";
/******/ 				link.href = jsonpScriptSrc(chunkId);
/******/ 				document.head.appendChild(link);
/******/ 			}
/******/ 		});
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"0":"big-pkmn"}[chunkId]||chunkId) + ".chunk.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/pkmn.help/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	var startupResult = (function() {
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ 	})();
/******/
/******/ 	webpackJsonpCallback([[], {}, 0, [0]]);
/******/ 	return startupResult;
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(16);
} else {}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return typesFromString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return typesOrNoneFromString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return types; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return typesOrNone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return stringToType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Effectiveness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return objectToCoverageType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return matchupFor; });
/* unused harmony export Matchup */
/* unused harmony export GroupedMatchups */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return offensiveMatchups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return defensiveMatchups; });
/* harmony import */ var fastest_levenshtein__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var fastest_levenshtein__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fastest_levenshtein__WEBPACK_IMPORTED_MODULE_0__);

var Type;
(function (Type) {
    Type["NORMAL"] = "normal";
    Type["FIGHTING"] = "fighting";
    Type["FLYING"] = "flying";
    Type["POISON"] = "poison";
    Type["GROUND"] = "ground";
    Type["ROCK"] = "rock";
    Type["BUG"] = "bug";
    Type["GHOST"] = "ghost";
    Type["STEEL"] = "steel";
    Type["FIRE"] = "fire";
    Type["WATER"] = "water";
    Type["GRASS"] = "grass";
    Type["ELECTRIC"] = "electric";
    Type["PSYCHIC"] = "psychic";
    Type["ICE"] = "ice";
    Type["DRAGON"] = "dragon";
    Type["DARK"] = "dark";
    Type["FAIRY"] = "fairy";
    Type["NONE"] = "none";
})(Type || (Type = {}));
function isType(str) {
    return types.some((t) => t === str);
}
function typesFromString(str) {
    return str.split(/\s+/).filter(isType);
}
function isTypeOrNone(str) {
    return typesOrNone.some((t) => t === str);
}
function typesOrNoneFromString(str) {
    return str.split(/\s+/).filter(isTypeOrNone);
}
const types = [
    Type.NORMAL,
    Type.FIGHTING,
    Type.FLYING,
    Type.POISON,
    Type.GROUND,
    Type.ROCK,
    Type.BUG,
    Type.GHOST,
    Type.STEEL,
    Type.FIRE,
    Type.WATER,
    Type.GRASS,
    Type.ELECTRIC,
    Type.PSYCHIC,
    Type.ICE,
    Type.DRAGON,
    Type.DARK,
    Type.FAIRY,
];
const typesOrNone = [...types, Type.NONE];
function stringToType(string, fallback) {
    string = string.toLowerCase().replace(/[^a-z]/, "");
    if (string === "") {
        return fallback;
    }
    return Object(fastest_levenshtein__WEBPACK_IMPORTED_MODULE_0__["closest"])(string, typesOrNone);
}
var Effectiveness;
(function (Effectiveness) {
    Effectiveness[Effectiveness["QUADRUPLE"] = 4] = "QUADRUPLE";
    Effectiveness[Effectiveness["DOUBLE"] = 2] = "DOUBLE";
    Effectiveness[Effectiveness["REGULAR"] = 1] = "REGULAR";
    Effectiveness[Effectiveness["HALF"] = 0.5] = "HALF";
    Effectiveness[Effectiveness["QUARTER"] = 0.25] = "QUARTER";
    Effectiveness[Effectiveness["ZERO"] = 0] = "ZERO";
})(Effectiveness || (Effectiveness = {}));
const rawData = [
    [1, 1, 1, 1, 1, 0.5, 1, 0, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 1, 0.5, 0.5, 1, 2, 0.5, 0, 2, 1, 1, 1, 1, 0.5, 2, 1, 2, 0.5],
    [1, 2, 1, 1, 1, 0.5, 2, 1, 0.5, 1, 1, 2, 0.5, 1, 1, 1, 1, 1],
    [1, 1, 1, 0.5, 0.5, 0.5, 1, 0.5, 0, 1, 1, 2, 1, 1, 1, 1, 1, 2],
    [1, 1, 0, 2, 1, 2, 0.5, 1, 2, 2, 1, 0.5, 2, 1, 1, 1, 1, 1],
    [1, 0.5, 2, 1, 0.5, 1, 2, 1, 0.5, 2, 1, 1, 1, 1, 2, 1, 1, 1],
    [1, 0.5, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 0.5, 1, 2, 1, 2, 1, 1, 2, 0.5],
    [0, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 0.5, 1],
    [1, 1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 0.5, 1, 0.5, 1, 2, 1, 1, 2],
    [1, 1, 1, 1, 1, 0.5, 2, 1, 2, 0.5, 0.5, 2, 1, 1, 2, 0.5, 1, 1],
    [1, 1, 1, 1, 2, 2, 1, 1, 1, 2, 0.5, 0.5, 1, 1, 1, 0.5, 1, 1],
    [1, 1, 0.5, 0.5, 2, 2, 0.5, 1, 0.5, 0.5, 2, 0.5, 1, 1, 1, 0.5, 1, 1],
    [1, 1, 2, 1, 0, 1, 1, 1, 1, 1, 2, 0.5, 0.5, 1, 1, 0.5, 1, 1],
    [1, 2, 1, 2, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 0.5, 1, 1, 0, 1],
    [1, 1, 2, 1, 2, 1, 1, 1, 0.5, 0.5, 0.5, 2, 1, 1, 0.5, 2, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 2, 1, 0],
    [1, 0.5, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 0.5, 0.5],
    [1, 2, 1, 0.5, 1, 1, 1, 1, 0.5, 0.5, 1, 1, 1, 1, 1, 2, 2, 1],
];
function keyForTypes(t1, t2) {
    return t1 + " ~ " + t2;
}
function objectToCoverageType(obj) {
    const ct = obj;
    return {
        number: ct.number || "",
        name: ct.name || "",
        type1: stringToType(ct.type1 || "", Type.NORMAL),
        type2: stringToType(ct.type2 || "", Type.NONE),
    };
}
const pairs = rawData.flatMap((row, i) => {
    return row.map((data, j) => {
        return [keyForTypes(types[i], types[j]), data];
    });
});
const table = Object.fromEntries(pairs);
function matchupFor(ta1, ta2, tb) {
    const x1 = table[keyForTypes(tb, ta1)];
    // Don't allow bogus type combinations, such as Fire/Fire or Fire/None
    const x2 = ta1 !== ta2 && ta2 !== Type.NONE ? table[keyForTypes(tb, ta2)] : 1;
    const x3 = x1 * x2;
    if (x3 === 4) {
        return Effectiveness.QUADRUPLE;
    }
    if (x3 === 2) {
        return Effectiveness.DOUBLE;
    }
    if (x3 === 1) {
        return Effectiveness.REGULAR;
    }
    if (x3 === 0.5) {
        return Effectiveness.HALF;
    }
    if (x3 === 0.25) {
        return Effectiveness.QUARTER;
    }
    if (x3 === 0) {
        return Effectiveness.ZERO;
    }
    throw new Error();
}
class Matchup {
    constructor(type, effectiveness) {
        this.type = type;
        this.effectiveness = effectiveness;
    }
}
class GroupedMatchups {
    constructor(matchups) {
        this.matchups = matchups;
    }
    typesFor(effectivenes) {
        return this.matchups
            .filter((m) => m.effectiveness === effectivenes)
            .map((m) => m.type);
    }
}
function offensiveMatchups(offenseTypes) {
    const matchups = types.map((t) => {
        if (offenseTypes.length === 0) {
            return new Matchup(t, Effectiveness.REGULAR);
        }
        const effs = offenseTypes.map((offense) => {
            return matchupFor(t, Type.NONE, offense);
        });
        const max = Math.max(...effs);
        return new Matchup(t, max);
    });
    return new GroupedMatchups(matchups);
}
function defensiveMatchups(t1, t2) {
    const matchups = types.map((t) => {
        const eff = matchupFor(t1, t2, t);
        return new Matchup(t, eff);
    });
    return new GroupedMatchups(matchups);
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(20)();
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const peq = new Uint32Array(0x10000);
const myers_32 = (a, b) => {
  const n = a.length;
  const m = b.length;
  const lst = 1 << (n - 1);
  let pv = -1;
  let mv = 0;
  let sc = n;
  let i = n;
  while (i--) {
    peq[a.charCodeAt(i)] |= 1 << i;
  }
  for (i = 0; i < m; i++) {
    let eq = peq[b.charCodeAt(i)];
    const xv = eq | mv;
    eq |= ((eq & pv) + pv) ^ pv;
    mv |= ~(eq | pv);
    pv &= eq;
    if (mv & lst) {
      sc++;
    }
    if (pv & lst) {
      sc--;
    }
    mv = (mv << 1) | 1;
    pv = (pv << 1) | ~(xv | mv);
    mv &= xv;
  }
  i = n;
  while (i--) {
    peq[a.charCodeAt(i)] = 0;
  }
  return sc;
};

const myers_x = (a, b) => {
  const n = a.length;
  const m = b.length;
  const mhc = [];
  const phc = [];
  const hsize = Math.ceil(n / 32);
  const vsize = Math.ceil(m / 32);
  let score = m;
  for (let i = 0; i < hsize; i++) {
    phc[i] = -1;
    mhc[i] = 0;
  }
  let j = 0;
  for (; j < vsize - 1; j++) {
    let mv = 0;
    let pv = -1;
    const start = j * 32;
    const end = Math.min(32, m) + start;
    for (let k = start; k < end; k++) {
      peq[b.charCodeAt(k)] |= 1 << k;
    }
    score = m;
    for (let i = 0; i < n; i++) {
      const eq = peq[a.charCodeAt(i)];
      const pb = (phc[(i / 32) | 0] >>> i) & 1;
      const mb = (mhc[(i / 32) | 0] >>> i) & 1;
      const xv = eq | mv;
      const xh = ((((eq | mb) & pv) + pv) ^ pv) | eq | mb;
      let ph = mv | ~(xh | pv);
      let mh = pv & xh;
      if ((ph >>> 31) ^ pb) {
        phc[(i / 32) | 0] ^= 1 << i;
      }
      if ((mh >>> 31) ^ mb) {
        mhc[(i / 32) | 0] ^= 1 << i;
      }
      ph = (ph << 1) | pb;
      mh = (mh << 1) | mb;
      pv = mh | ~(xv | ph);
      mv = ph & xv;
    }
    for (let k = start; k < end; k++) {
      peq[b.charCodeAt(k)] = 0;
    }
  }
  let mv = 0;
  let pv = -1;
  const start = j * 32;
  const end = Math.min(32, m - start) + start;
  for (let k = start; k < end; k++) {
    peq[b.charCodeAt(k)] |= 1 << k;
  }
  score = m;
  for (let i = 0; i < n; i++) {
    const eq = peq[a.charCodeAt(i)];
    const pb = (phc[(i / 32) | 0] >>> i) & 1;
    const mb = (mhc[(i / 32) | 0] >>> i) & 1;
    const xv = eq | mv;
    const xh = ((((eq | mb) & pv) + pv) ^ pv) | eq | mb;
    let ph = mv | ~(xh | pv);
    let mh = pv & xh;
    score += (ph >>> (m - 1)) & 1;
    score -= (mh >>> (m - 1)) & 1;
    if ((ph >>> 31) ^ pb) {
      phc[(i / 32) | 0] ^= 1 << i;
    }
    if ((mh >>> 31) ^ mb) {
      mhc[(i / 32) | 0] ^= 1 << i;
    }
    ph = (ph << 1) | pb;
    mh = (mh << 1) | mb;
    pv = mh | ~(xv | ph);
    mv = ph & xv;
  }
  for (let k = start; k < end; k++) {
    peq[b.charCodeAt(k)] = 0;
  }
  return score;
};

const distance = (a, b) => {
  if (a.length > b.length) {
    const tmp = b;
    b = a;
    a = tmp;
  }
  if (a.length === 0) {
    return b.length;
  }
  if (a.length <= 32) {
    return myers_32(a, b);
  }
  return myers_x(a, b);
};

const closest = (str, arr) => {
  let min_distance = Infinity;
  let min_index = 0;
  for (let i = 0; i < arr.length; i++) {
    const dist = distance(str, arr[i]);
    if (dist < min_distance) {
      min_distance = dist;
      min_index = i;
    }
  }
  return arr[min_index];
};

module.exports = {
  closest, distance
}


/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);





var MAX_SIGNED_31_BIT_INT = 1073741823;
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};

function getUniqueId() {
  var key = '__global_unique_id__';
  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
}

function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + getUniqueId() + '__';

  var Provider = /*#__PURE__*/function (_Component) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Provider, _Component);

    function Provider() {
      var _this;

      _this = _Component.apply(this, arguments) || this;
      _this.emitter = createEventEmitter(_this.props.value);
      return _this;
    }

    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0;
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

          if (false) {}

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    _proto.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired, _Provider$childContex);

  var Consumer = /*#__PURE__*/function (_Component2) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Consumer, _Component2);

    function Consumer() {
      var _this2;

      _this2 = _Component2.apply(this, arguments) || this;
      _this2.state = {
        value: _this2.getValue()
      };

      _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;

        if ((observedBits & changedBits) !== 0) {
          _this2.setState({
            value: _this2.getValue()
          });
        }
      };

      return _this2;
    }

    var _proto2 = Consumer.prototype;

    _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }

      var observedBits = this.props.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    _proto2.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    _proto2.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object, _Consumer$contextType);
  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

var index = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext || createReactContext;

/* harmony default export */ __webpack_exports__["a"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(22)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var isarray = __webpack_require__(23)

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options))
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* @license
Papa Parse
v5.3.1
https://github.com/mholt/PapaParse
License: MIT
*/
!function(e,t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function s(){"use strict";var f="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==f?f:{};var n=!f.document&&!!f.postMessage,o=n&&/blob:/i.test((f.location||{}).protocol),a={},h=0,b={parse:function(e,t){var i=(t=t||{}).dynamicTyping||!1;M(i)&&(t.dynamicTypingFunction=i,i={});if(t.dynamicTyping=i,t.transform=!!M(t.transform)&&t.transform,t.worker&&b.WORKERS_SUPPORTED){var r=function(){if(!b.WORKERS_SUPPORTED)return!1;var e=(i=f.URL||f.webkitURL||null,r=s.toString(),b.BLOB_URL||(b.BLOB_URL=i.createObjectURL(new Blob(["(",r,")();"],{type:"text/javascript"})))),t=new f.Worker(e);var i,r;return t.onmessage=_,t.id=h++,a[t.id]=t}();return r.userStep=t.step,r.userChunk=t.chunk,r.userComplete=t.complete,r.userError=t.error,t.step=M(t.step),t.chunk=M(t.chunk),t.complete=M(t.complete),t.error=M(t.error),delete t.worker,void r.postMessage({input:e,config:t,workerId:r.id})}var n=null;b.NODE_STREAM_INPUT,"string"==typeof e?n=t.download?new l(t):new p(t):!0===e.readable&&M(e.read)&&M(e.on)?n=new g(t):(f.File&&e instanceof File||e instanceof Object)&&(n=new c(t));return n.stream(e)},unparse:function(e,t){var n=!1,_=!0,m=",",y="\r\n",s='"',a=s+s,i=!1,r=null,o=!1;!function(){if("object"!=typeof t)return;"string"!=typeof t.delimiter||b.BAD_DELIMITERS.filter(function(e){return-1!==t.delimiter.indexOf(e)}).length||(m=t.delimiter);("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(n=t.quotes);"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(i=t.skipEmptyLines);"string"==typeof t.newline&&(y=t.newline);"string"==typeof t.quoteChar&&(s=t.quoteChar);"boolean"==typeof t.header&&(_=t.header);if(Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");r=t.columns}void 0!==t.escapeChar&&(a=t.escapeChar+s);"boolean"==typeof t.escapeFormulae&&(o=t.escapeFormulae)}();var h=new RegExp(j(s),"g");"string"==typeof e&&(e=JSON.parse(e));if(Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return u(null,e,i);if("object"==typeof e[0])return u(r||Object.keys(e[0]),e,i)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:"object"==typeof e.data[0]?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),u(e.fields||[],e.data||[],i);throw new Error("Unable to serialize unrecognized input");function u(e,t,i){var r="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var n=Array.isArray(e)&&0<e.length,s=!Array.isArray(t[0]);if(n&&_){for(var a=0;a<e.length;a++)0<a&&(r+=m),r+=v(e[a],a);0<t.length&&(r+=y)}for(var o=0;o<t.length;o++){var h=n?e.length:t[o].length,u=!1,f=n?0===Object.keys(t[o]).length:0===t[o].length;if(i&&!n&&(u="greedy"===i?""===t[o].join("").trim():1===t[o].length&&0===t[o][0].length),"greedy"===i&&n){for(var d=[],l=0;l<h;l++){var c=s?e[l]:l;d.push(t[o][c])}u=""===d.join("").trim()}if(!u){for(var p=0;p<h;p++){0<p&&!f&&(r+=m);var g=n&&s?e[p]:p;r+=v(t[o][g],p)}o<t.length-1&&(!i||0<h&&!f)&&(r+=y)}}return r}function v(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);!0===o&&"string"==typeof e&&null!==e.match(/^[=+\-@].*$/)&&(e="'"+e);var i=e.toString().replace(h,a),r="boolean"==typeof n&&n||"function"==typeof n&&n(e,t)||Array.isArray(n)&&n[t]||function(e,t){for(var i=0;i<t.length;i++)if(-1<e.indexOf(t[i]))return!0;return!1}(i,b.BAD_DELIMITERS)||-1<i.indexOf(m)||" "===i.charAt(0)||" "===i.charAt(i.length-1);return r?s+i+s:i}}};if(b.RECORD_SEP=String.fromCharCode(30),b.UNIT_SEP=String.fromCharCode(31),b.BYTE_ORDER_MARK="\ufeff",b.BAD_DELIMITERS=["\r","\n",'"',b.BYTE_ORDER_MARK],b.WORKERS_SUPPORTED=!n&&!!f.Worker,b.NODE_STREAM_INPUT=1,b.LocalChunkSize=10485760,b.RemoteChunkSize=5242880,b.DefaultDelimiter=",",b.Parser=E,b.ParserHandle=i,b.NetworkStreamer=l,b.FileStreamer=c,b.StringStreamer=p,b.ReadableStreamStreamer=g,f.jQuery){var d=f.jQuery;d.fn.parse=function(o){var i=o.config||{},h=[];return this.each(function(e){if(!("INPUT"===d(this).prop("tagName").toUpperCase()&&"file"===d(this).attr("type").toLowerCase()&&f.FileReader)||!this.files||0===this.files.length)return!0;for(var t=0;t<this.files.length;t++)h.push({file:this.files[t],inputElem:this,instanceConfig:d.extend({},i)})}),e(),this;function e(){if(0!==h.length){var e,t,i,r,n=h[0];if(M(o.before)){var s=o.before(n.file,n.inputElem);if("object"==typeof s){if("abort"===s.action)return e="AbortError",t=n.file,i=n.inputElem,r=s.reason,void(M(o.error)&&o.error({name:e},t,i,r));if("skip"===s.action)return void u();"object"==typeof s.config&&(n.instanceConfig=d.extend(n.instanceConfig,s.config))}else if("skip"===s)return void u()}var a=n.instanceConfig.complete;n.instanceConfig.complete=function(e){M(a)&&a(e,n.file,n.inputElem),u()},b.parse(n.file,n.instanceConfig)}else M(o.complete)&&o.complete()}function u(){h.splice(0,1),e()}}}function u(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=w(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null);this._handle=new i(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,t){if(this.isFirstChunk&&M(this._config.beforeFirstChunk)){var i=this._config.beforeFirstChunk(e);void 0!==i&&(e=i)}this.isFirstChunk=!1,this._halted=!1;var r=this._partialLine+e;this._partialLine="";var n=this._handle.parse(r,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var s=n.meta.cursor;this._finished||(this._partialLine=r.substring(s-this._baseIndex),this._baseIndex=s),n&&n.data&&(this._rowCount+=n.data.length);var a=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(o)f.postMessage({results:n,workerId:b.WORKER_ID,finished:a});else if(M(this._config.chunk)&&!t){if(this._config.chunk(n,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);n=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(n.data),this._completeResults.errors=this._completeResults.errors.concat(n.errors),this._completeResults.meta=n.meta),this._completed||!a||!M(this._config.complete)||n&&n.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),a||n&&n.meta.paused||this._nextChunk(),n}this._halted=!0},this._sendError=function(e){M(this._config.error)?this._config.error(e):o&&this._config.error&&f.postMessage({workerId:b.WORKER_ID,error:e,finished:!1})}}function l(e){var r;(e=e||{}).chunkSize||(e.chunkSize=b.RemoteChunkSize),u.call(this,e),this._nextChunk=n?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(r=new XMLHttpRequest,this._config.withCredentials&&(r.withCredentials=this._config.withCredentials),n||(r.onload=v(this._chunkLoaded,this),r.onerror=v(this._chunkError,this)),r.open(this._config.downloadRequestBody?"POST":"GET",this._input,!n),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var t in e)r.setRequestHeader(t,e[t])}if(this._config.chunkSize){var i=this._start+this._config.chunkSize-1;r.setRequestHeader("Range","bytes="+this._start+"-"+i)}try{r.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}n&&0===r.status&&this._chunkError()}},this._chunkLoaded=function(){4===r.readyState&&(r.status<200||400<=r.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:r.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");if(null===t)return-1;return parseInt(t.substring(t.lastIndexOf("/")+1))}(r),this.parseChunk(r.responseText)))},this._chunkError=function(e){var t=r.statusText||e;this._sendError(new Error(t))}}function c(e){var r,n;(e=e||{}).chunkSize||(e.chunkSize=b.LocalChunkSize),u.call(this,e);var s="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,s?((r=new FileReader).onload=v(this._chunkLoaded,this),r.onerror=v(this._chunkError,this)):r=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var t=Math.min(this._start+this._config.chunkSize,this._input.size);e=n.call(e,this._start,t)}var i=r.readAsText(e,this._config.encoding);s||this._chunkLoaded({target:{result:i}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(r.error)}}function p(e){var i;u.call(this,e=e||{}),this.stream=function(e){return i=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,t=this._config.chunkSize;return t?(e=i.substring(0,t),i=i.substring(t)):(e=i,i=""),this._finished=!i,this.parseChunk(e)}}}function g(e){u.call(this,e=e||{});var t=[],i=!0,r=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){r&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):i=!0},this._streamData=v(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),i&&(i=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=v(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=v(function(){this._streamCleanUp(),r=!0,this._streamData("")},this),this._streamCleanUp=v(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function i(m){var a,o,h,r=Math.pow(2,53),n=-r,s=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,u=/^(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))$/,t=this,i=0,f=0,d=!1,e=!1,l=[],c={data:[],errors:[],meta:{}};if(M(m.step)){var p=m.step;m.step=function(e){if(c=e,_())g();else{if(g(),0===c.data.length)return;i+=e.data.length,m.preview&&i>m.preview?o.abort():(c.data=c.data[0],p(c,t))}}}function y(e){return"greedy"===m.skipEmptyLines?""===e.join("").trim():1===e.length&&0===e[0].length}function g(){if(c&&h&&(k("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+b.DefaultDelimiter+"'"),h=!1),m.skipEmptyLines)for(var e=0;e<c.data.length;e++)y(c.data[e])&&c.data.splice(e--,1);return _()&&function(){if(!c)return;function e(e,t){M(m.transformHeader)&&(e=m.transformHeader(e,t)),l.push(e)}if(Array.isArray(c.data[0])){for(var t=0;_()&&t<c.data.length;t++)c.data[t].forEach(e);c.data.splice(0,1)}else c.data.forEach(e)}(),function(){if(!c||!m.header&&!m.dynamicTyping&&!m.transform)return c;function e(e,t){var i,r=m.header?{}:[];for(i=0;i<e.length;i++){var n=i,s=e[i];m.header&&(n=i>=l.length?"__parsed_extra":l[i]),m.transform&&(s=m.transform(s,n)),s=v(n,s),"__parsed_extra"===n?(r[n]=r[n]||[],r[n].push(s)):r[n]=s}return m.header&&(i>l.length?k("FieldMismatch","TooManyFields","Too many fields: expected "+l.length+" fields but parsed "+i,f+t):i<l.length&&k("FieldMismatch","TooFewFields","Too few fields: expected "+l.length+" fields but parsed "+i,f+t)),r}var t=1;!c.data.length||Array.isArray(c.data[0])?(c.data=c.data.map(e),t=c.data.length):c.data=e(c.data,0);m.header&&c.meta&&(c.meta.fields=l);return f+=t,c}()}function _(){return m.header&&0===l.length}function v(e,t){return i=e,m.dynamicTypingFunction&&void 0===m.dynamicTyping[i]&&(m.dynamicTyping[i]=m.dynamicTypingFunction(i)),!0===(m.dynamicTyping[i]||m.dynamicTyping)?"true"===t||"TRUE"===t||"false"!==t&&"FALSE"!==t&&(function(e){if(s.test(e)){var t=parseFloat(e);if(n<t&&t<r)return!0}return!1}(t)?parseFloat(t):u.test(t)?new Date(t):""===t?null:t):t;var i}function k(e,t,i,r){var n={type:e,code:t,message:i};void 0!==r&&(n.row=r),c.errors.push(n)}this.parse=function(e,t,i){var r=m.quoteChar||'"';if(m.newline||(m.newline=function(e,t){e=e.substring(0,1048576);var i=new RegExp(j(t)+"([^]*?)"+j(t),"gm"),r=(e=e.replace(i,"")).split("\r"),n=e.split("\n"),s=1<n.length&&n[0].length<r[0].length;if(1===r.length||s)return"\n";for(var a=0,o=0;o<r.length;o++)"\n"===r[o][0]&&a++;return a>=r.length/2?"\r\n":"\r"}(e,r)),h=!1,m.delimiter)M(m.delimiter)&&(m.delimiter=m.delimiter(e),c.meta.delimiter=m.delimiter);else{var n=function(e,t,i,r,n){var s,a,o,h;n=n||[",","\t","|",";",b.RECORD_SEP,b.UNIT_SEP];for(var u=0;u<n.length;u++){var f=n[u],d=0,l=0,c=0;o=void 0;for(var p=new E({comments:r,delimiter:f,newline:t,preview:10}).parse(e),g=0;g<p.data.length;g++)if(i&&y(p.data[g]))c++;else{var _=p.data[g].length;l+=_,void 0!==o?0<_&&(d+=Math.abs(_-o),o=_):o=_}0<p.data.length&&(l/=p.data.length-c),(void 0===a||d<=a)&&(void 0===h||h<l)&&1.99<l&&(a=d,s=f,h=l)}return{successful:!!(m.delimiter=s),bestDelimiter:s}}(e,m.newline,m.skipEmptyLines,m.comments,m.delimitersToGuess);n.successful?m.delimiter=n.bestDelimiter:(h=!0,m.delimiter=b.DefaultDelimiter),c.meta.delimiter=m.delimiter}var s=w(m);return m.preview&&m.header&&s.preview++,a=e,o=new E(s),c=o.parse(a,t,i),g(),d?{meta:{paused:!0}}:c||{meta:{paused:!1}}},this.paused=function(){return d},this.pause=function(){d=!0,o.abort(),a=M(m.chunk)?"":a.substring(o.getCharIndex())},this.resume=function(){t.streamer._halted?(d=!1,t.streamer.parseChunk(a,!0)):setTimeout(t.resume,3)},this.aborted=function(){return e},this.abort=function(){e=!0,o.abort(),c.meta.aborted=!0,M(m.complete)&&m.complete(c),a=""}}function j(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function E(e){var S,O=(e=e||{}).delimiter,x=e.newline,I=e.comments,T=e.step,D=e.preview,A=e.fastMode,L=S=void 0===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(L=e.escapeChar),("string"!=typeof O||-1<b.BAD_DELIMITERS.indexOf(O))&&(O=","),I===O)throw new Error("Comment character same as delimiter");!0===I?I="#":("string"!=typeof I||-1<b.BAD_DELIMITERS.indexOf(I))&&(I=!1),"\n"!==x&&"\r"!==x&&"\r\n"!==x&&(x="\n");var F=0,z=!1;this.parse=function(r,t,i){if("string"!=typeof r)throw new Error("Input must be a string");var n=r.length,e=O.length,s=x.length,a=I.length,o=M(T),h=[],u=[],f=[],d=F=0;if(!r)return C();if(A||!1!==A&&-1===r.indexOf(S)){for(var l=r.split(x),c=0;c<l.length;c++){if(f=l[c],F+=f.length,c!==l.length-1)F+=x.length;else if(i)return C();if(!I||f.substring(0,a)!==I){if(o){if(h=[],k(f.split(O)),R(),z)return C()}else k(f.split(O));if(D&&D<=c)return h=h.slice(0,D),C(!0)}}return C()}for(var p=r.indexOf(O,F),g=r.indexOf(x,F),_=new RegExp(j(L)+j(S),"g"),m=r.indexOf(S,F);;)if(r[F]!==S)if(I&&0===f.length&&r.substring(F,F+a)===I){if(-1===g)return C();F=g+s,g=r.indexOf(x,F),p=r.indexOf(O,F)}else if(-1!==p&&(p<g||-1===g))f.push(r.substring(F,p)),F=p+e,p=r.indexOf(O,F);else{if(-1===g)break;if(f.push(r.substring(F,g)),w(g+s),o&&(R(),z))return C();if(D&&h.length>=D)return C(!0)}else for(m=F,F++;;){if(-1===(m=r.indexOf(S,m+1)))return i||u.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:h.length,index:F}),E();if(m===n-1)return E(r.substring(F,m).replace(_,S));if(S!==L||r[m+1]!==L){if(S===L||0===m||r[m-1]!==L){-1!==p&&p<m+1&&(p=r.indexOf(O,m+1)),-1!==g&&g<m+1&&(g=r.indexOf(x,m+1));var y=b(-1===g?p:Math.min(p,g));if(r[m+1+y]===O){f.push(r.substring(F,m).replace(_,S)),r[F=m+1+y+e]!==S&&(m=r.indexOf(S,F)),p=r.indexOf(O,F),g=r.indexOf(x,F);break}var v=b(g);if(r.substring(m+1+v,m+1+v+s)===x){if(f.push(r.substring(F,m).replace(_,S)),w(m+1+v+s),p=r.indexOf(O,F),m=r.indexOf(S,F),o&&(R(),z))return C();if(D&&h.length>=D)return C(!0);break}u.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:h.length,index:F}),m++}}else m++}return E();function k(e){h.push(e),d=F}function b(e){var t=0;if(-1!==e){var i=r.substring(m+1,e);i&&""===i.trim()&&(t=i.length)}return t}function E(e){return i||(void 0===e&&(e=r.substring(F)),f.push(e),F=n,k(f),o&&R()),C()}function w(e){F=e,k(f),f=[],g=r.indexOf(x,F)}function C(e){return{data:h,errors:u,meta:{delimiter:O,linebreak:x,aborted:z,truncated:!!e,cursor:d+(t||0)}}}function R(){T(C()),h=[],u=[]}},this.abort=function(){z=!0},this.getCharIndex=function(){return F}}function _(e){var t=e.data,i=a[t.workerId],r=!1;if(t.error)i.userError(t.error,t.file);else if(t.results&&t.results.data){var n={abort:function(){r=!0,m(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:y,resume:y};if(M(i.userStep)){for(var s=0;s<t.results.data.length&&(i.userStep({data:t.results.data[s],errors:t.results.errors,meta:t.results.meta},n),!r);s++);delete t.results}else M(i.userChunk)&&(i.userChunk(t.results,n,t.file),delete t.results)}t.finished&&!r&&m(t.workerId,t.results)}function m(e,t){var i=a[e];M(i.userComplete)&&i.userComplete(t),i.terminate(),delete a[e]}function y(){throw new Error("Not implemented.")}function w(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var i in e)t[i]=w(e[i]);return t}function v(e,t){return function(){e.apply(t,arguments)}}function M(e){return"function"==typeof e}return o&&(f.onmessage=function(e){var t=e.data;void 0===b.WORKER_ID&&t&&(b.WORKER_ID=t.workerId);if("string"==typeof t.input)f.postMessage({workerId:b.WORKER_ID,results:b.parse(t.input,t.config),finished:!0});else if(f.File&&t.input instanceof File||t.input instanceof Object){var i=b.parse(t.input,t.config);i&&f.postMessage({workerId:b.WORKER_ID,results:i,finished:!0})}}),(l.prototype=Object.create(u.prototype)).constructor=l,(c.prototype=Object.create(u.prototype)).constructor=c,(p.prototype=Object.create(p.prototype)).constructor=p,(g.prototype=Object.create(u.prototype)).constructor=g,b});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(24);
} else {}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(17);
} else {}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(11);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

var characterMap = {
	"À": "A",
	"Á": "A",
	"Â": "A",
	"Ã": "A",
	"Ä": "A",
	"Å": "A",
	"Ấ": "A",
	"Ắ": "A",
	"Ẳ": "A",
	"Ẵ": "A",
	"Ặ": "A",
	"Æ": "AE",
	"Ầ": "A",
	"Ằ": "A",
	"Ȃ": "A",
	"Ç": "C",
	"Ḉ": "C",
	"È": "E",
	"É": "E",
	"Ê": "E",
	"Ë": "E",
	"Ế": "E",
	"Ḗ": "E",
	"Ề": "E",
	"Ḕ": "E",
	"Ḝ": "E",
	"Ȇ": "E",
	"Ì": "I",
	"Í": "I",
	"Î": "I",
	"Ï": "I",
	"Ḯ": "I",
	"Ȋ": "I",
	"Ð": "D",
	"Ñ": "N",
	"Ò": "O",
	"Ó": "O",
	"Ô": "O",
	"Õ": "O",
	"Ö": "O",
	"Ø": "O",
	"Ố": "O",
	"Ṍ": "O",
	"Ṓ": "O",
	"Ȏ": "O",
	"Ù": "U",
	"Ú": "U",
	"Û": "U",
	"Ü": "U",
	"Ý": "Y",
	"à": "a",
	"á": "a",
	"â": "a",
	"ã": "a",
	"ä": "a",
	"å": "a",
	"ấ": "a",
	"ắ": "a",
	"ẳ": "a",
	"ẵ": "a",
	"ặ": "a",
	"æ": "ae",
	"ầ": "a",
	"ằ": "a",
	"ȃ": "a",
	"ç": "c",
	"ḉ": "c",
	"è": "e",
	"é": "e",
	"ê": "e",
	"ë": "e",
	"ế": "e",
	"ḗ": "e",
	"ề": "e",
	"ḕ": "e",
	"ḝ": "e",
	"ȇ": "e",
	"ì": "i",
	"í": "i",
	"î": "i",
	"ï": "i",
	"ḯ": "i",
	"ȋ": "i",
	"ð": "d",
	"ñ": "n",
	"ò": "o",
	"ó": "o",
	"ô": "o",
	"õ": "o",
	"ö": "o",
	"ø": "o",
	"ố": "o",
	"ṍ": "o",
	"ṓ": "o",
	"ȏ": "o",
	"ù": "u",
	"ú": "u",
	"û": "u",
	"ü": "u",
	"ý": "y",
	"ÿ": "y",
	"Ā": "A",
	"ā": "a",
	"Ă": "A",
	"ă": "a",
	"Ą": "A",
	"ą": "a",
	"Ć": "C",
	"ć": "c",
	"Ĉ": "C",
	"ĉ": "c",
	"Ċ": "C",
	"ċ": "c",
	"Č": "C",
	"č": "c",
	"C̆": "C",
	"c̆": "c",
	"Ď": "D",
	"ď": "d",
	"Đ": "D",
	"đ": "d",
	"Ē": "E",
	"ē": "e",
	"Ĕ": "E",
	"ĕ": "e",
	"Ė": "E",
	"ė": "e",
	"Ę": "E",
	"ę": "e",
	"Ě": "E",
	"ě": "e",
	"Ĝ": "G",
	"Ǵ": "G",
	"ĝ": "g",
	"ǵ": "g",
	"Ğ": "G",
	"ğ": "g",
	"Ġ": "G",
	"ġ": "g",
	"Ģ": "G",
	"ģ": "g",
	"Ĥ": "H",
	"ĥ": "h",
	"Ħ": "H",
	"ħ": "h",
	"Ḫ": "H",
	"ḫ": "h",
	"Ĩ": "I",
	"ĩ": "i",
	"Ī": "I",
	"ī": "i",
	"Ĭ": "I",
	"ĭ": "i",
	"Į": "I",
	"į": "i",
	"İ": "I",
	"ı": "i",
	"Ĳ": "IJ",
	"ĳ": "ij",
	"Ĵ": "J",
	"ĵ": "j",
	"Ķ": "K",
	"ķ": "k",
	"Ḱ": "K",
	"ḱ": "k",
	"K̆": "K",
	"k̆": "k",
	"Ĺ": "L",
	"ĺ": "l",
	"Ļ": "L",
	"ļ": "l",
	"Ľ": "L",
	"ľ": "l",
	"Ŀ": "L",
	"ŀ": "l",
	"Ł": "l",
	"ł": "l",
	"Ḿ": "M",
	"ḿ": "m",
	"M̆": "M",
	"m̆": "m",
	"Ń": "N",
	"ń": "n",
	"Ņ": "N",
	"ņ": "n",
	"Ň": "N",
	"ň": "n",
	"ŉ": "n",
	"N̆": "N",
	"n̆": "n",
	"Ō": "O",
	"ō": "o",
	"Ŏ": "O",
	"ŏ": "o",
	"Ő": "O",
	"ő": "o",
	"Œ": "OE",
	"œ": "oe",
	"P̆": "P",
	"p̆": "p",
	"Ŕ": "R",
	"ŕ": "r",
	"Ŗ": "R",
	"ŗ": "r",
	"Ř": "R",
	"ř": "r",
	"R̆": "R",
	"r̆": "r",
	"Ȓ": "R",
	"ȓ": "r",
	"Ś": "S",
	"ś": "s",
	"Ŝ": "S",
	"ŝ": "s",
	"Ş": "S",
	"Ș": "S",
	"ș": "s",
	"ş": "s",
	"Š": "S",
	"š": "s",
	"Ţ": "T",
	"ţ": "t",
	"ț": "t",
	"Ț": "T",
	"Ť": "T",
	"ť": "t",
	"Ŧ": "T",
	"ŧ": "t",
	"T̆": "T",
	"t̆": "t",
	"Ũ": "U",
	"ũ": "u",
	"Ū": "U",
	"ū": "u",
	"Ŭ": "U",
	"ŭ": "u",
	"Ů": "U",
	"ů": "u",
	"Ű": "U",
	"ű": "u",
	"Ų": "U",
	"ų": "u",
	"Ȗ": "U",
	"ȗ": "u",
	"V̆": "V",
	"v̆": "v",
	"Ŵ": "W",
	"ŵ": "w",
	"Ẃ": "W",
	"ẃ": "w",
	"X̆": "X",
	"x̆": "x",
	"Ŷ": "Y",
	"ŷ": "y",
	"Ÿ": "Y",
	"Y̆": "Y",
	"y̆": "y",
	"Ź": "Z",
	"ź": "z",
	"Ż": "Z",
	"ż": "z",
	"Ž": "Z",
	"ž": "z",
	"ſ": "s",
	"ƒ": "f",
	"Ơ": "O",
	"ơ": "o",
	"Ư": "U",
	"ư": "u",
	"Ǎ": "A",
	"ǎ": "a",
	"Ǐ": "I",
	"ǐ": "i",
	"Ǒ": "O",
	"ǒ": "o",
	"Ǔ": "U",
	"ǔ": "u",
	"Ǖ": "U",
	"ǖ": "u",
	"Ǘ": "U",
	"ǘ": "u",
	"Ǚ": "U",
	"ǚ": "u",
	"Ǜ": "U",
	"ǜ": "u",
	"Ứ": "U",
	"ứ": "u",
	"Ṹ": "U",
	"ṹ": "u",
	"Ǻ": "A",
	"ǻ": "a",
	"Ǽ": "AE",
	"ǽ": "ae",
	"Ǿ": "O",
	"ǿ": "o",
	"Þ": "TH",
	"þ": "th",
	"Ṕ": "P",
	"ṕ": "p",
	"Ṥ": "S",
	"ṥ": "s",
	"X́": "X",
	"x́": "x",
	"Ѓ": "Г",
	"ѓ": "г",
	"Ќ": "К",
	"ќ": "к",
	"A̋": "A",
	"a̋": "a",
	"E̋": "E",
	"e̋": "e",
	"I̋": "I",
	"i̋": "i",
	"Ǹ": "N",
	"ǹ": "n",
	"Ồ": "O",
	"ồ": "o",
	"Ṑ": "O",
	"ṑ": "o",
	"Ừ": "U",
	"ừ": "u",
	"Ẁ": "W",
	"ẁ": "w",
	"Ỳ": "Y",
	"ỳ": "y",
	"Ȁ": "A",
	"ȁ": "a",
	"Ȅ": "E",
	"ȅ": "e",
	"Ȉ": "I",
	"ȉ": "i",
	"Ȍ": "O",
	"ȍ": "o",
	"Ȑ": "R",
	"ȑ": "r",
	"Ȕ": "U",
	"ȕ": "u",
	"B̌": "B",
	"b̌": "b",
	"Č̣": "C",
	"č̣": "c",
	"Ê̌": "E",
	"ê̌": "e",
	"F̌": "F",
	"f̌": "f",
	"Ǧ": "G",
	"ǧ": "g",
	"Ȟ": "H",
	"ȟ": "h",
	"J̌": "J",
	"ǰ": "j",
	"Ǩ": "K",
	"ǩ": "k",
	"M̌": "M",
	"m̌": "m",
	"P̌": "P",
	"p̌": "p",
	"Q̌": "Q",
	"q̌": "q",
	"Ř̩": "R",
	"ř̩": "r",
	"Ṧ": "S",
	"ṧ": "s",
	"V̌": "V",
	"v̌": "v",
	"W̌": "W",
	"w̌": "w",
	"X̌": "X",
	"x̌": "x",
	"Y̌": "Y",
	"y̌": "y",
	"A̧": "A",
	"a̧": "a",
	"B̧": "B",
	"b̧": "b",
	"Ḑ": "D",
	"ḑ": "d",
	"Ȩ": "E",
	"ȩ": "e",
	"Ɛ̧": "E",
	"ɛ̧": "e",
	"Ḩ": "H",
	"ḩ": "h",
	"I̧": "I",
	"i̧": "i",
	"Ɨ̧": "I",
	"ɨ̧": "i",
	"M̧": "M",
	"m̧": "m",
	"O̧": "O",
	"o̧": "o",
	"Q̧": "Q",
	"q̧": "q",
	"U̧": "U",
	"u̧": "u",
	"X̧": "X",
	"x̧": "x",
	"Z̧": "Z",
	"z̧": "z",
};

var chars = Object.keys(characterMap).join('|');
var allAccents = new RegExp(chars, 'g');
var firstAccent = new RegExp(chars, '');

var removeAccents = function(string) {	
	return string.replace(allAccents, function(match) {
		return characterMap[match];
	});
};

var hasAccents = function(string) {
	return !!string.match(firstAccent);
};

module.exports = removeAccents;
module.exports.has = hasAccents;
module.exports.remove = removeAccents;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(25);


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var l=__webpack_require__(10),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,z=n?Symbol.for("react.memo"):60115,A=n?Symbol.for("react.lazy"):
60116,B="function"===typeof Symbol&&Symbol.iterator;function C(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E={};function F(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(C(85));this.updater.enqueueSetState(this,a,b,"setState")};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function G(){}G.prototype=F.prototype;function H(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D}var I=H.prototype=new G;I.constructor=H;l(I,F.prototype);I.isPureReactComponent=!0;var J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,c){var e,d={},g=null,k=null;if(null!=b)for(e in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,e)&&!L.hasOwnProperty(e)&&(d[e]=b[e]);var f=arguments.length-2;if(1===f)d.children=c;else if(1<f){for(var h=Array(f),m=0;m<f;m++)h[m]=arguments[m+2];d.children=h}if(a&&a.defaultProps)for(e in f=a.defaultProps,f)void 0===d[e]&&(d[e]=f[e]);return{$$typeof:p,type:a,key:g,ref:k,props:d,_owner:J.current}}
function N(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g,Q=[];function R(a,b,c,e){if(Q.length){var d=Q.pop();d.result=a;d.keyPrefix=b;d.func=c;d.context=e;d.count=0;return d}return{result:a,keyPrefix:b,func:c,context:e,count:0}}
function S(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>Q.length&&Q.push(a)}
function T(a,b,c,e){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return c(e,a,""===b?"."+U(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){d=a[k];var f=b+U(d,k);g+=T(d,f,c,e)}else if(null===a||"object"!==typeof a?f=null:(f=B&&a[B]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),k=
0;!(d=a.next()).done;)d=d.value,f=b+U(d,k++),g+=T(d,f,c,e);else if("object"===d)throw c=""+a,Error(C(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return g}function V(a,b,c){return null==a?0:T(a,"",b,c)}function U(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function W(a,b){a.func.call(a.context,b,a.count++)}
function aa(a,b,c){var e=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?X(a,e,c,function(a){return a}):null!=a&&(O(a)&&(a=N(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+c)),e.push(a))}function X(a,b,c,e,d){var g="";null!=c&&(g=(""+c).replace(P,"$&/")+"/");b=R(b,g,e,d);V(a,aa,b);S(b)}var Y={current:null};function Z(){var a=Y.current;if(null===a)throw Error(C(321));return a}
var ba={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:l};exports.Children={map:function(a,b,c){if(null==a)return a;var e=[];X(a,e,null,b,c);return e},forEach:function(a,b,c){if(null==a)return a;b=R(null,null,b,c);V(a,W,b);S(b)},count:function(a){return V(a,function(){return null},null)},toArray:function(a){var b=[];X(a,b,null,function(a){return a});return b},only:function(a){if(!O(a))throw Error(C(143));return a}};
exports.Component=F;exports.Fragment=r;exports.Profiler=u;exports.PureComponent=H;exports.StrictMode=t;exports.Suspense=y;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ba;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(C(267,a));var e=l({},a.props),d=a.key,g=a.ref,k=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,k=J.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(h in b)K.call(b,h)&&!L.hasOwnProperty(h)&&(e[h]=void 0===b[h]&&void 0!==f?f[h]:b[h])}var h=arguments.length-2;if(1===h)e.children=c;else if(1<h){f=Array(h);for(var m=0;m<h;m++)f[m]=arguments[m+2];e.children=f}return{$$typeof:p,type:a.type,
key:d,ref:g,props:e,_owner:k}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:x,render:a}};exports.isValidElement=O;
exports.lazy=function(a){return{$$typeof:A,_ctor:a,_status:-1,_result:null}};exports.memo=function(a,b){return{$$typeof:z,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return Z().useCallback(a,b)};exports.useContext=function(a,b){return Z().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return Z().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return Z().useImperativeHandle(a,b,c)};
exports.useLayoutEffect=function(a,b){return Z().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return Z().useMemo(a,b)};exports.useReducer=function(a,b,c){return Z().useReducer(a,b,c)};exports.useRef=function(a){return Z().useRef(a)};exports.useState=function(a){return Z().useState(a)};exports.version="16.13.1";


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(0),n=__webpack_require__(10),r=__webpack_require__(18);function u(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(u(227));
function ba(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var da=!1,ea=null,fa=!1,ha=null,ia={onError:function(a){da=!0;ea=a}};function ja(a,b,c,d,e,f,g,h,k){da=!1;ea=null;ba.apply(ia,arguments)}function ka(a,b,c,d,e,f,g,h,k){ja.apply(this,arguments);if(da){if(da){var l=ea;da=!1;ea=null}else throw Error(u(198));fa||(fa=!0,ha=l)}}var la=null,ma=null,na=null;
function oa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=na(c);ka(d,b,void 0,a);a.currentTarget=null}var pa=null,qa={};
function ra(){if(pa)for(var a in qa){var b=qa[a],c=pa.indexOf(a);if(!(-1<c))throw Error(u(96,a));if(!sa[c]){if(!b.extractEvents)throw Error(u(97,a));sa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;if(ta.hasOwnProperty(h))throw Error(u(99,h));ta[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&ua(k[e],g,h);e=!0}else f.registrationName?(ua(f.registrationName,g,h),e=!0):e=!1;if(!e)throw Error(u(98,d,a));}}}}
function ua(a,b,c){if(va[a])throw Error(u(100,a));va[a]=b;wa[a]=b.eventTypes[c].dependencies}var sa=[],ta={},va={},wa={};function xa(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(!qa.hasOwnProperty(c)||qa[c]!==d){if(qa[c])throw Error(u(102,c));qa[c]=d;b=!0}}b&&ra()}var ya=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),za=null,Aa=null,Ba=null;
function Ca(a){if(a=ma(a)){if("function"!==typeof za)throw Error(u(280));var b=a.stateNode;b&&(b=la(b),za(a.stateNode,a.type,b))}}function Da(a){Aa?Ba?Ba.push(a):Ba=[a]:Aa=a}function Ea(){if(Aa){var a=Aa,b=Ba;Ba=Aa=null;Ca(a);if(b)for(a=0;a<b.length;a++)Ca(b[a])}}function Fa(a,b){return a(b)}function Ga(a,b,c,d,e){return a(b,c,d,e)}function Ha(){}var Ia=Fa,Ja=!1,Ka=!1;function La(){if(null!==Aa||null!==Ba)Ha(),Ea()}
function Ma(a,b,c){if(Ka)return a(b,c);Ka=!0;try{return Ia(a,b,c)}finally{Ka=!1,La()}}var Na=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oa=Object.prototype.hasOwnProperty,Pa={},Qa={};
function Ra(a){if(Oa.call(Qa,a))return!0;if(Oa.call(Pa,a))return!1;if(Na.test(a))return Qa[a]=!0;Pa[a]=!0;return!1}function Sa(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function Ta(a,b,c,d){if(null===b||"undefined"===typeof b||Sa(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function v(a,b,c,d,e,f){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f}var C={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){C[a]=new v(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];C[b]=new v(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){C[a]=new v(a,2,!1,a.toLowerCase(),null,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){C[a]=new v(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){C[a]=new v(a,3,!1,a.toLowerCase(),null,!1)});
["checked","multiple","muted","selected"].forEach(function(a){C[a]=new v(a,3,!0,a,null,!1)});["capture","download"].forEach(function(a){C[a]=new v(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){C[a]=new v(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){C[a]=new v(a,5,!1,a.toLowerCase(),null,!1)});var Ua=/[\-:]([a-z])/g;function Va(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(Ua,
Va);C[b]=new v(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(Ua,Va);C[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(Ua,Va);C[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){C[a]=new v(a,1,!1,a.toLowerCase(),null,!1)});
C.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){C[a]=new v(a,1,!1,a.toLowerCase(),null,!0)});var Wa=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Wa.hasOwnProperty("ReactCurrentDispatcher")||(Wa.ReactCurrentDispatcher={current:null});Wa.hasOwnProperty("ReactCurrentBatchConfig")||(Wa.ReactCurrentBatchConfig={suspense:null});
function Xa(a,b,c,d){var e=C.hasOwnProperty(b)?C[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(Ta(b,c,e,d)&&(c=null),d||null===e?Ra(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
var Ya=/^(.*)[\\\/]/,E="function"===typeof Symbol&&Symbol.for,Za=E?Symbol.for("react.element"):60103,$a=E?Symbol.for("react.portal"):60106,ab=E?Symbol.for("react.fragment"):60107,bb=E?Symbol.for("react.strict_mode"):60108,cb=E?Symbol.for("react.profiler"):60114,db=E?Symbol.for("react.provider"):60109,eb=E?Symbol.for("react.context"):60110,fb=E?Symbol.for("react.concurrent_mode"):60111,gb=E?Symbol.for("react.forward_ref"):60112,hb=E?Symbol.for("react.suspense"):60113,ib=E?Symbol.for("react.suspense_list"):
60120,jb=E?Symbol.for("react.memo"):60115,kb=E?Symbol.for("react.lazy"):60116,lb=E?Symbol.for("react.block"):60121,mb="function"===typeof Symbol&&Symbol.iterator;function nb(a){if(null===a||"object"!==typeof a)return null;a=mb&&a[mb]||a["@@iterator"];return"function"===typeof a?a:null}function ob(a){if(-1===a._status){a._status=0;var b=a._ctor;b=b();a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}}
function pb(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ab:return"Fragment";case $a:return"Portal";case cb:return"Profiler";case bb:return"StrictMode";case hb:return"Suspense";case ib:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case eb:return"Context.Consumer";case db:return"Context.Provider";case gb:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":
"ForwardRef");case jb:return pb(a.type);case lb:return pb(a.render);case kb:if(a=1===a._status?a._result:null)return pb(a)}return null}function qb(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=pb(a.type);c=null;d&&(c=pb(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Ya,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}
function rb(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function sb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function tb(a){var b=sb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function xb(a){a._valueTracker||(a._valueTracker=tb(a))}function yb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=sb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function zb(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Ab(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=rb(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Bb(a,b){b=b.checked;null!=b&&Xa(a,"checked",b,!1)}
function Cb(a,b){Bb(a,b);var c=rb(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Db(a,b.type,c):b.hasOwnProperty("defaultValue")&&Db(a,b.type,rb(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Eb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function Db(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function Fb(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function Gb(a,b){a=n({children:void 0},b);if(b=Fb(b.children))a.children=b;return a}
function Hb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+rb(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function Ib(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(u(91));return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function Jb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(u(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(u(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:rb(c)}}
function Kb(a,b){var c=rb(b.value),d=rb(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function Lb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var Mb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function Nb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ob(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?Nb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var Pb,Qb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==Mb.svg||"innerHTML"in a)a.innerHTML=b;else{Pb=Pb||document.createElement("div");Pb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=Pb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function Rb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}function Sb(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Tb={animationend:Sb("Animation","AnimationEnd"),animationiteration:Sb("Animation","AnimationIteration"),animationstart:Sb("Animation","AnimationStart"),transitionend:Sb("Transition","TransitionEnd")},Ub={},Vb={};
ya&&(Vb=document.createElement("div").style,"AnimationEvent"in window||(delete Tb.animationend.animation,delete Tb.animationiteration.animation,delete Tb.animationstart.animation),"TransitionEvent"in window||delete Tb.transitionend.transition);function Wb(a){if(Ub[a])return Ub[a];if(!Tb[a])return a;var b=Tb[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Vb)return Ub[a]=b[c];return a}
var Xb=Wb("animationend"),Yb=Wb("animationiteration"),Zb=Wb("animationstart"),$b=Wb("transitionend"),ac="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bc=new ("function"===typeof WeakMap?WeakMap:Map);function cc(a){var b=bc.get(a);void 0===b&&(b=new Map,bc.set(a,b));return b}
function dc(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.effectTag&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function ec(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function fc(a){if(dc(a)!==a)throw Error(u(188));}
function gc(a){var b=a.alternate;if(!b){b=dc(a);if(null===b)throw Error(u(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return fc(e),a;if(f===d)return fc(e),b;f=f.sibling}throw Error(u(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(u(189));}}if(c.alternate!==d)throw Error(u(190));}if(3!==c.tag)throw Error(u(188));return c.stateNode.current===c?a:b}function hc(a){a=gc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function ic(a,b){if(null==b)throw Error(u(30));if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}function jc(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var kc=null;
function lc(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)oa(a,b[d],c[d]);else b&&oa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function mc(a){null!==a&&(kc=ic(kc,a));a=kc;kc=null;if(a){jc(a,lc);if(kc)throw Error(u(95));if(fa)throw a=ha,fa=!1,ha=null,a;}}
function nc(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function oc(a){if(!ya)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}var pc=[];function qc(a){a.topLevelType=null;a.nativeEvent=null;a.targetInst=null;a.ancestors.length=0;10>pc.length&&pc.push(a)}
function rc(a,b,c,d){if(pc.length){var e=pc.pop();e.topLevelType=a;e.eventSystemFlags=d;e.nativeEvent=b;e.targetInst=c;return e}return{topLevelType:a,eventSystemFlags:d,nativeEvent:b,targetInst:c,ancestors:[]}}
function sc(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d=c;if(3===d.tag)d=d.stateNode.containerInfo;else{for(;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo}if(!d)break;b=c.tag;5!==b&&6!==b||a.ancestors.push(c);c=tc(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=nc(a.nativeEvent);d=a.topLevelType;var f=a.nativeEvent,g=a.eventSystemFlags;0===c&&(g|=64);for(var h=null,k=0;k<sa.length;k++){var l=sa[k];l&&(l=l.extractEvents(d,b,f,e,g))&&(h=
ic(h,l))}mc(h)}}function uc(a,b,c){if(!c.has(a)){switch(a){case "scroll":vc(b,"scroll",!0);break;case "focus":case "blur":vc(b,"focus",!0);vc(b,"blur",!0);c.set("blur",null);c.set("focus",null);break;case "cancel":case "close":oc(a)&&vc(b,a,!0);break;case "invalid":case "submit":case "reset":break;default:-1===ac.indexOf(a)&&F(a,b)}c.set(a,null)}}
var wc,xc,yc,zc=!1,Ac=[],Bc=null,Cc=null,Dc=null,Ec=new Map,Fc=new Map,Gc=[],Hc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),Ic="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
function Jc(a,b){var c=cc(b);Hc.forEach(function(a){uc(a,b,c)});Ic.forEach(function(a){uc(a,b,c)})}function Kc(a,b,c,d,e){return{blockedOn:a,topLevelType:b,eventSystemFlags:c|32,nativeEvent:e,container:d}}
function Lc(a,b){switch(a){case "focus":case "blur":Bc=null;break;case "dragenter":case "dragleave":Cc=null;break;case "mouseover":case "mouseout":Dc=null;break;case "pointerover":case "pointerout":Ec.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Fc.delete(b.pointerId)}}function Mc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=Kc(b,c,d,e,f),null!==b&&(b=Nc(b),null!==b&&xc(b)),a;a.eventSystemFlags|=d;return a}
function Oc(a,b,c,d,e){switch(b){case "focus":return Bc=Mc(Bc,a,b,c,d,e),!0;case "dragenter":return Cc=Mc(Cc,a,b,c,d,e),!0;case "mouseover":return Dc=Mc(Dc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Ec.set(f,Mc(Ec.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,Fc.set(f,Mc(Fc.get(f)||null,a,b,c,d,e)),!0}return!1}
function Pc(a){var b=tc(a.target);if(null!==b){var c=dc(b);if(null!==c)if(b=c.tag,13===b){if(b=ec(c),null!==b){a.blockedOn=b;r.unstable_runWithPriority(a.priority,function(){yc(c)});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}function Qc(a){if(null!==a.blockedOn)return!1;var b=Rc(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);if(null!==b){var c=Nc(b);null!==c&&xc(c);a.blockedOn=b;return!1}return!0}
function Sc(a,b,c){Qc(a)&&c.delete(b)}function Tc(){for(zc=!1;0<Ac.length;){var a=Ac[0];if(null!==a.blockedOn){a=Nc(a.blockedOn);null!==a&&wc(a);break}var b=Rc(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);null!==b?a.blockedOn=b:Ac.shift()}null!==Bc&&Qc(Bc)&&(Bc=null);null!==Cc&&Qc(Cc)&&(Cc=null);null!==Dc&&Qc(Dc)&&(Dc=null);Ec.forEach(Sc);Fc.forEach(Sc)}function Uc(a,b){a.blockedOn===b&&(a.blockedOn=null,zc||(zc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Tc)))}
function Vc(a){function b(b){return Uc(b,a)}if(0<Ac.length){Uc(Ac[0],a);for(var c=1;c<Ac.length;c++){var d=Ac[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==Bc&&Uc(Bc,a);null!==Cc&&Uc(Cc,a);null!==Dc&&Uc(Dc,a);Ec.forEach(b);Fc.forEach(b);for(c=0;c<Gc.length;c++)d=Gc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Gc.length&&(c=Gc[0],null===c.blockedOn);)Pc(c),null===c.blockedOn&&Gc.shift()}
var Wc={},Yc=new Map,Zc=new Map,$c=["abort","abort",Xb,"animationEnd",Yb,"animationIteration",Zb,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking",
"seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",$b,"transitionEnd","waiting","waiting"];function ad(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1],f="on"+(e[0].toUpperCase()+e.slice(1));f={phasedRegistrationNames:{bubbled:f,captured:f+"Capture"},dependencies:[d],eventPriority:b};Zc.set(d,b);Yc.set(d,f);Wc[e]=f}}
ad("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);
ad("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);ad($c,2);for(var bd="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),cd=0;cd<bd.length;cd++)Zc.set(bd[cd],0);
var dd=r.unstable_UserBlockingPriority,ed=r.unstable_runWithPriority,fd=!0;function F(a,b){vc(b,a,!1)}function vc(a,b,c){var d=Zc.get(b);switch(void 0===d?2:d){case 0:d=gd.bind(null,b,1,a);break;case 1:d=hd.bind(null,b,1,a);break;default:d=id.bind(null,b,1,a)}c?a.addEventListener(b,d,!0):a.addEventListener(b,d,!1)}function gd(a,b,c,d){Ja||Ha();var e=id,f=Ja;Ja=!0;try{Ga(e,a,b,c,d)}finally{(Ja=f)||La()}}function hd(a,b,c,d){ed(dd,id.bind(null,a,b,c,d))}
function id(a,b,c,d){if(fd)if(0<Ac.length&&-1<Hc.indexOf(a))a=Kc(null,a,b,c,d),Ac.push(a);else{var e=Rc(a,b,c,d);if(null===e)Lc(a,d);else if(-1<Hc.indexOf(a))a=Kc(e,a,b,c,d),Ac.push(a);else if(!Oc(e,a,b,c,d)){Lc(a,d);a=rc(a,d,null,b);try{Ma(sc,a)}finally{qc(a)}}}}
function Rc(a,b,c,d){c=nc(d);c=tc(c);if(null!==c){var e=dc(c);if(null===e)c=null;else{var f=e.tag;if(13===f){c=ec(e);if(null!==c)return c;c=null}else if(3===f){if(e.stateNode.hydrate)return 3===e.tag?e.stateNode.containerInfo:null;c=null}else e!==c&&(c=null)}}a=rc(a,d,c,b);try{Ma(sc,a)}finally{qc(a)}return null}
var jd={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kd=["Webkit","ms","Moz","O"];Object.keys(jd).forEach(function(a){kd.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);jd[b]=jd[a]})});function ld(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||jd.hasOwnProperty(a)&&jd[a]?(""+b).trim():b+"px"}
function md(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=ld(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var nd=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function od(a,b){if(b){if(nd[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(u(137,a,""));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(u(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(u(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(u(62,""));}}
function pd(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var qd=Mb.html;function rd(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=cc(a);b=wa[b];for(var d=0;d<b.length;d++)uc(b[d],a,c)}function sd(){}
function td(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function ud(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function vd(a,b){var c=ud(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=ud(c)}}
function wd(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?wd(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}function xd(){for(var a=window,b=td();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=td(a.document)}return b}
function yd(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}var zd="$",Ad="/$",Bd="$?",Cd="$!",Dd=null,Ed=null;function Fd(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function Gd(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var Hd="function"===typeof setTimeout?setTimeout:void 0,Id="function"===typeof clearTimeout?clearTimeout:void 0;function Jd(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}
function Kd(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if(c===zd||c===Cd||c===Bd){if(0===b)return a;b--}else c===Ad&&b++}a=a.previousSibling}return null}var Ld=Math.random().toString(36).slice(2),Md="__reactInternalInstance$"+Ld,Nd="__reactEventHandlers$"+Ld,Od="__reactContainere$"+Ld;
function tc(a){var b=a[Md];if(b)return b;for(var c=a.parentNode;c;){if(b=c[Od]||c[Md]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Kd(a);null!==a;){if(c=a[Md])return c;a=Kd(a)}return b}a=c;c=a.parentNode}return null}function Nc(a){a=a[Md]||a[Od];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function Pd(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(u(33));}function Qd(a){return a[Nd]||null}
function Rd(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}
function Sd(a,b){var c=a.stateNode;if(!c)return null;var d=la(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==typeof c)throw Error(u(231,
b,typeof c));return c}function Td(a,b,c){if(b=Sd(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=ic(c._dispatchListeners,b),c._dispatchInstances=ic(c._dispatchInstances,a)}function Ud(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=Rd(b);for(b=c.length;0<b--;)Td(c[b],"captured",a);for(b=0;b<c.length;b++)Td(c[b],"bubbled",a)}}
function Vd(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Sd(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=ic(c._dispatchListeners,b),c._dispatchInstances=ic(c._dispatchInstances,a))}function Wd(a){a&&a.dispatchConfig.registrationName&&Vd(a._targetInst,null,a)}function Xd(a){jc(a,Ud)}var Yd=null,Zd=null,$d=null;
function ae(){if($d)return $d;var a,b=Zd,c=b.length,d,e="value"in Yd?Yd.value:Yd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return $d=e.slice(a,1<d?1-d:void 0)}function be(){return!0}function ce(){return!1}
function G(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?be:ce;this.isPropagationStopped=ce;return this}
n(G.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=be)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=be)},persist:function(){this.isPersistent=be},isPersistent:ce,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=ce;this._dispatchInstances=this._dispatchListeners=null}});G.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
G.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;de(c);return c};de(G);function ee(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}
function fe(a){if(!(a instanceof this))throw Error(u(279));a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function de(a){a.eventPool=[];a.getPooled=ee;a.release=fe}var ge=G.extend({data:null}),he=G.extend({data:null}),ie=[9,13,27,32],je=ya&&"CompositionEvent"in window,ke=null;ya&&"documentMode"in document&&(ke=document.documentMode);
var le=ya&&"TextEvent"in window&&!ke,me=ya&&(!je||ke&&8<ke&&11>=ke),ne=String.fromCharCode(32),oe={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},pe=!1;
function qe(a,b){switch(a){case "keyup":return-1!==ie.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function re(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var se=!1;function te(a,b){switch(a){case "compositionend":return re(b);case "keypress":if(32!==b.which)return null;pe=!0;return ne;case "textInput":return a=b.data,a===ne&&pe?null:a;default:return null}}
function ue(a,b){if(se)return"compositionend"===a||!je&&qe(a,b)?(a=ae(),$d=Zd=Yd=null,se=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return me&&"ko"!==b.locale?null:b.data;default:return null}}
var ve={eventTypes:oe,extractEvents:function(a,b,c,d){var e;if(je)b:{switch(a){case "compositionstart":var f=oe.compositionStart;break b;case "compositionend":f=oe.compositionEnd;break b;case "compositionupdate":f=oe.compositionUpdate;break b}f=void 0}else se?qe(a,c)&&(f=oe.compositionEnd):"keydown"===a&&229===c.keyCode&&(f=oe.compositionStart);f?(me&&"ko"!==c.locale&&(se||f!==oe.compositionStart?f===oe.compositionEnd&&se&&(e=ae()):(Yd=d,Zd="value"in Yd?Yd.value:Yd.textContent,se=!0)),f=ge.getPooled(f,
b,c,d),e?f.data=e:(e=re(c),null!==e&&(f.data=e)),Xd(f),e=f):e=null;(a=le?te(a,c):ue(a,c))?(b=he.getPooled(oe.beforeInput,b,c,d),b.data=a,Xd(b)):b=null;return null===e?b:null===b?e:[e,b]}},we={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!we[a.type]:"textarea"===b?!0:!1}
var ye={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function ze(a,b,c){a=G.getPooled(ye.change,a,b,c);a.type="change";Da(c);Xd(a);return a}var Ae=null,Be=null;function Ce(a){mc(a)}function De(a){var b=Pd(a);if(yb(b))return a}function Ee(a,b){if("change"===a)return b}var Fe=!1;ya&&(Fe=oc("input")&&(!document.documentMode||9<document.documentMode));
function Ge(){Ae&&(Ae.detachEvent("onpropertychange",He),Be=Ae=null)}function He(a){if("value"===a.propertyName&&De(Be))if(a=ze(Be,a,nc(a)),Ja)mc(a);else{Ja=!0;try{Fa(Ce,a)}finally{Ja=!1,La()}}}function Ie(a,b,c){"focus"===a?(Ge(),Ae=b,Be=c,Ae.attachEvent("onpropertychange",He)):"blur"===a&&Ge()}function Je(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return De(Be)}function Ke(a,b){if("click"===a)return De(b)}function Le(a,b){if("input"===a||"change"===a)return De(b)}
var Me={eventTypes:ye,_isInputEventSupported:Fe,extractEvents:function(a,b,c,d){var e=b?Pd(b):window,f=e.nodeName&&e.nodeName.toLowerCase();if("select"===f||"input"===f&&"file"===e.type)var g=Ee;else if(xe(e))if(Fe)g=Le;else{g=Je;var h=Ie}else(f=e.nodeName)&&"input"===f.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(g=Ke);if(g&&(g=g(a,b)))return ze(g,c,d);h&&h(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Db(e,"number",e.value)}},Ne=G.extend({view:null,detail:null}),
Oe={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pe(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Oe[a])?!!b[a]:!1}function Qe(){return Pe}
var Re=0,Se=0,Te=!1,Ue=!1,Ve=Ne.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Qe,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=Re;Re=a.screenX;return Te?"mousemove"===a.type?a.screenX-b:0:(Te=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=Se;Se=a.screenY;return Ue?"mousemove"===a.type?a.screenY-b:0:(Ue=!0,0)}}),We=Ve.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Xe={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},Ye={eventTypes:Xe,extractEvents:function(a,b,c,d,e){var f="mouseover"===a||"pointerover"===a,g="mouseout"===a||"pointerout"===a;if(f&&0===(e&32)&&(c.relatedTarget||c.fromElement)||!g&&!f)return null;f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window;if(g){if(g=b,b=(b=c.relatedTarget||c.toElement)?tc(b):null,null!==b){var h=dc(b);if(b!==h||5!==b.tag&&6!==b.tag)b=null}}else g=null;if(g===b)return null;if("mouseout"===a||"mouseover"===
a){var k=Ve;var l=Xe.mouseLeave;var m=Xe.mouseEnter;var p="mouse"}else if("pointerout"===a||"pointerover"===a)k=We,l=Xe.pointerLeave,m=Xe.pointerEnter,p="pointer";a=null==g?f:Pd(g);f=null==b?f:Pd(b);l=k.getPooled(l,g,c,d);l.type=p+"leave";l.target=a;l.relatedTarget=f;c=k.getPooled(m,b,c,d);c.type=p+"enter";c.target=f;c.relatedTarget=a;d=g;p=b;if(d&&p)a:{k=d;m=p;g=0;for(a=k;a;a=Rd(a))g++;a=0;for(b=m;b;b=Rd(b))a++;for(;0<g-a;)k=Rd(k),g--;for(;0<a-g;)m=Rd(m),a--;for(;g--;){if(k===m||k===m.alternate)break a;
k=Rd(k);m=Rd(m)}k=null}else k=null;m=k;for(k=[];d&&d!==m;){g=d.alternate;if(null!==g&&g===m)break;k.push(d);d=Rd(d)}for(d=[];p&&p!==m;){g=p.alternate;if(null!==g&&g===m)break;d.push(p);p=Rd(p)}for(p=0;p<k.length;p++)Vd(k[p],"bubbled",l);for(p=d.length;0<p--;)Vd(d[p],"captured",c);return 0===(e&64)?[l]:[l,c]}};function Ze(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var $e="function"===typeof Object.is?Object.is:Ze,af=Object.prototype.hasOwnProperty;
function bf(a,b){if($e(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!af.call(b,c[d])||!$e(a[c[d]],b[c[d]]))return!1;return!0}
var cf=ya&&"documentMode"in document&&11>=document.documentMode,df={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},ef=null,ff=null,gf=null,hf=!1;
function jf(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(hf||null==ef||ef!==td(c))return null;c=ef;"selectionStart"in c&&yd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return gf&&bf(gf,c)?null:(gf=c,a=G.getPooled(df.select,ff,a,b),a.type="select",a.target=ef,Xd(a),a)}
var kf={eventTypes:df,extractEvents:function(a,b,c,d,e,f){e=f||(d.window===d?d.document:9===d.nodeType?d:d.ownerDocument);if(!(f=!e)){a:{e=cc(e);f=wa.onSelect;for(var g=0;g<f.length;g++)if(!e.has(f[g])){e=!1;break a}e=!0}f=!e}if(f)return null;e=b?Pd(b):window;switch(a){case "focus":if(xe(e)||"true"===e.contentEditable)ef=e,ff=b,gf=null;break;case "blur":gf=ff=ef=null;break;case "mousedown":hf=!0;break;case "contextmenu":case "mouseup":case "dragend":return hf=!1,jf(c,d);case "selectionchange":if(cf)break;
case "keydown":case "keyup":return jf(c,d)}return null}},lf=G.extend({animationName:null,elapsedTime:null,pseudoElement:null}),mf=G.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),nf=Ne.extend({relatedTarget:null});function of(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rf=Ne.extend({key:function(a){if(a.key){var b=pf[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=of(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?qf[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Qe,charCode:function(a){return"keypress"===
a.type?of(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?of(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),sf=Ve.extend({dataTransfer:null}),tf=Ne.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Qe}),uf=G.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),vf=Ve.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),wf={eventTypes:Wc,extractEvents:function(a,b,c,d){var e=Yc.get(a);if(!e)return null;switch(a){case "keypress":if(0===of(c))return null;case "keydown":case "keyup":a=rf;break;case "blur":case "focus":a=nf;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=
Ve;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=sf;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=tf;break;case Xb:case Yb:case Zb:a=lf;break;case $b:a=uf;break;case "scroll":a=Ne;break;case "wheel":a=vf;break;case "copy":case "cut":case "paste":a=mf;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=
We;break;default:a=G}b=a.getPooled(e,b,c,d);Xd(b);return b}};if(pa)throw Error(u(101));pa=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));ra();var xf=Nc;la=Qd;ma=xf;na=Pd;xa({SimpleEventPlugin:wf,EnterLeaveEventPlugin:Ye,ChangeEventPlugin:Me,SelectEventPlugin:kf,BeforeInputEventPlugin:ve});var yf=[],zf=-1;function H(a){0>zf||(a.current=yf[zf],yf[zf]=null,zf--)}
function I(a,b){zf++;yf[zf]=a.current;a.current=b}var Af={},J={current:Af},K={current:!1},Bf=Af;function Cf(a,b){var c=a.type.contextTypes;if(!c)return Af;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function L(a){a=a.childContextTypes;return null!==a&&void 0!==a}
function Df(){H(K);H(J)}function Ef(a,b,c){if(J.current!==Af)throw Error(u(168));I(J,b);I(K,c)}function Ff(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(u(108,pb(b)||"Unknown",e));return n({},c,{},d)}function Gf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Af;Bf=J.current;I(J,a);I(K,K.current);return!0}
function Hf(a,b,c){var d=a.stateNode;if(!d)throw Error(u(169));c?(a=Ff(a,b,Bf),d.__reactInternalMemoizedMergedChildContext=a,H(K),H(J),I(J,a)):H(K);I(K,c)}
var If=r.unstable_runWithPriority,Jf=r.unstable_scheduleCallback,Kf=r.unstable_cancelCallback,Lf=r.unstable_requestPaint,Mf=r.unstable_now,Nf=r.unstable_getCurrentPriorityLevel,Of=r.unstable_ImmediatePriority,Pf=r.unstable_UserBlockingPriority,Qf=r.unstable_NormalPriority,Rf=r.unstable_LowPriority,Sf=r.unstable_IdlePriority,Tf={},Uf=r.unstable_shouldYield,Vf=void 0!==Lf?Lf:function(){},Wf=null,Xf=null,Yf=!1,Zf=Mf(),$f=1E4>Zf?Mf:function(){return Mf()-Zf};
function ag(){switch(Nf()){case Of:return 99;case Pf:return 98;case Qf:return 97;case Rf:return 96;case Sf:return 95;default:throw Error(u(332));}}function bg(a){switch(a){case 99:return Of;case 98:return Pf;case 97:return Qf;case 96:return Rf;case 95:return Sf;default:throw Error(u(332));}}function cg(a,b){a=bg(a);return If(a,b)}function dg(a,b,c){a=bg(a);return Jf(a,b,c)}function eg(a){null===Wf?(Wf=[a],Xf=Jf(Of,fg)):Wf.push(a);return Tf}function gg(){if(null!==Xf){var a=Xf;Xf=null;Kf(a)}fg()}
function fg(){if(!Yf&&null!==Wf){Yf=!0;var a=0;try{var b=Wf;cg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});Wf=null}catch(c){throw null!==Wf&&(Wf=Wf.slice(a+1)),Jf(Of,gg),c;}finally{Yf=!1}}}function hg(a,b,c){c/=10;return 1073741821-(((1073741821-a+b/10)/c|0)+1)*c}function ig(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}var jg={current:null},kg=null,lg=null,mg=null;function ng(){mg=lg=kg=null}
function og(a){var b=jg.current;H(jg);a.type._context._currentValue=b}function pg(a,b){for(;null!==a;){var c=a.alternate;if(a.childExpirationTime<b)a.childExpirationTime=b,null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);else if(null!==c&&c.childExpirationTime<b)c.childExpirationTime=b;else break;a=a.return}}function qg(a,b){kg=a;mg=lg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(a.expirationTime>=b&&(rg=!0),a.firstContext=null)}
function sg(a,b){if(mg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)mg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===lg){if(null===kg)throw Error(u(308));lg=b;kg.dependencies={expirationTime:0,firstContext:b,responders:null}}else lg=lg.next=b}return a._currentValue}var tg=!1;function ug(a){a.updateQueue={baseState:a.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}
function vg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,baseQueue:a.baseQueue,shared:a.shared,effects:a.effects})}function wg(a,b){a={expirationTime:a,suspenseConfig:b,tag:0,payload:null,callback:null,next:null};return a.next=a}function xg(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}}
function yg(a,b){var c=a.alternate;null!==c&&vg(c,a);a=a.updateQueue;c=a.baseQueue;null===c?(a.baseQueue=b.next=b,b.next=b):(b.next=c.next,c.next=b)}
function zg(a,b,c,d){var e=a.updateQueue;tg=!1;var f=e.baseQueue,g=e.shared.pending;if(null!==g){if(null!==f){var h=f.next;f.next=g.next;g.next=h}f=g;e.shared.pending=null;h=a.alternate;null!==h&&(h=h.updateQueue,null!==h&&(h.baseQueue=g))}if(null!==f){h=f.next;var k=e.baseState,l=0,m=null,p=null,x=null;if(null!==h){var z=h;do{g=z.expirationTime;if(g<d){var ca={expirationTime:z.expirationTime,suspenseConfig:z.suspenseConfig,tag:z.tag,payload:z.payload,callback:z.callback,next:null};null===x?(p=x=
ca,m=k):x=x.next=ca;g>l&&(l=g)}else{null!==x&&(x=x.next={expirationTime:1073741823,suspenseConfig:z.suspenseConfig,tag:z.tag,payload:z.payload,callback:z.callback,next:null});Ag(g,z.suspenseConfig);a:{var D=a,t=z;g=b;ca=c;switch(t.tag){case 1:D=t.payload;if("function"===typeof D){k=D.call(ca,k,g);break a}k=D;break a;case 3:D.effectTag=D.effectTag&-4097|64;case 0:D=t.payload;g="function"===typeof D?D.call(ca,k,g):D;if(null===g||void 0===g)break a;k=n({},k,g);break a;case 2:tg=!0}}null!==z.callback&&
(a.effectTag|=32,g=e.effects,null===g?e.effects=[z]:g.push(z))}z=z.next;if(null===z||z===h)if(g=e.shared.pending,null===g)break;else z=f.next=g.next,g.next=h,e.baseQueue=f=g,e.shared.pending=null}while(1)}null===x?m=k:x.next=p;e.baseState=m;e.baseQueue=x;Bg(l);a.expirationTime=l;a.memoizedState=k}}
function Cg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=e;e=c;if("function"!==typeof d)throw Error(u(191,d));d.call(e)}}}var Dg=Wa.ReactCurrentBatchConfig,Eg=(new aa.Component).refs;function Fg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;0===a.expirationTime&&(a.updateQueue.baseState=c)}
var Jg={isMounted:function(a){return(a=a._reactInternalFiber)?dc(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e=wg(d,e);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);xg(a,e);Ig(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e=wg(d,e);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);xg(a,e);Ig(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=Gg(),d=Dg.suspense;
c=Hg(c,a,d);d=wg(c,d);d.tag=2;void 0!==b&&null!==b&&(d.callback=b);xg(a,d);Ig(a,c)}};function Kg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!bf(c,d)||!bf(e,f):!0}
function Lg(a,b,c){var d=!1,e=Af;var f=b.contextType;"object"===typeof f&&null!==f?f=sg(f):(e=L(b)?Bf:J.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Cf(a,e):Af);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Jg;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Mg(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Jg.enqueueReplaceState(b,b.state,null)}
function Ng(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Eg;ug(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=sg(f):(f=L(b)?Bf:J.current,e.context=Cf(a,f));zg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Fg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Jg.enqueueReplaceState(e,e.state,null),zg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var Og=Array.isArray;
function Pg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(u(309));var d=c.stateNode}if(!d)throw Error(u(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Eg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(u(284));if(!c._owner)throw Error(u(290,a));}return a}
function Qg(a,b){if("textarea"!==a.type)throw Error(u(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,""));}
function Rg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Sg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Tg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Pg(a,b,c),d.return=a,d;d=Ug(c.type,c.key,c.props,null,a.mode,d);d.ref=Pg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=Vg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Wg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function p(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Tg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Za:return c=Ug(b.type,b.key,b.props,null,a.mode,c),c.ref=Pg(a,null,b),c.return=a,c;case $a:return b=Vg(b,a.mode,c),b.return=a,b}if(Og(b)||
nb(b))return b=Wg(b,a.mode,c,null),b.return=a,b;Qg(a,b)}return null}function x(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Za:return c.key===e?c.type===ab?m(a,b,c.props.children,d,e):k(a,b,c,d):null;case $a:return c.key===e?l(a,b,c,d):null}if(Og(c)||nb(c))return null!==e?null:m(a,b,c,d,null);Qg(a,c)}return null}function z(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Za:return a=a.get(null===d.key?c:d.key)||null,d.type===ab?m(b,a,d.props.children,e,d.key):k(b,a,d,e);case $a:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Og(d)||nb(d))return a=a.get(c)||null,m(b,a,d,e,null);Qg(b,d)}return null}function ca(e,g,h,k){for(var l=null,t=null,m=g,y=g=0,A=null;null!==m&&y<h.length;y++){m.index>y?(A=m,m=null):A=m.sibling;var q=x(e,m,h[y],k);if(null===q){null===m&&(m=A);break}a&&
m&&null===q.alternate&&b(e,m);g=f(q,g,y);null===t?l=q:t.sibling=q;t=q;m=A}if(y===h.length)return c(e,m),l;if(null===m){for(;y<h.length;y++)m=p(e,h[y],k),null!==m&&(g=f(m,g,y),null===t?l=m:t.sibling=m,t=m);return l}for(m=d(e,m);y<h.length;y++)A=z(m,e,y,h[y],k),null!==A&&(a&&null!==A.alternate&&m.delete(null===A.key?y:A.key),g=f(A,g,y),null===t?l=A:t.sibling=A,t=A);a&&m.forEach(function(a){return b(e,a)});return l}function D(e,g,h,l){var k=nb(h);if("function"!==typeof k)throw Error(u(150));h=k.call(h);
if(null==h)throw Error(u(151));for(var m=k=null,t=g,y=g=0,A=null,q=h.next();null!==t&&!q.done;y++,q=h.next()){t.index>y?(A=t,t=null):A=t.sibling;var D=x(e,t,q.value,l);if(null===D){null===t&&(t=A);break}a&&t&&null===D.alternate&&b(e,t);g=f(D,g,y);null===m?k=D:m.sibling=D;m=D;t=A}if(q.done)return c(e,t),k;if(null===t){for(;!q.done;y++,q=h.next())q=p(e,q.value,l),null!==q&&(g=f(q,g,y),null===m?k=q:m.sibling=q,m=q);return k}for(t=d(e,t);!q.done;y++,q=h.next())q=z(t,e,y,q.value,l),null!==q&&(a&&null!==
q.alternate&&t.delete(null===q.key?y:q.key),g=f(q,g,y),null===m?k=q:m.sibling=q,m=q);a&&t.forEach(function(a){return b(e,a)});return k}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ab&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Za:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ab){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,
k.sibling);d=e(k,f.props);d.ref=Pg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling}f.type===ab?(d=Wg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Ug(f.type,f.key,f.props,null,a.mode,h),h.ref=Pg(a,d,f),h.return=a,a=h)}return g(a);case $a:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=
d.sibling}d=Vg(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Tg(f,a.mode,h),d.return=a,a=d),g(a);if(Og(f))return ca(a,d,f,h);if(nb(f))return D(a,d,f,h);l&&Qg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:throw a=a.type,Error(u(152,a.displayName||a.name||"Component"));}return c(a,d)}}var Xg=Rg(!0),Yg=Rg(!1),Zg={},$g={current:Zg},ah={current:Zg},bh={current:Zg};
function ch(a){if(a===Zg)throw Error(u(174));return a}function dh(a,b){I(bh,b);I(ah,a);I($g,Zg);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:Ob(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=Ob(b,a)}H($g);I($g,b)}function eh(){H($g);H(ah);H(bh)}function fh(a){ch(bh.current);var b=ch($g.current);var c=Ob(b,a.type);b!==c&&(I(ah,a),I($g,c))}function gh(a){ah.current===a&&(H($g),H(ah))}var M={current:0};
function hh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||c.data===Bd||c.data===Cd))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.effectTag&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}function ih(a,b){return{responder:a,props:b}}
var jh=Wa.ReactCurrentDispatcher,kh=Wa.ReactCurrentBatchConfig,lh=0,N=null,O=null,P=null,mh=!1;function Q(){throw Error(u(321));}function nh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!$e(a[c],b[c]))return!1;return!0}
function oh(a,b,c,d,e,f){lh=f;N=b;b.memoizedState=null;b.updateQueue=null;b.expirationTime=0;jh.current=null===a||null===a.memoizedState?ph:qh;a=c(d,e);if(b.expirationTime===lh){f=0;do{b.expirationTime=0;if(!(25>f))throw Error(u(301));f+=1;P=O=null;b.updateQueue=null;jh.current=rh;a=c(d,e)}while(b.expirationTime===lh)}jh.current=sh;b=null!==O&&null!==O.next;lh=0;P=O=N=null;mh=!1;if(b)throw Error(u(300));return a}
function th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===P?N.memoizedState=P=a:P=P.next=a;return P}function uh(){if(null===O){var a=N.alternate;a=null!==a?a.memoizedState:null}else a=O.next;var b=null===P?N.memoizedState:P.next;if(null!==b)P=b,O=a;else{if(null===a)throw Error(u(310));O=a;a={memoizedState:O.memoizedState,baseState:O.baseState,baseQueue:O.baseQueue,queue:O.queue,next:null};null===P?N.memoizedState=P=a:P=P.next=a}return P}
function vh(a,b){return"function"===typeof b?b(a):b}
function wh(a){var b=uh(),c=b.queue;if(null===c)throw Error(u(311));c.lastRenderedReducer=a;var d=O,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.expirationTime;if(l<lh){var m={expirationTime:k.expirationTime,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null};null===h?(g=h=m,f=d):h=h.next=m;l>N.expirationTime&&
(N.expirationTime=l,Bg(l))}else null!==h&&(h=h.next={expirationTime:1073741823,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),Ag(l,k.suspenseConfig),d=k.eagerReducer===a?k.eagerState:a(d,k.action);k=k.next}while(null!==k&&k!==e);null===h?f=d:h.next=g;$e(d,b.memoizedState)||(rg=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d}return[b.memoizedState,c.dispatch]}
function xh(a){var b=uh(),c=b.queue;if(null===c)throw Error(u(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);$e(f,b.memoizedState)||(rg=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}
function yh(a){var b=th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:vh,lastRenderedState:a};a=a.dispatch=zh.bind(null,N,a);return[b.memoizedState,a]}function Ah(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=N.updateQueue;null===b?(b={lastEffect:null},N.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}
function Bh(){return uh().memoizedState}function Ch(a,b,c,d){var e=th();N.effectTag|=a;e.memoizedState=Ah(1|b,c,void 0,void 0===d?null:d)}function Dh(a,b,c,d){var e=uh();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&nh(d,g.deps)){Ah(b,c,f,d);return}}N.effectTag|=a;e.memoizedState=Ah(1|b,c,f,d)}function Eh(a,b){return Ch(516,4,a,b)}function Fh(a,b){return Dh(516,4,a,b)}function Gh(a,b){return Dh(4,2,a,b)}
function Hh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function Ih(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Dh(4,2,Hh.bind(null,b,a),c)}function Jh(){}function Kh(a,b){th().memoizedState=[a,void 0===b?null:b];return a}function Lh(a,b){var c=uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function Mh(a,b){var c=uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function Nh(a,b,c){var d=ag();cg(98>d?98:d,function(){a(!0)});cg(97<d?97:d,function(){var d=kh.suspense;kh.suspense=void 0===b?null:b;try{a(!1),c()}finally{kh.suspense=d}})}
function zh(a,b,c){var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e={expirationTime:d,suspenseConfig:e,action:c,eagerReducer:null,eagerState:null,next:null};var f=b.pending;null===f?e.next=e:(e.next=f.next,f.next=e);b.pending=e;f=a.alternate;if(a===N||null!==f&&f===N)mh=!0,e.expirationTime=lh,N.expirationTime=lh;else{if(0===a.expirationTime&&(null===f||0===f.expirationTime)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.eagerReducer=f;e.eagerState=h;if($e(h,g))return}catch(k){}finally{}Ig(a,
d)}}
var sh={readContext:sg,useCallback:Q,useContext:Q,useEffect:Q,useImperativeHandle:Q,useLayoutEffect:Q,useMemo:Q,useReducer:Q,useRef:Q,useState:Q,useDebugValue:Q,useResponder:Q,useDeferredValue:Q,useTransition:Q},ph={readContext:sg,useCallback:Kh,useContext:sg,useEffect:Eh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Ch(4,2,Hh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Ch(4,2,a,b)},useMemo:function(a,b){var c=th();b=void 0===b?null:b;a=a();c.memoizedState=[a,
b];return a},useReducer:function(a,b,c){var d=th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=zh.bind(null,N,a);return[d.memoizedState,a]},useRef:function(a){var b=th();a={current:a};return b.memoizedState=a},useState:yh,useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=yh(a),d=c[0],e=c[1];Eh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=
c}},[a,b]);return d},useTransition:function(a){var b=yh(!1),c=b[0];b=b[1];return[Kh(Nh.bind(null,b,a),[b,a]),c]}},qh={readContext:sg,useCallback:Lh,useContext:sg,useEffect:Fh,useImperativeHandle:Ih,useLayoutEffect:Gh,useMemo:Mh,useReducer:wh,useRef:Bh,useState:function(){return wh(vh)},useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=wh(vh),d=c[0],e=c[1];Fh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=c}},[a,b]);return d},useTransition:function(a){var b=
wh(vh),c=b[0];b=b[1];return[Lh(Nh.bind(null,b,a),[b,a]),c]}},rh={readContext:sg,useCallback:Lh,useContext:sg,useEffect:Fh,useImperativeHandle:Ih,useLayoutEffect:Gh,useMemo:Mh,useReducer:xh,useRef:Bh,useState:function(){return xh(vh)},useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=xh(vh),d=c[0],e=c[1];Fh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=c}},[a,b]);return d},useTransition:function(a){var b=xh(vh),c=b[0];b=b[1];return[Lh(Nh.bind(null,
b,a),[b,a]),c]}},Oh=null,Ph=null,Qh=!1;function Rh(a,b){var c=Sh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}
function Th(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function Uh(a){if(Qh){var b=Ph;if(b){var c=b;if(!Th(a,b)){b=Jd(c.nextSibling);if(!b||!Th(a,b)){a.effectTag=a.effectTag&-1025|2;Qh=!1;Oh=a;return}Rh(Oh,c)}Oh=a;Ph=Jd(b.firstChild)}else a.effectTag=a.effectTag&-1025|2,Qh=!1,Oh=a}}function Vh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;Oh=a}
function Wh(a){if(a!==Oh)return!1;if(!Qh)return Vh(a),Qh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!Gd(b,a.memoizedProps))for(b=Ph;b;)Rh(a,b),b=Jd(b.nextSibling);Vh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(u(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if(c===Ad){if(0===b){Ph=Jd(a.nextSibling);break a}b--}else c!==zd&&c!==Cd&&c!==Bd||b++}a=a.nextSibling}Ph=null}}else Ph=Oh?Jd(a.stateNode.nextSibling):null;return!0}
function Xh(){Ph=Oh=null;Qh=!1}var Yh=Wa.ReactCurrentOwner,rg=!1;function R(a,b,c,d){b.child=null===a?Yg(b,null,c,d):Xg(b,a.child,c,d)}function Zh(a,b,c,d,e){c=c.render;var f=b.ref;qg(b,e);d=oh(a,b,c,d,f,e);if(null!==a&&!rg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),$h(a,b,e);b.effectTag|=1;R(a,b,d,e);return b.child}
function ai(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!bi(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ci(a,b,g,d,e,f);a=Ug(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:bf,c(e,d)&&a.ref===b.ref))return $h(a,b,f);b.effectTag|=1;a=Sg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
function ci(a,b,c,d,e,f){return null!==a&&bf(a.memoizedProps,d)&&a.ref===b.ref&&(rg=!1,e<f)?(b.expirationTime=a.expirationTime,$h(a,b,f)):di(a,b,c,d,f)}function ei(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function di(a,b,c,d,e){var f=L(c)?Bf:J.current;f=Cf(b,f);qg(b,e);c=oh(a,b,c,d,f,e);if(null!==a&&!rg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),$h(a,b,e);b.effectTag|=1;R(a,b,c,e);return b.child}
function fi(a,b,c,d,e){if(L(c)){var f=!0;Gf(b)}else f=!1;qg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),Lg(b,c,d),Ng(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=sg(l):(l=L(c)?Bf:J.current,l=Cf(b,l));var m=c.getDerivedStateFromProps,p="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;p||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Mg(b,g,d,l);tg=!1;var x=b.memoizedState;g.state=x;zg(b,d,g,e);k=b.memoizedState;h!==d||x!==k||K.current||tg?("function"===typeof m&&(Fg(b,c,m,d),k=b.memoizedState),(h=tg||Kg(b,c,h,d,x,k,l))?(p||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,vg(a,b),h=b.memoizedProps,g.props=b.type===b.elementType?h:ig(b.type,h),k=g.context,l=c.contextType,"object"===typeof l&&null!==l?l=sg(l):(l=L(c)?Bf:J.current,l=Cf(b,l)),m=c.getDerivedStateFromProps,(p="function"===typeof m||"function"===
typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Mg(b,g,d,l),tg=!1,k=b.memoizedState,g.state=k,zg(b,d,g,e),x=b.memoizedState,h!==d||k!==x||K.current||tg?("function"===typeof m&&(Fg(b,c,m,d),x=b.memoizedState),(m=tg||Kg(b,c,h,d,k,x,l))?(p||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
x,l),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,l)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=l,d=m):
("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),d=!1);return gi(a,b,c,d,f,e)}
function gi(a,b,c,d,e,f){ei(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Hf(b,c,!1),$h(a,b,f);d=b.stateNode;Yh.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=Xg(b,a.child,null,f),b.child=Xg(b,null,h,f)):R(a,b,h,f);b.memoizedState=d.state;e&&Hf(b,c,!0);return b.child}function hi(a){var b=a.stateNode;b.pendingContext?Ef(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Ef(a,b.context,!1);dh(a,b.containerInfo)}
var ii={dehydrated:null,retryTime:0};
function ji(a,b,c){var d=b.mode,e=b.pendingProps,f=M.current,g=!1,h;(h=0!==(b.effectTag&64))||(h=0!==(f&2)&&(null===a||null!==a.memoizedState));h?(g=!0,b.effectTag&=-65):null!==a&&null===a.memoizedState||void 0===e.fallback||!0===e.unstable_avoidThisFallback||(f|=1);I(M,f&1);if(null===a){void 0!==e.fallback&&Uh(b);if(g){g=e.fallback;e=Wg(null,d,0,null);e.return=b;if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Wg(g,d,c,null);c.return=
b;e.sibling=c;b.memoizedState=ii;b.child=e;return c}d=e.children;b.memoizedState=null;return b.child=Yg(b,null,d,c)}if(null!==a.memoizedState){a=a.child;d=a.sibling;if(g){e=e.fallback;c=Sg(a,a.pendingProps);c.return=b;if(0===(b.mode&2)&&(g=null!==b.memoizedState?b.child.child:b.child,g!==a.child))for(c.child=g;null!==g;)g.return=c,g=g.sibling;d=Sg(d,e);d.return=b;c.sibling=d;c.childExpirationTime=0;b.memoizedState=ii;b.child=c;return d}c=Xg(b,a.child,e.children,c);b.memoizedState=null;return b.child=
c}a=a.child;if(g){g=e.fallback;e=Wg(null,d,0,null);e.return=b;e.child=a;null!==a&&(a.return=e);if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Wg(g,d,c,null);c.return=b;e.sibling=c;c.effectTag|=2;e.childExpirationTime=0;b.memoizedState=ii;b.child=e;return c}b.memoizedState=null;return b.child=Xg(b,a,e.children,c)}
function ki(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);pg(a.return,b)}function li(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailExpiration:0,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailExpiration=0,g.tailMode=e,g.lastEffect=f)}
function mi(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;R(a,b,d.children,c);d=M.current;if(0!==(d&2))d=d&1|2,b.effectTag|=64;else{if(null!==a&&0!==(a.effectTag&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&ki(a,c);else if(19===a.tag)ki(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}I(M,d);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===hh(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);li(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===hh(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}li(b,!0,c,null,f,b.lastEffect);break;case "together":li(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
function $h(a,b,c){null!==a&&(b.dependencies=a.dependencies);var d=b.expirationTime;0!==d&&Bg(d);if(b.childExpirationTime<c)return null;if(null!==a&&b.child!==a.child)throw Error(u(153));if(null!==b.child){a=b.child;c=Sg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Sg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}var ni,oi,pi,qi;
ni=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};oi=function(){};
pi=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;ch($g.current);a=null;switch(c){case "input":f=zb(g,f);d=zb(g,d);a=[];break;case "option":f=Gb(g,f);d=Gb(g,d);a=[];break;case "select":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case "textarea":f=Ib(g,f);d=Ib(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=sd)}od(c,d);var h,k;c=null;for(h in f)if(!d.hasOwnProperty(h)&&f.hasOwnProperty(h)&&null!=f[h])if("style"===
h)for(k in g=f[h],g)g.hasOwnProperty(k)&&(c||(c={}),c[k]="");else"dangerouslySetInnerHTML"!==h&&"children"!==h&&"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(va.hasOwnProperty(h)?a||(a=[]):(a=a||[]).push(h,null));for(h in d){var l=d[h];g=null!=f?f[h]:void 0;if(d.hasOwnProperty(h)&&l!==g&&(null!=l||null!=g))if("style"===h)if(g){for(k in g)!g.hasOwnProperty(k)||l&&l.hasOwnProperty(k)||(c||(c={}),c[k]="");for(k in l)l.hasOwnProperty(k)&&g[k]!==l[k]&&(c||(c={}),
c[k]=l[k])}else c||(a||(a=[]),a.push(h,c)),c=l;else"dangerouslySetInnerHTML"===h?(l=l?l.__html:void 0,g=g?g.__html:void 0,null!=l&&g!==l&&(a=a||[]).push(h,l)):"children"===h?g===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(h,""+l):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&(va.hasOwnProperty(h)?(null!=l&&rd(e,h),a||g===l||(a=[])):(a=a||[]).push(h,l))}c&&(a=a||[]).push("style",c);e=a;if(b.updateQueue=e)b.effectTag|=4}};
qi=function(a,b,c,d){c!==d&&(b.effectTag|=4)};function ri(a,b){switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function si(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return L(b.type)&&Df(),null;case 3:return eh(),H(K),H(J),c=b.stateNode,c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),null!==a&&null!==a.child||!Wh(b)||(b.effectTag|=4),oi(b),null;case 5:gh(b);c=ch(bh.current);var e=b.type;if(null!==a&&null!=b.stateNode)pi(a,b,e,d,c),a.ref!==b.ref&&(b.effectTag|=128);else{if(!d){if(null===b.stateNode)throw Error(u(166));
return null}a=ch($g.current);if(Wh(b)){d=b.stateNode;e=b.type;var f=b.memoizedProps;d[Md]=b;d[Nd]=f;switch(e){case "iframe":case "object":case "embed":F("load",d);break;case "video":case "audio":for(a=0;a<ac.length;a++)F(ac[a],d);break;case "source":F("error",d);break;case "img":case "image":case "link":F("error",d);F("load",d);break;case "form":F("reset",d);F("submit",d);break;case "details":F("toggle",d);break;case "input":Ab(d,f);F("invalid",d);rd(c,"onChange");break;case "select":d._wrapperState=
{wasMultiple:!!f.multiple};F("invalid",d);rd(c,"onChange");break;case "textarea":Jb(d,f),F("invalid",d),rd(c,"onChange")}od(e,f);a=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(a=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(a=["children",""+h]):va.hasOwnProperty(g)&&null!=h&&rd(c,g)}switch(e){case "input":xb(d);Eb(d,f,!0);break;case "textarea":xb(d);Lb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&
(d.onclick=sd)}c=a;b.updateQueue=c;null!==c&&(b.effectTag|=4)}else{g=9===c.nodeType?c:c.ownerDocument;a===qd&&(a=Nb(e));a===qd?"script"===e?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(e,{is:d.is}):(a=g.createElement(e),"select"===e&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,e);a[Md]=b;a[Nd]=d;ni(a,b,!1,!1);b.stateNode=a;g=pd(e,d);switch(e){case "iframe":case "object":case "embed":F("load",
a);h=d;break;case "video":case "audio":for(h=0;h<ac.length;h++)F(ac[h],a);h=d;break;case "source":F("error",a);h=d;break;case "img":case "image":case "link":F("error",a);F("load",a);h=d;break;case "form":F("reset",a);F("submit",a);h=d;break;case "details":F("toggle",a);h=d;break;case "input":Ab(a,d);h=zb(a,d);F("invalid",a);rd(c,"onChange");break;case "option":h=Gb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};h=n({},d,{value:void 0});F("invalid",a);rd(c,"onChange");break;case "textarea":Jb(a,
d);h=Ib(a,d);F("invalid",a);rd(c,"onChange");break;default:h=d}od(e,h);var k=h;for(f in k)if(k.hasOwnProperty(f)){var l=k[f];"style"===f?md(a,l):"dangerouslySetInnerHTML"===f?(l=l?l.__html:void 0,null!=l&&Qb(a,l)):"children"===f?"string"===typeof l?("textarea"!==e||""!==l)&&Rb(a,l):"number"===typeof l&&Rb(a,""+l):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(va.hasOwnProperty(f)?null!=l&&rd(c,f):null!=l&&Xa(a,f,l,g))}switch(e){case "input":xb(a);Eb(a,d,!1);
break;case "textarea":xb(a);Lb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+rb(d.value));break;case "select":a.multiple=!!d.multiple;c=d.value;null!=c?Hb(a,!!d.multiple,c,!1):null!=d.defaultValue&&Hb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof h.onClick&&(a.onclick=sd)}Fd(e,d)&&(b.effectTag|=4)}null!==b.ref&&(b.effectTag|=128)}return null;case 6:if(a&&null!=b.stateNode)qi(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(u(166));
c=ch(bh.current);ch($g.current);Wh(b)?(c=b.stateNode,d=b.memoizedProps,c[Md]=b,c.nodeValue!==d&&(b.effectTag|=4)):(c=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),c[Md]=b,b.stateNode=c)}return null;case 13:H(M);d=b.memoizedState;if(0!==(b.effectTag&64))return b.expirationTime=c,b;c=null!==d;d=!1;null===a?void 0!==b.memoizedProps.fallback&&Wh(b):(e=a.memoizedState,d=null!==e,c||null===e||(e=a.child.sibling,null!==e&&(f=b.firstEffect,null!==f?(b.firstEffect=e,e.nextEffect=f):(b.firstEffect=b.lastEffect=
e,e.nextEffect=null),e.effectTag=8)));if(c&&!d&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(M.current&1))S===ti&&(S=ui);else{if(S===ti||S===ui)S=vi;0!==wi&&null!==T&&(xi(T,U),yi(T,wi))}if(c||d)b.effectTag|=4;return null;case 4:return eh(),oi(b),null;case 10:return og(b),null;case 17:return L(b.type)&&Df(),null;case 19:H(M);d=b.memoizedState;if(null===d)return null;e=0!==(b.effectTag&64);f=d.rendering;if(null===f)if(e)ri(d,!1);else{if(S!==ti||null!==a&&0!==(a.effectTag&
64))for(f=b.child;null!==f;){a=hh(f);if(null!==a){b.effectTag|=64;ri(d,!1);e=a.updateQueue;null!==e&&(b.updateQueue=e,b.effectTag|=4);null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;for(d=b.child;null!==d;)e=d,f=c,e.effectTag&=2,e.nextEffect=null,e.firstEffect=null,e.lastEffect=null,a=e.alternate,null===a?(e.childExpirationTime=0,e.expirationTime=f,e.child=null,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null):(e.childExpirationTime=a.childExpirationTime,
e.expirationTime=a.expirationTime,e.child=a.child,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,f=a.dependencies,e.dependencies=null===f?null:{expirationTime:f.expirationTime,firstContext:f.firstContext,responders:f.responders}),d=d.sibling;I(M,M.current&1|2);return b.child}f=f.sibling}}else{if(!e)if(a=hh(f),null!==a){if(b.effectTag|=64,e=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.effectTag|=4),ri(d,!0),null===d.tail&&"hidden"===d.tailMode&&!f.alternate)return b=
b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*$f()-d.renderingStartTime>d.tailExpiration&&1<c&&(b.effectTag|=64,e=!0,ri(d,!1),b.expirationTime=b.childExpirationTime=c-1);d.isBackwards?(f.sibling=b.child,b.child=f):(c=d.last,null!==c?c.sibling=f:b.child=f,d.last=f)}return null!==d.tail?(0===d.tailExpiration&&(d.tailExpiration=$f()+500),c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=$f(),c.sibling=null,b=M.current,I(M,e?b&1|2:b&1),c):null}throw Error(u(156,
b.tag));}function zi(a){switch(a.tag){case 1:L(a.type)&&Df();var b=a.effectTag;return b&4096?(a.effectTag=b&-4097|64,a):null;case 3:eh();H(K);H(J);b=a.effectTag;if(0!==(b&64))throw Error(u(285));a.effectTag=b&-4097|64;return a;case 5:return gh(a),null;case 13:return H(M),b=a.effectTag,b&4096?(a.effectTag=b&-4097|64,a):null;case 19:return H(M),null;case 4:return eh(),null;case 10:return og(a),null;default:return null}}function Ai(a,b){return{value:a,source:b,stack:qb(b)}}
var Bi="function"===typeof WeakSet?WeakSet:Set;function Ci(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=qb(c));null!==c&&pb(c.type);b=b.value;null!==a&&1===a.tag&&pb(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function Di(a,b){try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){Ei(a,c)}}function Fi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Ei(a,c)}else b.current=null}
function Gi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:ig(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(u(163));}
function Hi(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.destroy;c.destroy=void 0;void 0!==d&&d()}c=c.next}while(c!==b)}}function Ii(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}
function Ji(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:Ii(3,c);return;case 1:a=c.stateNode;if(c.effectTag&4)if(null===b)a.componentDidMount();else{var d=c.elementType===c.type?b.memoizedProps:ig(c.type,b.memoizedProps);a.componentDidUpdate(d,b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}b=c.updateQueue;null!==b&&Cg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode}Cg(c,b,a)}return;
case 5:a=c.stateNode;null===b&&c.effectTag&4&&Fd(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Vc(c))));return;case 19:case 17:case 20:case 21:return}throw Error(u(163));}
function Ki(a,b,c){"function"===typeof Li&&Li(b);switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var d=a.next;cg(97<c?97:c,function(){var a=d;do{var c=a.destroy;if(void 0!==c){var g=b;try{c()}catch(h){Ei(g,h)}}a=a.next}while(a!==d)})}break;case 1:Fi(b);c=b.stateNode;"function"===typeof c.componentWillUnmount&&Di(b,c);break;case 5:Fi(b);break;case 4:Mi(a,b,c)}}
function Ni(a){var b=a.alternate;a.return=null;a.child=null;a.memoizedState=null;a.updateQueue=null;a.dependencies=null;a.alternate=null;a.firstEffect=null;a.lastEffect=null;a.pendingProps=null;a.memoizedProps=null;a.stateNode=null;null!==b&&Ni(b)}function Oi(a){return 5===a.tag||3===a.tag||4===a.tag}
function Pi(a){a:{for(var b=a.return;null!==b;){if(Oi(b)){var c=b;break a}b=b.return}throw Error(u(160));}b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(u(161));}c.effectTag&16&&(Rb(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Oi(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}d?Qi(a,c,b):Ri(a,c,b)}
function Qi(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=sd));else if(4!==d&&(a=a.child,null!==a))for(Qi(a,b,c),a=a.sibling;null!==a;)Qi(a,b,c),a=a.sibling}
function Ri(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Ri(a,b,c),a=a.sibling;null!==a;)Ri(a,b,c),a=a.sibling}
function Mi(a,b,c){for(var d=b,e=!1,f,g;;){if(!e){e=d.return;a:for(;;){if(null===e)throw Error(u(160));f=e.stateNode;switch(e.tag){case 5:g=!1;break a;case 3:f=f.containerInfo;g=!0;break a;case 4:f=f.containerInfo;g=!0;break a}e=e.return}e=!0}if(5===d.tag||6===d.tag){a:for(var h=a,k=d,l=c,m=k;;)if(Ki(h,m,l),null!==m.child&&4!==m.tag)m.child.return=m,m=m.child;else{if(m===k)break a;for(;null===m.sibling;){if(null===m.return||m.return===k)break a;m=m.return}m.sibling.return=m.return;m=m.sibling}g?(h=
f,k=d.stateNode,8===h.nodeType?h.parentNode.removeChild(k):h.removeChild(k)):f.removeChild(d.stateNode)}else if(4===d.tag){if(null!==d.child){f=d.stateNode.containerInfo;g=!0;d.child.return=d;d=d.child;continue}}else if(Ki(a,d,c),null!==d.child){d.child.return=d;d=d.child;continue}if(d===b)break;for(;null===d.sibling;){if(null===d.return||d.return===b)return;d=d.return;4===d.tag&&(e=!1)}d.sibling.return=d.return;d=d.sibling}}
function Si(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:Hi(3,b);return;case 1:return;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[Nd]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Bb(c,d);pd(a,e);b=pd(a,d);for(e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];"style"===g?md(c,h):"dangerouslySetInnerHTML"===g?Qb(c,h):"children"===g?Rb(c,h):Xa(c,g,h,b)}switch(a){case "input":Cb(c,d);break;
case "textarea":Kb(c,d);break;case "select":b=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,a=d.value,null!=a?Hb(c,!!d.multiple,a,!1):b!==!!d.multiple&&(null!=d.defaultValue?Hb(c,!!d.multiple,d.defaultValue,!0):Hb(c,!!d.multiple,d.multiple?[]:"",!1))}}}return;case 6:if(null===b.stateNode)throw Error(u(162));b.stateNode.nodeValue=b.memoizedProps;return;case 3:b=b.stateNode;b.hydrate&&(b.hydrate=!1,Vc(b.containerInfo));return;case 12:return;case 13:c=b;null===b.memoizedState?
d=!1:(d=!0,c=b.child,Ti=$f());if(null!==c)a:for(a=c;;){if(5===a.tag)f=a.stateNode,d?(f=f.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(f=a.stateNode,e=a.memoizedProps.style,e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null,f.style.display=ld("display",e));else if(6===a.tag)a.stateNode.nodeValue=d?"":a.memoizedProps;else if(13===a.tag&&null!==a.memoizedState&&null===a.memoizedState.dehydrated){f=a.child.sibling;f.return=a;a=
f;continue}else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===c)break;for(;null===a.sibling;){if(null===a.return||a.return===c)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}Ui(b);return;case 19:Ui(b);return;case 17:return}throw Error(u(163));}function Ui(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Bi);b.forEach(function(b){var d=Vi.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
var Wi="function"===typeof WeakMap?WeakMap:Map;function Xi(a,b,c){c=wg(c,null);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Yi||(Yi=!0,Zi=d);Ci(a,b)};return c}
function $i(a,b,c){c=wg(c,null);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ci(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===aj?aj=new Set([this]):aj.add(this),Ci(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
var bj=Math.ceil,cj=Wa.ReactCurrentDispatcher,dj=Wa.ReactCurrentOwner,V=0,ej=8,fj=16,gj=32,ti=0,hj=1,ij=2,ui=3,vi=4,jj=5,W=V,T=null,X=null,U=0,S=ti,kj=null,lj=1073741823,mj=1073741823,nj=null,wi=0,oj=!1,Ti=0,pj=500,Y=null,Yi=!1,Zi=null,aj=null,qj=!1,rj=null,sj=90,tj=null,uj=0,vj=null,wj=0;function Gg(){return(W&(fj|gj))!==V?1073741821-($f()/10|0):0!==wj?wj:wj=1073741821-($f()/10|0)}
function Hg(a,b,c){b=b.mode;if(0===(b&2))return 1073741823;var d=ag();if(0===(b&4))return 99===d?1073741823:1073741822;if((W&fj)!==V)return U;if(null!==c)a=hg(a,c.timeoutMs|0||5E3,250);else switch(d){case 99:a=1073741823;break;case 98:a=hg(a,150,100);break;case 97:case 96:a=hg(a,5E3,250);break;case 95:a=2;break;default:throw Error(u(326));}null!==T&&a===U&&--a;return a}
function Ig(a,b){if(50<uj)throw uj=0,vj=null,Error(u(185));a=xj(a,b);if(null!==a){var c=ag();1073741823===b?(W&ej)!==V&&(W&(fj|gj))===V?yj(a):(Z(a),W===V&&gg()):Z(a);(W&4)===V||98!==c&&99!==c||(null===tj?tj=new Map([[a,b]]):(c=tj.get(a),(void 0===c||c>b)&&tj.set(a,b)))}}
function xj(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}null!==e&&(T===e&&(Bg(b),S===vi&&xi(e,U)),yi(e,b));return e}
function zj(a){var b=a.lastExpiredTime;if(0!==b)return b;b=a.firstPendingTime;if(!Aj(a,b))return b;var c=a.lastPingedTime;a=a.nextKnownPendingLevel;a=c>a?c:a;return 2>=a&&b!==a?0:a}
function Z(a){if(0!==a.lastExpiredTime)a.callbackExpirationTime=1073741823,a.callbackPriority=99,a.callbackNode=eg(yj.bind(null,a));else{var b=zj(a),c=a.callbackNode;if(0===b)null!==c&&(a.callbackNode=null,a.callbackExpirationTime=0,a.callbackPriority=90);else{var d=Gg();1073741823===b?d=99:1===b||2===b?d=95:(d=10*(1073741821-b)-10*(1073741821-d),d=0>=d?99:250>=d?98:5250>=d?97:95);if(null!==c){var e=a.callbackPriority;if(a.callbackExpirationTime===b&&e>=d)return;c!==Tf&&Kf(c)}a.callbackExpirationTime=
b;a.callbackPriority=d;b=1073741823===b?eg(yj.bind(null,a)):dg(d,Bj.bind(null,a),{timeout:10*(1073741821-b)-$f()});a.callbackNode=b}}}
function Bj(a,b){wj=0;if(b)return b=Gg(),Cj(a,b),Z(a),null;var c=zj(a);if(0!==c){b=a.callbackNode;if((W&(fj|gj))!==V)throw Error(u(327));Dj();a===T&&c===U||Ej(a,c);if(null!==X){var d=W;W|=fj;var e=Fj();do try{Gj();break}catch(h){Hj(a,h)}while(1);ng();W=d;cj.current=e;if(S===hj)throw b=kj,Ej(a,c),xi(a,c),Z(a),b;if(null===X)switch(e=a.finishedWork=a.current.alternate,a.finishedExpirationTime=c,d=S,T=null,d){case ti:case hj:throw Error(u(345));case ij:Cj(a,2<c?2:c);break;case ui:xi(a,c);d=a.lastSuspendedTime;
c===d&&(a.nextKnownPendingLevel=Ij(e));if(1073741823===lj&&(e=Ti+pj-$f(),10<e)){if(oj){var f=a.lastPingedTime;if(0===f||f>=c){a.lastPingedTime=c;Ej(a,c);break}}f=zj(a);if(0!==f&&f!==c)break;if(0!==d&&d!==c){a.lastPingedTime=d;break}a.timeoutHandle=Hd(Jj.bind(null,a),e);break}Jj(a);break;case vi:xi(a,c);d=a.lastSuspendedTime;c===d&&(a.nextKnownPendingLevel=Ij(e));if(oj&&(e=a.lastPingedTime,0===e||e>=c)){a.lastPingedTime=c;Ej(a,c);break}e=zj(a);if(0!==e&&e!==c)break;if(0!==d&&d!==c){a.lastPingedTime=
d;break}1073741823!==mj?d=10*(1073741821-mj)-$f():1073741823===lj?d=0:(d=10*(1073741821-lj)-5E3,e=$f(),c=10*(1073741821-c)-e,d=e-d,0>d&&(d=0),d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*bj(d/1960))-d,c<d&&(d=c));if(10<d){a.timeoutHandle=Hd(Jj.bind(null,a),d);break}Jj(a);break;case jj:if(1073741823!==lj&&null!==nj){f=lj;var g=nj;d=g.busyMinDurationMs|0;0>=d?d=0:(e=g.busyDelayMs|0,f=$f()-(10*(1073741821-f)-(g.timeoutMs|0||5E3)),d=f<=e?0:e+d-f);if(10<d){xi(a,c);a.timeoutHandle=
Hd(Jj.bind(null,a),d);break}}Jj(a);break;default:throw Error(u(329));}Z(a);if(a.callbackNode===b)return Bj.bind(null,a)}}return null}
function yj(a){var b=a.lastExpiredTime;b=0!==b?b:1073741823;if((W&(fj|gj))!==V)throw Error(u(327));Dj();a===T&&b===U||Ej(a,b);if(null!==X){var c=W;W|=fj;var d=Fj();do try{Kj();break}catch(e){Hj(a,e)}while(1);ng();W=c;cj.current=d;if(S===hj)throw c=kj,Ej(a,b),xi(a,b),Z(a),c;if(null!==X)throw Error(u(261));a.finishedWork=a.current.alternate;a.finishedExpirationTime=b;T=null;Jj(a);Z(a)}return null}function Lj(){if(null!==tj){var a=tj;tj=null;a.forEach(function(a,c){Cj(c,a);Z(c)});gg()}}
function Mj(a,b){var c=W;W|=1;try{return a(b)}finally{W=c,W===V&&gg()}}function Nj(a,b){var c=W;W&=-2;W|=ej;try{return a(b)}finally{W=c,W===V&&gg()}}
function Ej(a,b){a.finishedWork=null;a.finishedExpirationTime=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Id(c));if(null!==X)for(c=X.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Df();break;case 3:eh();H(K);H(J);break;case 5:gh(d);break;case 4:eh();break;case 13:H(M);break;case 19:H(M);break;case 10:og(d)}c=c.return}T=a;X=Sg(a.current,null);U=b;S=ti;kj=null;mj=lj=1073741823;nj=null;wi=0;oj=!1}
function Hj(a,b){do{try{ng();jh.current=sh;if(mh)for(var c=N.memoizedState;null!==c;){var d=c.queue;null!==d&&(d.pending=null);c=c.next}lh=0;P=O=N=null;mh=!1;if(null===X||null===X.return)return S=hj,kj=b,X=null;a:{var e=a,f=X.return,g=X,h=b;b=U;g.effectTag|=2048;g.firstEffect=g.lastEffect=null;if(null!==h&&"object"===typeof h&&"function"===typeof h.then){var k=h;if(0===(g.mode&2)){var l=g.alternate;l?(g.updateQueue=l.updateQueue,g.memoizedState=l.memoizedState,g.expirationTime=l.expirationTime):(g.updateQueue=
null,g.memoizedState=null)}var m=0!==(M.current&1),p=f;do{var x;if(x=13===p.tag){var z=p.memoizedState;if(null!==z)x=null!==z.dehydrated?!0:!1;else{var ca=p.memoizedProps;x=void 0===ca.fallback?!1:!0!==ca.unstable_avoidThisFallback?!0:m?!1:!0}}if(x){var D=p.updateQueue;if(null===D){var t=new Set;t.add(k);p.updateQueue=t}else D.add(k);if(0===(p.mode&2)){p.effectTag|=64;g.effectTag&=-2981;if(1===g.tag)if(null===g.alternate)g.tag=17;else{var y=wg(1073741823,null);y.tag=2;xg(g,y)}g.expirationTime=1073741823;
break a}h=void 0;g=b;var A=e.pingCache;null===A?(A=e.pingCache=new Wi,h=new Set,A.set(k,h)):(h=A.get(k),void 0===h&&(h=new Set,A.set(k,h)));if(!h.has(g)){h.add(g);var q=Oj.bind(null,e,k,g);k.then(q,q)}p.effectTag|=4096;p.expirationTime=b;break a}p=p.return}while(null!==p);h=Error((pb(g.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+qb(g))}S!==
jj&&(S=ij);h=Ai(h,g);p=f;do{switch(p.tag){case 3:k=h;p.effectTag|=4096;p.expirationTime=b;var B=Xi(p,k,b);yg(p,B);break a;case 1:k=h;var w=p.type,ub=p.stateNode;if(0===(p.effectTag&64)&&("function"===typeof w.getDerivedStateFromError||null!==ub&&"function"===typeof ub.componentDidCatch&&(null===aj||!aj.has(ub)))){p.effectTag|=4096;p.expirationTime=b;var vb=$i(p,k,b);yg(p,vb);break a}}p=p.return}while(null!==p)}X=Pj(X)}catch(Xc){b=Xc;continue}break}while(1)}
function Fj(){var a=cj.current;cj.current=sh;return null===a?sh:a}function Ag(a,b){a<lj&&2<a&&(lj=a);null!==b&&a<mj&&2<a&&(mj=a,nj=b)}function Bg(a){a>wi&&(wi=a)}function Kj(){for(;null!==X;)X=Qj(X)}function Gj(){for(;null!==X&&!Uf();)X=Qj(X)}function Qj(a){var b=Rj(a.alternate,a,U);a.memoizedProps=a.pendingProps;null===b&&(b=Pj(a));dj.current=null;return b}
function Pj(a){X=a;do{var b=X.alternate;a=X.return;if(0===(X.effectTag&2048)){b=si(b,X,U);if(1===U||1!==X.childExpirationTime){for(var c=0,d=X.child;null!==d;){var e=d.expirationTime,f=d.childExpirationTime;e>c&&(c=e);f>c&&(c=f);d=d.sibling}X.childExpirationTime=c}if(null!==b)return b;null!==a&&0===(a.effectTag&2048)&&(null===a.firstEffect&&(a.firstEffect=X.firstEffect),null!==X.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=X.firstEffect),a.lastEffect=X.lastEffect),1<X.effectTag&&(null!==
a.lastEffect?a.lastEffect.nextEffect=X:a.firstEffect=X,a.lastEffect=X))}else{b=zi(X);if(null!==b)return b.effectTag&=2047,b;null!==a&&(a.firstEffect=a.lastEffect=null,a.effectTag|=2048)}b=X.sibling;if(null!==b)return b;X=a}while(null!==X);S===ti&&(S=jj);return null}function Ij(a){var b=a.expirationTime;a=a.childExpirationTime;return b>a?b:a}function Jj(a){var b=ag();cg(99,Sj.bind(null,a,b));return null}
function Sj(a,b){do Dj();while(null!==rj);if((W&(fj|gj))!==V)throw Error(u(327));var c=a.finishedWork,d=a.finishedExpirationTime;if(null===c)return null;a.finishedWork=null;a.finishedExpirationTime=0;if(c===a.current)throw Error(u(177));a.callbackNode=null;a.callbackExpirationTime=0;a.callbackPriority=90;a.nextKnownPendingLevel=0;var e=Ij(c);a.firstPendingTime=e;d<=a.lastSuspendedTime?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:d<=a.firstSuspendedTime&&(a.firstSuspendedTime=
d-1);d<=a.lastPingedTime&&(a.lastPingedTime=0);d<=a.lastExpiredTime&&(a.lastExpiredTime=0);a===T&&(X=T=null,U=0);1<c.effectTag?null!==c.lastEffect?(c.lastEffect.nextEffect=c,e=c.firstEffect):e=c:e=c.firstEffect;if(null!==e){var f=W;W|=gj;dj.current=null;Dd=fd;var g=xd();if(yd(g)){if("selectionStart"in g)var h={start:g.selectionStart,end:g.selectionEnd};else a:{h=(h=g.ownerDocument)&&h.defaultView||window;var k=h.getSelection&&h.getSelection();if(k&&0!==k.rangeCount){h=k.anchorNode;var l=k.anchorOffset,
m=k.focusNode;k=k.focusOffset;try{h.nodeType,m.nodeType}catch(wb){h=null;break a}var p=0,x=-1,z=-1,ca=0,D=0,t=g,y=null;b:for(;;){for(var A;;){t!==h||0!==l&&3!==t.nodeType||(x=p+l);t!==m||0!==k&&3!==t.nodeType||(z=p+k);3===t.nodeType&&(p+=t.nodeValue.length);if(null===(A=t.firstChild))break;y=t;t=A}for(;;){if(t===g)break b;y===h&&++ca===l&&(x=p);y===m&&++D===k&&(z=p);if(null!==(A=t.nextSibling))break;t=y;y=t.parentNode}t=A}h=-1===x||-1===z?null:{start:x,end:z}}else h=null}h=h||{start:0,end:0}}else h=
null;Ed={activeElementDetached:null,focusedElem:g,selectionRange:h};fd=!1;Y=e;do try{Tj()}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);Y=e;do try{for(g=a,h=b;null!==Y;){var q=Y.effectTag;q&16&&Rb(Y.stateNode,"");if(q&128){var B=Y.alternate;if(null!==B){var w=B.ref;null!==w&&("function"===typeof w?w(null):w.current=null)}}switch(q&1038){case 2:Pi(Y);Y.effectTag&=-3;break;case 6:Pi(Y);Y.effectTag&=-3;Si(Y.alternate,Y);break;case 1024:Y.effectTag&=-1025;break;case 1028:Y.effectTag&=
-1025;Si(Y.alternate,Y);break;case 4:Si(Y.alternate,Y);break;case 8:l=Y,Mi(g,l,h),Ni(l)}Y=Y.nextEffect}}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);w=Ed;B=xd();q=w.focusedElem;h=w.selectionRange;if(B!==q&&q&&q.ownerDocument&&wd(q.ownerDocument.documentElement,q)){null!==h&&yd(q)&&(B=h.start,w=h.end,void 0===w&&(w=B),"selectionStart"in q?(q.selectionStart=B,q.selectionEnd=Math.min(w,q.value.length)):(w=(B=q.ownerDocument||document)&&B.defaultView||window,w.getSelection&&
(w=w.getSelection(),l=q.textContent.length,g=Math.min(h.start,l),h=void 0===h.end?g:Math.min(h.end,l),!w.extend&&g>h&&(l=h,h=g,g=l),l=vd(q,g),m=vd(q,h),l&&m&&(1!==w.rangeCount||w.anchorNode!==l.node||w.anchorOffset!==l.offset||w.focusNode!==m.node||w.focusOffset!==m.offset)&&(B=B.createRange(),B.setStart(l.node,l.offset),w.removeAllRanges(),g>h?(w.addRange(B),w.extend(m.node,m.offset)):(B.setEnd(m.node,m.offset),w.addRange(B))))));B=[];for(w=q;w=w.parentNode;)1===w.nodeType&&B.push({element:w,left:w.scrollLeft,
top:w.scrollTop});"function"===typeof q.focus&&q.focus();for(q=0;q<B.length;q++)w=B[q],w.element.scrollLeft=w.left,w.element.scrollTop=w.top}fd=!!Dd;Ed=Dd=null;a.current=c;Y=e;do try{for(q=a;null!==Y;){var ub=Y.effectTag;ub&36&&Ji(q,Y.alternate,Y);if(ub&128){B=void 0;var vb=Y.ref;if(null!==vb){var Xc=Y.stateNode;switch(Y.tag){case 5:B=Xc;break;default:B=Xc}"function"===typeof vb?vb(B):vb.current=B}}Y=Y.nextEffect}}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);Y=
null;Vf();W=f}else a.current=c;if(qj)qj=!1,rj=a,sj=b;else for(Y=e;null!==Y;)b=Y.nextEffect,Y.nextEffect=null,Y=b;b=a.firstPendingTime;0===b&&(aj=null);1073741823===b?a===vj?uj++:(uj=0,vj=a):uj=0;"function"===typeof Uj&&Uj(c.stateNode,d);Z(a);if(Yi)throw Yi=!1,a=Zi,Zi=null,a;if((W&ej)!==V)return null;gg();return null}function Tj(){for(;null!==Y;){var a=Y.effectTag;0!==(a&256)&&Gi(Y.alternate,Y);0===(a&512)||qj||(qj=!0,dg(97,function(){Dj();return null}));Y=Y.nextEffect}}
function Dj(){if(90!==sj){var a=97<sj?97:sj;sj=90;return cg(a,Vj)}}function Vj(){if(null===rj)return!1;var a=rj;rj=null;if((W&(fj|gj))!==V)throw Error(u(331));var b=W;W|=gj;for(a=a.current.firstEffect;null!==a;){try{var c=a;if(0!==(c.effectTag&512))switch(c.tag){case 0:case 11:case 15:case 22:Hi(5,c),Ii(5,c)}}catch(d){if(null===a)throw Error(u(330));Ei(a,d)}c=a.nextEffect;a.nextEffect=null;a=c}W=b;gg();return!0}
function Wj(a,b,c){b=Ai(c,b);b=Xi(a,b,1073741823);xg(a,b);a=xj(a,1073741823);null!==a&&Z(a)}function Ei(a,b){if(3===a.tag)Wj(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){Wj(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===aj||!aj.has(d))){a=Ai(b,a);a=$i(c,a,1073741823);xg(c,a);c=xj(c,1073741823);null!==c&&Z(c);break}}c=c.return}}
function Oj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);T===a&&U===c?S===vi||S===ui&&1073741823===lj&&$f()-Ti<pj?Ej(a,U):oj=!0:Aj(a,c)&&(b=a.lastPingedTime,0!==b&&b<c||(a.lastPingedTime=c,Z(a)))}function Vi(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=Gg(),b=Hg(b,a,null));a=xj(a,b);null!==a&&Z(a)}var Rj;
Rj=function(a,b,c){var d=b.expirationTime;if(null!==a){var e=b.pendingProps;if(a.memoizedProps!==e||K.current)rg=!0;else{if(d<c){rg=!1;switch(b.tag){case 3:hi(b);Xh();break;case 5:fh(b);if(b.mode&4&&1!==c&&e.hidden)return b.expirationTime=b.childExpirationTime=1,null;break;case 1:L(b.type)&&Gf(b);break;case 4:dh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;e=b.type._context;I(jg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;
if(0!==d&&d>=c)return ji(a,b,c);I(M,M.current&1);b=$h(a,b,c);return null!==b?b.sibling:null}I(M,M.current&1);break;case 19:d=b.childExpirationTime>=c;if(0!==(a.effectTag&64)){if(d)return mi(a,b,c);b.effectTag|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null);I(M,M.current);if(!d)return null}return $h(a,b,c)}rg=!1}}else rg=!1;b.expirationTime=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=Cf(b,J.current);qg(b,c);e=oh(null,
b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(L(d)){var f=!0;Gf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;ug(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Fg(b,d,g,a);e.updater=Jg;b.stateNode=e;e._reactInternalFiber=b;Ng(b,d,a,c);b=gi(null,b,d,!0,f,c)}else b.tag=0,R(null,b,e,c),b=b.child;return b;case 16:a:{e=b.elementType;null!==a&&(a.alternate=
null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;ob(e);if(1!==e._status)throw e._result;e=e._result;b.type=e;f=b.tag=Xj(e);a=ig(e,a);switch(f){case 0:b=di(null,b,e,a,c);break a;case 1:b=fi(null,b,e,a,c);break a;case 11:b=Zh(null,b,e,a,c);break a;case 14:b=ai(null,b,e,ig(e.type,a),d,c);break a}throw Error(u(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),di(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),fi(a,b,d,e,c);
case 3:hi(b);d=b.updateQueue;if(null===a||null===d)throw Error(u(282));d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;vg(a,b);zg(b,d,null,c);d=b.memoizedState.element;if(d===e)Xh(),b=$h(a,b,c);else{if(e=b.stateNode.hydrate)Ph=Jd(b.stateNode.containerInfo.firstChild),Oh=b,e=Qh=!0;if(e)for(c=Yg(b,null,d,c),b.child=c;c;)c.effectTag=c.effectTag&-3|1024,c=c.sibling;else R(a,b,d,c),Xh();b=b.child}return b;case 5:return fh(b),null===a&&Uh(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:
null,g=e.children,Gd(d,e)?g=null:null!==f&&Gd(d,f)&&(b.effectTag|=16),ei(a,b),b.mode&4&&1!==c&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):(R(a,b,g,c),b=b.child),b;case 6:return null===a&&Uh(b),null;case 13:return ji(a,b,c);case 4:return dh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Xg(b,null,d,c):R(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),Zh(a,b,d,e,c);case 7:return R(a,b,b.pendingProps,c),b.child;case 8:return R(a,
b,b.pendingProps.children,c),b.child;case 12:return R(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(jg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=$e(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!K.current){b=$h(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==
k){g=h.child;for(var l=k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=wg(c,null),l.tag=2,xg(h,l));h.expirationTime<c&&(h.expirationTime=c);l=h.alternate;null!==l&&l.expirationTime<c&&(l.expirationTime=c);pg(h.return,c);k.expirationTime<c&&(k.expirationTime=c);break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=
g}R(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,qg(b,c),e=sg(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,R(a,b,d,c),b.child;case 14:return e=b.type,f=ig(e,b.pendingProps),f=ig(e.type,f),ai(a,b,e,f,d,c);case 15:return ci(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,L(d)?(a=!0,Gf(b)):a=!1,qg(b,c),Lg(b,d,e),Ng(b,d,e,c),gi(null,
b,d,!0,a,c);case 19:return mi(a,b,c)}throw Error(u(156,b.tag));};var Uj=null,Li=null;function Yj(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Uj=function(a){try{b.onCommitFiberRoot(c,a,void 0,64===(a.current.effectTag&64))}catch(e){}};Li=function(a){try{b.onCommitFiberUnmount(c,a)}catch(e){}}}catch(d){}return!0}
function Zj(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function Sh(a,b,c,d){return new Zj(a,b,c,d)}
function bi(a){a=a.prototype;return!(!a||!a.isReactComponent)}function Xj(a){if("function"===typeof a)return bi(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===gb)return 11;if(a===jb)return 14}return 2}
function Sg(a,b){var c=a.alternate;null===c?(c=Sh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{expirationTime:b.expirationTime,
firstContext:b.firstContext,responders:b.responders};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Ug(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)bi(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ab:return Wg(c.children,e,f,b);case fb:g=8;e|=7;break;case bb:g=8;e|=1;break;case cb:return a=Sh(12,c,b,e|8),a.elementType=cb,a.type=cb,a.expirationTime=f,a;case hb:return a=Sh(13,c,b,e),a.type=hb,a.elementType=hb,a.expirationTime=f,a;case ib:return a=Sh(19,c,b,e),a.elementType=ib,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case db:g=
10;break a;case eb:g=9;break a;case gb:g=11;break a;case jb:g=14;break a;case kb:g=16;d=null;break a;case lb:g=22;break a}throw Error(u(130,null==a?a:typeof a,""));}b=Sh(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function Wg(a,b,c,d){a=Sh(7,a,d,b);a.expirationTime=c;return a}function Tg(a,b,c){a=Sh(6,a,null,b);a.expirationTime=c;return a}
function Vg(a,b,c){b=Sh(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function ak(a,b,c){this.tag=b;this.current=null;this.containerInfo=a;this.pingCache=this.pendingChildren=null;this.finishedExpirationTime=0;this.finishedWork=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=90;this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}
function Aj(a,b){var c=a.firstSuspendedTime;a=a.lastSuspendedTime;return 0!==c&&c>=b&&a<=b}function xi(a,b){var c=a.firstSuspendedTime,d=a.lastSuspendedTime;c<b&&(a.firstSuspendedTime=b);if(d>b||0===c)a.lastSuspendedTime=b;b<=a.lastPingedTime&&(a.lastPingedTime=0);b<=a.lastExpiredTime&&(a.lastExpiredTime=0)}
function yi(a,b){b>a.firstPendingTime&&(a.firstPendingTime=b);var c=a.firstSuspendedTime;0!==c&&(b>=c?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:b>=a.lastSuspendedTime&&(a.lastSuspendedTime=b+1),b>a.nextKnownPendingLevel&&(a.nextKnownPendingLevel=b))}function Cj(a,b){var c=a.lastExpiredTime;if(0===c||c>b)a.lastExpiredTime=b}
function bk(a,b,c,d){var e=b.current,f=Gg(),g=Dg.suspense;f=Hg(f,e,g);a:if(c){c=c._reactInternalFiber;b:{if(dc(c)!==c||1!==c.tag)throw Error(u(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(L(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(u(171));}if(1===c.tag){var k=c.type;if(L(k)){c=Ff(c,k,h);break a}}c=h}else c=Af;null===b.context?b.context=c:b.pendingContext=c;b=wg(f,g);b.payload={element:a};d=void 0===
d?null:d;null!==d&&(b.callback=d);xg(e,b);Ig(e,f);return f}function ck(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function dk(a,b){a=a.memoizedState;null!==a&&null!==a.dehydrated&&a.retryTime<b&&(a.retryTime=b)}function ek(a,b){dk(a,b);(a=a.alternate)&&dk(a,b)}
function fk(a,b,c){c=null!=c&&!0===c.hydrate;var d=new ak(a,b,c),e=Sh(3,null,null,2===b?7:1===b?3:0);d.current=e;e.stateNode=d;ug(e);a[Od]=d.current;c&&0!==b&&Jc(a,9===a.nodeType?a:a.ownerDocument);this._internalRoot=d}fk.prototype.render=function(a){bk(a,this._internalRoot,null,null)};fk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;bk(null,a,null,function(){b[Od]=null})};
function gk(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function hk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new fk(a,0,b?{hydrate:!0}:void 0)}
function ik(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=ck(g);h.call(a)}}bk(b,g,a,e)}else{f=c._reactRootContainer=hk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=ck(g);k.call(a)}}Nj(function(){bk(b,g,a,e)})}return ck(g)}function jk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:$a,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
wc=function(a){if(13===a.tag){var b=hg(Gg(),150,100);Ig(a,b);ek(a,b)}};xc=function(a){13===a.tag&&(Ig(a,3),ek(a,3))};yc=function(a){if(13===a.tag){var b=Gg();b=Hg(b,a,null);Ig(a,b);ek(a,b)}};
za=function(a,b,c){switch(b){case "input":Cb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Qd(d);if(!e)throw Error(u(90));yb(d);Cb(d,e)}}}break;case "textarea":Kb(a,c);break;case "select":b=c.value,null!=b&&Hb(a,!!c.multiple,b,!1)}};Fa=Mj;
Ga=function(a,b,c,d,e){var f=W;W|=4;try{return cg(98,a.bind(null,b,c,d,e))}finally{W=f,W===V&&gg()}};Ha=function(){(W&(1|fj|gj))===V&&(Lj(),Dj())};Ia=function(a,b){var c=W;W|=2;try{return a(b)}finally{W=c,W===V&&gg()}};function kk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!gk(b))throw Error(u(200));return jk(a,b,null,c)}var lk={Events:[Nc,Pd,Qd,xa,ta,Xd,function(a){jc(a,Wd)},Da,Ea,id,mc,Dj,{current:!1}]};
(function(a){var b=a.findFiberByHostInstance;return Yj(n({},a,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wa.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=hc(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:tc,bundleType:0,version:"16.13.1",
rendererPackageName:"react-dom"});exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lk;exports.createPortal=kk;exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;if(void 0===b){if("function"===typeof a.render)throw Error(u(188));throw Error(u(268,Object.keys(a)));}a=hc(b);a=null===a?null:a.stateNode;return a};
exports.flushSync=function(a,b){if((W&(fj|gj))!==V)throw Error(u(187));var c=W;W|=1;try{return cg(99,a.bind(null,b))}finally{W=c,gg()}};exports.hydrate=function(a,b,c){if(!gk(b))throw Error(u(200));return ik(null,a,b,!0,c)};exports.render=function(a,b,c){if(!gk(b))throw Error(u(200));return ik(null,a,b,!1,c)};
exports.unmountComponentAtNode=function(a){if(!gk(a))throw Error(u(40));return a._reactRootContainer?(Nj(function(){ik(null,null,a,!1,function(){a._reactRootContainer=null;a[Od]=null})}),!0):!1};exports.unstable_batchedUpdates=Mj;exports.unstable_createPortal=function(a,b){return kk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!gk(c))throw Error(u(200));if(null==a||void 0===a._reactInternalFiber)throw Error(u(38));return ik(a,b,c,!1,d)};exports.version="16.13.1";


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(19);
} else {}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var f,g,h,k,l;
if("undefined"===typeof window||"function"!==typeof MessageChannel){var p=null,q=null,t=function(){if(null!==p)try{var a=exports.unstable_now();p(!0,a);p=null}catch(b){throw setTimeout(t,0),b;}},u=Date.now();exports.unstable_now=function(){return Date.now()-u};f=function(a){null!==p?setTimeout(f,0,a):(p=a,setTimeout(t,0))};g=function(a,b){q=setTimeout(a,b)};h=function(){clearTimeout(q)};k=function(){return!1};l=exports.unstable_forceFrameRate=function(){}}else{var w=window.performance,x=window.Date,
y=window.setTimeout,z=window.clearTimeout;if("undefined"!==typeof console){var A=window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");"function"!==typeof A&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"===
typeof w&&"function"===typeof w.now)exports.unstable_now=function(){return w.now()};else{var B=x.now();exports.unstable_now=function(){return x.now()-B}}var C=!1,D=null,E=-1,F=5,G=0;k=function(){return exports.unstable_now()>=G};l=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):F=0<a?Math.floor(1E3/a):5};var H=new MessageChannel,I=H.port2;H.port1.onmessage=
function(){if(null!==D){var a=exports.unstable_now();G=a+F;try{D(!0,a)?I.postMessage(null):(C=!1,D=null)}catch(b){throw I.postMessage(null),b;}}else C=!1};f=function(a){D=a;C||(C=!0,I.postMessage(null))};g=function(a,b){E=y(function(){a(exports.unstable_now())},b)};h=function(){z(E);E=-1}}function J(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<K(e,b))a[d]=b,a[c]=e,c=d;else break a}}function L(a){a=a[0];return void 0===a?null:a}
function M(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>K(n,c))void 0!==r&&0>K(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>K(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function K(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var N=[],O=[],P=1,Q=null,R=3,S=!1,T=!1,U=!1;
function V(a){for(var b=L(O);null!==b;){if(null===b.callback)M(O);else if(b.startTime<=a)M(O),b.sortIndex=b.expirationTime,J(N,b);else break;b=L(O)}}function W(a){U=!1;V(a);if(!T)if(null!==L(N))T=!0,f(X);else{var b=L(O);null!==b&&g(W,b.startTime-a)}}
function X(a,b){T=!1;U&&(U=!1,h());S=!0;var c=R;try{V(b);for(Q=L(N);null!==Q&&(!(Q.expirationTime>b)||a&&!k());){var d=Q.callback;if(null!==d){Q.callback=null;R=Q.priorityLevel;var e=d(Q.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?Q.callback=e:Q===L(N)&&M(N);V(b)}else M(N);Q=L(N)}if(null!==Q)var m=!0;else{var n=L(O);null!==n&&g(W,n.startTime-b);m=!1}return m}finally{Q=null,R=c,S=!1}}
function Y(a){switch(a){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3}}var Z=l;exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){T||S||(T=!0,f(X))};
exports.unstable_getCurrentPriorityLevel=function(){return R};exports.unstable_getFirstCallbackNode=function(){return L(N)};exports.unstable_next=function(a){switch(R){case 1:case 2:case 3:var b=3;break;default:b=R}var c=R;R=b;try{return a()}finally{R=c}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=Z;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=R;R=a;try{return b()}finally{R=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();if("object"===typeof c&&null!==c){var e=c.delay;e="number"===typeof e&&0<e?d+e:d;c="number"===typeof c.timeout?c.timeout:Y(a)}else c=Y(a),e=d;c=e+c;a={id:P++,callback:b,priorityLevel:a,startTime:e,expirationTime:c,sortIndex:-1};e>d?(a.sortIndex=e,J(O,a),null===L(N)&&a===L(O)&&(U?h():U=!0,g(W,e-d))):(a.sortIndex=c,J(N,a),T||S||(T=!0,f(X)));return a};
exports.unstable_shouldYield=function(){var a=exports.unstable_now();V(a);var b=L(N);return b!==Q&&null!==Q&&null!==b&&null!==b.callback&&b.startTime<=a&&b.expirationTime<Q.expirationTime||k()};exports.unstable_wrapCallback=function(a){var b=R;return function(){var c=R;R=b;try{return a.apply(this,arguments)}finally{R=c}}};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(21);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.memo"):
60115,r=b?Symbol.for("react.lazy"):60116;function t(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case r:case q:case d:return u}}}function v(a){return t(a)===m}exports.typeOf=t;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;
exports.Fragment=e;exports.Lazy=r;exports.Memo=q;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||"object"===typeof a&&null!==a&&(a.$$typeof===r||a.$$typeof===q||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n)};exports.isAsyncMode=function(a){return v(a)||t(a)===l};exports.isConcurrentMode=v;exports.isContextConsumer=function(a){return t(a)===k};
exports.isContextProvider=function(a){return t(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return t(a)===n};exports.isFragment=function(a){return t(a)===e};exports.isLazy=function(a){return t(a)===r};exports.isMemo=function(a){return t(a)===q};exports.isPortal=function(a){return t(a)===d};exports.isProfiler=function(a){return t(a)===g};exports.isStrictMode=function(a){return t(a)===f};
exports.isSuspense=function(a){return t(a)===p};


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
// CONCATENATED MODULE: ./node_modules/resolve-pathname/esm/resolve-pathname.js
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to, from) {
  if (from === undefined) from = '';

  var toParts = (to && to.split('/')) || [];
  var fromParts = (from && from.split('/')) || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');

  if (
    mustEndAbs &&
    fromParts[0] !== '' &&
    (!fromParts[0] || !isAbsolute(fromParts[0]))
  )
    fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ var resolve_pathname = (resolvePathname);

// CONCATENATED MODULE: ./node_modules/value-equal/esm/value-equal.js
function value_equal_valueOf(obj) {
  return obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj);
}

function valueEqual(a, b) {
  // Test for strict equality first.
  if (a === b) return true;

  // Otherwise, if either of them == null they are not equal.
  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return (
      Array.isArray(b) &&
      a.length === b.length &&
      a.every(function(item, index) {
        return valueEqual(item, b[index]);
      })
    );
  }

  if (typeof a === 'object' || typeof b === 'object') {
    var aValue = value_equal_valueOf(a);
    var bValue = value_equal_valueOf(b);

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    return Object.keys(Object.assign({}, a, b)).every(function(key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ var value_equal = (valueEqual);

// CONCATENATED MODULE: ./node_modules/tiny-invariant/dist/tiny-invariant.esm.js
var isProduction = "production" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    throw new Error(prefix + ": " + (message || ''));
}

/* harmony default export */ var tiny_invariant_esm = (invariant);

// CONCATENATED MODULE: ./node_modules/history/esm/history.js






function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = resolve_pathname(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && value_equal(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
     false ? undefined : void 0;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           false ? undefined : void 0;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  false ? undefined : tiny_invariant_esm(false) : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
     false ? undefined : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
     false ? undefined : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? undefined : void 0;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
     false ? undefined : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? undefined : void 0;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function stripHash(url) {
  var hashIndex = url.indexOf('#');
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  false ? undefined : tiny_invariant_esm(false) : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
     false ? undefined : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function locationsAreEqual$$1(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
  }

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    var baseTag = document.querySelector('base');
    var href = '';

    if (baseTag && baseTag.getAttribute('href')) {
      href = stripHash(window.location.href);
    }

    return href + '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
     false ? undefined : void 0;
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
         false ? undefined : void 0;
        setState();
      }
    });
  }

  function replace(path, state) {
     false ? undefined : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
     false ? undefined : void 0;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
     false ? undefined : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
     false ? undefined : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}



// EXTERNAL MODULE: ./node_modules/mini-create-react-context/dist/esm/index.js
var esm = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/react-router/node_modules/path-to-regexp/index.js
var path_to_regexp = __webpack_require__(8);
var path_to_regexp_default = /*#__PURE__*/__webpack_require__.n(path_to_regexp);

// EXTERNAL MODULE: ./node_modules/react-is/index.js
var react_is = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(13);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);

// CONCATENATED MODULE: ./node_modules/react-router/esm/react-router.js













// TODO: Replace with React.createContext once we can assume React 16+

var react_router_createNamedContext = function createNamedContext(name) {
  var context = Object(esm["a" /* default */])();
  context.displayName = name;
  return context;
};

var historyContext =
/*#__PURE__*/
react_router_createNamedContext("Router-History");

// TODO: Replace with React.createContext once we can assume React 16+

var createNamedContext$1 = function createNamedContext(name) {
  var context = Object(esm["a" /* default */])();
  context.displayName = name;
  return context;
};

var react_router_context =
/*#__PURE__*/
createNamedContext$1("Router");

/**
 * The public API for putting history on context.
 */

var react_router_Router =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(Router, _React$Component);

  Router.computeRootMatch = function computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  function Router(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      location: props.history.location
    }; // This is a bit of a hack. We have to start listening for location
    // changes here in the constructor in case there are any <Redirect>s
    // on the initial render. If there are, they will replace/push when
    // they mount and since cDM fires in children before parents, we may
    // get a new location before the <Router> is mounted.

    _this._isMounted = false;
    _this._pendingLocation = null;

    if (!props.staticContext) {
      _this.unlisten = props.history.listen(function (location) {
        if (_this._isMounted) {
          _this.setState({
            location: location
          });
        } else {
          _this._pendingLocation = location;
        }
      });
    }

    return _this;
  }

  var _proto = Router.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;

    if (this._pendingLocation) {
      this.setState({
        location: this._pendingLocation
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unlisten) this.unlisten();
  };

  _proto.render = function render() {
    return react_default.a.createElement(react_router_context.Provider, {
      value: {
        history: this.props.history,
        location: this.state.location,
        match: Router.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    }, react_default.a.createElement(historyContext.Provider, {
      children: this.props.children || null,
      value: this.props.history
    }));
  };

  return Router;
}(react_default.a.Component);

if (false) {}

/**
 * The public API for a <Router> that stores location in memory.
 */

var react_router_MemoryRouter =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createMemoryHistory(_this.props);
    return _this;
  }

  var _proto = MemoryRouter.prototype;

  _proto.render = function render() {
    return react_default.a.createElement(react_router_Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return MemoryRouter;
}(react_default.a.Component);

if (false) {}

var react_router_Lifecycle =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(Lifecycle, _React$Component);

  function Lifecycle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Lifecycle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onMount) this.props.onMount.call(this, this);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onUnmount) this.props.onUnmount.call(this, this);
  };

  _proto.render = function render() {
    return null;
  };

  return Lifecycle;
}(react_default.a.Component);

/**
 * The public API for prompting the user before navigating away from a screen.
 */

function Prompt(_ref) {
  var message = _ref.message,
      _ref$when = _ref.when,
      when = _ref$when === void 0 ? true : _ref$when;
  return react_default.a.createElement(react_router_context.Consumer, null, function (context) {
    !context ?  false ? undefined : tiny_invariant_esm(false) : void 0;
    if (!when || context.staticContext) return null;
    var method = context.history.block;
    return react_default.a.createElement(react_router_Lifecycle, {
      onMount: function onMount(self) {
        self.release = method(message);
      },
      onUpdate: function onUpdate(self, prevProps) {
        if (prevProps.message !== message) {
          self.release();
          self.release = method(message);
        }
      },
      onUnmount: function onUnmount(self) {
        self.release();
      },
      message: message
    });
  });
}

if (false) { var messageType; }

var cache = {};
var cacheLimit = 10000;
var cacheCount = 0;

function compilePath(path) {
  if (cache[path]) return cache[path];
  var generator = path_to_regexp_default.a.compile(path);

  if (cacheCount < cacheLimit) {
    cache[path] = generator;
    cacheCount++;
  }

  return generator;
}
/**
 * Public API for generating a URL pathname from a path and parameters.
 */


function generatePath(path, params) {
  if (path === void 0) {
    path = "/";
  }

  if (params === void 0) {
    params = {};
  }

  return path === "/" ? path : compilePath(path)(params, {
    pretty: true
  });
}

/**
 * The public API for navigating programmatically with a component.
 */

function Redirect(_ref) {
  var computedMatch = _ref.computedMatch,
      to = _ref.to,
      _ref$push = _ref.push,
      push = _ref$push === void 0 ? false : _ref$push;
  return react_default.a.createElement(react_router_context.Consumer, null, function (context) {
    !context ?  false ? undefined : tiny_invariant_esm(false) : void 0;
    var history = context.history,
        staticContext = context.staticContext;
    var method = push ? history.push : history.replace;
    var location = createLocation(computedMatch ? typeof to === "string" ? generatePath(to, computedMatch.params) : _extends({}, to, {
      pathname: generatePath(to.pathname, computedMatch.params)
    }) : to); // When rendering in a static context,
    // set the new location immediately.

    if (staticContext) {
      method(location);
      return null;
    }

    return react_default.a.createElement(react_router_Lifecycle, {
      onMount: function onMount() {
        method(location);
      },
      onUpdate: function onUpdate(self, prevProps) {
        var prevLocation = createLocation(prevProps.to);

        if (!locationsAreEqual(prevLocation, _extends({}, location, {
          key: prevLocation.key
        }))) {
          method(location);
        }
      },
      to: to
    });
  });
}

if (false) {}

var cache$1 = {};
var cacheLimit$1 = 10000;
var cacheCount$1 = 0;

function compilePath$1(path, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
  if (pathCache[path]) return pathCache[path];
  var keys = [];
  var regexp = path_to_regexp_default()(path, keys, options);
  var result = {
    regexp: regexp,
    keys: keys
  };

  if (cacheCount$1 < cacheLimit$1) {
    pathCache[path] = result;
    cacheCount$1++;
  }

  return result;
}
/**
 * Public API for matching a URL pathname to a path.
 */


function matchPath(pathname, options) {
  if (options === void 0) {
    options = {};
  }

  if (typeof options === "string" || Array.isArray(options)) {
    options = {
      path: options
    };
  }

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === void 0 ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === void 0 ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
  var paths = [].concat(path);
  return paths.reduce(function (matched, path) {
    if (!path && path !== "") return null;
    if (matched) return matched;

    var _compilePath = compilePath$1(path, {
      end: exact,
      strict: strict,
      sensitive: sensitive
    }),
        regexp = _compilePath.regexp,
        keys = _compilePath.keys;

    var match = regexp.exec(pathname);
    if (!match) return null;
    var url = match[0],
        values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact) return null;
    return {
      path: path,
      // the path used to match
      url: path === "/" && url === "" ? "/" : url,
      // the matched portion of the URL
      isExact: isExact,
      // whether or not we matched exactly
      params: keys.reduce(function (memo, key, index) {
        memo[key.name] = values[index];
        return memo;
      }, {})
    };
  }, null);
}

function isEmptyChildren(children) {
  return react_default.a.Children.count(children) === 0;
}

function evalChildrenDev(children, props, path) {
  var value = children(props);
   false ? undefined : void 0;
  return value || null;
}
/**
 * The public API for matching a single path and rendering.
 */


var react_router_Route =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(Route, _React$Component);

  function Route() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Route.prototype;

  _proto.render = function render() {
    var _this = this;

    return react_default.a.createElement(react_router_context.Consumer, null, function (context$1) {
      !context$1 ?  false ? undefined : tiny_invariant_esm(false) : void 0;
      var location = _this.props.location || context$1.location;
      var match = _this.props.computedMatch ? _this.props.computedMatch // <Switch> already computed the match for us
      : _this.props.path ? matchPath(location.pathname, _this.props) : context$1.match;

      var props = _extends({}, context$1, {
        location: location,
        match: match
      });

      var _this$props = _this.props,
          children = _this$props.children,
          component = _this$props.component,
          render = _this$props.render; // Preact uses an empty array as children by
      // default, so use null if that's the case.

      if (Array.isArray(children) && children.length === 0) {
        children = null;
      }

      return react_default.a.createElement(react_router_context.Provider, {
        value: props
      }, props.match ? children ? typeof children === "function" ?  false ? undefined : children(props) : children : component ? react_default.a.createElement(component, props) : render ? render(props) : null : typeof children === "function" ?  false ? undefined : children(props) : null);
    });
  };

  return Route;
}(react_default.a.Component);

if (false) {}

function react_router_addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}

function addBasename(basename, location) {
  if (!basename) return location;
  return _extends({}, location, {
    pathname: react_router_addLeadingSlash(basename) + location.pathname
  });
}

function react_router_stripBasename(basename, location) {
  if (!basename) return location;
  var base = react_router_addLeadingSlash(basename);
  if (location.pathname.indexOf(base) !== 0) return location;
  return _extends({}, location, {
    pathname: location.pathname.substr(base.length)
  });
}

function createURL(location) {
  return typeof location === "string" ? location : createPath(location);
}

function staticHandler(methodName) {
  return function () {
      false ? undefined : tiny_invariant_esm(false) ;
  };
}

function noop() {}
/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */


var react_router_StaticRouter =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(StaticRouter, _React$Component);

  function StaticRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handlePush = function (location) {
      return _this.navigateTo(location, "PUSH");
    };

    _this.handleReplace = function (location) {
      return _this.navigateTo(location, "REPLACE");
    };

    _this.handleListen = function () {
      return noop;
    };

    _this.handleBlock = function () {
      return noop;
    };

    return _this;
  }

  var _proto = StaticRouter.prototype;

  _proto.navigateTo = function navigateTo(location, action) {
    var _this$props = this.props,
        _this$props$basename = _this$props.basename,
        basename = _this$props$basename === void 0 ? "" : _this$props$basename,
        _this$props$context = _this$props.context,
        context = _this$props$context === void 0 ? {} : _this$props$context;
    context.action = action;
    context.location = addBasename(basename, createLocation(location));
    context.url = createURL(context.location);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        _this$props2$basename = _this$props2.basename,
        basename = _this$props2$basename === void 0 ? "" : _this$props2$basename,
        _this$props2$context = _this$props2.context,
        context = _this$props2$context === void 0 ? {} : _this$props2$context,
        _this$props2$location = _this$props2.location,
        location = _this$props2$location === void 0 ? "/" : _this$props2$location,
        rest = _objectWithoutPropertiesLoose(_this$props2, ["basename", "context", "location"]);

    var history = {
      createHref: function createHref(path) {
        return react_router_addLeadingSlash(basename + createURL(path));
      },
      action: "POP",
      location: react_router_stripBasename(basename, createLocation(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler("go"),
      goBack: staticHandler("goBack"),
      goForward: staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };
    return react_default.a.createElement(react_router_Router, _extends({}, rest, {
      history: history,
      staticContext: context
    }));
  };

  return StaticRouter;
}(react_default.a.Component);

if (false) {}

/**
 * The public API for rendering the first <Route> that matches.
 */

var react_router_Switch =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(Switch, _React$Component);

  function Switch() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Switch.prototype;

  _proto.render = function render() {
    var _this = this;

    return react_default.a.createElement(react_router_context.Consumer, null, function (context) {
      !context ?  false ? undefined : tiny_invariant_esm(false) : void 0;
      var location = _this.props.location || context.location;
      var element, match; // We use React.Children.forEach instead of React.Children.toArray().find()
      // here because toArray adds keys to all child elements and we do not want
      // to trigger an unmount/remount for two <Route>s that render the same
      // component at different URLs.

      react_default.a.Children.forEach(_this.props.children, function (child) {
        if (match == null && react_default.a.isValidElement(child)) {
          element = child;
          var path = child.props.path || child.props.from;
          match = path ? matchPath(location.pathname, _extends({}, child.props, {
            path: path
          })) : context.match;
        }
      });
      return match ? react_default.a.cloneElement(element, {
        location: location,
        computedMatch: match
      }) : null;
    });
  };

  return Switch;
}(react_default.a.Component);

if (false) {}

/**
 * A public higher-order component to access the imperative API
 */

function withRouter(Component) {
  var displayName = "withRouter(" + (Component.displayName || Component.name) + ")";

  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = _objectWithoutPropertiesLoose(props, ["wrappedComponentRef"]);

    return react_default.a.createElement(react_router_context.Consumer, null, function (context) {
      !context ?  false ? undefined : tiny_invariant_esm(false) : void 0;
      return react_default.a.createElement(Component, _extends({}, remainingProps, context, {
        ref: wrappedComponentRef
      }));
    });
  };

  C.displayName = displayName;
  C.WrappedComponent = Component;

  if (false) {}

  return hoist_non_react_statics_cjs_default()(C, Component);
}

var useContext = react_default.a.useContext;
function useHistory() {
  if (false) {}

  return useContext(historyContext);
}
function useLocation() {
  if (false) {}

  return useContext(react_router_context).location;
}
function useParams() {
  if (false) {}

  var match = useContext(react_router_context).match;
  return match ? match.params : {};
}
function useRouteMatch(path) {
  if (false) {}

  var location = useLocation();
  var match = useContext(react_router_context).match;
  return path ? matchPath(location.pathname, path) : match;
}

if (false) { var secondaryBuildName, initialBuildName, buildNames, react_router_key, global; }


//# sourceMappingURL=react-router.js.map

// CONCATENATED MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js











/**
 * The public API for a <Router> that uses HTML5 history.
 */

var react_router_dom_BrowserRouter =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createBrowserHistory(_this.props);
    return _this;
  }

  var _proto = BrowserRouter.prototype;

  _proto.render = function render() {
    return react_default.a.createElement(react_router_Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return BrowserRouter;
}(react_default.a.Component);

if (false) {}

/**
 * The public API for a <Router> that uses window.location.hash.
 */

var react_router_dom_HashRouter =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(HashRouter, _React$Component);

  function HashRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createHashHistory(_this.props);
    return _this;
  }

  var _proto = HashRouter.prototype;

  _proto.render = function render() {
    return react_default.a.createElement(react_router_Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return HashRouter;
}(react_default.a.Component);

if (false) {}

var resolveToLocation = function resolveToLocation(to, currentLocation) {
  return typeof to === "function" ? to(currentLocation) : to;
};
var react_router_dom_normalizeToLocation = function normalizeToLocation(to, currentLocation) {
  return typeof to === "string" ? createLocation(to, null, null, currentLocation) : to;
};

var forwardRefShim = function forwardRefShim(C) {
  return C;
};

var forwardRef = react_default.a.forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = forwardRefShim;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var LinkAnchor = forwardRef(function (_ref, forwardedRef) {
  var innerRef = _ref.innerRef,
      navigate = _ref.navigate,
      _onClick = _ref.onClick,
      rest = _objectWithoutPropertiesLoose(_ref, ["innerRef", "navigate", "onClick"]);

  var target = rest.target;

  var props = _extends({}, rest, {
    onClick: function onClick(event) {
      try {
        if (_onClick) _onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && ( // ignore everything but left clicks
      !target || target === "_self") && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();
          navigate();
        }
    }
  }); // React 15 compat


  if (forwardRefShim !== forwardRef) {
    props.ref = forwardedRef || innerRef;
  } else {
    props.ref = innerRef;
  }
  /* eslint-disable-next-line jsx-a11y/anchor-has-content */


  return react_default.a.createElement("a", props);
});

if (false) {}
/**
 * The public API for rendering a history-aware <a>.
 */


var Link = forwardRef(function (_ref2, forwardedRef) {
  var _ref2$component = _ref2.component,
      component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
      replace = _ref2.replace,
      to = _ref2.to,
      innerRef = _ref2.innerRef,
      rest = _objectWithoutPropertiesLoose(_ref2, ["component", "replace", "to", "innerRef"]);

  return react_default.a.createElement(react_router_context.Consumer, null, function (context) {
    !context ?  false ? undefined : tiny_invariant_esm(false) : void 0;
    var history = context.history;
    var location = react_router_dom_normalizeToLocation(resolveToLocation(to, context.location), context.location);
    var href = location ? history.createHref(location) : "";

    var props = _extends({}, rest, {
      href: href,
      navigate: function navigate() {
        var location = resolveToLocation(to, context.location);
        var method = replace ? history.replace : history.push;
        method(location);
      }
    }); // React 15 compat


    if (forwardRefShim !== forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return react_default.a.createElement(component, props);
  });
});

if (false) { var refType, toType; }

var forwardRefShim$1 = function forwardRefShim(C) {
  return C;
};

var forwardRef$1 = react_default.a.forwardRef;

if (typeof forwardRef$1 === "undefined") {
  forwardRef$1 = forwardRefShim$1;
}

function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  return classnames.filter(function (i) {
    return i;
  }).join(" ");
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


var NavLink = forwardRef$1(function (_ref, forwardedRef) {
  var _ref$ariaCurrent = _ref["aria-current"],
      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
      activeStyle = _ref.activeStyle,
      classNameProp = _ref.className,
      exact = _ref.exact,
      isActiveProp = _ref.isActive,
      locationProp = _ref.location,
      sensitive = _ref.sensitive,
      strict = _ref.strict,
      styleProp = _ref.style,
      to = _ref.to,
      innerRef = _ref.innerRef,
      rest = _objectWithoutPropertiesLoose(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);

  return react_default.a.createElement(react_router_context.Consumer, null, function (context) {
    !context ?  false ? undefined : tiny_invariant_esm(false) : void 0;
    var currentLocation = locationProp || context.location;
    var toLocation = react_router_dom_normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
    var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    var match = escapedPath ? matchPath(currentLocation.pathname, {
      path: escapedPath,
      exact: exact,
      sensitive: sensitive,
      strict: strict
    }) : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
    var className = isActive ? joinClassnames(classNameProp, activeClassName) : classNameProp;
    var style = isActive ? _extends({}, styleProp, {}, activeStyle) : styleProp;

    var props = _extends({
      "aria-current": isActive && ariaCurrent || null,
      className: className,
      style: style,
      to: toLocation
    }, rest); // React 15 compat


    if (forwardRefShim$1 !== forwardRef$1) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return react_default.a.createElement(Link, props);
  });
});

if (false) { var ariaCurrentType; }


//# sourceMappingURL=react-router-dom.js.map

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(2);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./src/data.ts
var src_data = __webpack_require__(1);

// CONCATENATED MODULE: ./src/PercentBar.tsx

function PercentBar({ value, max }) {
    return (react["createElement"]("div", { className: "flex h1 w-100 Bar-Container" },
        react["createElement"]("div", { style: {
                width: (value / max) * 100 + "%",
                background: "var(--color-fg3)",
            }, className: "Bar-Fill" })));
}
PercentBar.displayName = "PercentBar";

// CONCATENATED MODULE: ./src/DexCoverage.tsx



const DexCoverage = ({ coverageTypes, types, isLoading, }) => {
    const count = coverageTypes.filter(({ type1, type2 }) => {
        const matchups = types.map((t) => Object(src_data["d" /* matchupFor */])(type1, type2, t));
        return matchups.some((effectiveness) => {
            return effectiveness > src_data["a" /* Effectiveness */].REGULAR;
        });
    }).length;
    const total = coverageTypes.length;
    const ratio = count / total || 0;
    const percent = (ratio * 100).toFixed(0);
    return (react["createElement"]("div", { className: "pt1 tabular-nums flex flex-column lh-copy" },
        react["createElement"](PercentBar, { value: count, max: total }),
        react["createElement"]("div", { className: "flex items-center" }, isLoading ? (react["createElement"]("div", { className: "flex-auto tc" }, "Loading...")) : (react["createElement"](react["Fragment"], null,
            react["createElement"]("div", { className: "tl mr2 w3" },
                percent,
                "%"),
            react["createElement"]("div", { className: "flex-auto tr" },
                count,
                " / ",
                total,
                " forms"))))));
};
DexCoverage.displayName = "DexCoverage";
/* harmony default export */ var src_DexCoverage = (DexCoverage);

// CONCATENATED MODULE: ./src/Matchups.tsx





function Badge({ type }) {
    return (react["createElement"]("div", { className: classnames_default()(`type-bg-dark type-${type}`, "ba border3", "ph1 pv1 br1", "ttc tc b f5"), style: { width: 80, margin: "0.125rem" } }, type));
}
Badge.displayName = "Badge";
function Section({ title, types }) {
    if (types.length === 0) {
        return null;
    }
    return (react["createElement"]("div", null,
        react["createElement"]("h3", { className: "f5 mt3 mb0" }, title),
        react["createElement"]("div", { className: "mw5 center MatchupsSection-Container" }, types.map((t) => (react["createElement"](Badge, { key: `type-${t}`, type: t }))))));
}
Section.displayName = "Section";
function Matchups({ coverageTypes, kind, types, formatTitle, matchups, fallbackCoverageTypes, isLoading, }) {
    return (react["createElement"]("div", { className: "tc pt2", id: `matchup-${kind}` },
        kind === "offense" ? (react["createElement"]("div", null,
            react["createElement"]("h3", { className: "f5 mt3 mb0" },
                "Weakness Coverage",
                " ",
                react["createElement"]("span", { className: "normal" },
                    "(",
                    react["createElement"](Link, { to: "/offense/coverage", className: "underline fg-link OutlineFocus" }, "edit"),
                    ")")),
            react["createElement"]("div", { className: classnames_default()("pt1 mw5 center tc", isLoading && ["o-30 no-pointer cursor-na"]) },
                react["createElement"](src_DexCoverage, { coverageTypes: coverageTypes !== null && coverageTypes !== void 0 ? coverageTypes : fallbackCoverageTypes, types: types, isLoading: isLoading })))) : null,
        react["createElement"](Section, { title: formatTitle("4×"), types: matchups.typesFor(src_data["a" /* Effectiveness */].QUADRUPLE) }),
        react["createElement"](Section, { title: formatTitle("2×"), types: matchups.typesFor(src_data["a" /* Effectiveness */].DOUBLE) }),
        react["createElement"](Section, { title: formatTitle("1×"), types: matchups.typesFor(src_data["a" /* Effectiveness */].REGULAR) }),
        react["createElement"](Section, { title: formatTitle("½×"), types: matchups.typesFor(src_data["a" /* Effectiveness */].HALF) }),
        react["createElement"](Section, { title: formatTitle("¼×"), types: matchups.typesFor(src_data["a" /* Effectiveness */].QUARTER) }),
        react["createElement"](Section, { title: formatTitle("0×"), types: matchups.typesFor(src_data["a" /* Effectiveness */].ZERO) })));
}
Matchups.displayName = "Matchups";
function Defense({ type1, type2, fallbackCoverageTypes }) {
    return (react["createElement"](Matchups, { kind: "defense", types: [type1, type2], formatTitle: (x) => `Takes ${x} From`, matchups: Object(src_data["c" /* defensiveMatchups */])(type1, type2), fallbackCoverageTypes: fallbackCoverageTypes, isLoading: false }));
}
Defense.displayName = "Matchups.Defense";
function Offense({ coverageTypes, types, fallbackCoverageTypes, isLoading, }) {
    return (react["createElement"](Matchups, { kind: "offense", types: types, coverageTypes: coverageTypes, formatTitle: (x) => `Deals ${x} to`, matchups: Object(src_data["f" /* offensiveMatchups */])(types), fallbackCoverageTypes: fallbackCoverageTypes, isLoading: isLoading }));
}
Offense.displayName = "Matchups.Offense";

// CONCATENATED MODULE: ./src/TypeSelector.tsx



const buttonInnerHeight = "1.5rem";
function TypeSelector({ onChange, value, includeNone, disabledTypes, }) {
    const theTypes = includeNone ? src_data["j" /* typesOrNone */] : src_data["h" /* types */];
    const styles = {
        disabled: "border4 fg4 bg2 o-60",
        selected: "border2 type-bg-dark no-box-shadow button-shadow",
        normal: "border2 bg1 fg1 button-bg button-shadow",
    };
    return (react["createElement"]("div", { className: "TypeSelector-Container" }, theTypes.map((type) => {
        const isDisabled = disabledTypes.includes(type);
        const isSelected = type === value;
        const style = isDisabled
            ? styles.disabled
            : isSelected
                ? styles.selected
                : styles.normal;
        return (react["createElement"]("button", { key: `type-${type}`, disabled: isDisabled, className: classnames_default()(style, "db w-100", "ba br-pill", "pv1 ph2", "f5 b", "ttc", "SimpleFocus", "active-squish", `type-${type}`), onClick: () => onChange(type) },
            react["createElement"]("span", { className: "flex flex-row items-center justify-center" },
                react["createElement"]("span", { className: classnames_default()(`type-${type} b--black br-pill ba`, type === value
                        ? "border1 type-bg-light"
                        : "border2 type-bg-dark"), style: {
                        width: "1rem",
                        height: "1rem",
                    } }),
                react["createElement"]("span", { className: "tl pl2 pr1 flex-auto truncate", style: { lineHeight: buttonInnerHeight } }, type),
                isSelected ? (react["createElement"]("small", { "aria-label": "" }, " \u25CF\u00A0")) : (react["createElement"]("small", null)))));
    })));
}
TypeSelector.displayName = "TypeSelector";

// CONCATENATED MODULE: ./src/useScrollToFragment.ts


function useScrollToFragment() {
    const fragment = useLocation().hash.slice(1);
    react["useLayoutEffect"](() => {
        if (!fragment) {
            return;
        }
        const element = document.getElementById(fragment);
        if (element instanceof HTMLElement) {
            element.scrollIntoView();
        }
    }, [fragment]);
}

// CONCATENATED MODULE: ./src/useSearch.tsx

function useSearch() {
    const location = useLocation();
    return new URLSearchParams(location.search);
}

// CONCATENATED MODULE: ./src/ScreenDefense.tsx







function ScreenDefense({ setDefenseParams, fallbackCoverageTypes, }) {
    useScrollToFragment();
    const search = useSearch();
    const history = useHistory();
    const [type1 = src_data["b" /* Type */].NORMAL, type2 = src_data["b" /* Type */].NONE] = Object(src_data["i" /* typesFromString */])(search.get("types") || "");
    function createParams(types) {
        const params = new URLSearchParams();
        if (types.length >= 0) {
            if (types[1] === src_data["b" /* Type */].NONE) {
                params.set("types", types[0]);
            }
            else {
                params.set("types", types.join(" "));
            }
        }
        return "?" + params;
    }
    function updateTypes(types) {
        history.replace({ search: createParams(types) });
    }
    function updateType1(t) {
        updateTypes([t, type2]);
    }
    function updateType2(t) {
        updateTypes([type1, t]);
    }
    const params = createParams([type1, type2]);
    react["useEffect"](() => {
        setDefenseParams(params);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params]);
    const classH2 = "tc f5 mv3";
    return (react["createElement"]("main", { className: "ph3 pt1 pb4 content-wide center" },
        react["createElement"]("div", { className: "dib w-50-ns w-100 v-top" },
            react["createElement"]("h2", { className: classH2 }, "Choose Primary Type"),
            react["createElement"](TypeSelector, { value: type1, onChange: updateType1, disabledTypes: [], includeNone: false }),
            react["createElement"]("h2", { className: `${classH2} mt4` }, "Choose Secondary Type"),
            react["createElement"](TypeSelector, { value: type2, onChange: updateType2, disabledTypes: [type1], includeNone: true })),
        react["createElement"]("div", { className: "dib w-50-ns w-100 v-top pl3-ns" },
            react["createElement"]("hr", { className: "dn-ns subtle-hr mv4" }),
            react["createElement"](Defense, { type1: type1, type2: type2, fallbackCoverageTypes: fallbackCoverageTypes }))));
}
ScreenDefense.displayName = "ScreenDefense";

// CONCATENATED MODULE: ./src/ScreenInfo.tsx

const year = new Date().getFullYear();
function ScreenInfo() {
    return (react["createElement"]("main", { className: "pa3 center content-narrow lh-copy" },
        react["createElement"]("h2", { className: "lh-title f4" }, "Contact Me"),
        react["createElement"]("p", null,
            "Questions, suggestions, or just want to say thank you? Email me at",
            " ",
            react["createElement"]("a", { className: "underline fg-link OutlineFocus", href: "mailto:brian@wavebeem.com" }, "brian@wavebeem.com"),
            ". Source code is available on",
            " ",
            react["createElement"]("a", { href: "https://github.com/wavebeem/pkmn.help", className: "underline fg-link OutlineFocus" }, "GitHub"),
            "."),
        react["createElement"]("h2", { className: "lh-title f4" }, "Privacy"),
        react["createElement"]("p", null,
            "I will never runs ads or steal your personal data. I use",
            " ",
            react["createElement"]("a", { href: "https://plausible.io/privacy", className: "underline fg-link OutlineFocus" }, "Plausible Analytics"),
            ", which is self-funded, independent, hosted in the EU, and doesn't store any cookies on your computer."),
        react["createElement"]("h2", { className: "lh-title f4" }, "Giving Back"),
        react["createElement"]("p", null, "I have spent countless hours improving this site. If you appreciate what I've made, please consider donating to charities that support BIPOC and transgender rights."),
        react["createElement"]("h2", { className: "lh-title f4" }, "Special Thanks"),
        react["createElement"]("ul", { className: "lh-copy mt1 ph3" },
            react["createElement"]("li", null, "Jansjo (testing, research)"),
            react["createElement"]("li", null, "Several anonymous Pok\u00E9 Fans")),
        react["createElement"]("h2", { className: "lh-title f4" }, "Legal Info"),
        react["createElement"]("p", null,
            "Pok\u00E9mon \u00A9 2002\u2013",
            year,
            " Pok\u00E9mon. \u00A9 1995\u2013",
            year,
            " ",
            "Nintendo/Creatures Inc./GAME FREAK inc. \u2122, \u00AE and Pok\u00E9mon character names are trademarks of Nintendo."),
        react["createElement"]("p", null, "No copyright or trademark infringement is intended in using Pok\u00E9mon content on this page."),
        react["createElement"]("p", null,
            "Pok\u00E9dex data from",
            " ",
            react["createElement"]("a", { className: "underline fg-link OutlineFocus", href: "https://pokeapi.co/" }, "Pok\u00E9API"),
            "."),
        react["createElement"]("p", null,
            "pkmn.help \u00A9 2013\u2013",
            year,
            " ",
            react["createElement"]("a", { href: "https://www.mockbrian.com", className: "underline fg-link OutlineFocus" }, "Brian Mock"),
            ".")));
}
ScreenInfo.displayName = "ScreenInfo";

// CONCATENATED MODULE: ./src/MultiTypeSelector.tsx



const MultiTypeSelector_buttonInnerHeight = "1.5rem";
function MultiTypeSelector({ onChange, value, }) {
    const styles = {
        selected: "border2 type-bg-dark no-box-shadow button-shadow",
        normal: "border2 bg1 fg1 button-bg button-shadow",
    };
    return (react["createElement"]("div", { className: "MultiTypeSelector-Container" }, src_data["h" /* types */].map((type) => {
        const isChecked = value.includes(type);
        const style = isChecked ? styles.selected : styles.normal;
        return (react["createElement"]("button", { role: "checkbox", "aria-checked": isChecked ? "true" : "false", key: `type-${type}`, className: classnames_default()(style, "db w-100", "ba br1", "pv1 ph2", "f5 b", "ttc", "SimpleFocus", "active-squish", `type-${type}`), onClick: () => {
                const types = new Set(value);
                if (isChecked) {
                    types.delete(type);
                }
                else {
                    types.add(type);
                }
                // Should we sort based on the type order on the page rather than
                // alphabetical? I'll just stick with alphabetical for now.
                onChange([...types].sort());
            } },
            react["createElement"]("span", { className: "flex flex-row items-center justify-center" },
                react["createElement"]("span", { className: classnames_default()(`type-${type} b--black ba br1`, isChecked ? "border1 type-bg-light" : "border2 type-bg-dark"), style: {
                        width: "1rem",
                        height: "1rem",
                    } }),
                react["createElement"]("span", { className: "tl pl2 pr1 flex-auto truncate", style: { lineHeight: MultiTypeSelector_buttonInnerHeight } }, type),
                isChecked ? react["createElement"]("span", { "aria-label": "" }, " \u2713") : react["createElement"]("span", null))));
    })));
}
MultiTypeSelector.displayName = "MultiTypeSelector";

// CONCATENATED MODULE: ./src/ScreenOffense.tsx






function ScreenOffense({ coverageTypes, setCoverageTypes, setOffenseParams, fallbackCoverageTypes, isLoading, }) {
    const search = useSearch();
    const history = useHistory();
    const offenseTypes = Object(src_data["i" /* typesFromString */])(search.get("types") || "");
    function createParams(types) {
        const params = new URLSearchParams();
        if (types.length > 0) {
            params.set("types", types.join(" "));
        }
        return "?" + params;
    }
    const updateOffenseTypes = (types) => {
        history.replace({ search: createParams(types) });
    };
    const params = createParams(offenseTypes);
    react["useEffect"](() => {
        setOffenseParams(params);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params]);
    const classH2 = "tc f5 mv3";
    return (react["createElement"]("main", { className: "ph3 pt1 pb4 content-wide center" },
        react["createElement"]("div", { className: "dib w-50-ns w-100 v-top" },
            react["createElement"]("h2", { className: classH2 }, "Choose Types"),
            react["createElement"](MultiTypeSelector, { value: offenseTypes, onChange: updateOffenseTypes })),
        react["createElement"]("div", { className: "dib w-50-ns w-100 v-top pl3-ns" },
            react["createElement"]("hr", { className: "dn-ns subtle-hr mv4" }),
            react["createElement"](Offense, { coverageTypes: coverageTypes, setCoverageTypes: setCoverageTypes, types: offenseTypes, fallbackCoverageTypes: fallbackCoverageTypes, isLoading: isLoading }))));
}
ScreenOffense.displayName = "ScreenOffense";

// EXTERNAL MODULE: ./node_modules/remove-accents/index.js
var remove_accents = __webpack_require__(14);
var remove_accents_default = /*#__PURE__*/__webpack_require__.n(remove_accents);

// CONCATENATED MODULE: ./node_modules/match-sorter/dist/match-sorter.esm.js



var rankings = {
  CASE_SENSITIVE_EQUAL: 9,
  EQUAL: 8,
  STARTS_WITH: 7,
  WORD_STARTS_WITH: 6,
  STRING_CASE: 5,
  STRING_CASE_ACRONYM: 4,
  CONTAINS: 3,
  ACRONYM: 2,
  MATCHES: 1,
  NO_MATCH: 0
};
var caseRankings = {
  CAMEL: 0.8,
  PASCAL: 0.6,
  KEBAB: 0.4,
  SNAKE: 0.2,
  NO_CASE: 0
};
matchSorter.rankings = rankings;
matchSorter.caseRankings = caseRankings;
/**
 * Takes an array of items and a value and returns a new array with the items that match the given value
 * @param {Array} items - the items to sort
 * @param {String} value - the value to use for ranking
 * @param {Object} options - Some options to configure the sorter
 * @return {Array} - the new sorted array
 */

function matchSorter(items, value, options) {
  if (options === void 0) {
    options = {};
  }

  // not performing any search/sort if value(search term) is empty
  if (!value) return items;
  var _options = options,
      keys = _options.keys,
      _options$threshold = _options.threshold,
      threshold = _options$threshold === void 0 ? rankings.MATCHES : _options$threshold;
  var matchedItems = items.reduce(reduceItemsToRanked, []);
  return matchedItems.sort(sortRankedItems).map(function (_ref) {
    var item = _ref.item;
    return item;
  });

  function reduceItemsToRanked(matches, item, index) {
    var _getHighestRanking = getHighestRanking(item, keys, value, options),
        rankedItem = _getHighestRanking.rankedItem,
        rank = _getHighestRanking.rank,
        keyIndex = _getHighestRanking.keyIndex,
        _getHighestRanking$ke = _getHighestRanking.keyThreshold,
        keyThreshold = _getHighestRanking$ke === void 0 ? threshold : _getHighestRanking$ke;

    if (rank >= keyThreshold) {
      matches.push({
        rankedItem: rankedItem,
        item: item,
        rank: rank,
        index: index,
        keyIndex: keyIndex
      });
    }

    return matches;
  }
}
/**
 * Gets the highest ranking for value for the given item based on its values for the given keys
 * @param {*} item - the item to rank
 * @param {Array} keys - the keys to get values from the item for the ranking
 * @param {String} value - the value to rank against
 * @param {Object} options - options to control the ranking
 * @return {{rank: Number, keyIndex: Number, keyThreshold: Number}} - the highest ranking
 */


function getHighestRanking(item, keys, value, options) {
  if (!keys) {
    return {
      // ends up being duplicate of 'item' in matches but consistent
      rankedItem: item,
      rank: getMatchRanking(item, value, options),
      keyIndex: -1,
      keyThreshold: options.threshold
    };
  }

  var valuesToRank = getAllValuesToRank(item, keys);
  return valuesToRank.reduce(function (_ref2, _ref3, i) {
    var rank = _ref2.rank,
        rankedItem = _ref2.rankedItem,
        keyIndex = _ref2.keyIndex,
        keyThreshold = _ref2.keyThreshold;
    var itemValue = _ref3.itemValue,
        attributes = _ref3.attributes;
    var newRank = getMatchRanking(itemValue, value, options);
    var newRankedItem = rankedItem;
    var minRanking = attributes.minRanking,
        maxRanking = attributes.maxRanking,
        threshold = attributes.threshold;

    if (newRank < minRanking && newRank >= rankings.MATCHES) {
      newRank = minRanking;
    } else if (newRank > maxRanking) {
      newRank = maxRanking;
    }

    if (newRank > rank) {
      rank = newRank;
      keyIndex = i;
      keyThreshold = threshold;
      newRankedItem = itemValue;
    }

    return {
      rankedItem: newRankedItem,
      rank: rank,
      keyIndex: keyIndex,
      keyThreshold: keyThreshold
    };
  }, {
    rank: rankings.NO_MATCH,
    keyIndex: -1,
    keyThreshold: options.threshold
  });
}
/**
 * Gives a rankings score based on how well the two strings match.
 * @param {String} testString - the string to test against
 * @param {String} stringToRank - the string to rank
 * @param {Object} options - options for the match (like keepDiacritics for comparison)
 * @returns {Number} the ranking for how well stringToRank matches testString
 */


function getMatchRanking(testString, stringToRank, options) {
  /* eslint complexity:[2, 12] */
  testString = prepareValueForComparison(testString, options);
  stringToRank = prepareValueForComparison(stringToRank, options); // too long

  if (stringToRank.length > testString.length) {
    return rankings.NO_MATCH;
  } // case sensitive equals


  if (testString === stringToRank) {
    return rankings.CASE_SENSITIVE_EQUAL;
  }

  var caseRank = getCaseRanking(testString);
  var isPartial = isPartialOfCase(testString, stringToRank, caseRank);
  var isCasedAcronym = isCaseAcronym(testString, stringToRank, caseRank); // Lower casing before further comparison

  testString = testString.toLowerCase();
  stringToRank = stringToRank.toLowerCase(); // case insensitive equals

  if (testString === stringToRank) {
    return rankings.EQUAL + caseRank;
  } // starts with


  if (testString.indexOf(stringToRank) === 0) {
    return rankings.STARTS_WITH + caseRank;
  } // word starts with


  if (testString.indexOf(" " + stringToRank) !== -1) {
    return rankings.WORD_STARTS_WITH + caseRank;
  } // is a part inside a cased string


  if (isPartial) {
    return rankings.STRING_CASE + caseRank;
  } // is acronym for a cased string


  if (caseRank > 0 && isCasedAcronym) {
    return rankings.STRING_CASE_ACRONYM + caseRank;
  } // contains


  if (testString.indexOf(stringToRank) !== -1) {
    return rankings.CONTAINS + caseRank;
  } else if (stringToRank.length === 1) {
    // If the only character in the given stringToRank
    //   isn't even contained in the testString, then
    //   it's definitely not a match.
    return rankings.NO_MATCH;
  } // acronym


  if (getAcronym(testString).indexOf(stringToRank) !== -1) {
    return rankings.ACRONYM + caseRank;
  } // will return a number between rankings.MATCHES and
  // rankings.MATCHES + 1 depending  on how close of a match it is.


  return getClosenessRanking(testString, stringToRank);
}
/**
 * Generates an acronym for a string.
 *
 * @param {String} string the string for which to produce the acronym
 * @returns {String} the acronym
 */


function getAcronym(string) {
  var acronym = '';
  var wordsInString = string.split(' ');
  wordsInString.forEach(function (wordInString) {
    var splitByHyphenWords = wordInString.split('-');
    splitByHyphenWords.forEach(function (splitByHyphenWord) {
      acronym += splitByHyphenWord.substr(0, 1);
    });
  });
  return acronym;
}
/**
 * Returns a score base on the case of the testString
 * @param {String} testString - the string to test against
 * @returns {Number} the number of the ranking,
 * based on the case between 0 and 1 for how the testString matches the case
 */


function getCaseRanking(testString) {
  var containsUpperCase = testString.toLowerCase() !== testString;
  var containsDash = testString.indexOf('-') >= 0;
  var containsUnderscore = testString.indexOf('_') >= 0;

  if (!containsUpperCase && !containsUnderscore && containsDash) {
    return caseRankings.KEBAB;
  }

  if (!containsUpperCase && containsUnderscore && !containsDash) {
    return caseRankings.SNAKE;
  }

  if (containsUpperCase && !containsDash && !containsUnderscore) {
    var startsWithUpperCase = testString[0].toUpperCase() === testString[0];

    if (startsWithUpperCase) {
      return caseRankings.PASCAL;
    }

    return caseRankings.CAMEL;
  }

  return caseRankings.NO_CASE;
}
/**
 * Returns whether the stringToRank is one of the case parts in the testString (works with any string case)
 * @example
 * // returns true
 * isPartialOfCase('helloWorld', 'world', caseRankings.CAMEL)
 * @example
 * // returns false
 * isPartialOfCase('helloWorld', 'oworl', caseRankings.CAMEL)
 * @param {String} testString - the string to test against
 * @param {String} stringToRank - the string to rank
 * @param {Number} caseRanking - the ranking score based on case of testString
 * @returns {Boolean} whether the stringToRank is one of the case parts in the testString
 */


function isPartialOfCase(testString, stringToRank, caseRanking) {
  var testIndex = testString.toLowerCase().indexOf(stringToRank.toLowerCase());

  switch (caseRanking) {
    case caseRankings.SNAKE:
      return testString[testIndex - 1] === '_';

    case caseRankings.KEBAB:
      return testString[testIndex - 1] === '-';

    case caseRankings.PASCAL:
    case caseRankings.CAMEL:
      return testIndex !== -1 && testString[testIndex] === testString[testIndex].toUpperCase();

    default:
      return false;
  }
}
/**
 * Check if stringToRank is an acronym for a partial case
 * @example
 * // returns true
 * isCaseAcronym('super_duper_file', 'sdf', caseRankings.SNAKE)
 * @param {String} testString - the string to test against
 * @param {String} stringToRank - the acronym to test
 * @param {Number} caseRank - the ranking of the case
 * @returns {Boolean} whether the stringToRank is an acronym for the testString
 */


function isCaseAcronym(testString, stringToRank, caseRank) {
  var splitValue = null;

  switch (caseRank) {
    case caseRankings.SNAKE:
      splitValue = '_';
      break;

    case caseRankings.KEBAB:
      splitValue = '-';
      break;

    case caseRankings.PASCAL:
    case caseRankings.CAMEL:
      splitValue = /(?=[A-Z])/;
      break;

    default:
      splitValue = null;
  }

  var splitTestString = testString.split(splitValue);
  return stringToRank.toLowerCase().split('').reduce(function (correct, char, charIndex) {
    var splitItem = splitTestString[charIndex];
    return correct && splitItem && splitItem[0].toLowerCase() === char;
  }, true);
}
/**
 * Returns a score based on how spread apart the
 * characters from the stringToRank are within the testString.
 * A number close to rankings.MATCHES represents a loose match. A number close
 * to rankings.MATCHES + 1 represents a tighter match.
 * @param {String} testString - the string to test against
 * @param {String} stringToRank - the string to rank
 * @returns {Number} the number between rankings.MATCHES and
 * rankings.MATCHES + 1 for how well stringToRank matches testString
 */


function getClosenessRanking(testString, stringToRank) {
  var matchingInOrderCharCount = 0;
  var charNumber = 0;

  function findMatchingCharacter(matchChar, string, index) {
    for (var j = index; j < string.length; j++) {
      var stringChar = string[j];

      if (stringChar === matchChar) {
        matchingInOrderCharCount += 1;
        return j + 1;
      }
    }

    return -1;
  }

  function getRanking(spread) {
    var inOrderPercentage = matchingInOrderCharCount / stringToRank.length;
    var ranking = rankings.MATCHES + inOrderPercentage * (1 / spread);
    return ranking;
  }

  var firstIndex = findMatchingCharacter(stringToRank[0], testString, 0);

  if (firstIndex < 0) {
    return rankings.NO_MATCH;
  }

  charNumber = firstIndex;

  for (var i = 1; i < stringToRank.length; i++) {
    var matchChar = stringToRank[i];
    charNumber = findMatchingCharacter(matchChar, testString, charNumber);
    var found = charNumber > -1;

    if (!found) {
      return rankings.NO_MATCH;
    }
  }

  var spread = charNumber - firstIndex;
  return getRanking(spread);
}
/**
 * Sorts items that have a rank, index, and keyIndex
 * @param {Object} a - the first item to sort
 * @param {Object} b - the second item to sort
 * @return {Number} -1 if a should come first, 1 if b should come first, 0 if equal
 */


function sortRankedItems(a, b) {
  var aFirst = -1;
  var bFirst = 1;
  var aRankedItem = a.rankedItem,
      aRank = a.rank,
      aKeyIndex = a.keyIndex;
  var bRankedItem = b.rankedItem,
      bRank = b.rank,
      bKeyIndex = b.keyIndex;

  if (aRank === bRank) {
    if (aKeyIndex === bKeyIndex) {
      // localeCompare returns 0 if both values are equal,
      // so we rely on JS engines stably sorting the results
      // (de facto, all modern engine do this).
      return String(aRankedItem).localeCompare(bRankedItem);
    } else {
      return aKeyIndex < bKeyIndex ? aFirst : bFirst;
    }
  } else {
    return aRank > bRank ? aFirst : bFirst;
  }
}
/**
 * Prepares value for comparison by stringifying it, removing diacritics (if specified)
 * @param {String} value - the value to clean
 * @param {Object} options - {keepDiacritics: whether to remove diacritics}
 * @return {String} the prepared value
 */


function prepareValueForComparison(value, _ref4) {
  var keepDiacritics = _ref4.keepDiacritics;
  value = "" + value; // toString

  if (!keepDiacritics) {
    value = remove_accents_default()(value);
  }

  return value;
}
/**
 * Gets value for key in item at arbitrarily nested keypath
 * @param {Object} item - the item
 * @param {Object|Function} key - the potentially nested keypath or property callback
 * @return {Array} - an array containing the value(s) at the nested keypath
 */


function getItemValues(item, key) {
  if (typeof key === 'object') {
    key = key.key;
  }

  var value;

  if (typeof key === 'function') {
    value = key(item); // eslint-disable-next-line no-negated-condition
  } else if (key.indexOf('.') !== -1) {
    // handle nested keys
    value = key.split('.').reduce(function (itemObj, nestedKey) {
      return itemObj ? itemObj[nestedKey] : null;
    }, item);
  } else {
    value = item[key];
  } // concat because `value` can be a string or an array
  // eslint-disable-next-line


  return value != null ? [].concat(value) : null;
}
/**
 * Gets all the values for the given keys in the given item and returns an array of those values
 * @param {Object} item - the item from which the values will be retrieved
 * @param {Array} keys - the keys to use to retrieve the values
 * @return {Array} objects with {itemValue, attributes}
 */


function getAllValuesToRank(item, keys) {
  return keys.reduce(function (allVals, key) {
    var values = getItemValues(item, key);

    if (values) {
      values.forEach(function (itemValue) {
        allVals.push({
          itemValue: itemValue,
          attributes: getKeyAttributes(key)
        });
      });
    }

    return allVals;
  }, []);
}
/**
 * Gets all the attributes for the given key
 * @param {Object|String} key - the key from which the attributes will be retrieved
 * @return {Object} object containing the key's attributes
 */


function getKeyAttributes(key) {
  if (typeof key === 'string') {
    key = {
      key: key
    };
  }

  return _extends({
    maxRanking: Infinity,
    minRanking: -Infinity
  }, key);
}

/* harmony default export */ var match_sorter_esm = (matchSorter);


// CONCATENATED MODULE: ./src/settings.ts
const PUBLIC_PATH = "/pkmn.help/";

// CONCATENATED MODULE: ./src/getImage.ts

function getImage(id) {
    return `${PUBLIC_PATH}img/${id}.png`;
}

// CONCATENATED MODULE: ./src/getWeatherBoosted.ts
// https://niantic.helpshift.com/a/pokemon-go/?s=finding-evolving-hatching&f=weather-boosts&l=en&p=web
const weatherBoosted = {
    normal: 'Partly cloudy',
    fighting: 'Cloudy',
    flying: 'Windy',
    poison: 'Cloudy',
    ground: 'Sunny/Clear',
    rock: 'Partly cloudy',
    bug: 'Rainy',
    ghost: 'Fog',
    steel: 'Snow',
    fire: 'Sunny/Clear',
    water: 'Rainy',
    grass: 'Sunny/Clear',
    electric: 'Rainy',
    psychic: 'Windy',
    ice: 'Snow',
    dragon: 'Windy',
    dark: 'Fog',
    fairy: 'Cloudy',
    none: '',
};
function getWeatherBoosted(type) {
    return weatherBoosted[type] || weatherBoosted.none;
}

// CONCATENATED MODULE: ./src/LinkButton.tsx



function LinkButton({ disabled = false, to, className, ...props }) {
    if (disabled) {
        // React Router <Link> requires the `to` prop, but rendering an <a> without
        // an `href` works better for "disabling" a link
        return (react["createElement"]("a", Object.assign({}, props, { className: classnames_default()(className, baseClasses, "border4 fg4 bg-transparent no-pointer") })));
    }
    return (react["createElement"](Link, Object.assign({}, props, { to: to, tabIndex: 0, onClick: props.onClick, className: classnames_default()(className, baseClasses, "border2 button-shadow button-bg button-bg-hover color-inherit active-squish") })));
}
const baseClasses = classnames_default()("no-underline", "db", "ba br2 pv1 ph2", "b f5", "SimpleFocus");

// CONCATENATED MODULE: ./src/Paginator.tsx



var Location;
(function (Location) {
    Location["TOP"] = "top";
    Location["BOTTOM"] = "bottom";
})(Location || (Location = {}));
function PageSelector({ numPages, pageItems, location, currentPage, urlForPage, hasPrev, hasNext, }) {
    // Attempt to stay anchored to the top or bottom of the page when using
    // pagination buttons to avoid the screen jumping around and stuff
    const [scrollTo, setScrollTo] = react["useState"](undefined);
    react["useLayoutEffect"](() => {
        if (scrollTo === Location.TOP) {
            window.scrollTo(0, 0);
        }
        else if (scrollTo === Location.BOTTOM) {
            window.scrollTo(0, document.body.scrollHeight);
        }
        setScrollTo(undefined);
    }, [scrollTo]);
    return (react["createElement"]("div", { className: classnames_default()("items-center mv3", pageItems.length === 0 ? "dn" : "flex") },
        react["createElement"](LinkButton, { onClick: () => {
                setScrollTo(location);
            }, disabled: !hasPrev, to: urlForPage(0), "aria-label": "First" }, "\u00AB"),
        react["createElement"]("div", { className: "pr1" }),
        react["createElement"](LinkButton, { onClick: () => {
                setScrollTo(location);
            }, disabled: !hasPrev, to: urlForPage(currentPage - 1), "aria-label": "Previous" },
            react["createElement"]("span", { role: "presentation" }, "\u2039 "),
            "Prev"),
        react["createElement"]("div", { className: "flex-auto tc b f5 tabular-nums" },
            (currentPage + 1).toString().padStart(numPages.toString().length, "0"),
            " / ",
            numPages),
        react["createElement"](LinkButton, { onClick: () => {
                setScrollTo(location);
            }, disabled: !hasNext, to: urlForPage(currentPage + 1), "aria-label": "Next" },
            "Next",
            react["createElement"]("span", { role: "presentation" }, " \u203A")),
        react["createElement"]("div", { className: "pr1" }),
        react["createElement"](LinkButton, { onClick: () => {
                setScrollTo(location);
            }, disabled: !hasNext, to: urlForPage(numPages - 1), "aria-label": "Last" }, "\u00BB")));
}
PageSelector.displayName = "PageSelector";
function Paginator({ urlForPage, currentPage, pageSize, emptyState, items, renderPage, }) {
    const numPages = Math.ceil(items.length / pageSize);
    const hasPrev = currentPage > 0;
    const hasNext = currentPage < numPages - 1;
    const i = pageSize * currentPage;
    const pageItems = items.slice(i, i + pageSize);
    return (react["createElement"]("div", null,
        react["createElement"](PageSelector, { location: Location.TOP, numPages: numPages, pageItems: pageItems, hasPrev: hasPrev, hasNext: hasNext, currentPage: currentPage, urlForPage: urlForPage }),
        pageItems.length === 0 ? emptyState : renderPage(pageItems),
        react["createElement"](PageSelector, { location: Location.BOTTOM, numPages: numPages, pageItems: pageItems, hasPrev: hasPrev, hasNext: hasNext, currentPage: currentPage, urlForPage: urlForPage })));
}
Paginator.displayName = "Paginator";

// CONCATENATED MODULE: ./src/pickTranslation.ts
function pickTranslation(obj) {
    // Browsers typically only include a region code after the language, but
    // PokéAPI tells us the script instead. Map the region codes to script codes
    // for Simplified vs Traditional Chinese
    const languages = navigator.languages
        .map((s) => s.toLowerCase())
        .map((s) => {
        if (s === "zh-tw" || s === "zh-hk" || s === "zh-mo") {
            return "zh-Hant";
        }
        if (s === "zh-cn" || s === "zh-sg") {
            return "zh-Hans";
        }
        // Remove the region code because we don't support it for other languages
        return s.split("-")[0];
    });
    for (const lang of languages) {
        if (lang in obj) {
            return obj[lang];
        }
    }
    return obj.en;
}

// CONCATENATED MODULE: ./src/Search.tsx



function preloadImage(src) {
    new Image().src = src;
}
preloadImage("/svg/search.svg");
preloadImage("/svg/clear.svg");
function Search({ updateSearch, search }) {
    const ref = react["useRef"](null);
    const iconSize = 24;
    const inputHeight = 36;
    return (react["createElement"]("div", { className: "relative mv3" },
        react["createElement"]("img", { src: `${PUBLIC_PATH}svg/search.svg`, width: iconSize, height: iconSize, role: "presentation", className: "o-50 absolute dark--invert", style: { left: 10, top: 8 } }),
        react["createElement"]("input", { "aria-label": "Search", type: "text", autoComplete: "off", autoCorrect: "off", inputMode: "search", autoCapitalize: "none", className: classnames_default()("f5 w-100 border-box", "pv2", "SimpleFocus", "inset-shadow", "br-pill ba", "bg1", "fg1", "border2"), style: { paddingLeft: 40, paddingRight: 40, height: inputHeight }, value: search, onChange: (event) => {
                updateSearch(event.target.value);
            }, ref: ref }),
        react["createElement"]("img", { src: `${PUBLIC_PATH}svg/clear.svg`, width: iconSize, height: iconSize, role: "presentation", onClick: () => {
                updateSearch("");
                if (ref.current) {
                    ref.current.focus();
                }
            }, className: classnames_default()("o-50 absolute dark--invert", {
                dn: search === "",
            }), style: { right: 6, top: 6 } })));
}
Search.displayName = "Search";

// CONCATENATED MODULE: ./node_modules/use-debounce/esm/useDebouncedCallback.js

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked, or until the next browser frame is drawn. The debounced function
 * comes with a `cancel` method to cancel delayed `func` invocations and a
 * `flush` method to immediately invoke them. Provide `options` to indicate
 * whether `func` should be invoked on the leading and/or trailing edge of the
 * `wait` timeout. The `func` is invoked with the last arguments provided to the
 * debounced function. Subsequent calls to the debounced function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * If `wait` is omitted in an environment with `requestAnimationFrame`, `func`
 * invocation will be deferred until the next frame is drawn (typically about
 * 16ms).
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `debounce` and `throttle`.
 *
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0]
 *  The number of milliseconds to delay; if omitted, `requestAnimationFrame` is
 *  used (if available, otherwise it will be setTimeout(...,0)).
 * @param {Object} [options={}] The options object.
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.leading=false]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {number} [options.maxWait]
 *  Specify invoking on the trailing edge of the timeout.
 * @param {boolean} [options.trailing=true]
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * const resizeHandler = useDebouncedCallback(calculateLayout, 150);
 * window.addEventListener('resize', resizeHandler)
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * const clickHandler = useDebouncedCallback(sendMail, 300, {
 *   leading: true,
 *   trailing: false,
 * })
 * <button onClick={clickHandler}>click me</button>
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * const debounced = useDebouncedCallback(batchLog, 250, { 'maxWait': 1000 })
 * const source = new EventSource('/stream')
 * source.addEventListener('message', debounced)
 *
 * // Cancel the trailing debounced invocation.
 * window.addEventListener('popstate', debounced.cancel)
 *
 * // Check for pending invocations.
 * const status = debounced.pending() ? "Pending..." : "Ready"
 */
function useDebouncedCallback(func, wait, options) {
    var _this = this;
    var lastCallTime = Object(react["useRef"])(null);
    var lastInvokeTime = Object(react["useRef"])(0);
    var timerId = Object(react["useRef"])(null);
    var lastArgs = Object(react["useRef"])([]);
    var lastThis = Object(react["useRef"])();
    var result = Object(react["useRef"])();
    var funcRef = Object(react["useRef"])(func);
    var mounted = Object(react["useRef"])(true);
    funcRef.current = func;
    // Bypass `requestAnimationFrame` by explicitly setting `wait=0`.
    var useRAF = !wait && wait !== 0 && typeof window !== 'undefined';
    if (typeof func !== 'function') {
        throw new TypeError('Expected a function');
    }
    wait = +wait || 0;
    options = options || {};
    var leading = !!options.leading;
    var trailing = 'trailing' in options ? !!options.trailing : true; // `true` by default
    var maxing = 'maxWait' in options;
    var maxWait = maxing ? Math.max(+options.maxWait || 0, wait) : null;
    Object(react["useEffect"])(function () {
        mounted.current = true;
        return function () {
            mounted.current = false;
        };
    }, []);
    // You may have a question, why we have so many code under the useMemo definition.
    //
    // This was made as we want to escape from useCallback hell and
    // not to initialize a number of functions each time useDebouncedCallback is called.
    //
    // It means that we have less garbage for our GC calls which improves performance.
    // Also, it makes this library smaller.
    //
    // And the last reason, that the code without lots of useCallback with deps is easier to read.
    // You have only one place for that.
    var debounced = Object(react["useMemo"])(function () {
        var invokeFunc = function (time) {
            var args = lastArgs.current;
            var thisArg = lastThis.current;
            lastArgs.current = lastThis.current = null;
            lastInvokeTime.current = time;
            return (result.current = funcRef.current.apply(thisArg, args));
        };
        var startTimer = function (pendingFunc, wait) {
            if (useRAF)
                cancelAnimationFrame(timerId.current);
            timerId.current = useRAF ? requestAnimationFrame(pendingFunc) : setTimeout(pendingFunc, wait);
        };
        var shouldInvoke = function (time) {
            if (!mounted.current)
                return false;
            var timeSinceLastCall = time - lastCallTime.current;
            var timeSinceLastInvoke = time - lastInvokeTime.current;
            // Either this is the first call, activity has stopped and we're at the
            // trailing edge, the system time has gone backwards and we're treating
            // it as the trailing edge, or we've hit the `maxWait` limit.
            return (!lastCallTime.current ||
                timeSinceLastCall >= wait ||
                timeSinceLastCall < 0 ||
                (maxing && timeSinceLastInvoke >= maxWait));
        };
        var trailingEdge = function (time) {
            timerId.current = null;
            // Only invoke if we have `lastArgs` which means `func` has been
            // debounced at least once.
            if (trailing && lastArgs.current) {
                return invokeFunc(time);
            }
            lastArgs.current = lastThis.current = null;
            return result.current;
        };
        var timerExpired = function () {
            var time = Date.now();
            if (shouldInvoke(time)) {
                return trailingEdge(time);
            }
            // https://github.com/xnimorz/use-debounce/issues/97
            if (!mounted.current) {
                return;
            }
            // Remaining wait calculation
            var timeSinceLastCall = time - lastCallTime.current;
            var timeSinceLastInvoke = time - lastInvokeTime.current;
            var timeWaiting = wait - timeSinceLastCall;
            var remainingWait = maxing ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
            // Restart the timer
            startTimer(timerExpired, remainingWait);
        };
        var func = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var time = Date.now();
            var isInvoking = shouldInvoke(time);
            lastArgs.current = args;
            lastThis.current = _this;
            lastCallTime.current = time;
            if (isInvoking) {
                if (!timerId.current && mounted.current) {
                    // Reset any `maxWait` timer.
                    lastInvokeTime.current = lastCallTime.current;
                    // Start the timer for the trailing edge.
                    startTimer(timerExpired, wait);
                    // Invoke the leading edge.
                    return leading ? invokeFunc(lastCallTime.current) : result.current;
                }
                if (maxing) {
                    // Handle invocations in a tight loop.
                    startTimer(timerExpired, wait);
                    return invokeFunc(lastCallTime.current);
                }
            }
            if (!timerId.current) {
                startTimer(timerExpired, wait);
            }
            return result.current;
        };
        func.cancel = function () {
            if (timerId.current) {
                useRAF ? cancelAnimationFrame(timerId.current) : clearTimeout(timerId.current);
            }
            lastInvokeTime.current = 0;
            lastArgs.current = lastCallTime.current = lastThis.current = timerId.current = null;
        };
        func.isPending = function () {
            return !!timerId.current;
        };
        func.flush = function () {
            return !timerId.current ? result.current : trailingEdge(Date.now());
        };
        return func;
    }, [leading, maxing, wait, maxWait, trailing, useRAF]);
    return debounced;
}

// CONCATENATED MODULE: ./node_modules/use-debounce/esm/useDebounce.js


function valueEquality(left, right) {
    return left === right;
}
function adjustFunctionValueOfSetState(value) {
    return typeof value === 'function' ? function () { return value; } : value;
}
function useStateIgnoreCallback(initialState) {
    var _a = Object(react["useState"])(adjustFunctionValueOfSetState(initialState)), state = _a[0], setState = _a[1];
    var setStateIgnoreCallback = Object(react["useCallback"])(function (value) { return setState(adjustFunctionValueOfSetState(value)); }, []);
    return [state, setStateIgnoreCallback];
}
function useDebounce(value, delay, options) {
    var eq = (options && options.equalityFn) || valueEquality;
    var _a = useStateIgnoreCallback(value), state = _a[0], dispatch = _a[1];
    var debounced = useDebouncedCallback(Object(react["useCallback"])(function (value) { return dispatch(value); }, [dispatch]), delay, options);
    var previousValue = Object(react["useRef"])(value);
    if (!eq(previousValue.current, value)) {
        debounced(value);
        previousValue.current = value;
    }
    return [state, { cancel: debounced.cancel, isPending: debounced.isPending, flush: debounced.flush }];
}

// CONCATENATED MODULE: ./src/data-pvp-gl.js
/*
Source https://github.com/nguoianphu/PvP_IVs
- Go to https://pvpivs.com/leagueRanks.html
- Choose "Great League"
- Check "Include Entire Pokedex:"
- Calculate
- Copy table to an Excel sheet
- Export it into a CSV file
- Find some online tool to convert CSV to JSON like http://www.convertcsv.com/csv-to-json.htm
- Add the "export const DataPvpGL = [" at top of JSON
- Add "];" at the end of JSON
- Change JSON file name to ".js"
- Change key names as below
*/
const DataPvpGL = [
    {
        "Dex": 1,
        "Mon": "Bulbasaur",
        "Lvl": 51,
        "CP": 1275,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 2,
        "Mon": "Ivysaur",
        "Lvl": 38.5,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 14
    },
    {
        "Dex": 3,
        "Mon": "Venusaur",
        "Lvl": 21,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 11
    },
    {
        "Dex": 3,
        "Mon": "Mega_Venusaur",
        "Lvl": 15,
        "CP": 1498,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 4,
        "Mon": "Charmander",
        "Lvl": 51,
        "CP": 1121,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 5,
        "Mon": "Charmeleon",
        "Lvl": 40,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 6,
        "Mon": "Charizard",
        "Lvl": 19.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 13
    },
    {
        "Dex": 6,
        "Mon": "Mega_Charizard_X",
        "Lvl": 14.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 11,
        "StaIV": 15
    },
    {
        "Dex": 6,
        "Mon": "Mega_Charizard_Y",
        "Lvl": 12.5,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 11
    },
    {
        "Dex": 7,
        "Mon": "Squirtle",
        "Lvl": 51,
        "CP": 1082,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 8,
        "Mon": "Wartortle",
        "Lvl": 50,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 9,
        "Mon": "Blastoise",
        "Lvl": 23,
        "CP": 1498,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 9,
        "Mon": "Mega_Blastoise",
        "Lvl": 14,
        "CP": 1497,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 10,
        "Mon": "Caterpie",
        "Lvl": 51,
        "CP": 500,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 11,
        "Mon": "Metapod",
        "Lvl": 51,
        "CP": 515,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 12,
        "Mon": "Butterfree",
        "Lvl": 33,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 13,
        "Mon": "Weedle",
        "Lvl": 51,
        "CP": 522,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 14,
        "Mon": "Kakuna",
        "Lvl": 51,
        "CP": 494,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 15,
        "Mon": "Beedrill",
        "Lvl": 32.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 14
    },
    {
        "Dex": 15,
        "Mon": "Mega_Beedrill",
        "Lvl": 16.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 11,
        "StaIV": 15
    },
    {
        "Dex": 16,
        "Mon": "Pidgey",
        "Lvl": 51,
        "CP": 778,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 17,
        "Mon": "Pidgeotto",
        "Lvl": 51,
        "CP": 1366,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 18,
        "Mon": "Pidgeot",
        "Lvl": 27,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 14
    },
    {
        "Dex": 18,
        "Mon": "Mega_Pidgeot",
        "Lvl": 15,
        "CP": 1498,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 19,
        "Mon": "Rattata",
        "Lvl": 51,
        "CP": 840,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 19,
        "Mon": "Rattata_Alola",
        "Lvl": 51,
        "CP": 840,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 20,
        "Mon": "Raticate",
        "Lvl": 36.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 20,
        "Mon": "Raticate_Alola",
        "Lvl": 39,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 14
    },
    {
        "Dex": 21,
        "Mon": "Spearow",
        "Lvl": 51,
        "CP": 913,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 22,
        "Mon": "Fearow",
        "Lvl": 28.5,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 23,
        "Mon": "Ekans",
        "Lvl": 51,
        "CP": 1061,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 24,
        "Mon": "Arbok",
        "Lvl": 30.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 11,
        "StaIV": 14
    },
    {
        "Dex": 25,
        "Mon": "Pikachu",
        "Lvl": 51,
        "CP": 1073,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 26,
        "Mon": "Raichu",
        "Lvl": 26,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 26,
        "Mon": "Raichu_Alola",
        "Lvl": 24.5,
        "CP": 1496,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 27,
        "Mon": "Sandshrew",
        "Lvl": 51,
        "CP": 1443,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 27,
        "Mon": "Sandshrew_Alola",
        "Lvl": 51,
        "CP": 1479,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 28,
        "Mon": "Sandslash",
        "Lvl": 24,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 28,
        "Mon": "Sandslash_Alola",
        "Lvl": 23.5,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 14
    },
    {
        "Dex": 29,
        "Mon": "Nidoran_Female",
        "Lvl": 51,
        "CP": 933,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 30,
        "Mon": "Nidorina",
        "Lvl": 51,
        "CP": 1498,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 31,
        "Mon": "Nidoqueen",
        "Lvl": 23,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 12
    },
    {
        "Dex": 32,
        "Mon": "Nidoran_Male",
        "Lvl": 51,
        "CP": 984,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 33,
        "Mon": "Nidorino",
        "Lvl": 51,
        "CP": 1499,
        "AtkIV": 6,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 34,
        "Mon": "Nidoking",
        "Lvl": 22,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 35,
        "Mon": "Clefairy",
        "Lvl": 51,
        "CP": 1322,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 36,
        "Mon": "Clefable",
        "Lvl": 23.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 37,
        "Mon": "Vulpix",
        "Lvl": 51,
        "CP": 1010,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 37,
        "Mon": "Vulpix_Alola",
        "Lvl": 51,
        "CP": 1010,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 38,
        "Mon": "Ninetales",
        "Lvl": 25,
        "CP": 1495,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 38,
        "Mon": "Ninetales_Alola",
        "Lvl": 25,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 12
    },
    {
        "Dex": 39,
        "Mon": "Jigglypuff",
        "Lvl": 51,
        "CP": 828,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 40,
        "Mon": "Wigglytuff",
        "Lvl": 30,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 12
    },
    {
        "Dex": 41,
        "Mon": "Zubat",
        "Lvl": 51,
        "CP": 763,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 42,
        "Mon": "Golbat",
        "Lvl": 29,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 43,
        "Mon": "Oddish",
        "Lvl": 51,
        "CP": 1405,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 44,
        "Mon": "Gloom",
        "Lvl": 39.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 12,
        "StaIV": 14
    },
    {
        "Dex": 45,
        "Mon": "Vileplume",
        "Lvl": 22,
        "CP": 1497,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 46,
        "Mon": "Paras",
        "Lvl": 51,
        "CP": 1164,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 47,
        "Mon": "Parasect",
        "Lvl": 32,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 48,
        "Mon": "Venonat",
        "Lvl": 51,
        "CP": 1148,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 49,
        "Mon": "Venomoth",
        "Lvl": 27.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 50,
        "Mon": "Diglett",
        "Lvl": 51,
        "CP": 773,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 50,
        "Mon": "Diglett_Alola",
        "Lvl": 51,
        "CP": 779,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 51,
        "Mon": "Dugtrio",
        "Lvl": 44,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 13
    },
    {
        "Dex": 51,
        "Mon": "Dugtrio_Alola",
        "Lvl": 30,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 12,
        "StaIV": 15
    },
    {
        "Dex": 52,
        "Mon": "Meowth",
        "Lvl": 51,
        "CP": 856,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 52,
        "Mon": "Meowth_Alola",
        "Lvl": 51,
        "CP": 912,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 52,
        "Mon": "Meowth_Galarian",
        "Lvl": 51,
        "CP": 1184,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 53,
        "Mon": "Persian",
        "Lvl": 39,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 13
    },
    {
        "Dex": 53,
        "Mon": "Persian_Alola",
        "Lvl": 34.5,
        "CP": 1500,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 54,
        "Mon": "Psyduck",
        "Lvl": 51,
        "CP": 1265,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 55,
        "Mon": "Golduck",
        "Lvl": 23.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 10,
        "StaIV": 14
    },
    {
        "Dex": 56,
        "Mon": "Mankey",
        "Lvl": 51,
        "CP": 1332,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 57,
        "Mon": "Primeape",
        "Lvl": 24.5,
        "CP": 1500,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 58,
        "Mon": "Growlithe",
        "Lvl": 51,
        "CP": 1422,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 59,
        "Mon": "Arcanine",
        "Lvl": 18.5,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 60,
        "Mon": "Poliwag",
        "Lvl": 51,
        "CP": 948,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 61,
        "Mon": "Poliwhirl",
        "Lvl": 51,
        "CP": 1500,
        "AtkIV": 4,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 62,
        "Mon": "Poliwrath",
        "Lvl": 22,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 63,
        "Mon": "Abra",
        "Lvl": 51,
        "CP": 1499,
        "AtkIV": 10,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 64,
        "Mon": "Kadabra",
        "Lvl": 27,
        "CP": 1499,
        "AtkIV": 2,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 65,
        "Mon": "Alakazam",
        "Lvl": 18,
        "CP": 1495,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 65,
        "Mon": "Mega_Alakazam",
        "Lvl": 12,
        "CP": 1497,
        "AtkIV": 4,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 66,
        "Mon": "Machop",
        "Lvl": 51,
        "CP": 1462,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 67,
        "Mon": "Machoke",
        "Lvl": 28,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 68,
        "Mon": "Machamp",
        "Lvl": 18.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 11
    },
    {
        "Dex": 69,
        "Mon": "Bellsprout",
        "Lvl": 51,
        "CP": 1182,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 70,
        "Mon": "Weepinbell",
        "Lvl": 40.5,
        "CP": 1500,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 71,
        "Mon": "Victreebel",
        "Lvl": 23,
        "CP": 1497,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 72,
        "Mon": "Tentacool",
        "Lvl": 51,
        "CP": 1190,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 73,
        "Mon": "Tentacruel",
        "Lvl": 23.5,
        "CP": 1500,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 74,
        "Mon": "Geodude",
        "Lvl": 51,
        "CP": 1479,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 74,
        "Mon": "Geodude_Alola",
        "Lvl": 51,
        "CP": 1479,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 75,
        "Mon": "Graveler",
        "Lvl": 30.5,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 75,
        "Mon": "Graveler_Alola",
        "Lvl": 30.5,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 76,
        "Mon": "Golem",
        "Lvl": 19,
        "CP": 1498,
        "AtkIV": 1,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 76,
        "Mon": "Golem_Alola",
        "Lvl": 19,
        "CP": 1498,
        "AtkIV": 1,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 77,
        "Mon": "Ponyta",
        "Lvl": 37.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 77,
        "Mon": "Ponyta_Galarian",
        "Lvl": 37.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 78,
        "Mon": "Rapidash",
        "Lvl": 23,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 78,
        "Mon": "Rapidash_Galarian",
        "Lvl": 23,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 79,
        "Mon": "Slowpoke",
        "Lvl": 51,
        "CP": 1403,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 79,
        "Mon": "Slowpoke_Galarian",
        "Lvl": 51,
        "CP": 1403,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 80,
        "Mon": "Slowbro",
        "Lvl": 22.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 80,
        "Mon": "Slowbro_Galarian",
        "Lvl": 23.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 11
    },
    {
        "Dex": 80,
        "Mon": "Mega_Slowbro",
        "Lvl": 15,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 14
    },
    {
        "Dex": 81,
        "Mon": "Magnemite",
        "Lvl": 51,
        "CP": 1498,
        "AtkIV": 8,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 82,
        "Mon": "Magneton",
        "Lvl": 22.5,
        "CP": 1497,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 83,
        "Mon": "Farfetchd",
        "Lvl": 51,
        "CP": 1414,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 83,
        "Mon": "Farfetchd_Galarian",
        "Lvl": 38,
        "CP": 1497,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 84,
        "Mon": "Doduo",
        "Lvl": 51,
        "CP": 1373,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 85,
        "Mon": "Dodrio",
        "Lvl": 24,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 12,
        "StaIV": 15
    },
    {
        "Dex": 86,
        "Mon": "Seel",
        "Lvl": 51,
        "CP": 1111,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 87,
        "Mon": "Dewgong",
        "Lvl": 29.5,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 12,
        "StaIV": 15
    },
    {
        "Dex": 88,
        "Mon": "Grimer",
        "Lvl": 51,
        "CP": 1499,
        "AtkIV": 8,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 88,
        "Mon": "Grimer_Alola",
        "Lvl": 51,
        "CP": 1499,
        "AtkIV": 8,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 89,
        "Mon": "Muk",
        "Lvl": 20.5,
        "CP": 1496,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 89,
        "Mon": "Muk_Alola",
        "Lvl": 20.5,
        "CP": 1496,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 90,
        "Mon": "Shellder",
        "Lvl": 51,
        "CP": 1235,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 91,
        "Mon": "Cloyster",
        "Lvl": 22.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 13
    },
    {
        "Dex": 92,
        "Mon": "Gastly",
        "Lvl": 51,
        "CP": 1406,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 93,
        "Mon": "Haunter",
        "Lvl": 28.5,
        "CP": 1499,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 94,
        "Mon": "Gengar",
        "Lvl": 19.5,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 13
    },
    {
        "Dex": 94,
        "Mon": "Mega_Gengar",
        "Lvl": 12.5,
        "CP": 1497,
        "AtkIV": 3,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 95,
        "Mon": "Onix",
        "Lvl": 51,
        "CP": 1260,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 96,
        "Mon": "Drowzee",
        "Lvl": 51,
        "CP": 1190,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 97,
        "Mon": "Hypno",
        "Lvl": 28,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 13
    },
    {
        "Dex": 98,
        "Mon": "Krabby",
        "Lvl": 43,
        "CP": 1496,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 99,
        "Mon": "Kingler",
        "Lvl": 20,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 9,
        "StaIV": 15
    },
    {
        "Dex": 100,
        "Mon": "Voltorb",
        "Lvl": 51,
        "CP": 1155,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 101,
        "Mon": "Electrode",
        "Lvl": 27,
        "CP": 1498,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 102,
        "Mon": "Exeggcute",
        "Lvl": 51,
        "CP": 1344,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 103,
        "Mon": "Exeggutor",
        "Lvl": 18.5,
        "CP": 1500,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 103,
        "Mon": "Exeggutor_Alola",
        "Lvl": 18.5,
        "CP": 1499,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 104,
        "Mon": "Cubone",
        "Lvl": 51,
        "CP": 1166,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 105,
        "Mon": "Marowak",
        "Lvl": 33.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 14
    },
    {
        "Dex": 105,
        "Mon": "Marowak_Alola",
        "Lvl": 33.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 14
    },
    {
        "Dex": 106,
        "Mon": "Hitmonlee",
        "Lvl": 21.5,
        "CP": 1496,
        "AtkIV": 2,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 107,
        "Mon": "Hitmonchan",
        "Lvl": 24.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 11,
        "StaIV": 15
    },
    {
        "Dex": 108,
        "Mon": "Lickitung",
        "Lvl": 50.5,
        "CP": 1500,
        "AtkIV": 7,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 109,
        "Mon": "Koffing",
        "Lvl": 51,
        "CP": 1389,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 110,
        "Mon": "Weezing",
        "Lvl": 25,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 14
    },
    {
        "Dex": 110,
        "Mon": "Weezing_Galarian",
        "Lvl": 25,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 14
    },
    {
        "Dex": 111,
        "Mon": "Rhyhorn",
        "Lvl": 41,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 112,
        "Mon": "Rhydon",
        "Lvl": 17.5,
        "CP": 1499,
        "AtkIV": 2,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 113,
        "Mon": "Chansey",
        "Lvl": 51,
        "CP": 1435,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 114,
        "Mon": "Tangela",
        "Lvl": 25.5,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 115,
        "Mon": "Kangaskhan",
        "Lvl": 22,
        "CP": 1497,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 115,
        "Mon": "Mega_Kangaskhan_SPECULATIVE",
        "Lvl": 14.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 116,
        "Mon": "Horsea",
        "Lvl": 51,
        "CP": 1208,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 117,
        "Mon": "Seadra",
        "Lvl": 27,
        "CP": 1498,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 118,
        "Mon": "Goldeen",
        "Lvl": 51,
        "CP": 1318,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 119,
        "Mon": "Seaking",
        "Lvl": 26.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 14
    },
    {
        "Dex": 120,
        "Mon": "Staryu",
        "Lvl": 51,
        "CP": 1323,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 121,
        "Mon": "Starmie",
        "Lvl": 22,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 11
    },
    {
        "Dex": 122,
        "Mon": "Mr_Mime",
        "Lvl": 25.5,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 122,
        "Mon": "Mr_Mime_Galarian",
        "Lvl": 27.5,
        "CP": 1500,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 13
    },
    {
        "Dex": 123,
        "Mon": "Scyther",
        "Lvl": 21,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 11
    },
    {
        "Dex": 124,
        "Mon": "Jynx",
        "Lvl": 22,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 125,
        "Mon": "Electabuzz",
        "Lvl": 24.5,
        "CP": 1497,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 11
    },
    {
        "Dex": 126,
        "Mon": "Magmar",
        "Lvl": 23.5,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 127,
        "Mon": "Pinsir",
        "Lvl": 19,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 14
    },
    {
        "Dex": 127,
        "Mon": "Mega_Pinsir_SPECULATIVE",
        "Lvl": 13,
        "CP": 1500,
        "AtkIV": 5,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 128,
        "Mon": "Tauros",
        "Lvl": 21.5,
        "CP": 1496,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 129,
        "Mon": "Magikarp",
        "Lvl": 51,
        "CP": 314,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 130,
        "Mon": "Gyarados",
        "Lvl": 16.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 130,
        "Mon": "Mega_Gyarados_SPECULATIVE",
        "Lvl": 12,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 9,
        "StaIV": 9
    },
    {
        "Dex": 131,
        "Mon": "Lapras",
        "Lvl": 22,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 10,
        "StaIV": 14
    },
    {
        "Dex": 132,
        "Mon": "Ditto",
        "Lvl": 51,
        "CP": 951,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 133,
        "Mon": "Eevee",
        "Lvl": 51,
        "CP": 1225,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 134,
        "Mon": "Vaporeon",
        "Lvl": 18,
        "CP": 1500,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 135,
        "Mon": "Jolteon",
        "Lvl": 19.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 12,
        "StaIV": 15
    },
    {
        "Dex": 136,
        "Mon": "Flareon",
        "Lvl": 18.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 13
    },
    {
        "Dex": 137,
        "Mon": "Porygon",
        "Lvl": 37.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 138,
        "Mon": "Omanyte",
        "Lvl": 45.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 139,
        "Mon": "Omastar",
        "Lvl": 20.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 9,
        "StaIV": 15
    },
    {
        "Dex": 140,
        "Mon": "Kabuto",
        "Lvl": 51,
        "CP": 1494,
        "AtkIV": 8,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 141,
        "Mon": "Kabutops",
        "Lvl": 21,
        "CP": 1497,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 10
    },
    {
        "Dex": 142,
        "Mon": "Aerodactyl",
        "Lvl": 20,
        "CP": 1496,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 142,
        "Mon": "Mega_Aerodactyl_SPECULATIVE",
        "Lvl": 13.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 14
    },
    {
        "Dex": 143,
        "Mon": "Snorlax",
        "Lvl": 17.5,
        "CP": 1500,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 144,
        "Mon": "Articuno",
        "Lvl": 18.5,
        "CP": 1500,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 145,
        "Mon": "Zapdos",
        "Lvl": 15.5,
        "CP": 1500,
        "AtkIV": 5,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 146,
        "Mon": "Moltres",
        "Lvl": 16,
        "CP": 1500,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 147,
        "Mon": "Dratini",
        "Lvl": 51,
        "CP": 1149,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 148,
        "Mon": "Dragonair",
        "Lvl": 34,
        "CP": 1499,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 149,
        "Mon": "Dragonite",
        "Lvl": 14.5,
        "CP": 1500,
        "AtkIV": 3,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 150,
        "Mon": "Mewtwo_A",
        "Lvl": 18,
        "CP": 1499,
        "AtkIV": 1,
        "DefIV": 10,
        "StaIV": 12
    },
    {
        "Dex": 151,
        "Mon": "Mew",
        "Lvl": 16.5,
        "CP": 1499,
        "AtkIV": 10,
        "DefIV": 15,
        "StaIV": 13
    },
    {
        "Dex": 152,
        "Mon": "Chikorita",
        "Lvl": 51,
        "CP": 1070,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 153,
        "Mon": "Bayleef",
        "Lvl": 50.5,
        "CP": 1497,
        "AtkIV": 2,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 154,
        "Mon": "Meganium",
        "Lvl": 24,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 10,
        "StaIV": 15
    },
    {
        "Dex": 155,
        "Mon": "Cyndaquil",
        "Lvl": 51,
        "CP": 1121,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 156,
        "Mon": "Quilava",
        "Lvl": 40,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 157,
        "Mon": "Typhlosion",
        "Lvl": 19.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 13
    },
    {
        "Dex": 158,
        "Mon": "Totodile",
        "Lvl": 51,
        "CP": 1294,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 159,
        "Mon": "Croconaw",
        "Lvl": 37.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 160,
        "Mon": "Feraligatr",
        "Lvl": 20,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 11,
        "StaIV": 13
    },
    {
        "Dex": 161,
        "Mon": "Sentret",
        "Lvl": 51,
        "CP": 707,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 162,
        "Mon": "Furret",
        "Lvl": 35.5,
        "CP": 1500,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 163,
        "Mon": "Hoothoot",
        "Lvl": 51,
        "CP": 775,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 164,
        "Mon": "Noctowl",
        "Lvl": 28.5,
        "CP": 1499,
        "AtkIV": 1,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 165,
        "Mon": "Ledyba",
        "Lvl": 51,
        "CP": 832,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 166,
        "Mon": "Ledian",
        "Lvl": 51,
        "CP": 1498,
        "AtkIV": 12,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 167,
        "Mon": "Spinarak",
        "Lvl": 51,
        "CP": 934,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 168,
        "Mon": "Ariados",
        "Lvl": 35,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 169,
        "Mon": "Crobat",
        "Lvl": 21.5,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 12
    },
    {
        "Dex": 170,
        "Mon": "Chinchou",
        "Lvl": 51,
        "CP": 1280,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 171,
        "Mon": "Lanturn",
        "Lvl": 28,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 14
    },
    {
        "Dex": 172,
        "Mon": "Pichu",
        "Lvl": 51,
        "CP": 542,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 173,
        "Mon": "Cleffa",
        "Lvl": 51,
        "CP": 768,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 174,
        "Mon": "Igglybuff",
        "Lvl": 51,
        "CP": 613,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 175,
        "Mon": "Togepi",
        "Lvl": 51,
        "CP": 752,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 176,
        "Mon": "Togetic",
        "Lvl": 38.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 14
    },
    {
        "Dex": 177,
        "Mon": "Natu",
        "Lvl": 51,
        "CP": 1261,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 178,
        "Mon": "Xatu",
        "Lvl": 26,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 179,
        "Mon": "Mareep",
        "Lvl": 51,
        "CP": 1133,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 180,
        "Mon": "Flaaffy",
        "Lvl": 47,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 181,
        "Mon": "Ampharos",
        "Lvl": 20,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 11
    },
    {
        "Dex": 181,
        "Mon": "Mega_Ampharos_SPECULATIVE",
        "Lvl": 13,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 182,
        "Mon": "Bellossom",
        "Lvl": 25,
        "CP": 1497,
        "AtkIV": 1,
        "DefIV": 14,
        "StaIV": 14
    },
    {
        "Dex": 183,
        "Mon": "Marill",
        "Lvl": 51,
        "CP": 528,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 184,
        "Mon": "Azumarill",
        "Lvl": 45.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 185,
        "Mon": "Sudowoodo",
        "Lvl": 27,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 11
    },
    {
        "Dex": 186,
        "Mon": "Politoed",
        "Lvl": 23.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 11
    },
    {
        "Dex": 187,
        "Mon": "Hoppip",
        "Lvl": 51,
        "CP": 686,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 188,
        "Mon": "Skiploom",
        "Lvl": 51,
        "CP": 1116,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 189,
        "Mon": "Jumpluff",
        "Lvl": 43,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 14
    },
    {
        "Dex": 190,
        "Mon": "Aipom",
        "Lvl": 51,
        "CP": 1491,
        "AtkIV": 10,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 191,
        "Mon": "Sunkern",
        "Lvl": 51,
        "CP": 452,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 192,
        "Mon": "Sunflora",
        "Lvl": 26.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 193,
        "Mon": "Yanma",
        "Lvl": 49.5,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 194,
        "Mon": "Wooper",
        "Lvl": 51,
        "CP": 734,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 195,
        "Mon": "Quagsire",
        "Lvl": 29,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 196,
        "Mon": "Espeon",
        "Lvl": 17.5,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 197,
        "Mon": "Umbreon",
        "Lvl": 27.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 198,
        "Mon": "Murkrow",
        "Lvl": 43.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 199,
        "Mon": "Slowking",
        "Lvl": 22.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 199,
        "Mon": "Slowking_Galarian",
        "Lvl": 21,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 13
    },
    {
        "Dex": 200,
        "Mon": "Misdreavus",
        "Lvl": 29.5,
        "CP": 1499,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 201,
        "Mon": "Unown",
        "Lvl": 51,
        "CP": 1355,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 202,
        "Mon": "Wobbuffet",
        "Lvl": 51,
        "CP": 1174,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 203,
        "Mon": "Girafarig",
        "Lvl": 28,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 12
    },
    {
        "Dex": 204,
        "Mon": "Pineco",
        "Lvl": 51,
        "CP": 1268,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 205,
        "Mon": "Forretress",
        "Lvl": 25.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 9,
        "StaIV": 15
    },
    {
        "Dex": 206,
        "Mon": "Dunsparce",
        "Lvl": 40,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 12
    },
    {
        "Dex": 207,
        "Mon": "Gligar",
        "Lvl": 33,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 12
    },
    {
        "Dex": 208,
        "Mon": "Steelix",
        "Lvl": 24,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 208,
        "Mon": "Mega_Steelix_SPECULATIVE",
        "Lvl": 15.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 7,
        "StaIV": 15
    },
    {
        "Dex": 209,
        "Mon": "Snubbull",
        "Lvl": 51,
        "CP": 1416,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 210,
        "Mon": "Granbull",
        "Lvl": 22,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 211,
        "Mon": "Qwilfish",
        "Lvl": 28,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 12,
        "StaIV": 14
    },
    {
        "Dex": 212,
        "Mon": "Scizor",
        "Lvl": 18.5,
        "CP": 1497,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 212,
        "Mon": "Mega_Scizor_SPECULATIVE",
        "Lvl": 13.5,
        "CP": 1497,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 213,
        "Mon": "Shuckle",
        "Lvl": 51,
        "CP": 463,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 214,
        "Mon": "Heracross",
        "Lvl": 18,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 214,
        "Mon": "Mega_Heracross_SPECULATIVE",
        "Lvl": 11.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 11
    },
    {
        "Dex": 215,
        "Mon": "Sneasel",
        "Lvl": 27.5,
        "CP": 1496,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 216,
        "Mon": "Teddiursa",
        "Lvl": 51,
        "CP": 1500,
        "AtkIV": 13,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 217,
        "Mon": "Ursaring",
        "Lvl": 19,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 218,
        "Mon": "Slugma",
        "Lvl": 51,
        "CP": 1023,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 219,
        "Mon": "Magcargo",
        "Lvl": 38.5,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 220,
        "Mon": "Swinub",
        "Lvl": 51,
        "CP": 847,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 221,
        "Mon": "Piloswine",
        "Lvl": 24.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 10
    },
    {
        "Dex": 222,
        "Mon": "Corsola",
        "Lvl": 51,
        "CP": 1493,
        "AtkIV": 8,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 223,
        "Mon": "Remoraid",
        "Lvl": 51,
        "CP": 1043,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 224,
        "Mon": "Octillery",
        "Lvl": 24.5,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 13
    },
    {
        "Dex": 225,
        "Mon": "Delibird",
        "Lvl": 51,
        "CP": 1252,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 226,
        "Mon": "Mantine",
        "Lvl": 27.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 227,
        "Mon": "Skarmory",
        "Lvl": 27.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 228,
        "Mon": "Houndour",
        "Lvl": 51,
        "CP": 1412,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 229,
        "Mon": "Houndoom",
        "Lvl": 21.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 13
    },
    {
        "Dex": 229,
        "Mon": "Mega_Houndoom",
        "Lvl": 14.5,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 12,
        "StaIV": 14
    },
    {
        "Dex": 230,
        "Mon": "Kingdra",
        "Lvl": 21.5,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 13
    },
    {
        "Dex": 231,
        "Mon": "Phanpy",
        "Lvl": 51,
        "CP": 1380,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 232,
        "Mon": "Donphan",
        "Lvl": 19,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 8
    },
    {
        "Dex": 233,
        "Mon": "Porygon2",
        "Lvl": 21,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 12,
        "StaIV": 15
    },
    {
        "Dex": 234,
        "Mon": "Stantler",
        "Lvl": 26.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 11,
        "StaIV": 15
    },
    {
        "Dex": 235,
        "Mon": "Smeargle",
        "Lvl": 51,
        "CP": 493,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 236,
        "Mon": "Tyrogue",
        "Lvl": 51,
        "CP": 563,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 237,
        "Mon": "Hitmontop",
        "Lvl": 26.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 238,
        "Mon": "Smoochum",
        "Lvl": 51,
        "CP": 1477,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 239,
        "Mon": "Elekid",
        "Lvl": 51,
        "CP": 1380,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 240,
        "Mon": "Magby",
        "Lvl": 51,
        "CP": 1500,
        "AtkIV": 14,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 241,
        "Mon": "Miltank",
        "Lvl": 24.5,
        "CP": 1497,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 14
    },
    {
        "Dex": 242,
        "Mon": "Blissey",
        "Lvl": 21.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 3
    },
    {
        "Dex": 243,
        "Mon": "Raikou",
        "Lvl": 16,
        "CP": 1500,
        "AtkIV": 3,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 244,
        "Mon": "Entei",
        "Lvl": 16,
        "CP": 1498,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 245,
        "Mon": "Suicune",
        "Lvl": 19,
        "CP": 1500,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 246,
        "Mon": "Larvitar",
        "Lvl": 51,
        "CP": 1190,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 247,
        "Mon": "Pupitar",
        "Lvl": 35.5,
        "CP": 1497,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 14
    },
    {
        "Dex": 248,
        "Mon": "Tyranitar",
        "Lvl": 14.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 248,
        "Mon": "Mega_Tyranitar_SPECULATIVE",
        "Lvl": 10.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 6,
        "StaIV": 13
    },
    {
        "Dex": 249,
        "Mon": "Lugia",
        "Lvl": 15,
        "CP": 1500,
        "AtkIV": 4,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 250,
        "Mon": "Ho_Oh",
        "Lvl": 15,
        "CP": 1500,
        "AtkIV": 1,
        "DefIV": 5,
        "StaIV": 5
    },
    {
        "Dex": 251,
        "Mon": "Celebi",
        "Lvl": 16.5,
        "CP": 1499,
        "AtkIV": 10,
        "DefIV": 15,
        "StaIV": 13
    },
    {
        "Dex": 252,
        "Mon": "Treecko",
        "Lvl": 51,
        "CP": 1204,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 253,
        "Mon": "Grovyle",
        "Lvl": 38.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 254,
        "Mon": "Sceptile",
        "Lvl": 20.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 12,
        "StaIV": 15
    },
    {
        "Dex": 254,
        "Mon": "Mega_Sceptile_SPECULATIVE",
        "Lvl": 13.5,
        "CP": 1500,
        "AtkIV": 2,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 255,
        "Mon": "Torchic",
        "Lvl": 51,
        "CP": 1251,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 256,
        "Mon": "Combusken",
        "Lvl": 39.5,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 257,
        "Mon": "Blaziken",
        "Lvl": 19.5,
        "CP": 1499,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 257,
        "Mon": "Mega_Blaziken_SPECULATIVE",
        "Lvl": 13.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 8
    },
    {
        "Dex": 258,
        "Mon": "Mudkip",
        "Lvl": 51,
        "CP": 1290,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 259,
        "Mon": "Marshtomp",
        "Lvl": 35,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 260,
        "Mon": "Swampert",
        "Lvl": 19,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 14
    },
    {
        "Dex": 260,
        "Mon": "Mega_Swampert_SPECULATIVE",
        "Lvl": 12.5,
        "CP": 1498,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 261,
        "Mon": "Poochyena",
        "Lvl": 51,
        "CP": 776,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 262,
        "Mon": "Mightyena",
        "Lvl": 30,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 12,
        "StaIV": 14
    },
    {
        "Dex": 263,
        "Mon": "Zigzagoon",
        "Lvl": 51,
        "CP": 581,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 263,
        "Mon": "Zigzagoon_Galarian",
        "Lvl": 51,
        "CP": 581,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 264,
        "Mon": "Linoone",
        "Lvl": 40,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 264,
        "Mon": "Linoone_Galarian",
        "Lvl": 40,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 265,
        "Mon": "Wurmple",
        "Lvl": 51,
        "CP": 661,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 266,
        "Mon": "Silcoon",
        "Lvl": 51,
        "CP": 633,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 267,
        "Mon": "Beautifly",
        "Lvl": 34,
        "CP": 1495,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 268,
        "Mon": "Cascoon",
        "Lvl": 51,
        "CP": 633,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 269,
        "Mon": "Dustox",
        "Lvl": 51,
        "CP": 1400,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 270,
        "Mon": "Lotad",
        "Lvl": 51,
        "CP": 684,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 271,
        "Mon": "Lombre",
        "Lvl": 51,
        "CP": 1369,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 272,
        "Mon": "Ludicolo",
        "Lvl": 24.5,
        "CP": 1496,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 273,
        "Mon": "Seedot",
        "Lvl": 51,
        "CP": 684,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 274,
        "Mon": "Nuzleaf",
        "Lvl": 51,
        "CP": 1404,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 275,
        "Mon": "Shiftry",
        "Lvl": 24.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 11
    },
    {
        "Dex": 276,
        "Mon": "Taillow",
        "Lvl": 51,
        "CP": 875,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 277,
        "Mon": "Swellow",
        "Lvl": 29.5,
        "CP": 1497,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 278,
        "Mon": "Wingull",
        "Lvl": 51,
        "CP": 875,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 279,
        "Mon": "Pelipper",
        "Lvl": 27,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 12,
        "StaIV": 15
    },
    {
        "Dex": 280,
        "Mon": "Ralts",
        "Lvl": 51,
        "CP": 616,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 281,
        "Mon": "Kirlia",
        "Lvl": 51,
        "CP": 1106,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 282,
        "Mon": "Gardevoir",
        "Lvl": 18,
        "CP": 1496,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 282,
        "Mon": "Mega_Gardevoir_SPECULATIVE",
        "Lvl": 12,
        "CP": 1497,
        "AtkIV": 4,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 283,
        "Mon": "Surskit",
        "Lvl": 51,
        "CP": 905,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 284,
        "Mon": "Masquerain",
        "Lvl": 25,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 285,
        "Mon": "Shroomish",
        "Lvl": 51,
        "CP": 927,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 286,
        "Mon": "Breloom",
        "Lvl": 21,
        "CP": 1497,
        "AtkIV": 2,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 287,
        "Mon": "Slakoth",
        "Lvl": 51,
        "CP": 1146,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 288,
        "Mon": "Vigoroth",
        "Lvl": 29,
        "CP": 1499,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 289,
        "Mon": "Slaking",
        "Lvl": 12.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 290,
        "Mon": "Nincada",
        "Lvl": 51,
        "CP": 879,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 291,
        "Mon": "Ninjask",
        "Lvl": 29,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 12,
        "StaIV": 15
    },
    {
        "Dex": 292,
        "Mon": "Shedinja",
        "Lvl": 51,
        "CP": 450,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 293,
        "Mon": "Whismur",
        "Lvl": 51,
        "CP": 767,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 294,
        "Mon": "Loudred",
        "Lvl": 51,
        "CP": 1498,
        "AtkIV": 13,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 295,
        "Mon": "Exploud",
        "Lvl": 24.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 10
    },
    {
        "Dex": 296,
        "Mon": "Makuhita",
        "Lvl": 51,
        "CP": 935,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 297,
        "Mon": "Hariyama",
        "Lvl": 20,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 14
    },
    {
        "Dex": 298,
        "Mon": "Azurill",
        "Lvl": 51,
        "CP": 416,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 299,
        "Mon": "Nosepass",
        "Lvl": 51,
        "CP": 1136,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 300,
        "Mon": "Skitty",
        "Lvl": 51,
        "CP": 845,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 301,
        "Mon": "Delcatty",
        "Lvl": 49,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 302,
        "Mon": "Sableye",
        "Lvl": 49.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 302,
        "Mon": "Mega_Sableye_SPECULATIVE",
        "Lvl": 30,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 12
    },
    {
        "Dex": 303,
        "Mon": "Mawile",
        "Lvl": 40,
        "CP": 1500,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 303,
        "Mon": "Mega_Mawile_SPECULATIVE",
        "Lvl": 24,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 13
    },
    {
        "Dex": 304,
        "Mon": "Aron",
        "Lvl": 51,
        "CP": 1496,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 305,
        "Mon": "Lairon",
        "Lvl": 28,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 306,
        "Mon": "Aggron",
        "Lvl": 19,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 12
    },
    {
        "Dex": 306,
        "Mon": "Mega_Aggron_SPECULATIVE",
        "Lvl": 13.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 11,
        "StaIV": 14
    },
    {
        "Dex": 307,
        "Mon": "Meditite",
        "Lvl": 51,
        "CP": 793,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 308,
        "Mon": "Medicham",
        "Lvl": 50.5,
        "CP": 1496,
        "AtkIV": 4,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 308,
        "Mon": "Mega_Medicham_SPECULATIVE",
        "Lvl": 22.5,
        "CP": 1497,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 309,
        "Mon": "Electrike",
        "Lvl": 51,
        "CP": 1104,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 310,
        "Mon": "Manectric",
        "Lvl": 24,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 310,
        "Mon": "Mega_Manectric_SPECULATIVE",
        "Lvl": 15.5,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 13
    },
    {
        "Dex": 311,
        "Mon": "Plusle",
        "Lvl": 34.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 312,
        "Mon": "Minun",
        "Lvl": 38.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 313,
        "Mon": "Volbeat",
        "Lvl": 35.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 314,
        "Mon": "Illumise",
        "Lvl": 35.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 315,
        "Mon": "Roselia",
        "Lvl": 31,
        "CP": 1497,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 316,
        "Mon": "Gulpin",
        "Lvl": 51,
        "CP": 991,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 317,
        "Mon": "Swalot",
        "Lvl": 29.5,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 14
    },
    {
        "Dex": 318,
        "Mon": "Carvanha",
        "Lvl": 51,
        "CP": 1167,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 319,
        "Mon": "Sharpedo",
        "Lvl": 25.5,
        "CP": 1496,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 319,
        "Mon": "Mega_Sharpedo_SPECULATIVE",
        "Lvl": 17,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 12
    },
    {
        "Dex": 320,
        "Mon": "Wailmer",
        "Lvl": 50.5,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 13
    },
    {
        "Dex": 321,
        "Mon": "Wailord",
        "Lvl": 25,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 322,
        "Mon": "Numel",
        "Lvl": 51,
        "CP": 1210,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 323,
        "Mon": "Camerupt",
        "Lvl": 26,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 13
    },
    {
        "Dex": 323,
        "Mon": "Mega_Camerupt_SPECULATIVE",
        "Lvl": 17.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 11
    },
    {
        "Dex": 324,
        "Mon": "Torkoal",
        "Lvl": 27.5,
        "CP": 1496,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 325,
        "Mon": "Spoink",
        "Lvl": 50.5,
        "CP": 1495,
        "AtkIV": 13,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 326,
        "Mon": "Grumpig",
        "Lvl": 24,
        "CP": 1499,
        "AtkIV": 1,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 327,
        "Mon": "Spinda",
        "Lvl": 51,
        "CP": 1396,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 328,
        "Mon": "Trapinch",
        "Lvl": 51,
        "CP": 1458,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 329,
        "Mon": "Vibrava",
        "Lvl": 51,
        "CP": 1401,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 330,
        "Mon": "Flygon",
        "Lvl": 21.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 9
    },
    {
        "Dex": 331,
        "Mon": "Cacnea",
        "Lvl": 51,
        "CP": 1421,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 332,
        "Mon": "Cacturne",
        "Lvl": 24.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 333,
        "Mon": "Swablu",
        "Lvl": 51,
        "CP": 942,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 334,
        "Mon": "Altaria",
        "Lvl": 29,
        "CP": 1497,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 334,
        "Mon": "Mega_Altaria_SPECULATIVE",
        "Lvl": 18,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 8,
        "StaIV": 15
    },
    {
        "Dex": 335,
        "Mon": "Zangoose",
        "Lvl": 23.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 10
    },
    {
        "Dex": 336,
        "Mon": "Seviper",
        "Lvl": 27,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 14
    },
    {
        "Dex": 337,
        "Mon": "Lunatone",
        "Lvl": 24.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 338,
        "Mon": "Solrock",
        "Lvl": 24.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 339,
        "Mon": "Barboach",
        "Lvl": 51,
        "CP": 937,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 340,
        "Mon": "Whiscash",
        "Lvl": 28,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 13
    },
    {
        "Dex": 341,
        "Mon": "Corphish",
        "Lvl": 51,
        "CP": 1408,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 342,
        "Mon": "Crawdaunt",
        "Lvl": 22.5,
        "CP": 1499,
        "AtkIV": 2,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 343,
        "Mon": "Baltoy",
        "Lvl": 51,
        "CP": 900,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 344,
        "Mon": "Claydol",
        "Lvl": 29.5,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 345,
        "Mon": "Lileep",
        "Lvl": 51,
        "CP": 1477,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 346,
        "Mon": "Cradily",
        "Lvl": 26,
        "CP": 1494,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 347,
        "Mon": "Anorith",
        "Lvl": 45,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 348,
        "Mon": "Armaldo",
        "Lvl": 20,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 9,
        "StaIV": 15
    },
    {
        "Dex": 349,
        "Mon": "Feebas",
        "Lvl": 51,
        "CP": 314,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 350,
        "Mon": "Milotic",
        "Lvl": 19,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 11
    },
    {
        "Dex": 351,
        "Mon": "Castform",
        "Lvl": 41.5,
        "CP": 1496,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 352,
        "Mon": "Kecleon",
        "Lvl": 28,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 353,
        "Mon": "Shuppet",
        "Lvl": 51,
        "CP": 1165,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 354,
        "Mon": "Banette",
        "Lvl": 24.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 354,
        "Mon": "Mega_Banette_SPECULATIVE",
        "Lvl": 15.5,
        "CP": 1497,
        "AtkIV": 0,
        "DefIV": 12,
        "StaIV": 13
    },
    {
        "Dex": 355,
        "Mon": "Duskull",
        "Lvl": 51,
        "CP": 808,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 356,
        "Mon": "Dusclops",
        "Lvl": 45,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 11,
        "StaIV": 15
    },
    {
        "Dex": 357,
        "Mon": "Tropius",
        "Lvl": 30,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 358,
        "Mon": "Chimecho",
        "Lvl": 25.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 12
    },
    {
        "Dex": 359,
        "Mon": "Absol",
        "Lvl": 22,
        "CP": 1497,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 359,
        "Mon": "Mega_Absol_SPECULATIVE",
        "Lvl": 16.5,
        "CP": 1500,
        "AtkIV": 4,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 360,
        "Mon": "Wynaut",
        "Lvl": 51,
        "CP": 611,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 361,
        "Mon": "Snorunt",
        "Lvl": 51,
        "CP": 1016,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 362,
        "Mon": "Glalie",
        "Lvl": 27.5,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 13
    },
    {
        "Dex": 362,
        "Mon": "Mega_Glalie_SPECULATIVE",
        "Lvl": 17.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 10,
        "StaIV": 14
    },
    {
        "Dex": 363,
        "Mon": "Spheal",
        "Lvl": 51,
        "CP": 1101,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 364,
        "Mon": "Sealeo",
        "Lvl": 38,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 365,
        "Mon": "Walrein",
        "Lvl": 21,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 12,
        "StaIV": 15
    },
    {
        "Dex": 366,
        "Mon": "Clamperl",
        "Lvl": 51,
        "CP": 1453,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 367,
        "Mon": "Huntail",
        "Lvl": 24,
        "CP": 1498,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 368,
        "Mon": "Gorebyss",
        "Lvl": 22.5,
        "CP": 1497,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 369,
        "Mon": "Relicanth",
        "Lvl": 22.5,
        "CP": 1496,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 370,
        "Mon": "Luvdisc",
        "Lvl": 51,
        "CP": 970,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 371,
        "Mon": "Bagon",
        "Lvl": 51,
        "CP": 1323,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 372,
        "Mon": "Shelgon",
        "Lvl": 28,
        "CP": 1499,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 373,
        "Mon": "Salamence",
        "Lvl": 15,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 10,
        "StaIV": 14
    },
    {
        "Dex": 373,
        "Mon": "Mega_Salamence_SPECULATIVE",
        "Lvl": 11,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 12
    },
    {
        "Dex": 374,
        "Mon": "Beldum",
        "Lvl": 51,
        "CP": 1117,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 375,
        "Mon": "Metang",
        "Lvl": 38,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 376,
        "Mon": "Metagross",
        "Lvl": 14.5,
        "CP": 1495,
        "AtkIV": 2,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 376,
        "Mon": "Mega_Metagross_SPECULATIVE",
        "Lvl": 11.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 6,
        "StaIV": 11
    },
    {
        "Dex": 377,
        "Mon": "Regirock",
        "Lvl": 18,
        "CP": 1498,
        "AtkIV": 2,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 378,
        "Mon": "Regice",
        "Lvl": 18,
        "CP": 1498,
        "AtkIV": 2,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 379,
        "Mon": "Registeel",
        "Lvl": 23.5,
        "CP": 1499,
        "AtkIV": 2,
        "DefIV": 13,
        "StaIV": 14
    },
    {
        "Dex": 380,
        "Mon": "Latias",
        "Lvl": 16,
        "CP": 1500,
        "AtkIV": 1,
        "DefIV": 12,
        "StaIV": 14
    },
    {
        "Dex": 381,
        "Mon": "Latios",
        "Lvl": 15,
        "CP": 1500,
        "AtkIV": 1,
        "DefIV": 2,
        "StaIV": 13
    },
    {
        "Dex": 384,
        "Mon": "Rayquaza",
        "Lvl": 15,
        "CP": 1500,
        "AtkIV": 1,
        "DefIV": 10,
        "StaIV": 2
    },
    {
        "Dex": 385,
        "Mon": "Jirachi",
        "Lvl": 16.5,
        "CP": 1499,
        "AtkIV": 10,
        "DefIV": 15,
        "StaIV": 13
    },
    {
        "Dex": 386,
        "Mon": "Deoxys_Attack",
        "Lvl": 20.5,
        "CP": 1499,
        "AtkIV": 13,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 386,
        "Mon": "Deoxys_Defense",
        "Lvl": 24,
        "CP": 1500,
        "AtkIV": 10,
        "DefIV": 15,
        "StaIV": 13
    },
    {
        "Dex": 387,
        "Mon": "Turtwig",
        "Lvl": 51,
        "CP": 1358,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 388,
        "Mon": "Grotle",
        "Lvl": 31.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 11
    },
    {
        "Dex": 389,
        "Mon": "Torterra",
        "Lvl": 19.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 11,
        "StaIV": 13
    },
    {
        "Dex": 390,
        "Mon": "Chimchar",
        "Lvl": 51,
        "CP": 1095,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 391,
        "Mon": "Monferno",
        "Lvl": 43.5,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 392,
        "Mon": "Infernape",
        "Lvl": 21,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 393,
        "Mon": "Piplup",
        "Lvl": 51,
        "CP": 1229,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 394,
        "Mon": "Prinplup",
        "Lvl": 38,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 395,
        "Mon": "Empoleon",
        "Lvl": 19.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 396,
        "Mon": "Starly",
        "Lvl": 51,
        "CP": 822,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 397,
        "Mon": "Staravia",
        "Lvl": 51,
        "CP": 1486,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 398,
        "Mon": "Staraptor",
        "Lvl": 20,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 13
    },
    {
        "Dex": 399,
        "Mon": "Bidoof",
        "Lvl": 51,
        "CP": 825,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 400,
        "Mon": "Bibarel",
        "Lvl": 33.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 13
    },
    {
        "Dex": 401,
        "Mon": "Kricketot",
        "Lvl": 51,
        "CP": 459,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 402,
        "Mon": "Kricketune",
        "Lvl": 39.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 403,
        "Mon": "Shinx",
        "Lvl": 51,
        "CP": 1002,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 404,
        "Mon": "Luxio",
        "Lvl": 48,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 405,
        "Mon": "Luxray",
        "Lvl": 19.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 12
    },
    {
        "Dex": 406,
        "Mon": "Budew",
        "Lvl": 51,
        "CP": 979,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 407,
        "Mon": "Roserade",
        "Lvl": 19,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 11,
        "StaIV": 14
    },
    {
        "Dex": 408,
        "Mon": "Cranidos",
        "Lvl": 31.5,
        "CP": 1499,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 409,
        "Mon": "Rampardos",
        "Lvl": 17,
        "CP": 1500,
        "AtkIV": 1,
        "DefIV": 14,
        "StaIV": 8
    },
    {
        "Dex": 410,
        "Mon": "Shieldon",
        "Lvl": 51,
        "CP": 1019,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 411,
        "Mon": "Bastiodon",
        "Lvl": 50,
        "CP": 1497,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 412,
        "Mon": "Burmy",
        "Lvl": 51,
        "CP": 558,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 413,
        "Mon": "Wormadam_Plant",
        "Lvl": 35.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 413,
        "Mon": "Wormadam_Sandy",
        "Lvl": 35.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 413,
        "Mon": "Wormadam_Trash",
        "Lvl": 44.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 414,
        "Mon": "Mothim",
        "Lvl": 32.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 415,
        "Mon": "Combee",
        "Lvl": 51,
        "CP": 566,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 416,
        "Mon": "Vespiquen",
        "Lvl": 29,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 13
    },
    {
        "Dex": 417,
        "Mon": "Pachirisu",
        "Lvl": 51,
        "CP": 1388,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 418,
        "Mon": "Buizel",
        "Lvl": 51,
        "CP": 1206,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 419,
        "Mon": "Floatzel",
        "Lvl": 23,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 420,
        "Mon": "Cherubi",
        "Lvl": 51,
        "CP": 1087,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 421,
        "Mon": "Cherrim",
        "Lvl": 28,
        "CP": 1496,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 422,
        "Mon": "Shellos",
        "Lvl": 51,
        "CP": 1299,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 423,
        "Mon": "Gastrodon",
        "Lvl": 24.5,
        "CP": 1500,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 424,
        "Mon": "Ambipom",
        "Lvl": 23.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 14
    },
    {
        "Dex": 425,
        "Mon": "Drifloon",
        "Lvl": 51,
        "CP": 1369,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 426,
        "Mon": "Drifblim",
        "Lvl": 24,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 12
    },
    {
        "Dex": 427,
        "Mon": "Buneary",
        "Lvl": 51,
        "CP": 1440,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 428,
        "Mon": "Lopunny",
        "Lvl": 28,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 428,
        "Mon": "Mega_Lopunny_SPECULATIVE",
        "Lvl": 15,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 11
    },
    {
        "Dex": 429,
        "Mon": "Mismagius",
        "Lvl": 21.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 430,
        "Mon": "Honchkrow",
        "Lvl": 20.5,
        "CP": 1495,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 431,
        "Mon": "Glameow",
        "Lvl": 51,
        "CP": 1068,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 432,
        "Mon": "Purugly",
        "Lvl": 29.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 12,
        "StaIV": 15
    },
    {
        "Dex": 433,
        "Mon": "Chingling",
        "Lvl": 51,
        "CP": 1150,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 434,
        "Mon": "Stunky",
        "Lvl": 51,
        "CP": 1317,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 435,
        "Mon": "Skuntank",
        "Lvl": 24,
        "CP": 1495,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 436,
        "Mon": "Bronzor",
        "Lvl": 51,
        "CP": 689,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 437,
        "Mon": "Bronzong",
        "Lvl": 25.5,
        "CP": 1497,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 438,
        "Mon": "Bonsly",
        "Lvl": 51,
        "CP": 1489,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 439,
        "Mon": "Mime_Jr",
        "Lvl": 51,
        "CP": 1253,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 440,
        "Mon": "Happiny",
        "Lvl": 51,
        "CP": 424,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 441,
        "Mon": "Chatot",
        "Lvl": 33.5,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 442,
        "Mon": "Spiritomb",
        "Lvl": 27.5,
        "CP": 1495,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 443,
        "Mon": "Gible",
        "Lvl": 51,
        "CP": 1273,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 444,
        "Mon": "Gabite",
        "Lvl": 31,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 445,
        "Mon": "Garchomp",
        "Lvl": 14,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 445,
        "Mon": "Mega_Garchomp_SPECULATIVE",
        "Lvl": 10,
        "CP": 1497,
        "AtkIV": 3,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 446,
        "Mon": "Munchlax",
        "Lvl": 32,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 13
    },
    {
        "Dex": 447,
        "Mon": "Riolu",
        "Lvl": 51,
        "CP": 1136,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 448,
        "Mon": "Lucario",
        "Lvl": 20.5,
        "CP": 1494,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 448,
        "Mon": "Mega_Lucario_SPECULATIVE",
        "Lvl": 14.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 13
    },
    {
        "Dex": 449,
        "Mon": "Hippopotas",
        "Lvl": 50.5,
        "CP": 1500,
        "AtkIV": 11,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 450,
        "Mon": "Hippowdon",
        "Lvl": 18.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 10
    },
    {
        "Dex": 451,
        "Mon": "Skorupi",
        "Lvl": 51,
        "CP": 1155,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 452,
        "Mon": "Drapion",
        "Lvl": 23,
        "CP": 1500,
        "AtkIV": 2,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 453,
        "Mon": "Croagunk",
        "Lvl": 51,
        "CP": 1089,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 454,
        "Mon": "Toxicroak",
        "Lvl": 22.5,
        "CP": 1500,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 455,
        "Mon": "Carnivine",
        "Lvl": 26.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 13
    },
    {
        "Dex": 456,
        "Mon": "Finneon",
        "Lvl": 51,
        "CP": 1111,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 457,
        "Mon": "Lumineon",
        "Lvl": 34.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 12
    },
    {
        "Dex": 458,
        "Mon": "Mantyke",
        "Lvl": 51,
        "CP": 1428,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 459,
        "Mon": "Snover",
        "Lvl": 51,
        "CP": 1326,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 460,
        "Mon": "Abomasnow",
        "Lvl": 24,
        "CP": 1494,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 460,
        "Mon": "Mega_Abomasnow",
        "Lvl": 16.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 13
    },
    {
        "Dex": 461,
        "Mon": "Weavile",
        "Lvl": 18.5,
        "CP": 1496,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 462,
        "Mon": "Magnezone",
        "Lvl": 17.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 463,
        "Mon": "Lickilicky",
        "Lvl": 23.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 10
    },
    {
        "Dex": 464,
        "Mon": "Rhyperior",
        "Lvl": 15,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 14
    },
    {
        "Dex": 465,
        "Mon": "Tangrowth",
        "Lvl": 18.5,
        "CP": 1500,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 466,
        "Mon": "Electivire",
        "Lvl": 18,
        "CP": 1499,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 467,
        "Mon": "Magmortar",
        "Lvl": 18,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 10,
        "StaIV": 15
    },
    {
        "Dex": 468,
        "Mon": "Togekiss",
        "Lvl": 17,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 11
    },
    {
        "Dex": 469,
        "Mon": "Yanmega",
        "Lvl": 19,
        "CP": 1497,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 470,
        "Mon": "Leafeon",
        "Lvl": 19,
        "CP": 1497,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 471,
        "Mon": "Glaceon",
        "Lvl": 18,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 12
    },
    {
        "Dex": 472,
        "Mon": "Gliscor",
        "Lvl": 21,
        "CP": 1498,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 473,
        "Mon": "Mamoswine",
        "Lvl": 17,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 7
    },
    {
        "Dex": 474,
        "Mon": "Porygon_Z",
        "Lvl": 17,
        "CP": 1500,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 13
    },
    {
        "Dex": 475,
        "Mon": "Gallade",
        "Lvl": 18,
        "CP": 1496,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 475,
        "Mon": "Mega_Gallade_SPECULATIVE",
        "Lvl": 12,
        "CP": 1500,
        "AtkIV": 4,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 476,
        "Mon": "Probopass",
        "Lvl": 28,
        "CP": 1497,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 477,
        "Mon": "Dusknoir",
        "Lvl": 24,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 13
    },
    {
        "Dex": 478,
        "Mon": "Froslass",
        "Lvl": 28,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 479,
        "Mon": "Rotom",
        "Lvl": 28,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 479,
        "Mon": "Rotom_Fan",
        "Lvl": 22,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 12,
        "StaIV": 15
    },
    {
        "Dex": 479,
        "Mon": "Rotom_Frost",
        "Lvl": 22,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 12,
        "StaIV": 15
    },
    {
        "Dex": 479,
        "Mon": "Rotom_Heat",
        "Lvl": 22,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 12,
        "StaIV": 15
    },
    {
        "Dex": 479,
        "Mon": "Rotom_Mow",
        "Lvl": 22,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 12,
        "StaIV": 15
    },
    {
        "Dex": 479,
        "Mon": "Rotom_Wash",
        "Lvl": 22,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 12,
        "StaIV": 15
    },
    {
        "Dex": 480,
        "Mon": "Uxie",
        "Lvl": 23,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 13
    },
    {
        "Dex": 481,
        "Mon": "Mesprit",
        "Lvl": 18.5,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 12
    },
    {
        "Dex": 482,
        "Mon": "Azelf",
        "Lvl": 17.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 11
    },
    {
        "Dex": 488,
        "Mon": "Cresselia",
        "Lvl": 20,
        "CP": 1500,
        "AtkIV": 2,
        "DefIV": 15,
        "StaIV": 13
    },
    {
        "Dex": 489,
        "Mon": "Phione",
        "Lvl": 25.5,
        "CP": 1499,
        "AtkIV": 11,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 490,
        "Mon": "Manaphy",
        "Lvl": 16.5,
        "CP": 1499,
        "AtkIV": 10,
        "DefIV": 15,
        "StaIV": 13
    },
    {
        "Dex": 492,
        "Mon": "Shaymin_Land",
        "Lvl": 16.5,
        "CP": 1499,
        "AtkIV": 10,
        "DefIV": 15,
        "StaIV": 13
    },
    {
        "Dex": 492,
        "Mon": "Shaymin_Sky",
        "Lvl": 15,
        "CP": 1499,
        "AtkIV": 10,
        "DefIV": 15,
        "StaIV": 11
    },
    {
        "Dex": 494,
        "Mon": "Victini",
        "Lvl": 16.5,
        "CP": 1499,
        "AtkIV": 10,
        "DefIV": 15,
        "StaIV": 13
    },
    {
        "Dex": 495,
        "Mon": "Snivy",
        "Lvl": 51,
        "CP": 972,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 496,
        "Mon": "Servine",
        "Lvl": 50.5,
        "CP": 1496,
        "AtkIV": 3,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 497,
        "Mon": "Serperior",
        "Lvl": 25.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 10,
        "StaIV": 15
    },
    {
        "Dex": 498,
        "Mon": "Tepig",
        "Lvl": 51,
        "CP": 1239,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 499,
        "Mon": "Pignite",
        "Lvl": 29.5,
        "CP": 1492,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 500,
        "Mon": "Emboar",
        "Lvl": 19,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 9
    },
    {
        "Dex": 501,
        "Mon": "Oshawott",
        "Lvl": 51,
        "CP": 1196,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 502,
        "Mon": "Dewott",
        "Lvl": 36,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 503,
        "Mon": "Samurott",
        "Lvl": 20,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 14
    },
    {
        "Dex": 504,
        "Mon": "Patrat",
        "Lvl": 51,
        "CP": 905,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 505,
        "Mon": "Watchog",
        "Lvl": 33,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 506,
        "Mon": "Lillipup",
        "Lvl": 51,
        "CP": 1047,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 507,
        "Mon": "Herdier",
        "Lvl": 43,
        "CP": 1499,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 508,
        "Mon": "Stoutland",
        "Lvl": 20,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 13
    },
    {
        "Dex": 509,
        "Mon": "Purrloin",
        "Lvl": 51,
        "CP": 883,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 510,
        "Mon": "Liepard",
        "Lvl": 31.5,
        "CP": 1497,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 511,
        "Mon": "Pansage",
        "Lvl": 51,
        "CP": 1094,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 512,
        "Mon": "Simisage",
        "Lvl": 24,
        "CP": 1497,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 513,
        "Mon": "Pansear",
        "Lvl": 51,
        "CP": 1094,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 514,
        "Mon": "Simisear",
        "Lvl": 24,
        "CP": 1497,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 515,
        "Mon": "Panpour",
        "Lvl": 51,
        "CP": 1094,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 516,
        "Mon": "Simipour",
        "Lvl": 24,
        "CP": 1497,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 517,
        "Mon": "Munna",
        "Lvl": 51,
        "CP": 1310,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 518,
        "Mon": "Musharna",
        "Lvl": 21,
        "CP": 1497,
        "AtkIV": 0,
        "DefIV": 12,
        "StaIV": 15
    },
    {
        "Dex": 519,
        "Mon": "Pidove",
        "Lvl": 51,
        "CP": 970,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 520,
        "Mon": "Tranquill",
        "Lvl": 51,
        "CP": 1500,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 521,
        "Mon": "Unfezant",
        "Lvl": 20.5,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 522,
        "Mon": "Blitzle",
        "Lvl": 51,
        "CP": 1010,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 523,
        "Mon": "Zebstrika",
        "Lvl": 23.5,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 9
    },
    {
        "Dex": 524,
        "Mon": "Roggenrola",
        "Lvl": 51,
        "CP": 1378,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 525,
        "Mon": "Boldore",
        "Lvl": 28,
        "CP": 1494,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 526,
        "Mon": "Gigalith",
        "Lvl": 17.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 11,
        "StaIV": 15
    },
    {
        "Dex": 527,
        "Mon": "Woobat",
        "Lvl": 51,
        "CP": 1163,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 528,
        "Mon": "Swoobat",
        "Lvl": 38,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 9
    },
    {
        "Dex": 529,
        "Mon": "Drilbur",
        "Lvl": 50.5,
        "CP": 1500,
        "AtkIV": 8,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 530,
        "Mon": "Excadrill",
        "Lvl": 17,
        "CP": 1499,
        "AtkIV": 2,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 531,
        "Mon": "Audino",
        "Lvl": 41,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 13
    },
    {
        "Dex": 531,
        "Mon": "Mega_Audino_SPECULATIVE",
        "Lvl": 23,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 14
    },
    {
        "Dex": 532,
        "Mon": "Timburr",
        "Lvl": 50.5,
        "CP": 1496,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 533,
        "Mon": "Gurdurr",
        "Lvl": 26,
        "CP": 1496,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 534,
        "Mon": "Conkeldurr",
        "Lvl": 16.5,
        "CP": 1500,
        "AtkIV": 3,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 535,
        "Mon": "Tympole",
        "Lvl": 51,
        "CP": 959,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 536,
        "Mon": "Palpitoad",
        "Lvl": 50.5,
        "CP": 1494,
        "AtkIV": 7,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 537,
        "Mon": "Seismitoad",
        "Lvl": 22,
        "CP": 1500,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 538,
        "Mon": "Throh",
        "Lvl": 22,
        "CP": 1498,
        "AtkIV": 2,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 539,
        "Mon": "Sawk",
        "Lvl": 20,
        "CP": 1495,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 540,
        "Mon": "Sewaddle",
        "Lvl": 51,
        "CP": 1118,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 541,
        "Mon": "Swadloon",
        "Lvl": 51,
        "CP": 1495,
        "AtkIV": 9,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 542,
        "Mon": "Leavanny",
        "Lvl": 22,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 14
    },
    {
        "Dex": 543,
        "Mon": "Venipede",
        "Lvl": 51,
        "CP": 808,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 544,
        "Mon": "Whirlipede",
        "Lvl": 51,
        "CP": 1309,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 545,
        "Mon": "Scolipede",
        "Lvl": 23,
        "CP": 1500,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 546,
        "Mon": "Cottonee",
        "Lvl": 51,
        "CP": 801,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 547,
        "Mon": "Whimsicott",
        "Lvl": 28.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 548,
        "Mon": "Petilil",
        "Lvl": 51,
        "CP": 1178,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 549,
        "Mon": "Lilligant",
        "Lvl": 22,
        "CP": 1497,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 550,
        "Mon": "Basculin",
        "Lvl": 27.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 11,
        "StaIV": 15
    },
    {
        "Dex": 551,
        "Mon": "Sandile",
        "Lvl": 51,
        "CP": 1186,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 552,
        "Mon": "Krokorok",
        "Lvl": 50.5,
        "CP": 1499,
        "AtkIV": 3,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 553,
        "Mon": "Krookodile",
        "Lvl": 18.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 14
    },
    {
        "Dex": 554,
        "Mon": "Darumaka",
        "Lvl": 51,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 554,
        "Mon": "Darumaka_Galarian",
        "Lvl": 51,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 555,
        "Mon": "Darmanitan_Galarian_Standard",
        "Lvl": 18,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 11
    },
    {
        "Dex": 555,
        "Mon": "Darmanitan_Galarian_Zen",
        "Lvl": 14,
        "CP": 1499,
        "AtkIV": 2,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 555,
        "Mon": "Darmanitan_Standard",
        "Lvl": 18,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 11
    },
    {
        "Dex": 555,
        "Mon": "Darmanitan_Zen",
        "Lvl": 15,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 13
    },
    {
        "Dex": 556,
        "Mon": "Maractus",
        "Lvl": 25,
        "CP": 1497,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 14
    },
    {
        "Dex": 557,
        "Mon": "Dwebble",
        "Lvl": 51,
        "CP": 1401,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 558,
        "Mon": "Crustle",
        "Lvl": 22.5,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 13
    },
    {
        "Dex": 559,
        "Mon": "Scraggy",
        "Lvl": 50.5,
        "CP": 1497,
        "AtkIV": 9,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 560,
        "Mon": "Scrafty",
        "Lvl": 25.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 8,
        "StaIV": 15
    },
    {
        "Dex": 561,
        "Mon": "Sigilyph",
        "Lvl": 22,
        "CP": 1500,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 562,
        "Mon": "Yamask",
        "Lvl": 51,
        "CP": 1123,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 562,
        "Mon": "Yamask_Galarian",
        "Lvl": 51,
        "CP": 1123,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 563,
        "Mon": "Cofagrigus",
        "Lvl": 25.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 11,
        "StaIV": 14
    },
    {
        "Dex": 564,
        "Mon": "Tirtouga",
        "Lvl": 49.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 565,
        "Mon": "Carracosta",
        "Lvl": 21.5,
        "CP": 1498,
        "AtkIV": 1,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 566,
        "Mon": "Archen",
        "Lvl": 31,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 567,
        "Mon": "Archeops",
        "Lvl": 16.5,
        "CP": 1498,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 568,
        "Mon": "Trubbish",
        "Lvl": 51,
        "CP": 1144,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 569,
        "Mon": "Garbodor",
        "Lvl": 24.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 13
    },
    {
        "Dex": 570,
        "Mon": "Zorua",
        "Lvl": 51,
        "CP": 1345,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 571,
        "Mon": "Zoroark",
        "Lvl": 21.5,
        "CP": 1496,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 572,
        "Mon": "Minccino",
        "Lvl": 51,
        "CP": 998,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 573,
        "Mon": "Cinccino",
        "Lvl": 25,
        "CP": 1500,
        "AtkIV": 2,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 574,
        "Mon": "Gothita",
        "Lvl": 51,
        "CP": 1088,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 575,
        "Mon": "Gothorita",
        "Lvl": 43,
        "CP": 1497,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 576,
        "Mon": "Gothitelle",
        "Lvl": 23.5,
        "CP": 1497,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 577,
        "Mon": "Solosis",
        "Lvl": 51,
        "CP": 1500,
        "AtkIV": 8,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 578,
        "Mon": "Duosion",
        "Lvl": 28,
        "CP": 1497,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 13
    },
    {
        "Dex": 579,
        "Mon": "Reuniclus",
        "Lvl": 19,
        "CP": 1498,
        "AtkIV": 2,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 580,
        "Mon": "Ducklett",
        "Lvl": 51,
        "CP": 980,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 581,
        "Mon": "Swanna",
        "Lvl": 27,
        "CP": 1496,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 582,
        "Mon": "Vanillite",
        "Lvl": 51,
        "CP": 1182,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 583,
        "Mon": "Vanillish",
        "Lvl": 43,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 584,
        "Mon": "Vanilluxe",
        "Lvl": 20,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 13
    },
    {
        "Dex": 585,
        "Mon": "Deerling",
        "Lvl": 51,
        "CP": 1298,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 586,
        "Mon": "Sawsbuck",
        "Lvl": 23.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 14
    },
    {
        "Dex": 587,
        "Mon": "Emolga",
        "Lvl": 41,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 588,
        "Mon": "Karrablast",
        "Lvl": 51,
        "CP": 1352,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 589,
        "Mon": "Escavalier",
        "Lvl": 19.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 13
    },
    {
        "Dex": 590,
        "Mon": "Foongus",
        "Lvl": 51,
        "CP": 1120,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 591,
        "Mon": "Amoonguss",
        "Lvl": 27,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 592,
        "Mon": "Frillish",
        "Lvl": 51,
        "CP": 1438,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 593,
        "Mon": "Jellicent",
        "Lvl": 24.5,
        "CP": 1498,
        "AtkIV": 1,
        "DefIV": 14,
        "StaIV": 14
    },
    {
        "Dex": 594,
        "Mon": "Alomomola",
        "Lvl": 27,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 11
    },
    {
        "Dex": 595,
        "Mon": "Joltik",
        "Lvl": 51,
        "CP": 1170,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 596,
        "Mon": "Galvantula",
        "Lvl": 25.5,
        "CP": 1495,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 597,
        "Mon": "Ferroseed",
        "Lvl": 51,
        "CP": 1076,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 598,
        "Mon": "Ferrothorn",
        "Lvl": 25,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 13
    },
    {
        "Dex": 599,
        "Mon": "Klink",
        "Lvl": 51,
        "CP": 1094,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 600,
        "Mon": "Klang",
        "Lvl": 32.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 601,
        "Mon": "Klinklang",
        "Lvl": 21.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 602,
        "Mon": "Tynamo",
        "Lvl": 51,
        "CP": 928,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 603,
        "Mon": "Eelektrik",
        "Lvl": 37.5,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 604,
        "Mon": "Eelektross",
        "Lvl": 20.5,
        "CP": 1500,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 605,
        "Mon": "Elgyem",
        "Lvl": 51,
        "CP": 1497,
        "AtkIV": 6,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 606,
        "Mon": "Beheeyem",
        "Lvl": 20.5,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 13
    },
    {
        "Dex": 607,
        "Mon": "Litwick",
        "Lvl": 51,
        "CP": 1151,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 608,
        "Mon": "Lampent",
        "Lvl": 37,
        "CP": 1497,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 609,
        "Mon": "Chandelure",
        "Lvl": 17,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 610,
        "Mon": "Axew",
        "Lvl": 50.5,
        "CP": 1492,
        "AtkIV": 8,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 611,
        "Mon": "Fraxure",
        "Lvl": 25,
        "CP": 1497,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 612,
        "Mon": "Haxorus",
        "Lvl": 15.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 13
    },
    {
        "Dex": 613,
        "Mon": "Cubchoo",
        "Lvl": 51,
        "CP": 1223,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 614,
        "Mon": "Beartic",
        "Lvl": 18.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 12
    },
    {
        "Dex": 615,
        "Mon": "Cryogonal",
        "Lvl": 20.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 11
    },
    {
        "Dex": 616,
        "Mon": "Shelmet",
        "Lvl": 51,
        "CP": 954,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 617,
        "Mon": "Accelgor",
        "Lvl": 23,
        "CP": 1496,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 618,
        "Mon": "Stunfisk",
        "Lvl": 27,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 12,
        "StaIV": 15
    },
    {
        "Dex": 618,
        "Mon": "Stunfisk_Galarian",
        "Lvl": 27,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 12,
        "StaIV": 15
    },
    {
        "Dex": 619,
        "Mon": "Mienfoo",
        "Lvl": 50,
        "CP": 1498,
        "AtkIV": 7,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 620,
        "Mon": "Mienshao",
        "Lvl": 20.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 621,
        "Mon": "Druddigon",
        "Lvl": 20.5,
        "CP": 1495,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 622,
        "Mon": "Golett",
        "Lvl": 51,
        "CP": 1360,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 623,
        "Mon": "Golurk",
        "Lvl": 19.5,
        "CP": 1499,
        "AtkIV": 2,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 624,
        "Mon": "Pawniard",
        "Lvl": 51,
        "CP": 1498,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 625,
        "Mon": "Bisharp",
        "Lvl": 19.5,
        "CP": 1494,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 626,
        "Mon": "Bouffalant",
        "Lvl": 20.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 11
    },
    {
        "Dex": 627,
        "Mon": "Rufflet",
        "Lvl": 48,
        "CP": 1496,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 628,
        "Mon": "Braviary",
        "Lvl": 18,
        "CP": 1498,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 629,
        "Mon": "Vullaby",
        "Lvl": 51,
        "CP": 1455,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 630,
        "Mon": "Mandibuzz",
        "Lvl": 27.5,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 631,
        "Mon": "Heatmor",
        "Lvl": 23.5,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 632,
        "Mon": "Durant",
        "Lvl": 21,
        "CP": 1499,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 633,
        "Mon": "Deino",
        "Lvl": 51,
        "CP": 1214,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 634,
        "Mon": "Zweilous",
        "Lvl": 32.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 635,
        "Mon": "Hydreigon",
        "Lvl": 15.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 10
    },
    {
        "Dex": 636,
        "Mon": "Larvesta",
        "Lvl": 47.5,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 637,
        "Mon": "Volcarona",
        "Lvl": 15.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 9,
        "StaIV": 15
    },
    {
        "Dex": 650,
        "Mon": "Chespin",
        "Lvl": 51,
        "CP": 1254,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 651,
        "Mon": "Quilladin",
        "Lvl": 37.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 652,
        "Mon": "Chesnaught",
        "Lvl": 19,
        "CP": 1499,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 653,
        "Mon": "Fennekin",
        "Lvl": 51,
        "CP": 1176,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 654,
        "Mon": "Braixen",
        "Lvl": 33,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 655,
        "Mon": "Delphox",
        "Lvl": 18.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 11,
        "StaIV": 14
    },
    {
        "Dex": 656,
        "Mon": "Froakie",
        "Lvl": 51,
        "CP": 1135,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 657,
        "Mon": "Frogadier",
        "Lvl": 39.5,
        "CP": 1500,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 658,
        "Mon": "Greninja",
        "Lvl": 21,
        "CP": 1500,
        "AtkIV": 3,
        "DefIV": 15,
        "StaIV": 12
    },
    {
        "Dex": 659,
        "Mon": "Bunnelby",
        "Lvl": 51,
        "CP": 633,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 660,
        "Mon": "Diggersby",
        "Lvl": 50.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 11
    },
    {
        "Dex": 661,
        "Mon": "Fletchling",
        "Lvl": 51,
        "CP": 916,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 662,
        "Mon": "Fletchinder",
        "Lvl": 50,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 663,
        "Mon": "Talonflame",
        "Lvl": 26,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 664,
        "Mon": "Scatterbug",
        "Lvl": 51,
        "CP": 563,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 665,
        "Mon": "Spewpa",
        "Lvl": 51,
        "CP": 548,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 666,
        "Mon": "Vivillon",
        "Lvl": 31.5,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 667,
        "Mon": "Litleo",
        "Lvl": 51,
        "CP": 1499,
        "AtkIV": 3,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 668,
        "Mon": "Pyroar",
        "Lvl": 20.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 10
    },
    {
        "Dex": 669,
        "Mon": "Flabebe",
        "Lvl": 51,
        "CP": 1216,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 670,
        "Mon": "Floette",
        "Lvl": 47,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 671,
        "Mon": "Florges",
        "Lvl": 17.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 13
    },
    {
        "Dex": 672,
        "Mon": "Skiddo",
        "Lvl": 51,
        "CP": 1430,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 673,
        "Mon": "Gogoat",
        "Lvl": 20,
        "CP": 1500,
        "AtkIV": 2,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 674,
        "Mon": "Pancham",
        "Lvl": 48,
        "CP": 1499,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 675,
        "Mon": "Pangoro",
        "Lvl": 19.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 13
    },
    {
        "Dex": 676,
        "Mon": "Furfrou",
        "Lvl": 27,
        "CP": 1497,
        "AtkIV": 1,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 677,
        "Mon": "Espurr",
        "Lvl": 51,
        "CP": 1441,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 678,
        "Mon": "Meowstic",
        "Lvl": 27,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 679,
        "Mon": "Honedge_SPECULATIVE",
        "Lvl": 51,
        "CP": 1500,
        "AtkIV": 7,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 680,
        "Mon": "Doublade_SPECULATIVE",
        "Lvl": 23.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 11,
        "StaIV": 14
    },
    {
        "Dex": 682,
        "Mon": "Spritzee",
        "Lvl": 51,
        "CP": 1432,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 683,
        "Mon": "Aromatisse",
        "Lvl": 24.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 684,
        "Mon": "Swirlix",
        "Lvl": 51,
        "CP": 1349,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 685,
        "Mon": "Slurpuff",
        "Lvl": 26,
        "CP": 1500,
        "AtkIV": 1,
        "DefIV": 14,
        "StaIV": 14
    },
    {
        "Dex": 686,
        "Mon": "Inkay",
        "Lvl": 51,
        "CP": 1061,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 687,
        "Mon": "Malamar",
        "Lvl": 24.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 9
    },
    {
        "Dex": 688,
        "Mon": "Binacle",
        "Lvl": 51,
        "CP": 1082,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 689,
        "Mon": "Barbaracle",
        "Lvl": 21.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 10,
        "StaIV": 13
    },
    {
        "Dex": 690,
        "Mon": "Skrelp",
        "Lvl": 51,
        "CP": 1216,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 691,
        "Mon": "Dragalge",
        "Lvl": 24,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 13
    },
    {
        "Dex": 692,
        "Mon": "Clauncher",
        "Lvl": 51,
        "CP": 1244,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 693,
        "Mon": "Clawitzer",
        "Lvl": 20.5,
        "CP": 1499,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 13
    },
    {
        "Dex": 694,
        "Mon": "Helioptile",
        "Lvl": 51,
        "CP": 1067,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 695,
        "Mon": "Heliolisk",
        "Lvl": 21.5,
        "CP": 1494,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 696,
        "Mon": "Tyrunt",
        "Lvl": 40,
        "CP": 1493,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 697,
        "Mon": "Tyrantrum",
        "Lvl": 18,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 12
    },
    {
        "Dex": 698,
        "Mon": "Amaura",
        "Lvl": 51,
        "CP": 1500,
        "AtkIV": 10,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 699,
        "Mon": "Aurorus",
        "Lvl": 20.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 12,
        "StaIV": 13
    },
    {
        "Dex": 700,
        "Mon": "Sylveon",
        "Lvl": 18.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 12
    },
    {
        "Dex": 701,
        "Mon": "Hawlucha",
        "Lvl": 23.5,
        "CP": 1498,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 702,
        "Mon": "Dedenne",
        "Lvl": 33,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 12
    },
    {
        "Dex": 703,
        "Mon": "Carbink",
        "Lvl": 50.5,
        "CP": 1499,
        "AtkIV": 4,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 704,
        "Mon": "Goomy",
        "Lvl": 51,
        "CP": 1116,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 705,
        "Mon": "Sliggoo",
        "Lvl": 28,
        "CP": 1498,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 706,
        "Mon": "Goodra",
        "Lvl": 16,
        "CP": 1500,
        "AtkIV": 1,
        "DefIV": 14,
        "StaIV": 14
    },
    {
        "Dex": 707,
        "Mon": "Klefki",
        "Lvl": 29.5,
        "CP": 1497,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 708,
        "Mon": "Phantump",
        "Lvl": 51,
        "CP": 1285,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 709,
        "Mon": "Trevenant",
        "Lvl": 22,
        "CP": 1497,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 712,
        "Mon": "Bergmite",
        "Lvl": 51,
        "CP": 1390,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 713,
        "Mon": "Avalugg",
        "Lvl": 17.5,
        "CP": 1500,
        "AtkIV": 2,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 714,
        "Mon": "Noibat",
        "Lvl": 51,
        "CP": 763,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 715,
        "Mon": "Noivern",
        "Lvl": 20.5,
        "CP": 1497,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 12
    },
    {
        "Dex": 808,
        "Mon": "Meltan",
        "Lvl": 51,
        "CP": 1221,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 809,
        "Mon": "Melmetal",
        "Lvl": 15.5,
        "CP": 1499,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 862,
        "Mon": "Obstagoon",
        "Lvl": 21.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 863,
        "Mon": "Perrserker",
        "Lvl": 23.5,
        "CP": 1495,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 865,
        "Mon": "Sirfetchd",
        "Lvl": 18.5,
        "CP": 1500,
        "AtkIV": 2,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 866,
        "Mon": "Mr_Rime",
        "Lvl": 20,
        "CP": 1497,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 13
    },
    {
        "Dex": 867,
        "Mon": "Runerigus",
        "Lvl": 25.5,
        "CP": 1500,
        "AtkIV": 0,
        "DefIV": 11,
        "StaIV": 14
    }
];

// CONCATENATED MODULE: ./src/data-pvp-ul.js
/*
Source https://github.com/nguoianphu/PvP_IVs
- Go to https://pvpivs.com/leagueRanks.html
- Choose "Ultra League"
- Check "Include Entire Pokedex:"
- Calculate
- Copy table to an Excel sheet
- Export it into a CSV file
- Find some online tool to convert CSV to JSON like http://www.convertcsv.com/csv-to-json.htm
- Add the "export const DataPvpUL = [" at top of JSON
- Add "];" at the end of JSON
- Change JSON file name to ".js"
- Change key names as below
*/
const DataPvpUL = [
    {
        "Dex": 1,
        "Mon": "Bulbasaur",
        "Lvl": 51,
        "CP": 1275,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 2,
        "Mon": "Ivysaur",
        "Lvl": 51,
        "CP": 1943,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 3,
        "Mon": "Venusaur",
        "Lvl": 39,
        "CP": 2499,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 4,
        "Mon": "Charmander",
        "Lvl": 51,
        "CP": 1121,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 5,
        "Mon": "Charmeleon",
        "Lvl": 51,
        "CP": 1891,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 6,
        "Mon": "Charizard",
        "Lvl": 35,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 7,
        "Mon": "Squirtle",
        "Lvl": 51,
        "CP": 1082,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 8,
        "Mon": "Wartortle",
        "Lvl": 51,
        "CP": 1702,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 9,
        "Mon": "Blastoise",
        "Lvl": 48.5,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 12,
        "StaIV": 15
    },
    {
        "Dex": 10,
        "Mon": "Caterpie",
        "Lvl": 51,
        "CP": 500,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 11,
        "Mon": "Metapod",
        "Lvl": 51,
        "CP": 515,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 12,
        "Mon": "Butterfree",
        "Lvl": 51,
        "CP": 2090,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 13,
        "Mon": "Weedle",
        "Lvl": 51,
        "CP": 522,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 14,
        "Mon": "Kakuna",
        "Lvl": 51,
        "CP": 494,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 15,
        "Mon": "Beedrill",
        "Lvl": 51,
        "CP": 2112,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 16,
        "Mon": "Pidgey",
        "Lvl": 51,
        "CP": 778,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 17,
        "Mon": "Pidgeotto",
        "Lvl": 51,
        "CP": 1366,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 18,
        "Mon": "Pidgeot",
        "Lvl": 51,
        "CP": 2436,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 19,
        "Mon": "Rattata",
        "Lvl": 51,
        "CP": 840,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 19,
        "Mon": "Rattata_Alola",
        "Lvl": 51,
        "CP": 840,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 20,
        "Mon": "Raticate",
        "Lvl": 51,
        "CP": 1980,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 20,
        "Mon": "Raticate_Alola",
        "Lvl": 51,
        "CP": 1950,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 21,
        "Mon": "Spearow",
        "Lvl": 51,
        "CP": 913,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 22,
        "Mon": "Fearow",
        "Lvl": 51,
        "CP": 2284,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 23,
        "Mon": "Ekans",
        "Lvl": 51,
        "CP": 1061,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 24,
        "Mon": "Arbok",
        "Lvl": 51,
        "CP": 2197,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 25,
        "Mon": "Pikachu",
        "Lvl": 51,
        "CP": 1073,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 26,
        "Mon": "Raichu",
        "Lvl": 51,
        "CP": 2496,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 26,
        "Mon": "Raichu_Alola",
        "Lvl": 51,
        "CP": 2494,
        "AtkIV": 5,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 27,
        "Mon": "Sandshrew",
        "Lvl": 51,
        "CP": 1443,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 27,
        "Mon": "Sandshrew_Alola",
        "Lvl": 51,
        "CP": 1479,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 28,
        "Mon": "Sandslash",
        "Lvl": 50.5,
        "CP": 2494,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 28,
        "Mon": "Sandslash_Alola",
        "Lvl": 49,
        "CP": 2499,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 29,
        "Mon": "Nidoran_Female",
        "Lvl": 51,
        "CP": 933,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 30,
        "Mon": "Nidorina",
        "Lvl": 51,
        "CP": 1498,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 31,
        "Mon": "Nidoqueen",
        "Lvl": 47,
        "CP": 2498,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 32,
        "Mon": "Nidoran_Male",
        "Lvl": 51,
        "CP": 984,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 33,
        "Mon": "Nidorino",
        "Lvl": 51,
        "CP": 1594,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 34,
        "Mon": "Nidoking",
        "Lvl": 44,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 14
    },
    {
        "Dex": 35,
        "Mon": "Clefairy",
        "Lvl": 51,
        "CP": 1322,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 36,
        "Mon": "Clefable",
        "Lvl": 49,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 13
    },
    {
        "Dex": 37,
        "Mon": "Vulpix",
        "Lvl": 51,
        "CP": 1010,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 37,
        "Mon": "Vulpix_Alola",
        "Lvl": 51,
        "CP": 1010,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 38,
        "Mon": "Ninetales",
        "Lvl": 51,
        "CP": 2494,
        "AtkIV": 7,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 38,
        "Mon": "Ninetales_Alola",
        "Lvl": 51,
        "CP": 2498,
        "AtkIV": 5,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 39,
        "Mon": "Jigglypuff",
        "Lvl": 51,
        "CP": 828,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 40,
        "Mon": "Wigglytuff",
        "Lvl": 51,
        "CP": 2204,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 41,
        "Mon": "Zubat",
        "Lvl": 51,
        "CP": 763,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 42,
        "Mon": "Golbat",
        "Lvl": 51,
        "CP": 2261,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 43,
        "Mon": "Oddish",
        "Lvl": 51,
        "CP": 1405,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 44,
        "Mon": "Gloom",
        "Lvl": 51,
        "CP": 1923,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 45,
        "Mon": "Vileplume",
        "Lvl": 44,
        "CP": 2498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 46,
        "Mon": "Paras",
        "Lvl": 51,
        "CP": 1164,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 47,
        "Mon": "Parasect",
        "Lvl": 51,
        "CP": 2127,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 48,
        "Mon": "Venonat",
        "Lvl": 51,
        "CP": 1148,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 49,
        "Mon": "Venomoth",
        "Lvl": 51,
        "CP": 2382,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 50,
        "Mon": "Diglett",
        "Lvl": 51,
        "CP": 773,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 50,
        "Mon": "Diglett_Alola",
        "Lvl": 51,
        "CP": 779,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 51,
        "Mon": "Dugtrio",
        "Lvl": 51,
        "CP": 1793,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 51,
        "Mon": "Dugtrio_Alola",
        "Lvl": 51,
        "CP": 2170,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 52,
        "Mon": "Meowth",
        "Lvl": 51,
        "CP": 856,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 52,
        "Mon": "Meowth_Alola",
        "Lvl": 51,
        "CP": 912,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 52,
        "Mon": "Meowth_Galarian",
        "Lvl": 51,
        "CP": 1184,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 53,
        "Mon": "Persian",
        "Lvl": 51,
        "CP": 1932,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 53,
        "Mon": "Persian_Alola",
        "Lvl": 51,
        "CP": 2026,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 54,
        "Mon": "Psyduck",
        "Lvl": 51,
        "CP": 1265,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 55,
        "Mon": "Golduck",
        "Lvl": 48.5,
        "CP": 2496,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 13
    },
    {
        "Dex": 56,
        "Mon": "Mankey",
        "Lvl": 51,
        "CP": 1332,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 57,
        "Mon": "Primeape",
        "Lvl": 51,
        "CP": 2499,
        "AtkIV": 5,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 58,
        "Mon": "Growlithe",
        "Lvl": 51,
        "CP": 1422,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 59,
        "Mon": "Arcanine",
        "Lvl": 31.5,
        "CP": 2497,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 60,
        "Mon": "Poliwag",
        "Lvl": 51,
        "CP": 948,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 61,
        "Mon": "Poliwhirl",
        "Lvl": 51,
        "CP": 1623,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 62,
        "Mon": "Poliwrath",
        "Lvl": 44,
        "CP": 2499,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 14
    },
    {
        "Dex": 63,
        "Mon": "Abra",
        "Lvl": 51,
        "CP": 1535,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 64,
        "Mon": "Kadabra",
        "Lvl": 51,
        "CP": 2355,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 65,
        "Mon": "Alakazam",
        "Lvl": 30.5,
        "CP": 2497,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 66,
        "Mon": "Machop",
        "Lvl": 51,
        "CP": 1462,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 67,
        "Mon": "Machoke",
        "Lvl": 51,
        "CP": 2324,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 68,
        "Mon": "Machamp",
        "Lvl": 31,
        "CP": 2497,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 69,
        "Mon": "Bellsprout",
        "Lvl": 51,
        "CP": 1182,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 70,
        "Mon": "Weepinbell",
        "Lvl": 51,
        "CP": 1844,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 71,
        "Mon": "Victreebel",
        "Lvl": 48.5,
        "CP": 2499,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 12
    },
    {
        "Dex": 72,
        "Mon": "Tentacool",
        "Lvl": 51,
        "CP": 1190,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 73,
        "Mon": "Tentacruel",
        "Lvl": 50,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 74,
        "Mon": "Geodude",
        "Lvl": 51,
        "CP": 1479,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 74,
        "Mon": "Geodude_Alola",
        "Lvl": 51,
        "CP": 1479,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 75,
        "Mon": "Graveler",
        "Lvl": 51,
        "CP": 2171,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 75,
        "Mon": "Graveler_Alola",
        "Lvl": 51,
        "CP": 2171,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 76,
        "Mon": "Golem",
        "Lvl": 33.5,
        "CP": 2498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 76,
        "Mon": "Golem_Alola",
        "Lvl": 33.5,
        "CP": 2498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 77,
        "Mon": "Ponyta",
        "Lvl": 51,
        "CP": 1942,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 77,
        "Mon": "Ponyta_Galarian",
        "Lvl": 51,
        "CP": 1942,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 78,
        "Mon": "Rapidash",
        "Lvl": 47,
        "CP": 2495,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 78,
        "Mon": "Rapidash_Galarian",
        "Lvl": 47,
        "CP": 2495,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 79,
        "Mon": "Slowpoke",
        "Lvl": 51,
        "CP": 1403,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 79,
        "Mon": "Slowpoke_Galarian",
        "Lvl": 51,
        "CP": 1403,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 80,
        "Mon": "Slowbro",
        "Lvl": 45.5,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 14
    },
    {
        "Dex": 80,
        "Mon": "Slowbro_Galarian",
        "Lvl": 48.5,
        "CP": 2500,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 11
    },
    {
        "Dex": 81,
        "Mon": "Magnemite",
        "Lvl": 51,
        "CP": 1558,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 82,
        "Mon": "Magneton",
        "Lvl": 45.5,
        "CP": 2494,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 83,
        "Mon": "Farfetchd",
        "Lvl": 51,
        "CP": 1414,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 83,
        "Mon": "Farfetchd_Galarian",
        "Lvl": 51,
        "CP": 1915,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 84,
        "Mon": "Doduo",
        "Lvl": 51,
        "CP": 1373,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 85,
        "Mon": "Dodrio",
        "Lvl": 50,
        "CP": 2498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 86,
        "Mon": "Seel",
        "Lvl": 51,
        "CP": 1111,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 87,
        "Mon": "Dewgong",
        "Lvl": 51,
        "CP": 2271,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 88,
        "Mon": "Grimer",
        "Lvl": 51,
        "CP": 1572,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 88,
        "Mon": "Grimer_Alola",
        "Lvl": 51,
        "CP": 1572,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 89,
        "Mon": "Muk",
        "Lvl": 38.5,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 89,
        "Mon": "Muk_Alola",
        "Lvl": 38.5,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 90,
        "Mon": "Shellder",
        "Lvl": 51,
        "CP": 1235,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 91,
        "Mon": "Cloyster",
        "Lvl": 45,
        "CP": 2496,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 14
    },
    {
        "Dex": 92,
        "Mon": "Gastly",
        "Lvl": 51,
        "CP": 1406,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 93,
        "Mon": "Haunter",
        "Lvl": 51,
        "CP": 2246,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 94,
        "Mon": "Gengar",
        "Lvl": 34.5,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 95,
        "Mon": "Onix",
        "Lvl": 51,
        "CP": 1260,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 96,
        "Mon": "Drowzee",
        "Lvl": 51,
        "CP": 1190,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 97,
        "Mon": "Hypno",
        "Lvl": 51,
        "CP": 2391,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 98,
        "Mon": "Krabby",
        "Lvl": 51,
        "CP": 1785,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 99,
        "Mon": "Kingler",
        "Lvl": 35.5,
        "CP": 2491,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 100,
        "Mon": "Voltorb",
        "Lvl": 51,
        "CP": 1155,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 101,
        "Mon": "Electrode",
        "Lvl": 51,
        "CP": 2401,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 102,
        "Mon": "Exeggcute",
        "Lvl": 51,
        "CP": 1344,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 103,
        "Mon": "Exeggutor",
        "Lvl": 31.5,
        "CP": 2499,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 103,
        "Mon": "Exeggutor_Alola",
        "Lvl": 31.5,
        "CP": 2497,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 104,
        "Mon": "Cubone",
        "Lvl": 51,
        "CP": 1166,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 105,
        "Mon": "Marowak",
        "Lvl": 51,
        "CP": 2100,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 105,
        "Mon": "Marowak_Alola",
        "Lvl": 51,
        "CP": 2100,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 106,
        "Mon": "Hitmonlee",
        "Lvl": 43,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 107,
        "Mon": "Hitmonchan",
        "Lvl": 50.5,
        "CP": 2499,
        "AtkIV": 3,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 108,
        "Mon": "Lickitung",
        "Lvl": 51,
        "CP": 1614,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 109,
        "Mon": "Koffing",
        "Lvl": 51,
        "CP": 1389,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 110,
        "Mon": "Weezing",
        "Lvl": 51,
        "CP": 2498,
        "AtkIV": 6,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 110,
        "Mon": "Weezing_Galarian",
        "Lvl": 51,
        "CP": 2498,
        "AtkIV": 6,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 111,
        "Mon": "Rhyhorn",
        "Lvl": 51,
        "CP": 1889,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 112,
        "Mon": "Rhydon",
        "Lvl": 29.5,
        "CP": 2498,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 14
    },
    {
        "Dex": 113,
        "Mon": "Chansey",
        "Lvl": 51,
        "CP": 1435,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 114,
        "Mon": "Tangela",
        "Lvl": 51,
        "CP": 2495,
        "AtkIV": 10,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 115,
        "Mon": "Kangaskhan",
        "Lvl": 44,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 13
    },
    {
        "Dex": 116,
        "Mon": "Horsea",
        "Lvl": 51,
        "CP": 1208,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 117,
        "Mon": "Seadra",
        "Lvl": 51,
        "CP": 2394,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 118,
        "Mon": "Goldeen",
        "Lvl": 51,
        "CP": 1318,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 119,
        "Mon": "Seaking",
        "Lvl": 51,
        "CP": 2474,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 120,
        "Mon": "Staryu",
        "Lvl": 51,
        "CP": 1323,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 121,
        "Mon": "Starmie",
        "Lvl": 43,
        "CP": 2497,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 122,
        "Mon": "Mr_Mime",
        "Lvl": 51,
        "CP": 2499,
        "AtkIV": 11,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 122,
        "Mon": "Mr_Mime_Galarian",
        "Lvl": 51,
        "CP": 2366,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 123,
        "Mon": "Scyther",
        "Lvl": 39.5,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 124,
        "Mon": "Jynx",
        "Lvl": 43,
        "CP": 2497,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 125,
        "Mon": "Electabuzz",
        "Lvl": 51,
        "CP": 2495,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 126,
        "Mon": "Magmar",
        "Lvl": 49.5,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 127,
        "Mon": "Pinsir",
        "Lvl": 33,
        "CP": 2498,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 128,
        "Mon": "Tauros",
        "Lvl": 42,
        "CP": 2498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 129,
        "Mon": "Magikarp",
        "Lvl": 51,
        "CP": 314,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 130,
        "Mon": "Gyarados",
        "Lvl": 27.5,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 131,
        "Mon": "Lapras",
        "Lvl": 42.5,
        "CP": 2498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 132,
        "Mon": "Ditto",
        "Lvl": 51,
        "CP": 951,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 133,
        "Mon": "Eevee",
        "Lvl": 51,
        "CP": 1225,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 134,
        "Mon": "Vaporeon",
        "Lvl": 30.5,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 13
    },
    {
        "Dex": 135,
        "Mon": "Jolteon",
        "Lvl": 34.5,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 136,
        "Mon": "Flareon",
        "Lvl": 31,
        "CP": 2498,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 137,
        "Mon": "Porygon",
        "Lvl": 51,
        "CP": 1968,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 138,
        "Mon": "Omanyte",
        "Lvl": 51,
        "CP": 1767,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 139,
        "Mon": "Omastar",
        "Lvl": 37.5,
        "CP": 2499,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 140,
        "Mon": "Kabuto",
        "Lvl": 51,
        "CP": 1568,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 141,
        "Mon": "Kabutops",
        "Lvl": 39,
        "CP": 2497,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 142,
        "Mon": "Aerodactyl",
        "Lvl": 37.5,
        "CP": 2499,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 143,
        "Mon": "Snorlax",
        "Lvl": 29.5,
        "CP": 2499,
        "AtkIV": 0,
        "DefIV": 12,
        "StaIV": 15
    },
    {
        "Dex": 144,
        "Mon": "Articuno",
        "Lvl": 31.5,
        "CP": 2500,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 145,
        "Mon": "Zapdos",
        "Lvl": 26.5,
        "CP": 2500,
        "AtkIV": 1,
        "DefIV": 12,
        "StaIV": 13
    },
    {
        "Dex": 146,
        "Mon": "Moltres",
        "Lvl": 27,
        "CP": 2500,
        "AtkIV": 1,
        "DefIV": 10,
        "StaIV": 15
    },
    {
        "Dex": 147,
        "Mon": "Dratini",
        "Lvl": 51,
        "CP": 1149,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 148,
        "Mon": "Dragonair",
        "Lvl": 51,
        "CP": 2036,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 149,
        "Mon": "Dragonite",
        "Lvl": 24.5,
        "CP": 2499,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 150,
        "Mon": "Mewtwo",
        "Lvl": 22,
        "CP": 2498,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 13
    },
    {
        "Dex": 150,
        "Mon": "Mewtwo_A",
        "Lvl": 29.5,
        "CP": 2495,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 151,
        "Mon": "Mew",
        "Lvl": 27.5,
        "CP": 2497,
        "AtkIV": 10,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 152,
        "Mon": "Chikorita",
        "Lvl": 51,
        "CP": 1070,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 153,
        "Mon": "Bayleef",
        "Lvl": 51,
        "CP": 1664,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 154,
        "Mon": "Meganium",
        "Lvl": 50.5,
        "CP": 2498,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 13
    },
    {
        "Dex": 155,
        "Mon": "Cyndaquil",
        "Lvl": 51,
        "CP": 1121,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 156,
        "Mon": "Quilava",
        "Lvl": 51,
        "CP": 1891,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 157,
        "Mon": "Typhlosion",
        "Lvl": 35,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 158,
        "Mon": "Totodile",
        "Lvl": 51,
        "CP": 1294,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 159,
        "Mon": "Croconaw",
        "Lvl": 51,
        "CP": 1970,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 160,
        "Mon": "Feraligatr",
        "Lvl": 35.5,
        "CP": 2497,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 161,
        "Mon": "Sentret",
        "Lvl": 51,
        "CP": 707,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 162,
        "Mon": "Furret",
        "Lvl": 51,
        "CP": 2011,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 163,
        "Mon": "Hoothoot",
        "Lvl": 51,
        "CP": 775,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 164,
        "Mon": "Noctowl",
        "Lvl": 51,
        "CP": 2316,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 165,
        "Mon": "Ledyba",
        "Lvl": 51,
        "CP": 832,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 166,
        "Mon": "Ledian",
        "Lvl": 51,
        "CP": 1540,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 167,
        "Mon": "Spinarak",
        "Lvl": 51,
        "CP": 934,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 168,
        "Mon": "Ariados",
        "Lvl": 51,
        "CP": 2027,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 169,
        "Mon": "Crobat",
        "Lvl": 41.5,
        "CP": 2497,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 170,
        "Mon": "Chinchou",
        "Lvl": 51,
        "CP": 1280,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 171,
        "Mon": "Lanturn",
        "Lvl": 51,
        "CP": 2385,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 172,
        "Mon": "Pichu",
        "Lvl": 51,
        "CP": 542,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 173,
        "Mon": "Cleffa",
        "Lvl": 51,
        "CP": 768,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 174,
        "Mon": "Igglybuff",
        "Lvl": 51,
        "CP": 613,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 175,
        "Mon": "Togepi",
        "Lvl": 51,
        "CP": 752,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 176,
        "Mon": "Togetic",
        "Lvl": 51,
        "CP": 1954,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 177,
        "Mon": "Natu",
        "Lvl": 51,
        "CP": 1261,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 178,
        "Mon": "Xatu",
        "Lvl": 51,
        "CP": 2491,
        "AtkIV": 14,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 179,
        "Mon": "Mareep",
        "Lvl": 51,
        "CP": 1133,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 180,
        "Mon": "Flaaffy",
        "Lvl": 51,
        "CP": 1740,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 181,
        "Mon": "Ampharos",
        "Lvl": 36,
        "CP": 2497,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 182,
        "Mon": "Bellossom",
        "Lvl": 51,
        "CP": 2496,
        "AtkIV": 7,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 183,
        "Mon": "Marill",
        "Lvl": 51,
        "CP": 528,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 184,
        "Mon": "Azumarill",
        "Lvl": 51,
        "CP": 1816,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 185,
        "Mon": "Sudowoodo",
        "Lvl": 51,
        "CP": 2457,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 186,
        "Mon": "Politoed",
        "Lvl": 48.5,
        "CP": 2498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 187,
        "Mon": "Hoppip",
        "Lvl": 51,
        "CP": 686,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 188,
        "Mon": "Skiploom",
        "Lvl": 51,
        "CP": 1116,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 189,
        "Mon": "Jumpluff",
        "Lvl": 51,
        "CP": 1872,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 190,
        "Mon": "Aipom",
        "Lvl": 51,
        "CP": 1542,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 191,
        "Mon": "Sunkern",
        "Lvl": 51,
        "CP": 452,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 192,
        "Mon": "Sunflora",
        "Lvl": 51,
        "CP": 2450,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 193,
        "Mon": "Yanma",
        "Lvl": 51,
        "CP": 1682,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 194,
        "Mon": "Wooper",
        "Lvl": 51,
        "CP": 734,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 195,
        "Mon": "Quagsire",
        "Lvl": 51,
        "CP": 2279,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 196,
        "Mon": "Espeon",
        "Lvl": 29,
        "CP": 2493,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 197,
        "Mon": "Umbreon",
        "Lvl": 51,
        "CP": 2445,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 198,
        "Mon": "Murkrow",
        "Lvl": 51,
        "CP": 1787,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 199,
        "Mon": "Slowking",
        "Lvl": 45.5,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 14
    },
    {
        "Dex": 199,
        "Mon": "Slowking_Galarian",
        "Lvl": 39.5,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 200,
        "Mon": "Misdreavus",
        "Lvl": 51,
        "CP": 2204,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 201,
        "Mon": "Unown",
        "Lvl": 51,
        "CP": 1355,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 202,
        "Mon": "Wobbuffet",
        "Lvl": 51,
        "CP": 1174,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 203,
        "Mon": "Girafarig",
        "Lvl": 51,
        "CP": 2341,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 204,
        "Mon": "Pineco",
        "Lvl": 51,
        "CP": 1268,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 205,
        "Mon": "Forretress",
        "Lvl": 50.5,
        "CP": 2492,
        "AtkIV": 8,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 206,
        "Mon": "Dunsparce",
        "Lvl": 51,
        "CP": 1932,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 207,
        "Mon": "Gligar",
        "Lvl": 51,
        "CP": 2124,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 208,
        "Mon": "Steelix",
        "Lvl": 50.5,
        "CP": 2493,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 209,
        "Mon": "Snubbull",
        "Lvl": 51,
        "CP": 1416,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 210,
        "Mon": "Granbull",
        "Lvl": 44,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 211,
        "Mon": "Qwilfish",
        "Lvl": 51,
        "CP": 2346,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 212,
        "Mon": "Scizor",
        "Lvl": 32,
        "CP": 2499,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 213,
        "Mon": "Shuckle",
        "Lvl": 51,
        "CP": 463,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 214,
        "Mon": "Heracross",
        "Lvl": 30.5,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 13
    },
    {
        "Dex": 215,
        "Mon": "Sneasel",
        "Lvl": 51,
        "CP": 2346,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 216,
        "Mon": "Teddiursa",
        "Lvl": 51,
        "CP": 1520,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 217,
        "Mon": "Ursaring",
        "Lvl": 33.5,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 13
    },
    {
        "Dex": 218,
        "Mon": "Slugma",
        "Lvl": 51,
        "CP": 1023,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 219,
        "Mon": "Magcargo",
        "Lvl": 51,
        "CP": 1947,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 220,
        "Mon": "Swinub",
        "Lvl": 51,
        "CP": 847,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 221,
        "Mon": "Piloswine",
        "Lvl": 51,
        "CP": 2500,
        "AtkIV": 2,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 222,
        "Mon": "Corsola",
        "Lvl": 51,
        "CP": 1576,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 223,
        "Mon": "Remoraid",
        "Lvl": 51,
        "CP": 1043,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 224,
        "Mon": "Octillery",
        "Lvl": 51,
        "CP": 2498,
        "AtkIV": 3,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 225,
        "Mon": "Delibird",
        "Lvl": 51,
        "CP": 1252,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 226,
        "Mon": "Mantine",
        "Lvl": 51,
        "CP": 2412,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 227,
        "Mon": "Skarmory",
        "Lvl": 51,
        "CP": 2412,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 228,
        "Mon": "Houndour",
        "Lvl": 51,
        "CP": 1412,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 229,
        "Mon": "Houndoom",
        "Lvl": 41,
        "CP": 2494,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 230,
        "Mon": "Kingdra",
        "Lvl": 41.5,
        "CP": 2499,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 231,
        "Mon": "Phanpy",
        "Lvl": 51,
        "CP": 1380,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 232,
        "Mon": "Donphan",
        "Lvl": 32,
        "CP": 2494,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 233,
        "Mon": "Porygon2",
        "Lvl": 39,
        "CP": 2496,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 234,
        "Mon": "Stantler",
        "Lvl": 51,
        "CP": 2476,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 235,
        "Mon": "Smeargle",
        "Lvl": 51,
        "CP": 493,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 236,
        "Mon": "Tyrogue",
        "Lvl": 51,
        "CP": 563,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 237,
        "Mon": "Hitmontop",
        "Lvl": 51,
        "CP": 2467,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 238,
        "Mon": "Smoochum",
        "Lvl": 51,
        "CP": 1477,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 239,
        "Mon": "Elekid",
        "Lvl": 51,
        "CP": 1380,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 240,
        "Mon": "Magby",
        "Lvl": 51,
        "CP": 1514,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 241,
        "Mon": "Miltank",
        "Lvl": 51,
        "CP": 2499,
        "AtkIV": 3,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 242,
        "Mon": "Blissey",
        "Lvl": 41,
        "CP": 2499,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 243,
        "Mon": "Raikou",
        "Lvl": 27,
        "CP": 2500,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 12
    },
    {
        "Dex": 244,
        "Mon": "Entei",
        "Lvl": 26.5,
        "CP": 2498,
        "AtkIV": 3,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 245,
        "Mon": "Suicune",
        "Lvl": 33,
        "CP": 2500,
        "AtkIV": 2,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 246,
        "Mon": "Larvitar",
        "Lvl": 51,
        "CP": 1190,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 247,
        "Mon": "Pupitar",
        "Lvl": 51,
        "CP": 2020,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 248,
        "Mon": "Tyranitar",
        "Lvl": 24.5,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 11
    },
    {
        "Dex": 249,
        "Mon": "Lugia",
        "Lvl": 25.5,
        "CP": 2498,
        "AtkIV": 1,
        "DefIV": 13,
        "StaIV": 13
    },
    {
        "Dex": 250,
        "Mon": "Ho_Oh",
        "Lvl": 24,
        "CP": 2497,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 251,
        "Mon": "Celebi",
        "Lvl": 27.5,
        "CP": 2497,
        "AtkIV": 10,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 252,
        "Mon": "Treecko",
        "Lvl": 51,
        "CP": 1204,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 253,
        "Mon": "Grovyle",
        "Lvl": 51,
        "CP": 1914,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 254,
        "Mon": "Sceptile",
        "Lvl": 38,
        "CP": 2496,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 13
    },
    {
        "Dex": 255,
        "Mon": "Torchic",
        "Lvl": 51,
        "CP": 1251,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 256,
        "Mon": "Combusken",
        "Lvl": 51,
        "CP": 1890,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 257,
        "Mon": "Blaziken",
        "Lvl": 35,
        "CP": 2499,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 258,
        "Mon": "Mudkip",
        "Lvl": 51,
        "CP": 1290,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 259,
        "Mon": "Marshtomp",
        "Lvl": 51,
        "CP": 2032,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 260,
        "Mon": "Swampert",
        "Lvl": 33.5,
        "CP": 2499,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 13
    },
    {
        "Dex": 261,
        "Mon": "Poochyena",
        "Lvl": 51,
        "CP": 776,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 262,
        "Mon": "Mightyena",
        "Lvl": 51,
        "CP": 2203,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 263,
        "Mon": "Zigzagoon",
        "Lvl": 51,
        "CP": 581,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 263,
        "Mon": "Zigzagoon_Galarian",
        "Lvl": 51,
        "CP": 581,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 264,
        "Mon": "Linoone",
        "Lvl": 51,
        "CP": 1901,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 264,
        "Mon": "Linoone_Galarian",
        "Lvl": 51,
        "CP": 1901,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 265,
        "Mon": "Wurmple",
        "Lvl": 51,
        "CP": 661,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 266,
        "Mon": "Silcoon",
        "Lvl": 51,
        "CP": 633,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 267,
        "Mon": "Beautifly",
        "Lvl": 51,
        "CP": 2020,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 268,
        "Mon": "Cascoon",
        "Lvl": 51,
        "CP": 633,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 269,
        "Mon": "Dustox",
        "Lvl": 51,
        "CP": 1400,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 270,
        "Mon": "Lotad",
        "Lvl": 51,
        "CP": 684,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 271,
        "Mon": "Lombre",
        "Lvl": 51,
        "CP": 1369,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 272,
        "Mon": "Ludicolo",
        "Lvl": 51,
        "CP": 2496,
        "AtkIV": 4,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 273,
        "Mon": "Seedot",
        "Lvl": 51,
        "CP": 684,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 274,
        "Mon": "Nuzleaf",
        "Lvl": 51,
        "CP": 1404,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 275,
        "Mon": "Shiftry",
        "Lvl": 51,
        "CP": 2495,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 276,
        "Mon": "Taillow",
        "Lvl": 51,
        "CP": 875,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 277,
        "Mon": "Swellow",
        "Lvl": 51,
        "CP": 2196,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 278,
        "Mon": "Wingull",
        "Lvl": 51,
        "CP": 875,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 279,
        "Mon": "Pelipper",
        "Lvl": 51,
        "CP": 2433,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 280,
        "Mon": "Ralts",
        "Lvl": 51,
        "CP": 616,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 281,
        "Mon": "Kirlia",
        "Lvl": 51,
        "CP": 1106,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 282,
        "Mon": "Gardevoir",
        "Lvl": 30.5,
        "CP": 2496,
        "AtkIV": 0,
        "DefIV": 12,
        "StaIV": 15
    },
    {
        "Dex": 283,
        "Mon": "Surskit",
        "Lvl": 51,
        "CP": 905,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 284,
        "Mon": "Masquerain",
        "Lvl": 51,
        "CP": 2497,
        "AtkIV": 7,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 285,
        "Mon": "Shroomish",
        "Lvl": 51,
        "CP": 927,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 286,
        "Mon": "Breloom",
        "Lvl": 41,
        "CP": 2498,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 287,
        "Mon": "Slakoth",
        "Lvl": 51,
        "CP": 1146,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 288,
        "Mon": "Vigoroth",
        "Lvl": 51,
        "CP": 2251,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 289,
        "Mon": "Slaking",
        "Lvl": 21,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 11,
        "StaIV": 15
    },
    {
        "Dex": 290,
        "Mon": "Nincada",
        "Lvl": 51,
        "CP": 879,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 291,
        "Mon": "Ninjask",
        "Lvl": 51,
        "CP": 2253,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 292,
        "Mon": "Shedinja",
        "Lvl": 51,
        "CP": 450,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 293,
        "Mon": "Whismur",
        "Lvl": 51,
        "CP": 767,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 294,
        "Mon": "Loudred",
        "Lvl": 51,
        "CP": 1518,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 295,
        "Mon": "Exploud",
        "Lvl": 51,
        "CP": 2500,
        "AtkIV": 2,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 296,
        "Mon": "Makuhita",
        "Lvl": 51,
        "CP": 935,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 297,
        "Mon": "Hariyama",
        "Lvl": 36,
        "CP": 2500,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 298,
        "Mon": "Azurill",
        "Lvl": 51,
        "CP": 416,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 299,
        "Mon": "Nosepass",
        "Lvl": 51,
        "CP": 1136,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 300,
        "Mon": "Skitty",
        "Lvl": 51,
        "CP": 845,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 301,
        "Mon": "Delcatty",
        "Lvl": 51,
        "CP": 1711,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 302,
        "Mon": "Sableye",
        "Lvl": 51,
        "CP": 1688,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 303,
        "Mon": "Mawile",
        "Lvl": 51,
        "CP": 1870,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 304,
        "Mon": "Aron",
        "Lvl": 51,
        "CP": 1496,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 305,
        "Mon": "Lairon",
        "Lvl": 51,
        "CP": 2352,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 306,
        "Mon": "Aggron",
        "Lvl": 33,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 307,
        "Mon": "Meditite",
        "Lvl": 51,
        "CP": 793,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 308,
        "Mon": "Medicham",
        "Lvl": 51,
        "CP": 1637,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 309,
        "Mon": "Electrike",
        "Lvl": 51,
        "CP": 1104,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 310,
        "Mon": "Manectric",
        "Lvl": 51,
        "CP": 2496,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 311,
        "Mon": "Plusle",
        "Lvl": 51,
        "CP": 2034,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 312,
        "Mon": "Minun",
        "Lvl": 51,
        "CP": 1938,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 313,
        "Mon": "Volbeat",
        "Lvl": 51,
        "CP": 2026,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 314,
        "Mon": "Illumise",
        "Lvl": 51,
        "CP": 2026,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 315,
        "Mon": "Roselia",
        "Lvl": 51,
        "CP": 2139,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 316,
        "Mon": "Gulpin",
        "Lvl": 51,
        "CP": 991,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 317,
        "Mon": "Swalot",
        "Lvl": 51,
        "CP": 2263,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 318,
        "Mon": "Carvanha",
        "Lvl": 51,
        "CP": 1167,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 319,
        "Mon": "Sharpedo",
        "Lvl": 51,
        "CP": 2495,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 320,
        "Mon": "Wailmer",
        "Lvl": 51,
        "CP": 1679,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 321,
        "Mon": "Wailord",
        "Lvl": 51,
        "CP": 2498,
        "AtkIV": 7,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 322,
        "Mon": "Numel",
        "Lvl": 51,
        "CP": 1210,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 323,
        "Mon": "Camerupt",
        "Lvl": 51,
        "CP": 2497,
        "AtkIV": 14,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 324,
        "Mon": "Torkoal",
        "Lvl": 51,
        "CP": 2394,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 325,
        "Mon": "Spoink",
        "Lvl": 51,
        "CP": 1526,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 326,
        "Mon": "Grumpig",
        "Lvl": 51,
        "CP": 2500,
        "AtkIV": 1,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 327,
        "Mon": "Spinda",
        "Lvl": 51,
        "CP": 1396,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 328,
        "Mon": "Trapinch",
        "Lvl": 51,
        "CP": 1458,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 329,
        "Mon": "Vibrava",
        "Lvl": 51,
        "CP": 1401,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 330,
        "Mon": "Flygon",
        "Lvl": 41,
        "CP": 2497,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 331,
        "Mon": "Cacnea",
        "Lvl": 51,
        "CP": 1421,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 332,
        "Mon": "Cacturne",
        "Lvl": 51,
        "CP": 2495,
        "AtkIV": 3,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 333,
        "Mon": "Swablu",
        "Lvl": 51,
        "CP": 942,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 334,
        "Mon": "Altaria",
        "Lvl": 51,
        "CP": 2293,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 335,
        "Mon": "Zangoose",
        "Lvl": 48,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 336,
        "Mon": "Seviper",
        "Lvl": 51,
        "CP": 2409,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 337,
        "Mon": "Lunatone",
        "Lvl": 51,
        "CP": 2497,
        "AtkIV": 3,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 338,
        "Mon": "Solrock",
        "Lvl": 51,
        "CP": 2497,
        "AtkIV": 3,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 339,
        "Mon": "Barboach",
        "Lvl": 51,
        "CP": 937,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 340,
        "Mon": "Whiscash",
        "Lvl": 51,
        "CP": 2374,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 341,
        "Mon": "Corphish",
        "Lvl": 51,
        "CP": 1408,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 342,
        "Mon": "Crawdaunt",
        "Lvl": 46,
        "CP": 2498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 343,
        "Mon": "Baltoy",
        "Lvl": 51,
        "CP": 900,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 344,
        "Mon": "Claydol",
        "Lvl": 51,
        "CP": 2255,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 345,
        "Mon": "Lileep",
        "Lvl": 51,
        "CP": 1477,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 346,
        "Mon": "Cradily",
        "Lvl": 50.5,
        "CP": 2499,
        "AtkIV": 14,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 347,
        "Mon": "Anorith",
        "Lvl": 51,
        "CP": 1750,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 348,
        "Mon": "Armaldo",
        "Lvl": 35,
        "CP": 2500,
        "AtkIV": 2,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 349,
        "Mon": "Feebas",
        "Lvl": 51,
        "CP": 314,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 350,
        "Mon": "Milotic",
        "Lvl": 33,
        "CP": 2498,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 351,
        "Mon": "Castform",
        "Lvl": 51,
        "CP": 1867,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 352,
        "Mon": "Kecleon",
        "Lvl": 51,
        "CP": 2341,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 353,
        "Mon": "Shuppet",
        "Lvl": 51,
        "CP": 1165,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 354,
        "Mon": "Banette",
        "Lvl": 51,
        "CP": 2494,
        "AtkIV": 3,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 355,
        "Mon": "Duskull",
        "Lvl": 51,
        "CP": 808,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 356,
        "Mon": "Dusclops",
        "Lvl": 51,
        "CP": 1820,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 357,
        "Mon": "Tropius",
        "Lvl": 51,
        "CP": 2220,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 358,
        "Mon": "Chimecho",
        "Lvl": 51,
        "CP": 2496,
        "AtkIV": 9,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 359,
        "Mon": "Absol",
        "Lvl": 44,
        "CP": 2496,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 360,
        "Mon": "Wynaut",
        "Lvl": 51,
        "CP": 611,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 361,
        "Mon": "Snorunt",
        "Lvl": 51,
        "CP": 1016,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 362,
        "Mon": "Glalie",
        "Lvl": 51,
        "CP": 2409,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 363,
        "Mon": "Spheal",
        "Lvl": 51,
        "CP": 1101,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 364,
        "Mon": "Sealeo",
        "Lvl": 51,
        "CP": 1962,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 365,
        "Mon": "Walrein",
        "Lvl": 39.5,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 366,
        "Mon": "Clamperl",
        "Lvl": 51,
        "CP": 1453,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 367,
        "Mon": "Huntail",
        "Lvl": 51,
        "CP": 2500,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 368,
        "Mon": "Gorebyss",
        "Lvl": 46.5,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 12
    },
    {
        "Dex": 369,
        "Mon": "Relicanth",
        "Lvl": 47,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 11,
        "StaIV": 15
    },
    {
        "Dex": 370,
        "Mon": "Luvdisc",
        "Lvl": 51,
        "CP": 970,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 371,
        "Mon": "Bagon",
        "Lvl": 51,
        "CP": 1323,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 372,
        "Mon": "Shelgon",
        "Lvl": 51,
        "CP": 2324,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 373,
        "Mon": "Salamence",
        "Lvl": 24.5,
        "CP": 2499,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 374,
        "Mon": "Beldum",
        "Lvl": 51,
        "CP": 1117,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 375,
        "Mon": "Metang",
        "Lvl": 51,
        "CP": 1969,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 376,
        "Mon": "Metagross",
        "Lvl": 24.5,
        "CP": 2495,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 13
    },
    {
        "Dex": 377,
        "Mon": "Regirock",
        "Lvl": 30.5,
        "CP": 2500,
        "AtkIV": 1,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 378,
        "Mon": "Regice",
        "Lvl": 30.5,
        "CP": 2500,
        "AtkIV": 1,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 379,
        "Mon": "Registeel",
        "Lvl": 50,
        "CP": 2500,
        "AtkIV": 1,
        "DefIV": 10,
        "StaIV": 15
    },
    {
        "Dex": 380,
        "Mon": "Latias",
        "Lvl": 26.5,
        "CP": 2498,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 381,
        "Mon": "Latios",
        "Lvl": 24,
        "CP": 2494,
        "AtkIV": 2,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 382,
        "Mon": "Kyogre",
        "Lvl": 22.5,
        "CP": 2499,
        "AtkIV": 1,
        "DefIV": 14,
        "StaIV": 13
    },
    {
        "Dex": 383,
        "Mon": "Groudon",
        "Lvl": 22.5,
        "CP": 2499,
        "AtkIV": 1,
        "DefIV": 14,
        "StaIV": 13
    },
    {
        "Dex": 384,
        "Mon": "Rayquaza",
        "Lvl": 24,
        "CP": 2500,
        "AtkIV": 1,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 385,
        "Mon": "Jirachi",
        "Lvl": 27.5,
        "CP": 2497,
        "AtkIV": 10,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 386,
        "Mon": "Deoxys",
        "Lvl": 28,
        "CP": 2500,
        "AtkIV": 11,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 386,
        "Mon": "Deoxys_Attack",
        "Lvl": 38.5,
        "CP": 2498,
        "AtkIV": 12,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 386,
        "Mon": "Deoxys_Defense",
        "Lvl": 50.5,
        "CP": 2497,
        "AtkIV": 10,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 386,
        "Mon": "Deoxys_Speed",
        "Lvl": 32,
        "CP": 2498,
        "AtkIV": 10,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 387,
        "Mon": "Turtwig",
        "Lvl": 51,
        "CP": 1358,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 388,
        "Mon": "Grotle",
        "Lvl": 51,
        "CP": 2162,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 389,
        "Mon": "Torterra",
        "Lvl": 34,
        "CP": 2497,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 390,
        "Mon": "Chimchar",
        "Lvl": 51,
        "CP": 1095,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 391,
        "Mon": "Monferno",
        "Lvl": 51,
        "CP": 1801,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 392,
        "Mon": "Infernape",
        "Lvl": 39.5,
        "CP": 2500,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 393,
        "Mon": "Piplup",
        "Lvl": 51,
        "CP": 1229,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 394,
        "Mon": "Prinplup",
        "Lvl": 51,
        "CP": 1946,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 395,
        "Mon": "Empoleon",
        "Lvl": 34.5,
        "CP": 2500,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 396,
        "Mon": "Starly",
        "Lvl": 51,
        "CP": 822,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 397,
        "Mon": "Staravia",
        "Lvl": 51,
        "CP": 1486,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 398,
        "Mon": "Staraptor",
        "Lvl": 35.5,
        "CP": 2500,
        "AtkIV": 2,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 399,
        "Mon": "Bidoof",
        "Lvl": 51,
        "CP": 825,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 400,
        "Mon": "Bibarel",
        "Lvl": 51,
        "CP": 2085,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 401,
        "Mon": "Kricketot",
        "Lvl": 51,
        "CP": 459,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 402,
        "Mon": "Kricketune",
        "Lvl": 51,
        "CP": 1891,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 403,
        "Mon": "Shinx",
        "Lvl": 51,
        "CP": 1002,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 404,
        "Mon": "Luxio",
        "Lvl": 51,
        "CP": 1700,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 405,
        "Mon": "Luxray",
        "Lvl": 34.5,
        "CP": 2499,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 406,
        "Mon": "Budew",
        "Lvl": 51,
        "CP": 979,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 407,
        "Mon": "Roserade",
        "Lvl": 33,
        "CP": 2499,
        "AtkIV": 0,
        "DefIV": 12,
        "StaIV": 15
    },
    {
        "Dex": 408,
        "Mon": "Cranidos",
        "Lvl": 51,
        "CP": 2082,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 409,
        "Mon": "Rampardos",
        "Lvl": 28,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 410,
        "Mon": "Shieldon",
        "Lvl": 51,
        "CP": 1019,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 411,
        "Mon": "Bastiodon",
        "Lvl": 51,
        "CP": 1761,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 412,
        "Mon": "Burmy",
        "Lvl": 51,
        "CP": 558,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 413,
        "Mon": "Wormadam_Plant",
        "Lvl": 51,
        "CP": 2029,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 413,
        "Mon": "Wormadam_Sandy",
        "Lvl": 51,
        "CP": 2029,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 413,
        "Mon": "Wormadam_Trash",
        "Lvl": 51,
        "CP": 1823,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 414,
        "Mon": "Mothim",
        "Lvl": 51,
        "CP": 2077,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 415,
        "Mon": "Combee",
        "Lvl": 51,
        "CP": 566,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 416,
        "Mon": "Vespiquen",
        "Lvl": 51,
        "CP": 2294,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 417,
        "Mon": "Pachirisu",
        "Lvl": 51,
        "CP": 1388,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 418,
        "Mon": "Buizel",
        "Lvl": 51,
        "CP": 1206,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 419,
        "Mon": "Floatzel",
        "Lvl": 47.5,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 420,
        "Mon": "Cherubi",
        "Lvl": 51,
        "CP": 1087,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 421,
        "Mon": "Cherrim",
        "Lvl": 51,
        "CP": 2342,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 422,
        "Mon": "Shellos",
        "Lvl": 51,
        "CP": 1299,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 423,
        "Mon": "Gastrodon",
        "Lvl": 51,
        "CP": 2500,
        "AtkIV": 4,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 424,
        "Mon": "Ambipom",
        "Lvl": 48.5,
        "CP": 2495,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 425,
        "Mon": "Drifloon",
        "Lvl": 51,
        "CP": 1369,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 426,
        "Mon": "Drifblim",
        "Lvl": 50.5,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 427,
        "Mon": "Buneary",
        "Lvl": 51,
        "CP": 1440,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 428,
        "Mon": "Lopunny",
        "Lvl": 51,
        "CP": 2356,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 429,
        "Mon": "Mismagius",
        "Lvl": 42,
        "CP": 2498,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 430,
        "Mon": "Honchkrow",
        "Lvl": 38.5,
        "CP": 2499,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 431,
        "Mon": "Glameow",
        "Lvl": 51,
        "CP": 1068,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 432,
        "Mon": "Purugly",
        "Lvl": 51,
        "CP": 2234,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 433,
        "Mon": "Chingling",
        "Lvl": 51,
        "CP": 1150,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 434,
        "Mon": "Stunky",
        "Lvl": 51,
        "CP": 1317,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 435,
        "Mon": "Skuntank",
        "Lvl": 51,
        "CP": 2495,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 436,
        "Mon": "Bronzor",
        "Lvl": 51,
        "CP": 689,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 437,
        "Mon": "Bronzong",
        "Lvl": 51,
        "CP": 2498,
        "AtkIV": 11,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 438,
        "Mon": "Bonsly",
        "Lvl": 51,
        "CP": 1489,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 439,
        "Mon": "Mime_Jr",
        "Lvl": 51,
        "CP": 1253,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 440,
        "Mon": "Happiny",
        "Lvl": 51,
        "CP": 424,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 441,
        "Mon": "Chatot",
        "Lvl": 51,
        "CP": 2049,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 442,
        "Mon": "Spiritomb",
        "Lvl": 51,
        "CP": 2371,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 443,
        "Mon": "Gible",
        "Lvl": 51,
        "CP": 1273,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 444,
        "Mon": "Gabite",
        "Lvl": 51,
        "CP": 2144,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 445,
        "Mon": "Garchomp",
        "Lvl": 23.5,
        "CP": 2499,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 13
    },
    {
        "Dex": 446,
        "Mon": "Munchlax",
        "Lvl": 51,
        "CP": 2164,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 447,
        "Mon": "Riolu",
        "Lvl": 51,
        "CP": 1136,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 448,
        "Mon": "Lucario",
        "Lvl": 38.5,
        "CP": 2497,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 449,
        "Mon": "Hippopotas",
        "Lvl": 51,
        "CP": 1553,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 450,
        "Mon": "Hippowdon",
        "Lvl": 31,
        "CP": 2496,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 451,
        "Mon": "Skorupi",
        "Lvl": 51,
        "CP": 1155,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 452,
        "Mon": "Drapion",
        "Lvl": 48,
        "CP": 2499,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 453,
        "Mon": "Croagunk",
        "Lvl": 51,
        "CP": 1089,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 454,
        "Mon": "Toxicroak",
        "Lvl": 46.5,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 12
    },
    {
        "Dex": 455,
        "Mon": "Carnivine",
        "Lvl": 51,
        "CP": 2470,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 456,
        "Mon": "Finneon",
        "Lvl": 51,
        "CP": 1111,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 457,
        "Mon": "Lumineon",
        "Lvl": 51,
        "CP": 2075,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 458,
        "Mon": "Mantyke",
        "Lvl": 51,
        "CP": 1428,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 459,
        "Mon": "Snover",
        "Lvl": 51,
        "CP": 1326,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 460,
        "Mon": "Abomasnow",
        "Lvl": 51,
        "CP": 2500,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 461,
        "Mon": "Weavile",
        "Lvl": 32,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 462,
        "Mon": "Magnezone",
        "Lvl": 29,
        "CP": 2498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 463,
        "Mon": "Lickilicky",
        "Lvl": 48.5,
        "CP": 2499,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 464,
        "Mon": "Rhyperior",
        "Lvl": 25,
        "CP": 2499,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 14
    },
    {
        "Dex": 465,
        "Mon": "Tangrowth",
        "Lvl": 32,
        "CP": 2496,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 466,
        "Mon": "Electivire",
        "Lvl": 30,
        "CP": 2500,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 467,
        "Mon": "Magmortar",
        "Lvl": 29.5,
        "CP": 2499,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 468,
        "Mon": "Togekiss",
        "Lvl": 28,
        "CP": 2499,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 469,
        "Mon": "Yanmega",
        "Lvl": 33,
        "CP": 2500,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 470,
        "Mon": "Leafeon",
        "Lvl": 34,
        "CP": 2497,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 13
    },
    {
        "Dex": 471,
        "Mon": "Glaceon",
        "Lvl": 30,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 12
    },
    {
        "Dex": 472,
        "Mon": "Gliscor",
        "Lvl": 40.5,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 473,
        "Mon": "Mamoswine",
        "Lvl": 28,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 13
    },
    {
        "Dex": 474,
        "Mon": "Porygon_Z",
        "Lvl": 28.5,
        "CP": 2496,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 14
    },
    {
        "Dex": 475,
        "Mon": "Gallade",
        "Lvl": 30.5,
        "CP": 2496,
        "AtkIV": 0,
        "DefIV": 12,
        "StaIV": 15
    },
    {
        "Dex": 476,
        "Mon": "Probopass",
        "Lvl": 51,
        "CP": 2379,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 477,
        "Mon": "Dusknoir",
        "Lvl": 51,
        "CP": 2499,
        "AtkIV": 0,
        "DefIV": 12,
        "StaIV": 14
    },
    {
        "Dex": 478,
        "Mon": "Froslass",
        "Lvl": 51,
        "CP": 2334,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 479,
        "Mon": "Rotom",
        "Lvl": 51,
        "CP": 2324,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 479,
        "Mon": "Rotom_Fan",
        "Lvl": 43,
        "CP": 2495,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 479,
        "Mon": "Rotom_Frost",
        "Lvl": 43,
        "CP": 2495,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 479,
        "Mon": "Rotom_Heat",
        "Lvl": 43,
        "CP": 2495,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 479,
        "Mon": "Rotom_Mow",
        "Lvl": 43,
        "CP": 2495,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 479,
        "Mon": "Rotom_Wash",
        "Lvl": 43,
        "CP": 2495,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 480,
        "Mon": "Uxie",
        "Lvl": 46.5,
        "CP": 2496,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 481,
        "Mon": "Mesprit",
        "Lvl": 31,
        "CP": 2500,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 482,
        "Mon": "Azelf",
        "Lvl": 29,
        "CP": 2497,
        "AtkIV": 0,
        "DefIV": 12,
        "StaIV": 15
    },
    {
        "Dex": 483,
        "Mon": "Dialga",
        "Lvl": 23,
        "CP": 2497,
        "AtkIV": 1,
        "DefIV": 13,
        "StaIV": 12
    },
    {
        "Dex": 484,
        "Mon": "Palkia",
        "Lvl": 23,
        "CP": 2500,
        "AtkIV": 2,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 485,
        "Mon": "Heatran",
        "Lvl": 24.5,
        "CP": 2499,
        "AtkIV": 2,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 486,
        "Mon": "Regigigas",
        "Lvl": 21,
        "CP": 2495,
        "AtkIV": 2,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 487,
        "Mon": "Giratina_Altered",
        "Lvl": 28,
        "CP": 2500,
        "AtkIV": 1,
        "DefIV": 12,
        "StaIV": 15
    },
    {
        "Dex": 487,
        "Mon": "Giratina_Origin",
        "Lvl": 25.5,
        "CP": 2500,
        "AtkIV": 1,
        "DefIV": 12,
        "StaIV": 13
    },
    {
        "Dex": 488,
        "Mon": "Cresselia",
        "Lvl": 37,
        "CP": 2497,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 13
    },
    {
        "Dex": 489,
        "Mon": "Phione",
        "Lvl": 51,
        "CP": 2409,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 490,
        "Mon": "Manaphy",
        "Lvl": 27.5,
        "CP": 2497,
        "AtkIV": 10,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 491,
        "Mon": "Darkrai",
        "Lvl": 24,
        "CP": 2496,
        "AtkIV": 10,
        "DefIV": 13,
        "StaIV": 13
    },
    {
        "Dex": 492,
        "Mon": "Shaymin_Land",
        "Lvl": 27.5,
        "CP": 2497,
        "AtkIV": 10,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 492,
        "Mon": "Shaymin_Sky",
        "Lvl": 25,
        "CP": 2498,
        "AtkIV": 10,
        "DefIV": 12,
        "StaIV": 15
    },
    {
        "Dex": 493,
        "Mon": "Arceus",
        "Lvl": 22.5,
        "CP": 2499,
        "AtkIV": 10,
        "DefIV": 13,
        "StaIV": 14
    },
    {
        "Dex": 494,
        "Mon": "Victini",
        "Lvl": 27.5,
        "CP": 2497,
        "AtkIV": 10,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 495,
        "Mon": "Snivy",
        "Lvl": 51,
        "CP": 972,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 496,
        "Mon": "Servine",
        "Lvl": 51,
        "CP": 1649,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 497,
        "Mon": "Serperior",
        "Lvl": 51,
        "CP": 2496,
        "AtkIV": 8,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 498,
        "Mon": "Tepig",
        "Lvl": 51,
        "CP": 1239,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 499,
        "Mon": "Pignite",
        "Lvl": 51,
        "CP": 2201,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 500,
        "Mon": "Emboar",
        "Lvl": 32.5,
        "CP": 2498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 501,
        "Mon": "Oshawott",
        "Lvl": 51,
        "CP": 1196,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 502,
        "Mon": "Dewott",
        "Lvl": 51,
        "CP": 1992,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 503,
        "Mon": "Samurott",
        "Lvl": 36,
        "CP": 2500,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 504,
        "Mon": "Patrat",
        "Lvl": 51,
        "CP": 905,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 505,
        "Mon": "Watchog",
        "Lvl": 51,
        "CP": 2081,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 506,
        "Mon": "Lillipup",
        "Lvl": 51,
        "CP": 1047,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 507,
        "Mon": "Herdier",
        "Lvl": 51,
        "CP": 1811,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 508,
        "Mon": "Stoutland",
        "Lvl": 36.5,
        "CP": 2497,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 509,
        "Mon": "Purrloin",
        "Lvl": 51,
        "CP": 883,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 510,
        "Mon": "Liepard",
        "Lvl": 51,
        "CP": 2112,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 511,
        "Mon": "Pansage",
        "Lvl": 51,
        "CP": 1094,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 512,
        "Mon": "Simisage",
        "Lvl": 50.5,
        "CP": 2492,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 513,
        "Mon": "Pansear",
        "Lvl": 51,
        "CP": 1094,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 514,
        "Mon": "Simisear",
        "Lvl": 50.5,
        "CP": 2492,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 515,
        "Mon": "Panpour",
        "Lvl": 51,
        "CP": 1094,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 516,
        "Mon": "Simipour",
        "Lvl": 50.5,
        "CP": 2492,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 517,
        "Mon": "Munna",
        "Lvl": 51,
        "CP": 1310,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 518,
        "Mon": "Musharna",
        "Lvl": 39.5,
        "CP": 2499,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 519,
        "Mon": "Pidove",
        "Lvl": 51,
        "CP": 970,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 520,
        "Mon": "Tranquill",
        "Lvl": 51,
        "CP": 1650,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 521,
        "Mon": "Unfezant",
        "Lvl": 38,
        "CP": 2500,
        "AtkIV": 2,
        "DefIV": 15,
        "StaIV": 13
    },
    {
        "Dex": 522,
        "Mon": "Blitzle",
        "Lvl": 51,
        "CP": 1010,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 523,
        "Mon": "Zebstrika",
        "Lvl": 48.5,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 524,
        "Mon": "Roggenrola",
        "Lvl": 51,
        "CP": 1378,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 525,
        "Mon": "Boldore",
        "Lvl": 51,
        "CP": 2321,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 526,
        "Mon": "Gigalith",
        "Lvl": 29,
        "CP": 2497,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 527,
        "Mon": "Woobat",
        "Lvl": 51,
        "CP": 1163,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 528,
        "Mon": "Swoobat",
        "Lvl": 51,
        "CP": 1963,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 529,
        "Mon": "Drilbur",
        "Lvl": 51,
        "CP": 1574,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 530,
        "Mon": "Excadrill",
        "Lvl": 28.5,
        "CP": 2495,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 531,
        "Mon": "Audino",
        "Lvl": 51,
        "CP": 1924,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 532,
        "Mon": "Timburr",
        "Lvl": 51,
        "CP": 1505,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 533,
        "Mon": "Gurdurr",
        "Lvl": 51,
        "CP": 2482,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 534,
        "Mon": "Conkeldurr",
        "Lvl": 28,
        "CP": 2499,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 12
    },
    {
        "Dex": 535,
        "Mon": "Tympole",
        "Lvl": 51,
        "CP": 959,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 536,
        "Mon": "Palpitoad",
        "Lvl": 51,
        "CP": 1592,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 537,
        "Mon": "Seismitoad",
        "Lvl": 44.5,
        "CP": 2497,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 12
    },
    {
        "Dex": 538,
        "Mon": "Throh",
        "Lvl": 45,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 539,
        "Mon": "Sawk",
        "Lvl": 37.5,
        "CP": 2498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 11
    },
    {
        "Dex": 540,
        "Mon": "Sewaddle",
        "Lvl": 51,
        "CP": 1118,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 541,
        "Mon": "Swadloon",
        "Lvl": 51,
        "CP": 1568,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 542,
        "Mon": "Leavanny",
        "Lvl": 44,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 12,
        "StaIV": 14
    },
    {
        "Dex": 543,
        "Mon": "Venipede",
        "Lvl": 51,
        "CP": 808,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 544,
        "Mon": "Whirlipede",
        "Lvl": 51,
        "CP": 1309,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 545,
        "Mon": "Scolipede",
        "Lvl": 47.5,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 546,
        "Mon": "Cottonee",
        "Lvl": 51,
        "CP": 801,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 547,
        "Mon": "Whimsicott",
        "Lvl": 51,
        "CP": 2304,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 548,
        "Mon": "Petilil",
        "Lvl": 51,
        "CP": 1178,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 549,
        "Mon": "Lilligant",
        "Lvl": 44.5,
        "CP": 2499,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 14
    },
    {
        "Dex": 550,
        "Mon": "Basculin",
        "Lvl": 51,
        "CP": 2391,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 551,
        "Mon": "Sandile",
        "Lvl": 51,
        "CP": 1186,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 552,
        "Mon": "Krokorok",
        "Lvl": 51,
        "CP": 1622,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 553,
        "Mon": "Krookodile",
        "Lvl": 31.5,
        "CP": 2497,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 554,
        "Mon": "Darumaka",
        "Lvl": 51,
        "CP": 1649,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 554,
        "Mon": "Darumaka_Galarian",
        "Lvl": 51,
        "CP": 1649,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 555,
        "Mon": "Darmanitan_Galarian_Standard",
        "Lvl": 30,
        "CP": 2498,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 555,
        "Mon": "Darmanitan_Galarian_Zen",
        "Lvl": 23.5,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 555,
        "Mon": "Darmanitan_Standard",
        "Lvl": 30,
        "CP": 2498,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 555,
        "Mon": "Darmanitan_Zen",
        "Lvl": 25,
        "CP": 2499,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 13
    },
    {
        "Dex": 556,
        "Mon": "Maractus",
        "Lvl": 51,
        "CP": 2493,
        "AtkIV": 6,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 557,
        "Mon": "Dwebble",
        "Lvl": 51,
        "CP": 1401,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 558,
        "Mon": "Crustle",
        "Lvl": 45,
        "CP": 2499,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 559,
        "Mon": "Scraggy",
        "Lvl": 51,
        "CP": 1570,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 560,
        "Mon": "Scrafty",
        "Lvl": 51,
        "CP": 2494,
        "AtkIV": 7,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 561,
        "Mon": "Sigilyph",
        "Lvl": 44.5,
        "CP": 2498,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 562,
        "Mon": "Yamask",
        "Lvl": 51,
        "CP": 1123,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 562,
        "Mon": "Yamask_Galarian",
        "Lvl": 51,
        "CP": 1123,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 563,
        "Mon": "Cofagrigus",
        "Lvl": 51,
        "CP": 2499,
        "AtkIV": 8,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 564,
        "Mon": "Tirtouga",
        "Lvl": 51,
        "CP": 1703,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 565,
        "Mon": "Carracosta",
        "Lvl": 42,
        "CP": 2500,
        "AtkIV": 1,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 566,
        "Mon": "Archen",
        "Lvl": 51,
        "CP": 2108,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 567,
        "Mon": "Archeops",
        "Lvl": 27.5,
        "CP": 2498,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 568,
        "Mon": "Trubbish",
        "Lvl": 51,
        "CP": 1144,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 569,
        "Mon": "Garbodor",
        "Lvl": 51,
        "CP": 2491,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 570,
        "Mon": "Zorua",
        "Lvl": 51,
        "CP": 1345,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 571,
        "Mon": "Zoroark",
        "Lvl": 42,
        "CP": 2497,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 572,
        "Mon": "Minccino",
        "Lvl": 51,
        "CP": 998,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 573,
        "Mon": "Cinccino",
        "Lvl": 51,
        "CP": 2493,
        "AtkIV": 9,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 574,
        "Mon": "Gothita",
        "Lvl": 51,
        "CP": 1088,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 575,
        "Mon": "Gothorita",
        "Lvl": 51,
        "CP": 1835,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 576,
        "Mon": "Gothitelle",
        "Lvl": 49.5,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 577,
        "Mon": "Solosis",
        "Lvl": 51,
        "CP": 1564,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 578,
        "Mon": "Duosion",
        "Lvl": 51,
        "CP": 2309,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 579,
        "Mon": "Reuniclus",
        "Lvl": 34.5,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 14
    },
    {
        "Dex": 580,
        "Mon": "Ducklett",
        "Lvl": 51,
        "CP": 980,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 581,
        "Mon": "Swanna",
        "Lvl": 51,
        "CP": 2389,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 582,
        "Mon": "Vanillite",
        "Lvl": 51,
        "CP": 1182,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 583,
        "Mon": "Vanillish",
        "Lvl": 51,
        "CP": 1820,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 584,
        "Mon": "Vanilluxe",
        "Lvl": 37,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 11
    },
    {
        "Dex": 585,
        "Mon": "Deerling",
        "Lvl": 51,
        "CP": 1298,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 586,
        "Mon": "Sawsbuck",
        "Lvl": 49.5,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 11
    },
    {
        "Dex": 587,
        "Mon": "Emolga",
        "Lvl": 51,
        "CP": 1869,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 588,
        "Mon": "Karrablast",
        "Lvl": 51,
        "CP": 1352,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 589,
        "Mon": "Escavalier",
        "Lvl": 34.5,
        "CP": 2498,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 590,
        "Mon": "Foongus",
        "Lvl": 51,
        "CP": 1120,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 591,
        "Mon": "Amoonguss",
        "Lvl": 51,
        "CP": 2449,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 592,
        "Mon": "Frillish",
        "Lvl": 51,
        "CP": 1438,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 593,
        "Mon": "Jellicent",
        "Lvl": 51,
        "CP": 2496,
        "AtkIV": 4,
        "DefIV": 15,
        "StaIV": 13
    },
    {
        "Dex": 594,
        "Mon": "Alomomola",
        "Lvl": 51,
        "CP": 2481,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 595,
        "Mon": "Joltik",
        "Lvl": 51,
        "CP": 1170,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 596,
        "Mon": "Galvantula",
        "Lvl": 51,
        "CP": 2500,
        "AtkIV": 13,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 597,
        "Mon": "Ferroseed",
        "Lvl": 51,
        "CP": 1076,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 598,
        "Mon": "Ferrothorn",
        "Lvl": 51,
        "CP": 2496,
        "AtkIV": 5,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 599,
        "Mon": "Klink",
        "Lvl": 51,
        "CP": 1094,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 600,
        "Mon": "Klang",
        "Lvl": 51,
        "CP": 2113,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 601,
        "Mon": "Klinklang",
        "Lvl": 42,
        "CP": 2498,
        "AtkIV": 0,
        "DefIV": 12,
        "StaIV": 15
    },
    {
        "Dex": 602,
        "Mon": "Tynamo",
        "Lvl": 51,
        "CP": 928,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 603,
        "Mon": "Eelektrik",
        "Lvl": 51,
        "CP": 1962,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 604,
        "Mon": "Eelektross",
        "Lvl": 38,
        "CP": 2500,
        "AtkIV": 2,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 605,
        "Mon": "Elgyem",
        "Lvl": 51,
        "CP": 1584,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 606,
        "Mon": "Beheeyem",
        "Lvl": 37.5,
        "CP": 2497,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 607,
        "Mon": "Litwick",
        "Lvl": 51,
        "CP": 1151,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 608,
        "Mon": "Lampent",
        "Lvl": 51,
        "CP": 1954,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 609,
        "Mon": "Chandelure",
        "Lvl": 28.5,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 12
    },
    {
        "Dex": 610,
        "Mon": "Axew",
        "Lvl": 51,
        "CP": 1566,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 611,
        "Mon": "Fraxure",
        "Lvl": 51,
        "CP": 2500,
        "AtkIV": 10,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 612,
        "Mon": "Haxorus",
        "Lvl": 25.5,
        "CP": 2495,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 613,
        "Mon": "Cubchoo",
        "Lvl": 51,
        "CP": 1223,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 614,
        "Mon": "Beartic",
        "Lvl": 31.5,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 13
    },
    {
        "Dex": 615,
        "Mon": "Cryogonal",
        "Lvl": 37.5,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 616,
        "Mon": "Shelmet",
        "Lvl": 51,
        "CP": 954,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 617,
        "Mon": "Accelgor",
        "Lvl": 47.5,
        "CP": 2495,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 13
    },
    {
        "Dex": 618,
        "Mon": "Stunfisk",
        "Lvl": 51,
        "CP": 2474,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 618,
        "Mon": "Stunfisk_Galarian",
        "Lvl": 51,
        "CP": 2474,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 619,
        "Mon": "Mienfoo",
        "Lvl": 51,
        "CP": 1589,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 620,
        "Mon": "Mienshao",
        "Lvl": 38.5,
        "CP": 2498,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 621,
        "Mon": "Druddigon",
        "Lvl": 38.5,
        "CP": 2497,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 622,
        "Mon": "Golett",
        "Lvl": 51,
        "CP": 1360,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 623,
        "Mon": "Golurk",
        "Lvl": 36,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 14
    },
    {
        "Dex": 624,
        "Mon": "Pawniard",
        "Lvl": 51,
        "CP": 1640,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 625,
        "Mon": "Bisharp",
        "Lvl": 35.5,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 626,
        "Mon": "Bouffalant",
        "Lvl": 37.5,
        "CP": 2498,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 627,
        "Mon": "Rufflet",
        "Lvl": 51,
        "CP": 1706,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 628,
        "Mon": "Braviary",
        "Lvl": 30.5,
        "CP": 2499,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 629,
        "Mon": "Vullaby",
        "Lvl": 51,
        "CP": 1455,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 630,
        "Mon": "Mandibuzz",
        "Lvl": 51,
        "CP": 2446,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 631,
        "Mon": "Heatmor",
        "Lvl": 49,
        "CP": 2499,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 632,
        "Mon": "Durant",
        "Lvl": 41,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 12,
        "StaIV": 15
    },
    {
        "Dex": 633,
        "Mon": "Deino",
        "Lvl": 51,
        "CP": 1214,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 634,
        "Mon": "Zweilous",
        "Lvl": 51,
        "CP": 2104,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 635,
        "Mon": "Hydreigon",
        "Lvl": 25.5,
        "CP": 2495,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 636,
        "Mon": "Larvesta",
        "Lvl": 51,
        "CP": 1712,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 637,
        "Mon": "Volcarona",
        "Lvl": 25.5,
        "CP": 2498,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 638,
        "Mon": "Cobalion",
        "Lvl": 32.5,
        "CP": 2499,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 12
    },
    {
        "Dex": 639,
        "Mon": "Terrakion",
        "Lvl": 25,
        "CP": 2496,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 13
    },
    {
        "Dex": 640,
        "Mon": "Virizion",
        "Lvl": 32.5,
        "CP": 2499,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 12
    },
    {
        "Dex": 641,
        "Mon": "Tornadus",
        "Lvl": 27.5,
        "CP": 2497,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 641,
        "Mon": "Tornadus_Incarnate",
        "Lvl": 27.5,
        "CP": 2497,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 641,
        "Mon": "Tornadus_Therian",
        "Lvl": 29,
        "CP": 2498,
        "AtkIV": 1,
        "DefIV": 12,
        "StaIV": 15
    },
    {
        "Dex": 642,
        "Mon": "Thundurus",
        "Lvl": 27.5,
        "CP": 2497,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 642,
        "Mon": "Thundurus_Incarnate",
        "Lvl": 27.5,
        "CP": 2497,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 642,
        "Mon": "Thundurus_Therian",
        "Lvl": 25,
        "CP": 2496,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 643,
        "Mon": "Reshiram",
        "Lvl": 23,
        "CP": 2497,
        "AtkIV": 1,
        "DefIV": 13,
        "StaIV": 12
    },
    {
        "Dex": 644,
        "Mon": "Zekrom",
        "Lvl": 23,
        "CP": 2497,
        "AtkIV": 1,
        "DefIV": 13,
        "StaIV": 12
    },
    {
        "Dex": 645,
        "Mon": "Landorus",
        "Lvl": 26,
        "CP": 2499,
        "AtkIV": 1,
        "DefIV": 11,
        "StaIV": 14
    },
    {
        "Dex": 645,
        "Mon": "Landorus_Incarnate",
        "Lvl": 26,
        "CP": 2499,
        "AtkIV": 1,
        "DefIV": 11,
        "StaIV": 14
    },
    {
        "Dex": 645,
        "Mon": "Landorus_Therian",
        "Lvl": 23.5,
        "CP": 2499,
        "AtkIV": 1,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 646,
        "Mon": "Kyurem",
        "Lvl": 26,
        "CP": 2499,
        "AtkIV": 1,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 646,
        "Mon": "Kyurem_Black",
        "Lvl": 20,
        "CP": 2499,
        "AtkIV": 1,
        "DefIV": 12,
        "StaIV": 15
    },
    {
        "Dex": 646,
        "Mon": "Kyurem_White",
        "Lvl": 20,
        "CP": 2499,
        "AtkIV": 1,
        "DefIV": 12,
        "StaIV": 15
    },
    {
        "Dex": 647,
        "Mon": "Keldeo",
        "Lvl": 24,
        "CP": 2499,
        "AtkIV": 11,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 648,
        "Mon": "Meloetta_Aria",
        "Lvl": 22.5,
        "CP": 2500,
        "AtkIV": 10,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 648,
        "Mon": "Meloetta_Pirouette",
        "Lvl": 22.5,
        "CP": 2499,
        "AtkIV": 13,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 649,
        "Mon": "Genesect",
        "Lvl": 27,
        "CP": 2500,
        "AtkIV": 10,
        "DefIV": 12,
        "StaIV": 12
    },
    {
        "Dex": 650,
        "Mon": "Chespin",
        "Lvl": 51,
        "CP": 1254,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 651,
        "Mon": "Quilladin",
        "Lvl": 51,
        "CP": 1967,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 652,
        "Mon": "Chesnaught",
        "Lvl": 33.5,
        "CP": 2500,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 653,
        "Mon": "Fennekin",
        "Lvl": 51,
        "CP": 1176,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 654,
        "Mon": "Braixen",
        "Lvl": 51,
        "CP": 2074,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 655,
        "Mon": "Delphox",
        "Lvl": 30.5,
        "CP": 2493,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 656,
        "Mon": "Froakie",
        "Lvl": 51,
        "CP": 1135,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 657,
        "Mon": "Frogadier",
        "Lvl": 51,
        "CP": 1872,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 658,
        "Mon": "Greninja",
        "Lvl": 41,
        "CP": 2497,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 14
    },
    {
        "Dex": 659,
        "Mon": "Bunnelby",
        "Lvl": 51,
        "CP": 633,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 660,
        "Mon": "Diggersby",
        "Lvl": 51,
        "CP": 1726,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 661,
        "Mon": "Fletchling",
        "Lvl": 51,
        "CP": 916,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 662,
        "Mon": "Fletchinder",
        "Lvl": 51,
        "CP": 1681,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 663,
        "Mon": "Talonflame",
        "Lvl": 51,
        "CP": 2496,
        "AtkIV": 13,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 664,
        "Mon": "Scatterbug",
        "Lvl": 51,
        "CP": 563,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 665,
        "Mon": "Spewpa",
        "Lvl": 51,
        "CP": 548,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 666,
        "Mon": "Vivillon",
        "Lvl": 51,
        "CP": 2122,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 667,
        "Mon": "Litleo",
        "Lvl": 51,
        "CP": 1631,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 668,
        "Mon": "Pyroar",
        "Lvl": 38,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 12
    },
    {
        "Dex": 669,
        "Mon": "Flabebe",
        "Lvl": 51,
        "CP": 1216,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 670,
        "Mon": "Floette",
        "Lvl": 51,
        "CP": 1752,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 671,
        "Mon": "Florges",
        "Lvl": 29,
        "CP": 2498,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 672,
        "Mon": "Skiddo",
        "Lvl": 51,
        "CP": 1430,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 673,
        "Mon": "Gogoat",
        "Lvl": 37.5,
        "CP": 2498,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 674,
        "Mon": "Pancham",
        "Lvl": 51,
        "CP": 1703,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 675,
        "Mon": "Pangoro",
        "Lvl": 34.5,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 676,
        "Mon": "Furfrou",
        "Lvl": 51,
        "CP": 2415,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 677,
        "Mon": "Espurr",
        "Lvl": 51,
        "CP": 1441,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 678,
        "Mon": "Meowstic",
        "Lvl": 51,
        "CP": 2430,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 679,
        "Mon": "Honedge_SPECULATIVE",
        "Lvl": 51,
        "CP": 1590,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 680,
        "Mon": "Doublade_SPECULATIVE",
        "Lvl": 48.5,
        "CP": 2499,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 14
    },
    {
        "Dex": 682,
        "Mon": "Spritzee",
        "Lvl": 51,
        "CP": 1432,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 683,
        "Mon": "Aromatisse",
        "Lvl": 51,
        "CP": 2497,
        "AtkIV": 3,
        "DefIV": 15,
        "StaIV": 13
    },
    {
        "Dex": 684,
        "Mon": "Swirlix",
        "Lvl": 51,
        "CP": 1349,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 685,
        "Mon": "Slurpuff",
        "Lvl": 51,
        "CP": 2488,
        "AtkIV": 13,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 686,
        "Mon": "Inkay",
        "Lvl": 51,
        "CP": 1061,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 687,
        "Mon": "Malamar",
        "Lvl": 51,
        "CP": 2497,
        "AtkIV": 2,
        "DefIV": 14,
        "StaIV": 13
    },
    {
        "Dex": 688,
        "Mon": "Binacle",
        "Lvl": 51,
        "CP": 1082,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 689,
        "Mon": "Barbaracle",
        "Lvl": 40.5,
        "CP": 2499,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 690,
        "Mon": "Skrelp",
        "Lvl": 51,
        "CP": 1216,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 691,
        "Mon": "Dragalge",
        "Lvl": 50.5,
        "CP": 2499,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 692,
        "Mon": "Clauncher",
        "Lvl": 51,
        "CP": 1244,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 693,
        "Mon": "Clawitzer",
        "Lvl": 38,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 694,
        "Mon": "Helioptile",
        "Lvl": 51,
        "CP": 1067,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 695,
        "Mon": "Heliolisk",
        "Lvl": 42.5,
        "CP": 2497,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 14
    },
    {
        "Dex": 696,
        "Mon": "Tyrunt",
        "Lvl": 51,
        "CP": 1870,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 697,
        "Mon": "Tyrantrum",
        "Lvl": 30,
        "CP": 2497,
        "AtkIV": 0,
        "DefIV": 12,
        "StaIV": 15
    },
    {
        "Dex": 698,
        "Mon": "Amaura",
        "Lvl": 51,
        "CP": 1560,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 699,
        "Mon": "Aurorus",
        "Lvl": 37.5,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 700,
        "Mon": "Sylveon",
        "Lvl": 31.5,
        "CP": 2499,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 701,
        "Mon": "Hawlucha",
        "Lvl": 49,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 702,
        "Mon": "Dedenne",
        "Lvl": 51,
        "CP": 2106,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 703,
        "Mon": "Carbink",
        "Lvl": 51,
        "CP": 1678,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 704,
        "Mon": "Goomy",
        "Lvl": 51,
        "CP": 1116,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 705,
        "Mon": "Sliggoo",
        "Lvl": 51,
        "CP": 2330,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 706,
        "Mon": "Goodra",
        "Lvl": 27,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 12,
        "StaIV": 12
    },
    {
        "Dex": 707,
        "Mon": "Klefki",
        "Lvl": 51,
        "CP": 2230,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 708,
        "Mon": "Phantump",
        "Lvl": 51,
        "CP": 1285,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 709,
        "Mon": "Trevenant",
        "Lvl": 43.5,
        "CP": 2500,
        "AtkIV": 1,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 712,
        "Mon": "Bergmite",
        "Lvl": 51,
        "CP": 1390,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 713,
        "Mon": "Avalugg",
        "Lvl": 29.5,
        "CP": 2499,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 714,
        "Mon": "Noibat",
        "Lvl": 51,
        "CP": 763,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 715,
        "Mon": "Noivern",
        "Lvl": 38,
        "CP": 2496,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 14
    },
    {
        "Dex": 716,
        "Mon": "Xerneas",
        "Lvl": 24.5,
        "CP": 2500,
        "AtkIV": 1,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 717,
        "Mon": "Yveltal",
        "Lvl": 24.5,
        "CP": 2500,
        "AtkIV": 1,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 718,
        "Mon": "Zygarde_SPECULATIVE",
        "Lvl": 25,
        "CP": 2498,
        "AtkIV": 1,
        "DefIV": 14,
        "StaIV": 14
    },
    {
        "Dex": 808,
        "Mon": "Meltan",
        "Lvl": 51,
        "CP": 1221,
        "AtkIV": 15,
        "DefIV": 15,
        "StaIV": 15
    },
    {
        "Dex": 809,
        "Mon": "Melmetal",
        "Lvl": 26,
        "CP": 2495,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 862,
        "Mon": "Obstagoon",
        "Lvl": 42,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 15,
        "StaIV": 13
    },
    {
        "Dex": 863,
        "Mon": "Perrserker",
        "Lvl": 50,
        "CP": 2497,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 15
    },
    {
        "Dex": 865,
        "Mon": "Sirfetchd",
        "Lvl": 32.5,
        "CP": 2500,
        "AtkIV": 0,
        "DefIV": 13,
        "StaIV": 15
    },
    {
        "Dex": 866,
        "Mon": "Mr_Rime",
        "Lvl": 36.5,
        "CP": 2496,
        "AtkIV": 0,
        "DefIV": 14,
        "StaIV": 14
    },
    {
        "Dex": 867,
        "Mon": "Runerigus",
        "Lvl": 51,
        "CP": 2499,
        "AtkIV": 8,
        "DefIV": 15,
        "StaIV": 15
    }
];

// CONCATENATED MODULE: ./src/data-buddy.js
/*
- Get data from https://gamepress.gg//sites//default//files//aggregatedjson//buddy-distances-PoGO.json
- Add the "export const DataBuddyCandies = [" at top of JSON
- Add "];" at the end of JSON
- Change JSON file name to ".js"
*/
const DataBuddyCandies = [
    { "title": "Bulbasaur", "field_buddy_distance_requirement": "3 km" },
    { "title": "Ivysaur", "field_buddy_distance_requirement": "3 km" },
    { "title": "Venusaur", "field_buddy_distance_requirement": "3 km" },
    { "title": "Charmander", "field_buddy_distance_requirement": "3 km" },
    { "title": "Charmeleon", "field_buddy_distance_requirement": "3 km" },
    { "title": "Charizard", "field_buddy_distance_requirement": "3 km" },
    { "title": "Charizard", "field_buddy_distance_requirement": "3 km" },
    { "title": "Squirtle", "field_buddy_distance_requirement": "3 km" },
    { "title": "Wartortle", "field_buddy_distance_requirement": "3 km" },
    { "title": "Blastoise", "field_buddy_distance_requirement": "3 km" },
    { "title": "Blastoise", "field_buddy_distance_requirement": "3 km" },
    { "title": "Caterpie", "field_buddy_distance_requirement": "1 km" },
    { "title": "Metapod", "field_buddy_distance_requirement": "1 km" },
    { "title": "Butterfree", "field_buddy_distance_requirement": "1 km" },
    { "title": "Weedle", "field_buddy_distance_requirement": "1 km" },
    { "title": "Kakuna", "field_buddy_distance_requirement": "1 km" },
    { "title": "Beedrill", "field_buddy_distance_requirement": "1 km" },
    { "title": "Pidgey", "field_buddy_distance_requirement": "1 km" },
    { "title": "Pidgeotto", "field_buddy_distance_requirement": "1 km" },
    { "title": "Pidgeot", "field_buddy_distance_requirement": "1 km" },
    { "title": "Rattata", "field_buddy_distance_requirement": "1 km" },
    { "title": "Raticate", "field_buddy_distance_requirement": "1 km" },
    { "title": "Spearow", "field_buddy_distance_requirement": "1 km" },
    { "title": "Fearow", "field_buddy_distance_requirement": "1 km" },
    { "title": "Ekans", "field_buddy_distance_requirement": "3 km" },
    { "title": "Arbok", "field_buddy_distance_requirement": "3 km" },
    { "title": "Pikachu", "field_buddy_distance_requirement": "1 km" },
    { "title": "Raichu", "field_buddy_distance_requirement": "1 km" },
    { "title": "Sandshrew", "field_buddy_distance_requirement": "3 km" },
    { "title": "Sandslash", "field_buddy_distance_requirement": "3 km" },
    { "title": "Nidoran\u2640", "field_buddy_distance_requirement": "3 km" },
    { "title": "Nidorina", "field_buddy_distance_requirement": "3 km" },
    { "title": "Nidoqueen", "field_buddy_distance_requirement": "3 km" },
    { "title": "Nidoran\u2642", "field_buddy_distance_requirement": "3 km" },
    { "title": "Nidorino", "field_buddy_distance_requirement": "3 km" },
    { "title": "Nidoking", "field_buddy_distance_requirement": "3 km" },
    { "title": "Clefairy", "field_buddy_distance_requirement": "1 km" },
    { "title": "Clefable", "field_buddy_distance_requirement": "1 km" },
    { "title": "Vulpix", "field_buddy_distance_requirement": "3 km" },
    { "title": "Ninetales", "field_buddy_distance_requirement": "3 km" },
    { "title": "Jigglypuff", "field_buddy_distance_requirement": "1 km" },
    { "title": "Wigglytuff", "field_buddy_distance_requirement": "1 km" },
    { "title": "Zubat", "field_buddy_distance_requirement": "1 km" },
    { "title": "Golbat", "field_buddy_distance_requirement": "1 km" },
    { "title": "Oddish", "field_buddy_distance_requirement": "3 km" },
    { "title": "Gloom", "field_buddy_distance_requirement": "3 km" },
    { "title": "Vileplume", "field_buddy_distance_requirement": "3 km" },
    { "title": "Paras", "field_buddy_distance_requirement": "3 km" },
    { "title": "Parasect", "field_buddy_distance_requirement": "3 km" },
    { "title": "Venonat", "field_buddy_distance_requirement": "3 km" },
    { "title": "Venomoth", "field_buddy_distance_requirement": "3 km" },
    { "title": "Diglett", "field_buddy_distance_requirement": "3 km" },
    { "title": "Dugtrio", "field_buddy_distance_requirement": "3 km" },
    { "title": "Meowth", "field_buddy_distance_requirement": "3 km" },
    { "title": "Persian", "field_buddy_distance_requirement": "3 km" },
    { "title": "Psyduck", "field_buddy_distance_requirement": "3 km" },
    { "title": "Golduck", "field_buddy_distance_requirement": "3 km" },
    { "title": "Mankey", "field_buddy_distance_requirement": "3 km" },
    { "title": "Primeape", "field_buddy_distance_requirement": "3 km" },
    { "title": "Growlithe", "field_buddy_distance_requirement": "3 km" },
    { "title": "Arcanine", "field_buddy_distance_requirement": "3 km" },
    { "title": "Poliwag", "field_buddy_distance_requirement": "3 km" },
    { "title": "Poliwhirl", "field_buddy_distance_requirement": "3 km" },
    { "title": "Poliwrath", "field_buddy_distance_requirement": "3 km" },
    { "title": "Abra", "field_buddy_distance_requirement": "3 km" },
    { "title": "Kadabra", "field_buddy_distance_requirement": "3 km" },
    { "title": "Alakazam", "field_buddy_distance_requirement": "3 km" },
    { "title": "Machop", "field_buddy_distance_requirement": "3 km" },
    { "title": "Machoke", "field_buddy_distance_requirement": "3 km" },
    { "title": "Machamp", "field_buddy_distance_requirement": "3 km" },
    { "title": "Bellsprout", "field_buddy_distance_requirement": "3 km" },
    { "title": "Weepinbell", "field_buddy_distance_requirement": "3 km" },
    { "title": "Victreebel", "field_buddy_distance_requirement": "3 km" },
    { "title": "Tentacool", "field_buddy_distance_requirement": "3 km" },
    { "title": "Tentacruel", "field_buddy_distance_requirement": "3 km" },
    { "title": "Geodude", "field_buddy_distance_requirement": "1 km" },
    { "title": "Graveler", "field_buddy_distance_requirement": "1 km" },
    { "title": "Golem", "field_buddy_distance_requirement": "1 km" },
    { "title": "Ponyta", "field_buddy_distance_requirement": "3 km" },
    { "title": "Rapidash", "field_buddy_distance_requirement": "3 km" },
    { "title": "Slowpoke", "field_buddy_distance_requirement": "3 km" },
    { "title": "Slowbro", "field_buddy_distance_requirement": "3 km" },
    { "title": "Magnemite", "field_buddy_distance_requirement": "3 km" },
    { "title": "Magneton", "field_buddy_distance_requirement": "3 km" },
    { "title": "Farfetch&#039;d", "field_buddy_distance_requirement": "3 km" },
    { "title": "Doduo", "field_buddy_distance_requirement": "3 km" },
    { "title": "Dodrio", "field_buddy_distance_requirement": "3 km" },
    { "title": "Seel", "field_buddy_distance_requirement": "3 km" },
    { "title": "Dewgong", "field_buddy_distance_requirement": "3 km" },
    { "title": "Grimer", "field_buddy_distance_requirement": "3 km" },
    { "title": "Muk", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shellder", "field_buddy_distance_requirement": "3 km" },
    { "title": "Cloyster", "field_buddy_distance_requirement": "3 km" },
    { "title": "Gastly", "field_buddy_distance_requirement": "3 km" },
    { "title": "Haunter", "field_buddy_distance_requirement": "3 km" },
    { "title": "Gengar", "field_buddy_distance_requirement": "3 km" },
    { "title": "Onix", "field_buddy_distance_requirement": "5 km" },
    { "title": "Drowzee", "field_buddy_distance_requirement": "3 km" },
    { "title": "Hypno", "field_buddy_distance_requirement": "3 km" },
    { "title": "Krabby", "field_buddy_distance_requirement": "3 km" },
    { "title": "Kingler", "field_buddy_distance_requirement": "3 km" },
    { "title": "Voltorb", "field_buddy_distance_requirement": "3 km" },
    { "title": "Electrode", "field_buddy_distance_requirement": "3 km" },
    { "title": "Exeggcute", "field_buddy_distance_requirement": "3 km" },
    { "title": "Exeggutor", "field_buddy_distance_requirement": "3 km" },
    { "title": "Cubone", "field_buddy_distance_requirement": "3 km" },
    { "title": "Marowak", "field_buddy_distance_requirement": "3 km" },
    { "title": "Hitmonlee", "field_buddy_distance_requirement": "5 km" },
    { "title": "Hitmonchan", "field_buddy_distance_requirement": "5 km" },
    { "title": "Lickitung", "field_buddy_distance_requirement": "3 km" },
    { "title": "Koffing", "field_buddy_distance_requirement": "3 km" },
    { "title": "Weezing", "field_buddy_distance_requirement": "3 km" },
    { "title": "Rhyhorn", "field_buddy_distance_requirement": "3 km" },
    { "title": "Rhydon", "field_buddy_distance_requirement": "3 km" },
    { "title": "Chansey", "field_buddy_distance_requirement": "5 km" },
    { "title": "Tangela", "field_buddy_distance_requirement": "3 km" },
    { "title": "Kangaskhan", "field_buddy_distance_requirement": "3 km" },
    { "title": "Horsea", "field_buddy_distance_requirement": "3 km" },
    { "title": "Seadra", "field_buddy_distance_requirement": "3 km" },
    { "title": "Goldeen", "field_buddy_distance_requirement": "3 km" },
    { "title": "Seaking", "field_buddy_distance_requirement": "3 km" },
    { "title": "Staryu", "field_buddy_distance_requirement": "3 km" },
    { "title": "Starmie", "field_buddy_distance_requirement": "3 km" },
    { "title": "Mr. Mime", "field_buddy_distance_requirement": "5 km" },
    { "title": "Scyther", "field_buddy_distance_requirement": "5 km" },
    { "title": "Jynx", "field_buddy_distance_requirement": "5 km" },
    { "title": "Electabuzz", "field_buddy_distance_requirement": "5 km" },
    { "title": "Magmar", "field_buddy_distance_requirement": "5 km" },
    { "title": "Pinsir", "field_buddy_distance_requirement": "5 km" },
    { "title": "Tauros", "field_buddy_distance_requirement": "3 km" },
    { "title": "Magikarp", "field_buddy_distance_requirement": "1 km" },
    { "title": "Gyarados", "field_buddy_distance_requirement": "1 km" },
    { "title": "Lapras", "field_buddy_distance_requirement": "5 km" },
    { "title": "Ditto", "field_buddy_distance_requirement": "3 km" },
    { "title": "Eevee", "field_buddy_distance_requirement": "5 km" },
    { "title": "Vaporeon", "field_buddy_distance_requirement": "5 km" },
    { "title": "Jolteon", "field_buddy_distance_requirement": "5 km" },
    { "title": "Flareon", "field_buddy_distance_requirement": "5 km" },
    { "title": "Porygon", "field_buddy_distance_requirement": "3 km" },
    { "title": "Omanyte", "field_buddy_distance_requirement": "5 km" },
    { "title": "Omastar", "field_buddy_distance_requirement": "5 km" },
    { "title": "Kabuto", "field_buddy_distance_requirement": "5 km" },
    { "title": "Kabutops", "field_buddy_distance_requirement": "5 km" },
    { "title": "Aerodactyl", "field_buddy_distance_requirement": "5 km" },
    { "title": "Snorlax", "field_buddy_distance_requirement": "5 km" },
    { "title": "Articuno", "field_buddy_distance_requirement": "20 km" },
    { "title": "Zapdos", "field_buddy_distance_requirement": "20 km" },
    { "title": "Moltres", "field_buddy_distance_requirement": "20 km" },
    { "title": "Dratini", "field_buddy_distance_requirement": "5 km" },
    { "title": "Dragonair", "field_buddy_distance_requirement": "5 km" },
    { "title": "Dragonite", "field_buddy_distance_requirement": "5 km" },
    { "title": "Mewtwo", "field_buddy_distance_requirement": "20 km" },
    { "title": "Mew", "field_buddy_distance_requirement": "20 km" },
    { "title": "Chikorita", "field_buddy_distance_requirement": "3 km" },
    { "title": "Bayleef", "field_buddy_distance_requirement": "3 km" },
    { "title": "Meganium", "field_buddy_distance_requirement": "3 km" },
    { "title": "Cyndaquil", "field_buddy_distance_requirement": "3 km" },
    { "title": "Quilava", "field_buddy_distance_requirement": "3 km" },
    { "title": "Typhlosion", "field_buddy_distance_requirement": "3 km" },
    { "title": "Totodile", "field_buddy_distance_requirement": "3 km" },
    { "title": "Croconaw", "field_buddy_distance_requirement": "3 km" },
    { "title": "Feraligatr", "field_buddy_distance_requirement": "3 km" },
    { "title": "Sentret", "field_buddy_distance_requirement": "1 km" },
    { "title": "Furret", "field_buddy_distance_requirement": "1 km" },
    { "title": "Hoothoot", "field_buddy_distance_requirement": "1 km" },
    { "title": "Noctowl", "field_buddy_distance_requirement": "1 km" },
    { "title": "Ledyba", "field_buddy_distance_requirement": "1 km" },
    { "title": "Ledian", "field_buddy_distance_requirement": "1 km" },
    { "title": "Spinarak", "field_buddy_distance_requirement": "1 km" },
    { "title": "Ariados", "field_buddy_distance_requirement": "1 km" },
    { "title": "Crobat", "field_buddy_distance_requirement": "1 km" },
    { "title": "Chinchou", "field_buddy_distance_requirement": "3 km" },
    { "title": "Lanturn", "field_buddy_distance_requirement": "3 km" },
    { "title": "Pichu", "field_buddy_distance_requirement": "1 km" },
    { "title": "Cleffa", "field_buddy_distance_requirement": "1 km" },
    { "title": "Igglybuff", "field_buddy_distance_requirement": "1 km" },
    { "title": "Togepi", "field_buddy_distance_requirement": "3 km" },
    { "title": "Togetic", "field_buddy_distance_requirement": "3 km" },
    { "title": "Natu", "field_buddy_distance_requirement": "3 km" },
    { "title": "Xatu", "field_buddy_distance_requirement": "3 km" },
    { "title": "Mareep", "field_buddy_distance_requirement": "5 km" },
    { "title": "Flaaffy", "field_buddy_distance_requirement": "5 km" },
    { "title": "Ampharos", "field_buddy_distance_requirement": "5 km" },
    { "title": "Bellossom", "field_buddy_distance_requirement": "3 km" },
    { "title": "Marill", "field_buddy_distance_requirement": "3 km" },
    { "title": "Azumarill", "field_buddy_distance_requirement": "3 km" },
    { "title": "Sudowoodo", "field_buddy_distance_requirement": "5 km" },
    { "title": "Politoed", "field_buddy_distance_requirement": "3 km" },
    { "title": "Hoppip", "field_buddy_distance_requirement": "3 km" },
    { "title": "Skiploom", "field_buddy_distance_requirement": "3 km" },
    { "title": "Jumpluff", "field_buddy_distance_requirement": "3 km" },
    { "title": "Aipom", "field_buddy_distance_requirement": "3 km" },
    { "title": "Sunkern", "field_buddy_distance_requirement": "3 km" },
    { "title": "Sunflora", "field_buddy_distance_requirement": "3 km" },
    { "title": "Yanma", "field_buddy_distance_requirement": "3 km" },
    { "title": "Wooper", "field_buddy_distance_requirement": "3 km" },
    { "title": "Quagsire", "field_buddy_distance_requirement": "3 km" },
    { "title": "Espeon", "field_buddy_distance_requirement": "5 km" },
    { "title": "Umbreon", "field_buddy_distance_requirement": "5 km" },
    { "title": "Murkrow", "field_buddy_distance_requirement": "3 km" },
    { "title": "Slowking", "field_buddy_distance_requirement": "3 km" },
    { "title": "Misdreavus", "field_buddy_distance_requirement": "3 km" },
    { "title": "Unown", "field_buddy_distance_requirement": "5 km" },
    { "title": "Wobbuffet", "field_buddy_distance_requirement": "3 km" },
    { "title": "Girafarig", "field_buddy_distance_requirement": "3 km" },
    { "title": "Pineco", "field_buddy_distance_requirement": "5 km" },
    { "title": "Forretress", "field_buddy_distance_requirement": "5 km" },
    { "title": "Dunsparce", "field_buddy_distance_requirement": "3 km" },
    { "title": "Gligar", "field_buddy_distance_requirement": "5 km" },
    { "title": "Steelix", "field_buddy_distance_requirement": "5 km" },
    { "title": "Snubbull", "field_buddy_distance_requirement": "3 km" },
    { "title": "Granbull", "field_buddy_distance_requirement": "3 km" },
    { "title": "Qwilfish", "field_buddy_distance_requirement": "3 km" },
    { "title": "Scizor", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shuckle", "field_buddy_distance_requirement": "3 km" },
    { "title": "Heracross", "field_buddy_distance_requirement": "3 km" },
    { "title": "Sneasel", "field_buddy_distance_requirement": "3 km" },
    { "title": "Teddiursa", "field_buddy_distance_requirement": "3 km" },
    { "title": "Ursaring", "field_buddy_distance_requirement": "3 km" },
    { "title": "Slugma", "field_buddy_distance_requirement": "1 km" },
    { "title": "Magcargo", "field_buddy_distance_requirement": "1 km" },
    { "title": "Swinub", "field_buddy_distance_requirement": "3 km" },
    { "title": "Piloswine", "field_buddy_distance_requirement": "3 km" },
    { "title": "Corsola", "field_buddy_distance_requirement": "3 km" },
    { "title": "Remoraid", "field_buddy_distance_requirement": "1 km" },
    { "title": "Octillery", "field_buddy_distance_requirement": "1 km" },
    { "title": "Delibird", "field_buddy_distance_requirement": "5 km" },
    { "title": "Mantine", "field_buddy_distance_requirement": "5 km" },
    { "title": "Skarmory", "field_buddy_distance_requirement": "5 km" },
    { "title": "Houndour", "field_buddy_distance_requirement": "3 km" },
    { "title": "Houndoom", "field_buddy_distance_requirement": "3 km" },
    { "title": "Kingdra", "field_buddy_distance_requirement": "3 km" },
    { "title": "Phanpy", "field_buddy_distance_requirement": "3 km" },
    { "title": "Donphan", "field_buddy_distance_requirement": "3 km" },
    { "title": "Porygon2", "field_buddy_distance_requirement": "3 km" },
    { "title": "Stantler", "field_buddy_distance_requirement": "3 km" },
    { "title": "Smeargle", "field_buddy_distance_requirement": "3 km" },
    { "title": "Tyrogue", "field_buddy_distance_requirement": "5 km" },
    { "title": "Hitmontop", "field_buddy_distance_requirement": "5 km" },
    { "title": "Smoochum", "field_buddy_distance_requirement": "5 km" },
    { "title": "Elekid", "field_buddy_distance_requirement": "5 km" },
    { "title": "Magby", "field_buddy_distance_requirement": "5 km" },
    { "title": "Miltank", "field_buddy_distance_requirement": "5 km" },
    { "title": "Blissey", "field_buddy_distance_requirement": "5 km" },
    { "title": "Raikou", "field_buddy_distance_requirement": "20 km" },
    { "title": "Entei", "field_buddy_distance_requirement": "20 km" },
    { "title": "Suicune", "field_buddy_distance_requirement": "20 km" },
    { "title": "Larvitar", "field_buddy_distance_requirement": "5 km" },
    { "title": "Pupitar", "field_buddy_distance_requirement": "5 km" },
    { "title": "Tyranitar", "field_buddy_distance_requirement": "5 km" },
    { "title": "Lugia", "field_buddy_distance_requirement": "20 km" },
    { "title": "Ho-Oh", "field_buddy_distance_requirement": "20 km" },
    { "title": "Celebi", "field_buddy_distance_requirement": "5 km" },
    { "title": "Rowlet", "field_buddy_distance_requirement": "1 km" },
    { "title": "Dartrix", "field_buddy_distance_requirement": "1 km" },
    { "title": "Decidueye", "field_buddy_distance_requirement": "1 km" },
    { "title": "Litten", "field_buddy_distance_requirement": "1 km" },
    { "title": "Torracat", "field_buddy_distance_requirement": "1 km" },
    { "title": "Incineroar", "field_buddy_distance_requirement": "1 km" },
    { "title": "Popplio", "field_buddy_distance_requirement": "1 km" },
    { "title": "Brionne", "field_buddy_distance_requirement": "1 km" },
    { "title": "Primarina", "field_buddy_distance_requirement": "1 km" },
    { "title": "Pikipek", "field_buddy_distance_requirement": "1 km" },
    { "title": "Trumbeak", "field_buddy_distance_requirement": "1 km" },
    { "title": "Toucannon", "field_buddy_distance_requirement": "1 km" },
    { "title": "Yungoos", "field_buddy_distance_requirement": "1 km" },
    { "title": "Gumshoos", "field_buddy_distance_requirement": "1 km" },
    { "title": "Grubbin", "field_buddy_distance_requirement": "1 km" },
    { "title": "Charjabug", "field_buddy_distance_requirement": "1 km" },
    { "title": "Vikavolt", "field_buddy_distance_requirement": "1 km" },
    { "title": "Crabrawler", "field_buddy_distance_requirement": "3 km" },
    { "title": "Crabominable", "field_buddy_distance_requirement": "3 km" },
    {
        "title": "Oricorio (Baile Style)",
        "field_buddy_distance_requirement": "3 km"
    },
    {
        "title": "Oricorio (Pom-Pom Style)",
        "field_buddy_distance_requirement": "3 km"
    },
    {
        "title": "Oricorio (Pa&#039;u Style)",
        "field_buddy_distance_requirement": "3 km"
    },
    {
        "title": "Oricorio (Sensu Style)",
        "field_buddy_distance_requirement": "3 km"
    },
    { "title": "Cutiefly", "field_buddy_distance_requirement": "3 km" },
    { "title": "Ribombee", "field_buddy_distance_requirement": "3 km" },
    { "title": "Rockruff", "field_buddy_distance_requirement": "1 km" },
    {
        "title": "Lycanroc (Midday Form)",
        "field_buddy_distance_requirement": "1 km"
    },
    {
        "title": "Lycanroc (Midnight Form)",
        "field_buddy_distance_requirement": "1 km"
    },
    {
        "title": "Wishiwashi (Solo Form)",
        "field_buddy_distance_requirement": "1 km"
    },
    {
        "title": "Wishiwashi (School Form)",
        "field_buddy_distance_requirement": "1 km"
    },
    { "title": "Mareanie", "field_buddy_distance_requirement": "3 km" },
    { "title": "Toxapex", "field_buddy_distance_requirement": "3 km" },
    { "title": "Mudbray", "field_buddy_distance_requirement": "3 km" },
    { "title": "Mudsdale", "field_buddy_distance_requirement": "3 km" },
    { "title": "Dewpider", "field_buddy_distance_requirement": "1 km" },
    { "title": "Araquanid", "field_buddy_distance_requirement": "1 km" },
    { "title": "Fomantis", "field_buddy_distance_requirement": "3 km" },
    { "title": "Lurantis", "field_buddy_distance_requirement": "3 km" },
    { "title": "Morelull", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shiinotic", "field_buddy_distance_requirement": "3 km" },
    { "title": "Salandit", "field_buddy_distance_requirement": "3 km" },
    { "title": "Salazzle", "field_buddy_distance_requirement": "3 km" },
    { "title": "Stufful", "field_buddy_distance_requirement": "1 km" },
    { "title": "Bewear", "field_buddy_distance_requirement": "1 km" },
    { "title": "Bounsweet", "field_buddy_distance_requirement": "3 km" },
    { "title": "Steenee", "field_buddy_distance_requirement": "3 km" },
    { "title": "Tsareena", "field_buddy_distance_requirement": "3 km" },
    { "title": "Comfey", "field_buddy_distance_requirement": "3 km" },
    { "title": "Oranguru", "field_buddy_distance_requirement": "3 km" },
    { "title": "Passimian", "field_buddy_distance_requirement": "3 km" },
    { "title": "Wimpod", "field_buddy_distance_requirement": "3 km" },
    { "title": "Golisopod", "field_buddy_distance_requirement": "3 km" },
    { "title": "Sandygast", "field_buddy_distance_requirement": "1 km" },
    { "title": "Palossand", "field_buddy_distance_requirement": "1 km" },
    { "title": "Pyukumuku", "field_buddy_distance_requirement": "1 km" },
    { "title": "Type: Null", "field_buddy_distance_requirement": "5 km" },
    { "title": "Silvally", "field_buddy_distance_requirement": "5 km" },
    { "title": "Minior", "field_buddy_distance_requirement": "5 km" },
    { "title": "Minior-7", "field_buddy_distance_requirement": "5 km" },
    { "title": "Komala", "field_buddy_distance_requirement": "3 km" },
    { "title": "Turtonator", "field_buddy_distance_requirement": "3 km" },
    { "title": "Togedemaru", "field_buddy_distance_requirement": "1 km" },
    { "title": "Mimikyu", "field_buddy_distance_requirement": "3 km" },
    { "title": "Bruxish", "field_buddy_distance_requirement": "1 km" },
    { "title": "Drampa", "field_buddy_distance_requirement": "3 km" },
    { "title": "Dhelmise", "field_buddy_distance_requirement": "5 km" },
    { "title": "Jangmo-o", "field_buddy_distance_requirement": "5 km" },
    { "title": "Hakamo-o", "field_buddy_distance_requirement": "5 km" },
    { "title": "Kommo-o", "field_buddy_distance_requirement": "5 km" },
    { "title": "Tapu Koko", "field_buddy_distance_requirement": "1 km" },
    { "title": "Tapu Lele", "field_buddy_distance_requirement": "1 km" },
    { "title": "Tapu Bulu", "field_buddy_distance_requirement": "1 km" },
    { "title": "Tapu Fini", "field_buddy_distance_requirement": "1 km" },
    { "title": "Cosmog", "field_buddy_distance_requirement": "5 km" },
    { "title": "Cosmoem", "field_buddy_distance_requirement": "5 km" },
    { "title": "Solgaleo", "field_buddy_distance_requirement": "5 km" },
    { "title": "Lunala", "field_buddy_distance_requirement": "5 km" },
    { "title": "Nihilego", "field_buddy_distance_requirement": "5 km" },
    { "title": "Buzzwole", "field_buddy_distance_requirement": "5 km" },
    { "title": "Pheromosa", "field_buddy_distance_requirement": "5 km" },
    { "title": "Xurkitree", "field_buddy_distance_requirement": "5 km" },
    { "title": "Celesteela", "field_buddy_distance_requirement": "" },
    { "title": "Kartana", "field_buddy_distance_requirement": "5 km" },
    { "title": "Guzzlord", "field_buddy_distance_requirement": "5 km" },
    { "title": "Necrozma", "field_buddy_distance_requirement": "5 km" },
    { "title": "Magearna", "field_buddy_distance_requirement": "5 km" },
    { "title": "Marshadow", "field_buddy_distance_requirement": "5 km" },
    { "title": "Treecko", "field_buddy_distance_requirement": "3 km" },
    { "title": "Grovyle", "field_buddy_distance_requirement": "3 km" },
    { "title": "Sceptile", "field_buddy_distance_requirement": "3 km" },
    { "title": "Torchic", "field_buddy_distance_requirement": "3 km" },
    { "title": "Combusken", "field_buddy_distance_requirement": "3 km" },
    { "title": "Blaziken", "field_buddy_distance_requirement": "3 km" },
    { "title": "Mudkip", "field_buddy_distance_requirement": "3 km" },
    { "title": "Marshtomp", "field_buddy_distance_requirement": "3 km" },
    { "title": "Swampert", "field_buddy_distance_requirement": "3 km" },
    { "title": "Poochyena", "field_buddy_distance_requirement": "1 km" },
    { "title": "Mightyena", "field_buddy_distance_requirement": "1 km" },
    { "title": "Zigzagoon", "field_buddy_distance_requirement": "1 km" },
    { "title": "Linoone", "field_buddy_distance_requirement": "1 km" },
    { "title": "Wurmple", "field_buddy_distance_requirement": "1 km" },
    { "title": "Silcoon", "field_buddy_distance_requirement": "1 km" },
    { "title": "Beautifly", "field_buddy_distance_requirement": "1 km" },
    { "title": "Cascoon", "field_buddy_distance_requirement": "1 km" },
    { "title": "Dustox", "field_buddy_distance_requirement": "1 km" },
    { "title": "Lotad", "field_buddy_distance_requirement": "3 km" },
    { "title": "Lombre", "field_buddy_distance_requirement": "3 km" },
    { "title": "Ludicolo", "field_buddy_distance_requirement": "3 km" },
    { "title": "Seedot", "field_buddy_distance_requirement": "3 km" },
    { "title": "Nuzleaf", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shiftry", "field_buddy_distance_requirement": "3 km" },
    { "title": "Taillow", "field_buddy_distance_requirement": "1 km" },
    { "title": "Swellow", "field_buddy_distance_requirement": "1 km" },
    { "title": "Wingull", "field_buddy_distance_requirement": "3 km" },
    { "title": "Pelipper", "field_buddy_distance_requirement": "3 km" },
    { "title": "Ralts", "field_buddy_distance_requirement": "5 km" },
    { "title": "Kirlia", "field_buddy_distance_requirement": "5 km" },
    { "title": "Gardevoir", "field_buddy_distance_requirement": "5 km" },
    { "title": "Surskit", "field_buddy_distance_requirement": "1 km" },
    { "title": "Masquerain", "field_buddy_distance_requirement": "1 km" },
    { "title": "Shroomish", "field_buddy_distance_requirement": "3 km" },
    { "title": "Breloom", "field_buddy_distance_requirement": "3 km" },
    { "title": "Slakoth", "field_buddy_distance_requirement": "5 km" },
    { "title": "Vigoroth", "field_buddy_distance_requirement": "5 km" },
    { "title": "Slaking", "field_buddy_distance_requirement": "5 km" },
    { "title": "Nincada", "field_buddy_distance_requirement": "5 km" },
    { "title": "Ninjask", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shedinja", "field_buddy_distance_requirement": "5 km" },
    { "title": "Whismur", "field_buddy_distance_requirement": "1 km" },
    { "title": "Loudred", "field_buddy_distance_requirement": "1 km" },
    { "title": "Exploud", "field_buddy_distance_requirement": "1 km" },
    { "title": "Makuhita", "field_buddy_distance_requirement": "3 km" },
    { "title": "Hariyama", "field_buddy_distance_requirement": "3 km" },
    { "title": "Azurill", "field_buddy_distance_requirement": "3 km" },
    { "title": "Nosepass", "field_buddy_distance_requirement": "3 km" },
    { "title": "Skitty", "field_buddy_distance_requirement": "3 km" },
    { "title": "Delcatty", "field_buddy_distance_requirement": "3 km" },
    { "title": "Sableye", "field_buddy_distance_requirement": "5 km" },
    { "title": "Mawile", "field_buddy_distance_requirement": "5 km" },
    { "title": "Aron", "field_buddy_distance_requirement": "1 km" },
    { "title": "Lairon", "field_buddy_distance_requirement": "1 km" },
    { "title": "Aggron", "field_buddy_distance_requirement": "1 km" },
    { "title": "Meditite", "field_buddy_distance_requirement": "3 km" },
    { "title": "Medicham", "field_buddy_distance_requirement": "3 km" },
    { "title": "Electrike", "field_buddy_distance_requirement": "3 km" },
    { "title": "Manectric", "field_buddy_distance_requirement": "3 km" },
    { "title": "Plusle", "field_buddy_distance_requirement": "3 km" },
    { "title": "Minun", "field_buddy_distance_requirement": "3 km" },
    { "title": "Volbeat", "field_buddy_distance_requirement": "3 km" },
    { "title": "Illumise", "field_buddy_distance_requirement": "3 km" },
    { "title": "Roselia", "field_buddy_distance_requirement": "3 km" },
    { "title": "Gulpin", "field_buddy_distance_requirement": "1 km" },
    { "title": "Swalot", "field_buddy_distance_requirement": "1 km" },
    { "title": "Carvanha", "field_buddy_distance_requirement": "3 km" },
    { "title": "Sharpedo", "field_buddy_distance_requirement": "3 km" },
    { "title": "Wailmer", "field_buddy_distance_requirement": "1 km" },
    { "title": "Wailord", "field_buddy_distance_requirement": "1 km" },
    { "title": "Numel", "field_buddy_distance_requirement": "3 km" },
    { "title": "Camerupt", "field_buddy_distance_requirement": "3 km" },
    { "title": "Torkoal", "field_buddy_distance_requirement": "3 km" },
    { "title": "Spoink", "field_buddy_distance_requirement": "1 km" },
    { "title": "Grumpig", "field_buddy_distance_requirement": "1 km" },
    { "title": "Spinda", "field_buddy_distance_requirement": "3 km" },
    { "title": "Trapinch", "field_buddy_distance_requirement": "5 km" },
    { "title": "Vibrava", "field_buddy_distance_requirement": "5 km" },
    { "title": "Flygon", "field_buddy_distance_requirement": "5 km" },
    { "title": "Cacnea", "field_buddy_distance_requirement": "3 km" },
    { "title": "Cacturne", "field_buddy_distance_requirement": "3 km" },
    { "title": "Swablu", "field_buddy_distance_requirement": "1 km" },
    { "title": "Altaria", "field_buddy_distance_requirement": "1 km" },
    { "title": "Zangoose", "field_buddy_distance_requirement": "3 km" },
    { "title": "Seviper", "field_buddy_distance_requirement": "3 km" },
    { "title": "Lunatone", "field_buddy_distance_requirement": "3 km" },
    { "title": "Solrock", "field_buddy_distance_requirement": "3 km" },
    { "title": "Barboach", "field_buddy_distance_requirement": "1 km" },
    { "title": "Whiscash", "field_buddy_distance_requirement": "1 km" },
    { "title": "Corphish", "field_buddy_distance_requirement": "3 km" },
    { "title": "Crawdaunt", "field_buddy_distance_requirement": "3 km" },
    { "title": "Baltoy", "field_buddy_distance_requirement": "3 km" },
    { "title": "Claydol", "field_buddy_distance_requirement": "3 km" },
    { "title": "Lileep", "field_buddy_distance_requirement": "3 km" },
    { "title": "Cradily", "field_buddy_distance_requirement": "3 km" },
    { "title": "Anorith", "field_buddy_distance_requirement": "3 km" },
    { "title": "Armaldo", "field_buddy_distance_requirement": "3 km" },
    { "title": "Feebas", "field_buddy_distance_requirement": "5 km" },
    { "title": "Milotic", "field_buddy_distance_requirement": "5 km" },
    { "title": "Castform", "field_buddy_distance_requirement": "5 km" },
    { "title": "Kecleon", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shuppet", "field_buddy_distance_requirement": "3 km" },
    { "title": "Banette", "field_buddy_distance_requirement": "3 km" },
    { "title": "Duskull", "field_buddy_distance_requirement": "3 km" },
    { "title": "Dusclops", "field_buddy_distance_requirement": "3 km" },
    { "title": "Tropius", "field_buddy_distance_requirement": "5 km" },
    { "title": "Chimecho", "field_buddy_distance_requirement": "5 km" },
    { "title": "Absol", "field_buddy_distance_requirement": "5 km" },
    { "title": "Wynaut", "field_buddy_distance_requirement": "3 km" },
    { "title": "Snorunt", "field_buddy_distance_requirement": "3 km" },
    { "title": "Glalie", "field_buddy_distance_requirement": "3 km" },
    { "title": "Spheal", "field_buddy_distance_requirement": "3 km" },
    { "title": "Sealeo", "field_buddy_distance_requirement": "3 km" },
    { "title": "Walrein", "field_buddy_distance_requirement": "3 km" },
    { "title": "Clamperl", "field_buddy_distance_requirement": "3 km" },
    { "title": "Huntail", "field_buddy_distance_requirement": "3 km" },
    { "title": "Gorebyss", "field_buddy_distance_requirement": "3 km" },
    { "title": "Relicanth", "field_buddy_distance_requirement": "5 km" },
    { "title": "Luvdisc", "field_buddy_distance_requirement": "3 km" },
    { "title": "Bagon", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shelgon", "field_buddy_distance_requirement": "5 km" },
    { "title": "Salamence", "field_buddy_distance_requirement": "5 km" },
    { "title": "Beldum", "field_buddy_distance_requirement": "5 km" },
    { "title": "Metang", "field_buddy_distance_requirement": "5 km" },
    { "title": "Metagross", "field_buddy_distance_requirement": "5 km" },
    { "title": "Regirock", "field_buddy_distance_requirement": "20 km" },
    { "title": "Regice", "field_buddy_distance_requirement": "20 km" },
    { "title": "Registeel", "field_buddy_distance_requirement": "20 km" },
    { "title": "Latias", "field_buddy_distance_requirement": "20 km" },
    { "title": "Latios", "field_buddy_distance_requirement": "20 km" },
    { "title": "Kyogre", "field_buddy_distance_requirement": "20 km" },
    { "title": "Groudon", "field_buddy_distance_requirement": "20 km" },
    { "title": "Rayquaza", "field_buddy_distance_requirement": "20 km" },
    { "title": "Jirachi", "field_buddy_distance_requirement": "20 km" },
    {
        "title": "Deoxys (Normal Forme)",
        "field_buddy_distance_requirement": "20 km"
    },
    { "title": "Dialga", "field_buddy_distance_requirement": "20 km" },
    { "title": "Palkia", "field_buddy_distance_requirement": "20 km" },
    {
        "title": "Giratina (Altered Forme)",
        "field_buddy_distance_requirement": "20 km"
    },
    { "title": "Chimchar", "field_buddy_distance_requirement": "3 km" },
    { "title": "Monferno", "field_buddy_distance_requirement": "3 km" },
    { "title": "Infernape", "field_buddy_distance_requirement": "3 km" },
    { "title": "Piplup", "field_buddy_distance_requirement": "3 km" },
    { "title": "Prinplup", "field_buddy_distance_requirement": "3 km" },
    { "title": "Empoleon", "field_buddy_distance_requirement": "3 km" },
    { "title": "Turtwig", "field_buddy_distance_requirement": "3 km" },
    { "title": "Grotle", "field_buddy_distance_requirement": "3 km" },
    { "title": "Torterra", "field_buddy_distance_requirement": "3 km" },
    { "title": "Starly", "field_buddy_distance_requirement": "1 km" },
    { "title": "Staravia", "field_buddy_distance_requirement": "1 km" },
    { "title": "Staraptor", "field_buddy_distance_requirement": "1 km" },
    { "title": "Bidoof", "field_buddy_distance_requirement": "1 km" },
    { "title": "Bibarel", "field_buddy_distance_requirement": "1 km" },
    { "title": "Kricketot", "field_buddy_distance_requirement": "1 km" },
    { "title": "Kricketune", "field_buddy_distance_requirement": "1 km" },
    { "title": "Shinx", "field_buddy_distance_requirement": "5 km" },
    { "title": "Luxio", "field_buddy_distance_requirement": "5 km" },
    { "title": "Luxray", "field_buddy_distance_requirement": "5 km" },
    { "title": "Budew", "field_buddy_distance_requirement": "3 km" },
    { "title": "Roserade", "field_buddy_distance_requirement": "3 km" },
    { "title": "Cranidos", "field_buddy_distance_requirement": "5 km" },
    { "title": "Rampardos", "field_buddy_distance_requirement": "" },
    { "title": "Shieldon", "field_buddy_distance_requirement": "5 km" },
    { "title": "Bastiodon", "field_buddy_distance_requirement": "" },
    { "title": "Burmy", "field_buddy_distance_requirement": "" },
    { "title": "Mothim", "field_buddy_distance_requirement": "" },
    { "title": "Combee", "field_buddy_distance_requirement": "3 km" },
    { "title": "Vespiquen", "field_buddy_distance_requirement": "" },
    { "title": "Pachirisu", "field_buddy_distance_requirement": "5 km" },
    { "title": "Buizel", "field_buddy_distance_requirement": "3 km" },
    { "title": "Floatzel", "field_buddy_distance_requirement": "3 km" },
    { "title": "Cherubi", "field_buddy_distance_requirement": "" },
    { "title": "Ambipom", "field_buddy_distance_requirement": "" },
    { "title": "Drifloon", "field_buddy_distance_requirement": "5 km" },
    { "title": "Drifblim", "field_buddy_distance_requirement": "5 km" },
    { "title": "Buneary", "field_buddy_distance_requirement": "3 km" },
    { "title": "Lopunny", "field_buddy_distance_requirement": "3 km" },
    { "title": "Mismagius", "field_buddy_distance_requirement": "3 km" },
    { "title": "Honchkrow", "field_buddy_distance_requirement": "3 km" },
    { "title": "Glameow", "field_buddy_distance_requirement": "" },
    { "title": "Purugly", "field_buddy_distance_requirement": "" },
    { "title": "Chingling", "field_buddy_distance_requirement": "5 km" },
    { "title": "Stunky", "field_buddy_distance_requirement": "3 km" },
    { "title": "Skuntank", "field_buddy_distance_requirement": "3 km" },
    { "title": "Bronzor", "field_buddy_distance_requirement": "3 km" },
    { "title": "Bronzong", "field_buddy_distance_requirement": "" },
    { "title": "Bonsly", "field_buddy_distance_requirement": "" },
    { "title": "Mime Jr.", "field_buddy_distance_requirement": "" },
    { "title": "Happiny", "field_buddy_distance_requirement": "" },
    { "title": "Chatot", "field_buddy_distance_requirement": "5 km" },
    { "title": "Spiritomb", "field_buddy_distance_requirement": "5 km" },
    { "title": "Gible", "field_buddy_distance_requirement": "" },
    { "title": "Gabite", "field_buddy_distance_requirement": "" },
    { "title": "Garchomp", "field_buddy_distance_requirement": "" },
    { "title": "Munchlax", "field_buddy_distance_requirement": "" },
    { "title": "Riolu", "field_buddy_distance_requirement": "5 km" },
    { "title": "Lucario", "field_buddy_distance_requirement": "5 km" },
    { "title": "Hippopotas", "field_buddy_distance_requirement": "" },
    { "title": "Hippowdon", "field_buddy_distance_requirement": "" },
    { "title": "Skorupi", "field_buddy_distance_requirement": "" },
    { "title": "Drapion", "field_buddy_distance_requirement": "" },
    { "title": "Croagunk", "field_buddy_distance_requirement": "" },
    { "title": "Toxicroak", "field_buddy_distance_requirement": "" },
    { "title": "Carnivine", "field_buddy_distance_requirement": "5 km" },
    { "title": "Finneon", "field_buddy_distance_requirement": "" },
    { "title": "Lumineon", "field_buddy_distance_requirement": "" },
    { "title": "Mantyke", "field_buddy_distance_requirement": "" },
    { "title": "Snover", "field_buddy_distance_requirement": "3 km" },
    { "title": "Abomasnow", "field_buddy_distance_requirement": "" },
    { "title": "Weavile", "field_buddy_distance_requirement": "3 km" },
    { "title": "Magnezone", "field_buddy_distance_requirement": "3 km" },
    { "title": "Lickilicky", "field_buddy_distance_requirement": "" },
    { "title": "Rhyperior", "field_buddy_distance_requirement": "3 km" },
    { "title": "Tangrowth", "field_buddy_distance_requirement": "" },
    { "title": "Electivire", "field_buddy_distance_requirement": "5 km" },
    { "title": "Magmortar", "field_buddy_distance_requirement": "3 km" },
    { "title": "Togekiss", "field_buddy_distance_requirement": "3 km" },
    { "title": "Yanmega", "field_buddy_distance_requirement": "" },
    { "title": "Leafeon", "field_buddy_distance_requirement": "" },
    { "title": "Glaceon", "field_buddy_distance_requirement": "" },
    { "title": "Gliscor", "field_buddy_distance_requirement": "3 km" },
    { "title": "Mamoswine", "field_buddy_distance_requirement": "3 km" },
    { "title": "Porygon-Z", "field_buddy_distance_requirement": "3 km" },
    { "title": "Gallade", "field_buddy_distance_requirement": "5 km" },
    { "title": "Probopass", "field_buddy_distance_requirement": "" },
    { "title": "Dusknoir", "field_buddy_distance_requirement": "3 km" },
    { "title": "Froslass", "field_buddy_distance_requirement": "" },
    { "title": "Uxie", "field_buddy_distance_requirement": "20 km" },
    { "title": "Mesprit", "field_buddy_distance_requirement": "20 km" },
    { "title": "Azelf", "field_buddy_distance_requirement": "20 km" },
    { "title": "Heatran", "field_buddy_distance_requirement": "20 km" },
    { "title": "Regigigas", "field_buddy_distance_requirement": "20 km" },
    { "title": "Cresselia", "field_buddy_distance_requirement": "20 km" },
    { "title": "Phione", "field_buddy_distance_requirement": "20 km" },
    { "title": "Manaphy", "field_buddy_distance_requirement": "20 km" },
    { "title": "Darkrai", "field_buddy_distance_requirement": "20 km" },
    { "title": "Arceus", "field_buddy_distance_requirement": "20 km" },
    { "title": "Shaymin (Land Forme)", "field_buddy_distance_requirement": "" },
    {
        "title": "Giratina (Origin Forme)",
        "field_buddy_distance_requirement": "20 km"
    },
    { "title": "Shaymin (Sky Forme)", "field_buddy_distance_requirement": "" },
    { "title": "Alolan Golem", "field_buddy_distance_requirement": "" },
    { "title": "Alolan Ninetales", "field_buddy_distance_requirement": "" },
    { "title": "Alolan Exeggutor", "field_buddy_distance_requirement": "" },
    { "title": "Alolan Muk", "field_buddy_distance_requirement": "" },
    { "title": "Alolan Marowak", "field_buddy_distance_requirement": "" },
    { "title": "Alolan Raichu", "field_buddy_distance_requirement": "" },
    { "title": "Alolan Sandslash", "field_buddy_distance_requirement": "" },
    { "title": "Alolan Raticate", "field_buddy_distance_requirement": "" },
    { "title": "Alolan Persian", "field_buddy_distance_requirement": "" },
    { "title": "Alolan Dugtrio", "field_buddy_distance_requirement": "" },
    { "title": "Alolan Rattata", "field_buddy_distance_requirement": "" },
    { "title": "Alolan Sandshrew", "field_buddy_distance_requirement": "" },
    { "title": "Alolan Vulpix", "field_buddy_distance_requirement": "" },
    { "title": "Alolan Diglett", "field_buddy_distance_requirement": "" },
    { "title": "Alolan Meowth", "field_buddy_distance_requirement": "" },
    { "title": "Alolan Geodude", "field_buddy_distance_requirement": "" },
    { "title": "Alolan Graveler", "field_buddy_distance_requirement": "" },
    { "title": "Alolan Grimer", "field_buddy_distance_requirement": "" },
    {
        "title": "Cherrim (Overcast Form)",
        "field_buddy_distance_requirement": "1 km"
    },
    { "title": "Shellos", "field_buddy_distance_requirement": "3 km" },
    { "title": "Gastrodon", "field_buddy_distance_requirement": "" },
    { "title": "Rotom", "field_buddy_distance_requirement": "" },
    {
        "title": "Deoxys (Attack Forme)",
        "field_buddy_distance_requirement": "20 km"
    },
    {
        "title": "Deoxys (Defense Forme)",
        "field_buddy_distance_requirement": "20 km"
    },
    {
        "title": "Deoxys (Speed Forme)",
        "field_buddy_distance_requirement": "20 km"
    },
    { "title": "Wormadam (Plant Cloak)", "field_buddy_distance_requirement": "" },
    { "title": "Meltan", "field_buddy_distance_requirement": "20 km" },
    { "title": "Melmetal", "field_buddy_distance_requirement": "20 km" },
    { "title": "Wormadam (Trash Cloak)", "field_buddy_distance_requirement": "" },
    { "title": "Wormadam (Sandy Cloak)", "field_buddy_distance_requirement": "" },
    { "title": "Victini", "field_buddy_distance_requirement": "20 km" },
    { "title": "Snivy", "field_buddy_distance_requirement": "3 km" },
    { "title": "Servine", "field_buddy_distance_requirement": "3 km" },
    { "title": "Serperior", "field_buddy_distance_requirement": "3 km" },
    { "title": "Tepig", "field_buddy_distance_requirement": "3 km" },
    { "title": "Pignite", "field_buddy_distance_requirement": "3 km" },
    { "title": "Emboar", "field_buddy_distance_requirement": "3 km" },
    { "title": "Oshawott", "field_buddy_distance_requirement": "3 km" },
    { "title": "Dewott", "field_buddy_distance_requirement": "3 km" },
    { "title": "Samurott", "field_buddy_distance_requirement": "3 km" },
    { "title": "Patrat", "field_buddy_distance_requirement": "1 km" },
    { "title": "Watchog", "field_buddy_distance_requirement": "1 km" },
    { "title": "Lillipup", "field_buddy_distance_requirement": "1 km" },
    { "title": "Herdier", "field_buddy_distance_requirement": "1 km" },
    { "title": "Stoutland", "field_buddy_distance_requirement": "1 km" },
    { "title": "Purrloin", "field_buddy_distance_requirement": "1 km" },
    { "title": "Liepard", "field_buddy_distance_requirement": "1 km" },
    { "title": "Pansage", "field_buddy_distance_requirement": "3 km" },
    { "title": "Simisage", "field_buddy_distance_requirement": "3 km" },
    { "title": "Pansear", "field_buddy_distance_requirement": "3 km" },
    { "title": "Simisear", "field_buddy_distance_requirement": "3 km" },
    { "title": "Panpour", "field_buddy_distance_requirement": "3 km" },
    { "title": "Simipour", "field_buddy_distance_requirement": "3 km" },
    { "title": "Munna", "field_buddy_distance_requirement": "3 km" },
    { "title": "Musharna", "field_buddy_distance_requirement": "3 km" },
    { "title": "Pidove", "field_buddy_distance_requirement": "1 km" },
    { "title": "Tranquill", "field_buddy_distance_requirement": "1 km" },
    { "title": "Unfezant", "field_buddy_distance_requirement": "1 km" },
    { "title": "Blitzle", "field_buddy_distance_requirement": "3 km" },
    { "title": "Zebstrika", "field_buddy_distance_requirement": "3 km" },
    { "title": "Roggenrola", "field_buddy_distance_requirement": "3 km" },
    { "title": "Boldore", "field_buddy_distance_requirement": "3 km" },
    { "title": "Gigalith", "field_buddy_distance_requirement": "3 km" },
    { "title": "Woobat", "field_buddy_distance_requirement": "1 km" },
    { "title": "Swoobat", "field_buddy_distance_requirement": "1 km" },
    { "title": "Drilbur", "field_buddy_distance_requirement": "3 km" },
    { "title": "Excadrill", "field_buddy_distance_requirement": "3 km" },
    { "title": "Audino", "field_buddy_distance_requirement": "5 km" },
    { "title": "Timburr", "field_buddy_distance_requirement": "5 km" },
    { "title": "Gurdurr", "field_buddy_distance_requirement": "5 km" },
    { "title": "Conkeldurr", "field_buddy_distance_requirement": "5 km" },
    { "title": "Tympole", "field_buddy_distance_requirement": "3 km" },
    { "title": "Palpitoad", "field_buddy_distance_requirement": "3 km" },
    { "title": "Seismitoad", "field_buddy_distance_requirement": "3 km" },
    { "title": "Throh", "field_buddy_distance_requirement": "5 km" },
    { "title": "Sawk", "field_buddy_distance_requirement": "5 km" },
    { "title": "Sewaddle", "field_buddy_distance_requirement": "1 km" },
    { "title": "Swadloon", "field_buddy_distance_requirement": "1 km" },
    { "title": "Leavanny", "field_buddy_distance_requirement": "1 km" },
    { "title": "Venipede", "field_buddy_distance_requirement": "1 km" },
    { "title": "Whirlipede", "field_buddy_distance_requirement": "1 km" },
    { "title": "Scolipede", "field_buddy_distance_requirement": "1 km" },
    { "title": "Cottonee", "field_buddy_distance_requirement": "1 km" },
    { "title": "Whimsicott", "field_buddy_distance_requirement": "1 km" },
    { "title": "Petilil", "field_buddy_distance_requirement": "1 km" },
    { "title": "Lilligant", "field_buddy_distance_requirement": "1 km" },
    { "title": "Basculin", "field_buddy_distance_requirement": "1 km" },
    { "title": "Sandile", "field_buddy_distance_requirement": "5 km" },
    { "title": "Krokorok", "field_buddy_distance_requirement": "5 km" },
    { "title": "Krookodile", "field_buddy_distance_requirement": "5 km" },
    { "title": "Darumaka", "field_buddy_distance_requirement": "5 km" },
    { "title": "Darmanitan", "field_buddy_distance_requirement": "3 km" },
    { "title": "Maractus", "field_buddy_distance_requirement": "1 km" },
    { "title": "Dwebble", "field_buddy_distance_requirement": "1 km" },
    { "title": "Darmanitan (Zen Mode)", "field_buddy_distance_requirement": "" },
    { "title": "Crustle", "field_buddy_distance_requirement": "1 km" },
    { "title": "Scraggy", "field_buddy_distance_requirement": "3 km" },
    { "title": "Scrafty", "field_buddy_distance_requirement": "3 km" },
    { "title": "Sigilyph", "field_buddy_distance_requirement": "5 km" },
    { "title": "Yamask", "field_buddy_distance_requirement": "3 km" },
    { "title": "Cofagrigus", "field_buddy_distance_requirement": "3 km" },
    { "title": "Tirtouga", "field_buddy_distance_requirement": "5 km" },
    { "title": "Carracosta", "field_buddy_distance_requirement": "5 km" },
    { "title": "Archen", "field_buddy_distance_requirement": "5 km" },
    { "title": "Archeops", "field_buddy_distance_requirement": "5 km" },
    { "title": "Trubbish", "field_buddy_distance_requirement": "3 km" },
    { "title": "Garbodor", "field_buddy_distance_requirement": "3 km" },
    { "title": "Zorua", "field_buddy_distance_requirement": "5 km" },
    { "title": "Zoroark", "field_buddy_distance_requirement": "5 km" },
    { "title": "Minccino", "field_buddy_distance_requirement": "3 km" },
    { "title": "Cinccino", "field_buddy_distance_requirement": "3 km" },
    { "title": "Gothita", "field_buddy_distance_requirement": "3 km" },
    { "title": "Gothorita", "field_buddy_distance_requirement": "3 km" },
    { "title": "Gothitelle", "field_buddy_distance_requirement": "3 km" },
    { "title": "Solosis", "field_buddy_distance_requirement": "3 km" },
    { "title": "Duosion", "field_buddy_distance_requirement": "3 km" },
    { "title": "Reuniclus", "field_buddy_distance_requirement": "3 km" },
    { "title": "Ducklett", "field_buddy_distance_requirement": "3 km" },
    { "title": "Swanna", "field_buddy_distance_requirement": "3 km" },
    { "title": "Vanillite", "field_buddy_distance_requirement": "3 km" },
    { "title": "Vanillish", "field_buddy_distance_requirement": "3 km" },
    { "title": "Vanilluxe", "field_buddy_distance_requirement": "3 km" },
    { "title": "Deerling", "field_buddy_distance_requirement": "3 km" },
    { "title": "Sawsbuck", "field_buddy_distance_requirement": "3 km" },
    { "title": "Emolga", "field_buddy_distance_requirement": "1 km" },
    { "title": "Karrablast", "field_buddy_distance_requirement": "3 km" },
    { "title": "Escavalier", "field_buddy_distance_requirement": "3 km" },
    { "title": "Foongus", "field_buddy_distance_requirement": "3 km" },
    { "title": "Amoonguss", "field_buddy_distance_requirement": "3 km" },
    { "title": "Frillish", "field_buddy_distance_requirement": "3 km" },
    { "title": "Jellicent", "field_buddy_distance_requirement": "3 km" },
    { "title": "Alomomola", "field_buddy_distance_requirement": "5 km" },
    { "title": "Joltik", "field_buddy_distance_requirement": "3 km" },
    { "title": "Galvantula", "field_buddy_distance_requirement": "3 km" },
    { "title": "Ferroseed", "field_buddy_distance_requirement": "3 km" },
    { "title": "Ferrothorn", "field_buddy_distance_requirement": "3 km" },
    { "title": "Klink", "field_buddy_distance_requirement": "5 km" },
    { "title": "Klang", "field_buddy_distance_requirement": "5 km" },
    { "title": "Klinklang", "field_buddy_distance_requirement": "5 km" },
    { "title": "Tynamo", "field_buddy_distance_requirement": "1 km" },
    { "title": "Eelektrik", "field_buddy_distance_requirement": "1 km" },
    { "title": "Eelektross", "field_buddy_distance_requirement": "1 km" },
    { "title": "Castform (Snowy)", "field_buddy_distance_requirement": "5 km" },
    { "title": "Castform (Rainy)", "field_buddy_distance_requirement": "5 km" },
    { "title": "Castform (Sunny)", "field_buddy_distance_requirement": "5 km" },
    { "title": "Elgyem", "field_buddy_distance_requirement": "3 km" },
    { "title": "Beheeyem", "field_buddy_distance_requirement": "3 km" },
    { "title": "Litwick", "field_buddy_distance_requirement": "5 km" },
    { "title": "Lampent", "field_buddy_distance_requirement": "5 km" },
    { "title": "Axew", "field_buddy_distance_requirement": "5 km" },
    { "title": "Chandelure", "field_buddy_distance_requirement": "5 km" },
    { "title": "Fraxure", "field_buddy_distance_requirement": "5 km" },
    { "title": "Haxorus", "field_buddy_distance_requirement": "5 km" },
    { "title": "Cubchoo", "field_buddy_distance_requirement": "3 km" },
    { "title": "Beartic", "field_buddy_distance_requirement": "3 km" },
    { "title": "Cryogonal", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shelmet", "field_buddy_distance_requirement": "3 km" },
    { "title": "Accelgor", "field_buddy_distance_requirement": "3 km" },
    { "title": "Stunfisk", "field_buddy_distance_requirement": "5 km" },
    { "title": "Mienfoo", "field_buddy_distance_requirement": "3 km" },
    { "title": "Mienshao", "field_buddy_distance_requirement": "3 km" },
    { "title": "Druddigon", "field_buddy_distance_requirement": "5 km" },
    { "title": "Golett", "field_buddy_distance_requirement": "5 km" },
    { "title": "Golurk", "field_buddy_distance_requirement": "5 km" },
    { "title": "Pawniard", "field_buddy_distance_requirement": "5 km" },
    { "title": "Bouffalant", "field_buddy_distance_requirement": "3 km" },
    { "title": "Bisharp", "field_buddy_distance_requirement": "5 km" },
    { "title": "Rufflet", "field_buddy_distance_requirement": "5 km" },
    { "title": "Braviary", "field_buddy_distance_requirement": "5 km" },
    { "title": "Vullaby", "field_buddy_distance_requirement": "5 km" },
    { "title": "Mandibuzz", "field_buddy_distance_requirement": "5 km" },
    { "title": "Heatmor", "field_buddy_distance_requirement": "3 km" },
    { "title": "Durant", "field_buddy_distance_requirement": "3 km" },
    { "title": "Deino", "field_buddy_distance_requirement": "5 km" },
    { "title": "Zweilous", "field_buddy_distance_requirement": "5 km" },
    { "title": "Hydreigon", "field_buddy_distance_requirement": "5 km" },
    { "title": "Larvesta", "field_buddy_distance_requirement": "5 km" },
    { "title": "Volcarona", "field_buddy_distance_requirement": "5 km" },
    { "title": "Cobalion", "field_buddy_distance_requirement": "20 km" },
    { "title": "Virizion", "field_buddy_distance_requirement": "20 km" },
    { "title": "Terrakion", "field_buddy_distance_requirement": "20 km" },
    {
        "title": "Tornadus (Incarnate Forme)",
        "field_buddy_distance_requirement": "20 km"
    },
    {
        "title": "Tornadus (Therian Forme)",
        "field_buddy_distance_requirement": "20 km"
    },
    {
        "title": "Thundurus  (Incarnate Forme)",
        "field_buddy_distance_requirement": "20 km"
    },
    {
        "title": "Thundurus (Therian Forme)",
        "field_buddy_distance_requirement": "20 km"
    },
    { "title": "Zekrom", "field_buddy_distance_requirement": "20 km" },
    { "title": "Reshiram", "field_buddy_distance_requirement": "20 km" },
    {
        "title": "Landorus (Incarnate Forme)",
        "field_buddy_distance_requirement": "20 km"
    },
    {
        "title": "Landorus (Therian Forme)",
        "field_buddy_distance_requirement": "20 km"
    },
    { "title": "Kyurem", "field_buddy_distance_requirement": "20 km" },
    { "title": "Black Kyurem", "field_buddy_distance_requirement": "20 km" },
    { "title": "White Kyurem", "field_buddy_distance_requirement": "20 km" },
    {
        "title": "Meloetta (Aria Forme)",
        "field_buddy_distance_requirement": "20 km"
    },
    {
        "title": "Meloetta (Pirouette Forme)",
        "field_buddy_distance_requirement": "20 km"
    },
    { "title": "Genesect", "field_buddy_distance_requirement": "20 km" },
    { "title": "Keldeo", "field_buddy_distance_requirement": "20 km" },
    { "title": "Armored Mewtwo", "field_buddy_distance_requirement": "20 km" },
    { "title": "Galarian Zigzagoon", "field_buddy_distance_requirement": "1 km" },
    { "title": "Galarian Linoone", "field_buddy_distance_requirement": "1 km" },
    { "title": "Galarian Weezing", "field_buddy_distance_requirement": "3 km" },
    { "title": "Pikachu Libre", "field_buddy_distance_requirement": "1 km" },
    {
        "title": "Cherrim (Sunshine Form)",
        "field_buddy_distance_requirement": "1 km"
    },
    { "title": "Galarian Stunfisk", "field_buddy_distance_requirement": "5 km" },
    { "title": "Galarian Darumaka", "field_buddy_distance_requirement": "5 km" },
    {
        "title": "Galarian Darmanitan",
        "field_buddy_distance_requirement": "3 km"
    },
    {
        "title": "Galarian Darmanitan - Zen Mode",
        "field_buddy_distance_requirement": "3 km"
    },
    { "title": "Galarian Meowth", "field_buddy_distance_requirement": "3 km" },
    { "title": "Perrserker", "field_buddy_distance_requirement": "3 km" },
    { "title": "Obstagoon", "field_buddy_distance_requirement": "" },
    { "title": "Shadow Weavile", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Banette", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Tyranitar", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Scizor", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Houndoom", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Moltres", "field_buddy_distance_requirement": "20 km" },
    { "title": "Shadow Zapdos", "field_buddy_distance_requirement": "20 km" },
    { "title": "Shadow Charizard", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Alakazam", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Scyther", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Metagross", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Swampert", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Gardevoir", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Gallade", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Venusaur", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Torterra", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Gyarados", "field_buddy_distance_requirement": "1 km" },
    { "title": "Shadow Victreebel", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Flygon", "field_buddy_distance_requirement": "5 km" },
    {
        "title": "Galarian Farfetch&#039;d",
        "field_buddy_distance_requirement": "3 km"
    },
    { "title": "Sirfetch&#039;d", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Bulbasaur", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Ivysaur", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Charmander", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Charmeleon", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Squirtle", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Wartortle", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Blastoise", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Blastoise", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Weedle", "field_buddy_distance_requirement": "1 km" },
    { "title": "Shadow Kakuna", "field_buddy_distance_requirement": "1 km" },
    { "title": "Shadow Beedrill", "field_buddy_distance_requirement": "1 km" },
    { "title": "Shadow Rattata", "field_buddy_distance_requirement": "1 km" },
    { "title": "Shadow Raticate", "field_buddy_distance_requirement": "1 km" },
    { "title": "Shadow Sandshrew", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Sandslash", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Ninetales", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Vulpix", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Zubat", "field_buddy_distance_requirement": "1 km" },
    { "title": "Shadow Golbat", "field_buddy_distance_requirement": "1 km" },
    { "title": "Shadow Oddish", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Gloom", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Vileplume", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Venonat", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Venomoth", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Meowth", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Persian", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Psyduck", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Golduck", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Growlithe", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Arcanine", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Poliwag", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Poliwhirl", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Poliwrath", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Abra", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Kadabra", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Bellsprout", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Weepinbell", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Magnemite", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Magneton", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Grimer", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Muk", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Drowzee", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Hypno", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Exeggcute", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Exeggutor", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Cubone", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Marowak", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Hitmonlee", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Hitmonchan", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Electabuzz", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Magmar", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Magikarp", "field_buddy_distance_requirement": "1 km" },
    { "title": "Shadow Lapras", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Porygon", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Snorlax", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Articuno", "field_buddy_distance_requirement": "20 km" },
    { "title": "Shadow Dratini", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Dragonair", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Crobat", "field_buddy_distance_requirement": "1 km" },
    { "title": "Shadow Mareep", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Flaaffy", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Ampharos", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Bellossom", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Politoed", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Wobbuffet", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Sneasel", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Houndour", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Porygon2", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Raikou", "field_buddy_distance_requirement": "20 km" },
    { "title": "Shadow Entei", "field_buddy_distance_requirement": "20 km" },
    { "title": "Shadow Larvitar", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Pupitar", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Mudkip", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Marshtomp", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Seedot", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Nuzleaf", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Shiftry", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Ralts", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Kirlia", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Sableye", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Sharpedo", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Carvanha", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Trapinch", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Vibrava", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Cacnea", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Cacturne", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Shuppet", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Duskull", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Dusclops", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Bagon", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Shelgon", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Beldum", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Metang", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Turtwig", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Grotle", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Mismagius", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Magnezone", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Electivire", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Magmortar", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Porygon-Z", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Dusknoir", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Omanyte", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Omastar", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Misdreavus", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Stantler", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Mawile", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Absol", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Snover", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Abomasnow", "field_buddy_distance_requirement": "" },
    { "title": "Flying Pikachu", "field_buddy_distance_requirement": "1 km" },
    { "title": "Chespin", "field_buddy_distance_requirement": "3 km" },
    { "title": "Quilladin", "field_buddy_distance_requirement": "3 km" },
    { "title": "Chesnaught", "field_buddy_distance_requirement": "3 km" },
    { "title": "Fennekin", "field_buddy_distance_requirement": "3 km" },
    { "title": "Braixen", "field_buddy_distance_requirement": "3 km" },
    { "title": "Delphox", "field_buddy_distance_requirement": "3 km" },
    { "title": "Froakie", "field_buddy_distance_requirement": "3 km" },
    { "title": "Frogadier", "field_buddy_distance_requirement": "3 km" },
    { "title": "Greninja", "field_buddy_distance_requirement": "3 km" },
    { "title": "Ash Greninja", "field_buddy_distance_requirement": "" },
    { "title": "Bunnelby", "field_buddy_distance_requirement": "1 km" },
    { "title": "Diggersby", "field_buddy_distance_requirement": "1 km" },
    { "title": "Fletchling", "field_buddy_distance_requirement": "1 km" },
    { "title": "Fletchinder", "field_buddy_distance_requirement": "1 km" },
    { "title": "Talonflame", "field_buddy_distance_requirement": "1 km" },
    { "title": "Scatterbug", "field_buddy_distance_requirement": "1 km" },
    { "title": "Spewpa", "field_buddy_distance_requirement": "1 km" },
    { "title": "Vivillon", "field_buddy_distance_requirement": "1 km" },
    { "title": "Litleo", "field_buddy_distance_requirement": "3 km" },
    { "title": "Pyroar Male", "field_buddy_distance_requirement": "3 km" },
    { "title": " Flab\u00e9b\u00e9", "field_buddy_distance_requirement": "3 km" },
    { "title": "Floette", "field_buddy_distance_requirement": "3 km" },
    { "title": "Florges", "field_buddy_distance_requirement": "3 km" },
    { "title": "Skiddo", "field_buddy_distance_requirement": "3 km" },
    { "title": "Gogoat", "field_buddy_distance_requirement": "3 km" },
    { "title": "Pancham", "field_buddy_distance_requirement": "3 km" },
    { "title": "Pangoro", "field_buddy_distance_requirement": "3 km" },
    { "title": "Furfrou", "field_buddy_distance_requirement": "5 km" },
    { "title": "Espurr", "field_buddy_distance_requirement": "3 km" },
    { "title": "Meowstic - Female", "field_buddy_distance_requirement": "3 km" },
    { "title": "Honedge", "field_buddy_distance_requirement": "5 km" },
    { "title": "Doublade", "field_buddy_distance_requirement": "5 km" },
    {
        "title": "Aegislash - Shield ",
        "field_buddy_distance_requirement": "5 km"
    },
    { "title": "Aegislash - Blade", "field_buddy_distance_requirement": "5 km" },
    { "title": "Spritzee", "field_buddy_distance_requirement": "3 km" },
    { "title": "Aromatisse", "field_buddy_distance_requirement": "3 km" },
    { "title": "Swirlix", "field_buddy_distance_requirement": "3 km" },
    { "title": "Slurpuff", "field_buddy_distance_requirement": "3 km" },
    { "title": "Inkay", "field_buddy_distance_requirement": "3 km" },
    { "title": "Malamar", "field_buddy_distance_requirement": "3 km" },
    { "title": "Binacle", "field_buddy_distance_requirement": "3 km" },
    { "title": "Barbaracle", "field_buddy_distance_requirement": "3 km" },
    { "title": "Skrelp", "field_buddy_distance_requirement": "3 km" },
    { "title": "Dragalge", "field_buddy_distance_requirement": "3 km" },
    { "title": "Clauncher", "field_buddy_distance_requirement": "3 km" },
    { "title": "Clawitzer", "field_buddy_distance_requirement": "3 km" },
    { "title": "Helioptile", "field_buddy_distance_requirement": "3 km" },
    { "title": "Heliolisk", "field_buddy_distance_requirement": "3 km" },
    { "title": "Tyrunt", "field_buddy_distance_requirement": "5 km" },
    { "title": "Tyrantrum", "field_buddy_distance_requirement": "5 km" },
    { "title": "Amaura", "field_buddy_distance_requirement": "5 km" },
    { "title": "Aurorus", "field_buddy_distance_requirement": "5 km" },
    { "title": "Sylveon", "field_buddy_distance_requirement": "5 km" },
    { "title": "Hawlucha", "field_buddy_distance_requirement": "5 km" },
    { "title": "Dedenne", "field_buddy_distance_requirement": "3 km" },
    { "title": "Carbink", "field_buddy_distance_requirement": "5 km" },
    { "title": "Goomy", "field_buddy_distance_requirement": "5 km" },
    { "title": "Sliggoo", "field_buddy_distance_requirement": "5 km" },
    { "title": "Goodra", "field_buddy_distance_requirement": "5 km" },
    { "title": "Klefki", "field_buddy_distance_requirement": "3 km" },
    { "title": "Phantump", "field_buddy_distance_requirement": "5 km" },
    { "title": "Trevenant", "field_buddy_distance_requirement": "5 km" },
    {
        "title": "Pumpkaboo - Super Size",
        "field_buddy_distance_requirement": "5 km"
    },
    {
        "title": "Gourgeist - Super Size",
        "field_buddy_distance_requirement": "5 km"
    },
    { "title": "Bergmite", "field_buddy_distance_requirement": "3 km" },
    { "title": "Avalugg", "field_buddy_distance_requirement": "3 km" },
    { "title": "Noibat", "field_buddy_distance_requirement": "5 km" },
    { "title": "Noivern", "field_buddy_distance_requirement": "5 km" },
    { "title": "Xerneas", "field_buddy_distance_requirement": "20 km" },
    { "title": "Yveltal", "field_buddy_distance_requirement": "20 km" },
    {
        "title": "Zygarde (10% Forme)",
        "field_buddy_distance_requirement": "20 km"
    },
    {
        "title": "Zygarde (50% Forme)",
        "field_buddy_distance_requirement": "20 km"
    },
    {
        "title": "Zygarde (Complete Forme)",
        "field_buddy_distance_requirement": "20 km"
    },
    { "title": "Diancie", "field_buddy_distance_requirement": "" },
    { "title": "Hoopa (Confined)", "field_buddy_distance_requirement": "" },
    { "title": "Hoopa (Unbound)", "field_buddy_distance_requirement": "" },
    { "title": "Volcanion", "field_buddy_distance_requirement": "" },
    {
        "title": "Pumpkaboo - Large Size",
        "field_buddy_distance_requirement": "5 km"
    },
    {
        "title": "Pumpkaboo - Average Size",
        "field_buddy_distance_requirement": "5 km"
    },
    {
        "title": "Pumpkaboo - Small Size",
        "field_buddy_distance_requirement": "5 km"
    },
    {
        "title": "Gourgeist - Large Size",
        "field_buddy_distance_requirement": "5 km"
    },
    {
        "title": "Gourgeist - Average Size",
        "field_buddy_distance_requirement": "5 km"
    },
    {
        "title": "Gourgeist - Small Size",
        "field_buddy_distance_requirement": "5 km"
    },
    { "title": "Meowstic - Male", "field_buddy_distance_requirement": "3 km" },
    {
        "title": "Shadow Nidoran\u2642",
        "field_buddy_distance_requirement": "3 km"
    },
    { "title": "Shadow Nidorino", "field_buddy_distance_requirement": "3 km" },
    {
        "title": "Shadow Nidoran\u2640",
        "field_buddy_distance_requirement": "3 km"
    },
    { "title": "Shadow Nidorina", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Nidoqueen", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Nidoking", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Machop", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Machoke", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Machamp", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Pineco", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Forretress", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Shuckle", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Gligar", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Gliscor", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Stunky", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Skuntank", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Suicune", "field_buddy_distance_requirement": "20 km" },
    { "title": "Shadow Arbok", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Ekans", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Koffing", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Weezing", "field_buddy_distance_requirement": "3 km" },
    { "title": "Rotom Wash", "field_buddy_distance_requirement": "" },
    { "title": "Rotom Heat", "field_buddy_distance_requirement": "" },
    { "title": "Rotom Frost", "field_buddy_distance_requirement": "" },
    { "title": "Rotom Fan", "field_buddy_distance_requirement": "" },
    { "title": "Rotom Mow", "field_buddy_distance_requirement": "" },
    { "title": "Shadow Mewtwo", "field_buddy_distance_requirement": "20 km" },
    { "title": "Shadow Salamence", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Dragonite", "field_buddy_distance_requirement": "5 km" },
    { "title": "Mega Diancie", "field_buddy_distance_requirement": "" },
    { "title": "Mega Audino", "field_buddy_distance_requirement": "5 km" },
    { "title": "Mega Gallade", "field_buddy_distance_requirement": "5 km" },
    { "title": "Mega Lopunny", "field_buddy_distance_requirement": "3 km" },
    { "title": "Mega Rayquaza", "field_buddy_distance_requirement": "20 km" },
    { "title": "Mega Metagross", "field_buddy_distance_requirement": "5 km" },
    { "title": "Mega Salamence", "field_buddy_distance_requirement": "5 km" },
    { "title": "Mega Glalie", "field_buddy_distance_requirement": "3 km" },
    { "title": "Mega Altaria", "field_buddy_distance_requirement": "1 km" },
    { "title": "Mega Camerupt", "field_buddy_distance_requirement": "3 km" },
    { "title": "Mega Sharpedo", "field_buddy_distance_requirement": "3 km" },
    { "title": "Mega Sableye", "field_buddy_distance_requirement": "5 km" },
    { "title": "Mega Gardevoir", "field_buddy_distance_requirement": "5 km" },
    { "title": "Mega Swampert", "field_buddy_distance_requirement": "3 km" },
    { "title": "Mega Sceptile", "field_buddy_distance_requirement": "3 km" },
    { "title": "Mega Steelix", "field_buddy_distance_requirement": "5 km" },
    { "title": "Mega Slowbro", "field_buddy_distance_requirement": "3 km" },
    { "title": "Mega Pidgeot", "field_buddy_distance_requirement": "1 km" },
    { "title": "Mega Beedrill", "field_buddy_distance_requirement": "1 km" },
    { "title": "Mega Abomasnow", "field_buddy_distance_requirement": "" },
    { "title": "Mega Lucario", "field_buddy_distance_requirement": "5 km" },
    { "title": "Mega Garchomp", "field_buddy_distance_requirement": "" },
    { "title": "Mega Latios", "field_buddy_distance_requirement": "20 km" },
    { "title": "Mega Latias", "field_buddy_distance_requirement": "20 km" },
    { "title": "Mega Absol", "field_buddy_distance_requirement": "5 km" },
    { "title": "Mega Banette", "field_buddy_distance_requirement": "3 km" },
    { "title": "Mega Manectric", "field_buddy_distance_requirement": "3 km" },
    { "title": "Mega Medicham", "field_buddy_distance_requirement": "3 km" },
    { "title": "Mega Aggron", "field_buddy_distance_requirement": "1 km" },
    { "title": "Mega Mawile", "field_buddy_distance_requirement": "5 km" },
    { "title": "Mega Blaziken", "field_buddy_distance_requirement": "3 km" },
    { "title": "Mega Tyranitar", "field_buddy_distance_requirement": "5 km" },
    { "title": "Mega Houndoom", "field_buddy_distance_requirement": "3 km" },
    { "title": "Mega Heracross", "field_buddy_distance_requirement": "3 km" },
    { "title": "Mega Scizor", "field_buddy_distance_requirement": "5 km" },
    { "title": "Mega Ampharos", "field_buddy_distance_requirement": "5 km" },
    { "title": "Mega Mewtwo X", "field_buddy_distance_requirement": "20 km" },
    { "title": "Mega Mewtwo Y", "field_buddy_distance_requirement": "20 km" },
    { "title": "Mega Aerodactyl", "field_buddy_distance_requirement": "5 km" },
    { "title": "Mega Gyarados", "field_buddy_distance_requirement": "1 km" },
    { "title": "Mega Pinsir", "field_buddy_distance_requirement": "5 km" },
    { "title": "Mega Kangaskhan", "field_buddy_distance_requirement": "3 km" },
    { "title": "Mega Gengar", "field_buddy_distance_requirement": "3 km" },
    { "title": "Mega Alakazam", "field_buddy_distance_requirement": "3 km" },
    { "title": "Mega Blastoise", "field_buddy_distance_requirement": "3 km" },
    { "title": "Mega Blastoise", "field_buddy_distance_requirement": "3 km" },
    { "title": "Mega Charizard X", "field_buddy_distance_requirement": "3 km" },
    { "title": "Mega Charizard X", "field_buddy_distance_requirement": "3 km" },
    { "title": "Mega Charizard Y", "field_buddy_distance_requirement": "3 km" },
    { "title": "Mega Charizard Y", "field_buddy_distance_requirement": "3 km" },
    { "title": "Mega Venusaur", "field_buddy_distance_requirement": "3 km" },
    { "title": "Primal Groudon", "field_buddy_distance_requirement": "20 km" },
    { "title": "Primal Kyogre", "field_buddy_distance_requirement": "20 km" },
    { "title": "Shadow Slowpoke", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Slowbro", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Slowking", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Aerodactyl", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Skarmory", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Pinsir", "field_buddy_distance_requirement": "5 km" },
    { "title": "Galarian Yamask", "field_buddy_distance_requirement": "3 km" },
    { "title": "Runerigus", "field_buddy_distance_requirement": "3 km" },
    { "title": "Galarian Ponyta", "field_buddy_distance_requirement": "3 km" },
    { "title": "Galarian Rapidash", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Shellder", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Cloyster", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Kabuto", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Kabutops", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Hoppip", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Skiploom", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Jumpluff", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Aipom", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Ambipom", "field_buddy_distance_requirement": "" },
    { "title": "Shadow Teddiursa", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Ursaring", "field_buddy_distance_requirement": "3 km" },
    { "title": "Pyroar Female", "field_buddy_distance_requirement": "3 km" },
    { "title": "Mr. Rime", "field_buddy_distance_requirement": "" },
    { "title": "Galarian Mr. Mime", "field_buddy_distance_requirement": "" },
    { "title": "Shadow Delibird", "field_buddy_distance_requirement": "5 km" },
    { "title": "Shadow Diglett", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Dugtrio", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Wooper", "field_buddy_distance_requirement": "3 km" },
    { "title": "Shadow Quagsire", "field_buddy_distance_requirement": "3 km" }
];

// CONCATENATED MODULE: ./src/data-evolutions.js
/**
 * Source https://pogoapi.net/documentation/
 * https://pogoapi.net/api/v1/pokemon_evolutions.json
 *
 *
GET /api/v1/pokemon_evolutions.json
Some Pokemon can evolve into a stronger form by feeding them candy or meeting certain conditions. Once these conditions have been met you can press the "evolve" button to transform them to the next form.

If multiple evolutions meet the requirements and they have the same priority (or it is not set) the evolution will be randomly chosen.

This API lists all the Pokemon that can evolve, what they can evolve into, and the requirements for their evolution.

Returns a JSON array of objects, the objects have the following keys.

pokemon_id - ID of the Pokemon that evolves
pokemon_name - Name of the Pokemon that evolves
form - Only present if the Pokemon has multiple forms
evolutions - An array of objects detailing what Pokemon this can evolve into. Each object has the following keys:
candy_required - The amount of candy to evolve this Pokemon with standard means
item_required - If the Pokemon requires an item to evolve this will be the name of the item
lure_required - If the Pokemon requires a lure to evolve this will be the name of the lure
no_candy_cost_if_traded - This will be set to true if the evolution will cost no candy after trading
priority - If a priority is set then the evolution with the highest priority will be chosen above those with a lower priority when multiple evolution criteria are met
only_evolves_in_daytime - Set to true if the Pokemon will only evolve in the daytime
only_evolves_in_nighttime - Set to true if the Pokemon will only evolve at night time
must_be_buddy_to_evolve - Set if this evolution can only occur if they are your buddy
buddy_distance_required - Set if this Pokemon must have been walked a specific amount of distance to evolve
gender_required - Set to Male/Female if a specific gender is required for the evolution

**/
const DataEvolutions = [
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 2,
                "pokemon_name": "Ivysaur"
            }
        ],
        "form": "Normal",
        "pokemon_id": 1,
        "pokemon_name": "Bulbasaur"
    },
    {
        "evolutions": [
            {
                "candy_required": 22,
                "form": "Purified",
                "pokemon_id": 2,
                "pokemon_name": "Ivysaur"
            }
        ],
        "form": "Purified",
        "pokemon_id": 1,
        "pokemon_name": "Bulbasaur"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Shadow",
                "pokemon_id": 2,
                "pokemon_name": "Ivysaur"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 1,
        "pokemon_name": "Bulbasaur"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 3,
                "pokemon_name": "Venusaur"
            }
        ],
        "form": "Normal",
        "pokemon_id": 2,
        "pokemon_name": "Ivysaur"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "pokemon_id": 3,
                "pokemon_name": "Venusaur"
            }
        ],
        "form": "Purified",
        "pokemon_id": 2,
        "pokemon_name": "Ivysaur"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "pokemon_id": 3,
                "pokemon_name": "Venusaur"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 2,
        "pokemon_name": "Ivysaur"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 5,
                "pokemon_name": "Charmeleon"
            }
        ],
        "form": "Normal",
        "pokemon_id": 4,
        "pokemon_name": "Charmander"
    },
    {
        "evolutions": [
            {
                "candy_required": 22,
                "form": "Purified",
                "pokemon_id": 5,
                "pokemon_name": "Charmeleon"
            }
        ],
        "form": "Purified",
        "pokemon_id": 4,
        "pokemon_name": "Charmander"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Shadow",
                "pokemon_id": 5,
                "pokemon_name": "Charmeleon"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 4,
        "pokemon_name": "Charmander"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 6,
                "pokemon_name": "Charizard"
            }
        ],
        "form": "Normal",
        "pokemon_id": 5,
        "pokemon_name": "Charmeleon"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "pokemon_id": 6,
                "pokemon_name": "Charizard"
            }
        ],
        "form": "Purified",
        "pokemon_id": 5,
        "pokemon_name": "Charmeleon"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "pokemon_id": 6,
                "pokemon_name": "Charizard"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 5,
        "pokemon_name": "Charmeleon"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 8,
                "pokemon_name": "Wartortle"
            }
        ],
        "form": "Normal",
        "pokemon_id": 7,
        "pokemon_name": "Squirtle"
    },
    {
        "evolutions": [
            {
                "candy_required": 22,
                "form": "Purified",
                "pokemon_id": 8,
                "pokemon_name": "Wartortle"
            }
        ],
        "form": "Purified",
        "pokemon_id": 7,
        "pokemon_name": "Squirtle"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Shadow",
                "pokemon_id": 8,
                "pokemon_name": "Wartortle"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 7,
        "pokemon_name": "Squirtle"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 9,
                "pokemon_name": "Blastoise"
            }
        ],
        "form": "Normal",
        "pokemon_id": 8,
        "pokemon_name": "Wartortle"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "pokemon_id": 9,
                "pokemon_name": "Blastoise"
            }
        ],
        "form": "Purified",
        "pokemon_id": 8,
        "pokemon_name": "Wartortle"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "pokemon_id": 9,
                "pokemon_name": "Blastoise"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 8,
        "pokemon_name": "Wartortle"
    },
    {
        "evolutions": [
            {
                "candy_required": 12,
                "form": "Normal",
                "pokemon_id": 11,
                "pokemon_name": "Metapod"
            }
        ],
        "form": "Normal",
        "pokemon_id": 10,
        "pokemon_name": "Caterpie"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 12,
                "pokemon_name": "Butterfree"
            }
        ],
        "form": "Normal",
        "pokemon_id": 11,
        "pokemon_name": "Metapod"
    },
    {
        "evolutions": [
            {
                "candy_required": 12,
                "form": "Normal",
                "pokemon_id": 14,
                "pokemon_name": "Kakuna"
            }
        ],
        "form": "Normal",
        "pokemon_id": 13,
        "pokemon_name": "Weedle"
    },
    {
        "evolutions": [
            {
                "candy_required": 10,
                "form": "Purified",
                "pokemon_id": 14,
                "pokemon_name": "Kakuna"
            }
        ],
        "form": "Purified",
        "pokemon_id": 13,
        "pokemon_name": "Weedle"
    },
    {
        "evolutions": [
            {
                "candy_required": 12,
                "form": "Shadow",
                "pokemon_id": 14,
                "pokemon_name": "Kakuna"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 13,
        "pokemon_name": "Weedle"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 15,
                "pokemon_name": "Beedrill"
            }
        ],
        "form": "Normal",
        "pokemon_id": 14,
        "pokemon_name": "Kakuna"
    },
    {
        "evolutions": [
            {
                "candy_required": 45,
                "form": "Purified",
                "pokemon_id": 15,
                "pokemon_name": "Beedrill"
            }
        ],
        "form": "Purified",
        "pokemon_id": 14,
        "pokemon_name": "Kakuna"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "pokemon_id": 15,
                "pokemon_name": "Beedrill"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 14,
        "pokemon_name": "Kakuna"
    },
    {
        "evolutions": [
            {
                "candy_required": 12,
                "form": "Normal",
                "pokemon_id": 17,
                "pokemon_name": "Pidgeotto"
            }
        ],
        "form": "Normal",
        "pokemon_id": 16,
        "pokemon_name": "Pidgey"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 18,
                "pokemon_name": "Pidgeot"
            }
        ],
        "form": "Normal",
        "pokemon_id": 17,
        "pokemon_name": "Pidgeotto"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Alola",
                "pokemon_id": 20,
                "pokemon_name": "Raticate"
            }
        ],
        "form": "Alola",
        "pokemon_id": 19,
        "pokemon_name": "Rattata"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 20,
                "pokemon_name": "Raticate"
            }
        ],
        "form": "Normal",
        "pokemon_id": 19,
        "pokemon_name": "Rattata"
    },
    {
        "evolutions": [
            {
                "candy_required": 22,
                "form": "Purified",
                "pokemon_id": 20,
                "pokemon_name": "Raticate"
            }
        ],
        "form": "Purified",
        "pokemon_id": 19,
        "pokemon_name": "Rattata"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Shadow",
                "pokemon_id": 20,
                "pokemon_name": "Raticate"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 19,
        "pokemon_name": "Rattata"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 22,
                "pokemon_name": "Fearow"
            }
        ],
        "form": "Normal",
        "pokemon_id": 21,
        "pokemon_name": "Spearow"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 24,
                "pokemon_name": "Arbok"
            }
        ],
        "form": "Normal",
        "pokemon_id": 23,
        "pokemon_name": "Ekans"
    },
    {
        "evolutions": [
            {
                "candy_required": 45,
                "form": "Purified",
                "pokemon_id": 24,
                "pokemon_name": "Arbok"
            }
        ],
        "form": "Purified",
        "pokemon_id": 23,
        "pokemon_name": "Ekans"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "pokemon_id": 24,
                "pokemon_name": "Arbok"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 23,
        "pokemon_name": "Ekans"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 26,
                "pokemon_name": "Raichu"
            }
        ],
        "form": "Normal",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Alola",
                "pokemon_id": 28,
                "pokemon_name": "Sandslash"
            }
        ],
        "form": "Alola",
        "pokemon_id": 27,
        "pokemon_name": "Sandshrew"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 28,
                "pokemon_name": "Sandslash"
            }
        ],
        "form": "Normal",
        "pokemon_id": 27,
        "pokemon_name": "Sandshrew"
    },
    {
        "evolutions": [
            {
                "candy_required": 45,
                "form": "Purified",
                "pokemon_id": 28,
                "pokemon_name": "Sandslash"
            }
        ],
        "form": "Purified",
        "pokemon_id": 27,
        "pokemon_name": "Sandshrew"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "pokemon_id": 28,
                "pokemon_name": "Sandslash"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 27,
        "pokemon_name": "Sandshrew"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 30,
                "pokemon_name": "Nidorina"
            }
        ],
        "form": "Normal",
        "pokemon_id": 29,
        "pokemon_name": "Nidoran\u2640"
    },
    {
        "evolutions": [
            {
                "candy_required": 22,
                "form": "Purified",
                "pokemon_id": 30,
                "pokemon_name": "Nidorina"
            }
        ],
        "form": "Purified",
        "pokemon_id": 29,
        "pokemon_name": "Nidoran\u2640"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Shadow",
                "pokemon_id": 30,
                "pokemon_name": "Nidorina"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 29,
        "pokemon_name": "Nidoran\u2640"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 31,
                "pokemon_name": "Nidoqueen"
            }
        ],
        "form": "Normal",
        "pokemon_id": 30,
        "pokemon_name": "Nidorina"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "pokemon_id": 31,
                "pokemon_name": "Nidoqueen"
            }
        ],
        "form": "Purified",
        "pokemon_id": 30,
        "pokemon_name": "Nidorina"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "pokemon_id": 31,
                "pokemon_name": "Nidoqueen"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 30,
        "pokemon_name": "Nidorina"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 33,
                "pokemon_name": "Nidorino"
            }
        ],
        "form": "Normal",
        "pokemon_id": 32,
        "pokemon_name": "Nidoran\u2642"
    },
    {
        "evolutions": [
            {
                "candy_required": 22,
                "form": "Purified",
                "pokemon_id": 33,
                "pokemon_name": "Nidorino"
            }
        ],
        "form": "Purified",
        "pokemon_id": 32,
        "pokemon_name": "Nidoran\u2642"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Shadow",
                "pokemon_id": 33,
                "pokemon_name": "Nidorino"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 32,
        "pokemon_name": "Nidoran\u2642"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 34,
                "pokemon_name": "Nidoking"
            }
        ],
        "form": "Normal",
        "pokemon_id": 33,
        "pokemon_name": "Nidorino"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "pokemon_id": 34,
                "pokemon_name": "Nidoking"
            }
        ],
        "form": "Purified",
        "pokemon_id": 33,
        "pokemon_name": "Nidorino"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "pokemon_id": 34,
                "pokemon_name": "Nidoking"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 33,
        "pokemon_name": "Nidorino"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 36,
                "pokemon_name": "Clefable"
            }
        ],
        "form": "Normal",
        "pokemon_id": 35,
        "pokemon_name": "Clefairy"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Alola",
                "pokemon_id": 38,
                "pokemon_name": "Ninetales"
            }
        ],
        "form": "Alola",
        "pokemon_id": 37,
        "pokemon_name": "Vulpix"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 38,
                "pokemon_name": "Ninetales"
            }
        ],
        "form": "Normal",
        "pokemon_id": 37,
        "pokemon_name": "Vulpix"
    },
    {
        "evolutions": [
            {
                "candy_required": 45,
                "form": "Purified",
                "pokemon_id": 38,
                "pokemon_name": "Ninetales"
            }
        ],
        "form": "Purified",
        "pokemon_id": 37,
        "pokemon_name": "Vulpix"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "pokemon_id": 38,
                "pokemon_name": "Ninetales"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 37,
        "pokemon_name": "Vulpix"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 40,
                "pokemon_name": "Wigglytuff"
            }
        ],
        "form": "Normal",
        "pokemon_id": 39,
        "pokemon_name": "Jigglypuff"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 42,
                "pokemon_name": "Golbat"
            }
        ],
        "form": "Normal",
        "pokemon_id": 41,
        "pokemon_name": "Zubat"
    },
    {
        "evolutions": [
            {
                "candy_required": 22,
                "form": "Purified",
                "pokemon_id": 42,
                "pokemon_name": "Golbat"
            }
        ],
        "form": "Purified",
        "pokemon_id": 41,
        "pokemon_name": "Zubat"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Shadow",
                "pokemon_id": 42,
                "pokemon_name": "Golbat"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 41,
        "pokemon_name": "Zubat"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 169,
                "pokemon_name": "Crobat"
            }
        ],
        "form": "Normal",
        "pokemon_id": 42,
        "pokemon_name": "Golbat"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "pokemon_id": 169,
                "pokemon_name": "Crobat"
            }
        ],
        "form": "Purified",
        "pokemon_id": 42,
        "pokemon_name": "Golbat"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "pokemon_id": 169,
                "pokemon_name": "Crobat"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 42,
        "pokemon_name": "Golbat"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 44,
                "pokemon_name": "Gloom"
            }
        ],
        "form": "Normal",
        "pokemon_id": 43,
        "pokemon_name": "Oddish"
    },
    {
        "evolutions": [
            {
                "candy_required": 22,
                "form": "Purified",
                "pokemon_id": 44,
                "pokemon_name": "Gloom"
            }
        ],
        "form": "Purified",
        "pokemon_id": 43,
        "pokemon_name": "Oddish"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Shadow",
                "pokemon_id": 44,
                "pokemon_name": "Gloom"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 43,
        "pokemon_name": "Oddish"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 45,
                "pokemon_name": "Vileplume"
            },
            {
                "candy_required": 100,
                "form": "Normal",
                "item_required": "Sun Stone",
                "pokemon_id": 182,
                "pokemon_name": "Bellossom"
            }
        ],
        "form": "Normal",
        "pokemon_id": 44,
        "pokemon_name": "Gloom"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "pokemon_id": 45,
                "pokemon_name": "Vileplume"
            },
            {
                "candy_required": 90,
                "form": "Purified",
                "item_required": "Sun Stone",
                "pokemon_id": 182,
                "pokemon_name": "Bellossom"
            }
        ],
        "form": "Purified",
        "pokemon_id": 44,
        "pokemon_name": "Gloom"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "pokemon_id": 45,
                "pokemon_name": "Vileplume"
            },
            {
                "candy_required": 100,
                "form": "Shadow",
                "item_required": "Sun Stone",
                "pokemon_id": 182,
                "pokemon_name": "Bellossom"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 44,
        "pokemon_name": "Gloom"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 47,
                "pokemon_name": "Parasect"
            }
        ],
        "form": "Normal",
        "pokemon_id": 46,
        "pokemon_name": "Paras"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 49,
                "pokemon_name": "Venomoth"
            }
        ],
        "form": "Normal",
        "pokemon_id": 48,
        "pokemon_name": "Venonat"
    },
    {
        "evolutions": [
            {
                "candy_required": 45,
                "form": "Purified",
                "pokemon_id": 49,
                "pokemon_name": "Venomoth"
            }
        ],
        "form": "Purified",
        "pokemon_id": 48,
        "pokemon_name": "Venonat"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "pokemon_id": 49,
                "pokemon_name": "Venomoth"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 48,
        "pokemon_name": "Venonat"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Alola",
                "pokemon_id": 51,
                "pokemon_name": "Dugtrio"
            }
        ],
        "form": "Alola",
        "pokemon_id": 50,
        "pokemon_name": "Diglett"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 51,
                "pokemon_name": "Dugtrio"
            }
        ],
        "form": "Normal",
        "pokemon_id": 50,
        "pokemon_name": "Diglett"
    },
    {
        "evolutions": [
            {
                "candy_required": 45,
                "form": "Purified",
                "pokemon_id": 51,
                "pokemon_name": "Dugtrio"
            }
        ],
        "form": "Purified",
        "pokemon_id": 50,
        "pokemon_name": "Diglett"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "pokemon_id": 51,
                "pokemon_name": "Dugtrio"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 50,
        "pokemon_name": "Diglett"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Alola",
                "pokemon_id": 53,
                "pokemon_name": "Persian"
            }
        ],
        "form": "Alola",
        "pokemon_id": 52,
        "pokemon_name": "Meowth"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Galarian",
                "pokemon_id": 863,
                "pokemon_name": "Perrserker"
            }
        ],
        "form": "Galarian",
        "pokemon_id": 52,
        "pokemon_name": "Meowth"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 53,
                "pokemon_name": "Persian"
            }
        ],
        "form": "Normal",
        "pokemon_id": 52,
        "pokemon_name": "Meowth"
    },
    {
        "evolutions": [
            {
                "candy_required": 45,
                "form": "Purified",
                "pokemon_id": 53,
                "pokemon_name": "Persian"
            }
        ],
        "form": "Purified",
        "pokemon_id": 52,
        "pokemon_name": "Meowth"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "pokemon_id": 53,
                "pokemon_name": "Persian"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 52,
        "pokemon_name": "Meowth"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 55,
                "pokemon_name": "Golduck"
            }
        ],
        "form": "Normal",
        "pokemon_id": 54,
        "pokemon_name": "Psyduck"
    },
    {
        "evolutions": [
            {
                "candy_required": 45,
                "form": "Purified",
                "pokemon_id": 55,
                "pokemon_name": "Golduck"
            }
        ],
        "form": "Purified",
        "pokemon_id": 54,
        "pokemon_name": "Psyduck"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "pokemon_id": 55,
                "pokemon_name": "Golduck"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 54,
        "pokemon_name": "Psyduck"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 57,
                "pokemon_name": "Primeape"
            }
        ],
        "form": "Normal",
        "pokemon_id": 56,
        "pokemon_name": "Mankey"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 59,
                "pokemon_name": "Arcanine"
            }
        ],
        "form": "Normal",
        "pokemon_id": 58,
        "pokemon_name": "Growlithe"
    },
    {
        "evolutions": [
            {
                "candy_required": 45,
                "form": "Purified",
                "pokemon_id": 59,
                "pokemon_name": "Arcanine"
            }
        ],
        "form": "Purified",
        "pokemon_id": 58,
        "pokemon_name": "Growlithe"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "pokemon_id": 59,
                "pokemon_name": "Arcanine"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 58,
        "pokemon_name": "Growlithe"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 61,
                "pokemon_name": "Poliwhirl"
            }
        ],
        "form": "Normal",
        "pokemon_id": 60,
        "pokemon_name": "Poliwag"
    },
    {
        "evolutions": [
            {
                "candy_required": 22,
                "form": "Purified",
                "pokemon_id": 61,
                "pokemon_name": "Poliwhirl"
            }
        ],
        "form": "Purified",
        "pokemon_id": 60,
        "pokemon_name": "Poliwag"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Shadow",
                "pokemon_id": 61,
                "pokemon_name": "Poliwhirl"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 60,
        "pokemon_name": "Poliwag"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 62,
                "pokemon_name": "Poliwrath"
            },
            {
                "candy_required": 100,
                "form": "Normal",
                "item_required": "King's Rock",
                "pokemon_id": 186,
                "pokemon_name": "Politoed"
            }
        ],
        "form": "Normal",
        "pokemon_id": 61,
        "pokemon_name": "Poliwhirl"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "pokemon_id": 62,
                "pokemon_name": "Poliwrath"
            },
            {
                "candy_required": 90,
                "form": "Purified",
                "item_required": "King's Rock",
                "pokemon_id": 186,
                "pokemon_name": "Politoed"
            }
        ],
        "form": "Purified",
        "pokemon_id": 61,
        "pokemon_name": "Poliwhirl"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "pokemon_id": 62,
                "pokemon_name": "Poliwrath"
            },
            {
                "candy_required": 100,
                "form": "Shadow",
                "item_required": "King's Rock",
                "pokemon_id": 186,
                "pokemon_name": "Politoed"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 61,
        "pokemon_name": "Poliwhirl"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 64,
                "pokemon_name": "Kadabra"
            }
        ],
        "form": "Normal",
        "pokemon_id": 63,
        "pokemon_name": "Abra"
    },
    {
        "evolutions": [
            {
                "candy_required": 22,
                "form": "Purified",
                "pokemon_id": 64,
                "pokemon_name": "Kadabra"
            }
        ],
        "form": "Purified",
        "pokemon_id": 63,
        "pokemon_name": "Abra"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Shadow",
                "pokemon_id": 64,
                "pokemon_name": "Kadabra"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 63,
        "pokemon_name": "Abra"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "no_candy_cost_if_traded": true,
                "pokemon_id": 65,
                "pokemon_name": "Alakazam"
            }
        ],
        "form": "Normal",
        "pokemon_id": 64,
        "pokemon_name": "Kadabra"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "no_candy_cost_if_traded": true,
                "pokemon_id": 65,
                "pokemon_name": "Alakazam"
            }
        ],
        "form": "Purified",
        "pokemon_id": 64,
        "pokemon_name": "Kadabra"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "pokemon_id": 65,
                "pokemon_name": "Alakazam"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 64,
        "pokemon_name": "Kadabra"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 67,
                "pokemon_name": "Machoke"
            }
        ],
        "form": "Normal",
        "pokemon_id": 66,
        "pokemon_name": "Machop"
    },
    {
        "evolutions": [
            {
                "candy_required": 22,
                "form": "Purified",
                "pokemon_id": 67,
                "pokemon_name": "Machoke"
            }
        ],
        "form": "Purified",
        "pokemon_id": 66,
        "pokemon_name": "Machop"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Shadow",
                "pokemon_id": 67,
                "pokemon_name": "Machoke"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 66,
        "pokemon_name": "Machop"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "no_candy_cost_if_traded": true,
                "pokemon_id": 68,
                "pokemon_name": "Machamp"
            }
        ],
        "form": "Normal",
        "pokemon_id": 67,
        "pokemon_name": "Machoke"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "no_candy_cost_if_traded": true,
                "pokemon_id": 68,
                "pokemon_name": "Machamp"
            }
        ],
        "form": "Purified",
        "pokemon_id": 67,
        "pokemon_name": "Machoke"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "no_candy_cost_if_traded": true,
                "pokemon_id": 68,
                "pokemon_name": "Machamp"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 67,
        "pokemon_name": "Machoke"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 70,
                "pokemon_name": "Weepinbell"
            }
        ],
        "form": "Normal",
        "pokemon_id": 69,
        "pokemon_name": "Bellsprout"
    },
    {
        "evolutions": [
            {
                "candy_required": 22,
                "form": "Purified",
                "pokemon_id": 70,
                "pokemon_name": "Weepinbell"
            }
        ],
        "form": "Purified",
        "pokemon_id": 69,
        "pokemon_name": "Bellsprout"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Shadow",
                "pokemon_id": 70,
                "pokemon_name": "Weepinbell"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 69,
        "pokemon_name": "Bellsprout"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 71,
                "pokemon_name": "Victreebel"
            }
        ],
        "form": "Normal",
        "pokemon_id": 70,
        "pokemon_name": "Weepinbell"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "pokemon_id": 71,
                "pokemon_name": "Victreebel"
            }
        ],
        "form": "Purified",
        "pokemon_id": 70,
        "pokemon_name": "Weepinbell"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "pokemon_id": 71,
                "pokemon_name": "Victreebel"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 70,
        "pokemon_name": "Weepinbell"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 73,
                "pokemon_name": "Tentacruel"
            }
        ],
        "form": "Normal",
        "pokemon_id": 72,
        "pokemon_name": "Tentacool"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Alola",
                "pokemon_id": 75,
                "pokemon_name": "Graveler"
            }
        ],
        "form": "Alola",
        "pokemon_id": 74,
        "pokemon_name": "Geodude"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 75,
                "pokemon_name": "Graveler"
            }
        ],
        "form": "Normal",
        "pokemon_id": 74,
        "pokemon_name": "Geodude"
    },
    {
        "evolutions": [
            {
                "candy_required": 22,
                "form": "Purified",
                "pokemon_id": 75,
                "pokemon_name": "Graveler"
            }
        ],
        "form": "Purified",
        "pokemon_id": 74,
        "pokemon_name": "Geodude"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Shadow",
                "pokemon_id": 75,
                "pokemon_name": "Graveler"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 74,
        "pokemon_name": "Geodude"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Alola",
                "no_candy_cost_if_traded": true,
                "pokemon_id": 76,
                "pokemon_name": "Golem"
            }
        ],
        "form": "Alola",
        "pokemon_id": 75,
        "pokemon_name": "Graveler"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "no_candy_cost_if_traded": true,
                "pokemon_id": 76,
                "pokemon_name": "Golem"
            }
        ],
        "form": "Normal",
        "pokemon_id": 75,
        "pokemon_name": "Graveler"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "no_candy_cost_if_traded": true,
                "pokemon_id": 76,
                "pokemon_name": "Golem"
            }
        ],
        "form": "Purified",
        "pokemon_id": 75,
        "pokemon_name": "Graveler"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "pokemon_id": 76,
                "pokemon_name": "Golem"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 75,
        "pokemon_name": "Graveler"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Galarian",
                "pokemon_id": 78,
                "pokemon_name": "Rapidash"
            }
        ],
        "form": "Galarian",
        "pokemon_id": 77,
        "pokemon_name": "Ponyta"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 78,
                "pokemon_name": "Rapidash"
            }
        ],
        "form": "Normal",
        "pokemon_id": 77,
        "pokemon_name": "Ponyta"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Purified",
                "pokemon_id": 78,
                "pokemon_name": "Rapidash"
            }
        ],
        "form": "Purified",
        "pokemon_id": 77,
        "pokemon_name": "Ponyta"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "pokemon_id": 78,
                "pokemon_name": "Rapidash"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 77,
        "pokemon_name": "Ponyta"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "2021",
                "pokemon_id": 80,
                "pokemon_name": "Slowbro"
            }
        ],
        "form": "2020",
        "pokemon_id": 79,
        "pokemon_name": "Slowpoke"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Galarian",
                "pokemon_id": 80,
                "pokemon_name": "Slowbro"
            }
        ],
        "form": "Galarian",
        "pokemon_id": 79,
        "pokemon_name": "Slowpoke"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 80,
                "pokemon_name": "Slowbro"
            },
            {
                "candy_required": 50,
                "form": "Normal",
                "item_required": "King's Rock",
                "pokemon_id": 199,
                "pokemon_name": "Slowking"
            }
        ],
        "form": "Normal",
        "pokemon_id": 79,
        "pokemon_name": "Slowpoke"
    },
    {
        "evolutions": [
            {
                "candy_required": 45,
                "form": "Purified",
                "pokemon_id": 80,
                "pokemon_name": "Slowbro"
            },
            {
                "candy_required": 45,
                "form": "Purified",
                "item_required": "King's Rock",
                "pokemon_id": 199,
                "pokemon_name": "Slowking"
            }
        ],
        "form": "Purified",
        "pokemon_id": 79,
        "pokemon_name": "Slowpoke"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "pokemon_id": 80,
                "pokemon_name": "Slowbro"
            },
            {
                "candy_required": 50,
                "form": "Shadow",
                "item_required": "King's Rock",
                "pokemon_id": 199,
                "pokemon_name": "Slowking"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 79,
        "pokemon_name": "Slowpoke"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 82,
                "pokemon_name": "Magneton"
            }
        ],
        "form": "Normal",
        "pokemon_id": 81,
        "pokemon_name": "Magnemite"
    },
    {
        "evolutions": [
            {
                "candy_required": 22,
                "form": "Purified",
                "pokemon_id": 82,
                "pokemon_name": "Magneton"
            }
        ],
        "form": "Purified",
        "pokemon_id": 81,
        "pokemon_name": "Magnemite"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Shadow",
                "pokemon_id": 82,
                "pokemon_name": "Magneton"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 81,
        "pokemon_name": "Magnemite"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "lure_required": "Magnetic Lure Module",
                "pokemon_id": 462,
                "pokemon_name": "Magnezone"
            }
        ],
        "form": "Normal",
        "pokemon_id": 82,
        "pokemon_name": "Magneton"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "lure_required": "Magnetic Lure Module",
                "pokemon_id": 462,
                "pokemon_name": "Magnezone"
            }
        ],
        "form": "Purified",
        "pokemon_id": 82,
        "pokemon_name": "Magneton"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "lure_required": "Magnetic Lure Module",
                "pokemon_id": 462,
                "pokemon_name": "Magnezone"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 82,
        "pokemon_name": "Magneton"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Galarian",
                "pokemon_id": 865,
                "pokemon_name": "Sirfetch\u2019d"
            }
        ],
        "form": "Galarian",
        "pokemon_id": 83,
        "pokemon_name": "Farfetch\u2019d"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 85,
                "pokemon_name": "Dodrio"
            }
        ],
        "form": "Normal",
        "pokemon_id": 84,
        "pokemon_name": "Doduo"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 87,
                "pokemon_name": "Dewgong"
            }
        ],
        "form": "Normal",
        "pokemon_id": 86,
        "pokemon_name": "Seel"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Alola",
                "pokemon_id": 89,
                "pokemon_name": "Muk"
            }
        ],
        "form": "Alola",
        "pokemon_id": 88,
        "pokemon_name": "Grimer"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 89,
                "pokemon_name": "Muk"
            }
        ],
        "form": "Normal",
        "pokemon_id": 88,
        "pokemon_name": "Grimer"
    },
    {
        "evolutions": [
            {
                "candy_required": 45,
                "form": "Purified",
                "pokemon_id": 89,
                "pokemon_name": "Muk"
            }
        ],
        "form": "Purified",
        "pokemon_id": 88,
        "pokemon_name": "Grimer"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "pokemon_id": 89,
                "pokemon_name": "Muk"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 88,
        "pokemon_name": "Grimer"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 91,
                "pokemon_name": "Cloyster"
            }
        ],
        "form": "Normal",
        "pokemon_id": 90,
        "pokemon_name": "Shellder"
    },
    {
        "evolutions": [
            {
                "candy_required": 45,
                "form": "Purified",
                "pokemon_id": 91,
                "pokemon_name": "Cloyster"
            }
        ],
        "form": "Purified",
        "pokemon_id": 90,
        "pokemon_name": "Shellder"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "pokemon_id": 91,
                "pokemon_name": "Cloyster"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 90,
        "pokemon_name": "Shellder"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 93,
                "pokemon_name": "Haunter"
            }
        ],
        "form": "Normal",
        "pokemon_id": 92,
        "pokemon_name": "Gastly"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "no_candy_cost_if_traded": true,
                "pokemon_id": 94,
                "pokemon_name": "Gengar"
            }
        ],
        "form": "Normal",
        "pokemon_id": 93,
        "pokemon_name": "Haunter"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "item_required": "Metal Coat",
                "pokemon_id": 208,
                "pokemon_name": "Steelix"
            }
        ],
        "form": "Normal",
        "pokemon_id": 95,
        "pokemon_name": "Onix"
    },
    {
        "evolutions": [
            {
                "candy_required": 45,
                "form": "Purified",
                "item_required": "Metal Coat",
                "pokemon_id": 208,
                "pokemon_name": "Steelix"
            }
        ],
        "form": "Purified",
        "pokemon_id": 95,
        "pokemon_name": "Onix"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "item_required": "Metal Coat",
                "pokemon_id": 208,
                "pokemon_name": "Steelix"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 95,
        "pokemon_name": "Onix"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 97,
                "pokemon_name": "Hypno"
            }
        ],
        "form": "Normal",
        "pokemon_id": 96,
        "pokemon_name": "Drowzee"
    },
    {
        "evolutions": [
            {
                "candy_required": 45,
                "form": "Purified",
                "pokemon_id": 97,
                "pokemon_name": "Hypno"
            }
        ],
        "form": "Purified",
        "pokemon_id": 96,
        "pokemon_name": "Drowzee"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "pokemon_id": 97,
                "pokemon_name": "Hypno"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 96,
        "pokemon_name": "Drowzee"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 99,
                "pokemon_name": "Kingler"
            }
        ],
        "form": "Normal",
        "pokemon_id": 98,
        "pokemon_name": "Krabby"
    },
    {
        "evolutions": [
            {
                "candy_required": 45,
                "form": "Purified",
                "pokemon_id": 99,
                "pokemon_name": "Kingler"
            }
        ],
        "form": "Purified",
        "pokemon_id": 98,
        "pokemon_name": "Krabby"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "pokemon_id": 99,
                "pokemon_name": "Kingler"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 98,
        "pokemon_name": "Krabby"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 101,
                "pokemon_name": "Electrode"
            }
        ],
        "form": "Normal",
        "pokemon_id": 100,
        "pokemon_name": "Voltorb"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 103,
                "pokemon_name": "Exeggutor"
            }
        ],
        "form": "Normal",
        "pokemon_id": 102,
        "pokemon_name": "Exeggcute"
    },
    {
        "evolutions": [
            {
                "candy_required": 45,
                "form": "Purified",
                "pokemon_id": 103,
                "pokemon_name": "Exeggutor"
            }
        ],
        "form": "Purified",
        "pokemon_id": 102,
        "pokemon_name": "Exeggcute"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "pokemon_id": 103,
                "pokemon_name": "Exeggutor"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 102,
        "pokemon_name": "Exeggcute"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 105,
                "pokemon_name": "Marowak"
            }
        ],
        "form": "Normal",
        "pokemon_id": 104,
        "pokemon_name": "Cubone"
    },
    {
        "evolutions": [
            {
                "candy_required": 45,
                "form": "Purified",
                "pokemon_id": 105,
                "pokemon_name": "Marowak"
            }
        ],
        "form": "Purified",
        "pokemon_id": 104,
        "pokemon_name": "Cubone"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "pokemon_id": 105,
                "pokemon_name": "Marowak"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 104,
        "pokemon_name": "Cubone"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 463,
                "pokemon_name": "Lickilicky"
            }
        ],
        "form": "Normal",
        "pokemon_id": 108,
        "pokemon_name": "Lickitung"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 110,
                "pokemon_name": "Weezing"
            }
        ],
        "form": "Normal",
        "pokemon_id": 109,
        "pokemon_name": "Koffing"
    },
    {
        "evolutions": [
            {
                "candy_required": 45,
                "form": "Purified",
                "pokemon_id": 110,
                "pokemon_name": "Weezing"
            }
        ],
        "form": "Purified",
        "pokemon_id": 109,
        "pokemon_name": "Koffing"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "pokemon_id": 110,
                "pokemon_name": "Weezing"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 109,
        "pokemon_name": "Koffing"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 112,
                "pokemon_name": "Rhydon"
            }
        ],
        "form": "Normal",
        "pokemon_id": 111,
        "pokemon_name": "Rhyhorn"
    },
    {
        "evolutions": [
            {
                "candy_required": 22,
                "form": "Purified",
                "pokemon_id": 112,
                "pokemon_name": "Rhydon"
            }
        ],
        "form": "Purified",
        "pokemon_id": 111,
        "pokemon_name": "Rhyhorn"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Shadow",
                "pokemon_id": 112,
                "pokemon_name": "Rhydon"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 111,
        "pokemon_name": "Rhyhorn"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 464,
                "pokemon_name": "Rhyperior"
            }
        ],
        "form": "Normal",
        "pokemon_id": 112,
        "pokemon_name": "Rhydon"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 464,
                "pokemon_name": "Rhyperior"
            }
        ],
        "form": "Purified",
        "pokemon_id": 112,
        "pokemon_name": "Rhydon"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 464,
                "pokemon_name": "Rhyperior"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 112,
        "pokemon_name": "Rhydon"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 242,
                "pokemon_name": "Blissey"
            }
        ],
        "form": "Normal",
        "pokemon_id": 113,
        "pokemon_name": "Chansey"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 465,
                "pokemon_name": "Tangrowth"
            }
        ],
        "form": "Normal",
        "pokemon_id": 114,
        "pokemon_name": "Tangela"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 465,
                "pokemon_name": "Tangrowth"
            }
        ],
        "form": "Purified",
        "pokemon_id": 114,
        "pokemon_name": "Tangela"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 465,
                "pokemon_name": "Tangrowth"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 114,
        "pokemon_name": "Tangela"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 117,
                "pokemon_name": "Seadra"
            }
        ],
        "form": "Normal",
        "pokemon_id": 116,
        "pokemon_name": "Horsea"
    },
    {
        "evolutions": [
            {
                "candy_required": 22,
                "form": "Purified",
                "pokemon_id": 117,
                "pokemon_name": "Seadra"
            }
        ],
        "form": "Purified",
        "pokemon_id": 116,
        "pokemon_name": "Horsea"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Shadow",
                "pokemon_id": 117,
                "pokemon_name": "Seadra"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 116,
        "pokemon_name": "Horsea"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "item_required": "Dragon Scale",
                "pokemon_id": 230,
                "pokemon_name": "Kingdra"
            }
        ],
        "form": "Normal",
        "pokemon_id": 117,
        "pokemon_name": "Seadra"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "item_required": "Dragon Scale",
                "pokemon_id": 230,
                "pokemon_name": "Kingdra"
            }
        ],
        "form": "Purified",
        "pokemon_id": 117,
        "pokemon_name": "Seadra"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "item_required": "Dragon Scale",
                "pokemon_id": 230,
                "pokemon_name": "Kingdra"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 117,
        "pokemon_name": "Seadra"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 119,
                "pokemon_name": "Seaking"
            }
        ],
        "form": "Normal",
        "pokemon_id": 118,
        "pokemon_name": "Goldeen"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 121,
                "pokemon_name": "Starmie"
            }
        ],
        "form": "Normal",
        "pokemon_id": 120,
        "pokemon_name": "Staryu"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Rime_normal",
                "pokemon_id": 866,
                "pokemon_name": "Mr. Rime"
            }
        ],
        "form": "Galarian",
        "pokemon_id": 122,
        "pokemon_name": "Mr. Mime"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "item_required": "Metal Coat",
                "pokemon_id": 212,
                "pokemon_name": "Scizor"
            }
        ],
        "form": "Normal",
        "pokemon_id": 123,
        "pokemon_name": "Scyther"
    },
    {
        "evolutions": [
            {
                "candy_required": 45,
                "form": "Purified",
                "item_required": "Metal Coat",
                "pokemon_id": 212,
                "pokemon_name": "Scizor"
            }
        ],
        "form": "Purified",
        "pokemon_id": 123,
        "pokemon_name": "Scyther"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "item_required": "Metal Coat",
                "pokemon_id": 212,
                "pokemon_name": "Scizor"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 123,
        "pokemon_name": "Scyther"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 466,
                "pokemon_name": "Electivire"
            }
        ],
        "form": "Normal",
        "pokemon_id": 125,
        "pokemon_name": "Electabuzz"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 466,
                "pokemon_name": "Electivire"
            }
        ],
        "form": "Purified",
        "pokemon_id": 125,
        "pokemon_name": "Electabuzz"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 466,
                "pokemon_name": "Electivire"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 125,
        "pokemon_name": "Electabuzz"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 467,
                "pokemon_name": "Magmortar"
            }
        ],
        "form": "Normal",
        "pokemon_id": 126,
        "pokemon_name": "Magmar"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 467,
                "pokemon_name": "Magmortar"
            }
        ],
        "form": "Purified",
        "pokemon_id": 126,
        "pokemon_name": "Magmar"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 467,
                "pokemon_name": "Magmortar"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 126,
        "pokemon_name": "Magmar"
    },
    {
        "evolutions": [
            {
                "candy_required": 400,
                "form": "Normal",
                "pokemon_id": 130,
                "pokemon_name": "Gyarados"
            }
        ],
        "form": "Normal",
        "pokemon_id": 129,
        "pokemon_name": "Magikarp"
    },
    {
        "evolutions": [
            {
                "candy_required": 360,
                "form": "Purified",
                "pokemon_id": 130,
                "pokemon_name": "Gyarados"
            }
        ],
        "form": "Purified",
        "pokemon_id": 129,
        "pokemon_name": "Magikarp"
    },
    {
        "evolutions": [
            {
                "candy_required": 400,
                "form": "Shadow",
                "pokemon_id": 130,
                "pokemon_name": "Gyarados"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 129,
        "pokemon_name": "Magikarp"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 134,
                "pokemon_name": "Vaporeon"
            },
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 135,
                "pokemon_name": "Jolteon"
            },
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 136,
                "pokemon_name": "Flareon"
            },
            {
                "buddy_distance_required": 10.0,
                "candy_required": 25,
                "form": "Normal",
                "must_be_buddy_to_evolve": true,
                "only_evolves_in_daytime": true,
                "pokemon_id": 196,
                "pokemon_name": "Espeon",
                "priority": 100
            },
            {
                "buddy_distance_required": 10.0,
                "candy_required": 25,
                "form": "Normal",
                "must_be_buddy_to_evolve": true,
                "only_evolves_in_nighttime": true,
                "pokemon_id": 197,
                "pokemon_name": "Umbreon",
                "priority": 100
            },
            {
                "candy_required": 25,
                "form": "Normal",
                "lure_required": "Mossy Lure Module",
                "pokemon_id": 470,
                "pokemon_name": "Leafeon",
                "priority": 200
            },
            {
                "candy_required": 25,
                "form": "Normal",
                "lure_required": "Glacial Lure Module",
                "pokemon_id": 471,
                "pokemon_name": "Glaceon",
                "priority": 200
            },
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 700,
                "pokemon_name": "Sylveon",
                "priority": 100
            }
        ],
        "form": "Normal",
        "pokemon_id": 133,
        "pokemon_name": "Eevee"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "item_required": "Upgrade",
                "pokemon_id": 233,
                "pokemon_name": "Porygon2"
            }
        ],
        "form": "Normal",
        "pokemon_id": 137,
        "pokemon_name": "Porygon"
    },
    {
        "evolutions": [
            {
                "candy_required": 22,
                "form": "Purified",
                "item_required": "Upgrade",
                "pokemon_id": 233,
                "pokemon_name": "Porygon2"
            }
        ],
        "form": "Purified",
        "pokemon_id": 137,
        "pokemon_name": "Porygon"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Shadow",
                "item_required": "Upgrade",
                "pokemon_id": 233,
                "pokemon_name": "Porygon2"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 137,
        "pokemon_name": "Porygon"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 139,
                "pokemon_name": "Omastar"
            }
        ],
        "form": "Normal",
        "pokemon_id": 138,
        "pokemon_name": "Omanyte"
    },
    {
        "evolutions": [
            {
                "candy_required": 45,
                "form": "Purified",
                "pokemon_id": 139,
                "pokemon_name": "Omastar"
            }
        ],
        "form": "Purified",
        "pokemon_id": 138,
        "pokemon_name": "Omanyte"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "pokemon_id": 139,
                "pokemon_name": "Omastar"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 138,
        "pokemon_name": "Omanyte"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 141,
                "pokemon_name": "Kabutops"
            }
        ],
        "form": "Normal",
        "pokemon_id": 140,
        "pokemon_name": "Kabuto"
    },
    {
        "evolutions": [
            {
                "candy_required": 45,
                "form": "Purified",
                "pokemon_id": 141,
                "pokemon_name": "Kabutops"
            }
        ],
        "form": "Purified",
        "pokemon_id": 140,
        "pokemon_name": "Kabuto"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "pokemon_id": 141,
                "pokemon_name": "Kabutops"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 140,
        "pokemon_name": "Kabuto"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 148,
                "pokemon_name": "Dragonair"
            }
        ],
        "form": "Normal",
        "pokemon_id": 147,
        "pokemon_name": "Dratini"
    },
    {
        "evolutions": [
            {
                "candy_required": 22,
                "form": "Purified",
                "pokemon_id": 148,
                "pokemon_name": "Dragonair"
            }
        ],
        "form": "Purified",
        "pokemon_id": 147,
        "pokemon_name": "Dratini"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Shadow",
                "pokemon_id": 148,
                "pokemon_name": "Dragonair"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 147,
        "pokemon_name": "Dratini"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 149,
                "pokemon_name": "Dragonite"
            }
        ],
        "form": "Normal",
        "pokemon_id": 148,
        "pokemon_name": "Dragonair"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "pokemon_id": 149,
                "pokemon_name": "Dragonite"
            }
        ],
        "form": "Purified",
        "pokemon_id": 148,
        "pokemon_name": "Dragonair"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "pokemon_id": 149,
                "pokemon_name": "Dragonite"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 148,
        "pokemon_name": "Dragonair"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 153,
                "pokemon_name": "Bayleef"
            }
        ],
        "form": "Normal",
        "pokemon_id": 152,
        "pokemon_name": "Chikorita"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 154,
                "pokemon_name": "Meganium"
            }
        ],
        "form": "Normal",
        "pokemon_id": 153,
        "pokemon_name": "Bayleef"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 156,
                "pokemon_name": "Quilava"
            }
        ],
        "form": "Normal",
        "pokemon_id": 155,
        "pokemon_name": "Cyndaquil"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 157,
                "pokemon_name": "Typhlosion"
            }
        ],
        "form": "Normal",
        "pokemon_id": 156,
        "pokemon_name": "Quilava"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 159,
                "pokemon_name": "Croconaw"
            }
        ],
        "form": "Normal",
        "pokemon_id": 158,
        "pokemon_name": "Totodile"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 160,
                "pokemon_name": "Feraligatr"
            }
        ],
        "form": "Normal",
        "pokemon_id": 159,
        "pokemon_name": "Croconaw"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 162,
                "pokemon_name": "Furret"
            }
        ],
        "form": "Normal",
        "pokemon_id": 161,
        "pokemon_name": "Sentret"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 164,
                "pokemon_name": "Noctowl"
            }
        ],
        "form": "Normal",
        "pokemon_id": 163,
        "pokemon_name": "Hoothoot"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 166,
                "pokemon_name": "Ledian"
            }
        ],
        "form": "Normal",
        "pokemon_id": 165,
        "pokemon_name": "Ledyba"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 168,
                "pokemon_name": "Ariados"
            }
        ],
        "form": "Normal",
        "pokemon_id": 167,
        "pokemon_name": "Spinarak"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 171,
                "pokemon_name": "Lanturn"
            }
        ],
        "form": "Normal",
        "pokemon_id": 170,
        "pokemon_name": "Chinchou"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 25,
                "pokemon_name": "Pikachu"
            }
        ],
        "form": "Normal",
        "pokemon_id": 172,
        "pokemon_name": "Pichu"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 35,
                "pokemon_name": "Clefairy"
            }
        ],
        "form": "Normal",
        "pokemon_id": 173,
        "pokemon_name": "Cleffa"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 39,
                "pokemon_name": "Jigglypuff"
            }
        ],
        "form": "Normal",
        "pokemon_id": 174,
        "pokemon_name": "Igglybuff"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 176,
                "pokemon_name": "Togetic"
            }
        ],
        "form": "Normal",
        "pokemon_id": 175,
        "pokemon_name": "Togepi"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 468,
                "pokemon_name": "Togekiss"
            }
        ],
        "form": "Normal",
        "pokemon_id": 176,
        "pokemon_name": "Togetic"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 178,
                "pokemon_name": "Xatu"
            }
        ],
        "form": "Normal",
        "pokemon_id": 177,
        "pokemon_name": "Natu"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 180,
                "pokemon_name": "Flaaffy"
            }
        ],
        "form": "Normal",
        "pokemon_id": 179,
        "pokemon_name": "Mareep"
    },
    {
        "evolutions": [
            {
                "candy_required": 22,
                "form": "Purified",
                "pokemon_id": 180,
                "pokemon_name": "Flaaffy"
            }
        ],
        "form": "Purified",
        "pokemon_id": 179,
        "pokemon_name": "Mareep"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Shadow",
                "pokemon_id": 180,
                "pokemon_name": "Flaaffy"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 179,
        "pokemon_name": "Mareep"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 181,
                "pokemon_name": "Ampharos"
            }
        ],
        "form": "Normal",
        "pokemon_id": 180,
        "pokemon_name": "Flaaffy"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "pokemon_id": 181,
                "pokemon_name": "Ampharos"
            }
        ],
        "form": "Purified",
        "pokemon_id": 180,
        "pokemon_name": "Flaaffy"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "pokemon_id": 181,
                "pokemon_name": "Ampharos"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 180,
        "pokemon_name": "Flaaffy"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 184,
                "pokemon_name": "Azumarill"
            }
        ],
        "form": "Normal",
        "pokemon_id": 183,
        "pokemon_name": "Marill"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 188,
                "pokemon_name": "Skiploom"
            }
        ],
        "form": "Normal",
        "pokemon_id": 187,
        "pokemon_name": "Hoppip"
    },
    {
        "evolutions": [
            {
                "candy_required": 22,
                "form": "Purified",
                "pokemon_id": 188,
                "pokemon_name": "Skiploom"
            }
        ],
        "form": "Purified",
        "pokemon_id": 187,
        "pokemon_name": "Hoppip"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Shadow",
                "pokemon_id": 188,
                "pokemon_name": "Skiploom"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 187,
        "pokemon_name": "Hoppip"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 189,
                "pokemon_name": "Jumpluff"
            }
        ],
        "form": "Normal",
        "pokemon_id": 188,
        "pokemon_name": "Skiploom"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "pokemon_id": 189,
                "pokemon_name": "Jumpluff"
            }
        ],
        "form": "Purified",
        "pokemon_id": 188,
        "pokemon_name": "Skiploom"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "pokemon_id": 189,
                "pokemon_name": "Jumpluff"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 188,
        "pokemon_name": "Skiploom"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 424,
                "pokemon_name": "Ambipom"
            }
        ],
        "form": "Normal",
        "pokemon_id": 190,
        "pokemon_name": "Aipom"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 424,
                "pokemon_name": "Ambipom"
            }
        ],
        "form": "Purified",
        "pokemon_id": 190,
        "pokemon_name": "Aipom"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 424,
                "pokemon_name": "Ambipom"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 190,
        "pokemon_name": "Aipom"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "item_required": "Sun Stone",
                "pokemon_id": 192,
                "pokemon_name": "Sunflora"
            }
        ],
        "form": "Normal",
        "pokemon_id": 191,
        "pokemon_name": "Sunkern"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 469,
                "pokemon_name": "Yanmega"
            }
        ],
        "form": "Normal",
        "pokemon_id": 193,
        "pokemon_name": "Yanma"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 195,
                "pokemon_name": "Quagsire"
            }
        ],
        "form": "Normal",
        "pokemon_id": 194,
        "pokemon_name": "Wooper"
    },
    {
        "evolutions": [
            {
                "candy_required": 45,
                "form": "Purified",
                "pokemon_id": 195,
                "pokemon_name": "Quagsire"
            }
        ],
        "form": "Purified",
        "pokemon_id": 194,
        "pokemon_name": "Wooper"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "pokemon_id": 195,
                "pokemon_name": "Quagsire"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 194,
        "pokemon_name": "Wooper"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 430,
                "pokemon_name": "Honchkrow"
            }
        ],
        "form": "Normal",
        "pokemon_id": 198,
        "pokemon_name": "Murkrow"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 430,
                "pokemon_name": "Honchkrow"
            }
        ],
        "form": "Purified",
        "pokemon_id": 198,
        "pokemon_name": "Murkrow"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 430,
                "pokemon_name": "Honchkrow"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 198,
        "pokemon_name": "Murkrow"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 429,
                "pokemon_name": "Mismagius"
            }
        ],
        "form": "Normal",
        "pokemon_id": 200,
        "pokemon_name": "Misdreavus"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 429,
                "pokemon_name": "Mismagius"
            }
        ],
        "form": "Purified",
        "pokemon_id": 200,
        "pokemon_name": "Misdreavus"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 429,
                "pokemon_name": "Mismagius"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 200,
        "pokemon_name": "Misdreavus"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 205,
                "pokemon_name": "Forretress"
            }
        ],
        "form": "Normal",
        "pokemon_id": 204,
        "pokemon_name": "Pineco"
    },
    {
        "evolutions": [
            {
                "candy_required": 45,
                "form": "Purified",
                "pokemon_id": 205,
                "pokemon_name": "Forretress"
            }
        ],
        "form": "Purified",
        "pokemon_id": 204,
        "pokemon_name": "Pineco"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "pokemon_id": 205,
                "pokemon_name": "Forretress"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 204,
        "pokemon_name": "Pineco"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 472,
                "pokemon_name": "Gliscor"
            }
        ],
        "form": "Normal",
        "pokemon_id": 207,
        "pokemon_name": "Gligar"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 472,
                "pokemon_name": "Gliscor"
            }
        ],
        "form": "Purified",
        "pokemon_id": 207,
        "pokemon_name": "Gligar"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 472,
                "pokemon_name": "Gliscor"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 207,
        "pokemon_name": "Gligar"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 210,
                "pokemon_name": "Granbull"
            }
        ],
        "form": "Normal",
        "pokemon_id": 209,
        "pokemon_name": "Snubbull"
    },
    {
        "evolutions": [
            {
                "candy_required": 45,
                "form": "Purified",
                "pokemon_id": 210,
                "pokemon_name": "Granbull"
            }
        ],
        "form": "Purified",
        "pokemon_id": 209,
        "pokemon_name": "Snubbull"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "pokemon_id": 210,
                "pokemon_name": "Granbull"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 209,
        "pokemon_name": "Snubbull"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 461,
                "pokemon_name": "Weavile"
            }
        ],
        "form": "Normal",
        "pokemon_id": 215,
        "pokemon_name": "Sneasel"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 461,
                "pokemon_name": "Weavile"
            }
        ],
        "form": "Purified",
        "pokemon_id": 215,
        "pokemon_name": "Sneasel"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 461,
                "pokemon_name": "Weavile"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 215,
        "pokemon_name": "Sneasel"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 217,
                "pokemon_name": "Ursaring"
            }
        ],
        "form": "Normal",
        "pokemon_id": 216,
        "pokemon_name": "Teddiursa"
    },
    {
        "evolutions": [
            {
                "candy_required": 45,
                "form": "Purified",
                "pokemon_id": 217,
                "pokemon_name": "Ursaring"
            }
        ],
        "form": "Purified",
        "pokemon_id": 216,
        "pokemon_name": "Teddiursa"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "pokemon_id": 217,
                "pokemon_name": "Ursaring"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 216,
        "pokemon_name": "Teddiursa"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 219,
                "pokemon_name": "Magcargo"
            }
        ],
        "form": "Normal",
        "pokemon_id": 218,
        "pokemon_name": "Slugma"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 221,
                "pokemon_name": "Piloswine"
            }
        ],
        "form": "Normal",
        "pokemon_id": 220,
        "pokemon_name": "Swinub"
    },
    {
        "evolutions": [
            {
                "candy_required": 22,
                "form": "Purified",
                "pokemon_id": 221,
                "pokemon_name": "Piloswine"
            }
        ],
        "form": "Purified",
        "pokemon_id": 220,
        "pokemon_name": "Swinub"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Shadow",
                "pokemon_id": 221,
                "pokemon_name": "Piloswine"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 220,
        "pokemon_name": "Swinub"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 473,
                "pokemon_name": "Mamoswine"
            }
        ],
        "form": "Normal",
        "pokemon_id": 221,
        "pokemon_name": "Piloswine"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 473,
                "pokemon_name": "Mamoswine"
            }
        ],
        "form": "Purified",
        "pokemon_id": 221,
        "pokemon_name": "Piloswine"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 473,
                "pokemon_name": "Mamoswine"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 221,
        "pokemon_name": "Piloswine"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 224,
                "pokemon_name": "Octillery"
            }
        ],
        "form": "Normal",
        "pokemon_id": 223,
        "pokemon_name": "Remoraid"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 229,
                "pokemon_name": "Houndoom"
            }
        ],
        "form": "Normal",
        "pokemon_id": 228,
        "pokemon_name": "Houndour"
    },
    {
        "evolutions": [
            {
                "candy_required": 45,
                "form": "Purified",
                "pokemon_id": 229,
                "pokemon_name": "Houndoom"
            }
        ],
        "form": "Purified",
        "pokemon_id": 228,
        "pokemon_name": "Houndour"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "pokemon_id": 229,
                "pokemon_name": "Houndoom"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 228,
        "pokemon_name": "Houndour"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 232,
                "pokemon_name": "Donphan"
            }
        ],
        "form": "Normal",
        "pokemon_id": 231,
        "pokemon_name": "Phanpy"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 474,
                "pokemon_name": "Porygon-Z"
            }
        ],
        "form": "Normal",
        "pokemon_id": 233,
        "pokemon_name": "Porygon2"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 474,
                "pokemon_name": "Porygon-Z"
            }
        ],
        "form": "Purified",
        "pokemon_id": 233,
        "pokemon_name": "Porygon2"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 474,
                "pokemon_name": "Porygon-Z"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 233,
        "pokemon_name": "Porygon2"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 106,
                "pokemon_name": "Hitmonlee"
            },
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 107,
                "pokemon_name": "Hitmonchan"
            },
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 237,
                "pokemon_name": "Hitmontop"
            }
        ],
        "form": "Normal",
        "pokemon_id": 236,
        "pokemon_name": "Tyrogue"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 124,
                "pokemon_name": "Jynx"
            }
        ],
        "form": "Normal",
        "pokemon_id": 238,
        "pokemon_name": "Smoochum"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 125,
                "pokemon_name": "Electabuzz"
            }
        ],
        "form": "Normal",
        "pokemon_id": 239,
        "pokemon_name": "Elekid"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 126,
                "pokemon_name": "Magmar"
            }
        ],
        "form": "Normal",
        "pokemon_id": 240,
        "pokemon_name": "Magby"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 247,
                "pokemon_name": "Pupitar"
            }
        ],
        "form": "Normal",
        "pokemon_id": 246,
        "pokemon_name": "Larvitar"
    },
    {
        "evolutions": [
            {
                "candy_required": 22,
                "form": "Purified",
                "pokemon_id": 247,
                "pokemon_name": "Pupitar"
            }
        ],
        "form": "Purified",
        "pokemon_id": 246,
        "pokemon_name": "Larvitar"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Shadow",
                "pokemon_id": 247,
                "pokemon_name": "Pupitar"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 246,
        "pokemon_name": "Larvitar"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 248,
                "pokemon_name": "Tyranitar"
            }
        ],
        "form": "Normal",
        "pokemon_id": 247,
        "pokemon_name": "Pupitar"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "pokemon_id": 248,
                "pokemon_name": "Tyranitar"
            }
        ],
        "form": "Purified",
        "pokemon_id": 247,
        "pokemon_name": "Pupitar"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "pokemon_id": 248,
                "pokemon_name": "Tyranitar"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 247,
        "pokemon_name": "Pupitar"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 253,
                "pokemon_name": "Grovyle"
            }
        ],
        "form": "Normal",
        "pokemon_id": 252,
        "pokemon_name": "Treecko"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 254,
                "pokemon_name": "Sceptile"
            }
        ],
        "form": "Normal",
        "pokemon_id": 253,
        "pokemon_name": "Grovyle"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 256,
                "pokemon_name": "Combusken"
            }
        ],
        "form": "Normal",
        "pokemon_id": 255,
        "pokemon_name": "Torchic"
    },
    {
        "evolutions": [
            {
                "candy_required": 22,
                "form": "Purified",
                "pokemon_id": 256,
                "pokemon_name": "Combusken"
            }
        ],
        "form": "Purified",
        "pokemon_id": 255,
        "pokemon_name": "Torchic"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Shadow",
                "pokemon_id": 256,
                "pokemon_name": "Combusken"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 255,
        "pokemon_name": "Torchic"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 257,
                "pokemon_name": "Blaziken"
            }
        ],
        "form": "Normal",
        "pokemon_id": 256,
        "pokemon_name": "Combusken"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "pokemon_id": 257,
                "pokemon_name": "Blaziken"
            }
        ],
        "form": "Purified",
        "pokemon_id": 256,
        "pokemon_name": "Combusken"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "pokemon_id": 257,
                "pokemon_name": "Blaziken"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 256,
        "pokemon_name": "Combusken"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 259,
                "pokemon_name": "Marshtomp"
            }
        ],
        "form": "Normal",
        "pokemon_id": 258,
        "pokemon_name": "Mudkip"
    },
    {
        "evolutions": [
            {
                "candy_required": 22,
                "form": "Purified",
                "pokemon_id": 259,
                "pokemon_name": "Marshtomp"
            }
        ],
        "form": "Purified",
        "pokemon_id": 258,
        "pokemon_name": "Mudkip"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Shadow",
                "pokemon_id": 259,
                "pokemon_name": "Marshtomp"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 258,
        "pokemon_name": "Mudkip"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 260,
                "pokemon_name": "Swampert"
            }
        ],
        "form": "Normal",
        "pokemon_id": 259,
        "pokemon_name": "Marshtomp"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "pokemon_id": 260,
                "pokemon_name": "Swampert"
            }
        ],
        "form": "Purified",
        "pokemon_id": 259,
        "pokemon_name": "Marshtomp"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "pokemon_id": 260,
                "pokemon_name": "Swampert"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 259,
        "pokemon_name": "Marshtomp"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 262,
                "pokemon_name": "Mightyena"
            }
        ],
        "form": "Normal",
        "pokemon_id": 261,
        "pokemon_name": "Poochyena"
    },
    {
        "evolutions": [
            {
                "candy_required": 45,
                "form": "Purified",
                "pokemon_id": 262,
                "pokemon_name": "Mightyena"
            }
        ],
        "form": "Purified",
        "pokemon_id": 261,
        "pokemon_name": "Poochyena"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "pokemon_id": 262,
                "pokemon_name": "Mightyena"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 261,
        "pokemon_name": "Poochyena"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Galarian",
                "pokemon_id": 264,
                "pokemon_name": "Linoone"
            }
        ],
        "form": "Galarian",
        "pokemon_id": 263,
        "pokemon_name": "Zigzagoon"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 264,
                "pokemon_name": "Linoone"
            }
        ],
        "form": "Normal",
        "pokemon_id": 263,
        "pokemon_name": "Zigzagoon"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Purified",
                "pokemon_id": 264,
                "pokemon_name": "Linoone"
            }
        ],
        "form": "Purified",
        "pokemon_id": 263,
        "pokemon_name": "Zigzagoon"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "pokemon_id": 264,
                "pokemon_name": "Linoone"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 263,
        "pokemon_name": "Zigzagoon"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Galarian",
                "pokemon_id": 862,
                "pokemon_name": "Obstagoon"
            }
        ],
        "form": "Galarian",
        "pokemon_id": 264,
        "pokemon_name": "Linoone"
    },
    {
        "evolutions": [
            {
                "candy_required": 12,
                "form": "Normal",
                "pokemon_id": 266,
                "pokemon_name": "Silcoon"
            },
            {
                "candy_required": 12,
                "form": "Normal",
                "pokemon_id": 268,
                "pokemon_name": "Cascoon"
            }
        ],
        "form": "Normal",
        "pokemon_id": 265,
        "pokemon_name": "Wurmple"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 267,
                "pokemon_name": "Beautifly"
            }
        ],
        "form": "Normal",
        "pokemon_id": 266,
        "pokemon_name": "Silcoon"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 269,
                "pokemon_name": "Dustox"
            }
        ],
        "form": "Normal",
        "pokemon_id": 268,
        "pokemon_name": "Cascoon"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 271,
                "pokemon_name": "Lombre"
            }
        ],
        "form": "Normal",
        "pokemon_id": 270,
        "pokemon_name": "Lotad"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 272,
                "pokemon_name": "Ludicolo"
            }
        ],
        "form": "Normal",
        "pokemon_id": 271,
        "pokemon_name": "Lombre"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 274,
                "pokemon_name": "Nuzleaf"
            }
        ],
        "form": "Normal",
        "pokemon_id": 273,
        "pokemon_name": "Seedot"
    },
    {
        "evolutions": [
            {
                "candy_required": 22,
                "form": "Purified",
                "pokemon_id": 274,
                "pokemon_name": "Nuzleaf"
            }
        ],
        "form": "Purified",
        "pokemon_id": 273,
        "pokemon_name": "Seedot"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Shadow",
                "pokemon_id": 274,
                "pokemon_name": "Nuzleaf"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 273,
        "pokemon_name": "Seedot"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 275,
                "pokemon_name": "Shiftry"
            }
        ],
        "form": "Normal",
        "pokemon_id": 274,
        "pokemon_name": "Nuzleaf"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "pokemon_id": 275,
                "pokemon_name": "Shiftry"
            }
        ],
        "form": "Purified",
        "pokemon_id": 274,
        "pokemon_name": "Nuzleaf"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "pokemon_id": 275,
                "pokemon_name": "Shiftry"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 274,
        "pokemon_name": "Nuzleaf"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 277,
                "pokemon_name": "Swellow"
            }
        ],
        "form": "Normal",
        "pokemon_id": 276,
        "pokemon_name": "Taillow"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 279,
                "pokemon_name": "Pelipper"
            }
        ],
        "form": "Normal",
        "pokemon_id": 278,
        "pokemon_name": "Wingull"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 281,
                "pokemon_name": "Kirlia"
            }
        ],
        "form": "Normal",
        "pokemon_id": 280,
        "pokemon_name": "Ralts"
    },
    {
        "evolutions": [
            {
                "candy_required": 22,
                "form": "Purified",
                "pokemon_id": 281,
                "pokemon_name": "Kirlia"
            }
        ],
        "form": "Purified",
        "pokemon_id": 280,
        "pokemon_name": "Ralts"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Shadow",
                "pokemon_id": 281,
                "pokemon_name": "Kirlia"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 280,
        "pokemon_name": "Ralts"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "gender_required": "Male",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 475,
                "pokemon_name": "Gallade"
            },
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 282,
                "pokemon_name": "Gardevoir"
            }
        ],
        "form": "Normal",
        "pokemon_id": 281,
        "pokemon_name": "Kirlia"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "gender_required": "Male",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 475,
                "pokemon_name": "Gallade"
            },
            {
                "candy_required": 90,
                "form": "Purified",
                "pokemon_id": 282,
                "pokemon_name": "Gardevoir"
            }
        ],
        "form": "Purified",
        "pokemon_id": 281,
        "pokemon_name": "Kirlia"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "gender_required": "Male",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 475,
                "pokemon_name": "Gallade"
            },
            {
                "candy_required": 100,
                "form": "Shadow",
                "pokemon_id": 282,
                "pokemon_name": "Gardevoir"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 281,
        "pokemon_name": "Kirlia"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 284,
                "pokemon_name": "Masquerain"
            }
        ],
        "form": "Normal",
        "pokemon_id": 283,
        "pokemon_name": "Surskit"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 286,
                "pokemon_name": "Breloom"
            }
        ],
        "form": "Normal",
        "pokemon_id": 285,
        "pokemon_name": "Shroomish"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 288,
                "pokemon_name": "Vigoroth"
            }
        ],
        "form": "Normal",
        "pokemon_id": 287,
        "pokemon_name": "Slakoth"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 289,
                "pokemon_name": "Slaking"
            }
        ],
        "form": "Normal",
        "pokemon_id": 288,
        "pokemon_name": "Vigoroth"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 291,
                "pokemon_name": "Ninjask"
            }
        ],
        "form": "Normal",
        "pokemon_id": 290,
        "pokemon_name": "Nincada"
    },
    {
        "evolutions": [
            {
                "candy_required": 12,
                "form": "Normal",
                "pokemon_id": 294,
                "pokemon_name": "Loudred"
            }
        ],
        "form": "Normal",
        "pokemon_id": 293,
        "pokemon_name": "Whismur"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 295,
                "pokemon_name": "Exploud"
            }
        ],
        "form": "Normal",
        "pokemon_id": 294,
        "pokemon_name": "Loudred"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 297,
                "pokemon_name": "Hariyama"
            }
        ],
        "form": "Normal",
        "pokemon_id": 296,
        "pokemon_name": "Makuhita"
    },
    {
        "evolutions": [
            {
                "candy_required": 45,
                "form": "Purified",
                "pokemon_id": 297,
                "pokemon_name": "Hariyama"
            }
        ],
        "form": "Purified",
        "pokemon_id": 296,
        "pokemon_name": "Makuhita"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "pokemon_id": 297,
                "pokemon_name": "Hariyama"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 296,
        "pokemon_name": "Makuhita"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 183,
                "pokemon_name": "Marill"
            }
        ],
        "form": "Normal",
        "pokemon_id": 298,
        "pokemon_name": "Azurill"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "lure_required": "Magnetic Lure Module",
                "pokemon_id": 476,
                "pokemon_name": "Probopass"
            }
        ],
        "form": "Normal",
        "pokemon_id": 299,
        "pokemon_name": "Nosepass"
    },
    {
        "evolutions": [
            {
                "candy_required": 45,
                "form": "Purified",
                "lure_required": "Magnetic Lure Module",
                "pokemon_id": 476,
                "pokemon_name": "Probopass"
            }
        ],
        "form": "Purified",
        "pokemon_id": 299,
        "pokemon_name": "Nosepass"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "lure_required": "Magnetic Lure Module",
                "pokemon_id": 476,
                "pokemon_name": "Probopass"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 299,
        "pokemon_name": "Nosepass"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 301,
                "pokemon_name": "Delcatty"
            }
        ],
        "form": "Normal",
        "pokemon_id": 300,
        "pokemon_name": "Skitty"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 305,
                "pokemon_name": "Lairon"
            }
        ],
        "form": "Normal",
        "pokemon_id": 304,
        "pokemon_name": "Aron"
    },
    {
        "evolutions": [
            {
                "candy_required": 22,
                "form": "Purified",
                "pokemon_id": 305,
                "pokemon_name": "Lairon"
            }
        ],
        "form": "Purified",
        "pokemon_id": 304,
        "pokemon_name": "Aron"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Shadow",
                "pokemon_id": 305,
                "pokemon_name": "Lairon"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 304,
        "pokemon_name": "Aron"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 306,
                "pokemon_name": "Aggron"
            }
        ],
        "form": "Normal",
        "pokemon_id": 305,
        "pokemon_name": "Lairon"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "pokemon_id": 306,
                "pokemon_name": "Aggron"
            }
        ],
        "form": "Purified",
        "pokemon_id": 305,
        "pokemon_name": "Lairon"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "pokemon_id": 306,
                "pokemon_name": "Aggron"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 305,
        "pokemon_name": "Lairon"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 308,
                "pokemon_name": "Medicham"
            }
        ],
        "form": "Normal",
        "pokemon_id": 307,
        "pokemon_name": "Meditite"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 310,
                "pokemon_name": "Manectric"
            }
        ],
        "form": "Normal",
        "pokemon_id": 309,
        "pokemon_name": "Electrike"
    },
    {
        "evolutions": [
            {
                "candy_required": 45,
                "form": "Purified",
                "pokemon_id": 310,
                "pokemon_name": "Manectric"
            }
        ],
        "form": "Purified",
        "pokemon_id": 309,
        "pokemon_name": "Electrike"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "pokemon_id": 310,
                "pokemon_name": "Manectric"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 309,
        "pokemon_name": "Electrike"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 407,
                "pokemon_name": "Roserade"
            }
        ],
        "form": "Normal",
        "pokemon_id": 315,
        "pokemon_name": "Roselia"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 317,
                "pokemon_name": "Swalot"
            }
        ],
        "form": "Normal",
        "pokemon_id": 316,
        "pokemon_name": "Gulpin"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 319,
                "pokemon_name": "Sharpedo"
            }
        ],
        "form": "Normal",
        "pokemon_id": 318,
        "pokemon_name": "Carvanha"
    },
    {
        "evolutions": [
            {
                "candy_required": 45,
                "form": "Purified",
                "pokemon_id": 319,
                "pokemon_name": "Sharpedo"
            }
        ],
        "form": "Purified",
        "pokemon_id": 318,
        "pokemon_name": "Carvanha"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "pokemon_id": 319,
                "pokemon_name": "Sharpedo"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 318,
        "pokemon_name": "Carvanha"
    },
    {
        "evolutions": [
            {
                "candy_required": 400,
                "form": "Normal",
                "pokemon_id": 321,
                "pokemon_name": "Wailord"
            }
        ],
        "form": "Normal",
        "pokemon_id": 320,
        "pokemon_name": "Wailmer"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 323,
                "pokemon_name": "Camerupt"
            }
        ],
        "form": "Normal",
        "pokemon_id": 322,
        "pokemon_name": "Numel"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 326,
                "pokemon_name": "Grumpig"
            }
        ],
        "form": "Normal",
        "pokemon_id": 325,
        "pokemon_name": "Spoink"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 329,
                "pokemon_name": "Vibrava"
            }
        ],
        "form": "Normal",
        "pokemon_id": 328,
        "pokemon_name": "Trapinch"
    },
    {
        "evolutions": [
            {
                "candy_required": 22,
                "form": "Purified",
                "pokemon_id": 329,
                "pokemon_name": "Vibrava"
            }
        ],
        "form": "Purified",
        "pokemon_id": 328,
        "pokemon_name": "Trapinch"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Shadow",
                "pokemon_id": 329,
                "pokemon_name": "Vibrava"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 328,
        "pokemon_name": "Trapinch"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 330,
                "pokemon_name": "Flygon"
            }
        ],
        "form": "Normal",
        "pokemon_id": 329,
        "pokemon_name": "Vibrava"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "pokemon_id": 330,
                "pokemon_name": "Flygon"
            }
        ],
        "form": "Purified",
        "pokemon_id": 329,
        "pokemon_name": "Vibrava"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "pokemon_id": 330,
                "pokemon_name": "Flygon"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 329,
        "pokemon_name": "Vibrava"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 332,
                "pokemon_name": "Cacturne"
            }
        ],
        "form": "Normal",
        "pokemon_id": 331,
        "pokemon_name": "Cacnea"
    },
    {
        "evolutions": [
            {
                "candy_required": 45,
                "form": "Purified",
                "pokemon_id": 332,
                "pokemon_name": "Cacturne"
            }
        ],
        "form": "Purified",
        "pokemon_id": 331,
        "pokemon_name": "Cacnea"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "pokemon_id": 332,
                "pokemon_name": "Cacturne"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 331,
        "pokemon_name": "Cacnea"
    },
    {
        "evolutions": [
            {
                "candy_required": 400,
                "form": "Normal",
                "pokemon_id": 334,
                "pokemon_name": "Altaria"
            }
        ],
        "form": "Normal",
        "pokemon_id": 333,
        "pokemon_name": "Swablu"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 340,
                "pokemon_name": "Whiscash"
            }
        ],
        "form": "Normal",
        "pokemon_id": 339,
        "pokemon_name": "Barboach"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 342,
                "pokemon_name": "Crawdaunt"
            }
        ],
        "form": "Normal",
        "pokemon_id": 341,
        "pokemon_name": "Corphish"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 344,
                "pokemon_name": "Claydol"
            }
        ],
        "form": "Normal",
        "pokemon_id": 343,
        "pokemon_name": "Baltoy"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 346,
                "pokemon_name": "Cradily"
            }
        ],
        "form": "Normal",
        "pokemon_id": 345,
        "pokemon_name": "Lileep"
    },
    {
        "evolutions": [
            {
                "candy_required": 45,
                "form": "Purified",
                "pokemon_id": 346,
                "pokemon_name": "Cradily"
            }
        ],
        "form": "Purified",
        "pokemon_id": 345,
        "pokemon_name": "Lileep"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "pokemon_id": 346,
                "pokemon_name": "Cradily"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 345,
        "pokemon_name": "Lileep"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 348,
                "pokemon_name": "Armaldo"
            }
        ],
        "form": "Normal",
        "pokemon_id": 347,
        "pokemon_name": "Anorith"
    },
    {
        "evolutions": [
            {
                "candy_required": 45,
                "form": "Purified",
                "pokemon_id": 348,
                "pokemon_name": "Armaldo"
            }
        ],
        "form": "Purified",
        "pokemon_id": 347,
        "pokemon_name": "Anorith"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "pokemon_id": 348,
                "pokemon_name": "Armaldo"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 347,
        "pokemon_name": "Anorith"
    },
    {
        "evolutions": [
            {
                "buddy_distance_required": 20.0,
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 350,
                "pokemon_name": "Milotic"
            }
        ],
        "form": "Normal",
        "pokemon_id": 349,
        "pokemon_name": "Feebas"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 354,
                "pokemon_name": "Banette"
            }
        ],
        "form": "Normal",
        "pokemon_id": 353,
        "pokemon_name": "Shuppet"
    },
    {
        "evolutions": [
            {
                "candy_required": 45,
                "form": "Purified",
                "pokemon_id": 354,
                "pokemon_name": "Banette"
            }
        ],
        "form": "Purified",
        "pokemon_id": 353,
        "pokemon_name": "Shuppet"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "pokemon_id": 354,
                "pokemon_name": "Banette"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 353,
        "pokemon_name": "Shuppet"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 356,
                "pokemon_name": "Dusclops"
            }
        ],
        "form": "Normal",
        "pokemon_id": 355,
        "pokemon_name": "Duskull"
    },
    {
        "evolutions": [
            {
                "candy_required": 22,
                "form": "Purified",
                "pokemon_id": 356,
                "pokemon_name": "Dusclops"
            }
        ],
        "form": "Purified",
        "pokemon_id": 355,
        "pokemon_name": "Duskull"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Shadow",
                "pokemon_id": 356,
                "pokemon_name": "Dusclops"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 355,
        "pokemon_name": "Duskull"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 477,
                "pokemon_name": "Dusknoir"
            }
        ],
        "form": "Normal",
        "pokemon_id": 356,
        "pokemon_name": "Dusclops"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 477,
                "pokemon_name": "Dusknoir"
            }
        ],
        "form": "Purified",
        "pokemon_id": 356,
        "pokemon_name": "Dusclops"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 477,
                "pokemon_name": "Dusknoir"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 356,
        "pokemon_name": "Dusclops"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 202,
                "pokemon_name": "Wobbuffet"
            }
        ],
        "form": "Normal",
        "pokemon_id": 360,
        "pokemon_name": "Wynaut"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "gender_required": "Female",
                "item_required": "Sinnoh Stone",
                "pokemon_id": 478,
                "pokemon_name": "Froslass"
            },
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 362,
                "pokemon_name": "Glalie"
            }
        ],
        "form": "Normal",
        "pokemon_id": 361,
        "pokemon_name": "Snorunt"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 364,
                "pokemon_name": "Sealeo"
            }
        ],
        "form": "Normal",
        "pokemon_id": 363,
        "pokemon_name": "Spheal"
    },
    {
        "evolutions": [
            {
                "candy_required": 22,
                "form": "Purified",
                "pokemon_id": 364,
                "pokemon_name": "Sealeo"
            }
        ],
        "form": "Purified",
        "pokemon_id": 363,
        "pokemon_name": "Spheal"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Shadow",
                "pokemon_id": 364,
                "pokemon_name": "Sealeo"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 363,
        "pokemon_name": "Spheal"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 365,
                "pokemon_name": "Walrein"
            }
        ],
        "form": "Normal",
        "pokemon_id": 364,
        "pokemon_name": "Sealeo"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "pokemon_id": 365,
                "pokemon_name": "Walrein"
            }
        ],
        "form": "Purified",
        "pokemon_id": 364,
        "pokemon_name": "Sealeo"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "pokemon_id": 365,
                "pokemon_name": "Walrein"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 364,
        "pokemon_name": "Sealeo"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 367,
                "pokemon_name": "Huntail"
            },
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 368,
                "pokemon_name": "Gorebyss"
            }
        ],
        "form": "Normal",
        "pokemon_id": 366,
        "pokemon_name": "Clamperl"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 372,
                "pokemon_name": "Shelgon"
            }
        ],
        "form": "Normal",
        "pokemon_id": 371,
        "pokemon_name": "Bagon"
    },
    {
        "evolutions": [
            {
                "candy_required": 22,
                "form": "Purified",
                "pokemon_id": 372,
                "pokemon_name": "Shelgon"
            }
        ],
        "form": "Purified",
        "pokemon_id": 371,
        "pokemon_name": "Bagon"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Shadow",
                "pokemon_id": 372,
                "pokemon_name": "Shelgon"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 371,
        "pokemon_name": "Bagon"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 373,
                "pokemon_name": "Salamence"
            }
        ],
        "form": "Normal",
        "pokemon_id": 372,
        "pokemon_name": "Shelgon"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "pokemon_id": 373,
                "pokemon_name": "Salamence"
            }
        ],
        "form": "Purified",
        "pokemon_id": 372,
        "pokemon_name": "Shelgon"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "pokemon_id": 373,
                "pokemon_name": "Salamence"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 372,
        "pokemon_name": "Shelgon"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 375,
                "pokemon_name": "Metang"
            }
        ],
        "form": "Normal",
        "pokemon_id": 374,
        "pokemon_name": "Beldum"
    },
    {
        "evolutions": [
            {
                "candy_required": 22,
                "form": "Purified",
                "pokemon_id": 375,
                "pokemon_name": "Metang"
            }
        ],
        "form": "Purified",
        "pokemon_id": 374,
        "pokemon_name": "Beldum"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Shadow",
                "pokemon_id": 375,
                "pokemon_name": "Metang"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 374,
        "pokemon_name": "Beldum"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 376,
                "pokemon_name": "Metagross"
            }
        ],
        "form": "Normal",
        "pokemon_id": 375,
        "pokemon_name": "Metang"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "pokemon_id": 376,
                "pokemon_name": "Metagross"
            }
        ],
        "form": "Purified",
        "pokemon_id": 375,
        "pokemon_name": "Metang"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "pokemon_id": 376,
                "pokemon_name": "Metagross"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 375,
        "pokemon_name": "Metang"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 388,
                "pokemon_name": "Grotle"
            }
        ],
        "form": "Normal",
        "pokemon_id": 387,
        "pokemon_name": "Turtwig"
    },
    {
        "evolutions": [
            {
                "candy_required": 22,
                "form": "Purified",
                "pokemon_id": 388,
                "pokemon_name": "Grotle"
            }
        ],
        "form": "Purified",
        "pokemon_id": 387,
        "pokemon_name": "Turtwig"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Shadow",
                "pokemon_id": 388,
                "pokemon_name": "Grotle"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 387,
        "pokemon_name": "Turtwig"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 389,
                "pokemon_name": "Torterra"
            }
        ],
        "form": "Normal",
        "pokemon_id": 388,
        "pokemon_name": "Grotle"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "pokemon_id": 389,
                "pokemon_name": "Torterra"
            }
        ],
        "form": "Purified",
        "pokemon_id": 388,
        "pokemon_name": "Grotle"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "pokemon_id": 389,
                "pokemon_name": "Torterra"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 388,
        "pokemon_name": "Grotle"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 391,
                "pokemon_name": "Monferno"
            }
        ],
        "form": "Normal",
        "pokemon_id": 390,
        "pokemon_name": "Chimchar"
    },
    {
        "evolutions": [
            {
                "candy_required": 22,
                "form": "Purified",
                "pokemon_id": 391,
                "pokemon_name": "Monferno"
            }
        ],
        "form": "Purified",
        "pokemon_id": 390,
        "pokemon_name": "Chimchar"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Shadow",
                "pokemon_id": 391,
                "pokemon_name": "Monferno"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 390,
        "pokemon_name": "Chimchar"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 392,
                "pokemon_name": "Infernape"
            }
        ],
        "form": "Normal",
        "pokemon_id": 391,
        "pokemon_name": "Monferno"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "pokemon_id": 392,
                "pokemon_name": "Infernape"
            }
        ],
        "form": "Purified",
        "pokemon_id": 391,
        "pokemon_name": "Monferno"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "pokemon_id": 392,
                "pokemon_name": "Infernape"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 391,
        "pokemon_name": "Monferno"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 394,
                "pokemon_name": "Prinplup"
            }
        ],
        "form": "Normal",
        "pokemon_id": 393,
        "pokemon_name": "Piplup"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 395,
                "pokemon_name": "Empoleon"
            }
        ],
        "form": "Normal",
        "pokemon_id": 394,
        "pokemon_name": "Prinplup"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 397,
                "pokemon_name": "Staravia"
            }
        ],
        "form": "Normal",
        "pokemon_id": 396,
        "pokemon_name": "Starly"
    },
    {
        "evolutions": [
            {
                "candy_required": 22,
                "form": "Purified",
                "pokemon_id": 397,
                "pokemon_name": "Staravia"
            }
        ],
        "form": "Purified",
        "pokemon_id": 396,
        "pokemon_name": "Starly"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Shadow",
                "pokemon_id": 397,
                "pokemon_name": "Staravia"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 396,
        "pokemon_name": "Starly"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 398,
                "pokemon_name": "Staraptor"
            }
        ],
        "form": "Normal",
        "pokemon_id": 397,
        "pokemon_name": "Staravia"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "pokemon_id": 398,
                "pokemon_name": "Staraptor"
            }
        ],
        "form": "Purified",
        "pokemon_id": 397,
        "pokemon_name": "Staravia"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "pokemon_id": 398,
                "pokemon_name": "Staraptor"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 397,
        "pokemon_name": "Staravia"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 400,
                "pokemon_name": "Bibarel"
            }
        ],
        "form": "Normal",
        "pokemon_id": 399,
        "pokemon_name": "Bidoof"
    },
    {
        "evolutions": [
            {
                "candy_required": 45,
                "form": "Purified",
                "pokemon_id": 400,
                "pokemon_name": "Bibarel"
            }
        ],
        "form": "Purified",
        "pokemon_id": 399,
        "pokemon_name": "Bidoof"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "pokemon_id": 400,
                "pokemon_name": "Bibarel"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 399,
        "pokemon_name": "Bidoof"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 402,
                "pokemon_name": "Kricketune"
            }
        ],
        "form": "Normal",
        "pokemon_id": 401,
        "pokemon_name": "Kricketot"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 404,
                "pokemon_name": "Luxio"
            }
        ],
        "form": "Normal",
        "pokemon_id": 403,
        "pokemon_name": "Shinx"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 405,
                "pokemon_name": "Luxray"
            }
        ],
        "form": "Normal",
        "pokemon_id": 404,
        "pokemon_name": "Luxio"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 315,
                "pokemon_name": "Roselia"
            }
        ],
        "form": "Normal",
        "pokemon_id": 406,
        "pokemon_name": "Budew"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 409,
                "pokemon_name": "Rampardos"
            }
        ],
        "form": "Normal",
        "pokemon_id": 408,
        "pokemon_name": "Cranidos"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 411,
                "pokemon_name": "Bastiodon"
            }
        ],
        "form": "Normal",
        "pokemon_id": 410,
        "pokemon_name": "Shieldon"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Plant",
                "gender_required": "Female",
                "pokemon_id": 413,
                "pokemon_name": "Wormadam"
            },
            {
                "candy_required": 50,
                "form": "Normal",
                "gender_required": "Male",
                "pokemon_id": 414,
                "pokemon_name": "Mothim"
            }
        ],
        "form": "Plant",
        "pokemon_id": 412,
        "pokemon_name": "Burmy"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Sandy",
                "gender_required": "Female",
                "pokemon_id": 413,
                "pokemon_name": "Wormadam"
            },
            {
                "candy_required": 50,
                "form": "Normal",
                "gender_required": "Male",
                "pokemon_id": 414,
                "pokemon_name": "Mothim"
            }
        ],
        "form": "Sandy",
        "pokemon_id": 412,
        "pokemon_name": "Burmy"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Trash",
                "gender_required": "Female",
                "pokemon_id": 413,
                "pokemon_name": "Wormadam"
            },
            {
                "candy_required": 50,
                "form": "Normal",
                "gender_required": "Male",
                "pokemon_id": 414,
                "pokemon_name": "Mothim"
            }
        ],
        "form": "Trash",
        "pokemon_id": 412,
        "pokemon_name": "Burmy"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "gender_required": "Female",
                "pokemon_id": 416,
                "pokemon_name": "Vespiquen"
            }
        ],
        "form": "Normal",
        "pokemon_id": 415,
        "pokemon_name": "Combee"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 419,
                "pokemon_name": "Floatzel"
            }
        ],
        "form": "Normal",
        "pokemon_id": 418,
        "pokemon_name": "Buizel"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Overcast",
                "pokemon_id": 421,
                "pokemon_name": "Cherrim"
            },
            {
                "candy_required": 50,
                "form": "Sunny",
                "pokemon_id": 421,
                "pokemon_name": "Cherrim"
            }
        ],
        "form": "Normal",
        "pokemon_id": 420,
        "pokemon_name": "Cherubi"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "East_sea",
                "pokemon_id": 423,
                "pokemon_name": "Gastrodon"
            }
        ],
        "form": "East_sea",
        "pokemon_id": 422,
        "pokemon_name": "Shellos"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "West_sea",
                "pokemon_id": 423,
                "pokemon_name": "Gastrodon"
            }
        ],
        "form": "West_sea",
        "pokemon_id": 422,
        "pokemon_name": "Shellos"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 426,
                "pokemon_name": "Drifblim"
            }
        ],
        "form": "Normal",
        "pokemon_id": 425,
        "pokemon_name": "Drifloon"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 428,
                "pokemon_name": "Lopunny"
            }
        ],
        "form": "Normal",
        "pokemon_id": 427,
        "pokemon_name": "Buneary"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 432,
                "pokemon_name": "Purugly"
            }
        ],
        "form": "Normal",
        "pokemon_id": 431,
        "pokemon_name": "Glameow"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 358,
                "pokemon_name": "Chimecho"
            }
        ],
        "form": "Normal",
        "pokemon_id": 433,
        "pokemon_name": "Chingling"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 435,
                "pokemon_name": "Skuntank"
            }
        ],
        "form": "Normal",
        "pokemon_id": 434,
        "pokemon_name": "Stunky"
    },
    {
        "evolutions": [
            {
                "candy_required": 45,
                "form": "Purified",
                "pokemon_id": 435,
                "pokemon_name": "Skuntank"
            }
        ],
        "form": "Purified",
        "pokemon_id": 434,
        "pokemon_name": "Stunky"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "pokemon_id": 435,
                "pokemon_name": "Skuntank"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 434,
        "pokemon_name": "Stunky"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 437,
                "pokemon_name": "Bronzong"
            }
        ],
        "form": "Normal",
        "pokemon_id": 436,
        "pokemon_name": "Bronzor"
    },
    {
        "evolutions": [
            {
                "buddy_distance_required": 15.0,
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 185,
                "pokemon_name": "Sudowoodo"
            }
        ],
        "form": "Normal",
        "pokemon_id": 438,
        "pokemon_name": "Bonsly"
    },
    {
        "evolutions": [
            {
                "buddy_distance_required": 15.0,
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 122,
                "pokemon_name": "Mr. Mime"
            }
        ],
        "form": "Normal",
        "pokemon_id": 439,
        "pokemon_name": "Mime Jr."
    },
    {
        "evolutions": [
            {
                "buddy_distance_required": 15.0,
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 113,
                "pokemon_name": "Chansey"
            }
        ],
        "form": "Normal",
        "pokemon_id": 440,
        "pokemon_name": "Happiny"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 444,
                "pokemon_name": "Gabite"
            }
        ],
        "form": "Normal",
        "pokemon_id": 443,
        "pokemon_name": "Gible"
    },
    {
        "evolutions": [
            {
                "candy_required": 22,
                "form": "Purified",
                "pokemon_id": 444,
                "pokemon_name": "Gabite"
            }
        ],
        "form": "Purified",
        "pokemon_id": 443,
        "pokemon_name": "Gible"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Shadow",
                "pokemon_id": 444,
                "pokemon_name": "Gabite"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 443,
        "pokemon_name": "Gible"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 445,
                "pokemon_name": "Garchomp"
            }
        ],
        "form": "Normal",
        "pokemon_id": 444,
        "pokemon_name": "Gabite"
    },
    {
        "evolutions": [
            {
                "candy_required": 90,
                "form": "Purified",
                "pokemon_id": 445,
                "pokemon_name": "Garchomp"
            }
        ],
        "form": "Purified",
        "pokemon_id": 444,
        "pokemon_name": "Gabite"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Shadow",
                "pokemon_id": 445,
                "pokemon_name": "Garchomp"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 444,
        "pokemon_name": "Gabite"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 143,
                "pokemon_name": "Snorlax"
            }
        ],
        "form": "Normal",
        "pokemon_id": 446,
        "pokemon_name": "Munchlax"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 448,
                "pokemon_name": "Lucario"
            }
        ],
        "form": "Normal",
        "pokemon_id": 447,
        "pokemon_name": "Riolu"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 450,
                "pokemon_name": "Hippowdon"
            }
        ],
        "form": "Normal",
        "pokemon_id": 449,
        "pokemon_name": "Hippopotas"
    },
    {
        "evolutions": [
            {
                "candy_required": 45,
                "form": "Purified",
                "pokemon_id": 450,
                "pokemon_name": "Hippowdon"
            }
        ],
        "form": "Purified",
        "pokemon_id": 449,
        "pokemon_name": "Hippopotas"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "pokemon_id": 450,
                "pokemon_name": "Hippowdon"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 449,
        "pokemon_name": "Hippopotas"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 452,
                "pokemon_name": "Drapion"
            }
        ],
        "form": "Normal",
        "pokemon_id": 451,
        "pokemon_name": "Skorupi"
    },
    {
        "evolutions": [
            {
                "candy_required": 45,
                "form": "Purified",
                "pokemon_id": 452,
                "pokemon_name": "Drapion"
            }
        ],
        "form": "Purified",
        "pokemon_id": 451,
        "pokemon_name": "Skorupi"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "pokemon_id": 452,
                "pokemon_name": "Drapion"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 451,
        "pokemon_name": "Skorupi"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 454,
                "pokemon_name": "Toxicroak"
            }
        ],
        "form": "Normal",
        "pokemon_id": 453,
        "pokemon_name": "Croagunk"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 457,
                "pokemon_name": "Lumineon"
            }
        ],
        "form": "Normal",
        "pokemon_id": 456,
        "pokemon_name": "Finneon"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 226,
                "pokemon_name": "Mantine"
            }
        ],
        "form": "Normal",
        "pokemon_id": 458,
        "pokemon_name": "Mantyke"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 460,
                "pokemon_name": "Abomasnow"
            }
        ],
        "form": "Normal",
        "pokemon_id": 459,
        "pokemon_name": "Snover"
    },
    {
        "evolutions": [
            {
                "candy_required": 45,
                "form": "Purified",
                "pokemon_id": 460,
                "pokemon_name": "Abomasnow"
            }
        ],
        "form": "Purified",
        "pokemon_id": 459,
        "pokemon_name": "Snover"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "pokemon_id": 460,
                "pokemon_name": "Abomasnow"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 459,
        "pokemon_name": "Snover"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 496,
                "pokemon_name": "Servine"
            }
        ],
        "form": "Normal",
        "pokemon_id": 495,
        "pokemon_name": "Snivy"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 497,
                "pokemon_name": "Serperior"
            }
        ],
        "form": "Normal",
        "pokemon_id": 496,
        "pokemon_name": "Servine"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 499,
                "pokemon_name": "Pignite"
            }
        ],
        "form": "Normal",
        "pokemon_id": 498,
        "pokemon_name": "Tepig"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 500,
                "pokemon_name": "Emboar"
            }
        ],
        "form": "Normal",
        "pokemon_id": 499,
        "pokemon_name": "Pignite"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 502,
                "pokemon_name": "Dewott"
            }
        ],
        "form": "Normal",
        "pokemon_id": 501,
        "pokemon_name": "Oshawott"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 503,
                "pokemon_name": "Samurott"
            }
        ],
        "form": "Normal",
        "pokemon_id": 502,
        "pokemon_name": "Dewott"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 505,
                "pokemon_name": "Watchog"
            }
        ],
        "form": "Normal",
        "pokemon_id": 504,
        "pokemon_name": "Patrat"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 507,
                "pokemon_name": "Herdier"
            }
        ],
        "form": "Normal",
        "pokemon_id": 506,
        "pokemon_name": "Lillipup"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 508,
                "pokemon_name": "Stoutland"
            }
        ],
        "form": "Normal",
        "pokemon_id": 507,
        "pokemon_name": "Herdier"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 510,
                "pokemon_name": "Liepard"
            }
        ],
        "form": "Normal",
        "pokemon_id": 509,
        "pokemon_name": "Purrloin"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "item_required": "Unova Stone",
                "pokemon_id": 512,
                "pokemon_name": "Simisage"
            }
        ],
        "form": "Normal",
        "pokemon_id": 511,
        "pokemon_name": "Pansage"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "item_required": "Unova Stone",
                "pokemon_id": 514,
                "pokemon_name": "Simisear"
            }
        ],
        "form": "Normal",
        "pokemon_id": 513,
        "pokemon_name": "Pansear"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "item_required": "Unova Stone",
                "pokemon_id": 516,
                "pokemon_name": "Simipour"
            }
        ],
        "form": "Normal",
        "pokemon_id": 515,
        "pokemon_name": "Panpour"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "item_required": "Unova Stone",
                "pokemon_id": 518,
                "pokemon_name": "Musharna"
            }
        ],
        "form": "Normal",
        "pokemon_id": 517,
        "pokemon_name": "Munna"
    },
    {
        "evolutions": [
            {
                "candy_required": 12,
                "form": "Normal",
                "pokemon_id": 520,
                "pokemon_name": "Tranquill"
            }
        ],
        "form": "Normal",
        "pokemon_id": 519,
        "pokemon_name": "Pidove"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 521,
                "pokemon_name": "Unfezant"
            }
        ],
        "form": "Normal",
        "pokemon_id": 520,
        "pokemon_name": "Tranquill"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 523,
                "pokemon_name": "Zebstrika"
            }
        ],
        "form": "Normal",
        "pokemon_id": 522,
        "pokemon_name": "Blitzle"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 525,
                "pokemon_name": "Boldore"
            }
        ],
        "form": "Normal",
        "pokemon_id": 524,
        "pokemon_name": "Roggenrola"
    },
    {
        "evolutions": [
            {
                "candy_required": 200,
                "form": "Normal",
                "no_candy_cost_if_traded": true,
                "pokemon_id": 526,
                "pokemon_name": "Gigalith"
            }
        ],
        "form": "Normal",
        "pokemon_id": 525,
        "pokemon_name": "Boldore"
    },
    {
        "evolutions": [
            {
                "buddy_distance_required": 1.0,
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 528,
                "pokemon_name": "Swoobat"
            }
        ],
        "form": "Normal",
        "pokemon_id": 527,
        "pokemon_name": "Woobat"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 530,
                "pokemon_name": "Excadrill"
            }
        ],
        "form": "Normal",
        "pokemon_id": 529,
        "pokemon_name": "Drilbur"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 533,
                "pokemon_name": "Gurdurr"
            }
        ],
        "form": "Normal",
        "pokemon_id": 532,
        "pokemon_name": "Timburr"
    },
    {
        "evolutions": [
            {
                "candy_required": 200,
                "form": "Normal",
                "no_candy_cost_if_traded": true,
                "pokemon_id": 534,
                "pokemon_name": "Conkeldurr"
            }
        ],
        "form": "Normal",
        "pokemon_id": 533,
        "pokemon_name": "Gurdurr"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 536,
                "pokemon_name": "Palpitoad"
            }
        ],
        "form": "Normal",
        "pokemon_id": 535,
        "pokemon_name": "Tympole"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 537,
                "pokemon_name": "Seismitoad"
            }
        ],
        "form": "Normal",
        "pokemon_id": 536,
        "pokemon_name": "Palpitoad"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 541,
                "pokemon_name": "Swadloon"
            }
        ],
        "form": "Normal",
        "pokemon_id": 540,
        "pokemon_name": "Sewaddle"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 542,
                "pokemon_name": "Leavanny"
            }
        ],
        "form": "Normal",
        "pokemon_id": 541,
        "pokemon_name": "Swadloon"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 544,
                "pokemon_name": "Whirlipede"
            }
        ],
        "form": "Normal",
        "pokemon_id": 543,
        "pokemon_name": "Venipede"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 545,
                "pokemon_name": "Scolipede"
            }
        ],
        "form": "Normal",
        "pokemon_id": 544,
        "pokemon_name": "Whirlipede"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "item_required": "Sun Stone",
                "pokemon_id": 547,
                "pokemon_name": "Whimsicott"
            }
        ],
        "form": "Normal",
        "pokemon_id": 546,
        "pokemon_name": "Cottonee"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "item_required": "Sun Stone",
                "pokemon_id": 549,
                "pokemon_name": "Lilligant"
            }
        ],
        "form": "Normal",
        "pokemon_id": 548,
        "pokemon_name": "Petilil"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 552,
                "pokemon_name": "Krokorok"
            }
        ],
        "form": "Normal",
        "pokemon_id": 551,
        "pokemon_name": "Sandile"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 553,
                "pokemon_name": "Krookodile"
            }
        ],
        "form": "Normal",
        "pokemon_id": 552,
        "pokemon_name": "Krokorok"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Galarian_standard",
                "pokemon_id": 555,
                "pokemon_name": "Darmanitan"
            }
        ],
        "form": "Galarian",
        "pokemon_id": 554,
        "pokemon_name": "Darumaka"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Standard",
                "pokemon_id": 555,
                "pokemon_name": "Darmanitan"
            }
        ],
        "form": "Normal",
        "pokemon_id": 554,
        "pokemon_name": "Darumaka"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 558,
                "pokemon_name": "Crustle"
            }
        ],
        "form": "Normal",
        "pokemon_id": 557,
        "pokemon_name": "Dwebble"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 560,
                "pokemon_name": "Scrafty"
            }
        ],
        "form": "Normal",
        "pokemon_id": 559,
        "pokemon_name": "Scraggy"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Galarian",
                "pokemon_id": 867,
                "pokemon_name": "Runerigus"
            }
        ],
        "form": "Galarian",
        "pokemon_id": 562,
        "pokemon_name": "Yamask"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 563,
                "pokemon_name": "Cofagrigus"
            }
        ],
        "form": "Normal",
        "pokemon_id": 562,
        "pokemon_name": "Yamask"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Purified",
                "pokemon_id": 563,
                "pokemon_name": "Cofagrigus"
            }
        ],
        "form": "Purified",
        "pokemon_id": 562,
        "pokemon_name": "Yamask"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Shadow",
                "pokemon_id": 563,
                "pokemon_name": "Cofagrigus"
            }
        ],
        "form": "Shadow",
        "pokemon_id": 562,
        "pokemon_name": "Yamask"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 565,
                "pokemon_name": "Carracosta"
            }
        ],
        "form": "Normal",
        "pokemon_id": 564,
        "pokemon_name": "Tirtouga"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 567,
                "pokemon_name": "Archeops"
            }
        ],
        "form": "Normal",
        "pokemon_id": 566,
        "pokemon_name": "Archen"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 569,
                "pokemon_name": "Garbodor"
            }
        ],
        "form": "Normal",
        "pokemon_id": 568,
        "pokemon_name": "Trubbish"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 571,
                "pokemon_name": "Zoroark"
            }
        ],
        "form": "Normal",
        "pokemon_id": 570,
        "pokemon_name": "Zorua"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "item_required": "Unova Stone",
                "pokemon_id": 573,
                "pokemon_name": "Cinccino"
            }
        ],
        "form": "Normal",
        "pokemon_id": 572,
        "pokemon_name": "Minccino"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 575,
                "pokemon_name": "Gothorita"
            }
        ],
        "form": "Normal",
        "pokemon_id": 574,
        "pokemon_name": "Gothita"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 576,
                "pokemon_name": "Gothitelle"
            }
        ],
        "form": "Normal",
        "pokemon_id": 575,
        "pokemon_name": "Gothorita"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 578,
                "pokemon_name": "Duosion"
            }
        ],
        "form": "Normal",
        "pokemon_id": 577,
        "pokemon_name": "Solosis"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 579,
                "pokemon_name": "Reuniclus"
            }
        ],
        "form": "Normal",
        "pokemon_id": 578,
        "pokemon_name": "Duosion"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 581,
                "pokemon_name": "Swanna"
            }
        ],
        "form": "Normal",
        "pokemon_id": 580,
        "pokemon_name": "Ducklett"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 583,
                "pokemon_name": "Vanillish"
            }
        ],
        "form": "Normal",
        "pokemon_id": 582,
        "pokemon_name": "Vanillite"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 584,
                "pokemon_name": "Vanilluxe"
            }
        ],
        "form": "Normal",
        "pokemon_id": 583,
        "pokemon_name": "Vanillish"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Autumn",
                "pokemon_id": 586,
                "pokemon_name": "Sawsbuck"
            }
        ],
        "form": "Autumn",
        "pokemon_id": 585,
        "pokemon_name": "Deerling"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Spring",
                "pokemon_id": 586,
                "pokemon_name": "Sawsbuck"
            }
        ],
        "form": "Spring",
        "pokemon_id": 585,
        "pokemon_name": "Deerling"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Summer",
                "pokemon_id": 586,
                "pokemon_name": "Sawsbuck"
            }
        ],
        "form": "Summer",
        "pokemon_id": 585,
        "pokemon_name": "Deerling"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Winter",
                "pokemon_id": 586,
                "pokemon_name": "Sawsbuck"
            }
        ],
        "form": "Winter",
        "pokemon_id": 585,
        "pokemon_name": "Deerling"
    },
    {
        "evolutions": [
            {
                "candy_required": 200,
                "form": "Normal",
                "no_candy_cost_if_traded": true,
                "pokemon_id": 589,
                "pokemon_name": "Escavalier"
            }
        ],
        "form": "Normal",
        "pokemon_id": 588,
        "pokemon_name": "Karrablast"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 591,
                "pokemon_name": "Amoonguss"
            }
        ],
        "form": "Normal",
        "pokemon_id": 590,
        "pokemon_name": "Foongus"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Female",
                "pokemon_id": 593,
                "pokemon_name": "Jellicent"
            }
        ],
        "form": "Female",
        "pokemon_id": 592,
        "pokemon_name": "Frillish"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 593,
                "pokemon_name": "Jellicent"
            }
        ],
        "form": "Normal",
        "pokemon_id": 592,
        "pokemon_name": "Frillish"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 596,
                "pokemon_name": "Galvantula"
            }
        ],
        "form": "Normal",
        "pokemon_id": 595,
        "pokemon_name": "Joltik"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 598,
                "pokemon_name": "Ferrothorn"
            }
        ],
        "form": "Normal",
        "pokemon_id": 597,
        "pokemon_name": "Ferroseed"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 600,
                "pokemon_name": "Klang"
            }
        ],
        "form": "Normal",
        "pokemon_id": 599,
        "pokemon_name": "Klink"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 601,
                "pokemon_name": "Klinklang"
            }
        ],
        "form": "Normal",
        "pokemon_id": 600,
        "pokemon_name": "Klang"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 603,
                "pokemon_name": "Eelektrik"
            }
        ],
        "form": "Normal",
        "pokemon_id": 602,
        "pokemon_name": "Tynamo"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "item_required": "Unova Stone",
                "pokemon_id": 604,
                "pokemon_name": "Eelektross"
            }
        ],
        "form": "Normal",
        "pokemon_id": 603,
        "pokemon_name": "Eelektrik"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 606,
                "pokemon_name": "Beheeyem"
            }
        ],
        "form": "Normal",
        "pokemon_id": 605,
        "pokemon_name": "Elgyem"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 608,
                "pokemon_name": "Lampent"
            }
        ],
        "form": "Normal",
        "pokemon_id": 607,
        "pokemon_name": "Litwick"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "item_required": "Unova Stone",
                "pokemon_id": 609,
                "pokemon_name": "Chandelure"
            }
        ],
        "form": "Normal",
        "pokemon_id": 608,
        "pokemon_name": "Lampent"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 611,
                "pokemon_name": "Fraxure"
            }
        ],
        "form": "Normal",
        "pokemon_id": 610,
        "pokemon_name": "Axew"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 612,
                "pokemon_name": "Haxorus"
            }
        ],
        "form": "Normal",
        "pokemon_id": 611,
        "pokemon_name": "Fraxure"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 614,
                "pokemon_name": "Beartic"
            }
        ],
        "form": "Normal",
        "pokemon_id": 613,
        "pokemon_name": "Cubchoo"
    },
    {
        "evolutions": [
            {
                "candy_required": 200,
                "form": "Normal",
                "no_candy_cost_if_traded": true,
                "pokemon_id": 617,
                "pokemon_name": "Accelgor"
            }
        ],
        "form": "Normal",
        "pokemon_id": 616,
        "pokemon_name": "Shelmet"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 620,
                "pokemon_name": "Mienshao"
            }
        ],
        "form": "Normal",
        "pokemon_id": 619,
        "pokemon_name": "Mienfoo"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 623,
                "pokemon_name": "Golurk"
            }
        ],
        "form": "Normal",
        "pokemon_id": 622,
        "pokemon_name": "Golett"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 625,
                "pokemon_name": "Bisharp"
            }
        ],
        "form": "Normal",
        "pokemon_id": 624,
        "pokemon_name": "Pawniard"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 628,
                "pokemon_name": "Braviary"
            }
        ],
        "form": "Normal",
        "pokemon_id": 627,
        "pokemon_name": "Rufflet"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 630,
                "pokemon_name": "Mandibuzz"
            }
        ],
        "form": "Normal",
        "pokemon_id": 629,
        "pokemon_name": "Vullaby"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 634,
                "pokemon_name": "Zweilous"
            }
        ],
        "form": "Normal",
        "pokemon_id": 633,
        "pokemon_name": "Deino"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 635,
                "pokemon_name": "Hydreigon"
            }
        ],
        "form": "Normal",
        "pokemon_id": 634,
        "pokemon_name": "Zweilous"
    },
    {
        "evolutions": [
            {
                "candy_required": 400,
                "form": "Normal",
                "pokemon_id": 637,
                "pokemon_name": "Volcarona"
            }
        ],
        "form": "Normal",
        "pokemon_id": 636,
        "pokemon_name": "Larvesta"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 651,
                "pokemon_name": "Quilladin"
            }
        ],
        "form": "Normal",
        "pokemon_id": 650,
        "pokemon_name": "Chespin"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 652,
                "pokemon_name": "Chesnaught"
            }
        ],
        "form": "Normal",
        "pokemon_id": 651,
        "pokemon_name": "Quilladin"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 654,
                "pokemon_name": "Braixen"
            }
        ],
        "form": "Normal",
        "pokemon_id": 653,
        "pokemon_name": "Fennekin"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 655,
                "pokemon_name": "Delphox"
            }
        ],
        "form": "Normal",
        "pokemon_id": 654,
        "pokemon_name": "Braixen"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 657,
                "pokemon_name": "Frogadier"
            }
        ],
        "form": "Normal",
        "pokemon_id": 656,
        "pokemon_name": "Froakie"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 658,
                "pokemon_name": "Greninja"
            }
        ],
        "form": "Normal",
        "pokemon_id": 657,
        "pokemon_name": "Frogadier"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 660,
                "pokemon_name": "Diggersby"
            }
        ],
        "form": "Normal",
        "pokemon_id": 659,
        "pokemon_name": "Bunnelby"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 662,
                "pokemon_name": "Fletchinder"
            }
        ],
        "form": "Normal",
        "pokemon_id": 661,
        "pokemon_name": "Fletchling"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 663,
                "pokemon_name": "Talonflame"
            }
        ],
        "form": "Normal",
        "pokemon_id": 662,
        "pokemon_name": "Fletchinder"
    },
    {
        "evolutions": [
            {
                "candy_required": 12,
                "form": "Normal",
                "pokemon_id": 665,
                "pokemon_name": "Spewpa"
            }
        ],
        "form": "Normal",
        "pokemon_id": 664,
        "pokemon_name": "Scatterbug"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 666,
                "pokemon_name": "Vivillon"
            }
        ],
        "form": "Normal",
        "pokemon_id": 665,
        "pokemon_name": "Spewpa"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "gender_required": "Male",
                "pokemon_id": 668,
                "pokemon_name": "Pyroar"
            },
            {
                "candy_required": 50,
                "form": "Female",
                "gender_required": "Female",
                "pokemon_id": 668,
                "pokemon_name": "Pyroar"
            }
        ],
        "form": "Normal",
        "pokemon_id": 667,
        "pokemon_name": "Litleo"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 670,
                "pokemon_name": "Floette"
            }
        ],
        "form": "Normal",
        "pokemon_id": 669,
        "pokemon_name": "Flabebe"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 671,
                "pokemon_name": "Florges"
            }
        ],
        "form": "Normal",
        "pokemon_id": 670,
        "pokemon_name": "Floette"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 673,
                "pokemon_name": "Gogoat"
            }
        ],
        "form": "Normal",
        "pokemon_id": 672,
        "pokemon_name": "Skiddo"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 675,
                "pokemon_name": "Pangoro"
            }
        ],
        "form": "Normal",
        "pokemon_id": 674,
        "pokemon_name": "Pancham"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "gender_required": "Male",
                "pokemon_id": 678,
                "pokemon_name": "Meowstic"
            },
            {
                "candy_required": 50,
                "form": "Female",
                "gender_required": "Female",
                "pokemon_id": 678,
                "pokemon_name": "Meowstic"
            }
        ],
        "form": "Normal",
        "pokemon_id": 677,
        "pokemon_name": "Espurr"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 680,
                "pokemon_name": "Doublade"
            }
        ],
        "form": "Normal",
        "pokemon_id": 679,
        "pokemon_name": "Honedge"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "pokemon_id": 681,
                "pokemon_name": "Aegislash"
            }
        ],
        "form": "Normal",
        "pokemon_id": 680,
        "pokemon_name": "Doublade"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 683,
                "pokemon_name": "Aromatisse"
            }
        ],
        "form": "Normal",
        "pokemon_id": 682,
        "pokemon_name": "Spritzee"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 685,
                "pokemon_name": "Slurpuff"
            }
        ],
        "form": "Normal",
        "pokemon_id": 684,
        "pokemon_name": "Swirlix"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 687,
                "pokemon_name": "Malamar",
                "upside_down": true
            }
        ],
        "form": "Normal",
        "pokemon_id": 686,
        "pokemon_name": "Inkay"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 689,
                "pokemon_name": "Barbaracle"
            }
        ],
        "form": "Normal",
        "pokemon_id": 688,
        "pokemon_name": "Binacle"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 691,
                "pokemon_name": "Dragalge"
            }
        ],
        "form": "Normal",
        "pokemon_id": 690,
        "pokemon_name": "Skrelp"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 693,
                "pokemon_name": "Clawitzer"
            }
        ],
        "form": "Normal",
        "pokemon_id": 692,
        "pokemon_name": "Clauncher"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 695,
                "pokemon_name": "Heliolisk"
            }
        ],
        "form": "Normal",
        "pokemon_id": 694,
        "pokemon_name": "Helioptile"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "only_evolves_in_daytime": true,
                "pokemon_id": 697,
                "pokemon_name": "Tyrantrum"
            }
        ],
        "form": "Normal",
        "pokemon_id": 696,
        "pokemon_name": "Tyrunt"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "only_evolves_in_nighttime": true,
                "pokemon_id": 699,
                "pokemon_name": "Aurorus"
            }
        ],
        "form": "Normal",
        "pokemon_id": 698,
        "pokemon_name": "Amaura"
    },
    {
        "evolutions": [
            {
                "candy_required": 25,
                "form": "Normal",
                "pokemon_id": 705,
                "pokemon_name": "Sliggoo"
            }
        ],
        "form": "Normal",
        "pokemon_id": 704,
        "pokemon_name": "Goomy"
    },
    {
        "evolutions": [
            {
                "candy_required": 100,
                "form": "Normal",
                "lure_required": "Rainy Lure Module",
                "pokemon_id": 706,
                "pokemon_name": "Goodra"
            }
        ],
        "form": "Normal",
        "pokemon_id": 705,
        "pokemon_name": "Sliggoo"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 709,
                "pokemon_name": "Trevenant"
            }
        ],
        "form": "Normal",
        "pokemon_id": 708,
        "pokemon_name": "Phantump"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 711,
                "pokemon_name": "Gourgeist"
            }
        ],
        "form": "Normal",
        "pokemon_id": 710,
        "pokemon_name": "Pumpkaboo"
    },
    {
        "evolutions": [
            {
                "candy_required": 50,
                "form": "Normal",
                "pokemon_id": 713,
                "pokemon_name": "Avalugg"
            }
        ],
        "form": "Normal",
        "pokemon_id": 712,
        "pokemon_name": "Bergmite"
    },
    {
        "evolutions": [
            {
                "candy_required": 400,
                "form": "Normal",
                "pokemon_id": 715,
                "pokemon_name": "Noivern"
            }
        ],
        "form": "Normal",
        "pokemon_id": 714,
        "pokemon_name": "Noibat"
    },
    {
        "evolutions": [
            {
                "candy_required": 400,
                "form": "Normal",
                "pokemon_id": 809,
                "pokemon_name": "Melmetal"
            }
        ],
        "form": "Normal",
        "pokemon_id": 808,
        "pokemon_name": "Meltan"
    }
];

// CONCATENATED MODULE: ./src/ScreenPokedex.tsx










// import StatsTable from "./StatsTable";






const PAGE_SIZE = 20;
const nbsp = "\u00a0";
function MonsterType({ type, index }) {
    return (react["createElement"]("div", { className: classnames_default()(`type-${type} type-bg-dark`, "ttc tc flex", "pv0 ph2 lh-copy b", "br-pill ba border3 f6", { ml1: index > 0 }) }, type));
}
MonsterType.displayName = "MonsterType";
function WeatherBoosted({ type, index }) {
    return (react["createElement"]("div", { className: classnames_default()(`type-${getWeatherBoosted(type)}`, "ttc tc flex", "pv0 ph2 lh-copy b", "br-pill ba border3 f6", { ml1: index > 0 }) }, getWeatherBoosted(type)));
}
WeatherBoosted.displayName = "WeatherBoosted";
function findByDex(data, Dex) {
    const el = data.find(el => el.Dex === Dex); // Possibly returns `undefined`
    if (el) {
        return (react["createElement"]("div", { className: "tl ph2" },
            "Level ",
            el.Lvl,
            react["createElement"]("span", { "aria-hidden": "true", className: "o-50" }, "\u00A0\u2022\u00A0"),
            "CP ",
            el.CP,
            react["createElement"]("span", { "aria-hidden": "true", className: "o-50" }, "\u00A0\u2022\u00A0"),
            "IV ",
            el.AtkIV,
            "/",
            el.DefIV,
            "/",
            el.StaIV));
    }
}
function findByName(data, Name) {
    const myName = Name.split('-');
    // console.log(myName);
    // console.log(myName[0]);
    // console.log(myName[1]);
    const el = data.find(el => el.title.toLocaleLowerCase().includes(myName[0]));
    if (el) {
        return (react["createElement"]("div", { className: "tl ph2" },
            el.field_buddy_distance_requirement,
            " to earn a candy"));
    }
}
function findByDexToEvo(data, Dex) {
    const el = data.find(el => el.pokemon_id === Dex); // Possibly returns `undefined`
    if (el) {
        // console.log(el.evolutions[0].candy_required);
        return (react["createElement"]("div", { className: "tl ph2" },
            react["createElement"](Link, { className: "fg-link OutlineFocus", style: { textDecoration: "none" }, to: `/pokedex?q=${el.evolutions[0].pokemon_name}` }, el.evolutions[0].pokemon_name),
            " with ",
            el.evolutions[0].candy_required,
            " candies"));
    }
}
function findByDexFromEvo(data, Dex) {
    const el = data.find(el => el.evolutions[0].pokemon_id === Dex); // Possibly returns `undefined`
    if (el) {
        // console.log(el.evolutions[0].candy_required);
        return (react["createElement"]("div", { className: "tl ph2" },
            react["createElement"](Link, { className: "fg-link OutlineFocus", style: { textDecoration: "none" }, to: `/pokedex?q=${el.pokemon_name}` }, el.pokemon_name),
            " by ",
            el.evolutions[0].candy_required,
            " candies"));
    }
}
function Monster({ pokemon }) {
    const displayNumber = "#" + String(pokemon.number).padStart(3, "0");
    const params = new URLSearchParams({ types: pokemon.types.join(" ") });
    const speciesName = pickTranslation(pokemon.speciesNames);
    const formName = pickTranslation(pokemon.formNames);
    return (react["createElement"]("div", { className: classnames_default()("fg1 pv3", "flex-ns items-center", "Monster") },
        react["createElement"]("div", { className: "flex flex-column" },
            react["createElement"]("div", { className: "flex flex-column pa3 br4 bg1 flex ba border4" },
                react["createElement"]("div", { className: "flex items-center" },
                    react["createElement"]("h2", { className: "mv0 f4" }, speciesName),
                    react["createElement"]("div", { className: "ph1 flex-auto" }),
                    react["createElement"]("div", { className: "fg3 mv0 tabular-nums f5" }, displayNumber)),
                react["createElement"]("div", { className: "nv2 fg3 f5" }, formName || nbsp),
                react["createElement"]("div", { className: "pv3 flex justify-center" },
                    react["createElement"]("img", { src: getImage(pokemon.id), role: "presentation", alt: "", className: "db img-crisp", width: 96, height: 96 })),
                react["createElement"]("div", { className: "pt2 flex justify-end" }, pokemon.types.map((t, i) => (react["createElement"](MonsterType, { key: i, type: t, index: i })))),
                react["createElement"]("div", { className: "pt2 flex justify-end" }, pokemon.types.map((t, i) => (react["createElement"](WeatherBoosted, { key: i, type: t, index: i })))))),
        react["createElement"]("div", { className: "flex flex-column" },
            react["createElement"]("div", { className: "StatsTable tabular-nums" },
                react["createElement"]("div", { className: "b tl" }, "GreatLeague"),
                findByDex(DataPvpGL, pokemon.number)),
            react["createElement"]("div", { className: "StatsTable tabular-nums" },
                react["createElement"]("div", { className: "b tl" }, "Ultra  League"),
                findByDex(DataPvpUL, pokemon.number)),
            react["createElement"]("div", { className: "StatsTable tabular-nums" },
                react["createElement"]("div", { className: "b tl" }, "Buddy distance"),
                findByName(DataBuddyCandies, pokemon.name)),
            react["createElement"]("div", { className: "StatsTable tabular-nums" },
                react["createElement"]("div", { className: "b tl" }, "Evolutions from:"),
                findByDexFromEvo(DataEvolutions, pokemon.number)),
            react["createElement"]("div", { className: "StatsTable tabular-nums" },
                react["createElement"]("div", { className: "b tl" }, "Evolutions to:"),
                findByDexToEvo(DataEvolutions, pokemon.number)),
            react["createElement"]("div", { className: "flex justify-end" },
                react["createElement"]("a", { "aria-label": `Bulbapedia page for ${speciesName}`, className: "underline fg-link OutlineFocus", href: pokemon.bulbapediaURL }, "Bulbapedia"),
                react["createElement"]("span", { "aria-hidden": "true", className: "o-50" }, "\u00A0\u2022\u00A0"),
                react["createElement"](Link, { "aria-label": `Offense for ${speciesName} (${formName})`, className: "underline fg-link OutlineFocus", to: `/offense?${params}#matchup-offense` }, "Offense"),
                react["createElement"]("span", { "aria-hidden": "true", className: "o-50" }, "\u00A0\u2022\u00A0"),
                react["createElement"](Link, { "aria-label": `Defense for ${speciesName} (${formName})`, className: "underline fg-link OutlineFocus", to: `/defense?${params}#matchup-defense` }, "Defense")))));
}
Monster.displayName = "Monster";
function ScreenPokedex({ allPokemon, setPokedexParams, isLoading, }) {
    const search = useSearch();
    const history = useHistory();
    const query = search.get("q") || "";
    const [debouncedQuery] = useDebounce(query, 500);
    const page = Number(search.get("page") || 1) - 1;
    const searchablePkmn = react["useMemo"](() => {
        return allPokemon.map((p) => {
            return {
                ...p,
                speciesName: pickTranslation(p.speciesNames),
                formName: pickTranslation(p.formNames),
            };
        });
    }, [allPokemon]);
    const pkmn = react["useMemo"](() => {
        const s = debouncedQuery.trim();
        if (/^[0-9]+$/.test(s)) {
            const number = Number(s);
            return searchablePkmn.filter((p) => p.number === number);
        }
        const types = Object(src_data["k" /* typesOrNoneFromString */])(s);
        if (types.length > 0) {
            return searchablePkmn.filter((p) => {
                if (types.length === 1) {
                    return p.types[0] === types[0] || p.types[1] === types[0];
                }
                if (types.length === 2 && types[1] === src_data["b" /* Type */].NONE) {
                    return p.types.length === 1 && p.types[0] === types[0];
                }
                return (p.types.slice().sort().join(" ") === types.slice().sort().join(" "));
            });
        }
        return match_sorter_esm(searchablePkmn, s, {
            keys: ["speciesName", "formName", "number"],
        });
    }, [debouncedQuery, searchablePkmn]);
    function createParams(newQuery, newPage) {
        const params = new URLSearchParams();
        if (newQuery) {
            params.set("q", newQuery);
        }
        if (Number(newPage) > 0) {
            params.set("page", String(newPage + 1));
        }
        return "?" + params;
    }
    function update(newQuery, newPage) {
        const params = createParams(newQuery, newPage);
        history.replace({ search: params });
    }
    const params = createParams(query, page);
    react["useEffect"](() => {
        setPokedexParams(params);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params]);
    return (react["createElement"]("main", { className: "ph3 mt3 center content-narrow" },
        react["createElement"](Search, { search: query, updateSearch: (newQuery) => {
                update(newQuery, 0);
            } }),
        react["createElement"]("div", { className: "flex justify-between ph2 nt2 pb3 bb border4 f6" },
            react["createElement"]("span", { className: "fg3" }, "Search by name, number, or types"),
            react["createElement"](Link, { to: "/pokedex/help", className: "underline fg-link OutlineFocus" }, "Help")),
        isLoading ? (react["createElement"]("div", { className: "Spinner center mt4 f2" })) : (react["createElement"](Paginator, { currentPage: page, urlForPage: (newPage) => {
                return createParams(query, newPage);
            }, pageSize: PAGE_SIZE, emptyState: react["createElement"]("p", { className: "fg4 f4 b tc m0" }, "No Pok\u00E9mon found"), items: pkmn, renderPage: (page) => page.map((pokemon) => (react["createElement"](Monster, { key: pokemon.id, pokemon: pokemon }))) }))));
}
ScreenPokedex.displayName = "ScreenPokedex";

// CONCATENATED MODULE: ./src/ScreenPokedexHelp.tsx


function ScreenPokdexHelp({ pokedexParams, }) {
    return (react["createElement"]("main", { className: "pa3 center content-narrow lh-copy" },
        react["createElement"]("h2", { className: "lh-title f4" }, "Search by name"),
        react["createElement"]("p", null, "You can search for a Pok\u00E9mon by name. If you only remember part of the Pok\u00E9mon's name, It can still probably find it for you. It can't deal with typos right now though."),
        react["createElement"]("h2", { className: "lh-title f4" }, "Search by number"),
        react["createElement"]("p", null,
            "Search by national dex number. If you want Bulbsaur, just type ",
            react["createElement"]("i", null, "1"),
            ", not ",
            react["createElement"]("i", null, "#001"),
            "."),
        react["createElement"]("h2", { className: "lh-title f4" }, "Search by type"),
        react["createElement"]("p", null, "Here are a few examples of how to seach by type."),
        react["createElement"]("ul", { className: "pl3" },
            react["createElement"]("li", null,
                react["createElement"]("code", { className: "dib br2 ph2 bg3" }, "fire"),
                react["createElement"]("p", null, "Search for Pok\u00E9mon that have a fire as either of their types in any form (e.g. Charmander, Charizard, Rotom).")),
            react["createElement"]("li", null,
                react["createElement"]("code", { className: "dib br2 ph2 bg3" }, "water flying"),
                react["createElement"]("p", null, "Search for Pok\u00E9mon that are either water/flying (e.g. Gyarados) or flying/water (e.g. Cramorant).")),
            react["createElement"]("li", null,
                react["createElement"]("code", { className: "dib br2 ph2 bg3" }, "grass none"),
                react["createElement"]("p", null, "Search for Pok\u00E9mon that are only grass type, no 2nd type (e.g. Tangela, Chikorita)."))),
        react["createElement"]("p", null,
            react["createElement"]("b", { "aria-hidden": "true" }, "\u2190"),
            " ",
            react["createElement"](Link, { to: `/pokedex${pokedexParams}`, className: "underline fg-link OutlineFocus" }, "Back to Pok\u00E9dex"))));
}

// EXTERNAL MODULE: ./node_modules/fastest-levenshtein/index.js
var fastest_levenshtein = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/papaparse/papaparse.min.js
var papaparse_min = __webpack_require__(9);
var papaparse_min_default = /*#__PURE__*/__webpack_require__.n(papaparse_min);

// CONCATENATED MODULE: ./src/pickFile.ts
async function pickFile({ accept, }) {
    return new Promise((resolve) => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = accept;
        input.onchange = () => {
            var _a;
            resolve((_a = input.files) === null || _a === void 0 ? void 0 : _a[0]);
        };
        input.click();
    });
}

// CONCATENATED MODULE: ./src/saveFile.tsx
function saveFile({ filename, type, data, }) {
    const file = new File([data], filename, { type });
    const url = URL.createObjectURL(file);
    const a = document.createElement("a");
    a.download = filename;
    a.href = url;
    a.click();
    URL.revokeObjectURL(url);
}

// CONCATENATED MODULE: ./src/ScreenWeaknessCoverage.tsx








const buttonClasses = classnames_default()("no-underline", "db", "ba br2 pv1 ph2", "b f5", "SimpleFocus", "active-squish", "border2 button-shadow button-bg button-bg-hover color-inherit");
function ScreenWeaknessCoverage({ setCoverageTypes, offenseParams, fallbackCoverageTypes, isLoading, }) {
    const [lastUpdated, setLastUpdated] = react["useState"](new Date());
    const [statusText, setStatusText] = react["useState"]("");
    const statusRef = react["useRef"](null);
    react["useEffect"](() => {
        if (statusRef.current instanceof HTMLElement) {
            statusRef.current.scrollIntoView();
        }
    }, [lastUpdated]);
    function saveCSV() {
        const csv = papaparse_min_default.a.unparse({
            fields: ["Number", "Name", "Type 1", "Type 2"],
            data: fallbackCoverageTypes.map((t) => {
                const type2 = t.type2 === src_data["b" /* Type */].NONE ? "" : t.type2;
                return [t.number, t.name, t.type1, type2];
            }),
        }, {
            header: true,
            skipEmptyLines: true,
        });
        saveFile({
            filename: "pkmn.help type coverage.csv",
            type: "text/csv",
            data: csv,
        });
        setStatusText("Exported default Pokémon forms");
        setLastUpdated(new Date());
    }
    async function loadCSV() {
        const file = await pickFile({ accept: ".csv" });
        if (!file) {
            return;
        }
        const text = await file.text();
        const result = papaparse_min_default.a.parse(text, {
            header: true,
            skipEmptyLines: true,
            transformHeader: (header) => {
                return Object(fastest_levenshtein["closest"])(header.toLowerCase().replace(/[a-z0-9]/i, ""), [
                    "number",
                    "name",
                    "type1",
                    "type2",
                ]);
            },
            transform: (value, field) => {
                if (field === "type1") {
                    return Object(src_data["g" /* stringToType */])(value, src_data["b" /* Type */].NORMAL);
                }
                if (field === "type2") {
                    return Object(src_data["g" /* stringToType */])(value, src_data["b" /* Type */].NONE);
                }
                return value;
            },
        });
        if (result.errors.length > 0) {
            alert("Error loading CSV. Don't change header names.");
            return;
        }
        const newCoverageTypes = result.data.map(src_data["e" /* objectToCoverageType */]);
        setStatusText(`Imported ${newCoverageTypes.length} Pokémon forms from "${file.name}"`);
        setCoverageTypes(newCoverageTypes);
        setLastUpdated(new Date());
    }
    function loadDefault() {
        setStatusText("Loaded default Pokémon forms");
        setCoverageTypes(fallbackCoverageTypes);
        setLastUpdated(new Date());
    }
    return (react["createElement"]("main", { className: "pa3 center content-narrow lh-copy" },
        react["createElement"]("h2", { className: "lh-title f5" }, "Weakness Coverage"),
        react["createElement"]("p", null, "Import/export custom Pok\u00E9dex CSV files to see weakness coverage for different Pok\u00E9mon. Create a custom CSV file with just the OU tier Pok\u00E9mon, or even create your own Pok\u00E9mon from scratch."),
        react["createElement"]("p", null, "CSV data is loaded by column header name, not column order, so you can add or re-order columns if you want (e.g. add a \"tier\" column, or a \"notes\" column)."),
        react["createElement"]("p", null, "CSV files can be edited with Google Sheets, Microsoft Excel, OpenOffice, LibreOffice, Notepad, and more."),
        isLoading ? (react["createElement"]("div", { className: "Spinner center mt4 f2" })) : (react["createElement"]("div", { className: "pt2 ButtonGrid" },
            react["createElement"]("button", { type: "button", className: buttonClasses, onClick: () => {
                    saveCSV();
                } }, "Export"),
            react["createElement"]("span", null, "Export the default Pok\u00E9dex to a CSV file"),
            react["createElement"]("button", { type: "button", className: buttonClasses, onClick: () => {
                    loadCSV();
                } }, "Import"),
            react["createElement"]("span", null, "Import an edited Pok\u00E9dex CSV file"),
            react["createElement"]("button", { type: "button", className: buttonClasses, onClick: () => {
                    loadDefault();
                } }, "Reset"),
            react["createElement"]("span", null, "Reset to the default Pok\u00E9dex"))),
        react["createElement"]("p", { className: "f4 b", hidden: !statusText, ref: statusRef }, statusText),
        react["createElement"]("p", null,
            react["createElement"]("b", { "aria-hidden": "true" }, "\u2190"),
            " ",
            react["createElement"](Link, { to: `/offense${offenseParams}`, className: "underline fg-link OutlineFocus" }, "Back to offense"))));
}
ScreenWeaknessCoverage.displayName = "ScreenWeaknessCoverage";

// CONCATENATED MODULE: ./src/App.tsx









const tabClass = classnames_default()([
    "no-underline",
    "pv2 ph2 f5",
    "TabFocus",
    "b bn",
    "br--top br2",
    "bg-transparent",
    "fg3 bottom-border-thick",
]);
const tabClassActive = classnames_default()(["fg1 bottom-border-thick-current"]);
function App() {
    const [defenseParams, setDefenseParams] = react["useState"]("");
    const [offenseParams, setOffenseParams] = react["useState"]("");
    const [pokedexParams, setPokedexParams] = react["useState"]("");
    const [isLoading, setIsLoading] = react["useState"](true);
    const [coverageTypes, setCoverageTypes] = react["useState"]([]);
    const [fallbackCoverageTypes, setFallbackCoverageTypes] = react["useState"]([]);
    const [AllPokemon, setAllPokemon] = react["useState"]([]);
    react["useEffect"](() => {
        async function load() {
            const bigPKMN = await __webpack_require__.e(/* import() | big-pkmn */ 0).then(__webpack_require__.bind(null, 28));
            setIsLoading(false);
            setCoverageTypes(bigPKMN.fallbackCoverageTypes);
            setFallbackCoverageTypes(bigPKMN.fallbackCoverageTypes);
            setAllPokemon(bigPKMN.AllPokemon);
        }
        load();
    }, []);
    return (react["createElement"]("div", { className: "sans-serif bg2 fg1 min-vh-100 flex flex-column" },
        react["createElement"]("div", { className: "flex-auto" },
            react["createElement"]("h1", { className: "f3-ns f4 tc relative white PokeballHeader" },
                react["createElement"](react_router_dom_HashRouter, null,
                    react["createElement"](Link, { to: "/", className: "no-underline white hover-white-90 DottedFocus" }, "Pok\u00E9mon Type Calculator"))),
            react["createElement"]("nav", { className: classnames_default()([
                    "flex justify-center",
                    "bg1",
                    "bb TabBarBorder",
                    "pt3",
                ]) },
                react["createElement"](react_router_dom_HashRouter, null,
                    react["createElement"](NavLink, { className: tabClass, activeClassName: tabClassActive, to: `/offense${offenseParams}` }, "Offense"),
                    react["createElement"](NavLink, { className: tabClass, activeClassName: tabClassActive, to: `/defense${defenseParams}` }, "Defense"),
                    react["createElement"](NavLink, { className: tabClass, activeClassName: tabClassActive, to: `/pokedex${pokedexParams}` }, "Pok\u00E9dex"),
                    react["createElement"](NavLink, { className: tabClass, activeClassName: tabClassActive, to: "/info" }, "Info"))),
            react["createElement"](react_router_Switch, null,
                react["createElement"](react_router_dom_HashRouter, null,
                    react["createElement"](react_router_Route, { path: "/offense/coverage", render: () => (react["createElement"](ScreenWeaknessCoverage, { setCoverageTypes: setCoverageTypes, offenseParams: offenseParams, fallbackCoverageTypes: fallbackCoverageTypes, isLoading: isLoading })) }),
                    react["createElement"](react_router_Route, { path: "/offense", render: () => (react["createElement"](ScreenOffense, { coverageTypes: coverageTypes, setCoverageTypes: setCoverageTypes, setOffenseParams: setOffenseParams, fallbackCoverageTypes: fallbackCoverageTypes, isLoading: isLoading })) }),
                    react["createElement"](react_router_Route, { path: "/defense", render: () => (react["createElement"](ScreenDefense, { setDefenseParams: setDefenseParams, fallbackCoverageTypes: fallbackCoverageTypes })) }),
                    react["createElement"](react_router_Route, { path: "/pokedex/help", render: () => react["createElement"](ScreenPokdexHelp, { pokedexParams: pokedexParams }) }),
                    react["createElement"](react_router_Route, { path: "/pokedex", render: () => (react["createElement"](ScreenPokedex, { setPokedexParams: setPokedexParams, allPokemon: AllPokemon, isLoading: isLoading })) }),
                    react["createElement"](react_router_Route, { path: "/info", component: ScreenInfo }),
                    react["createElement"](Redirect, { to: "/defense" }))))));
}
App.displayName = "App";

// CONCATENATED MODULE: ./src/ErrorBoundary.tsx

class ErrorBoundary_ErrorBoundary extends react["Component"] {
    constructor(props) {
        super(props);
        this.state = {};
    }
    static getDerivedStateFromError(error) {
        return { error };
    }
    render() {
        if (this.state.error) {
            return this.props.render(this.state.error);
        }
        return this.props.children;
    }
}
ErrorBoundary_ErrorBoundary.displayName = "ErrorBoundary";

// CONCATENATED MODULE: ./src/ScreenError.tsx

const ScreenError = ({ error }) => {
    return (react["createElement"]("div", { className: "sans-serif ph4 content-narrow f4 center fg2 lh-copy" },
        react["createElement"]("h1", null, "pkmn.help: Error"),
        react["createElement"]("p", null,
            "Please send an email to",
            " ",
            react["createElement"]("a", { href: "mailto:brian@wavebeem.com", className: "fg-link" }, "brian@wavebeem.com"),
            " ",
            "describing how to reproduce this error, and include the following error message:"),
        react["createElement"]("pre", { className: "f5 bg1 pa2 br2 ba border3 overflow-x-auto" }, error.message),
        react["createElement"]("p", null,
            react["createElement"]("b", { "aria-hidden": "true" }, "\u2190"),
            " ",
            react["createElement"]("a", { href: "/", className: "f3 fg-link" }, "Back to pkmn.help"))));
};
ScreenError.displayName = "ScreenError";
/* harmony default export */ var src_ScreenError = (ScreenError);

// CONCATENATED MODULE: ./src/style.css
// extracted by mini-css-extract-plugin

// CONCATENATED MODULE: ./src/main.tsx







react_dom["render"](react["createElement"](react["StrictMode"], null,
    react["createElement"](ErrorBoundary_ErrorBoundary, { render: (error) => react["createElement"](src_ScreenError, { error: error }) },
        react["createElement"](react_router_dom_BrowserRouter, null,
            react["createElement"](App, null)))), document.querySelector("#app"));


/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map