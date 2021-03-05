import { user } from "./1";

interface User{
    type:"user"//
    name:string
    age:number
    occu:string
}

interface Admin{
    type:"admin"
    name:string
    age:number
    role:string
}
export type Person=User|Admin

export const persons:Person[]=[
    {
       type:"user",
       name:"skak",
       age:23,
       occu:"ssaa" ,
    },
    {
        type:"admin",
        name:"skak",
        age:23,
        role:"ssaa" ,
     },
     {
        type:"user",
        name:"skak",
        age:23,
        occu:"ssaa" ,
     },
]

//类型如果是管理员
//  冒号后对参数和返回值都做类型的声明
export function isAdmin(person:Person):person is Admin{
    return person.type =="admin";

}

export function isUser(person:Person):person is User{
    return person.type =="user";

}

export function LogPerson(person:Person){
    let addtionalInformation:string="";
    if(isAdmin(person))
    {
        addtionalInformation=person.role
    }
    if(isUser(person)){
        addtionalInformation=person.occu;
    }
    return person.type =="user";

}