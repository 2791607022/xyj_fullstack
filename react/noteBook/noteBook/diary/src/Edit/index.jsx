import React, {useEffect,useState}from 'react';
import './style.css'
import { Link } from 'react-router-dom'
import axios from '../utils/axios'
import './style.css'
import {getQueryString} from '../utils/index'
import {List,InputItem,TextareaItem,DatePicker,Button} from 'antd-mobile'
const Edit=()=>{
  const id=getQueryString('id')
  const [date,setDate]=useState()
    const [list,setList]=useState([]);
   //页面重新渲染的时候就会执行
   useEffect(()=>{//页面重新渲染的时候就会执行
    
    axios.get('/list').then(({data})=>{
      console.log(data);
      setList(data);
    })
  },[])

      const update=()=>{
        console.log(id,'+-+-+-')
      axios.post(`/update/${id}`).then(({data})=>{
        console.log(data,'')
      })}

   return (
     <div className="diary-edit">
         <List renderHeader={()=>'编辑日记'}>
            <InputItem
            placeholder="请输入标题"
            clear
            >
                标题
            </InputItem>

            <TextareaItem
              placeholder="请输入日志内容"
              rows={6}>
            </TextareaItem>

            <DatePicker
            value={date}
            title="请选则日期"
            extra="请选则日期"
            onChange={date => setDate(date)}
            mode="date">
                <List.Item  arrow="horizontal">日期选择</List.Item>
            </DatePicker>

         </List>
         <Button type="primary" onClick={()=>update()}>确定更改</Button>
     </div>
   )
}

export default Edit