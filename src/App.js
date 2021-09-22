import './App.css';
import React, {useEffect, useState} from 'react';
import Movie from './components/Movie/Movie';
import Header from './components/Header/Header';
import Pagination from './components/Pagination/Pagination';



const KEY_API = '8c02b5347c21356e34103f6dae425ca3';
const requestUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${KEY_API}`;
const SEARCH_MOVIE = `https://api.themoviedb.org/3/search/movie?api_key=${KEY_API}&query=`;

function App() {
  
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const total_pages = 500;
  let regex = searchMovie.indexOf(' ') >= 0;

  // function get api
  const getMovies = (api) =>{
    async function fetchMovies(){
       try {
          const response = await fetch(api);
          const responseJson =  await response.json();
          const {results} = responseJson;
          setMovies(results);
       } catch (error) {
          console.log("Failed to fetch post list:", error.message);
       }
    }
    fetchMovies()
  }

  const handleSearch = (e) => {
      setSearchMovie(e.target.value);
  } 

  // handle submit form search
  const handleSubmit = (e) => {
    console.log(regex);
      e.preventDefault();
      if(searchMovie === "" || regex == true ){
          alert("The content of the movie you are looking for does not exist")
      }
      else{
        getMovies(SEARCH_MOVIE + searchMovie);
        setSearchMovie('');
      }
  }

  // pagination
  const prevPage = () => {
    if(movies && pageNumber !== 1 ){
      setPageNumber(pageNumber - 1);
    }
    console.log(pageNumber);
  }

  const nextPage = () => {
      if(movies && pageNumber !== total_pages){
        setPageNumber(pageNumber + 1);
      }
      console.log(pageNumber);
  }

  // call api
  useEffect(() => {
      getMovies(requestUrl + '&page=' + pageNumber );
  },[pageNumber]);


  return (
    <>
      <Header searchMovie={searchMovie} handleSearch={handleSearch} handleSubmit={handleSubmit} />
      <div className="movies-container">   
          <Movie movies = {movies} />        
      </div>
      <Pagination  prevPage={prevPage} nextPage={nextPage}/>

    </>
  );
}

export default App;
