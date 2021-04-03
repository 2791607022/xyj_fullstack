// 1.js 完成excutor 执行器的实现
//状态及其转移
//如何让执行器决定状态转移的处理
//thenable
class Promise{
    constructor(excutor){
        this.state='pending';//初始化未完成状态
        this.value=undefined;// 成功的值
        this.reason=undefined;//失败的原因
        //  异步任务会把结果交给resolve
        let resolve=(value)=>{
            if(this.state=='pending')
            {
                this.value=value
                this.state='fullfilled'
                
            }

        }

        let rejected=(reason)=>{
            if(this.state=='pending')
            {
                console.log('被rejected')
                this.reason=reason
                this.state='rejected'
            }
            
        }
        try{
            excutor(resolve,rejected)
        }
        catch(e){
            reject(e)
        }   
        
        
    }

    then(onFullfilled,onRejected){
        // //当前状态转移了才执行下一步 状态为fullfilled 时，传入成功后的回调，将执行权转移
        // if(this.state='pendig'){
        //     this.onResolveCallbacks.push(()=>{
        //         onFullfilled(this.value)
        //     })
        //     this.onRejectedCallbacks.push(()=>{
        //         onFullfilled(this.value)
        //     })

        // }
        if(this.state==='fullfilled')
        {
            onFullfilled(this.value)
            console.log('-*/*/')
        }
        if(this.state==='rejected')
        {
            onRejected(this.value)
        }
    }
}


new Promise((resolve,rejected)=>{
    setTimeout(()=>{
        console.log('0')
    },1000)
    resolve(10)
    //封装一个花时间比较多的任务，以实现异步变同步
}).then((data)=>{//当前promise 解决了 ，完成了状态转移，把控制权交出来 js 单线程 回调，事件机制，event-loop
    console.log(data,'++++++')
})

// new Promise((resolve,rejected)=>{
//     setTimeout(()=>{
//         console.log('出错了')
//         // throw new Error('出错了')  //语法错误,
//     },1000)
//     rejected('')
//     //封装一个花时间比较多的任务，以实现异步变同步
// })
