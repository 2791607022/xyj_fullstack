//打造ctx
let proto={
    
}

function defineGetter(prop,name){
    proto.__defineGetter__(name,function(){
        return this[prop][name]
    })
}
defineGetter('request','url')//url==request.url
defineGetter('request','path')
module.exports=proto