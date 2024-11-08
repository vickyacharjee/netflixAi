import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from '../store/moviesSlice'
import { apiOption } from '../Utils/constants'
import { useEffect } from "react";



const useNowPlayingMovies=()=> {
 const dispatch=useDispatch();

 
 const getNowPlayingMovies= async ()=>{
     const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',apiOption);
     const json=await data.json();
     dispatch(addNowPlayingMovies(json.results))
    }
    useEffect(()=>{
      getNowPlayingMovies();
    },[])
}

export default useNowPlayingMovies;