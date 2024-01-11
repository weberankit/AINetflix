import {createSlice} from "@reduxjs/toolkit"


const gptSlice=createSlice({
name:"Gptslice",
initialState:{
    value:false,
    movieGenres:null
},
reducers:{
    toggle:(state)=>{
     state.value = !state.value
    },
    movieGenres:(state,action)=>{
     state.movieGenres=action.payload
    }
}
})


export default gptSlice.reducer
export const {toggle ,movieGenres} =  gptSlice.actions