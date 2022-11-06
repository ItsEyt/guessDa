import React, { useEffect, useState } from 'react'
import Winner from './Winner'
import { CSSTransition } from 'react-transition-group'

const Guessda = () => {

    const [guess, setGuess] = useState('')
    const [images, setimages] = useState('')
    const [winner, setWinner] = useState(false)
    const [guessCounter, setGuessCounter] = useState(localStorage.getItem('guessCounter') ? parseInt(localStorage.getItem('guessCounter')) : 1)
    
    const handleKeyDown = async event => {
        if (event.key === 'Enter') {
            if (guess === 'arad') {
                setWinner(true)
            }
            else {
                setGuessCounter(prev => prev + 1)
            }
            setGuess('')
            event.target.value = ''
        }
    };
    
    useEffect(() => {
        let today = new Date().toLocaleDateString()
        if (localStorage.getItem('date') !== today) {
            localStorage.setItem('date', today)
            setGuessCounter(1)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('guessCounter', guessCounter)
    }, [guessCounter])


    // useEffect(() => {
    //     let getImages = async () => {
    //         const axios = require('axios')
    //         let response = await axios.get('https://api.imgur.com/3/image/JEIce', {
    //             headers: {
    //                 "Authorization": "Client-ID 625b1965796a070"
    //             }
    //         })
    //         setimages(response)
    //     }
    //     getImages()
    // }, [])


    return (
        <>
        <CSSTransition
            in={winner}
            timeout={1000}
            classNames="modal">
            <Winner/>
        </CSSTransition>
            {images && console.log(images)}
            <div className='heading'>
                <p>GUESSDA.COM</p>
            </div>
            <div className='container'>
                <img src='https://picsum.photos/400/225' alt='...' className='shadow' />
                <div className='guess-wrap'>
                    {[...Array(6)].map((x, i) =>
                        <div key={i} className={`shadow guess ${guessCounter === i + 1 && winner ? `correct` : guessCounter > i + 1 ? `wrong` : guessCounter === i + 1 && `active`}`}>
                            <p>{i + 1}</p>
                        </div>)}
                </div>
                <input value={guess}
                    onChange={(evt) => setGuess(evt.target.value)}
                    onKeyDown={handleKeyDown}
                    className='shadow' />
            </div>
        </>

    )
}

export default Guessda