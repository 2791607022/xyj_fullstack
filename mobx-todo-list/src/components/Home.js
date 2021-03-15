import React, { Component } from 'react';
import{observer ,inject} from 'mobx-react'//观察者
//HOC高阶组件 App->HOC(store props)->HOME
@inject ("store")//注入 redux connect
@observer 
class Home extends Component{
    setFinished=(item ,index)=>{
        const {store} = this.props
        store.changeFinished(item.id);//要复杂一些 ，要走action流程

    }
    render(){
        const {store}=this.props//取 
        return(
            <div>
                <h2>Todolist</h2>
                {
                    store.todos.map((item,index)=>(
                        <div key={index}>
                            <label htmlFor={'todo'+item.id}>
                                <input type="checkbox" id={'todo'+item.id} 
                                checked={item.done}
                                onChange={this.setFinished.bind(this.item)}
                                />
                            {item.title}
                            </label>
                        </div>
                    )
                  )
                 }
            </div>
        )
    }
}

export default Home