import React from 'react'
import { useSelector } from 'react-redux'
import lang from "../Utils/languageConstant"

const GptSearchBar = () => {
  const langKey=useSelector((store)=>store.config.lang)
  console.log(lang);
  
  return (
    <div className='pt-[10%] flex justify-center'>
        <form onClick={(e)=>e.preventDefault()} className=' w-1/2  bg-black grid grid-cols-11 rounded-xl' action="">
            <input className='p-4 m-4 col-span-9 rounded-lg' type="text" placeholder={lang[langKey].gptSearchPlaceholder} />
            <button className='col-span-2 m-4 py-2 px-4 bg-red-500 text-white rounded-lg'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar