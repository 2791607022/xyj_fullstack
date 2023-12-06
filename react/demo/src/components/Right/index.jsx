import React from 'react';
import './index.css';

const Right= (props) => {
  const { money } = props;
  return (
    <div className="content_1">
        <span  className="money">{money}</span>
        <span  className='unit'>元</span>
    </div>
  )
}

export default Right