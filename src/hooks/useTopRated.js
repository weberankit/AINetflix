import {addTopRatedMovies} from "../utils/moviesSlice"
import {useDispatch} from "react-redux"
import { useEffect } from "react"
import { Api_options } from "../constant"
const useTopRated=()=>{
         const dispatch=useDispatch()
         const getnowMoviesList= async()=>{
            const data= await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', Api_options)
            const json= await data.json()
            console.log(json ,"toprated")
            dispatch(addTopRatedMovies(json.results))
            }
            
            useEffect(()=>{
             getnowMoviesList()
            },[])
    
    
    
}
export default useTopRated