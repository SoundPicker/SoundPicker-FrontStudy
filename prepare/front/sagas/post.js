import { all, fork, put, takeLatest, delay } from 'redux-saga//effects';
import axios from 'axios';

import {
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
} from '../reducers/post';

function addPostAPI(data) {
  return axios.post('/api/post', data);
}

function addCommentAPI(data) {
  return axios.post('/api/post/${data.postId}/comment', data);
}

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data); //call은 동기라 return할때까지 기다렸다 넣어줌, fork는 비동기라 결과 오기 전에 바로 다음 거 실행
    delay(1000);
    yield put({
      type: ADD_POST_SUCCESS,
      // data: result.data,
    });
  } catch (err) {
    yield put({
      //put은 dispatch 개념
      type: ADD_POST_FAILURE,
      data: err.response.data,
    });
  }
}

function* addComment() {
  try {
    // const result = yield call(addCommentAPI, action.data);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      // data: result.data,
    });
  } catch (err) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga() {
  yield all([fork(watchAddPost), fork(watchAddComment)]);
}
