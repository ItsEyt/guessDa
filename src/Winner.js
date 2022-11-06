import React, { useState } from 'react'

const Winner = () => {

    let d = new Date()
    let msTillMidnight = -d.getTime() + d.setHours(24,0,0,0);
    const [hours, setHours] = useState(Math.floor(msTillMidnight/3600000)) // milliseconds -> hours conversion
    const [minutes, setMinutes] = useState(Math.floor(msTillMidnight/60000%60)) // milliseconds -> minutes conversion (take away the hours)
    const [seconds, setSeconds] = useState(Math.floor(msTillMidnight/1000%60%60)) // milliseconds -> seconds conversion (take away hours+minutes)

setInterval(() => {
    let d = new Date()
    let msTillMidnight = -d.getTime() + d.setHours(24,0,0,0);
    setHours(Math.floor(msTillMidnight/3600000))
    setMinutes(Math.floor(msTillMidnight/60000%60))
    setSeconds(Math.floor(msTillMidnight/1000%60%60))
}, 500);


    return (
        <div className='winner-modal shadow'>
            <p className='margined'>Congratulations you got it!</p>
            <hr />
            <p>Streak: </p>
            <p>correct guess: </p>
            <p>next riddle in: {`${hours}:${minutes}:${seconds.toString().length<2 ?`0${seconds}`:seconds}`} </p>
        </div>
    )
}

export default Winner