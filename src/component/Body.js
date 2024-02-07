//import Login from "./Login"
//import Browse from "./Browse"
import { Outlet , useNavigate} from "react-router-dom";
import {onAuthStateChanged } from "firebase/auth";
import { useEffect ,useState ,useRef} from "react";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser,removeUser } from "../utils/userSlice";
import AddToHomeScreen from "./AddToHome";
import { useSelector } from "react-redux";
import { showHome } from "../utils/configSlice";
const Body=()=>{
const dispatch = useDispatch()
const navigate = useNavigate()
//const user=useSelector((store)=>store.user)

useEffect(()=>{
    //user sign in/out mange b this
 const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //sign in
        const {uid ,email,displayName,photoURL} = user;
        dispatch(addUser( {uid:uid ,email:email,displayName:displayName,photoURL:photoURL}))
       navigate("/browse")
      } else {
        // User is signed out
        // ...
         dispatch(removeUser())
         navigate("/")
      }
    });

return ()=>subscribe()

},[])
  
const [onlineStatus , setStatus]= useState(null)
window.addEventListener("offline",(event)=>{
setStatus("Please check your internet connection")
})
window.addEventListener("online",()=>{
  setStatus(null)
})
//hide 
const hideHomeInstall =useSelector((store)=>store.config.add)



//if user click do not show me again then hiding add to home screen 
const getFromLocalStorage=useRef(null)
  getFromLocalStorage.current=  localStorage.getItem("hide")
if(getFromLocalStorage.current)  dispatch(showHome("hidden"))
//console.log(AddToHomeScreen(),"dhdhdhhdd")
    return(
        <>
        {
        onlineStatus&&<div className="bg-red-600 text-center font-bold  ">{onlineStatus}</div>
        }
     <div className={`fixed z-[2000] bottom-0  left-0 right-0 ${hideHomeInstall} `}>
{
  <AddToHomeScreen/>
} 
</div>

<Outlet/>

        </>
    )
}
export default Body