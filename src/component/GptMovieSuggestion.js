import { useSelector } from "react-redux"
import MoviesCard from "./MoviesCard"


const GptMovieSuggestion=()=>{
const selector=useSelector(store=>store.movies.movie)
//console.log(selector)
if(!selector) return 

return(
    <>
{selector.map(item=>{
   
    return(
      <MoviesCard key={item.id} moviedetails={item} posterpath={item.poster_path}/>
    )
    })}

  
    </>
)
    
}
export default GptMovieSuggestion