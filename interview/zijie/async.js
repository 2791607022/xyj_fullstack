const getJson=()=>{//异步
    return "Json"
}

async function testAsync(){// 函数前面加async 只是声明 这个函数内存在异步
    try{
        await getJson()/// 异步函数前面加await 逻辑就会等到这个异步函数执行完毕后，再往下执行
    }
    catch (error){
      console.log(error)
    }
}

function testAsync(){
    return Promise.resolve().then(()=>{
        return getJson()
    }).then(()=>{
        console.log(3)
    })
}