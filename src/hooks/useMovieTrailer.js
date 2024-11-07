import {apiOption} from "../Utils/constants"
import { useDispatch} from 'react-redux'
import {addTrailerVideo} from "../store/moviesSlice"
import { useEffect } from "react"

const useMovieTrailer=(id)=>{
  const dispatch=useDispatch();
  
  const getMovieVideos=async ()=>{
     const data= await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,apiOption);
     const json=await data.json();

     // filtering the data which has a type = Trailer
     const filterData=json.results.filter((video)=>video.type==="Trailer")
     const trailer=filterData.length ? filterData[0] : json.results[0];
     dispatch(addTrailerVideo(trailer.key))
    }
  useEffect(()=>{
    getMovieVideos();
  },[])
}
export default useMovieTrailer;  