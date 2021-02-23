//es6 提供了class关键字
//语法糖 还是原型式继承
//用class 向大型语言靠近
class Person{//不是json object 是面向对象的语法糖
    //新写法
    state={
        count:0
    }
constructor(name){
    
    this.name=name;
}
sayHello(){
    return 'hello , I am'+this.name
}
}

const kevin=new Person('keivn')
console.log(kevin.sayHello());
//可访问 不可枚举 es6 属性和方法 更细节的功能？
Person()//不能运行
//Object.keys?是什么？
//es6 里可枚举怎么实现
console.log(Object.keys(Person.prototype))//可枚举属性 ['sayHello']
console.log(Object.getOwnPropertyNames(Person.prototype))