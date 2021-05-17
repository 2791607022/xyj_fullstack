import { Form, Input, Button, Checkbox} from 'antd';
import {Menu, Radio} from 'element-react'
import 'element-theme-default';
import {Link} from 'react-router-dom'
import './index.css'
 import {MailOutlined,WeiboCircleOutlined,WechatOutlined,QqOutlined} from '@ant-design/icons'
    const layout = {
        labelCol: {
          span:6,
        },
        wrapperCol: {
          span: 10,
        },
      };
      const tailLayout = {
        wrapperCol: {
          offset: 6,
          span: 10,
        },
      };
      
      const Login= () => {
        const onFinish = (values) => {
          console.log('Success:', values);
        };
      
        const onFinishFailed = (errorInfo) => {
          console.log('Failed:', errorInfo);
        };
    return(
        <div className='Login'>
        <div className='login'>
            <div className="header">
            <Menu  defaultActive="2" className="el-menu-demo" mode="horizontal" >
        <Menu.Item index="1">验证码登录</Menu.Item>
        <Menu.Item index="2">账号密码登录</Menu.Item>
      </Menu>
      <hr/>
            </div>
            <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="账号名"
        name="username"
        rules={[
          {
            required: true,
            message: '请输入账号',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[
          {
            required: true,
            message: '请输入密码',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
          <Link to={{pathname:'Home'}}>
        <Button type="primary" htmlType="submit" size="large" shape="round">
          登录
        </Button>
        </Link>
      </Form.Item>
    </Form>
    <Radio value="1" >我已同意服务协议和隐私政策</Radio>
    <div className="fotter">

        <hr/>
        <div className="methods">
            <span><MailOutlined />  邮箱</span>
            <span><WeiboCircleOutlined /> 微博</span>
            <span><WechatOutlined /> 微信</span>
            <span><QqOutlined /> QQ</span>
        </div>
    </div>
        </div>
        </div>
    )
}

export default Login