//import { key } from "../constant";
import OpenAI from 'openai';
//import { openaiKey } from "../constant";
import { useRef } from 'react';
import { Api_options } from '../constant';
import { gptMovies } from './gptSlice';
import {  useDispatch } from 'react-redux';
import lang from '../component/languageConstant';
import { useSelector } from 'react-redux';
import ShimmerEffect from '../component/ShimmerEffect';
   const OpenAICom=()=>{
    const dispatch=useDispatch()
   const inputref=useRef(null)
   const langValue=useSelector((store)=>store.config.lang)
   

   const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      Api_options
    );
    const json = await data.json();

    return json.results;
  };



      async function main() {

 const openai = new OpenAI({
        apiKey: process.env,
        dangerouslyAllowBrowser: true,
      });
 
      const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " + inputref.current.value
       +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
const chatCompletion = await openai.chat.completions.create({
          messages: [{ role: 'user', content: gptQuery }],
          model: 'gpt-3.5-turbo',
        });

  

      if(!chatCompletion.choices){
       return <ShimmerEffect/>
      }
const gptMoviesName=chatCompletion.choices?.[0]?.message?.content.split(",")

const promiseArray = gptMoviesName.map((movie) => searchMovieTMDB(movie));

const tmdbResults = await Promise.all(promiseArray);


dispatch(gptMovies(tmdbResults))

      }
      
      

    return(
      <>
       <div className="flex  justify-center   p-2">
    <div ><input ref={inputref} className="bg-black text-white p-4 " placeholder={lang[langValue].gptSearch} type="text"></input></div>
    <div className=" p-4 rounded-lg ml-1 bg-red-700  text-white cursor-pointer" onClick={main}>{lang[langValue].gpt}</div>
    
  </div>
      
      </>
    )

    }

export default OpenAICom



//export default main