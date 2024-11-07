import React, { useRef, useState } from 'react'
import Header from './Header'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { checkFormValidate } from '../Utils/formValidation';
import { auth } from '../Utils/firebase';


const Login = () => {
  const [isSignForm,setIsSignForm]=useState(true); 
  const [errorMessage,setErrorMessage]=useState(null);

  const toggleSignInForm=()=>{
    setIsSignForm(!isSignForm)
  }

  const email=useRef(null);
  const password=useRef(null);
  const handleOnclickButton=()=>{
      const message=checkFormValidate(email.current.value,password.current.value);
      setErrorMessage(message)

      if(message) return;

      if (!isSignForm) {
        // user creation
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up success
          const user = userCredential.user;  
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+errorMessage)
        });
      }
      else{
        // existing  user sign-in
        signInWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
           // Signed in success
        const user = userCredential.user;
        console.log("success","-",user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode)
      });
      }
  }
  return (
    <div>
      <Header/>
      
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/aad37504-bbe0-407d-b8a8-fb31b8faf374/web_tall_panel/IN-en-20241028-TRIFECTA-perspective_2f496d82-4466-44ef-b581-9d69138a2914_large.jpg" alt="" />
      </div>

      <form onSubmit={(e)=>e.preventDefault()} className='w-3/12  absolute p-12 bg-black my-36 mx-auto left-0 right-10 text-white bg-opacity-80 rounded-xl' action="">
       <h1 className='font-bold text-3xl py-3'>{isSignForm ? "Sign-In" : "Sign-Up"}</h1>
        { !isSignForm && <input type="text" placeholder='Enter ur Name' className='bg-gray-700 p-4 my-4 w-full rounded-lg' />}
        <input ref={email} type="text" placeholder='Email-address' className='bg-gray-700 p-4 my-4 w-full rounded-lg' />
        <input ref={password} type="text" placeholder='paswosrd' className='bg-gray-700 p-4 my-4 w-full rounded-lg' />
        <p className='text-red-700 font-bold py-2 text-xl '> {errorMessage}</p>
        <button className='p-2  bg-red-700 w-full rounded-lg' onClick={handleOnclickButton}>{isSignForm ? "Sign-In" : "Sign-Up"}</button>
        <p onClick={toggleSignInForm} className='p-4 cursor-pointer hover:text-blue-300 '>{isSignForm ? "new to Netflix?  Signup here" : "already a user"}</p>
      </form>

    </div>
  )
}
export default Login