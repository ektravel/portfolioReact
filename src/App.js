import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './bootstrap.min.css';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home.js";
import About from "./pages/About/About.js";
import Projects from "./pages/Projects/Projects.js";
import Contact from "./pages/Contact/Contact.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div id="secondRoot">
          <Navbar/>
            <div id="main">
              <Route exact path = "/" component={Home}/>
              <Route exact path = "/about" component={About}/>
              <Route exact path = "/products" component={Projects}/>
              <Route exact path = "/contact" component={Contact}/>
            </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
