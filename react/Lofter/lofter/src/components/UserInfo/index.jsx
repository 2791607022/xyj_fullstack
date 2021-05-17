import './index.css'
import {Link} from 'react-router-dom'
const UserInfo=()=>{
    return(
        <div className="user-info">
        <div className="user">
            <div className="page">白天的蓝云</div>
            <div className="foucs"> 关注 6</div>
        </div>
        <div className="writer">
           
                    <li onClick={<Link></Link>}>文章</li>
                    <li>合集</li>
                    <li>钱包</li>
                    <li>草稿</li>
                    <li>个人主页设计</li>
               
        </div>
        </div>
    )
}

export default UserInfo