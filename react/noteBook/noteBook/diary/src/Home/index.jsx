import React, {useEffect,useState}from 'react';
import './style.css'
import { Card } from 'antd-mobile';
import { Link } from 'react-router-dom'
import axios from '../utils/axios'
// const list = [1, 2, 3, 4, 5, 6]

const Home = () => {
  const [list,setList]=useState([]);
  useEffect(()=>{//页面重新渲染的时候就会执行
    
    axios.get('/list').then(({data})=>{
      console.log(data);
      setList(data);
    })
  },[])
  console.log(list,'|||||')
  return (
    <div className="diary-list">
      {
        list.map(item => <Link to={{ pathname: 'detail', search: `?id=${item.id}`}}>
          <Card className="diary-item" key={item.id}>
            <Card.Header
              title={item.title}
              thumb={item.url}
              extra={<span>晴天</span>}
            />
            <Card.Body>
              <div>{item.content}</div>
            </Card.Body>
            <Card.Footer content={item.date} />
          </Card>
        </Link>)
      }
    </div>
  )
}


export default Home