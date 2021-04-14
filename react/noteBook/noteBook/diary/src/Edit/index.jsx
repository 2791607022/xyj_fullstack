import React, { useState } from 'react';
import './style.css'
import {List,InputItem,TextareaItem,DatePicker} from 'antd-mobile'
const Edit=()=>{
    const [date,setDate]=useState()
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
     </div>
   )
}

export default Edit