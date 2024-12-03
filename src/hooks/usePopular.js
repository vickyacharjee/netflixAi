import { useDispatch, useSelector } from "react-redux";
import { addPopular } from '../store/moviesSlice'
import { apiOption } from '../Utils/constants'
import { useEffect } from "react";



const usePopular=()=> {
 const dispatch=useDispatch();
 const addPopularVideo=useSelector(store=>store.movies.addPopular)

 
 const getPopular= async ()=>{
     const data= await fetch('https://api.themoviedb.org/3/movie/popular',apiOption);
     const json=await data.json();
    
     
     dispatch(addPopular(json.results))
    }
    useEffect(()=>{
      !addPopularVideo && getPopular();
    },[])
}

export default usePopular;