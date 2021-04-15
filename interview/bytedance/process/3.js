const http=require('http')
//可以把这台机器所有CPU都用起来
module.exports= http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type':'text/plain'
    });
    res.end('hello world');
}).listen(3000,()=>{
    console.log('3000')
})