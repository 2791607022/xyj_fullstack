# 跨域
 - 后端跨域解决方案
 - JSONP json with padding
 - https://photo.sina.cn/aj/index?page=1&cate=recommend

 同源机制

 1. 通过script src 跨域向sina 发出了请求 规避了js代码xhr fetch被同源机制管制 JS 代码能够使用
 2. &callback=callback
    在页面上有一个callback的函数等待被调用，
 3. callback({}),JSON+padding ，返回了js代码

  xhr.fetch 因运行在沙箱中的js同源机制 无法请求跨域资源，迂回到使用script 标签 有跨域访问资源的能力，http请求中 带上 &callback (不变)=callback(可变) 这个padding，sina 服务器就在json 数据外面包一层callback 函数，将这个带有ing 的，可以在script 的到后运行的函数，页面上已经准备好了这个函数。从而效果一样

  
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <script>
    let jsonp = (url, data = {}, callback='callback') => {
      // 准备好带有padding的请求url 
      // 1. url + data script 需要的src 
      let datasrc = url.indexOf('?') === -1?'?':'&'
      // console.log(dataStr)
      for(let key in data) {
        datasrc += `${key}=${data[key]}&`;
      }
      datasrc+= 'callback='+callback
      
      //构造script 
      let  oscript=document.createElement('script');
        oscript.src=url+datasrc;
        document.body.appendChild(oscript)
        return new Promise((resolve,reject)=>{
            window[callback]=(data)=>{
                try{
                    resolve(data)
                }
                catch(e){
                    reject(e)
                }
                finally{
                    oscript.parentNode.removeChild(oscript)
                }
            }
        }
    )
      // return new Promsie()
      // console.log(dataStr);
      // 1.js可以创建标签document.createElment 
      // 函数作用域 外界可以访问到呢？ window
    }
    // 请使用json原理， 封装json函数，不用在
    // 为了远程资源， 1 加一个函数 2 script标签 
    jsonp('https://photo.sina.cn/aj/index?a=1', {
      page: 1,
      cate: 'recommend'
    })
    .then(response => {
      console.log(response);
    })
  </script>
</body>
</html>