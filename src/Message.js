import React from 'react'

export default function Message (props){
    return(
        <div className="Messages">
            <h2>Counter value is : {props.counter}</h2>
            <h2>{props.Status ? 'Morning':'Night'}</h2>
        </div>
    );
}