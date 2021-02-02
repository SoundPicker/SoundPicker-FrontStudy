webpackHotUpdate_N_E("pages/signup",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");




var _jsxFileName = "C:\\Users\\\uC815\uC544\uC5F0\\Documents\\GitHub\\SoundPicker-FrontStudy\\front\\pages\\signup.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    color:red;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject());
_c = ErrorMessage;

var Signup = function Signup() {
  _s();

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"])(''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInput, 2),
      id = _useInput2[0],
      onChangeId = _useInput2[1];

  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"])(''),
      _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInput3, 2),
      nickname = _useInput4[0],
      onChangeNickname = _useInput4[1];

  var _useInput5 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"])(''),
      _useInput6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInput5, 2),
      password = _useInput6[0],
      onChangePassword = _useInput6[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(''),
      passwordCheck = _useState[0],
      setPasswordCheck = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      passwordError = _useState2[0],
      setPasswordError = _useState2[1];

  var onChangePasswordCheck = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function (e) {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  }, [password]);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(''),
      term = _useState3[0],
      setTerm = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      termError = _useState4[0],
      setTermError = _useState4[1];

  var onChangeTerm = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function (e) {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function () {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }

    if (!term) {
      return setTermError(true);
    }

    console.log(id, nickname, password);
  }, [password, passwordCheck, term]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "\uD68C\uC6D0\uAC00\uC785 | NodeBird"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Form"], {
      onFinish: onSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "user-id",
          children: "\uC544\uC774\uB514"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 16
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
          name: "user-id",
          value: id,
          required: true,
          onChange: onChangeId
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 16
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "user-nick",
          children: "\uB2C9\uB124\uC784"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 16
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
          name: "user-nick",
          value: nickname,
          required: true,
          onChange: onChangeNickname
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 16
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "user-password",
          children: "\uD328\uC2A4\uC6CC\uB4DC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 16
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
          name: "user-password",
          value: password,
          required: true,
          onChange: onChangePassword
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 16
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "user-password-check",
          children: "\uD328\uC2A4\uC6CC\uB4DC\uCCB4\uD06C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 16
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
          name: "user-password-check",
          value: passwordCheck,
          required: true,
          onChange: onChangePasswordCheck
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 16
        }, _this), passwordError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ErrorMessage, {
          children: "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 33
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Checkbox"], {
          name: "user-term",
          checked: term,
          onChange: onChangeTerm,
          children: "\uBAA8\uB4E0 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4. "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 13
        }, _this), termError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ErrorMessage, {
          children: "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC154\uC57C \uD569\uB2C8\uB2E4. "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 27
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          marginTop: 10
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          type: "primary",
          htmlType: "submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, _this);
};

_s(Signup, "mQHjo8qIa08Kr0jxWWtfYeyDmRI=", false, function () {
  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"]];
});

_c2 = Signup;
/* harmony default export */ __webpack_exports__["default"] = (Signup);

var _c, _c2;

