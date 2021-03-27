import React,{useEffect} from 'react'
import{connect} from 'react-redux'
import {loginByPhone} from './store/actionCreators'
const Login=(props)=>{
    const {userInfo,logingByPhoneDispatch}=props
    console.log(userInfo)
    useEffect(()=>{
        // logingByPhoneDispatch('18322901283','xiayuanjun413')
    },[])
    return(
        <div></div>
    )
}
const mapStateToProps=state=>({
    userInfo:state.getIn(["user","userInfo"])
})

const mapDispatchToProps=dispatch=>{
    return{
        logingByPhoneDispatch(phone,password){
            dispatch(loginByPhone(phone,password))
        }
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Login))