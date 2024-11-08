import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        addNowPlayingMovies:null,
        addTrailerVideo:null,
        addPopular:null,
        addTopRated:null,
        addUpcoming:null
    },
    reducers:{
       addNowPlayingMovies:(state,action)=>{
        state.addNowPlayingMovies=action.payload;
       }, 
       addTrailerVideo:(state,action)=>{
        state.addTrailerVideo=action.payload;
       },
        addPopular:(state,action)=>{
        state.addPopular=action.payload;
       }, 
        addTopRated:(state,action)=>{
        state.addTopRated=action.payload;
       }, 
        addUpcoming:(state,action)=>{
        state.addUpcoming=action.payload;
       } 
    }
})

export default moviesSlice.reducer;
export const {addNowPlayingMovies,addTrailerVideo,addPopular,addTopRated,addUpcoming}=moviesSlice.actions;  //exporting the action creator