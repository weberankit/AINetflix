import {createSlice} from "@reduxjs/toolkit"
const movies = createSlice({
    name:"movieslist",
    initialState:{
        list:null,
        popular:null,
        topRated:null,
        trailerId:null,

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
        }
    }
})


export const {addlist , addPopularMovies,addTopRatedMovies,addTrailer} = movies.actions

export default movies.reducer