const CommentsForm = ({ text, setText, comments, setComments }) => {

    const handleInput = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setComments([...comments, { text: text }])
        setText('')
    }

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <input className='text-box' value={text} onChange={handleInput} type="text" name='commentInput' />
                <button type="submit">Post</button>
            </form>
        </>
    )
}

export default CommentsForm