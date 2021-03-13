function Animal()
{
   
}
Animal.prototype.species="动物"
function Cat()
{
    this.name= name ;
    this.color= color;
}
var F=function(){};
F.prototype=Animal.prototype;
var cat1=new Cat('小花','白色')
Cat.prototype=new F();//没有2的效率问题，没有3的修改问题
Cat.prototype.constructor=Cat;
console.log(Animal.prototype.constructor);
console.log(cat1.species)