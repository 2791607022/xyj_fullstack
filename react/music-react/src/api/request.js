import {axiosInstance} from './config'

axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
      console.log(err, "111")
    }
  )
//所有请求都在这里统一管理
export const getBannerRequest=()=>{//首页接口设计
    return axiosInstance.get('./banner')
}
export const getRecommandListQuest=()=>{
    return axiosInstance.get('./personalized')
}

export const getSingleList=()=>{//singers
    return axiosInstance.get('./personalized')
}
// export const getBannerRequest=()=>{
//     return axiosInstance.get('./banner')
// }