import {createSlice} from "@reduxjs/toolkit"
const movies = createSlice({
    name:"movieslist",
    initialState:{
        list:null,
        popular:null,
        topRated:null,
        trailerId:null,
        movie:null

    },
    reducers:{
        addlist:(state,action)=>{
            state.list=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popular=action.payload
        },
        addTopRatedMovies:(state,action)=>{
           state.topRated=action.payload
        },
        addTrailer:(state,action)=>{
             state.trailerId=action.payload
        },
        showMovie:(state,action)=>{
            state.movie=action.payload
        }
    }
})


export const {addlist , addPopularMovies,addTopRatedMovies,addTrailer , showMovie} = movies.actions

export default movies.reducer