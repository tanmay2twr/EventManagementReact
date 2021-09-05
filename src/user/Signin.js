import React, { useState } from "react";
import axios from "axios";
import "./style.css";
import logo from "../img/log.svg";
import register from "../img/register.svg";
import Dialogg from "./Dialogg";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
export default function Signin() {
  const [values, setValues] = useState({
    email: "tanmay@gmail.com",
    password: "",
  });

  const { email, password } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    axios
      .get(`http://localhost:8000/user?email=${email}`)
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        if (data[0].password === password) {
          console.log("Log In Successfull!!!");
          <Popup trigger={<button> Trigger</button>} position="right center">
            <div> Log In Successfull!!!!!</div>
          </Popup>;
          localStorage.setItem("name", data[0].name);
          localStorage.setItem("region", data[0].region);
          localStorage.setItem("email", data[0].email);
          window.location.href = "/user/dashboard";
        } else {
          alert("Incorrect Password!!");
          console.log("Log In Failed!!!");
        }
      })
      .catch((error) => {
        console.log("signin request failed");
        alert("Request Failed!!!");
      });
  };

  const signup = () => {
    window.location.href = "/sign-up";
  };

  return (
    <div class="container1">
      <div class="forms-container1">
        <div class="signin-signup">
          <form onSubmit={onSubmit} class="sign-in-form">
            <h2 class="title">Sign in</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                values={email}
                onChange={handleChange("email")}
              />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                values={password}
                onChange={handleChange("password")}
              />
            </div>
            <input type="submit" value="Login" class="btn1 solid" />
            <p class="social-text">Or Sign in with social platforms</p>
            <div class="social-media">
              <a href="#" class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-google"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
          <form action="#" class="sign-up-form">
            <h2 class="title">Sign up</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" class="btn1" value="Sign up" />
            <p class="social-text">Or Sign up with social platforms</p>
            <div class="social-media">
              <a href="#" class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-google"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button
              class="btn1 transparent"
              id="sign-up-btn"
              onClick={() => {
                window.location.href = "/signup";
              }}
            >
              Sign Up
            </button>
          </div>
          <img src={logo} class="image" alt="" />
        </div>
        <div class="panel right-panel">
          <div class="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button class="btn1 transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img src={register} class="image" alt="" />
        </div>
      </div>
    </div>
  );
}
