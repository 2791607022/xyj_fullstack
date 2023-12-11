
const call_ = function () {  // a.call(b , str1,str2)
    if (typeof this !== 'function'){
        throw new TypeError('error')
    }
    let ctx = arguments[0] || window; //  context = b || window
    ctx.fn = this;  // b.fn = a;

    const args = [...arguments].slice(1) // arr = [str1, str2]
    let result =  ctx.fn(...args) // result = a(str1,str2);

    delete ctx.fn;
    return result;
}


const apply_ = function(context, arr) {
    if (typeof this !== 'function'){
        throw new TypeError('error')
    }

    let ctx = context || window;
    ctx.fn = this;

    if (Array.isArray(arr) && arr.length>0) {
        result = ctx.fn(...arr)
    } else {
        result = ctx.fn()
    }

    delete context.fn;
    return result;

}

const bind_= function() {
    let ctx = arguments[0] || window;
    let self = this;

    let args =  [].slice.call(arguments,1);
    let tempFun = function () {};

    let newFn = function (){
        let _args =  [].slice.call(arguments,0);

        //判断执行函数是否是构造函数执行的，是的话就用this，
        //若不是通过new的方式来执行，而是直接执行的话，就用ctx
        return self.apply(this instanceof temp ? this : ctx, args.concat(_args));
    }
    temp.prototype = this.prototype;
    newFn.prototype = new temp();

    return newFn;

}

