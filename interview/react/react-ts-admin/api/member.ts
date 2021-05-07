import {PersonEntity} from '../model/member'
import Axios,{AxiosResponse}from 'axios'
//后台前缀基本一样
const gitHubURL = "https://api.github.com";
//业务API 不要去重复写一样的前缀
const gitHubMembersUrl = `${gitHubURL}/orgs/lemoncode/members`

export  const  getCollection =(): Promise<PersonEntity[]>=>{
    //使用try catch 处理了网络请求
  return new Promise((resolve,reject)=>{
      try{ 
        Axios.get<PersonEntity[]>(gitHubMembersUrl).then(data=>{
        resolve(mapMemberListApiToModel(data))
        console.log(data)
        })
    }
    catch (err){
        reject(err)
    }
  
  })
}

const mapMemberListApiToModel=({data}:AxiosResponse<PersonEntity[]>):PersonEntity[]=>data.map(gitHubMembersUrl=>({
    id:gitHubMembersUrl.id,
    login:gitHubMembersUrl.login,
    avatar_url:gitHubMembersUrl.avatar_url,
}))