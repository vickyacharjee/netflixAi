import React, { useEffect } from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer'
import { useSelector } from 'react-redux'

  const VideoBackground = ({id}) => {
  const trailerVideo=useSelector(store=>store?.movies?.addTrailerVideo)
  useMovieTrailer(id)

  return (
    <div className='w-screen'>
      <iframe className='w-screen aspect-video bg-gradient-to-r from bg-black-100'
        src={"https://www.youtube.com/embed/"+trailerVideo+"?&autoplay=1&mute=1"}
        
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
      </iframe>
    </div>
  )
}

export default VideoBackground