import { actionCreators } from ".";

//首页，singers ，排行榜，模块化
    let defaultState=({
        bannerList:[]
    }
)

export default (state=defaultState,action)=>{
    console.log('!?!',action)
    switch(action.type){
      
        case"CHANGE_BANNER":
        return{
         ... state,
         bannerList:action.data
        }
        default:
            return state
}
}