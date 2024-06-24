import {useSelector } from "react-redux"
import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"
import ShimmerEffect from "./ShimmerEffect"
import ShowMsg from "./ShowMsg"

const MainContainer=()=>{
const movieslist=useSelector((store)=>store.movies?.list)

if(!movieslist){
 return (
 <>
 <ShimmerEffect/>
 <ShowMsg/>
 </>)

} 
//hardcode value here we have used , we can use random function to select instead of hard coded
//but not recommended becuse everytime new vlue call translate api to change background title video
const mainMovies=movieslist[0]


return(
 <>
    <VideoTitle title={mainMovies.original_title} overview={mainMovies.overview}/>
    <VideoBackground moviesId={mainMovies?.id}/>
  

</>

)
}
export default MainContainer