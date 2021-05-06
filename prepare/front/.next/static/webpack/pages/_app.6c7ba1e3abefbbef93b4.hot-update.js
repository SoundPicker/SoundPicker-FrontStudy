webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga//effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadPost),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadPosts),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadUserPosts),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadHashtagPosts),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addPost),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(removePost),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(likePost),
    _marked8 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(unlikePost),
    _marked9 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(uploadImages),
    _marked10 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addComment),
    _marked11 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(retweet),
    _marked12 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadPost),
    _marked13 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadPosts),
    _marked14 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadUserPosts),
    _marked15 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadHashtagPosts),
    _marked16 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddPost),
    _marked17 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchRemovePost),
    _marked18 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLikePost),
    _marked19 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchUnLikePost),
    _marked20 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchUploadImages),
    _marked21 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddComment),
    _marked22 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchRetweet),
    _marked23 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(postSaga);






function loadPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/post/".concat(data));
}

function loadPost(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadPost$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadPostAPI, action.data);

        case 3:
          result = _context.sent;
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POST_SUCCESS"],
            data: result.data
          });

        case 6:
          _context.next = 13;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          _context.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POST_FAILURE"],
            error: _context.t0.response.data
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
}

function loadPostsAPI(lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/posts?lastId=".concat(lastId || 0));
}

function loadPosts(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadPosts$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadPostsAPI, action.lastId);

        case 3:
          result = _context2.sent;
          _context2.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_SUCCESS"],
            data: result.data
          });

        case 6:
          _context2.next = 13;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
          _context2.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_FAILURE"],
            error: _context2.t0.response.data
          });

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 8]]);
}

function loadUserPostsAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/user/".concat(data, "/posts?lastId=").concat(lastId || 0));
}

function loadUserPosts(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadUserPosts$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadUserPostsAPI, action.data, action.lastId);

        case 3:
          result = _context3.sent;
          _context3.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_POSTS_SUCCESS"],
            data: result.data
          });

        case 6:
          _context3.next = 13;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
          _context3.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_POSTS_FAILURE"],
            error: _context3.t0.response.data
          });

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 8]]);
}

function loadHashtagPostsAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/hashtag/".concat(encodeURIComponent(data), "?lastId=").concat(lastId || 0));
}

function loadHashtagPosts(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadHashtagPosts$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          console.log(action.data, action.lastId);
          _context4.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadHashtagPostsAPI, action.data, action.lastId);

        case 4:
          result = _context4.sent;
          _context4.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_HASHTAG_POSTS_SUCCESS"],
            data: result.data
          });

        case 7:
          _context4.next = 14;
          break;

        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](0);
          console.error(_context4.t0);
          _context4.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_HASHTAG_POSTS_FAILURE"],
            error: _context4.t0.response.data
          });

        case 14:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 9]]);
}

function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/post', data);
}

function addPost(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addPost$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addPostAPI, action.data);

        case 3:
          result = _context5.sent;
          _context5.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_SUCCESS"],
            data: result.data
          });

        case 6:
          _context5.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_TO_ME"],
            data: result.data.id
          });

        case 8:
          _context5.next = 15;
          break;

        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          console.error(_context5.t0);
          _context5.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            // put은 dispatch 개념
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_FAILURE"],
            error: _context5.t0.response.data
          });

        case 15:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 10]]);
}

function removePostAPI(data) {
  // delete는 data 못 넣음
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]("/post/".concat(data));
}

function removePost(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function removePost$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(removePostAPI, action.data);

        case 3:
          result = _context6.sent;
          _context6.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_SUCCESS"],
            data: result.data
          });

        case 6:
          _context6.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["REMOVE_POST_OF_ME"],
            data: result.data
          });

        case 8:
          _context6.next = 15;
          break;

        case 10:
          _context6.prev = 10;
          _context6.t0 = _context6["catch"](0);
          console.error(_context6.t0);
          _context6.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_FAILURE"],
            error: _context6.t0.response.data
          });

        case 15:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[0, 10]]);
}

function likePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch("/post/".concat(data, "/like")); // 게시글의 일부분 수정이므로 patch
}

function likePost(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function likePost$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(likePostAPI, action.data);

        case 3:
          result = _context7.sent;
          _context7.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LIKE_POST_SUCCESS"],
            data: result.data
          });

        case 6:
          _context7.next = 13;
          break;

        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](0);
          console.error(_context7.t0);
          _context7.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LIKE_POST_FAILURE"],
            error: _context7.t0.response.data
          });

        case 13:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7, null, [[0, 8]]);
}

function unlikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]("/post/".concat(data, "/like")); // 게시글의 일부분 수정이므로 patch
}

function unlikePost(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function unlikePost$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(unlikePostAPI, action.data);

        case 3:
          result = _context8.sent;
          _context8.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_POST_SUCCESS"],
            data: result.data
          });

        case 6:
          _context8.next = 13;
          break;

        case 8:
          _context8.prev = 8;
          _context8.t0 = _context8["catch"](0);
          console.error(_context8.t0);
          _context8.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_POST_FAILURE"],
            error: _context8.t0.response.data
          });

        case 13:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8, null, [[0, 8]]);
}

function uploadImagesAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/post/images', data); // 게시글의 일부분 수정이므로 patch
}

function uploadImages(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function uploadImages$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(uploadImagesAPI, action.data);

        case 3:
          result = _context9.sent;
          _context9.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_IMAGES_SUCCESS"],
            data: result.data
          });

        case 6:
          _context9.next = 13;
          break;

        case 8:
          _context9.prev = 8;
          _context9.t0 = _context9["catch"](0);
          console.error(_context9.t0);
          _context9.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_IMAGES_FAILURE"],
            error: _context9.t0.response.data
          });

        case 13:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9, null, [[0, 8]]);
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/post/".concat(data.postId, "/comment"), data); // POST /post/1/comment
}

function addComment(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addComment$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addCommentAPI, action.data);

        case 3:
          result = _context10.sent;
          _context10.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_SUCCESS"],
            data: result.data
          });

        case 6:
          _context10.next = 13;
          break;

        case 8:
          _context10.prev = 8;
          _context10.t0 = _context10["catch"](0);
          console.error(_context10.t0);
          _context10.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_FAILURE"],
            error: _context10.t0.response.data
          });

        case 13:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10, null, [[0, 8]]);
}

function retweetAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/post/".concat(data, "/retweet"), data); // POST /post/1/comment
}

function retweet(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function retweet$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(retweetAPI, action.data);

        case 3:
          result = _context11.sent;
          _context11.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["RETWEET_SUCCESS"],
            data: result.data
          });

        case 6:
          _context11.next = 13;
          break;

        case 8:
          _context11.prev = 8;
          _context11.t0 = _context11["catch"](0);
          console.error(_context11.t0);
          _context11.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["RETWEET_FAILURE"],
            error: _context11.t0.response.data
          });

        case 13:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11, null, [[0, 8]]);
}

function watchLoadPost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadPost$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POST_REQUEST"], loadPost);

        case 2:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked12);
}

function watchLoadPosts() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadPosts$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_REQUEST"], loadPosts);

        case 2:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked13);
}

function watchLoadUserPosts() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadUserPosts$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_POSTS_REQUEST"], loadUserPosts);

        case 2:
        case "end":
          return _context14.stop();
      }
    }
  }, _marked14);
}

function watchLoadHashtagPosts() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadHashtagPosts$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_HASHTAG_POSTS_REQUEST"], loadHashtagPosts);

        case 2:
        case "end":
          return _context15.stop();
      }
    }
  }, _marked15);
}

function watchAddPost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddPost$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"], addPost);

        case 2:
        case "end":
          return _context16.stop();
      }
    }
  }, _marked16);
}

