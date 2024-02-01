import {createSlice} from "@reduxjs/toolkit"

const configSlice = createSlice({
    name:"config",
    initialState:{
        lang:"en",
        prevLangs:[],
        value:false
    },
    reducers:{
        changeLang:(state,action)=>{
         state.lang = action.payload
        },
        addPrevLang:(state,action)=>{
            state.prevLangs.push(action.payload)
        }   ,
          loginSkip:(state,action)=>{
            state.value=action.payload
        }
    }
})


export default configSlice.reducer
export const {changeLang,addPrevLang,loginSkip} = configSlice.actions