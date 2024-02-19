import './styles.css';
import React, { useState } from 'react';

const Comments = () => {

    const [comment, setComment] = useState('')
    const [text, setText] = useState('')

    const handleInput = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setComment(text)
        setText('')
        e.target.reset()
    }

    return (
        <>
            <h2>Top Comment: {comment}</h2>
            <form className="form" onSubmit={handleSubmit}>
                <input onChange={handleInput} type="text" name='commentInput' />
                <button type="submit">Post</button>
            </form>
        </>
    )
}

export default Comments