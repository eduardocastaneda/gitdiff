webpackHotUpdate("static/development/pages/index.js",{

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
var zeroPadding = function zeroPadding(number) {
  if (number < 10) return "0".concat(number);
  return number;
};

var addSecond = function addSecond(dateString) {
  var date = new Date(dateString);
  var seconds = date.getSeconds();
  date.setSeconds(seconds + 1);
  return date.toISOString();
};
var formatDate = function formatDate(dateString) {
  var date = new Date(dateString);
  return "".concat(date.getFullYear(), "-").concat(zeroPadding(date.getMonth() + 1), "-").concat(zeroPadding(date.getDate()), " ").concat(zeroPadding(date.getHours()), ":").concat(zeroPadding(date.getMinutes()));
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
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_helpers_commits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/helpers/commits */ "./lib/helpers/commits.js");
/* harmony import */ var _lib_helpers_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/helpers/date */ "./lib/helpers/date.js");

var _jsxFileName = "/Users/eduardocastaneda/Projekt/privat/gitdiff/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function HomePage(_ref) {
  var developmentCommits = _ref.developmentCommits;
  var commits = developmentCommits.map(function (data) {
    var message = data.commit.message;

    if (message.indexOf("*") > -1) {
      message = message.split("*")[0];
    }

    return {
      message: message,
      author: data.author.login,
      date: Object(_lib_helpers_date__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(data.commit.author.date),
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
  }, commits.map(function (commit) {
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
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3422529507",
    __self: this
  }, ".home.jsx-3422529507{font-family:Helvetica;}ul.jsx-3422529507{padding:0;margin:0;}li.jsx-3422529507{list-style:none;border-radius:3px;background-color:#e8edf0;padding:10px;margin-bottom:10px;max-width:980px;}.message.jsx-3422529507{display:block;margin-bottom:3px;font-size:18px;font-weight:bold;color:#505450;}.info.jsx-3422529507{display:block;font-size:14px;color:#505450;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZHVhcmRvY2FzdGFuZWRhL1Byb2pla3QvcHJpdmF0L2dpdGRpZmYvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNrQixBQUdpQyxBQUlaLEFBS00sQUFRRixBQU9BLFVBbkJMLElBYVMsQUFPSCxFQWZHLEdBSnBCLEdBTEEsT0F5QmdCLEdBUEMsRUFSVSxTQWdCM0IsSUFQbUIsWUFSSixLQVNDLFFBUkssTUFTckIsYUFSa0IsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9lZHVhcmRvY2FzdGFuZWRhL1Byb2pla3QvcHJpdmF0L2dpdGRpZmYvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmaW5kTGF0ZXN0RGF0ZSwgZmV0Y2hDb21taXRzIH0gZnJvbSBcIi4uL2xpYi9oZWxwZXJzL2NvbW1pdHNcIjtcbmltcG9ydCB7IGFkZFNlY29uZCwgZm9ybWF0RGF0ZSB9IGZyb20gXCIuLi9saWIvaGVscGVycy9kYXRlXCI7XG5cbmZ1bmN0aW9uIEhvbWVQYWdlKHsgZGV2ZWxvcG1lbnRDb21taXRzIH0pIHtcbiAgY29uc3QgY29tbWl0cyA9IGRldmVsb3BtZW50Q29tbWl0cy5tYXAoKGRhdGEpID0+IHtcbiAgICBsZXQgeyBtZXNzYWdlIH0gPSBkYXRhLmNvbW1pdDtcbiAgICBpZiAobWVzc2FnZS5pbmRleE9mKFwiKlwiKSA+IC0xKSB7XG4gICAgICBtZXNzYWdlID0gbWVzc2FnZS5zcGxpdChcIipcIilbMF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBhdXRob3I6IGRhdGEuYXV0aG9yLmxvZ2luLFxuICAgICAgZGF0ZTogZm9ybWF0RGF0ZShkYXRhLmNvbW1pdC5hdXRob3IuZGF0ZSksXG4gICAgICBrZXk6IGRhdGEuY29tbWl0LmF1dGhvci5kYXRlXG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVcIj5cbiAgICAgIDxoMT5OZXh0IG1lcmdlL2RlcGxveSB0byBNYXN0ZXI8L2gxPlxuICAgICAgPHVsPlxuICAgICAgICB7Y29tbWl0cy5tYXAoKGNvbW1pdCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkga2V5PXtjb21taXQua2V5fT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWVzc2FnZVwiPntjb21taXQubWVzc2FnZX08L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICAgICAgICAgICAgICB7Y29tbWl0LmF1dGhvcn0ge2NvbW1pdC5kYXRlfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC91bD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmhvbWUge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG4gICAgICAgIH1cblxuICAgICAgICB1bCB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cblxuICAgICAgICBsaSB7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZWRmMDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiA5ODBweDtcbiAgICAgICAgfVxuICAgICAgICAubWVzc2FnZSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBjb2xvcjogIzUwNTQ1MDtcbiAgICAgICAgfVxuICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGNvbG9yOiAjNTA1NDUwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbkhvbWVQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbWFzdGVyQ29tbWl0cyA9IGF3YWl0IGZldGNoQ29tbWl0cyhwcm9jZXNzLmVudi5NQVNURVJfQlJBTkNIKTtcbiAgY29uc3QgbGF0ZXN0Q29tbWl0RGF0ZSA9IGZpbmRMYXRlc3REYXRlKG1hc3RlckNvbW1pdHMpO1xuXG4gIGNvbnN0IHNpbmNlRGF0ZSA9IGFkZFNlY29uZChsYXRlc3RDb21taXREYXRlKTtcbiAgY29uc3QgZGV2ZWxvcG1lbnRDb21taXRzID0gYXdhaXQgZmV0Y2hDb21taXRzKFxuICAgIHByb2Nlc3MuZW52LkRFVkVMT1BfQlJBTkNILFxuICAgIHNpbmNlRGF0ZVxuICApO1xuXG4gIHJldHVybiB7IGRldmVsb3BtZW50Q29tbWl0cyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXX0= */\n/*@ sourceURL=/Users/eduardocastaneda/Projekt/privat/gitdiff/pages/index.js */"));
}

HomePage.getInitialProps = function _callee() {
  var masterCommits, latestCommitDate, sinceDate, developmentCommits;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_lib_helpers_commits__WEBPACK_IMPORTED_MODULE_3__["fetchCommits"])("6fbd5ee6bbdaf1aac8ebf08d7872c121198f6b73"));

        case 2:
          masterCommits = _context.sent;
          latestCommitDate = Object(_lib_helpers_commits__WEBPACK_IMPORTED_MODULE_3__["findLatestDate"])(masterCommits);
          sinceDate = Object(_lib_helpers_date__WEBPACK_IMPORTED_MODULE_4__["addSecond"])(latestCommitDate);
          _context.next = 7;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_lib_helpers_commits__WEBPACK_IMPORTED_MODULE_3__["fetchCommits"])("773d0d4ed16cec6aaeacbe22605a06cfee023b88", sinceDate));

        case 7:
          developmentCommits = _context.sent;
          return _context.abrupt("return", {
            developmentCommits: developmentCommits
          });

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=index.js.29c76e372d39b06eb316.hot-update.js.map