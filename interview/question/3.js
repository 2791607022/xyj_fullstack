var a=0xa;//这是什么  16进制编码
console.log(typeof a);//number
var b=010//8 进制以0开头
var c=0b01;//二进制
console.log(0.1+0.2)//0.30000004 js浮点数不准确 ？ js m没有浮点数 都是Number类型，不适合 高精度计算 js 中浮点数转换成二进制的时候，二进制相加 ;无限的循环 32 舍弃一些位
//二进制位相加 不准确
console.log((0.1).toString(2));//toString 传进制数