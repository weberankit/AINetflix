import { useNavigate } from "react-router-dom"
import { img_url } from "../constant"
import {  useSelector } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faCoffee, faPauseCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import VideoBackgrond from "./VideoBackground"
import { useEffect, useState } from "react"
import useTrailer from "../hooks/useTrailer"
import Header from "./Header"
//import {useEffect} from "react"
import MoviesCharacter from "./MoviesCharacter"
import ShimmerEffect from "./ShimmerEffect"
const MoviesDetail=()=>{
const[show,setshow]=useState(false)
     //clicked movies id getting from redux 
    const detailsMovie=useSelector(store=>store.movies?.moviesDetail)
    //fetching trailer and storing to redux store
//passing showhere so that we can use it for fetching video data on basis of it when user click play btn 
 useTrailer(detailsMovie?.id ,show)  
    //getting video id 
const trailerId=useSelector((store)=>store.movies?.trailerId) 
 if(detailsMovie===null) return  <ShimmerEffect/>
if (!trailerId) return 
 return(<>
    <Header displayHide={"hidden"}/>
        <div className=" bg-black" >
        <div>
            <div className=" flex flex-row">
        <div className="" >  <img  src={img_url+detailsMovie.poster_path}></img>
    <div  onClick={()=>setshow(!show)} className="absolute  top-3/4 "><FontAwesomeIcon className="text-8xl  text-red-700 cursor-pointer " icon={show===false? faPlayCircle : faPauseCircle}/></div>
        </div> 
     {show===false?
     <>
        <div className="bg-black block text-white w-4/6 mt-32"  >
           <h1 className="text-yellow-500 text-center text-7xl">{detailsMovie.title}</h1>
            <div className="text-white text-center flex flex-row justify-around pt-7 mt-4">
        <h2>Rate : {detailsMovie.vote_average}</h2>
            <h2>Release Date : {detailsMovie.release_date}</h2>
        </div>
            <h1 className="p-9 text-lg pt-16 text-yellow-600">{detailsMovie.overview}</h1>
            <div className="flex overflow-x-scroll pt-2"><MoviesCharacter id={detailsMovie.id}/></div>
        </div>
       
        </>
        :<div className="w-10/12"><iframe 
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