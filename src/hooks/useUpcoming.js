import { useDispatch, useSelector } from "react-redux";
import { addUpcoming } from '../store/moviesSlice'
import { apiOption } from '../Utils/constants'
import { useEffect } from "react";



const useUpcoming=()=> {
 const dispatch=useDispatch();
 const upComingVideo=useSelector(store=>store.movies.addUpcoming)

 
 const getUpcoming= async ()=>{
     const data= await fetch('https://api.themoviedb.org/3/movie/upcoming',apiOption);
     const json=await data.json();
     
     
     dispatch(addUpcoming(json.results))
    }
    useEffect(()=>{
    !upComingVideo && getUpcoming();
    },[])
}

export default useUpcoming;