import TopSongsItem from "../TopSongsItem"

const TopSongsList = ({ songs, setSongs }) => {

    const like = (song) => {
        setSongs(songs.map((item) => {
            if (item === song) {
                if (song.message !== 'Liked!') {
                    return {
                        ...item,
                        message: 'Liked!'
                    }
                } else {
                    return {
                        ...item,
                        message: ''
                    }
                }
            }
            return item
        }))
    }


    return (
        <div className="songs-container">
            <ul className="songs-list">
                {songs.map((song, i) => (<TopSongsItem
                    song={song}
                    like={like}
                    key={i} />))}
            </ul>
        </div>
    )
}

export default TopSongsList