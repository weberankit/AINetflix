import {useSelector} from "react-redux"
import lang from "./languageConstant"
import MoviesCategorys from "./MovieCategory";
import { useGptSearchHandle } from "../hooks/useMovieslist";
import { useState} from "react"
//import OpenAISuggestion from "../utils/openAI";
import OpenAICom from "../utils/openAI";
import MoviesCard from "./MoviesCard";
//import lang from "./languageConstant";
const GptSearchBar=()=>{
//fetching movie category
  useGptSearchHandle()
const langValue=useSelector((store)=>store.config.lang)
const [toggleCategory , setToogleCategory] = useState(false)
const gptMoviesData=useSelector((store)=>store.gpt.gptMovies)
console.log(gptMoviesData,"data")
//OpenAISuggestion("funny movies")
return(
    <>
  <div className=" pt-28 md:pt-[10%] flex justify-center m-auto flex-col ">
  <div className=" text-sm sm:text-base inline text-center  text-white font-semibold mb-1 bg-gradient-to-r from-black">{lang[langValue].info}</div>
    <div className="flex flex-col sm:flex-row justify-center">
 <OpenAICom/>
  
  <div className="ml-2 flex  justify-center ">
  <div className="bg-black  text-white p-1 px-6 pt-6 rounded-lg text-sm ">
  {lang[langValue].gptSearchPlaceholder}
  </div>
 <button onClick={()=>{setToogleCategory(!toggleCategory)}} className="m-2 p-4 rounded-lg bg-red-700 text-white text-sm sm:text-base">{
  toggleCategory?lang[langValue].hide:lang[langValue].search
 }</button>
</div>
</div>

<div className="flex bg-black flex-wrap mt-2">
{toggleCategory&& <MoviesCategorys/>}
</div>
<div className="flex flex-row flex-wrap">
  {gptMoviesData && gptMoviesData.map(gpt=>{
return(
      gpt.map(item=>{
    return(
      <MoviesCard key={item.id} moviedetails={item} posterpath={item.poster_path}/>
    )
  })

)

  })}
</div>
  </div>
    </>
)
}
export default GptSearchBar