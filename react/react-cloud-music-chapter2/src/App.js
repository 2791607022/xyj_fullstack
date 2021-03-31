import React from 'react'
import { Provider } from 'react-redux'
import { GlobalStyle } from  './style'
import { IconStyle } from './assets/iconfont/iconfont'
import store from './store/index'
import Recommend from './application/Recommend'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      <Recommend />
    </Provider>
  )
}

export default App;