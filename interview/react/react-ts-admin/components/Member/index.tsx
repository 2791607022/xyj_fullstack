import React,{useState,useEffect} from 'react'
import {PersonEntity} from '../../model/member'
import { getCollection}  from '../../api/member'
const MemberTabelEntity=()=>{
    const [data,setState]=useState([])
    useEffect(()=>{
        getCollection().then(
            data=>{
                console.log(data)
            }
        )
    },[])
    return(
        <div>
        </div>
    )
}
export default MemberTabelEntity