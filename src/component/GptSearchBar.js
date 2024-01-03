

const GptSearchBar=()=>{
return(
    <>
    <div className=" pt-[10%] flex justify-center">
        <form className="w-1/2 bg-black grid grid-cols-12">
            <input type="text" 
            placeholder="Ask me Anything about movie"
            className="p-4 m-4 col-span-9"
            ></input>
            <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">search</button>
        </form>
    </div>
    
    </>
)
}
export default GptSearchBar