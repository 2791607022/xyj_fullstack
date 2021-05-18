// js内存机制，垃圾回收
function foo(){
    var a=1
    var b=a
    a=2;

    console.log(a)
    console.log(b)
}
foo()//2 1

function bar(){
    var a={name:'as'}
    var b={name:'dh'}
    a.name='djd'
    console.log(a)
    console.log(b)

}
bar()//djd djd  深浅拷贝在于是否分配新的内存空间。


function baz(){
    var a='as'
    var b={name:'dh'}
   let test=1;
   const test2=2
   var innerBar={
       setName:function(newName){
        newName=a
       },
       getName:function(){
        console.log(test)
       }
   }
return innerBar


}

var a=baz() //未被执行完的闭包函数的内存的被使用到的变量得到标识符，未被回收，执行栈中创建closure对象，它的地址指向堆
a.setName()
a.getName()