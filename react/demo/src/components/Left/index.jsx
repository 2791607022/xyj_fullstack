import React, {useState,useMemo, useRef,useEffect}from 'react';
import './index.css'
import dayjs from "dayjs"

const Left= (props) => {
const {title, description, time, status, restTime,countDown } = props
const cd = useRef(restTime);
const timer = useRef(null);
const [showTime, setShowTime] = useState(countDown);

const startTime = useMemo(() =>{
    return  time?.[0] && dayjs(time[0]).format("MM.DD HH:MM")
},[time])
const endTime = useMemo(() =>{
    return  time?.[1] && dayjs(time[1]).format("MM.DD HH:mm")
},[time])

const dealData = () => {
    if (cd.current <= 0) {
        setShowTime('')
      return timer.current && clearTimeout(timer.current);
    }
    const h = parseInt(((cd.current / (60 * 60)) % 24) + '');
    const m = parseInt(((cd.current / 60) % 60) + '');
    const s = parseInt((cd.current % 60) + '');
    setShowTime(`${h}:${m}:${s}`);
    cd.current--;
    timer.current = setTimeout(() => {
      dealData();
    }, 1000);
  };

  useEffect(() => {
    dealData();
    return () => {
        timer.current && clearTimeout(timer.current);
    }
  }, [restTime]);


  return (
    <div className="content">
        <div style={{display: 'flex', flexDirection:'column', alignItems:'flex-start',marginRight:'32px' }}>
            <span className='title'>{title}</span>
            <span className='description'>{description}</span>
            {restTime ? <span  className='time'>距结束 {showTime}</span>  :   <span  className='time'>有效期：{startTime}-{endTime}</span>}
          
        </div>
        <div className='button'>
            <span   className="status">{status}</span>
        </div>
    </div>
  )
}

export default Left