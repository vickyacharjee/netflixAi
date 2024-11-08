import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video absolute pt-[20%] px-24 bg-gradient-to-r from-black'>
        <h1 className='text-6xl text-white font-bold '>{title}</h1>
        <p className='py-4 text-lg w-1/3 text-white'>{overview}</p>

        <div className=''>
            <button className='mx-3 bg-white text-black px-6 py-3 text-bold text-3xl  rounded-md hover:bg-opacity-75 '>▶️Play</button>
            <button className='bg-gray-400 text-black px-6 py-3 text-bold text-3xl  rounded-md hover:bg-white'>More</button>
            
        </div>

    </div>
  )
}

export default VideoTitle