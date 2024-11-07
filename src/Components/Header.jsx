import React from 'react'
import { auth } from '../Utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {addUser,removeUser} from "../store/userSlice"
import { onAuthStateChanged } from 'firebase/auth';
import { netflixLogo, userLogo } from '../Utils/constants';

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
  
  
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
      
      <img className='w-44' src={netflixLogo} alt="" />

     {user && <div className=''>
        <img className='w-12' src={userLogo} alt="" />
        <button onClick={handleSignOut} className='text-white font-bold'>Sign-Out</button>
      </div>}
    </div>
  )
}

export default Header

