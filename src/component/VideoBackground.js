
import { useSelector} from "react-redux";
import useTrailer from "../hooks/useTrailer"
import { defaultVideo } from "../constant";
const VideoBackgrond=({moviesId})=>{
const trailerId=useSelector((store)=>store.movies.trailerId)




const bgMaintrailerId=trailerId[defaultVideo]



useTrailer(moviesId)

return(
    <div className="w-screen">
          
<iframe 
  className="  w-screen aspect-video "
 
  src={"https://www.youtube.com/embed/"+bgMaintrailerId+"?&autoplay=1&mute=1&loop=1&playlist="+bgMaintrailerId}
  title="YouTube video player" 
  frameBorder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
   allowFullScreen>
</iframe>

    </div>
)

}
export default VideoBackgrond