import { img_url } from "../constant"
//import MoviesDetail from "./MoviesDetail"
//import { useState } from "react"
import { Link } from "react-router-dom"
import { moviesDetail } from "../utils/moviesSlice"

import { useDispatch } from "react-redux"
const MoviesCard=({posterpath,moviedetails})=>{
    const dispatch=useDispatch()

   //console.log(moviedetails,"gfgf")
    if(!posterpath)return
    
    return(
        <>
        <div className="w-32 sm:w-48 m-1 sm:pr-4  relative">
        <img src={img_url+posterpath} alt="img-movies" className="rounded-xl "></img>
       <Link to={"/detail"}> <div className="absolute top-2" onClick={()=>dispatch(moviesDetail(moviedetails))}><button className="bg-black text-yellow-600 hover:bg-yellow-600 hover:text-white p-1 px-4 rounded-2xl text-sm">i</button></div></Link>
        </div>
        
        </>
    )

}

export default MoviesCard