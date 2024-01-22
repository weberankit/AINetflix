
import { useSelector } from "react-redux"
import { img_url } from "../constant"
import useMoviesCharacter from "../hooks/useMoviesCharacter"
import ShimmerEffect from "./ShimmerEffect"
const MoviesCharacter=({id})=>{
  //  console.log(id,"iddd")
    useMoviesCharacter(id)

const castchar=useSelector(store=>store.movies.moviesDetailCharcter)
    //console.log(castchar,"got")
    //if(!cast)return

if(castchar===null)return <ShimmerEffect/>


 return (
    <>
    {
        castchar.cast.map(item=>{
           
            if(item.profile_path===null)return
            return(
                <div key={item.id} className="text-white ">
             <div className="bg-black w-36  rounded-2xl p-3"><img className="rounded-lg " src={img_url+item.profile_path}></img></div>
              
    
                </div>
            )
        })
    }
    
    
    
    
    
    </>
    
    
    
    )
    
    


}


export default MoviesCharacter