import MoviesCard from "./MoviesCard"
import "../App.css"
import ShimmerEffect from "./ShimmerEffect"
import  { useRef } from 'react';
const MoviesListRecommended=({movies ,title})=>{
//console.log(movies,"movies")
const scrollContainerRef = useRef(null);
//console.log("moviesBackground",Math.random())
if(!movies ) return <ShimmerEffect/>



// Function to handle scrolling when dragging
const handleDragScroll = (e) => {
/*This line increments the scrollLeft property of the container by the horizontal movement
 of the mouse (e.movementX). e.movementX
 represents the distance the mouse has moved horizontally since the last mousemove event. */

  if (scrollContainerRef.current) {
    const container = scrollContainerRef.current;
    container.scrollLeft += e.movementX;
    //for vertical
  //  container.scrollTop += e.movementY;
  }
};

return(
<>
<div>

    <div className="sm:px-6 ">
        <h1 className="sm:text-3xl text-white py-4">{title}</h1>
        <div   ref={scrollContainerRef} className="flex overflow-x-scroll hide no-scrollbar" style={{
        // Add styles for your scrollable container 
       width: '100%',
       // height: '400px',
        overflow: 'hidden',
        position: 'relative', // Required for dragging to work
      }}
      onMouseMove={(e) => handleDragScroll(e)}>
        <div className="flex ">
            {movies.map(movie=> <MoviesCard moviedetails={movie} key={movie.id} posterpath={movie?.poster_path}/>)}
          </div>
          </div>
    </div>

</div>
</>
)

}

export default MoviesListRecommended