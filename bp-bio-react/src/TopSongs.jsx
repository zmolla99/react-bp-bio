import './styles.css'

const TopSongs = () => {

    return (
        <>
            <h1>Top songs:</h1>
            <ol>
                <li><h3>How You Like That</h3> <img className='cover' src='./src/assets/song1.png' alt='song 1' /> <button>Like</button> </li>
                <li><h3>Pink Venom</h3> <img className='cover' src='./src/assets/song2.jpg' alt='song 1' /> <button>Like</button> </li>
                <li><h3>Shut Down</h3> <img className='cover' src='./src/assets/song3.jpg' alt='song 1' /> <button>Like</button> </li>
            </ol>
        </>
    )
}

export default TopSongs 