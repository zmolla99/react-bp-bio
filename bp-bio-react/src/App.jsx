import React, { useState } from 'react';
import { Bio, TopSongsList, CommentsList, CommentsForm } from './components';

function App() {
  const [songs, setSongs] = useState([
    { name: 'How you like that', url: './src/public/song1.png', message: '' },
    { name: 'Pink venom', url: './src/public/song2.jpg', message: '' },
    { name: 'Shut down', url: './src/public/song3.jpg', message: '' }])

  const [comments, setComments] = useState([])
  const [text, setText] = useState('')

  return (
    <>
      <Bio />
      <TopSongsList songs={songs} setSongs={setSongs} />
      <CommentsForm text={text} setText={setText} comments={comments} setComments={setComments} />
      <CommentsList comments={comments} setComments={setComments} />
    </>
  )
}

export default App
