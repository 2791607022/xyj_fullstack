1. redux 引入的标准流程
 安装
  redux-thunk 是支持异步 action 操作的中间件
2. 目录store 
 export default store
 createStore(reducer)
 reducer比较复杂的，可以是模块化的 combineReducers
 applyMiddlewares 中间件服务 redux-thunk redux-log...
3. reducer
 - 形式 纯函数 返回状态
 - 放在 store/
 
 store 提供给Provider->APP组件 connect({state要哪些,dispatch}){Component}HOC  不需要每个组件都去store
 store createStore(reducer,很多模块)
 {reducer函数，action}组合 