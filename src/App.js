import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Store from "./components/pages/Store";
import Profile from "./components/pages/Profile";
import Post from "./components/pages/Post";
import Wrapper from './components/Wrapper/index'

function App() {

  return (
    <div>
      {/* <Home></Home> */}
      {/* <Store></Store> */}
      <Router>
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/store" component={Store} />
          <Route exact path="/post" component={Post} />
        </Wrapper>
      </Router>
      {/* <Post></Post> */}
    </div>
  );

}

export default App;
