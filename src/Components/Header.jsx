import React from 'react'
import { auth } from '../Utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from "../store/userSlice";
import { onAuthStateChanged } from 'firebase/auth';
import { netflixLogo, SUPPORTED_LANG, userLogo } from '../Utils/constants';
import { toggleGptSearchView } from '../store/gptSlice';
import { changeLanguage } from "../store/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
      // Handle error
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleOnChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const isGptSearchActive = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div className='absolute px-4 sm:px-8 bg-gradient-to-b from-black z-10 w-screen flex justify-between items-center'>
      <img className='w-32 sm:w-44' src={netflixLogo} alt="Netflix Logo" />

      {user && (
        <div className='flex items-center'>
          {isGptSearchActive && (
            <select 
              onChange={handleOnChange}
              className='h-8 bg-gray-200 rounded-md md:block mx-2 h-10 my-auto'
            >
              {SUPPORTED_LANG.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={handleGptSearch}
            className='bg-red-700 h-8 sm:h-10 px-2 sm:px-4 my-auto text-white font-bold rounded-md'
          >
            {isGptSearchActive ? "Home" : "Gpt-Search"}
          </button>

          <img className='h-10 sm:h-16 p-2' src={userLogo} alt="User Logo" />

          <button
            onClick={handleSignOut}
            className='text-xs sm:text-base p-2 text-white font-bold'
          >
            Sign-Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
