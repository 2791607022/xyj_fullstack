//与parcel 的不同，配置繁琐
//一定会去根目录找到webpack.js配置文件
//module node 模块化 common.js module.exports
// import exports es6 export default
module.exports={
    entry:'./main.js',//入口
    output:{//出口
        filename:'bundle.js'
    }

}