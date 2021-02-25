//tsx->jsx 组件  tsx->main.js 加载的路上
//webpack index.tsx->hello.tsx . .tsx->moudles->awsome-typescript-loader->typescript->tsconfig.json->jsx->babel-core>.babelrc->es5
import * as React from 'react'
import { ProgressPlugin } from 'webpack'
//props react 函数组件有的参数
//react 组件数据 state 状态 是自己的 props 外界的
//ts 类型约定 react props 检查
interface Props{//父组件和子组件想要做个约定，一定传某个props,类型是什么 程序更安全
    //静态编译
    username:string;

}
export const HelloComponent=(props:Props)=>{
    return <h2>Hello Component !{props.username}</h2>
}