import React from 'react'
import { auth } from '../Utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {addUser,removeUser} from "../store/userSlice"
import { onAuthStateChanged } from 'firebase/auth';
import { netflixLogo, SUPPORTED_LANG, userLogo } from '../Utils/constants';
import { toggleGptSearchView } from '../store/gptSlice';
import {changeLanguage} from "../store/configSlice"

const Header = () => {
  const dispatch=useDispatch();
  const user=useSelector((stroe)=>stroe.user)
  const navigate=useNavigate();

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      // An error happened.
    });
   }

  useEffect(()=>{
    const usubscribe=onAuthStateChanged(auth,(user)=>{
      if (user) {
        const {uid,email,displayName}=user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}))
        navigate('/browse')
      }else{
        dispatch(removeUser())
        navigate('/')
       }
     })
     return ()=>usubscribe();
   },[])

    const handleGptSearch=()=>{
      dispatch(toggleGptSearchView())

    }

    const handleOnChange=(e)=>{
      //  console.log("lang",e.target.value);
       dispatch(changeLanguage(e.target.value))
    }

    const isGptSearchActice=useSelector((store)=>store.gpt.showGptSearch);
    console.log("gpt-search",isGptSearchActice);
    
  
  
  return (
    <div className='absolute px-8  bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
      
      <img className='w-44' src={netflixLogo} alt="" />

      {user && <div className='flex'>
      
        {isGptSearchActice && 
          <select onChange={handleOnChange} className='mx-2 h-10 my-auto'>
          {
            SUPPORTED_LANG.map((lang)=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
          }
        </select>}

        <button onClick={handleGptSearch} className='bg-red-700 h-10 px-2 my-auto text-white font-bold rounded-md'>{isGptSearchActice ? "Home" : "Gpt-Search"}</button>
        <img className=' h-16 p-2' src={userLogo} alt="" />
        <button onClick={handleSignOut} className=' p-2 text-white font-bold'>Sign-Out</button>
      </div>}
    </div>
  )
}

export default Header

