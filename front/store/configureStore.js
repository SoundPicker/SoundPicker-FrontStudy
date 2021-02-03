import { compose, createStore,applyMiddleware } from 'redux';
import {createWrapper} from 'next-redux-wrapper'
import reducer from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension'

const configureStore=()=>{ //store: state 와 reducer를 포함하는 개념 
    const middlewares=[];
    const enhancer=process.env.NODE_ENV==='production' ? compose(applyMiddleware(...middlewares)): composeWithDevTools(applyMiddleware(...middlewares))
    const store=createStore(reducer,enhancer);
    return store;
};

const wrapper = createWrapper (configureStore,{debug: process.env.NODE_ENV==='development',});

export default wrapper;

