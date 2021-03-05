import React, { Component } from 'react';
import moment from 'moment'; // 时间处理库


export default class Note extends Component {
  state = {
    entity: this.props.entity,
    // created  updated
    updated: this.props.entity.meta.updated || 
      this.props.entity.meta.created
  }

  updated() { // 封装的魅力
    // return moment()
    // 给你所有对时间的想象
    return moment (this.state.updated).fromNow()
  }

  render() {
    return (
      <div className="item">
        <div className="meta">
          {/* {this.props.entity.meta.created} */}
          {this.updated()}
        </div>
      </div>
    )
  }
}
