webpackHotUpdate_N_E("pages/index",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");




var _jsxFileName = "C:\\Users\\\uC815\uC544\uC5F0\\Documents\\GitHub\\SoundPicker-FrontStudy\\front\\components\\LoginForm.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    padding:10px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    margin-top:10px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject());
_c = ButtonWrapper;
var FormWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(antd__WEBPACK_IMPORTED_MODULE_3__["Form"])(_templateObject2());
_c2 = FormWrapper;

var LoginForm = function LoginForm() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])();

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_8__["default"])(''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInput, 2),
      id = _useInput2[0],
      onChangeId = _useInput2[1];

  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_8__["default"])(''),
      _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInput3, 2),
      password = _useInput4[0],
      onChangePassword = _useInput4[1];

  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {
    console.log(id, password);
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_10__["loginAction"])(id, password));
  }, [id, password]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FormWrapper, {
    onFinish: onSubmitForm,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "user-id",
        children: "\uC544\uC774\uB514"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 16
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 16
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        name: "user-id",
        value: id,
        onChange: onChangeId,
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 16
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 12
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "user-password",
        children: "\uD328\uC2A4\uC6CC\uB4DC"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 12
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 16
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        name: "user-password",
        type: "password",
        value: password,
        onChange: onChangePassword,
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 16
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 12
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ButtonWrapper, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        type: "primary",
        htmlType: "submit",
        loading: false,
        children: "\uB85C\uADF8\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 16
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/signup",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            children: "\uD68C\uC6D0\uAC00\uC785"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 40
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 37
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 16
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 12
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 8
  }, _this);
};

_s(LoginForm, "5vi9v7aZJ43ABJBVtqxLSJ0WPuQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_8__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_8__["default"]];
});

