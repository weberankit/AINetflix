import { useDispatch } from "react-redux";
import {signOut } from "firebase/auth";
 import { auth } from "../utils/firebase";
// import { useNavigate } from "react-router-dom";
 import {useSelector} from "react-redux"
import {logo} from "../constant"
import { toggle } from "../utils/gptSlice";
import { supported_languages } from "../constant";
import { changeLang } from "../utils/configSlice";
import { Link } from "react-router-dom";
import lang from "./languageConstant";
import { loginSkip } from "../utils/configSlice";
//import { useState } from "react";
const Header=({displayHide})=>{
    //const navigate=useNavigate()
    const dispatch=useDispatch()
  const user=useSelector((store)=>store.user)
 const showGptBtn=useSelector(store=>store.gpt.value)
 const langValue=useSelector((store)=>store.config.lang)
 console.log(showGptBtn)
 const loginSkipValue=useSelector(store=>store.config.value)
 console.log(loginSkipValue,"loginskipValue")
    const handlesignout=()=>{
        //when user click on sign out btn this api   will call onauthstatechange else part and code inside it
    signOut(auth).then(() => {
      // Sign-out successful.
    //  navigate("/")
    }).catch((error) => {
      // An error happened.
    });
}


const handleGpt=()=>{
dispatch(toggle())
}

const handleLang=(e)=>{
//  console.log(e.target.value , e.target)
 dispatch(changeLang(e.target.value))

  }
  console.log(user,"iii")
user ?dispatch(loginSkip(false)):dispatch(loginSkip(true))

return(
    <>


    {user && (
    
<div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
 <Link to={"/browse"}>  <img  className="w-44" src={logo} alt="logo_img"></img></Link> 
     <button onClick={handleGpt} className={`px-1 py-1 text-sm p-1 md:px-16  text-white bg-red-600   rounded-2xl ${displayHide}`}>{showGptBtn ?  `${lang[langValue].home}` : `${lang[langValue].search}` }</button>
     <select className={`${displayHide} p-2 m-2 bg-gray-900 text-white rounded-lg  w-4 sm:w-16`} onChange={handleLang}>
{supported_languages.map(item=>{return <option key={item.identifier} value={item.identifier} >{item.name}</option>})}
     </select>
    <div className="p-2 flex border border-red-700 border-b-0 justify-between  ">
     
        <div className="p-1">  <img className="w-6 md:w-7 rounded-md" src={user?.photoURL}></img> </div>
  <div className="flex flex-col small">
        <h3 className="font-bold text-white text-[10px] sm:text-sm pb-0  sm">{user?.displayName} </h3>
  <button className="text-white text-[10px] sm:text-sm " onClick={handlesignout}>signout</button>
</div>
</div>


    </div>
    )

    }
{loginSkipValue && ( <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between"><Link to={"/browse"}>  <img  className="w-44" src={logo} alt="logo_img"></img></Link> 
     <button onClick={handleGpt} className={`text-white bg-red-600 px-16  rounded-2xl ${displayHide}`}>{showGptBtn ?  `${lang[langValue].home}` : `${lang[langValue].search}` }</button>
     <select className={`${displayHide} p-2 m-2 bg-gray-900 text-white rounded-lg  `} onChange={handleLang}>
{supported_languages.map(item=>{return <option key={item.identifier} value={item.identifier} >{item.name}</option>})}
     </select>  </div> )
     
     }

    </>
)
}

export default Header