import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import PlantCard from "./components/PlantCard";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Store from "./components/pages/Store";
import Profile from "./components/pages/Profile";
import Post from "./components/pages/Post";

class App extends React.Component {
  constructor(props) {
      super(props);
  };
  render = () => {
    return (
      <div>
        <NavBar></NavBar>
        {/* <Home></Home> */}
        {/* <Login></Login> */}
        {/* <Signup></Signup> */}
        {/* <Store></Store> */}
        {/* <Profile></Profile> */}
        <Post></Post>
      </div>
    );
  };
}

export default App;
