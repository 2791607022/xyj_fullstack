import React, {useEffect,useState}from 'react';
import { Link } from 'react-router-dom'
import axios from '../utils/axios'
import { NavBar, Icon, List } from 'antd-mobile';
import {getQueryString} from '../utils/index'
import {useHistory} from 'react-router-dom'

const Detail = () => {
  const id = getQueryString('id')
  // console.log(id);
  let item=null;
  const history = useHistory()
  const [detail, setDetail] = useState({})
  useEffect(() => {
    axios.post(`/detail/${id}`).then(({data}) => {
      console.log(data[0].id,'-----------');
      setDetail(data[0])
    })
  }, ['detail'])
  console.log(detail)
 
         
  return (
    <div className="diary-detail">
         <NavBar mode="light"
         icon={<Icon type="left" />}
         onLeftClick={()=>history.goBack()}
         rightContent={<Link to={{ pathname: 'edit', search: `?id=${id}`}}><Icon key="1" type="ellipsis" ></Icon></Link>}
       >
         
       {detail.title}
       </NavBar>
       <List renderHeader={() => ``} className="my-list">
         <List.Item wrap>
         {detail.content}
         </List.Item>
       </List>
    </div>
  )
}



export default Detail
