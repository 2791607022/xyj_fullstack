import React from 'react';
import {connect} from 'react-redux'
import * as actionTypes from './store/actionCreators'
import { useEffect } from 'react';
function Recommend(props){
    console.log(props.bannerList,'----------')
    useEffect(()=>{
        props.getBannerDataDispatch()
    },[])
    return(
        <div>
            Recommand
        </div>
    )
}
const mapStateToProps=(state)=>{
    return {
        bannerList:state.recommend.bannerList
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        getBannerDataDispatch(){
            dispatch(
                actionTypes.getBannerList()//store reducer 得到消息
            )
        }
    }
}

//读取store里的状态，dispatch action
export default connect(mapStateToProps,mapDispatchToProps)(Recommend)