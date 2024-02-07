import {createSlice} from "@reduxjs/toolkit"

const configSlice = createSlice({
   
    name:"config",
    initialState:{

        lang:"en",
        prevLangs:[],
        value:false,
        add:null,
       callingApi:false,
       hideLang:false,
       videoTitlebg:null
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
        },
        showHome:(state,action)=>{
             state.add=action.payload
        },
        apiCalling:(state,action)=>{
            state.callingApi=action.payload
        },
        hideLangBox:(state)=>{
           state.hideLang="hidden"
        },
        langvideoTitle:(state,action)=>{
            state.videoTitlebg=action.payload
        }

    }
})


export default configSlice.reducer
export const {changeLang,addPrevLang,loginSkip ,showHome ,apiCalling ,hideLangBox,langvideoTitle} = configSlice.actions