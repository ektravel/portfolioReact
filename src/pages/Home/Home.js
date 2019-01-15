import React, { Component } from "react";
import "./Home.css";
import Contact from "../Contact/Contact.js";
import ProjectCard from "../../components/ProjectCard/ProjectCard.js";
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
                <div id="homeBanner"></div>
                
                <div className="row justify-content-md-center" id="homeSection">
                    <div className="col-md-10">
                        <h1>Hi, I'm Katya Macedo</h1>
                        <h3>a web developer focused on <span id="react">React</span></h3>
                        <p className="homeP">
                            I am passionate about coding and enjoy delivering compelling front end software solutions.
                        <br/>
                            I am a self-motivated, independent learner with a strong attention to details and a drive to write beautiful, well-designed code. 
                        </p>
                        <h3>Recent Projects</h3>
                    </div>
                </div>
                <div className="row justify-content-md-center" id="homeProjects">
                    <ProjectCard
                        cardImgSrc="./images/inti-provisions.png"
                        cardImgAlt="Inti Provisions"
                        projectTitle="Inti Provisions"
                        projectText="Company website built using React."
                        projectLink="http://www.intiprovisions.com/"
                    />
                    <ProjectCard
                        cardImgSrc="./images/duck-tales.png"
                        cardImgAlt="Ducktales"
                        projectTitle="Ducktales"
                        projectText="Memory game built using React."
                        projectLink="https://stormy-earth-97502.herokuapp.com/"
                    />
                    <ProjectCard
                        cardImgSrc = "./images/the-onion.png"
                        cardImgAlt = "Mongo Scraper"
                        projectTitle = "Mongo Scraper"
                        projectText = "Mongoose and Cheerio used to scrape news from The Onion."
                        projectLink = "https://cryptic-retreat-79047.herokuapp.com/"
                    />
                </div>    
                <div className="row justify-content-md-center" id="homeProjectsBtn"> 
                    <div className="col-md-10" id="homeProjectsLink">  
                        <Link to="/projects" target="_blank" rel="noreferrer noopener" className="btn btn-outline-dark" >View Projects</Link>
                    </div>
                </div>
                <Contact />
            </div>
        );
    }
};


export default Home;