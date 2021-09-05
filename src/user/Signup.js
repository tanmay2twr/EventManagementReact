import React, { Component, useState } from "react";
import "./style.css";
import register from "../img/register.svg";
import axios from "axios";
import Dialogg from "./Dialogg";

export class Signup extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: "",
            region: "",
            myEvents:[],

        }
    }

    handleChange = name => event => {
        this.setState({ ...this.state, [name]: event.target.value });
    };
    onSubmit = (event) => {
        event.preventDefault();
console.log(this.state);
        axios.post("http://localhost:8000/user", this.state)
            .then((response) => response.data)
            .then(data => {
                if (data.email === this.state.email) {
                    console.log("Sign up Successfull!!!");
                    <Dialogg msg="Sign up Successfull!!!" />
                    window.location.href = "/signin"
                }
            })
            .catch(error => {
                alert("Sign Up Failed!!!")
                console.log("Signup request failed")
            });
    }

    signin = () => {
        window.location.href = "/signin";
    };
    render() {

        const { name, email, password, region } = this.state;
        return (
            <div class="container1 sign-up-mode">
                <div class="forms-container1 ">
                    <div class="signin-signup ">

                        <form onSubmit={this.onSubmit} class="sign-up-form ">
                            <h2 class="title">Sign up</h2>
                            <div class="input-field">
                                <i class="fas fa-user"></i>
                                <input type="text" placeholder="Full Name" value={name} onChange={this.handleChange("name")} />
                            </div>
                            <div class="input-field">
                                <i class="fas fa-envelope"></i>
                                <input type="email" placeholder="Email" value={email} onChange={this.handleChange("email")} />
                            </div>
                            <div class="input-field">
                                <i class="fas fa-lock"></i>
                                <input type="password" placeholder="Password" value={password} onChange={this.handleChange("password")} />
                            </div>
                            <div class="input-field">
                                <i class="fas fa-city"></i>
                                <input type="text" placeholder="Region" value={region} onChange={this.handleChange("region")} />
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
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Debitis, ex ratione. Aliquid!
                            </p>
                            <button class="btn1 transparent" id="sign-up-btn">
                                Sign up
                            </button>
                        </div>
                        <img src="../img/log.svg" class="image" alt="" />
                    </div>
                    <div class="panel right-panel">
                        <div class="content">
                            <h3>One of us ?</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                                laboriosam ad deleniti.
                            </p>
                            <button
                                class="btn1 transparent"
                                id="sign-in-btn"
                                onClick={this.signin}
                            >
                                Sign in
                            </button>
                        </div>
                        <img src={register} class="image" alt="" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;
