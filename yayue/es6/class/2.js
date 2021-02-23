function Person(name){
    this.name=name
}
Person.prototype.sayHello=function (){
    return 'hello, I am'+this.name
}
const kevin =new Person('kevin')
console.log(kevin.sayHello());
Person();
console.log(Object.keys(Person.prototype))//[]
console.log(Object.getOwnPropertyNames(Person.prototype))