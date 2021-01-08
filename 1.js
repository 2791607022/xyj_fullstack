//user 为Object
const getUserInfo=function(user){
    //判断有 nsme age
    if(!user||typeof user!='object'||!Object.keys(user).includes("name")||!Object.keys(user).includes("age"))
     throw new Error('参数错误')
 return `name:${user.name},age:${user.age}`

}
console.log(getUserInfo({name:'koala',age:'18'}));
//限制下这种传参的随意性