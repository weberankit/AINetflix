import useTranslate from "../hooks/useTranslate"
import { useSelector } from "react-redux"
import { useState } from "react"
import lang from "./languageConstant"
const VideoTitle=({title,overview})=>{

    const langValue=useSelector((store)=>store.config.lang)
    const prevLang=useSelector((store)=>store.config.prevLangs)
     console.log(langValue,"this is 1st",prevLang)

const [transValue , setTransValue] = useState({title,overview})
   console.log(transValue,"transValue")
     //const [overView , setOverView] =useState(overview)
   //const [titles , setTitle] = useState(title)
 // useTranslate(langValue , title , overview,setOverView ,setTitle)
 
useTranslate(langValue,transValue.title,transValue.overview,setTransValue)


   //error hanndling
 /*if((transValue.overview === undefined)||(transValue.overview === null) ){
    setTransValue({overview:overview})
    console.log("333this is teaching")
   }
   if((transValue.title === undefined)||(transValue.title === null) ){
      setTransValue({title:title})
    console.log("333this is seco teaching")
   }
 */ 




return(
<div className="w-screen aspect-video pt-36 px-12 absolute text-white bg-gradient-to-r from-black">
<div className="text-sm sm:text-6xl font-bold">{transValue.title}</div>
<div className="py-6 hidden sm:block  md:w-2/3 lg:w-1/2  text-xs  sm:text-lg xl:w-1/4">{transValue.overview}</div>
<div className="pt-4">
    <button className="bg-white text-black p-2 px-2 text-xs sm:p-4 sm:px-12 sm:text-xl  rounded-lg hover:bg-opacity-80">{lang[langValue].play}</button>
    <button className="bg-gray-500 text-white p-2 px-2 sm:p-4 sm:px-12 text-xl bg-opacity-50  rounded-lg mx-2">{lang[langValue].more_info}</button>

</div>



</div>



)


}
export default VideoTitle