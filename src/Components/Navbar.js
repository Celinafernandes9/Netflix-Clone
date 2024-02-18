import React from "react";
import { Link } from "react-router-dom";
import "../Components/Navbar.css";

function Navbar() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-black bg-black">
        <div className="container-fluid">

          <Link className="navbar-brand" to="/">

              <img
                src="netflix.png"
                alt="netflix"
                style={{ height: "40px" }}
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <form className="d-flex">
              <select className="form-select" aria-label="Default select example">
                <option value="1">English</option>
                <option value="2">Hindi</option>
              </select>

              <button className="btn btn-danger">
              <Link to="/signin" className="btn btn-danger">SignIn</Link>
              </button>
            </form>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
