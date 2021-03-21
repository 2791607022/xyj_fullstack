import React, { useState,useEffect } from 'react'
// import {getBannerRequest} from './api/request'
import {Provider} from 'react-redux'
import store from './store'
import logo from './logo.svg'
import Recommend from './pages/Recommend'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    /*getBannerRequest().then(
      data=>{
        // console.log(data) data->dispatch(action)->reducer->Store(state)
        //2. 从store 取出来->components 
        //connect({dispatch,state get }(Component))

      }
    )*/
  },[])

  return (
   <Provider store={store}>
     <Recommend>
       
     </Recommend>
   </Provider>
  )
}

export default App