function watchRemovePost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchRemovePost$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_REQUEST"], removePost);

        case 2:
        case "end":
          return _context17.stop();
      }
    }
  }, _marked17);
}

function watchLikePost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLikePost$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          _context18.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["LIKE_POST_REQUEST"], likePost);

        case 2:
        case "end":
          return _context18.stop();
      }
    }
  }, _marked18);
}

function watchUnLikePost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUnLikePost$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          _context19.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_POST_REQUEST"], unlikePost);

        case 2:
        case "end":
          return _context19.stop();
      }
    }
  }, _marked19);
}

function watchUploadImages() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUploadImages$(_context20) {
    while (1) {
      switch (_context20.prev = _context20.next) {
        case 0:
          _context20.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_IMAGES_REQUEST"], uploadImages);

        case 2:
        case "end":
          return _context20.stop();
      }
    }
  }, _marked20);
}

function watchAddComment() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddComment$(_context21) {
    while (1) {
      switch (_context21.prev = _context21.next) {
        case 0:
          _context21.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"], addComment);

        case 2:
        case "end":
          return _context21.stop();
      }
    }
  }, _marked21);
}

function watchRetweet() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchRetweet$(_context22) {
    while (1) {
      switch (_context22.prev = _context22.next) {
        case 0:
          _context22.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["RETWEET_REQUEST"], retweet);

        case 2:
        case "end":
          return _context22.stop();
      }
    }
  }, _marked22);
}

function postSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function postSaga$(_context23) {
    while (1) {
      switch (_context23.prev = _context23.next) {
        case 0:
          _context23.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadUserPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadHashtagPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRetweet)]);

        case 2:
        case "end":
          return _context23.stop();
      }
    }
  }, _marked23);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJsb2FkUG9zdCIsImxvYWRQb3N0cyIsImxvYWRVc2VyUG9zdHMiLCJsb2FkSGFzaHRhZ1Bvc3RzIiwiYWRkUG9zdCIsInJlbW92ZVBvc3QiLCJsaWtlUG9zdCIsInVubGlrZVBvc3QiLCJ1cGxvYWRJbWFnZXMiLCJhZGRDb21tZW50IiwicmV0d2VldCIsIndhdGNoTG9hZFBvc3QiLCJ3YXRjaExvYWRQb3N0cyIsIndhdGNoTG9hZFVzZXJQb3N0cyIsIndhdGNoTG9hZEhhc2h0YWdQb3N0cyIsIndhdGNoQWRkUG9zdCIsIndhdGNoUmVtb3ZlUG9zdCIsIndhdGNoTGlrZVBvc3QiLCJ3YXRjaFVuTGlrZVBvc3QiLCJ3YXRjaFVwbG9hZEltYWdlcyIsIndhdGNoQWRkQ29tbWVudCIsIndhdGNoUmV0d2VldCIsInBvc3RTYWdhIiwibG9hZFBvc3RBUEkiLCJkYXRhIiwiYXhpb3MiLCJnZXQiLCJhY3Rpb24iLCJjYWxsIiwicmVzdWx0IiwicHV0IiwidHlwZSIsIkxPQURfUE9TVF9TVUNDRVNTIiwiY29uc29sZSIsImVycm9yIiwiTE9BRF9QT1NUX0ZBSUxVUkUiLCJyZXNwb25zZSIsImxvYWRQb3N0c0FQSSIsImxhc3RJZCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsImxvYWRVc2VyUG9zdHNBUEkiLCJMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyIsIkxPQURfVVNFUl9QT1NUU19GQUlMVVJFIiwibG9hZEhhc2h0YWdQb3N0c0FQSSIsImVuY29kZVVSSUNvbXBvbmVudCIsImxvZyIsIkxPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTIiwiTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUiLCJhZGRQb3N0QVBJIiwicG9zdCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9UT19NRSIsImlkIiwiQUREX1BPU1RfRkFJTFVSRSIsInJlbW92ZVBvc3RBUEkiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwibGlrZVBvc3RBUEkiLCJwYXRjaCIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJ1bmxpa2VQb3N0QVBJIiwiVU5MSUtFX1BPU1RfU1VDQ0VTUyIsIlVOTElLRV9QT1NUX0ZBSUxVUkUiLCJ1cGxvYWRJbWFnZXNBUEkiLCJVUExPQURfSU1BR0VTX1NVQ0NFU1MiLCJVUExPQURfSU1BR0VTX0ZBSUxVUkUiLCJhZGRDb21tZW50QVBJIiwicG9zdElkIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJyZXR3ZWV0QVBJIiwiUkVUV0VFVF9TVUNDRVNTIiwiUkVUV0VFVF9GQUlMVVJFIiwidGFrZUxhdGVzdCIsIkxPQURfUE9TVF9SRVFVRVNUIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QiLCJMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCIsIkFERF9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIlJFVFdFRVRfUkVRVUVTVCIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0E0Q1VBLFE7bUdBb0JBQyxTO21HQW9CQUMsYTttR0FzQkFDLGdCO21HQXFCQUMsTzttR0E0QkFDLFU7bUdBd0JBQyxRO21HQW9CQUMsVTttR0FvQkFDLFk7b0dBb0JBQyxVO29HQW9CQUMsTztvR0FnQkFDLGE7b0dBSUFDLGM7b0dBSUFDLGtCO29HQUlBQyxxQjtvR0FJQUMsWTtvR0FJQUMsZTtvR0FJQUMsYTtvR0FJQUMsZTtvR0FJQUMsaUI7b0dBSUFDLGU7b0dBSUFDLFk7b0dBSWVDLFE7O0FB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YUFBRCxDQVBJLEVBUVJ3RSwrREFBSSxDQUFDdkUsZUFBRCxDQVJJLEVBU1J1RSwrREFBSSxDQUFDdEUsaUJBQUQsQ0FUSSxFQVVSc0UsK0RBQUksQ0FBQ3JFLGVBQUQsQ0FWSSxFQVdScUUsK0RBQUksQ0FBQ3BFLFlBQUQsQ0FYSSxDQUFELENBQVQ7O0FBRGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC42YzdiYTFlM2FiZWZiYmVmOTNiNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBmb3JrLCBwdXQsIHRha2VMYXRlc3QsIGNhbGwgfSBmcm9tICdyZWR1eC1zYWdhLy9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCB7XHJcbiAgQUREX1BPU1RfUkVRVUVTVCxcclxuICBBRERfUE9TVF9TVUNDRVNTLFxyXG4gIEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gIFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgVU5MSUtFX1BPU1RfUkVRVUVTVCxcclxuICBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gIFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gIEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gIExPQURfUE9TVFNfU1VDQ0VTUyxcclxuICBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgVVBMT0FEX0lNQUdFU19SRVFVRVNULFxyXG4gIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcclxuICBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXHJcbiAgUkVUV0VFVF9SRVFVRVNULFxyXG4gIFJFVFdFRVRfU1VDQ0VTUyxcclxuICBSRVRXRUVUX0ZBSUxVUkUsXHJcbiAgTE9BRF9QT1NUX1JFUVVFU1QsXHJcbiAgTE9BRF9QT1NUX1NVQ0NFU1MsXHJcbiAgTE9BRF9QT1NUX0ZBSUxVUkUsXHJcbiAgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsXHJcbiAgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QsXHJcbiAgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MsXHJcbiAgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUsXHJcbiAgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MsXHJcbiAgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FLCBSRU1PVkVfUE9TVF9PRl9NRSB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9wb3N0LyR7ZGF0YX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0c0FQSShsYXN0SWQpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdHM/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkUG9zdHMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RzQVBJLCBhY3Rpb24ubGFzdElkKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkVXNlclBvc3RzQVBJKGRhdGEsIGxhc3RJZCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC91c2VyLyR7ZGF0YX0vcG9zdHM/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkVXNlclBvc3RzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRVc2VyUG9zdHNBUEksIGFjdGlvbi5kYXRhLCBhY3Rpb24ubGFzdElkKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfVVNFUl9QT1NUU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEhhc2h0YWdQb3N0c0FQSShkYXRhLCBsYXN0SWQpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KFxyXG4gICAgYC9oYXNodGFnLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGRhdGEpfT9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gXHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRIYXNodGFnUG9zdHMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhLCBhY3Rpb24ubGFzdElkKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEhhc2h0YWdQb3N0c0FQSSwgYWN0aW9uLmRhdGEsIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNhbGzsnYAg64+Z6riw6528IHJldHVybu2VoOuVjOq5jOyngCDquLDri6TroLjri6Qg64Sj7Ja07KSMXHJcbiAgICAvLyBmb3Jr64qUIOu5hOuPmeq4sOudvCDqsrDqs7wg7Jik6riwIOyghOyXkCDrsJTroZwg64uk7J2MIOqxsCDsi6TtlolcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YS5pZCxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgLy8gcHV07J2AIGRpc3BhdGNoIOqwnOuFkFxyXG4gICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YSkge1xyXG4gIC8vIGRlbGV0ZeuKlCBkYXRhIOuquyDrhKPsnYxcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wYXRjaChgL3Bvc3QvJHtkYXRhfS9saWtlYCk7IC8vIOqyjOyLnOq4gOydmCDsnbzrtoDrtoQg7IiY7KCV7J2066+A66GcIHBhdGNoXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsaWtlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsaWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmxpa2VQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTsgLy8g6rKM7Iuc6riA7J2YIOydvOu2gOu2hCDsiJjsoJXsnbTrr4DroZwgcGF0Y2hcclxufVxyXG5cclxuZnVuY3Rpb24qIHVubGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5saWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBsb2FkSW1hZ2VzQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QvaW1hZ2VzJywgZGF0YSk7IC8vIOqyjOyLnOq4gOydmCDsnbzrtoDrtoQg7IiY7KCV7J2066+A66GcIHBhdGNoXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1cGxvYWRJbWFnZXMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodXBsb2FkSW1hZ2VzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YS5wb3N0SWR9L2NvbW1lbnRgLCBkYXRhKTsgLy8gUE9TVCAvcG9zdC8xL2NvbW1lbnRcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmV0d2VldEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YX0vcmV0d2VldGAsIGRhdGEpOyAvLyBQT1NUIC9wb3N0LzEvY29tbWVudFxyXG59XHJcblxyXG5mdW5jdGlvbiogcmV0d2VldChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZXR3ZWV0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRVRXRUVUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRVRXRUVUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1BPU1RfUkVRVUVTVCwgbG9hZFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdHMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1BPU1RTX1JFUVVFU1QsIGxvYWRQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRVc2VyUG9zdHMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCwgbG9hZFVzZXJQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRIYXNodGFnUG9zdHMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCwgbG9hZEhhc2h0YWdQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMaWtlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExJS0VfUE9TVF9SRVFVRVNULCBsaWtlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVuTGlrZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVTkxJS0VfUE9TVF9SRVFVRVNULCB1bmxpa2VQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVXBsb2FkSW1hZ2VzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVVBMT0FEX0lNQUdFU19SRVFVRVNULCB1cGxvYWRJbWFnZXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJldHdlZXQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRVRXRUVUX1JFUVVFU1QsIHJldHdlZXQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsod2F0Y2hMb2FkUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFBvc3RzKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkVXNlclBvc3RzKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzKSxcclxuICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hMaWtlUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoVW5MaWtlUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoVXBsb2FkSW1hZ2VzKSxcclxuICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICAgIGZvcmsod2F0Y2hSZXR3ZWV0KSxcclxuICBdKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9