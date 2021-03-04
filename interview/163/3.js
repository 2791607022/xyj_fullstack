//引用类型 存储的元素是地址
//存储的地点是 堆
const a=[]
const b=a;
b.push(1)
console.log(a)

function text(person){
    person.gae=26;
    person={//person 被重置了 person 不再是 p1 的引用类型 const person 常量 找地址的时候 不找了，重新分配地址
        name:'yyy',
        age:30
    }
    return person;
}

const p1={
    name:'yck',
    age:25
}

const p2=test(p1)
console.log(p1)//yck 26
console.log(p2)// 30 yyy