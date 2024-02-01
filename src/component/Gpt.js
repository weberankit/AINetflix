import GptSearchBar from "./GptSearchBar"
import GptMovieSuggestion from "./GptMovieSuggestion"
import { backgroundImg } from "../constant"
const Gpt=()=>{
return(
    <>
     <div className=" -z-10 border border-solid fixed"> 
    <img 
    src={backgroundImg}
    alt="bg-img" className="h-[800px] object-fill">
    
    </img>
</div>
    <GptSearchBar/>
    
    </>
    
)
}
export default Gpt