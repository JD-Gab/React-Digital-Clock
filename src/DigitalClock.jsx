import React, {useState, useEffect} from 'react';

function DigitalClock(){

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timerId);

    }, []);

    function formatTime() {
        let hours = time.getHours().toString().padStart(2, '0');
        let minutes = time.getMinutes().toString().padStart(2, '0');
        let seconds = time.getSeconds().toString().padStart(2, '0');
        const meridiem = hours >= 12 ? 'PM' : 'AM';

        hours = (hours % 12 || 12).toString().padStart(2, '0'); // Convert to 12-hour format
        return `${hours}:${minutes}:${seconds} ${meridiem}`;

    }

    return(
        <div className="digital-clock">
            <h1>Digital Clock</h1>
            <span className="clock-number">{formatTime()}</span>
        </div>
    );
}

export default DigitalClock;