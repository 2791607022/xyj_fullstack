const express=require('express')
const app=express()
const fs=require('fs')
const port=3000;
const path=require('path')
const md5=require('md5')
//请求demo.js
//路由是/demo.js
// fs把它读取并发送流
app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
      <head>
      <title>Document</title>
      </head>
      <body>
      demo1
      <script src="/demo.js">
      </script>
      </body>
    </html>
    `)
  })

app.get('/demo.js',(req,res)=>{
    console.log('response here')
    //如果浏览器带上一个标志，表达有这文件，时间是什么
    //返回文件
    const jsPath = path.resolve(__dirname, './static/js/demo.js');
    let status = fs.statSync(jsPath);
    // console.log(status, '--------------');
    let lastModified = status.mtime.toUTCString();
    let count = fs.readFileSync(jsPath);
    let etag=md5(count);//md5编码 进行编码比对

    console.log(lastModified,'+++++')
    //把文件返回
    //如何返回文件的同时，应该要给它一个标志，加上时间 HTTP Etag
    
    if(req.header['if-none-match']==etag){
        res.setHeader('ETag',etag)
        res.writeHead(304,'NOt Modified')
        res.end()
        return;
    }

    res.setHeader('Cache-Control','public,max-age=30')//设置响应头
    res.setHeader('Last-Modified',lastModified)
    res.setHeader('ETag',etag)
    res.writeHeader(200,'OK')
    res.end(count)

    // if(lastModified==req.headers('if-modified-since')){
    //     res.writeHead(304,'NO Modified')
    //     res.end();//为空 不需要有响应 。
    //     return;
    // }
})



app.listen(port,()=>{
    console.log('listen ')
})