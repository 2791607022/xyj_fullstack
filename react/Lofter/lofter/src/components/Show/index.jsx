import './index.css'
import Article from '../../Article/index'
const Show=()=>{
    return(
        <div className="show">
            <div className="top"></div>
            <div className="content">
            <Article></Article>
            </div>
            <div className="footer"></div>
        </div>
    )
}

export default Show