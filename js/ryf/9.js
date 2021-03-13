function Animal()
{
   
}
Animal.prototype.species="动物"
function Cat()
{
    this.name= name ;
    this.color= color;
}
Cat.prototype=Animal.prototype
let cat1=new Cat("大毛","黄色")
Cat.prototype.constructor=Cat 
Cat.prototype.x=1;
console.log(Animal.prototype);