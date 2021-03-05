const Koa=require('koa')
const app=new Koa();

//启用中间件 一个个函数服务于app,访问者
//node server思路
app.use(async (ctx)=>{
    //ctx 是request response结合
    ctx.body="hello world"
    if(ctx.url=='./index'){
        //设置cookie 服务器端设置,客户端每次会带上cookie 向服务器发送请求,服务器知道你是谁
        ctx.cookies.set('uid','123212342',{
            
           
            domain:'127.0.0.1' ,//域名限定 在一样的域名生效 用localhost也没用
            MaxAge:1000*60*60*24,//生命周期
            path:'/index',//限定路径
            httpOnly:false
            // expires:new Date('2020-1-1')//过期时间
        })
        ctx.body='/index'
    }
    else if(ctx.url=='/')
    {   
        if(ctx.cookies.get('uid'))
        {
            ctx.body=ctx.cookies.get('uid')
        }
        else{
            ctx.type = 'text/html;charset=utf-8';
            ctx.body = 'Cookie is none'
        }
       
    }
})

app.listen(1236,()=>{
    console.log('server is starting at port 1234')
})