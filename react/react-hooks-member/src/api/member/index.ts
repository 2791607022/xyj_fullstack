import { MemberEntity } from '../../model';
import { members } from './mockData';
// 前端会来这里请求
// ts : 函数返回值的类型 Promise 
// ? Promise 约定  resolve 后的数据是什么
// :Promise<MemberEntity[]> 
// 获取数据的动作 
const fetchMembers = () :Promise<MemberEntity[]> => {
  // ts keypoint + react 
  // Promise 上的静态方法
  // Promise.resolve().then
  return Promise.resolve(members)
}

export const memberAPI = {
  fetchMembers
}