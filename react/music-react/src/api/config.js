//fetch
//ajax 请求的封装
import axios from 'axios'
export const baseUrl='http://localhost:3000';//1.设置统一的地址前缀
   export const axiosInstance=axios.create({
        baseURL:baseUrl
    })