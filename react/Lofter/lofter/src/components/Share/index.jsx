import React from 'react'
import './index.css'
import {EditOutlined,SnippetsOutlined,CameraOutlined ,CustomerServiceOutlined,YoutubeOutlined } from '@ant-design/icons'
import { MessageBox ,Message} from 'element-react';
import { Link } from 'react-router-dom';


const Share=()=>{
     const onClck=()=>{
        MessageBox.msgbox({
            title: '消息',
            message: '这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容',
            showCancelButton: true
          }).then(action => {
            Message({
              type: 'info',
              message: 'action: ' + action
            });
          })
    }
    return(
        <div className='share'>
            <div className="c" onClick={<Link ></Link>}><img src="https://avaimg.lf127.net/img/YUlNRFJkd1hpb3gxaWxIRHBlNFhHUEd6enNlQkFoTThTdXZrb3d3QXFFQWQ3UEV1NjI2dS93PT0.jpg" alt=""/></div>
            <div className="c" onClick={()=>onClck()}><EditOutlined />文字</div>
            <div className="c" onClick={()=>onClck()}><CameraOutlined />图片</div>
            <div className="c" onClick={()=>onClck()}><CustomerServiceOutlined />音乐</div>
            <div className="c" onClick={()=>onClck()}><YoutubeOutlined />视频</div>
            <div className="c" onClick={()=>onClck()}><SnippetsOutlined />长文章</div>
        </div>
    )
}

export default Share