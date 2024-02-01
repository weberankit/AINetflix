//import { useNavigate } from "react-router-dom"
import { img_url } from "../constant"
import {  useSelector } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPauseCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
//import VideoBackgrond from "./VideoBackground"
import {  useState } from "react"
import useTrailer from "../hooks/useTrailer"
import Header from "./Header"
//import {useEffect} from "react"
import MoviesCharacter from "./MoviesCharacter"
import ShimmerEffect from "./ShimmerEffect"
import useTranslate from "../hooks/useTranslate"
import lang from "./languageConstant"
import  { useRef } from 'react';
const MoviesDetail=()=>{
const[show,setshow]=useState(false)
     //clicked movies id getting from redux 
    const detailsMovie=useSelector(store=>store.movies?.moviesDetail)
    //fetching trailer and storing to redux store
//passing showhere so that we can use it for fetching video data on basis of it when user click play btn 
 useTrailer(detailsMovie?.id ,show)  
    //getting video id 
const trailerId=useSelector((store)=>store.movies?.trailerId) 
const langValue=useSelector((store)=>store.config.lang)
//useTranslate(langValue)
const [transValue , setTransValue] = useState({title:detailsMovie?.title,overview:detailsMovie?.overview})
const moviesCategory=useSelector((store)=>store.gpt.movieGenres)
console.log(moviesCategory)
useTranslate(langValue,transValue.title,transValue.overview,setTransValue , detailsMovie.vote_average)
console.log(langValue,"lan-movieswala")
const scrollContainerRef = useRef(null);
// Function to handle scrolling when dragging
const handleDragScroll = (e) => {
    /*This line increments the scrollLeft property of the container by the horizontal movement
     of the mouse (e.movementX). e.movementX
     represents the distance the mouse has moved horizontally since the last mousemove event. */
    
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        container.scrollLeft += e.movementX;
        //for vertical
      //  container.scrollTop += e.movementY;
      }
    };

 if(detailsMovie===null) return  <ShimmerEffect/>
if (!trailerId) return 
 return(<>
    <Header displayHide={"hidden"} />
        <div className=" bg-black" >
        <div>
            <div className=" flex  flex-row">
        <div className="pt-24 sm:pt-0" >  <img className="w-20 sm:w-full rounded-lg" src={img_url+detailsMovie.poster_path}></img>
    <div  onClick={()=>setshow(!show)} className="absolute top-1/2 "><FontAwesomeIcon className="text-4xl md:text-8xl  text-red-700 cursor-pointer " icon={show===false? faPlayCircle : faPauseCircle}/></div>
        </div> 
     {show===false?
     <>
        <div className="bg-black block text-white w-4/6 mt-32"  >
           <h1 className="text-yellow-500 text-center text-3xl sm:text-7xl">{transValue.title}</h1>
            <div className="text-white text-center flex flex-row justify-around pt-7 mt-4">
        <h2>{lang[langValue].rating} : {detailsMovie?.vote_average}</h2>
            <h2>{lang[langValue].release} : {detailsMovie?.release_date}</h2>
        </div>
            <h1 className="text-xs sm:text-lg pt-16 text-yellow-600">{transValue?.overview}</h1>
            <div  ref={scrollContainerRef} className="flex overflow-x-scroll pt-2 no-scrollbar" style={{
        // Add styles for your scrollable container 
       width: '100%',
       // height: '400px',
        overflow: 'hidden',
        position: 'relative', // Required for dragging to work
      }}
      onMouseMove={(e) => handleDragScroll(e)}><MoviesCharacter id={detailsMovie?.id}/></div>
        </div>
       
        </>
        :<div className=" w-full sm:relative  sm:w-10/12 pt-20"><iframe 
  className="w-full border border-black aspect-video"
  src={"https://www.youtube.com/embed/"+trailerId[trailerId.length-1]+"?&autoplay=1&unmute=0"}
  title="YouTube video player" 
  frameBorder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen>
</iframe>
</div>
} 
        </div>
        </div>
                         </div>
        </>
    )
}
export default MoviesDetail