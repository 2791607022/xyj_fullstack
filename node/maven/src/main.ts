//项目的启动
import app from './app'//一个文件只做一件事
//app->路由，上传文件，json化

//数据库的连接
app.listen(1234,()=>{
    console.log('服务已启动');
})