// 1.js 完成excutor 执行器的实现
//状态及其转移
//如何让执行器决定状态转移的处理
class Promise{
    constructor(excutor){
        this.state='peding';//初始化未完成状态
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
        excutor((resolve,rejected)=>{

        })
        
    }
    then(){

    }
}


new Promise((resolve,rejected)=>{
    setTimeout(()=>{
        console.log('0')
    },1000)
    resolve(10)
    //封装一个花时间比较多的任务，以实现异步变同步
})

new Promise((resolve,rejected)=>{
    setTimeout(()=>{
        console.log('出错了')
        // throw new Error('出错了')  //语法错误,
    },1000)
    rejected('')
    //封装一个花时间比较多的任务，以实现异步变同步
})
