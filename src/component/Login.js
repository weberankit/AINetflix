import Header from "./Header"
import {useState , useRef} from "react" 
import { checkvalidate } from "../utils/validate"
import {createUserWithEmailAndPassword ,signInWithEmailAndPassword , updateProfile} from "firebase/auth";
import {auth} from "../utils/firebase"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { userImg } from "../constant";
import { backgroundImg } from "../constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { loginSkip } from "../utils/configSlice";

//import { useNavigate } from "react-router-dom";
const Login=()=>{
  const dispatch = useDispatch()

//const errorMsg=useRef("ok")  //not using this as its not reflect update in ui because it doesnot rerender
const [errorMsg, setErrorMsg]=useState()
const email=useRef(null)
const password=useRef(null)
const fullName=useRef(null)
const [isLogin , setisLogin]=useState(true)
const navigate=useNavigate()
const toggleSign=()=>{
setisLogin(!isLogin)
}
const handleCheckvalidate=()=>{
 
    //handele error / validation of form
const message =checkvalidate(email.current.value , password.current.value)
//using usref to store value
//errorMsg.current=message
setErrorMsg(message)
//if message is null i.e falsy value so if it is true then return nothing i.e not do further task
if(message)return
//authentication
if(!isLogin){
//sign up
createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
   //navigate("/browse")

//to display name of user
   updateProfile(user, {
    displayName: fullName.current.value, photoURL: userImg
  }).then(() => {
    // Profile updated!
    // navigate("/browse")
///since redux not wait to updating value so we are dispatch here as to make it update
const {uid ,email,displayName,photoURL} = auth.currentUser;
dispatch(addUser( {uid:uid ,email:email,displayName:displayName , photoURL:photoURL}))
  }).catch((error) => {
    // An error occurred
    // ...
    setErrorMsg(error.message)
  });



  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMsg(errorCode + " - " + errorMessage)
});


}else{
//sign in
signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    //const user = userCredential.user;
   // console.log(user)
 //navigate("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMsg(errorCode + " - " + errorMessage)
  });
}

}


function loginWithGoogle(auth){
  
  const provider = new GoogleAuthProvider();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
   // const token = credential.accessToken;
    // The signed-in user info.
   // const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    //const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
   // const email = error.customData.email;
    // The AuthCredential type that was used.
   // const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    setErrorMsg(errorMessage)
  });

}
function directToHome(){
navigate("/browse")
dispatch(loginSkip(true))
}


    return(
        <>
        <Header/>
        <div className="absolute "> 
     <img 
     src={backgroundImg}
     alt="bg-img"className="h-[800px] object-fill" >
     
     </img>
</div>

<form onSubmit={(e)=>e.preventDefault()} className="absolute w-[300px] md:w-[400px] p-12 bg-black my-36 mx-auto right-0 left-0  text-white bg-opacity-80 rounded-lg" >
    <h1>{isLogin?"Sign In":"Sign Up"}</h1>
{!isLogin && <input ref={fullName} type="text" className="py-4 my-4 w-full bg-gray-600 rounded-lg" placeholder="  Full Name"/>
}
<input ref={email} type="text" className="py-4 my-4 w-full bg-gray-600 rounded-lg" placeholder="  Email Address"/>
<input ref={password} type="password" className="py-4 w-full my-4 bg-gray-600 rounded-lg" placeholder="  password"/>
<p className="text-red-600 font-bold">{errorMsg} </p>
<button onClick={handleCheckvalidate} className="py-6 my-6 bg-red-700 w-full rounded-lg">{isLogin ? "Sign In" : "Sign Up"}</button>
<p className="cursor-pointer" onClick={toggleSign}>{isLogin?"New to Netflix ? Sign Up now" : "Already user ? Sign In Now"}</p>
<p className="text-white bg-red-700 m-2   font-bold p-2 hover:bg-black cursor-pointer " onClick={()=>loginWithGoogle(auth)}> <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon> sign in with google</p>
<p className="text-center pt-2 mt-2 p-2 rounded-lg bg-black text-white cursor-pointer" onClick={()=>{directToHome()}}>Skip!login</p>
</form>


        </>
    )
}
export default Login