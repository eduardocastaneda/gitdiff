webpackHotUpdate("static/development/pages/index.js",{

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
      date: Object(_lib_helpers_date__WEBPACK_IMPORTED_MODULE_4__["formatString"])(data.commit.author.date),
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
  }, ".home.jsx-3422529507{font-family:Helvetica;}ul.jsx-3422529507{padding:0;margin:0;}li.jsx-3422529507{list-style:none;border-radius:3px;background-color:#e8edf0;padding:10px;margin-bottom:10px;max-width:980px;}.message.jsx-3422529507{display:block;margin-bottom:3px;font-size:18px;font-weight:bold;color:#505450;}.info.jsx-3422529507{display:block;font-size:14px;color:#505450;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZHVhcmRvY2FzdGFuZWRhL1Byb2pla3QvcHJpdmF0L2dpdGRpZmYvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNrQixBQUdpQyxBQUlaLEFBS00sQUFRRixBQU9BLFVBbkJMLElBYVMsQUFPSCxFQWZHLEdBSnBCLEdBTEEsT0F5QmdCLEdBUEMsRUFSVSxTQWdCM0IsSUFQbUIsWUFSSixLQVNDLFFBUkssTUFTckIsYUFSa0IsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9lZHVhcmRvY2FzdGFuZWRhL1Byb2pla3QvcHJpdmF0L2dpdGRpZmYvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmaW5kTGF0ZXN0RGF0ZSwgZmV0Y2hDb21taXRzIH0gZnJvbSBcIi4uL2xpYi9oZWxwZXJzL2NvbW1pdHNcIjtcbmltcG9ydCB7IGFkZFNlY29uZCwgZm9ybWF0U3RyaW5nIH0gZnJvbSBcIi4uL2xpYi9oZWxwZXJzL2RhdGVcIjtcblxuZnVuY3Rpb24gSG9tZVBhZ2UoeyBkZXZlbG9wbWVudENvbW1pdHMgfSkge1xuICBjb25zdCBjb21taXRzID0gZGV2ZWxvcG1lbnRDb21taXRzLm1hcCgoZGF0YSkgPT4ge1xuICAgIGxldCB7IG1lc3NhZ2UgfSA9IGRhdGEuY29tbWl0O1xuICAgIGlmIChtZXNzYWdlLmluZGV4T2YoXCIqXCIpID4gLTEpIHtcbiAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnNwbGl0KFwiKlwiKVswXTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZSxcbiAgICAgIGF1dGhvcjogZGF0YS5hdXRob3IubG9naW4sXG4gICAgICBkYXRlOiBmb3JtYXRTdHJpbmcoZGF0YS5jb21taXQuYXV0aG9yLmRhdGUpLFxuICAgICAga2V5OiBkYXRhLmNvbW1pdC5hdXRob3IuZGF0ZVxuICAgIH07XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJob21lXCI+XG4gICAgICA8aDE+TmV4dCBtZXJnZS9kZXBsb3kgdG8gTWFzdGVyPC9oMT5cbiAgICAgIDx1bD5cbiAgICAgICAge2NvbW1pdHMubWFwKChjb21taXQpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGtleT17Y29tbWl0LmtleX0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj57Y29tbWl0Lm1lc3NhZ2V9PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAgICAgICAge2NvbW1pdC5hdXRob3J9IHtjb21taXQuZGF0ZX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvdWw+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5ob21lIHtcbiAgICAgICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xuICAgICAgICB9XG5cbiAgICAgICAgdWwge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGVkZjA7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgIG1heC13aWR0aDogOTgwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm1lc3NhZ2Uge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgY29sb3I6ICM1MDU0NTA7XG4gICAgICAgIH1cbiAgICAgICAgLmluZm8ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBjb2xvcjogIzUwNTQ1MDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5Ib21lUGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IG1hc3RlckNvbW1pdHMgPSBhd2FpdCBmZXRjaENvbW1pdHMocHJvY2Vzcy5lbnYuTUFTVEVSX0JSQU5DSCk7XG4gIGNvbnN0IGxhdGVzdENvbW1pdERhdGUgPSBmaW5kTGF0ZXN0RGF0ZShtYXN0ZXJDb21taXRzKTtcblxuICBjb25zdCBzaW5jZURhdGUgPSBhZGRTZWNvbmQobGF0ZXN0Q29tbWl0RGF0ZSk7XG4gIGNvbnN0IGRldmVsb3BtZW50Q29tbWl0cyA9IGF3YWl0IGZldGNoQ29tbWl0cyhcbiAgICBwcm9jZXNzLmVudi5ERVZFTE9QX0JSQU5DSCxcbiAgICBzaW5jZURhdGVcbiAgKTtcblxuICByZXR1cm4geyBkZXZlbG9wbWVudENvbW1pdHMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl19 */\n/*@ sourceURL=/Users/eduardocastaneda/Projekt/privat/gitdiff/pages/index.js */"));
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
//# sourceMappingURL=index.js.9b5bef904e9475b016c2.hot-update.js.map