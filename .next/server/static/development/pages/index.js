module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/helpers/commits.js":
/*!********************************!*\
  !*** ./lib/helpers/commits.js ***!
  \********************************/
/*! exports provided: findLatestDate, fetchCommits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findLatestDate", function() { return findLatestDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCommits", function() { return fetchCommits; });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);

const findLatestDate = commits => {
  if (!commits.length) return;
  const latestCommit = commits[0];
  return latestCommit.commit.author.date;
};
const fetchCommits = async (branch, sinceDate) => {
  const sinceQuery = sinceDate ? `&since=${sinceDate}` : "";
  const result = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`https://api.github.com/repos/eduardocastaneda/timereporting/commits?per_page=100&sha=${branch}${sinceQuery}`, {
    headers: {
      Authorization: `token ${"9863c20360c577c37220040e93a64a0661ded738"}`
    }
  });
  return result.json();
};

/***/ }),

/***/ "./lib/helpers/date.js":
/*!*****************************!*\
  !*** ./lib/helpers/date.js ***!
  \*****************************/
/*! exports provided: addSecond, formatDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSecond", function() { return addSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
const zeroPadding = number => {
  if (number < 10) return `0${number}`;
  return number;
};

const addSecond = dateString => {
  const date = new Date(dateString);
  const seconds = date.getSeconds();
  date.setSeconds(seconds + 1);
  return date.toISOString();
};
const formatDate = dateString => {
  const date = new Date(dateString);
  return `${date.getFullYear()}-${zeroPadding(date.getMonth() + 1)}-${zeroPadding(date.getDate())} ${zeroPadding(date.getHours())}:${zeroPadding(date.getMinutes())}`;
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_helpers_commits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/helpers/commits */ "./lib/helpers/commits.js");
/* harmony import */ var _lib_helpers_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/helpers/date */ "./lib/helpers/date.js");
var _jsxFileName = "/Users/eduardocastaneda/Projekt/privat/gitdiff/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function HomePage({
  developmentCommits
}) {
  const commits = developmentCommits.map(data => {
    let {
      message
    } = data.commit;

    if (message.indexOf("*") > -1) {
      message = message.split("*")[0];
    }

    return {
      message,
      author: data.author.login,
      date: Object(_lib_helpers_date__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(data.commit.author.date),
      key: data.commit.author.date
    };
  });
  return __jsx("div", {
    className: "jsx-3422529507" + " " + "home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3422529507",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Next merge/deploy to Master"), __jsx("ul", {
    className: "jsx-3422529507",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, commits.map(commit => {
    return __jsx("li", {
      key: commit.key,
      className: "jsx-3422529507",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-3422529507" + " " + "message",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, commit.message), __jsx("span", {
      className: "jsx-3422529507" + " " + "info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, commit.author, " ", commit.date));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3422529507",
    __self: this
  }, ".home.jsx-3422529507{font-family:Helvetica;}ul.jsx-3422529507{padding:0;margin:0;}li.jsx-3422529507{list-style:none;border-radius:3px;background-color:#e8edf0;padding:10px;margin-bottom:10px;max-width:980px;}.message.jsx-3422529507{display:block;margin-bottom:3px;font-size:18px;font-weight:bold;color:#505450;}.info.jsx-3422529507{display:block;font-size:14px;color:#505450;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZHVhcmRvY2FzdGFuZWRhL1Byb2pla3QvcHJpdmF0L2dpdGRpZmYvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNrQixBQUdpQyxBQUlaLEFBS00sQUFRRixBQU9BLFVBbkJMLElBYVMsQUFPSCxFQWZHLEdBSnBCLEdBTEEsT0F5QmdCLEdBUEMsRUFSVSxTQWdCM0IsSUFQbUIsWUFSSixLQVNDLFFBUkssTUFTckIsYUFSa0IsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9lZHVhcmRvY2FzdGFuZWRhL1Byb2pla3QvcHJpdmF0L2dpdGRpZmYvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmaW5kTGF0ZXN0RGF0ZSwgZmV0Y2hDb21taXRzIH0gZnJvbSBcIi4uL2xpYi9oZWxwZXJzL2NvbW1pdHNcIjtcbmltcG9ydCB7IGFkZFNlY29uZCwgZm9ybWF0RGF0ZSB9IGZyb20gXCIuLi9saWIvaGVscGVycy9kYXRlXCI7XG5cbmZ1bmN0aW9uIEhvbWVQYWdlKHsgZGV2ZWxvcG1lbnRDb21taXRzIH0pIHtcbiAgY29uc3QgY29tbWl0cyA9IGRldmVsb3BtZW50Q29tbWl0cy5tYXAoKGRhdGEpID0+IHtcbiAgICBsZXQgeyBtZXNzYWdlIH0gPSBkYXRhLmNvbW1pdDtcbiAgICBpZiAobWVzc2FnZS5pbmRleE9mKFwiKlwiKSA+IC0xKSB7XG4gICAgICBtZXNzYWdlID0gbWVzc2FnZS5zcGxpdChcIipcIilbMF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBhdXRob3I6IGRhdGEuYXV0aG9yLmxvZ2luLFxuICAgICAgZGF0ZTogZm9ybWF0RGF0ZShkYXRhLmNvbW1pdC5hdXRob3IuZGF0ZSksXG4gICAgICBrZXk6IGRhdGEuY29tbWl0LmF1dGhvci5kYXRlXG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVcIj5cbiAgICAgIDxoMT5OZXh0IG1lcmdlL2RlcGxveSB0byBNYXN0ZXI8L2gxPlxuICAgICAgPHVsPlxuICAgICAgICB7Y29tbWl0cy5tYXAoKGNvbW1pdCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkga2V5PXtjb21taXQua2V5fT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWVzc2FnZVwiPntjb21taXQubWVzc2FnZX08L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICAgICAgICAgICAgICB7Y29tbWl0LmF1dGhvcn0ge2NvbW1pdC5kYXRlfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC91bD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmhvbWUge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG4gICAgICAgIH1cblxuICAgICAgICB1bCB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cblxuICAgICAgICBsaSB7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZWRmMDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiA5ODBweDtcbiAgICAgICAgfVxuICAgICAgICAubWVzc2FnZSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBjb2xvcjogIzUwNTQ1MDtcbiAgICAgICAgfVxuICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGNvbG9yOiAjNTA1NDUwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbkhvbWVQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbWFzdGVyQ29tbWl0cyA9IGF3YWl0IGZldGNoQ29tbWl0cyhwcm9jZXNzLmVudi5NQVNURVJfQlJBTkNIKTtcbiAgY29uc3QgbGF0ZXN0Q29tbWl0RGF0ZSA9IGZpbmRMYXRlc3REYXRlKG1hc3RlckNvbW1pdHMpO1xuXG4gIGNvbnN0IHNpbmNlRGF0ZSA9IGFkZFNlY29uZChsYXRlc3RDb21taXREYXRlKTtcbiAgY29uc3QgZGV2ZWxvcG1lbnRDb21taXRzID0gYXdhaXQgZmV0Y2hDb21taXRzKFxuICAgIHByb2Nlc3MuZW52LkRFVkVMT1BfQlJBTkNILFxuICAgIHNpbmNlRGF0ZVxuICApO1xuXG4gIHJldHVybiB7IGRldmVsb3BtZW50Q29tbWl0cyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXX0= */\n/*@ sourceURL=/Users/eduardocastaneda/Projekt/privat/gitdiff/pages/index.js */"));
}

HomePage.getInitialProps = async () => {
  const masterCommits = await Object(_lib_helpers_commits__WEBPACK_IMPORTED_MODULE_2__["fetchCommits"])("6fbd5ee6bbdaf1aac8ebf08d7872c121198f6b73");
  const latestCommitDate = Object(_lib_helpers_commits__WEBPACK_IMPORTED_MODULE_2__["findLatestDate"])(masterCommits);
  const sinceDate = Object(_lib_helpers_date__WEBPACK_IMPORTED_MODULE_3__["addSecond"])(latestCommitDate);
  const developmentCommits = await Object(_lib_helpers_commits__WEBPACK_IMPORTED_MODULE_2__["fetchCommits"])("773d0d4ed16cec6aaeacbe22605a06cfee023b88", sinceDate);
  return {
    developmentCommits
  };
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/eduardocastaneda/Projekt/privat/gitdiff/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map