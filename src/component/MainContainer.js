import {useSelector } from "react-redux"
import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"

const MainContainer=()=>{
const movieslist=useSelector((store)=>store.movies?.list)
//console.log(movieslist)
if(!movieslist)return 
//hardcode value here we have used , we can use random function to select instead of hard coded
const mainMovies=movieslist[0]
//console.log(mainMovies)

return(
 <>
    <VideoTitle title={mainMovies.original_title} overview={mainMovies.overview}/>
    <VideoBackground moviesId={mainMovies?.id}/>
</>

)
}
export default MainContainer