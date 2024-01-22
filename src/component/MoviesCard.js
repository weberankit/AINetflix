import { img_url } from "../constant"
import MoviesDetail from "./MoviesDetail"
import { useState } from "react"
import { Link } from "react-router-dom"
import { moviesDetail } from "../utils/moviesSlice"

import { useDispatch } from "react-redux"
const MoviesCard=({posterpath,moviedetails})=>{
    const dispatch=useDispatch()

   console.log(moviedetails,"gfgf")
    if(!posterpath)return
    
    return(
        <>
        <div className="w-48 pr-4 cursor-pointer relative">
        <img src={img_url+posterpath} alt="img-movies" className="rounded-xl"></img>
       <Link to={"/detail"}> <div className="absolute top-2" onClick={()=>dispatch(moviesDetail(moviedetails))}><button className="bg-yellow-600 p-1 px-4 rounded-2xl text-sm">i</button></div></Link>
        </div>
        
        </>
    )

}

export default MoviesCard