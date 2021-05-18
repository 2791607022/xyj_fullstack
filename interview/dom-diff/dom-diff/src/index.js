import {createElement,render,renderDOM,diff} from './element'//DOM->virtualDOM
import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//内存中创建，模拟真实DOM的层次，结点，属性，子结点
//树 递归 最后的节点是文本结点时，就退出
//相同的操作 1.创造结点 2.设置属性 3. 子结点
{/* <ul class='list'>
   <li class='item'>sora</li>
   <li class="item">xxx </li>
  </ul> */}

//DOM树的表达转换形式
let virtualDOM=createElement('ul',{class:'list'},[createElement('li',{class:'item'},['sora']),createElement('li',{class:'item'},['xxx'])])
console.log(virtualDOM)

let el=render(virtualDOM)
console.log(el,'++++')

let virtualDOM2=createElement('ul',{
  class:'list-group'
},[createElement('li',{class:'item active'},['七里香']),
createElement('li',{class:'item'},['七里香']),
createElement('li',{class:'item'},['七里香']),
])

renderDOM(el,document.getElementById('root'))

//补丁
let patches=diff(virtualDOM,virtualDOM2)
console.log(patches)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
