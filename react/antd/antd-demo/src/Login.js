
import React ,{ Component } from 'react';
import './Login.css'
import config from './config'
import {Form,Input,Button} from 'antd'
import {Row } from 'antd'
//用 antd 做后台
export default class Login extends Component{
    render(){
        return(
            <div className="form">
                <div className="logo">
                    <img src={config.logoPath} alt="logo"/>
                    <span>{config.siteName}</span>
                </div>
                <Form>
                    <Form.Item name="username" label="usename">
                        <Input placeholder="请输入用户名"></Input>

                    </Form.Item>
                    <Form.Item name="password" label="password">
                        <Input placeholder="请输入密码"></Input>
                    </Form.Item>
                    <Row >
                        <Button type="primary" htmlType="submit">Sing in</Button>
                        <p>
                            <span className="margin-right">
                                Username:guest
                            </span>
                            <span>Password :guest</span>
                        </p>
                    </Row>
                </Form>
            </div>
        )
    }
}