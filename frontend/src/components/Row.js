import React,{useState,useEffect} from 'react'
import './Row.css'
import axios from './axios'
function Row({title,fetchUrl,isLargeRow}) {
    const [movies,setMovies]=useState([])
  useEffect(()=>{
    async function fetchData(){
      const request=await axios.get(fetchUrl);
      setMovies(request.data.results)
      return request;
    }
    fetchData()
    },[fetchUrl])
    const base_url="https://image.tmdb.org/t/p/original";
  return (
    <div>
        <h2 className='row_title'>{title}</h2>
        <div className="row_posters">
        {movies.map(movie=>{
          var k=base_url+movie.poster_path;
            if(isLargeRow===true){
              k=base_url+movie.backdrop_path ;

            }
            return (
            <img  key={movie.id} className={`row_poster ${isLargeRow && "row_posterlarge "}` }  src={k} alt={movie.name} />
        )})}
        </div>
    </div>
  )
}

export default Row