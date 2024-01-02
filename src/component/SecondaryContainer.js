import { useSelector } from "react-redux"
import MoviesListRecommended from "./MoviesListRecommended"

const SecondaryContainer=()=>{
const movies=useSelector((store)=>store.movies.list)
const popularMovies=useSelector(store=>store.movies.popular)
const topRatedMovies=useSelector(store=>store.movies.topRated)
//console.log(movies)
return(
    <div className="bg-black">
< div className="-mt-52 z-20 relative pl-12">
    
<MoviesListRecommended movies={movies} title={"Now playing"}/>
<MoviesListRecommended movies={popularMovies} title={"Popular Movies"}/>
<MoviesListRecommended movies={topRatedMovies} title={"Top-Rated Movies"}/>
</div>
</div>

)
}
export default SecondaryContainer