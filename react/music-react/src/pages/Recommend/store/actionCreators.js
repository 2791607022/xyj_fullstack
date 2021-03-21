//与API通信
import {getBannerRequest} from '../../../api/request'//页面状态。一个状态->另一个状态 {type:'',data:''}
export const changeBannerList=(data)=>({
    type:'CHANGE_BANNER',
    data:data//异步
})

//com->action->api->dispatch(action.type)->reducer->新的值
export const getBannerList=()=>{
    return(dispatch)=>{
        getBannerRequest()
        .then(data=>{//同步
            console.log(data,'|||||------')
            dispatch(changeBannerList(data.banners))
        })
}
}
    