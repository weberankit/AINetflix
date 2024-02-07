import useTranslate from "../hooks/useTranslate"
import { useSelector } from "react-redux"
import { useState } from "react"
import lang from "./languageConstant"
import { useDispatch } from "react-redux"
import { langvideoTitle } from "../utils/configSlice"
import { defaultVideo } from "../constant"
const VideoTitle=({title,overview})=>{
    const dispatch=useDispatch()
    const langValue=useSelector((store)=>store.config.lang)
    const apiCallingflag=useSelector(store=>store.config.callingApi)
    const movieslist=useSelector((store)=>store.movies?.list)
const [transValue , setTransValue] = useState({title,overview})
 
  useTranslate(langValue,transValue.title,transValue.overview,setTransValue,apiCallingflag)
  //console.log(transValue,"yy")
 const langVideo=useSelector(store=>store.config.videoTitlebg)
//dispatch data so tht once translted data can be reused when component unmount
if(apiCallingflag){
  dispatch(langvideoTitle(transValue))
}
if(!movieslist) return
//using the movieslist  using this  when langVideo is null
const mainMovies=movieslist[defaultVideo] // [0] index as its hardcode same in video title



return(
<div className="w-screen aspect-video pt-36 px-12 absolute text-white bg-gradient-to-r from-black">
<div className="text-sm sm:text-6xl font-bold">{ langVideo === null? mainMovies?.original_title :  langVideo?.title}</div>
<div className="py-6 hidden sm:block  md:w-2/3 lg:w-1/2  text-xs  sm:text-lg xl:w-1/4">{ langVideo === null? mainMovies?.overview :  langVideo?.overview}</div>
<div className="pt-4">
    <button className="bg-white text-black p-2 px-2 text-xs sm:p-4 sm:px-12 sm:text-xl  rounded-lg hover:bg-opacity-80">{lang[langValue].play}</button>
    <button className="bg-gray-500 text-white p-2 px-2 sm:p-4 sm:px-12 text-xl bg-opacity-50  rounded-lg mx-2">{lang[langValue].more_info}</button>

</div>



</div>



)


}
export default VideoTitle