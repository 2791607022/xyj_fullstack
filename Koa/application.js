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

    listen(...args){
        let server=http.createServer(this.fn)
        server.listen(...args)

    }

    createContext(){
        const ctx=Object.create(this.context)
        const request=ctx.request=Object.create(this.request)
        const reponse=ctx.response=Object.create(this.response)

    }
}

module.exports=Koa