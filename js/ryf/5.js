function Cat(name ,color)
{

    this.name=name;//this 指向它的示例
    this.color=color;
}
//实例化
 var cat1=new Cat("大毛","黄色");
 var cat2=new Cat("二毛","黄色");
 console.log(cat1.constructor==cat2.constructor);
 console.log(cat1 instanceof Cat);
 console.log(cat2 instanceof Cat);//构造函数