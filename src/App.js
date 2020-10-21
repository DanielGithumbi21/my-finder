import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Post from "./components/post/post";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/home/home";
import Find from "./components/find/find";
import About from "./components/aboutUs/about";
import Contact from "./components/contact/contact";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/find" component={Find} />
        <Route path="/about" component={About} />
        <Route path="/post" component={Post} />
        <Route path="/contact" component={Contact} />
        <footer>
          <div className="col-12">
            <hr className="light" />
            <h5 style={{ textAlign: "center" }}>&copy; myFinder</h5>
          </div>
        </footer>
      </Router>
    );
  }
}

export default App;
