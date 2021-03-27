import { CHANGE_LOGIN_STATUS, CHANGE_USER_INFO } from "./constants";
import {loginByPhoneRequest} from '../../../../api/request'
export const saveUsetInfo=data=>({
  type:CHANGE_USER_INFO,
  data
})

//api 两个action

export const loginByPhone=(phone,password)=>{
    return dispatch=>{
     loginByPhoneRequest(phone,password)
     .then(res=>{
         dispatch(saveLoginStatus(true))
         dispatch(saveUsetInfo(res.data));
     })
    }
}

export const saveLoginStatus=data=>({
  type:CHANGE_LOGIN_STATUS,
  data
})