//module 模块 ，node 的内置的模块化机制 common.js
// moudle.export +require
//es6 用 export default import
//webpack 升级我们处理静态资源的方法 -》企业级开发
module.exports={
    entry:'./src/main.js',
    output:{
        filename:'[name].js'},
        module:{/*每种类型的静态文件 代表某种资源 ，提供一种解决方案*/ 
            rules:[{
                test:/\.css$/,
                use:['style-loader','css-loader']
            }]
        }

}
