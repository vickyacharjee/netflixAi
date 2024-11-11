import { useDispatch, useSelector } from "react-redux";
import { addTopRated } from '../store/moviesSlice'
import { apiOption } from '../Utils/constants'
import { useEffect } from "react";



const useTopRated=()=> {
 const dispatch=useDispatch();
 const topRatedVideo=useSelector(store=>store.movies.addTopRated)

 
 const getTopRated= async ()=>{
     const data= await fetch('https://api.themoviedb.org/3/movie/top_rated',apiOption);
     const json=await data.json();
     
     
     dispatch(addTopRated(json.results))
    }
    useEffect(()=>{
     !topRatedVideo && getTopRated();
    },[])
}

export default useTopRated;