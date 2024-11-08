import { useDispatch } from "react-redux";
import { addPopular } from '../store/moviesSlice'
import { apiOption } from '../Utils/constants'
import { useEffect } from "react";



const usePopular=()=> {
 const dispatch=useDispatch();

 
 const getPopular= async ()=>{
     const data= await fetch('https://api.themoviedb.org/3/movie/popular',apiOption);
     const json=await data.json();
     
     
     dispatch(addPopular(json.results))
    }
    useEffect(()=>{
      getPopular();
    },[])
}

export default usePopular;