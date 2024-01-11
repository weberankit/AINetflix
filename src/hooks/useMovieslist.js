import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { addlist } from "../utils/moviesSlice"
import {Api_options} from "../constant";
import { movieGenres } from "../utils/gptSlice";
//import { movieGenres } from "../utils/gptSlice";
//import { Api_options } from "../constant";
const useMovieslist=()=>{
    const dispatch=useDispatch()
       const getnowMoviesList= async()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', Api_options)
        const json=await data.json()
      //  console.log(json,"json")
        dispatch(addlist(json.results))
        }
        
        useEffect(()=>{
         getnowMoviesList()
        },[])
}

//ftching movie catgory

 export const useGptSearchHandle= ()=>{
    const dispatch=useDispatch()
const moviesCategory=async()=>{
    const fetchData= await fetch('https://api.themoviedb.org/3/genre/movie/list?language=hn', Api_options)
    const json= await fetchData.json()
    dispatch(movieGenres(json.genres))
    console.log(json)
    }
   
    useEffect(()=>{
   moviesCategory()
    },[])
    }




    




export default useMovieslist