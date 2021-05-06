webpackHotUpdate_N_E("pages/hashtag/[tag]",{

/***/ "./pages/hashtag/[tag].js":
/*!********************************!*\
  !*** ./pages/hashtag/[tag].js ***!
  \********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reducers/user */ "./reducers/user.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reducers/post */ "./reducers/post.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\\uAE40\uC2B9\uBBF8\\Desktop\\SOPT\\SoundPicker-Study\\SoundPicker-FrontStudy\\prepare\\front\\pages\\hashtag\\[tag].js",
    _this = undefined,
    _s = $RefreshSig$();

// hashtag/[tag].js











var Hashtag = function Hashtag() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var tag = router.query.tag;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.post;
  }),
      hasMorePosts = _useSelector.hasMorePosts,
      loadPostsLoading = _useSelector.loadPostsLoading,
      mainPosts = _useSelector.mainPosts;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      userInfo = _useSelector2.userInfo;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var onScroll = function onScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["LOAD_HASHTAG_POSTS_REQUEST"],
            lastId: mainPosts[mainPosts.length - 1] && mainPosts[mainPosts.length - 1].id,
            data: tag
          });
        }
      }

      window.addEventListener('scroll', onScroll);
      return function () {
        window.removeEventListener('scroll', onScroll);
      };
    };
  }, [mainPosts.length, hasMorePosts, tag, loadPostsLoading]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    children: [userInfo && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("title", {
        children: [userInfo.nickname, "\uB2D8\uC758 \uAE00"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("meta", {
        name: "description",
        content: "".concat(userInfo.nickname, "\uB2D8\uC758 \uAC8C\uC2DC\uAE00")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("meta", {
        property: "og:title",
        content: "".concat(userInfo.nickname, "\uB2D8\uC758 \uAC8C\uC2DC\uAE00")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("meta", {
        property: "og:description",
        content: "".concat(userInfo.nickname, "\uB2D8\uC758 \uAC8C\uC2DC\uAE00")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("meta", {
        property: "og:image",
        content: "https://nodebird.com/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("meta", {
        property: "og:url",
        content: "https://nodebird.com/user/".concat(id)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }, _this), userInfo ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
      actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        children: ["\uC9F9\uC9F9", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 15
        }, _this), userInfo.Posts]
      }, "twit", true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        children: ["\uD314\uB85C\uC789", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 15
        }, _this), userInfo.Followings]
      }, "following", true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        children: ["\uD314\uB85C\uC6CC", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 15
        }, _this), userInfo.Followers]
      }, "follower", true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 13
      }, _this)],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Card"].Meta, {
        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
          children: userInfo.nickname[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 21
        }, _this),
        title: userInfo.nickname
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }, _this) : null, mainPosts.map(function (post) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
        post: post
      }, post.id, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, _this);
};

