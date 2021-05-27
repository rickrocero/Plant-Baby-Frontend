import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import PlantCard from "./components/PlantCard";
import Home from "./components/pages/Home";

class App extends React.Component {
  constructor(props) {
      super(props);
  };
  render = () => {
    return (
      <div>
        <NavBar></NavBar>
        <Home></Home>
      </div>
    );
  };
}

export default App;
