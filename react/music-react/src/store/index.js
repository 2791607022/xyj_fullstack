import React from 'react';
import reducer from './reducer'
import thunk from 'redux-thunk'
import {applyMiddleware, createStore,compose} from 'redux'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;//组件->中间件1，2，3->store tree 单一状态树
const store=createStore(reducer,composeEnhancers
    (applyMiddleware(thunk)))
export default store;