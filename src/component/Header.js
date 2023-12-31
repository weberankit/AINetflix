
import {signOut } from "firebase/auth";
 import { auth } from "../utils/firebase";
 import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux"

const Header=()=>{

    const navigate=useNavigate()
  const user=useSelector((store)=>store.user)

    const handlesignout=()=>{
        //when user click on sign out btn this api   will call onauthstatechange else part and code inside it
    signOut(auth).then(() => {
      // Sign-out successful.
    //  navigate("/")
    }).catch((error) => {
      // An error happened.
    });
}

return(
    <>
    {user && (
<div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
    <img className="w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo-img"></img>
    
    <div className="p-2">
        <span>{user?.displayName} </span>
<button onClick={handlesignout}>signout</button>
</div>
    </div>
    )

    }

    </>
)
}

export default Header