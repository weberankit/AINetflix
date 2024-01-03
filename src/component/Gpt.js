import GptSearchBar from "./GptSearchBar"
import GptMovieSuggestion from "./GptMovieSuggestion"
import { backgroundImg } from "../constant"
const Gpt=()=>{
return(
    <>
     <div className="absolute -z-10"> 
    <img 
    src={backgroundImg}
    alt="bg-img">

    </img>
</div>
    <GptSearchBar/>
    
    </>
    
)
}
export default Gpt