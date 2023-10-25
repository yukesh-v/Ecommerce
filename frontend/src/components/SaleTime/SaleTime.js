import React from 'react';
import './SaleTime.css'
import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp }) {
    const {

        seconds,
        minutes,
        hours,
        days,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


    return (
        <div className='clock' >
            <p>Hurry Up! Deal End In:</p>
            <div className='timer d-flex'>
                <div className='time'>
                <span>{days}</span>:
                    <p>Day</p>
                </div>
                <div className='time'>
                <span>{hours}</span>:
                    <p>Hour</p>
                </div>
                <div className='time'>
                <span>{minutes}</span>:
                    <p>Min</p>
                </div>
                <div className='time'>
                <span>{seconds}</span>
                    <p>Sec</p>
                </div>

            </div>
        </div>
    );
}

export default function timer() {
    const time = new Date();
    time.setDate(time.getDate() + 365); // 10 minutes timer
    return (
        <div>
            <MyTimer expiryTimestamp={time} />
        </div>
    );
}