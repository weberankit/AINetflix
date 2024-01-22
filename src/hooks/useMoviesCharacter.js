import { useEffect } from "react"
import { Api_options } from "../constant"
import { useDispatch } from "react-redux"
import { moviesDetailCharcter } from "../utils/moviesSlice"
import Error from "../component/Error"
const useMoviesCharacter=(id)=>{
    const dispatch=useDispatch()
    

   const getCharacter= async()=>{
  try{
    const fetching= await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, Api_options)
    const data=await fetching.json()
   // console.log(data,"data")
    dispatch(moviesDetailCharcter(data))
  }catch(error){
    <Error msg={error.message}/>
  }



   }
   useEffect(()=>{
    getCharacter()
   },[])

}
export default useMoviesCharacter