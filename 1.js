/*函数名，对象 js 类型 附属于objct的可运行的对象*/ 
const arr=[1,2,3];
const a="hello";//申明变量 undefined 类型未定义
console.log(typeof arr);
arr.push(4);
const obj={a:1};
obj.b=2;
console.log(arr);//a=1;
console.log(typeof a);
function Cart()
{
    this.type="折耳";
}
Cart.prototype.sayHello=function(){
    console.log('喵');
}