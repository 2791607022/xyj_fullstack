/** 
 * @author
 * @param{any} o
 * @param{sting} type
 * @return boolean
 */

const isTypeof=(o, type)=>{
    //打补丁
    if(['number','boolean','function','string'].indexOf(type)>=0)
    {
        return typeof(o)===type;
    }
    else
    {/*console.log(是对象)*/
    //console.log(typeof a);
    return Object.prototype.toString.call(o).indexOf(type)>0//Object.prototype.每个实例的toString
    }
}
// let a=1;
// let a=[1,2,3];
//let a=()=>{};
// let a="hello"
//let a="true";
//let a;undefined
let a=null;
//null array 是有问题的。
//console.log(typeof a);
console.log(isTypeof(a,'Null'));