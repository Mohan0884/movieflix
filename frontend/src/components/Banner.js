import React,{useEffect,useState} from 'react'
import axios from './axios'
import requests from './requests'
import './Banner.css'
function Banner() {
    const [movie,setMovie]=useState([])
  useEffect(()=>{
    async function fetchData(){
      const request=await axios.get(requests.fetchTrending);
      const k=Math.floor(Math.random()*request.data.results.length-1);
      setMovie(request.data.results[k]);
      return request;
    }
    fetchData()
    },[])
    function truncate(str,n){
        return str?.length>n?str.substr(0,n-1)+"...":str;
    }
  return (
    <header 
    style={{
        backgroundSize:"cover",
        backgroundImage:`url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition:"center center",
    }}
    className="banner">
        <div className="banner-contents">
            <h1 className='banner-title'>
                {movie?.title||movie?.name||movie?.original_name}
            </h1>
            <div className="banner-overview">{truncate(movie?.overview,300)}</div>

            <div className="banner-buttons">
                <button className="banner-button">play</button>
                <button className="banner-button">info</button>
            </div>
        </div>
        <div className="banner-fade-bottom"></div>
    </header>
  )
}

export default Banner