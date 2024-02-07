import { useRef } from "react"
import {logo} from "../constant"
import { useDispatch } from "react-redux";
import { showHome } from "../utils/configSlice";
const AddToHomeScreen=()=>{
const dispatch =useDispatch()
    let installPrompt = useRef(null);
   window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      installPrompt.current= event;
 });
  
    function install(){
    const calling =async()=>{
      if (!installPrompt.current) {
       return;
      }
      const result = await installPrompt.current.prompt();
     
      installPrompt.current = null;
    
    }
 
    calling()
    
    }

    
function setLocalForHome(){
 //user click so data will set in local storage
  localStorage.setItem("hide","true")
  //to hide add to home
  dispatch(showHome("hidden"))
}





    
return(
    <>
    <div className=" p-10 pt-5 bg-black pb-1">
      <div className=""> <img className="w-16 p-2" src={logo} alt="logo-icon"></img></div> 
    <button className="bg-red-700 p-2 rounded-lg text-sm" onClick={install}>Install this Web App</button>
    <button onClick={()=>{dispatch(showHome("hidden"))}} className="bg-purple-700 p-2 rounded-lg text-sm ml-2">Cancel</button>
    <div onClick={setLocalForHome} className="text-purple-700 mt-2 text-sm  cursor-pointer hover:text-white ">click here If you do not want to see this again</div>
</div>
    </>
)



}


export default AddToHomeScreen