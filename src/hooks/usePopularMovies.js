import {addPopularMovies} from "../utils/moviesSlice"
import {useDispatch , useSelector} from "react-redux"
import { useEffect } from "react"
import { Api_options } from "../constant"
import Error from "../component/Error"
const usePopularMovies=()=>{
   const popularMemoiztion=useSelector(store=>store.movies.popular)
        const dispatch=useDispatch()
    
        const getnowMoviesList= async()=>{
         try{
            const data= await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', Api_options)
            const json=await data.json()
           console.log(json,"json")
            dispatch(addPopularMovies(json.results))
            }
            catch(error){
             
               <Error msg={error.message}/>
            }
            }
            
            useEffect(()=>{
               if(!popularMemoiztion)  getnowMoviesList()
         
            },[])
    
    
    
}
export default usePopularMovies