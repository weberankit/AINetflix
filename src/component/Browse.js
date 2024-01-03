
 import Header from "./Header";
 import useMovieslist from "../hooks/useMovieslist";
 import MainContainer from "./MainContainer";
 import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
 import useTopRatedMovies from "../hooks/useTopRated";
 import Gpt from "./Gpt";
 import { useSelector } from "react-redux";
const Browse=()=>{
  const toggleValue=useSelector(store=>store.gpt.value)
  console.log(toggleValue,'its va')
    useMovieslist()
    usePopularMovies()
    useTopRatedMovies()

    return(
        <>
       <Header/>
    { toggleValue?
    <Gpt/>:
    <>
        <MainContainer/>
        <SecondaryContainer/>
    </>
        
        }
        </>
    )
}
export default Browse