import { useEffect } from "react";
import { useSelector ,useDispatch} from "react-redux";
import { addPrevLang } from "../utils/configSlice";
//import { hasUnreliableEmptyValue } from "@testing-library/user-event/dist/utils";
const useTranslate=(lang,title,overview,setTransValue,flag)=>{
    const langValue=useSelector((store)=>store.config.lang)
    const dispatch=useDispatch()
   const prevLang=useSelector((store)=>store.config.prevLangs)
   //please note that here the prevLangs value is stored so it should provide the dispatch value 
   //but here we acces the previous value as react doing it here fastly note if we use prevLang at other componenet it
   //will behave prorerly as per as expectaion and also this is also good for us now no need to use 
   //prevLang[prevLang.length-2]
  
  async function api() {
  dispatch(addPrevLang(lang))
  console.log('languges',prevLang)
 /**/  const url = 'https://rapid-translate-multi-traduction.p.rapidapi.com/t';
   const options = {
     method: 'POST',
     headers: {
       'content-type': 'application/json',
      'X-RapidAPI-Key': process.env,
       'X-RapidAPI-Host': 'rapid-translate-multi-traduction.p.rapidapi.com'
     },
     body:JSON.stringify( {
       from: `en`,
       to: `${lang}`,
       e: '',
       q: [
         `${title}`,
         `${overview}`,
        
         
       ]
     })
   };
   
   try {
     const response = await fetch(url, options);
     const result = await response.text();
    // console.log(JSON.parse(result),"result");
     const array=JSON.parse(result)
    // console.log(array)
    // console.log(array,"array")
     //setTitle(array[0])
     //setOverView(array[1])
    
     setTransValue({title:array[0],overview:array[1]})
 if((array[0] ===undefined)||(array[1]===undefined))setTransValue({title:title,overview:overview})

   } catch (error) {
    // console.error(error);


   }
  }
      useEffect(() => {

        if(flag === true){
           api();
          console.log("checking",langValue)  
        }
        console.log("checking2",langValue)  
       
      }, [langValue]);
    
      //console.log('hi I am translator');
}

export default useTranslate;