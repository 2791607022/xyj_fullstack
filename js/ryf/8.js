//prototype  模式
function Animal()
{
    this.species='动物'
}
function Cat()
{
    this.name= name ;
    this.color= color;
}
//cat1->Cat->new Animal(){species:}
Cat.prototype=new Animal();//副作用
Cat.prototype.constuctor=Cat; 
var cat1=new Cat('大毛','黄色');
console.log(cat1.species);
console.log(Cat.prototype.constuctor);