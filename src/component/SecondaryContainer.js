import { useSelector } from "react-redux"
import MoviesListRecommended from "./MoviesListRecommended"
import lang from "./languageConstant"


const SecondaryContainer=()=>{
const movies=useSelector((store)=>store.movies.list)
const popularMovies=useSelector(store=>store.movies.popular)
const topRatedMovies=useSelector(store=>store.movies.topRated)
const langValue=useSelector((store)=>store.config.lang)

return(
    <div className="bg-black">
< div className="-mt-52 z-20 relative pl-12  pt-64 sm:pt-96 md:pt-64 lg:pt-64 xl:pt-64   2xl:pt-0 small-devices ">

<MoviesListRecommended movies={movies} title={lang[langValue].nowPlaying}/>
<MoviesListRecommended movies={popularMovies} title={lang[langValue].popular}/>
<MoviesListRecommended movies={topRatedMovies} title={lang[langValue].topRated}/>
</div>
</div>

)
}
export default SecondaryContainer