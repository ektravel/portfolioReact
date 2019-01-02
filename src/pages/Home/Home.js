import React, { Component } from "react";
import "./Home.css";
import Contact from "../Contact/Contact.js";

class Home extends Component {
    render() {
        return (
            <div>
                <div>Home page</div>
                <Contact/>

            </div>
        );
    }
};


export default Home;