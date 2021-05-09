//服务器端渲染 接受React Virtual DOM -> 生成 Html 不能挂载
//node 的commonJs 引入方式 和 es6 improt 引入冲突，在后端使用import ,使用工作流来处理
import express from 'wxpress'

import {renderToString} from "react-dom/server"
import Home from './containers/Home'

const app =express()

const content=renderToString(<Home/>)

app.get('/',(req,res)=>{
    res.send(
        `
        <html>
        <head></head>
        <body>
        <div id="#root"></div>
        </body>
        </html>
        `
    )
})
app.listen(3001,()=>{
    
})