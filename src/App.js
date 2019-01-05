import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './bootstrap.min.css';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

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
              <Route exact path = "/#contactSection" component={Contact}/>
            </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
