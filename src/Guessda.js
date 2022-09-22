import React, { useState } from 'react'

const Guessda = () => {

    const [guess, setGuess] = useState('')

    const handleKeyDown = event => {
        console.log('User pressed: ', event.key);
        if (event.key === 'Enter') {
            console.log('Enter key pressed ✅');
        }
    };

    return (
        <>
            <div className='heading'>
                <p>GUESSDA.COM</p>
            </div>
            <div className='container'>
                <img src='https://picsum.photos/400/225' alt='...' />
                <br />
                <input value={guess}
                    onChange={(evt) => setGuess(evt.target.value)}
                    onKeyDown={handleKeyDown} />
            </div>
        </>

    )
}

export default Guessda