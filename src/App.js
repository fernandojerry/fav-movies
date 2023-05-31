import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
import './Nav.css'
import SearchBar from './SearchBar';
import { useEffect, useState } from 'react';
import axios from './axios';
import SearchCom from './SearchCom'
import Footer from './Footer';


const base_url = "https://image.tmdb.org/t/p/original/"
const API_KEY = "8a3d6962b99c06a2bef565df4b0be5e1";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [show, handleShow,] = useState(false);

    useEffect(() => {
        
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
    }, []);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`/search/movie?&api_key=${API_KEY}&query=${searchValue}`);
      if(request.data.results) {
        setMovies(request.data.results);
      }
      return request
    }
    fetchData();
  }, [searchValue])
  
  return (
    <div className="App">
      <div className={`navber ${show && "nav-black"}`}>
        <Nav  logo="Fav Movies" />
        <SearchCom searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <Banner />
      <SearchBar title="Search Results" />
      <div className="row-poster">
            {movies.map(movie =>
                <img 
                key={movie.id}
                src={`${base_url}${movie.poster_path}`} 
                alt={movie.name} 
                className='row-posters search-results'
                />
                )}
        </div>
      
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentries" fetchUrl={requests.fetchDocumentaries}/>
      <Footer />
    </div>
  );
}

export default App;
