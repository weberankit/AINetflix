
 import Header from "./Header";
 import useMovieslist from "../hooks/useMovieslist";
 import MainContainer from "./MainContainer";
 import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
 import useTopRatedMovies from "../hooks/useTopRated";
 import Gpt from "./Gpt";
 import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { showHome } from "../utils/configSlice";
const Browse=()=>{
    const dispatch =useDispatch()
  const toggleValue=useSelector(store=>store.gpt.value)

 
    useMovieslist()
    usePopularMovies()
    useTopRatedMovies()
 
    
   window.addEventListener('appinstalled', () => {
    dispatch(showHome("hidden"))
   
});




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