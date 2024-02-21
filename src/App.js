import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainBanner from "./Components/MainBanner";
import Banner from "./Components/Banner";
import requests from "./Components/Request";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <Navbar />
                <MainBanner />
              </React.Fragment>
            }
          ></Route>
          <Route path="/signin" element={
            <React.Fragment>
              <Navbar/>
              <Login page={true}/>
            </React.Fragment>
          }></Route>
          <Route path="/register" element={
            <React.Fragment>
              <Navbar/>
              <Login page={false}/>
            </React.Fragment>
          }></Route>
          <Route
            path="/home"
            element={
              <React.Fragment>
                <Banner />
                <Home title="Netflix Originals" largeRow fetchUrl={requests.fetchNetflixOriginals}/>
                <Home title="Trending" fetchUrl={requests.fetchTrending} />
                <Home title="Top Rated" fetchUrl={requests.fetchTopRated} />
                <Home title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
                <Home title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
                <Home title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
                <Home title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
                <Home title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
              </React.Fragment>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
