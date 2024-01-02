import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { addlist } from "../utils/moviesSlice"
import {Api_options} from "../constant";
const useMovieslist=()=>{
    const dispatch=useDispatch()

    const getnowMoviesList= async()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', Api_options)
        const json=await data.json()
        //console.log(json)
        dispatch(addlist(json.results))
        }
        
        useEffect(()=>{
         getnowMoviesList()
        },[])
}
export default useMovieslist