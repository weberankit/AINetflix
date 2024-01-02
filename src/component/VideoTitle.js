const VideoTitle=({title,overview})=>{
return(
<div className="w-screen aspect-video pt-36 px-12 absolute text-white bg-gradient-to-r from-black">
<div className="text-6xl font-bold">{title}</div>
<div className="py-6 w-1/4 text-lg">{overview}</div>
<div>
    <button className="bg-white text-black p-4 px-12 text-xl  rounded-lg hover:bg-opacity-80">play</button>
    <button className="bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50  rounded-lg mx-2">more info</button>

</div>



</div>



)


}
export default VideoTitle