$RefreshReg$(_c, "ErrorMessage");
$RefreshReg$(_c2, "Signup");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIkVycm9yTWVzc2FnZSIsInN0eWxlZCIsImRpdiIsIlNpZ251cCIsInVzZUlucHV0IiwiaWQiLCJvbkNoYW5nZUlkIiwibmlja25hbWUiLCJvbkNoYW5nZU5pY2tuYW1lIiwicGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkIiwidXNlU3RhdGUiLCJwYXNzd29yZENoZWNrIiwic2V0UGFzc3dvcmRDaGVjayIsInBhc3N3b3JkRXJyb3IiLCJzZXRQYXNzd29yZEVycm9yIiwib25DaGFuZ2VQYXNzd29yZENoZWNrIiwidXNlQ2FsbGJhY2siLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0ZXJtIiwic2V0VGVybSIsInRlcm1FcnJvciIsInNldFRlcm1FcnJvciIsIm9uQ2hhbmdlVGVybSIsImNoZWNrZWQiLCJvblN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFDQyx5REFBTSxDQUFDQyxHQUFSLG1CQUFsQjtLQUFNRixZOztBQUlOLElBQU1HLE1BQU0sR0FBRSxTQUFSQSxNQUFRLEdBQUk7QUFBQTs7QUFBQSxrQkFDT0MsK0RBQVEsQ0FBQyxFQUFELENBRGY7QUFBQTtBQUFBLE1BQ1JDLEVBRFE7QUFBQSxNQUNMQyxVQURLOztBQUFBLG1CQUVtQkYsK0RBQVEsQ0FBQyxFQUFELENBRjNCO0FBQUE7QUFBQSxNQUVSRyxRQUZRO0FBQUEsTUFFQ0MsZ0JBRkQ7O0FBQUEsbUJBR21CSiwrREFBUSxDQUFDLEVBQUQsQ0FIM0I7QUFBQTtBQUFBLE1BR1JLLFFBSFE7QUFBQSxNQUdDQyxnQkFIRDs7QUFBQSxrQkFJd0JDLHNEQUFRLENBQUMsRUFBRCxDQUpoQztBQUFBLE1BSVJDLGFBSlE7QUFB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dUQsRUFDWUEsdUQsRUFDQUEsdUQ7OztNQUgvQkQsTTtBQXFFU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLmQxNjc3ODk2Y2YyOTU1ZmE2ZTMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0FwcExheW91dFwiXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5pbXBvcnQge0Zvcm0sIElucHV0LENoZWNrYm94LEJ1dHRvbn0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VJbnB1dFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBFcnJvck1lc3NhZ2U9c3R5bGVkLmRpdmBcclxuICAgIGNvbG9yOnJlZDtcclxuYDtcclxuXHJcbmNvbnN0IFNpZ251cCA9KCk9PntcclxuICAgIGNvbnN0W2lkLG9uQ2hhbmdlSWRdPXVzZUlucHV0KCcnKTtcclxuICAgIGNvbnN0W25pY2tuYW1lLG9uQ2hhbmdlTmlja25hbWVdPXVzZUlucHV0KCcnKTtcclxuICAgIGNvbnN0W3Bhc3N3b3JkLG9uQ2hhbmdlUGFzc3dvcmRdPXVzZUlucHV0KCcnKTtcclxuICAgIGNvbnN0W3Bhc3N3b3JkQ2hlY2ssc2V0UGFzc3dvcmRDaGVja109dXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkRXJyb3Isc2V0UGFzc3dvcmRFcnJvcl09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgXHJcbiAgICBjb25zdCBvbkNoYW5nZVBhc3N3b3JkQ2hlY2s9dXNlQ2FsbGJhY2soKGUpPT57XHJcbiAgICAgICAgc2V0UGFzc3dvcmRDaGVjayhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgc2V0UGFzc3dvcmRFcnJvcihlLnRhcmdldC52YWx1ZSE9PXBhc3N3b3JkKTtcclxuICAgIH0sW3Bhc3N3b3JkXSk7XHJcblxyXG4gICAgY29uc3RbdGVybSxzZXRUZXJtXT11c2VTdGF0ZSgnJyk7ICBcclxuICAgIGNvbnN0IFt0ZXJtRXJyb3Isc2V0VGVybUVycm9yXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBvbkNoYW5nZVRlcm09dXNlQ2FsbGJhY2soKGUpPT57XHJcbiAgICAgICAgc2V0VGVybShlLnRhcmdldC5jaGVja2VkKTtcclxuICAgICAgICBzZXRUZXJtRXJyb3IoZmFsc2UpO1xyXG4gICAgfSxbXSk7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9dXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICBpZihwYXNzd29yZCE9PXBhc3N3b3JkQ2hlY2spe1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0UGFzc3dvcmRFcnJvcih0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIXRlcm0pe1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0VGVybUVycm9yKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhpZCxuaWNrbmFtZSxwYXNzd29yZCk7XHJcbiAgICB9LFtwYXNzd29yZCxwYXNzd29yZENoZWNrLHRlcm1dKTtcclxuICAgIHJldHVybiAoXHJcbiAgICA8QXBwTGF5b3V0PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgICAgIDx0aXRsZT7tmozsm5DqsIDsnoUgfCBOb2RlQmlyZDwvdGl0bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgPEZvcm0gb25GaW5pc2g9e29uU3VibWl0fT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1pZFwiPuyVhOydtOuUlDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICA8SW5wdXQgbmFtZT1cInVzZXItaWRcIiB2YWx1ZT17aWR9IHJlcXVpcmVkIG9uQ2hhbmdlPXtvbkNoYW5nZUlkfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLW5pY2tcIj7ri4nrhKTsnoQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgPElucHV0IG5hbWU9XCJ1c2VyLW5pY2tcIiB2YWx1ZT17bmlja25hbWV9IHJlcXVpcmVkIG9uQ2hhbmdlPXtvbkNoYW5nZU5pY2tuYW1lfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLXBhc3N3b3JkXCI+7Yyo7Iqk7JuM65OcPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgIDxJbnB1dCBuYW1lPVwidXNlci1wYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gcmVxdWlyZWQgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItcGFzc3dvcmQtY2hlY2tcIj7tjKjsiqTsm4zrk5zssrTtgaw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgPElucHV0IG5hbWU9XCJ1c2VyLXBhc3N3b3JkLWNoZWNrXCIgdmFsdWU9e3Bhc3N3b3JkQ2hlY2t9IHJlcXVpcmVkIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkQ2hlY2t9IC8+XHJcbiAgICAgICAgICAgICAgIHtwYXNzd29yZEVycm9yICYmPEVycm9yTWVzc2FnZT7ruYTrsIDrsojtmLjqsIAg7J287LmY7ZWY7KeAIOyViuyKteuLiOuLpC4gPC9FcnJvck1lc3NhZ2U+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxDaGVja2JveCBuYW1lPVwidXNlci10ZXJtXCIgY2hlY2tlZD17dGVybX0gb25DaGFuZ2U9e29uQ2hhbmdlVGVybX0+66qo65OgIOyVveq0gOyXkCDrj5nsnZjtlanri4jri6QuIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgIHt0ZXJtRXJyb3IgJiYgPEVycm9yTWVzc2FnZT7slb3qtIDsl5Ag64+Z7J2Y7ZWY7IWU7JW8IO2VqeuLiOuLpC4gPC9FcnJvck1lc3NhZ2U+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6MTB9fT5cclxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCI+PC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9Gb3JtPlxyXG4gICAgPC9BcHBMYXlvdXQ+KTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwOyJdLCJzb3VyY2VSb290IjoiIn0=