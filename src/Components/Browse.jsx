import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import usePopular from '../hooks/usePopular'
import useTopRated from '../hooks/useTopRated'
import useUpcoming from '../hooks/useUpcoming'
import GptSearch from './GptMainPage'
import { useSelector } from 'react-redux'
const Browse = () => {

  const showGptSearch=useSelector(store=>store.gpt.showGptSearch)
  
  
  
  useNowPlayingMovies()
  usePopular()
  useTopRated()
  useUpcoming()



  return (
    <div>
      <Header/>
      {
        showGptSearch===false ? 
        (
          <>
          <MainContainer/>
          <SecondaryContainer />
          </>
        ):(

          <GptSearch/>
        )
      }
    </div>
  )
}

export default Browse