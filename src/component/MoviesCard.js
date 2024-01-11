import { img_url } from "../constant"
const MoviesCard=({posterpath})=>{

    if(!posterpath)return
    
    return(
        <>
        <div className="w-48 pr-4 cursor-pointer">
        <img src={img_url+posterpath} alt="img-movies"></img>
        </div>
        </>
    )

}

export default MoviesCard