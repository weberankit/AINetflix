import { Api_options } from "../constant"
import { useEffect } from "react";
import { addTrailer } from "../utils/moviesSlice";
import { useDispatch ,useSelector} from "react-redux";

const useTrailer=(moviesId,show)=>{
    const trailerMemoiztion=useSelector(store=>store.movies.trailerId)
const dispatch=useDispatch()
    const getMoviesVideo=async()=>{
        const data= await fetch(`https://api.themoviedb.org/3/movie/${moviesId}/videos?language=en-US`, Api_options)
        const json =  await data.json()
        const filterVideo=json?.results.filter(video=>video.type ===  "Trailer")
      //if video type trailer is not avail then select any video from list of videos
        const trailerVideo=filterVideo.length?filterVideo[0]:json.results[0]
        dispatch(addTrailer(trailerVideo.key))
        
        }
      ///used two useeffect --for cache video trailer so each time main video backround will not fetched
      //why 2 useeffect because 1st useefect fetching data and pushd to array to redux that we are alwyas going to use for video backround
      // now in second useefect if user click play btn then
      //then its pushed to array and we going to use it for playing trailer. 
      //1st useefect is for calling one timme  for backgrond video trailer
        useEffect(()=>{
            //memoiziation if(!trailerMemoiztion){ }  ||(trailerMemoiztion.length>=1))
  if(trailerMemoiztion.length===0){
            getMoviesVideo()
            }
         } , [] )
///calling getmovies when user click play button 
useEffect(()=>{
    if(show){
        getMoviesVideo()
        }
     
},[show])


    }

export default useTrailer;