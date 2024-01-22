import MoviesCard from "./MoviesCard"
import "../App.css"
import ShimmerEffect from "./ShimmerEffect"

const MoviesListRecommended=({movies ,title})=>{
//console.log(movies,"movies")

//console.log("moviesBackground",Math.random())
if(!movies ) return <ShimmerEffect/>
return(
<>
<div>

    <div className="px-6">
        <h1 className="text-3xl text-white py-4">{title}</h1>
        <div className="flex overflow-x-scroll hide">
        <div className="flex ">
            {movies.map(movie=> <MoviesCard moviedetails={movie} key={movie.id} posterpath={movie?.poster_path}/>)}
          </div>
          </div>
    </div>

</div>
</>
)

}

export default MoviesListRecommended