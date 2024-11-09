import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        movieNames:null,
        movieLists:null
    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            state.showGptSearch=!state.showGptSearch;
        },
        addGptMoviesResult:(state,action)=>{
            const {movieNames,movieLists}=action.payload;
            state.movieLists=movieLists
            state.movieNames=movieNames
        }
    }
})

export const {toggleGptSearchView, addGptMoviesResult}= gptSlice.actions;
export default gptSlice.reducer;
