//山月老师的面试，每天刷几遍
// interfance 接口 type自定义类型 ts基础

export type User ={
    name:string;
    age:number;
    occupation:string;
};//自定义了一个类型

export const user:User[]=[{//ts 类型的约束，每个元素，满足条件
        name:"asd",
        age:18,
        occupation:"Chimney sweep"
    },
    {
        name:"dfg",
        age:18,
        occupation:"Astronaut"
    }
    ];
    export function logPerson(user){
        console.log(`-${user.name},${user.age}`)
}

    console.log("User:")
    user.forEach(logPerson)