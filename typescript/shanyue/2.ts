interface User{
    name:string;
    age:number;
    occupation:string;

};
interface Admin{
    name:string;
    age:number;
    role:string;
}
// export type User ={//数据是要类型化的
//     name:string;
//     age:number;
//     occupation?:string;
//     role?:string;
// };
export type Person =User|Admin;
//用户表里的用户有的是role是管理员
export const user:Person[]=[{//ts 类型的约束，每个元素，满足条件
    name:"asd",
    age:18,
        occupation:"Chimney sweep"
    },
    {
        name:"dfg",
        age:18,
        occupation:"Astronaut"
    },
    {
        name:"dfg",
        age:18,
        role:"Astronaut"
    },
    
];
export function logPerson(user:Person){
    console.log(`-${user.name},${user.age}`)
    let addtionalInformation:string;
    //类型推导 <>类型转化
    // if((<Admin>user).role)
    if("role" in user)
    {
        addtionalInformation=(<Admin>user).role;
    }
    else{
        addtionalInformation=(<User>user).occupation;
    }
    console.log(`-${user.name},${user.age},${addtionalInformation}`)
}

