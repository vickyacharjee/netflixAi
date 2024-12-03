import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { Helmet } from 'react-helmet'

const MainContainer = () => {
    const movies=useSelector(store=>store.movies?.addNowPlayingMovies)

    if (!movies) return;
    if (movies.length===0) {
      return(
        <div>
          <h1>Loadnig bro... wait</h1>
        </div>
      )
    }

    const ran=Math.floor(Math.random()*20)
    const mainMovie=movies[ran];
    const {original_title, overview, id}=mainMovie;
    return (
      <div>
        <Helmet>
          <title>
            NetflixAI-Home
          </title>
        </Helmet>
          <VideoTitle title={original_title} overview={overview} />
          <VideoBackground id={id}/>
      </div>
    )
  }

export default MainContainer