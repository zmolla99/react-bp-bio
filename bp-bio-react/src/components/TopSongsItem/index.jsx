const TopSongsItem = ({ song, like }) => {

    return (
        <li>
            {song.name}
            <img src={song.url} alt={song.url} />
            {song.message}
            <button onClick={() => like(song)}>Like</button>
        </li>
    )
}

export default TopSongsItem