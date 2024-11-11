import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react'
import lang from "../Utils/languageConstant"
import openai from "../Utils/openAi"
import { apiOption } from '../Utils/constants'
import { addGptMoviesResult } from '../store/gptSlice'


const GptSearchBar = () => {
    const langKey=useSelector((store)=>store.config.lang)
    const isPageActive=useSelector(store=>store.gpt.movieNames)
    const searchText=useRef(null);
    const dispatch=useDispatch()

    const TmdbMovie = async (movie) => {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, 
        apiOption
      );
      const json = await data.json();
      return json.results; // Return the movie results
    };
    
    const handleSearch = async () => {
      try {
        const userInput = searchText.current.value;
        const gptQuery = 'Act as Movie Recommendation system and suggest some movies for the query ' + 
          userInput + ". Only give me names of 5 movies, comma-separated like the example. Example Result: gaddar, sholay, aparichit, dhol, dhammal";
          
        const getResults = await openai.chat.completions.create({
          messages: [{ role: 'user', content: gptQuery }],
          model: 'gpt-3.5-turbo',
        });
    
        const gptMovie = getResults?.choices[0]?.message?.content.split(',').map(movie => movie.trim()); // Split and trim each movie name
    
        // Map movie names to TmdbMovie promises
        const ArrayData = gptMovie.map(movie => TmdbMovie(movie));
    
        // Resolve all promises with Promise.all
        const movieResults = await Promise.all(ArrayData);
        dispatch(addGptMoviesResult({movieNames:gptMovie,movieLists:movieResults}))
    
        console.log(movieResults); // This should now contain an array of movie results from TMDB
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    const handleClearCards=()=>{
      dispatch(addGptMoviesResult({movieNames:null,movieLists:null}))
    }

  

  return (
    <div className='pt-[10%] flex justify-center'>
        <form onClick={(e)=>e.preventDefault()} className=' w-full mt-20 md:w-1/2  bg-black grid grid-cols-11 rounded-xl' action="">
            <input ref={searchText} className='p-4 m-4 col-span-9 rounded-lg' type="text" placeholder={lang[langKey].gptSearchPlaceholder} />
            <button className='mx-auto  md: col-span-2 m-4 py-2 px-4 bg-red-500 text-white rounded-lg' onClick={handleSearch}>{lang[langKey].search}</button>
            {
                  isPageActive && <button onClick={handleClearCards} className='col-span-4 m-4 w-auto py-2 px-4 bg-white text-black rounded-lg font-bold'> Clear All </button>
            }
        </form>
    </div>
  )
}

export default GptSearchBar