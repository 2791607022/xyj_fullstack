function Cat(name ,color)
{
    //new的时候一定会执行Cat
    this.name=name;//this 指向它的示例
    this.color=color;
    this.type="猫科动物";
    //prototype要生成的原因，
    this.eat=function(){
        console.log('老鼠');
    }
}
Cat.prototype.eat=function(){//原型链上的对象，实例上的方法
    console.log('老鼠');
}
Cat.prototype.type='猫科动物';//每一次new 的过程 实例的对象.this会指向原型对象
//实例化
//prototype为了节省内存，减少运行时间。
// new 的执行过程
 var cat1=new Cat("大毛","黄色");
 var cat2=new Cat("二毛","黄色");
 cat1.eat();
 console.log(cat1.constructor==cat2.constructor);
 console.log(cat1 instanceof Cat);
 console.log(cat2 instanceof Cat);//构造函数
