import * as React from 'react';
import { Component } from 'react';
 import {MemberHeader} from './memberHeader';
 import {memberAPI} from '../../api/member'
 
export class MeberPage extends React.Component{
   constructor(props){
       super(props)
       this.state={
           members:[

           ]
       }
   }
public componentDidMount(){
    //组件和API分离点在这里
   this.setState({
       members:memberAPI.fetchMembers()
   })
}

    render() { 
        
        return ( 
            <div className="row">
                <h2>MemberPage</h2>
                <table className="table"></table>
                <thead>
                    <MemberHeader/>
                </thead>
            </div>
         );
    }
}
 
