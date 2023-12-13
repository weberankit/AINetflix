import Header from "./Header"
import {useState , useRef} from "react" 
import { checkvalidate } from "../utils/validate"
const Login=()=>{
//const errorMsg=useRef("ok")  //not using this as its not reflect update in ui because it doesnot rerender
const [errorMsg, setErrorMsg]=useState()
const email=useRef(null)
const password=useRef(null)
const [isLogin , setisLogin]=useState(true)
const toggleSign=()=>{
setisLogin(!isLogin)
}
const handleCheckvalidate=()=>{
console.log(email.current.value ,password)
const message =checkvalidate(email.current.value , password.current.value)
//using usref to store value
//errorMsg.current=message
setErrorMsg(message)
}

    return(
        <>
        <Header/>
        <div className="absolute"> 
     <img 
     src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_medium.jpg" 
     alt="bg-img">

     </img>
</div>

<form onSubmit={(e)=>e.preventDefault()} className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0  text-white bg-opacity-80 rounded-lg" >
    <h1>{isLogin?"Sign In":"Sign Up"}</h1>
{!isLogin && <input type="text" className="py-4 my-4 w-full bg-gray-600 rounded-lg" placeholder="  Full Name"/>
}
<input ref={email} type="text" className="py-4 my-4 w-full bg-gray-600 rounded-lg" placeholder="  Email Address"/>
<input ref={password} type="password" className="py-4 w-full my-4 bg-gray-600 rounded-lg" placeholder="  password"/>
<p className="text-red-600 font-bold">{errorMsg} </p>
<button onClick={handleCheckvalidate} className="py-6 my-6 bg-red-700 w-full rounded-lg">{isLogin ? "Sign In" : "Sign Up"}</button>
<p className="cursor-pointer" onClick={toggleSign}>{isLogin?"New to Netflix ? Sign Up now" : "Already user ? Sign In Now"}</p>
</form>


        </>
    )
}
export default Login