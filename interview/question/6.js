//隐式类型转换
//当一侧操作数为String类型，会优先将另一侧转换为字符串类型
console.log(1+'2');//12
//当一侧操作数为Number类型，另一侧会转换成Number类型
console.log(1+true)//2
console.log(1+{});//1[object Object]
//一侧为Number,另一侧为引用时 会根据操作符变化
//对象 在表达式 if== 数字或字符串 toString()
console.log(3*{valueOf:function(){return 5;}});//15  对象提供了valueOf 类型转换
console.log(3+{},3*{})//3[object Object],NaN