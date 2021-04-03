//1. 三种状态 promise 类

class Promise{
constructor(executor){//1. executor 执行器， 立即执行异步任务  2. resolve 是函数 3. 状态只能从一个状态到另一种状态  遵循A+规范的 resolve 时 得到执行结果，rejected时 得到报错信息
let resolve=()=>{};
let rejected=()=>{}
executor(resolve,rejected);

    }
}

new Promise((resolve,rejected)=>{
    setTimeout(()=>{
        console.log('0')
    },1000)
    resolve(10)
    //封装一个花时间比较多的任务，以实现异步变同步
})