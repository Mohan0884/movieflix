import React,{useState} from 'react'
import './Home.css'
import Row from './Row.js'
import Banner from './Banner.js'
import requests from './requests.js'
import Navbar from './Navbar.js'
function Home() {
  const [user,setUser]=useState({
    username:'',
    password:''
   });

  // useEffect(() => {
  //   fetch('/home/:id', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       // Handle the retrieved data
  //       setUser(data);
  //       console.log(data);
  //     })
  //     .catch(error => {
        
  //       // Handle any error that occurred during the request
  //       console.log(error);
  //     });
  // }, []);
  return (
    <div className='home'>
        <Navbar user={user}/>
      <Banner/>
      <Row isLargeRow title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
       <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
       <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
       <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
       <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
       <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
       {/* <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies}/> */}
       <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>

    </div>
  )
}

export default Home