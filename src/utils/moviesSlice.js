import {createSlice} from "@reduxjs/toolkit"
const movies = createSlice({
    name:"movieslist",
    initialState:{
        list:null,
        popular:null,
        topRated:null,
        trailerId:[],
        movie:null,
        moviesDetail:null,
        moviesDetailCharcter:null,
      
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
            
            // state.trailerId=action.payload
            state.trailerId.push(action.payload)
        },
        showMovie:(state,action)=>{
            state.movie=action.payload
        },
        moviesDetail:(state , action)=>{
           state.moviesDetail=action.payload
        }  ,
        moviesDetailCharcter:(state,action)=>{
            state.moviesDetailCharcter=action.payload
        }
        
    }
})


export const {addlist , addPopularMovies,addTopRatedMovies,addTrailer , showMovie ,moviesDetail ,moviesDetailCharcter} = movies.actions

export default movies.reducer