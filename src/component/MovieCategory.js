import {useDispatch, useSelector} from "react-redux"
import GptMovieSuggestion from "./GptMovieSuggestion"
import { showMovie } from "../utils/moviesSlice"
import ShimmerEffect from "./ShimmerEffect"
const MoviesCategorys=()=>{
  const dispatch= useDispatch()
const moviesCategory=useSelector((store)=>store.gpt.movieGenres)

    //onclick of show btn movie category fetchec and then on click of category btn movie detail fetch
    //fetch movi details
const handleMovielist=(id)=>{
const movieList=async()=>{
const fetchMovieDetail = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=f6288527fddde33383bd7652871ded21&with_genres=${id}`)
const data= await fetchMovieDetail.json()

dispatch(showMovie(data.results))

}
movieList()
}
  if((moviesCategory===null) || (!moviesCategory))return <ShimmerEffect/>

return(
<>
<div className="flex flex-col">
  <div className="flex flex-wrap">
    
{
  moviesCategory && moviesCategory.map(item=>{
          return (<>
          <div >
          <button onClick={()=>handleMovielist(item.id)} className="text-white text-sm sm:text-base p-2 flex-wrap border border-s-violet-100 m-2 hover:bg-white hover:text-black">{item.name}</button>
           </div>
           
           </>)
        })       
  }
  </div>
  <div  className="flex flex-wrap pt-3">
  <GptMovieSuggestion/>
</div>
</div>
  </>
)
}
export default MoviesCategorys