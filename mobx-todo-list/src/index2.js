// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import TimeView from './TimeView'//观察者设计模式
// import {configure, makeAutoObservable} from 'mobx'//让状态可以被观察 ->store
// import {observer} from 'mobx-react'//观察者->TimeView

// class Timer{//store
//   secondsPassed=0;//提供数据
//   constructor(){
//     makeAutoObservable(this)//将这个实例上的数据可以被观察

//   }
//   increase(){
//     this
//   }

// }

// const myTimer =new Timer()//实例

// const TimerView =observer(({timer})=>{
//   <button >
//     Seconds passed:{timer.secondsPassed}
//   </button>
// ))//观察状态的组件

// //组件被去掉共享的状态 
// //组件不能管状态
// //状态要提升 要被组件观察 seconds去到组件中 实现oberverable
// //设计思想 中心数据secondsPassed=0  动作action: increase reset 
// ReactDOM.render(<TimeView timer={myTimer}></TimeView>,document.body);



import React from "react";
import ReactDOM from "react-dom";
// 让一个状态可以被观察 
import { makeAutoObservable } from "mobx"; // 1
import { observer } from 'mobx-react'; // 观察者 2

// TimerView 2     Store 1 
// Store  
class Timer {
  secondsPassed = 0 // 提供数据  
  constructor() {
    makeAutoObservable(this)
  }
  increase(){
    this.secondsPassed+=1
  }
  reset(){
    this.secondsPassed=0
  }
}

const myTimer = new Timer();  // 实例 
// 观察状态的组件 
const TimerView = observer(({timer}) => ( 
  <button onClick={()=>timer.reset()}>Seconds passed: {timer.secondsPassed}</button>
))
setInterval(()=>{
  myTimer.increase()
},1000)

// 根上套上 分开 组件就被那啥 去状态 组件不能再
// 组件不能搞状态， 
// 状态要提升 要被组件observer 
// new Store {
  // seconds -> 去到 组件中 StorageEvent.seconds 
  // oberverable 
// }
// secondsPassed = 0 
// action increase reset 


ReactDOM.render(<TimerView timer={myTimer}/>, document.body);
