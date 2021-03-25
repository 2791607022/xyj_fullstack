//app 的创建与基本配置 中间件
import express from 'express'//es6的模块化方案
import postRouter from '../post/post.router';
const app=express();

//body 处理加中间件 bodyParser
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded())//等

// app处于伺服状态 eventEmitter
// 中间件来打理 
//路由中间件 所有的路由都在这里汇总
app.use(//函数
    postRouter,//文章模块的路由
)
export default app