_c3 = LoginForm;
LoginForm.propTypes = {
  setIsLoggedIn: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

var _c, _c2, _c3;

$RefreshReg$(_c, "ButtonWrapper");
$RefreshReg$(_c2, "FormWrapper");
$RefreshReg$(_c3, "LoginForm");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/UserProfile.js":
/*!***********************************!*\
  !*** ./components/UserProfile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");


var _jsxFileName = "C:\\Users\\\uC815\uC544\uC5F0\\Documents\\GitHub\\SoundPicker-FrontStudy\\front\\components\\UserProfile.js",
    _this = undefined,
    _s = $RefreshSig$();






var UserProfile = function UserProfile() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var onLogOut = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_4__["logoutAction"])());
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [" \uC9F9\uC9F9 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 34
      }, _this), " @"]
    }, "twist", true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: ["\uD314\uB85C\uC789 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 39
      }, _this), " @"]
    }, "followings", true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: ["\uD314\uB85C\uC6CC ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 39
      }, _this), " @"]
    }, "followings", true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, _this)],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
        children: " AY"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 21
      }, _this),
      title: "ahyeon"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: onLogOut,
      children: " \uB85C\uADF8\uC544\uC6C3"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, _this);
};

_s(UserProfile, "p2rV2pF7Z3i2g3xG5rtZsnlyA64=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

_c = UserProfile;
/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

var _c;

$RefreshReg$(_c, "UserProfile");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/next-redux-wrapper/es6/index.js":
false,

/***/ "./reducers/index.js":
false,

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, loginAction, logoutAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAction", function() { return loginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutAction", function() { return logoutAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  isLoggedIn: false,
  user: null,
  signUpData: {},
  loginData: {}
};
var loginAction = function loginAction(data) {
  return {
    type: 'LOG_IN',
    data: data
  };
};
var logoutAction = function logoutAction() {
  return {
    type: 'LOG_OUT'
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'LOG_IN':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggedIn: true,
        user: action.data
      });

    case 'LOG_OUT':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggedIn: false,
        user: null
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVXNlclByb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3JlZHVjZXJzL3VzZXIuanMiXSwibmFtZXMiOlsiQnV0dG9uV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkZvcm1XcmFwcGVyIiwiRm9ybSIsIkxvZ2luRm9ybSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VJbnB1dCIsImlkIiwib25DaGFuZ2VJZCIsInBhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZCIsIm9uU3VibWl0Rm9ybSIsInVzZUNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsImxvZ2luQWN0aW9uIiwicHJvcFR5cGVzIiwic2V0SXNMb2dnZWRJbiIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiVXNlclByb2ZpbGUiLCJvbkxvZ091dCIsImxvZ291dEFjdGlvbiIsImluaXRpYWxTdGF0ZSIsImlzTG9nZ2VkSW4iLCJ1c2VyIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsImRhdGEiLCJ0eXBlIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsYUFBYSxHQUFDQyx5REFBTSxDQUFDQyxHQUFSLG1CQUFuQjtLQUFNRixhO0FBSU4sSUFBTUcsV0FBVyxHQUFFRixpRUFBTSxDQUFDRyx5Q0FBRCxDQUFSLG9CQUFqQjtNQUFNRCxXOztBQUlOLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQUk7QUFBQTs7QUFDbEIsTUFBTUMsUUFBUSxHQUFDQywrREFBVyxFQUExQjs7QUFEa0Isa0JBRUdDLCtEQUFRLENBQUMsRUFBRCxDQUZYO0FBQUE7QUFBQSxN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QUFSQSxPQUFRLEdBQTZCO0FBQUEsTUFBNUJDLEtBQTRCLHVFQUF0QlIsWUFBc0I7QUFBQSxNQUFUUyxNQUFTOztBQUN2QyxVQUFPQSxNQUFNLENBQUNILElBQWQ7QUFDSSxTQUFLLFFBQUw7QUFDSSw2Q0FDT0UsS0FEUDtBQUVJUCxrQkFBVSxFQUFDLElBRmY7QUFHSUMsWUFBSSxFQUFFTyxNQUFNLENBQUNKO0FBSGpCOztBQU1KLFNBQUssU0FBTDtBQUNJLDZDQUNPRyxLQURQO0FBRUlQLGtCQUFVLEVBQUMsS0FGZjtBQUdJQyxZQUFJLEVBQUU7QUFIVjs7QUFNSjtBQUNJLGFBQU9NLEtBQVA7QUFoQlI7QUFrQkgsQ0FuQkQ7O0FBcUJlRCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40Y2I2NjM1NWExNjNhNWFjYjE3ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGb3JtLElucHV0LEJ1dHRvbn0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IHt1c2VDYWxsYmFja30gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIlxyXG5pbXBvcnQge3VzZURpc3BhdGNofSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHtsb2dpbkFjdGlvbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIlxyXG5jb25zdCBCdXR0b25XcmFwcGVyPXN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBGb3JtV3JhcHBlciA9c3R5bGVkKEZvcm0pYFxyXG4gICAgcGFkZGluZzoxMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgTG9naW5Gb3JtID0gKCk9PntcclxuICAgIGNvbnN0IGRpc3BhdGNoPXVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdFtpZCxvbkNoYW5nZUlkXT11c2VJbnB1dCgnJyk7XHJcbiAgICBjb25zdFtwYXNzd29yZCxvbkNoYW5nZVBhc3N3b3JkXT11c2VJbnB1dCgnJyk7XHJcbiAgIFxyXG4gICAgY29uc3Qgb25TdWJtaXRGb3JtID11c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkLHBhc3N3b3JkKTtcclxuICAgICAgICBkaXNwYXRjaChsb2dpbkFjdGlvbihpZCxwYXNzd29yZCkpXHJcblxyXG4gICAgfSxbaWQscGFzc3dvcmRdKTtcclxuXHJcbiAgICByZXR1cm4oXHJcblxyXG4gICAgICAgPEZvcm1XcmFwcGVyIG9uRmluaXNoPXtvblN1Ym1pdEZvcm19PlxyXG4gICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1pZFwiPuyVhOydtOuUlDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICA8SW5wdXQgbmFtZT1cInVzZXItaWRcIiB2YWx1ZT17aWR9IG9uQ2hhbmdlPXtvbkNoYW5nZUlkfSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItcGFzc3dvcmRcIj7tjKjsiqTsm4zrk5w8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgPElucHV0IG5hbWU9XCJ1c2VyLXBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH0gcmVxdWlyZWQvPlxyXG5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8QnV0dG9uV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgbG9hZGluZz17ZmFsc2V9PuuhnOq3uOyduDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPjxhPjxCdXR0b24+7ZqM7JuQ6rCA7J6FPC9CdXR0b24+PC9hPjwvTGluaz5cclxuXHJcbiAgICAgICAgICAgPC9CdXR0b25XcmFwcGVyPlxyXG4gICAgICAgPC9Gb3JtV3JhcHBlcj5cclxuXHJcbiAgICApO1xyXG59XHJcblxyXG5Mb2dpbkZvcm0ucHJvcFR5cGVzPXtcclxuICAgIHNldElzTG9nZ2VkSW46cHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07IiwiaW1wb3J0IHtDYXJkLEF2YXRhcixCdXR0b259IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7bG9nb3V0QWN0aW9ufSAgZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIlxyXG5cclxuY29uc3QgVXNlclByb2ZpbGUgPSAoKT0+e1xyXG4gICAgY29uc3QgZGlzcGF0Y2g9dXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IG9uTG9nT3V0PXVzZUNhbGxiYWNrKCgpPT57XHJcbiAgICAgICAgZGlzcGF0Y2gobG9nb3V0QWN0aW9uKCkpO1xyXG4gICAgfSxbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2FyZFxyXG4gICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgPGRpdiBrZXk9XCJ0d2lzdFwiPiDsp7nsp7kgPGJyLz4gQDwvZGl2PixcclxuICAgICAgICAgICAgPGRpdiBrZXk9XCJmb2xsb3dpbmdzXCI+7YyU66Gc7J6JIDxici8+IEA8L2Rpdj4sXHJcbiAgICAgICAgICAgIDxkaXYga2V5PVwiZm9sbG93aW5nc1wiPu2MlOuhnOybjCA8YnIvPiBAPC9kaXY+XHJcbiAgICAgICAgXX0+XHJcbiAgICAgICAgICAgIDxDYXJkLk1ldGFcclxuICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPiBBWTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgdGl0bGU9XCJhaHllb25cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uTG9nT3V0fT4g66Gc6re47JWE7JuDPC9CdXR0b24+XHJcblxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGU7IiwiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZT17XHJcbiAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAgIHVzZXI6bnVsbCxcclxuICAgIHNpZ25VcERhdGE6e30sXHJcbiAgICBsb2dpbkRhdGE6e30sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBsb2dpbkFjdGlvbj0oZGF0YSk9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOidMT0dfSU4nLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IGxvZ291dEFjdGlvbj0oKT0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6J0xPR19PVVQnLFxyXG4gICAgfVxyXG59XHJcbmNvbnN0IHJlZHVjZXI9KHN0YXRlPWluaXRpYWxTdGF0ZSxhY3Rpb24pPT57XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgJ0xPR19JTic6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNMb2dnZWRJbjp0cnVlLFxyXG4gICAgICAgICAgICAgICAgdXNlcjogYWN0aW9uLmRhdGEsXHJcblxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgJ0xPR19PVVQnOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB1c2VyOiBudWxsLFxyXG5cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=