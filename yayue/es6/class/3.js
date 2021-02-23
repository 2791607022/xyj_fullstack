//1. Person class->function new 普通调用报错
//转义出的代码 不可能是class function
function _classCallCheck(instance , Constructor){
    if(!(instance instanceof Constructor))
    {
        throw new TypeError('Cannot call a class as a function');
    }
}
var Person=function Person(name){
    //es5
    //函数的运行方式，不是new的方式
    //this 不一样
    _classCallCheck(this,Person)//封装，babel webpack 工作流套件 把一些任务封装
    // if(this instanceof Person)//普通函数的this指向全局，new调用的this指向实例对象
    // {
    //     throw new TypeError('Cannot call a class as a function');
    // }
}