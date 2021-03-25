//返回一个app
//require commonjs
import exoress from 'express'//es 6 
import postRouter from '../post/post.router'
const app=exoress()
//启用中间件，资源位置
app.use(
    postRouter/*文章路由*/ 
)

export default app;