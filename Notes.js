import React, { Component } from 'react';
import {loadCollection,db} from '../database'
import Note from './Note'
export default class Notes extends React.Component{
    constructor(props){
        super(props)

    }
    state={//es6 class properties 新特性
        entities:[]

    }
    conponentDidMount(){
        this.getInitialData();//取数据
    }
    getInitialData(){
        loadCollection('notes')//选择 notes数据库的notes数据表
        .then(
            collection=>{
                const entities=collection.chain()
                .find()
                .simplesort('$loki','isdesc')//查找 id 排序
                .data()
                console.log(entities);

                this.setState(
                    {
                        entities
                    }
                )
                collection.insert(
                    {body:'hello ~'},
                    {body:'hola ~'}
                )
                //add 先添加一些数据 便于显示
            }
        )
    }
    render(){
        const entities=this.state.entities//js业务区写完
        const noteItems=entities.map(entity=><Note
            key={entities.$loki}
            entity={entity}
        
        />)
        return(
            <div className="ui container notes ">
                < h4  className="ui horizontal divider header">  
                   <i className="paw icon"></i>
                    hdsjdsk
                </ h4>  
                <button  className="ui right floated basic violet button">
                    添加笔记
                </button>
                <div className="ui divided items">
                    {noteItems}
                </div>
                </div>
          
        )
    }
}