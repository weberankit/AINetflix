import {addTopRatedMovies} from "../utils/moviesSlice"
import {useDispatch,useSelector} from "react-redux"
import { useEffect } from "react"
import { Api_options } from "../constant"
//import {Error} from "..component/Er"
import Error from "../component/Error"
const useTopRated=()=>{
   const topRatedMemoiztion=useSelector(store=>store.movies.topRated)
         const dispatch=useDispatch()
         const getnowMoviesList= async()=>{
            try{
            const data= await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', Api_options)
            const json= await data.json()
            //console.log(json ,"toprated")
            dispatch(addTopRatedMovies(json.results))
            }catch(error){
       <Error msg={error.message}/>
            
            }
            }
            
            useEffect(()=>{
               if(!topRatedMemoiztion) getnowMoviesList()
             //  getnowMoviesList()
            },[])
    
    
    
}
export default useTopRated