import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
const Error=({msg="failed to fetch"})=>{
  
return(
    <>
    
    <div className="bg-black  h-full w-full text-white ">
        <Link to={"/browse"}><div className="bg-red-700 text-black font-bold p-2 rounded-lg text-center">Back to Home</div></Link>
        <div className="text-center" >{<FontAwesomeIcon className="pt-44 text-red-700  text-6xl  h-72" icon={faGlobe}/>}</div>
<h1 className="p-20 text-3xl text-center pb-1">Network Error</h1>
<h3  className=" text-2xl text-center">{msg}</h3>
    </div>

    </>
)
}

export default Error