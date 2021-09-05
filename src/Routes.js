import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import UserDashBoard from "./user/UserDashBoard";
import Signout from "./user/Signout";
import Footer from "./core/Home/Footer";
import Navbar from "./core/Home/Navbar";
import AddEvent from "./user/AddEvent";
import MyEvent from "./user/MyEvent";
const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signout" exact component={Signout} />
        <Route path="/user/dashboard" exact component={UserDashBoard} />
        <Route path="/addevents" exact component={AddEvent} />
        <Route path="/myevents" exact component={MyEvent} />

      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
