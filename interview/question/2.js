//js类型转换 隐式类型转换 | 显示类型转换  转换成数字，bool值，字符串

let obj ={name:'obj'};//引用类型
console.log(obj.toString())//[object Object]
console.log(Object.prototype.toString.call(null));

console.log('1'.toString())//可执行？为什么 '1' 是简单数据类型
//1. 谁的prototype ？String 应用类型 ？转换 string 简单类型，忽略的类型；js 提供了 Number(),String(),Boolean()装类型 区别于引用类型

var s=new Object('1')//类型转换 '1'.toString()执行的瞬间 编译器立即执行了类型转换；
console.log(s.toString());//编译器会执行 s=null 清空

var s1 ='some text'
console.log(typeof s1)
console.log(s1.toString());//暂时的
s1.color="red"//对象，动态设置属性
console.log(s1.color);//undefined 