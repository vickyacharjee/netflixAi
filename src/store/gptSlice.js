import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        movieNames:null,
        movieLists:null,
        shimmer:false
    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            state.showGptSearch=!state.showGptSearch;
        },
        addGptMoviesResult:(state,action)=>{
            const {movieNames,movieLists}=action.payload;
            state.movieLists=movieLists
            state.movieNames=movieNames
        },
        shimmer:(state,action)=>{
            state.shimmer=action.payload;
        }
    }
})

export const {toggleGptSearchView, addGptMoviesResult,shimmer}= gptSlice.actions;
export default gptSlice.reducer;
