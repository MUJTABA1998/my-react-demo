import React, { useState } from 'react'
import Message from './Message'
import './App.css';

export default function Counter () {

    let [count , setCount] = useState(1);
    let [isMorning , setDay] = useState(false);

    return (
        <div className={ `Box ${isMorning ? 'Day' : 'Night' }`}>
            <Message counter={count} Status={isMorning}/>
            <br />
            <button onClick={()=>{
                setCount(++count)
            }}>Update Counter</button>
            <br/><br/>
            <button onClick={()=>{
                setDay(!isMorning)
            }}>Update Day</button>
        </div>
    );
}