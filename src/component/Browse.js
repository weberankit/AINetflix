
 import Header from "./Header";
 import useMovieslist from "../hooks/useMovieslist";
 import MainContainer from "./MainContainer";
 import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
 import useTopRatedMovies from "../hooks/useTopRated";
 import Gpt from "./Gpt";
const Browse=()=>{

    useMovieslist()
    usePopularMovies()
    useTopRatedMovies()

    return(
        <>
       <Header/>
       <Gpt/>
        <MainContainer/>
        <SecondaryContainer/>
        </>
    )
}
export default Browse