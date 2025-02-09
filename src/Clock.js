// src/Clock.js
import React, { useState, useEffect } from 'react';
import './Clock.css';


const Clock = () => {
    const [time, setTime] = useState(new Date());


    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);


        return () => clearInterval(intervalId);
    }, []);


    const formattedTime = time.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });


    return (
        <div className='clock-container'>
            <span className='font-link'>
                <div className='clock-text'>{formattedTime}</div>
            </span>
        </div>
    );
};


export default Clock;
