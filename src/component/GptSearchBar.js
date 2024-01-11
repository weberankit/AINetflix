import {useSelector} from "react-redux"
import lang from "./languageConstant"
import MoviesCategorys from "./MovieCategory";
import { useGptSearchHandle } from "../hooks/useMovieslist";
import { useState} from "react"

const GptSearchBar=()=>{
//fetching movie category
  useGptSearchHandle()
const langValue=useSelector((store)=>store.config.lang)
const [toggleCategory , setToogleCategory] = useState(false)
return(
    <>
  <div className=" pt-[10%] flex justify-center m-auto flex-col ">
  <div className="flex  justify-center ">
  <div className="bg-black  text-white p-4 px-6 pt-6 rounded-lg">
  {lang[langValue].gptSearchPlaceholder}
  </div>
 <button onClick={()=>{setToogleCategory(!toggleCategory)}} className="m-2 p-4 rounded-lg bg-red-700 text-white">{
  toggleCategory?"Hide":lang[langValue].search
 }</button>
</div>
<div className="flex bg-black flex-wrap mt-2">
{toggleCategory&& <MoviesCategorys/>}
</div>
  </div>
    </>
)
}
export default GptSearchBar