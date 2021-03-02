import React ,{Component} from "react"
import dates from './Date.js'
import {Layout} from 'antd';
import DateList from './components/DateList'
import './TodoList.css'//布局组件 header+ main+ footer
import From from './components/Form'
//warning 老写法，类式组件用的越来越少，被react-hooks 替代了 函数式编程


const {Header,Content} =Layout;
class TodoList extends Component{
    constructor (props){
        super()
        this.state={
            list:[]
        }
    }
    //数据驱动页面
    //生命周期1、 react-hooks 用user-state 可以设置 name,setName=userstate('defaultName')
componentDidMount(){
    this.setState({
        list:dates
    })
}
deleteItem(id){//数据查找优化 用redux
    console.log(id)
    let deleteIndex=dates.findIndex(item=>{
        return item.id===id
    })
    dates.splice(deleteIndex,1)
    this.setState({
        list:dates
    })
}

changeItem(id){
    let changeIndex=dates.findIndex(item=>{
        return item===id
    })
    dates[changeIndex].isComplete=!dates[changeIndex].isComplete
    this.setState(
        {
            list:dates
        }
    )
}
    
handleSearchItem (value){
        let newList=dates.filter(item=>{
            return item.content.indexOf(value)!=-1
        })
        this.setState(
            {
                list:dates
            }
        )

   
}

    render(){
        return(
            <Layout className="todolist-layout">
                 <Header>
                     <h3 className="logo">
                        TodoList
                     </h3>
                 </Header>
                <Content className="todolist-content">
                <From  searchItem={value=>this.handleSearchItem(value)}/>
                    <DateList list={this.state.list} 
                    deleteItem={id => this.deleteItem(id)}
                    changeItem={id=>this.changeItem(id)}
                    />
                </Content>
            </Layout>
        )
    }
}
export default TodoList
