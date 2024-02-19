import React, { useState } from 'react'
import './styles.css'

const TopSongs = () => {

    const [message1, setMessage1] = useState('')
    const [message2, setMessage2] = useState('')
    const [message3, setMessage3] = useState('')

    const like1 = () => {
        setMessage1('You like this song!')
        if (message1 === 'You like this song!') {
            setMessage1('')
        }
    }

    const like2 = () => {
        setMessage2('You like this song!')
        if (message2 === 'You like this song!') {
            setMessage2('')
        }
    }

    const like3 = () => {
        setMessage3('You like this song!')
        if (message3 === 'You like this song!') {
            setMessage3('')
        }
    }

    return (
        <>
            <h1>Top songs</h1>
            <ol>
                <li><h3>How You Like That</h3> <img className='cover' src='./src/assets/song1.png' alt='song 1' /> <br /> {message1} <br /> <button onClick={like1}>Like</button> </li>
                <li><h3>Pink Venom</h3> <img className='cover' src='./src/assets/song2.jpg' alt='song 1' /> <br /> {message2} <br /> <button onClick={like2}>Like</button> </li>
                <li><h3>Shut Down</h3> <img className='cover' src='./src/assets/song3.jpg' alt='song 1' /> <br /> {message3} <br />  <button onClick={like3}>Like</button> </li>
            </ol>
        </>
    )
}

export default TopSongs 