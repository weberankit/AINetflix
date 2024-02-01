import {createSlice} from "@reduxjs/toolkit"


const gptSlice=createSlice({
name:"Gptslice",
initialState:{
    value:false,
    movieGenres:null,
    gptMovies:null
},
reducers:{
    toggle:(state)=>{
    state.value = !state.value
 //state.value=action.payload
    },
    movieGenres:(state,action)=>{
     state.movieGenres=action.payload
    },
    gptMovies:(state,action)=>{
        state.gptMovies=action.payload
    }
}
})


export default gptSlice.reducer
export const {toggle ,movieGenres , gptMovies} =  gptSlice.actions