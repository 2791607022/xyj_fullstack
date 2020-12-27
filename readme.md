-阮一峰
 
 1.JS变量的数据类型由值决定的，
  常量的话，es6以前没有长量 用 var。 数据类型是常态的
  - 类型不可改变
  - 简单值是不可变的，复杂数据类型的值是可以改变的·
  - 数值型，字符串，布尔值，undefined,null,symbol,对象（数组，函数）。

 2.typedf[1,2,3]如何知道是数组
  区别简单数据类型和复杂数据类型
  复杂数据类型中 function
  typeof 可以正确（细致）得到数据类型的
  number,string,boolean ,null,undefined ,symbol,object(function ,array)

  3 Object.prototype.toString.call(o)核心
   object 是谁？所有对象的原型对象？这种机制怎么构建起来的？
   prototype 为了节省内存，减少运行时间。
   call 借