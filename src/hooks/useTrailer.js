import { Api_options } from "../constant"
import { useEffect } from "react";
import { addTrailer } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useTrailer=(moviesId)=>{
    const dispatch=useDispatch()
    const getMoviesVideo=async()=>{
        const data= await fetch(`https://api.themoviedb.org/3/movie/${moviesId}/videos?language=en-US`, Api_options)
        const json =  await data.json()
        //console.log(json)
        
        const filterVideo=json?.results.filter(video=>video.type ===  "Trailer")
        //console.log(filterVideo)
        //if video type trailer is not avail then select any video from list of videos
        const trailerVideo=filterVideo.length?filterVideo[0]:json.results[0]
        dispatch(addTrailer(trailerVideo.key))
        
        }
        
        useEffect(()=>{
           getMoviesVideo()
        } , [] )
    }

export default useTrailer;