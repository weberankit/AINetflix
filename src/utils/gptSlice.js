import {createSlice} from "@reduxjs/toolkit"


const gptSlice=createSlice({
name:"Gptslice",
initialState:{
    value:false
},
reducers:{
    toggle:(state)=>{
     state.value = !state.value
    }
}
})


export default gptSlice.reducer
export const {toggle} =  gptSlice.actions