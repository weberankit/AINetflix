import { useDispatch , useSelector} from "react-redux"
import { useEffect } from "react"
import { addlist } from "../utils/moviesSlice"
import {Api_options} from "../constant";
import { movieGenres } from "../utils/gptSlice";
//import { movieGenres } from "../utils/gptSlice";
//import { Api_options } from "../constant";
import Error from "../component/Error";
const useMovieslist=()=>{
  const listMeomize=useSelector(store=>store.movies.list)
  console.log(Math.random(),"list is hfhfhlist")
    const dispatch=useDispatch()
       const getnowMoviesList= async()=>{
       try{
        const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', Api_options)
        const json=await data.json()
      //  console.log(json,"json")
        dispatch(addlist(json.results))
       // console.log(Math.random(),"math")
        }
        catch(error){
          
          <Error msg={error.message}/>
        }
      }
        useEffect(()=>{
          //plz note since we are using useMovielist,usepopular,useToprated on parent component which
          //does not unmount so we don't need to memoize the api data as it will calll only once
          //but I have called it as for safety if someone use utils other places then it need to memoize api data 
          //memoziation if list is null then fetch data otherwise no need
          if(!listMeomize) getnowMoviesList()
        // !listMeomize && etnowMovielist()
     //   getnowMoviesList()

        },[])
}

//ftching movie catgory

 export const useGptSearchHandle= ()=>{
  const catgoryMemoization=useSelector(store=>store.gpt.movieGenres)
  console.log(catgoryMemoization,"categotyy")
    const dispatch=useDispatch()
const moviesCategory=async()=>{
    const fetchData= await fetch('https://api.themoviedb.org/3/genre/movie/list?language=hn', Api_options)
    const json= await fetchData.json()
    dispatch(movieGenres(json.genres))
    console.log(json)
    }
   
    useEffect(()=>{
      if(!catgoryMemoization)  moviesCategory()

    },[])
    }




    




export default useMovieslist