import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'//复杂应用都是细分的 组件和数据是分离的
import store from './store'//组件与数据流的模块化
import {Provider} from 'mobx-react';//给组件提供状态管理


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,document.body
)

