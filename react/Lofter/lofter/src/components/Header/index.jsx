import React from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import {Menu,Input,Select,Button} from 'element-react'
import 'element-theme-default';
import  './Header.css'
const Head=()=>{

        return(
            <div>
         <Menu theme="dark" defaultActive="1" className="el-menu-demo" mode="horizontal">
        
         <Menu.Item index="1"><div className="icon"></div></Menu.Item>
        <Menu.Item index="2"><Link >首页</Link></Menu.Item>
        <Menu.Item index="3" ><Link>发现</Link></Menu.Item>
        <Menu.Item index="4"><Link>APP</Link></Menu.Item>
        <Menu.Item index="5"> 
        <Input placeholder="请输入内容" prepend={
        <Select value="">
          {
            ['电影', '二次元', '音乐'].map((item, index) => <Select.Option key={index} label={item} value={index} />)
          }
        </Select>
      } append={<Button type="primary" icon="search">搜索</Button>} />
        </Menu.Item>
        <Menu.Item index="6"><Link><i className="el-icon-information"></i></Link></Menu.Item>
        <Menu.Item index="7" ><Link><i className="el-icon-message"></i></Link></Menu.Item>
        <Menu.Item index="8"><Link><i className="el-icon-setting"></i></Link></Menu.Item>
        <Menu.Item index="9"><Link><i className="el-icon-more"></i></Link></Menu.Item>
     
      </Menu>
      </div>
        )
}

export default Head