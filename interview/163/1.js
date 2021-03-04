var syml=Symbol();//es6 引入的表示独一无二的值
var syml2=Symbol('foo')//唯一的
var syml3=Symbol('foo')
console.log(sym2=sym3)//flase
console.log(typeof syml)//symbol
// 1. 汉书来创建，原始数据类型 冲突的地方？如何说明；函数用法上的区别:原始数据类型不能被new
// 2. Symbol 又何用；里面的字符串的作用->做一个标识

//用来偷懒的
var mySymbol=Symbol()//初始化
var shapeType={//形状的类型
    triangle:Symbol(),
    square:Symbol()
}

function getArea(shape,options)
{
    var area=0;
    switch(shape){
        case shapeType.triangle:
            area=0.5*options.width+options.height;
            break;
        case shapeType.square:
                area=options.width*options.height;
                break;
    }
    return area;
}
console.log(getArea(shapeType.triangle,{
    width:100,
    height:100
}))

var s1=Symbol('foo')
console.log(si instanceof Symbol)//flase 原始数据类型

const obj ={
    toString(){
        return 'abc'
    }
}
const sym =Symbol(obj)
console.log(s1.toString())//Symbol('abc')

var sym2 =Symbol('MY Symbol');
console.log('you Symbol is' +sym)//can not convert a Symbol value to a string

//symbol  可以用于 json key 表示唯一 第二种应用场景 如果object 对象上值重要 key名字不重要
// Object.getOwnPropertySymbols()遍历对象上的Symbol key
var obj ={}
var a=Symbol()
var b=Symbol()
obj[a]="hello"
obj[b]='world'