import {useSelector} from "react-redux"
import lang from "./languageConstant"

const GptSearchBar=()=>{
    const langValue=useSelector((store)=>store.config.lang)
    console.log(lang[langValue].search)
return(
    <>
    <div className=" pt-[10%] flex justify-center">
        <form className="w-1/2 bg-black grid grid-cols-12">
            <input type="text" 
            placeholder={lang[langValue].gptSearchPlaceholder}
            className="p-4 m-4 col-span-9"
            ></input>
            <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">{lang[langValue].search}</button>
        </form>
    </div>
    
    </>
)
}
export default GptSearchBar