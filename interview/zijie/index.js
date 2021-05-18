var name='world';

(function(){
    // 类似于 var name;
    if(typeof name==='undefined')
    {
        var name='Jack'
        console.log('Goobye'+name)
    }
    else{
        console.log('hello'+name)
    }
})()


function getJson() {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        console.log(2);
        resolve(2)
      }, 2000)
    })
  }
  
  async function testAsync() {
    await getJson()//上一次循环机制 await 后的代码都会被挤
    console.log(3);//被挤到下一次循环机制的微任务队列中
  }
  
  testAsync().then(
      
  )
  