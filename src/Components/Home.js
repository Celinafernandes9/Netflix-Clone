import React, { useEffect, useState } from 'react';
import axios from './Axios';
import "./Home.css";

const baseURL="https://image.tmdb.org/t/p/original"

function Home({title, fetchUrl, largeRow}) {
    
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
        }
        fetchData();
    },[fetchUrl]);
  return (
    <div className="row">
    <h2>{title}</h2>

    <div className="row_posters">
        {movies.map(movie => (
           
            <img 
                key={movie.id}
                className={`row_poster ${largeRow && "row_posterLarge"}`}
                src={`${baseURL}${largeRow ? movie.poster_path : movie.backdrop_path}`}
                alt={movie.name}
            />
           
            ))}
            </div>
        </div>
  )
}

export default Home;
