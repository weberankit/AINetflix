//import Login from "./Login"
//import Browse from "./Browse"
import { Outlet , useNavigate} from "react-router-dom";
import {onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser,removeUser } from "../utils/userSlice";
const Body=()=>{
const dispatch=useDispatch()
const navigate = useNavigate()
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
  





    return(
        <>
<Outlet/>

        </>
    )
}
export default Body