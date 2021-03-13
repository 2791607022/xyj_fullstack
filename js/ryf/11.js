function Animal()
{
   
}
Animal.prototype.species="动物"
function Cat()
{
    this.name= name ;
    this.color= color;
}
function extend(Child ,Parent)
{
   
    var F=function() {};//空函数对象，内存开销不大
    F.prototype=Parent.prototype;
    Child.prototype=new F();
    Child.prototype.constructor=Child;
    Child.uber=Parent.prototype;
}
extend(Cat ,Animal);
var cat1=new Cat('灰色','灰灰');
console.log(cat1.species)