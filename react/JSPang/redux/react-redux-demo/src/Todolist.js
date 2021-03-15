import React from 'react';
import {connect} from 'react-redux'

const Todolist=(props)=>{//w无状态组件
    let {inputValue,clickbtn,inputChange,list}=props
    return ( <div>
        <div>
        <input value={inputValue} onChange={inputChange}/>
        <button onClick={clickbtn}>提交</button>
        <ul>
            {
                list.map((item,index)=>{
                    return(<li key={index} >{item}</li>)
                })
            }
        </ul>
        </div>
    </div> );

}

const dispatchToProps=(dispatch)=>{
    return{
        inputChange(e){
            let action={
                type:'change_input',
                value:e.target.value
            }
            dispatch(action)
        },
        clickbtn(){
            let action ={type:"add_item"}
            dispatch(action)
        }
    }


}
const stateToProps=(state)=>{
    return{
        inputValue:state.inputValue,
        list:state.list
    }
} 

export default connect(stateToProps, dispatchToProps)(Todolist);