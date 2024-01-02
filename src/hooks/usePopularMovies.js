import {addPopularMovies} from "../utils/moviesSlice"
import {useDispatch} from "react-redux"
import { useEffect } from "react"
import { Api_options } from "../constant"
const usePopularMovies=()=>{
    
        const dispatch=useDispatch()
    
        const getnowMoviesList= async()=>{
            const data= await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', Api_options)
            const json=await data.json()
         //   console.log(json)
            dispatch(addPopularMovies(json.results))
            }
            
            useEffect(()=>{
             getnowMoviesList()
            },[])
    
    
    
}
export default usePopularMovies