import { all, fork, takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

function loginAPI(data) {
  return axios.post('/api/login', data);
}

function* logIn(action) {
  try {
    const result = yield call(loginAPI, action.data); //call은 동기라 return할때까지 기다렸다 넣어줌, fork는 비동기라 결과 오기 전에 바로 다음 거 실행
    yield put({
      type: 'LOG_IN_SUCCESS',
      data: result.data,
    });
  } catch (err) {
    yield put({
      //put은 dispatch 개념
      type: 'LOG_IN_FAILURE',
      data: err.response.data,
    });
  }
}

function logoutAPI() {
  return axios.post('/api/logout');
}

function* logOut() {
  try {
    const result = yield call(logoutAPI); //call은 동기라 return할때까지 기다렸다 넣어줌, fork는 비동기라 결과 오기 전에 바로 다음 거 실행
    yield put({
      type: 'LOG_OUT_SUCCESS',
      data: result.data,
    });
  } catch (err) {
    yield put({
      //put은 dispatch 개념
      type: 'LOG_OUT_FAILURE',
      data: err.response.data,
    });
  }
}

function addPostAPI(data) {
  return axios.post('/api/post', data);
}

function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data); //call은 동기라 return할때까지 기다렸다 넣어줌, fork는 비동기라 결과 오기 전에 바로 다음 거 실행
    yield put({
      type: 'ADD_POST_SUCCESS',
      data: result.data,
    });
  } catch (err) {
    yield put({
      //put은 dispatch 개념
      type: 'ADD_POST_FAILURE',
      data: err.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeEvery('LOG_IN_REQUEST', logIn); //LOG_IN이라는 action이 실행될때까지 기다리겠다
}

function* watchLogOut() {
  yield takeEvery('LOG_OUT_REQUEST', logOut);
}

function* watchAddPost() {
  yield takeEvery('ADD_POST_REQUEST', addPost);
}

export default function* rootSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut), fork(watchAddPost)]);
}
