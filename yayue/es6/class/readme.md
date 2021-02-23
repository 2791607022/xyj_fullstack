- es6 class 与 es5 构造函数 +prototype 有什么关系
  语法糖 哪些

- babel babel 的使命来了
  es6 class 不停的更新 ，每个版本的意义。
  代码环境不一样
  Bable 负责转义
  js 的运行环境太负责了,不是单纯的浏览器区别，支持不同版本的node 怎么办


- 一线公司
 es6 class 关键字和es 5有什么区别
  -Es6 class 构造函数在constructor
    只能被new ，不能作为普通函数执行
    - 如果要你去设计的话？怎么实现

  - Person.prototype 不可枚举
    Object.keys()//可枚举
    Object.getOwnpropertyNames()可调用
  - es6 还有比es5实现丰富的地方
    - 声明属性的高级方法 state={
        count:0
    } 支持与否与node 的版本有关

  - 手写一个babel 手写es6 class的转义代码
 1. babel js转义  帮助es6 class->es5 function
 