_s(Hashtag, "gh/2eA79g39ucgv6P0HM/KtAv0I=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = Hashtag;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Hashtag);

var _c;

$RefreshReg$(_c, "Hashtag");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaGFzaHRhZy9bdGFnXS5qcyJdLCJuYW1lcyI6WyJIYXNodGFnIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJvdXRlciIsInVzZVJvdXRlciIsInRhZyIsInF1ZXJ5IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJoYXNNb3JlUG9zdHMiLCJsb2FkUG9zdHNMb2FkaW5nIiwibWFpblBvc3RzIiwidXNlciIsInVzZXJJbmZvIiwidXNlRWZmZWN0Iiwib25TY3JvbGwiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwidHlwZSIsIkxPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUIiwibGFzdElkIiwibGVuZ3RoIiwiaWQiLCJkYXRhIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJuaWNrbmFtZSIsIlBvc3RzIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDcEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFGb0IsTUFHWkMsR0FIWSxHQUdKRixNQUFNLENBQUNHLEtBSEgsQ0FHWkQsR0FIWTs7QUFBQSxxQkFJa0NFLCtEQUFXLENBQy9ELFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FEK0QsQ0FKN0M7QUFBQSxNQUlaQyxZQUpZLGdCQUlaQSxZQUpZO0FBQUEsTUFJRUMsZ0JBSkYsZ0JBSUVBLGdCQUpGO0FB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RDtBQUFBLG9CQUFTcEIsUUFBUSxDQUFDaUIsUUFBVCxDQUFrQixDQUFsQjtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFY7QUFFRSxhQUFLLEVBQUVqQixRQUFRLENBQUNpQjtBQUZsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFETyxHQXlCTCxJQWhETixFQWlER25CLFNBQVMsQ0FBQ3VCLEdBQVYsQ0FBYyxVQUFDMUIsSUFBRDtBQUFBLDBCQUNiLHFFQUFDLDREQUFEO0FBQXdCLFlBQUksRUFBRUE7QUFBOUIsU0FBZUEsSUFBSSxDQUFDa0IsRUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURhO0FBQUEsS0FBZCxDQWpESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVERCxDQXZGRDs7R0FBTTNCLE87VUFDYUUsdUQsRUFDRkUscUQsRUFFdUNHLHVELEVBR2pDQSx1RDs7O0tBUGpCUCxPOztBQThHU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaGFzaHRhZy9bdGFnXS41MmNjZTc1NjE0ODQ2NGYyNWU4My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaGFzaHRhZy9bdGFnXS5qc1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IEF2YXRhciwgQ2FyZCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBFTkQgfSBmcm9tICdyZWR1eC1zYWdhJztcclxuXHJcbmltcG9ydCB7IExPQURfTVlfSU5GT19SRVFVRVNULCBMT0FEX1VTRVJfUkVRVUVTVCB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgeyBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0JztcclxuaW1wb3J0IFBvc3RDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUG9zdENhcmQnO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi8uLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcblxyXG5jb25zdCBIYXNodGFnID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHRhZyB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IHsgaGFzTW9yZVBvc3RzLCBsb2FkUG9zdHNMb2FkaW5nLCBtYWluUG9zdHMgfSA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS5wb3N0XHJcbiAgKTtcclxuICBjb25zdCB7IHVzZXJJbmZvIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgb25TY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB3aW5kb3cucGFnZVlPZmZzZXQgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ID5cclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gMzAwXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlmIChoYXNNb3JlUG9zdHMgJiYgIWxvYWRQb3N0c0xvYWRpbmcpIHtcclxuICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGxhc3RJZDpcclxuICAgICAgICAgICAgICBtYWluUG9zdHNbbWFpblBvc3RzLmxlbmd0aCAtIDFdICYmXHJcbiAgICAgICAgICAgICAgbWFpblBvc3RzW21haW5Qb3N0cy5sZW5ndGggLSAxXS5pZCxcclxuICAgICAgICAgICAgZGF0YTogdGFnLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICAgICAgfTtcclxuICAgIH07XHJcbiAgfSwgW21haW5Qb3N0cy5sZW5ndGgsIGhhc01vcmVQb3N0cywgdGFnLCBsb2FkUG9zdHNMb2FkaW5nXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwTGF5b3V0PlxyXG4gICAgICB7dXNlckluZm8gJiYgKFxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPnt1c2VySW5mby5uaWNrbmFtZX3ri5jsnZgg6riAPC90aXRsZT5cclxuICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9e2Ake3VzZXJJbmZvLm5pY2tuYW1lfeuLmOydmCDqsozsi5zquIBgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgIHByb3BlcnR5PVwib2c6dGl0bGVcIlxyXG4gICAgICAgICAgICBjb250ZW50PXtgJHt1c2VySW5mby5uaWNrbmFtZX3ri5jsnZgg6rKM7Iuc6riAYH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgY29udGVudD17YCR7dXNlckluZm8ubmlja25hbWV964uY7J2YIOqyjOyLnOq4gGB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgcHJvcGVydHk9XCJvZzppbWFnZVwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJodHRwczovL25vZGViaXJkLmNvbS9mYXZpY29uLmljb1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtgaHR0cHM6Ly9ub2RlYmlyZC5jb20vdXNlci8ke2lkfWB9IC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICApfVxyXG4gICAgICB7dXNlckluZm8gPyAoXHJcbiAgICAgICAgPENhcmRcclxuICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgPGRpdiBrZXk9XCJ0d2l0XCI+XHJcbiAgICAgICAgICAgICAg7Ke57Ke5XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAge3VzZXJJbmZvLlBvc3RzfVxyXG4gICAgICAgICAgICA8L2Rpdj4sXHJcbiAgICAgICAgICAgIDxkaXYga2V5PVwiZm9sbG93aW5nXCI+XHJcbiAgICAgICAgICAgICAg7YyU66Gc7J6JXHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAge3VzZXJJbmZvLkZvbGxvd2luZ3N9XHJcbiAgICAgICAgICAgIDwvZGl2PixcclxuICAgICAgICAgICAgPGRpdiBrZXk9XCJmb2xsb3dlclwiPlxyXG4gICAgICAgICAgICAgIO2MlOuhnOybjFxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIHt1c2VySW5mby5Gb2xsb3dlcnN9XHJcbiAgICAgICAgICAgIDwvZGl2PixcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e3VzZXJJbmZvLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgdGl0bGU9e3VzZXJJbmZvLm5pY2tuYW1lfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgICB7bWFpblBvc3RzLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgIDxQb3N0Q2FyZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9BcHBMYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhcclxuICBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gICAgY29uc3QgY29va2llID0gY29udGV4dC5yZXEgPyBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSA6ICcnO1xyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSAnJztcclxuICAgIGlmIChjb250ZXh0LnJlcSAmJiBjb29raWUpIHtcclxuICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7XHJcbiAgICB9XHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1JFUVVFU1QsXHJcbiAgICB9KTtcclxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCxcclxuICAgICAgZGF0YTogY29udGV4dC5wYXJhbXMudGFnLFxyXG4gICAgfSk7XHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKEVORCk7XHJcbiAgICBhd2FpdCBjb250ZXh0LnN0b3JlLnNhZ2FUYXNrLnRvUHJvbWlzZSgpO1xyXG4gICAgY29uc29sZS5sb2coJ2dldFN0YXRlJywgY29udGV4dC5zdG9yZS5nZXRTdGF0ZSgpLnBvc3QubWFpblBvc3RzKTtcclxuICAgIHJldHVybiB7IHByb3BzOiB7fSB9O1xyXG4gIH1cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhhc2h0YWc7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=