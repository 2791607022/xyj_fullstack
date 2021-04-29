const path=require('path')  
const HtmlWbpackPlugin=require('html-webpack-plugin')
//webpack 只认准 一个入口文件
module.exports={
    entry:{
        app:'./src/index.js'
    },
    output:{
        path:path.resolve(__dirname,'./dist'),//当前目录的绝对路径
        filename:'[name].boundle.js',
    },
    plugins:[
        new HtmlWbpackPlugin({
            title:'我要去***',
            template:path.resolve(__dirname,'./public/index.html'),
            filename:'index.html'
        })
    ]
}