
 import Header from "./Header";
 import useMovieslist from "../hooks/useMovieslist";
 import MainContainer from "./MainContainer";
 import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
 import useTopRatedMovies from "../hooks/useTopRated";
 import Gpt from "./Gpt";
 import { useSelector } from "react-redux";
//import Translate from "./Translate";
//import { Outlet } from "react-router-dom";
//import main from "../utils/openAI";

const Browse=()=>{

  const toggleValue=useSelector(store=>store.gpt.value)
  console.log(toggleValue,'its va')
    useMovieslist()
    usePopularMovies()
    useTopRatedMovies()
    //main()
   // Translate()
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