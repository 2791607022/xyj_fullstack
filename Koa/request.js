const { response } = require("express")


//为什么koa没有req，res
let request={
    //希望ctx.url=ctx.request.url
    get url(){
        return this.req.url
    },
    get path(){
        return this.url.parse(this.req.url).pathname
    }

}

module.exports=request