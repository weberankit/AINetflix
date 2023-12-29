import {createSlice} from "@reduxjs/toolkit"

const user=createSlice({
    name:"user",
    initialState:null,
    reducers:{
        addUser:(state,action)=>{
            return action.payload
        },
        removeUser:(state,action)=>{
            return null
        }
    }
})

export default user.reducer
export const {addUser ,removeUser} =user.actions