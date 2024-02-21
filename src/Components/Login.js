import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { firebaseConfig } from "./Firebase";
import "../Components/Login.css";

function Login({ page }) {
  const app = initializeApp(firebaseConfig);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isUserExists, setUserExists] = useState(false);
  const [isEmailUsed, setEmailUsed] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();
  // const location = useLocation();
  // const page = location.pathname === '/signin' ? true:false;

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    setUserExists(false);
    setEmailUsed(false);
  }, [page]);

  const clickHandler = (e) => {
    e.preventDefault();
    if (page) {
      signInWithEmailAndPassword(auth, email, password)
        .then(auth => {
          if (auth) {
            navigate("/home");
          }
        })
        .catch(error => setUserExists(true));
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(auth => {
          if (auth) {
            navigate("/signin");
          }
        })
        .catch(error => setEmailUsed(true));
    }
  };

  return (
    <div className="login template d-flex justify-content-center align-items-center bg-img">
      <div className="holder form-container rounded border border-dark bg-transparent p-4">
        <h1 className="text-white text-center">
          {page ? "Sign In" : "Register"}
        </h1>
        <br />

        <form>
          <div className="mb-2 text-white">
            <label htmlFor="Email" className="form-label">
              Email
            </label>
            <input
              value={email}
              type="email"
              placeholder=" ENTER YOUR EMAIL"
              className="form-control"
              name="email"
              onChange={emailChangeHandler}
              required
            />
          </div>

          <div className="mb-2 text-white">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              value={password}
              type="password"
              placeholder=" ENTER YOUR PASSWORD"
              className="form-control"
              name="password"
              onChange={passwordChangeHandler}
              required
            />
          </div>
          {page && (
            <div className="mb-2 text-white ml-4">
              <input type="checkbox" className="form-check-input" id="Check" />
              <label className="custom-input-lable ms-2" htmlFor="Check">
                Remember Me
              </label>
            </div>
          )}

          <div className="d-grid">
            <button className="btn btn-primary" type="submit" onClick={clickHandler}>
              {page ? "Sign In" : "Register"}
            </button>
          </div>
          {isUserExists && (
            <p className="text-danger text-center mt-2">
              User does not exists | Go for Signup
            </p>
          )}
          {isEmailUsed && (
            <p className="text-danger text-center mt-2">
              Email already in use | Create new email Or Go for SignIn
            </p>
          )}
          <p className=" mt-2 text-white">
            <span className="mt-2">
              {page ? "New to Netflix?" : "Existing User"}
            </span>
            <Link
              to={page ? "/register" : "/signin"}
              className="ms-2 text-decoration-none"
            >
              {page ? "Sign Up now" : "Sign In"}
            </Link>
          </p>
        </form>
      </div>
      <div className="shadow"></div>
      <img
        className="bg-img concord-img vlv-creative img-fluid"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ee068656-14b9-4821-89b4-53b4937d9f1c/IN-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt=""
      />
    </div>
  );
}

export default Login;
