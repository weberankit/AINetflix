
import { useSelector} from "react-redux";
import useTrailer from "../hooks/useTrailer"
const VideoBackgrond=({moviesId})=>{
const trailerId=useSelector((store)=>store.movies.trailerId)
//fetching trailer and storing to redux store
useTrailer(moviesId)
return(
    <div className="w-screen">
<iframe 
  className="w-screen aspect-video"
  src={"https://www.youtube.com/embed/"+trailerId+"?&autoplay=1&mute=1"}
  title="YouTube video player" 
  frameBorder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
   allowFullScreen>
</iframe>

    </div>
)

}
export default VideoBackgrond