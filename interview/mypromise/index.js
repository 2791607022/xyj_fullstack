let a= function(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{console.log('aaa')},1000)
    })
}
let b= function(){
    setTimeout(()=>{console.log('bbb')},500)
}

a().then((res)=>{
    b()
})