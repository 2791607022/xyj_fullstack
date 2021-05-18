const Koa=require('koa')

const app=new Koa()

app.use((req,res)=>{//ctx 代指 koa
   res.end("hello world")
})

app.listen(3001)

let http=require('http')

let server=http.createServer((req,res)=>{
    res.end('Hello jak')
})

server.listen(4000)