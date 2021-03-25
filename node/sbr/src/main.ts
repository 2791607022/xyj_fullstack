//越大的项目，越要模块化
import app from './app';//封装
import {APP_PORT} from './app/app.config'
import {connection} from './app/database/mysql'
connection.connect(error=>{
    if(error){
        console.log('数据库连接失败',error.message)
        return ;
    }
    console.log('成功连接数据库服务');
})

app.listen(APP_PORT,()=>{
    console.log('服务已启动')
})