import logo from './logo.svg';
import React, { useContext, useState} from 'react'

import './App.css';
//全局
const ThemeContext=React.createContext(null)


export function ChildWithTheme(){
  const theme = useContext(ThemeContext);
  return(
    <div>
      皮肤：{theme}
    </div>
  )
}

//为什么 数据变了 组件要检测哪些地方跟相关的改变了的数据，重新渲染VDOM树 =>更新局部 自定向下 React.createElement(组件名,props:{}immutable  内存中新的一份)
function ChildNoTheme(){
  console.log('不关心皮肤渲染');
  return(
  
    <div>
      
      改变皮肤，不重新渲染
    </div>
  )
}

function ThemeApp({children}){
  const [theme,setTheme] =useState("light");
  const onChangeTheme=()=>setTheme(theme==='light'?'dark':'light')
  return(
    <ThemeContext.Provider value={theme}>
    <button onClick={onChangeTheme}>改变皮肤</button>
    {children}
  </ThemeContext.Provider>
  )
}

function App() {
  const [theme,setTheme] =useState("light")
  const onChangeTheme=()=>setTheme(theme==='light'?'dark':'light')

  return (

     <ThemeApp>
     <ChildWithTheme/>{/* 独立的组件，不是子组件，传递的不是props,而是独立的数据，不需React.createElement */}
      <ChildNoTheme/>
      <ChildNoTheme/>
      <ChildNoTheme/>
      <ChildNoTheme/>
      <ChildNoTheme/>
      <ChildNoTheme/>
      <ChildNoTheme/> 
     </ThemeApp>
  );
}



export default App;
