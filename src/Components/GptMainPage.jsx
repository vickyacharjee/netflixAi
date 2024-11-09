import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_Cover } from '../Utils/constants'

const GptMainPage = () => {
  return (
    <div>
      <div className='fixed -z-10'>
        <img src={BG_Cover} alt="" />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptMainPage