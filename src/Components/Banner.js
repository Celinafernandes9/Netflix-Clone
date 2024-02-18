import React, { useEffect, useState } from "react";
import axios from "./Axios";
import requests from "./Request";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try{
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
          request.data.results[
            Math.floor(Math.random) * request.data.results.length
          ]
        );
        return request;
      }
      catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const backgroundImage = movie?.backdrop_path
    ? `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`
    : "";
  return (
    <div>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          // backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundImage: backgroundImage,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner_contents">
          <h1 className="banner_title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner_buttons">
            <button className="banner_button">PLAY</button>
            <button className="banner_button">MY LIST</button>
          </div>
          <h1 className="banner_description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>
        <div className="banner--fadeButton" />
      </header>
    </div>
  );
}

export default Banner;
