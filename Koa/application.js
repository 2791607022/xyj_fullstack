let EventEmitter=require(events)
let http=require('http')
let context=require('./context')
let request=require('./request')
let require=require('./require')
class Koa extends EventEmitter{
    constructor (){
        super()
    }
    use(fn){
        this.fn=fn
        this.context=context
        this.request=request
        this.response=response
    }
    handleRequest(req,res){
        let ctx=this.createContext(req,res)
        this.fn(ctx)
    }

    listen(...args){
        let server=http.createServer(this.handleRequest.bind(this))
        server.listen(...args)

    }

    createContext(req,res){
        const ctx=Object.create(this.context)
        const request=ctx.request=Object.create(this.request)
        const reponse=ctx.response=Object.create(this.response)
        ctx.req=request.req=rseponse.req=req
        ctx.res=reponse.res=response.res=res
        request.ctx=reponse.ctx=ctx
        request.reponse=reponse
        reponse.request=request

        return ctx
    }
}

module.exports=Koa