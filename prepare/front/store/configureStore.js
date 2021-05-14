import { createWrapper } from 'next-redux-wrapper';
import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers/index';
import rootSaga from '../sagas';

// action이 dispatch되는 것을 logging하는 미들웨어
const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  // action을 실행하기 전에 콘솔 한 번 찍어주는 미들웨어
  console.log(action);
  return next(action);
};

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, loggerMiddleware];

  // redux의 기능이 확장된 것이라 enhancer
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? // 배포용
        compose(applyMiddleware(...middlewares))
      : // 개발용일 때는 devtools 연결
        // middlewares는 배열이니까 spread해서 넣고!
        composeWithDevTools(applyMiddleware(...middlewares));

  const store = createStore(reducer, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper(configureStore, {
  // 개발모드라면 디버그를 좀 더 자세하게 해 줌
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
