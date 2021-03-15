import {makeAutoObservable} from 'mobx'
class AppStore{
    constructor(){
        makeAutoObservable(this)
    }

//state
todos=[
    {id:0,title:"todo标题",done:false},
    {id:1,title:"已完成todo标题",done:false}
]
changeFinished(id){
    const list = this.todos.filter((item,index)=> item.id === id)
    list[0].done =!list[0].done
}
}
export default  new AppStore()
