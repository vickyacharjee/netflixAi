import React from 'react'
import { CARD_CDN_URL } from '../Utils/constants'

const MovieCards = ({posterPath}) => {
  if (!posterPath) return;
  return (
    <div className='w-48 p-3 shadow-xl' >
      <img src={CARD_CDN_URL+posterPath} alt="cards-img" />
    </div>
  )
}

export default MovieCards