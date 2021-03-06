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
                    <div className="container-fluid">
                        <div className="row justify-content-md-center" id="homeSection">
                            <div className="col-md-10">
                                <h1 id="homeHeader">Hi, I'm Katya Macedo.</h1>
                                <h3>A junior developer passionate about learning new technologies.</h3>
                                <p className="homeP">
                                I am a self-motivated learner with a strong attention to details and a drive to write beautiful, well-designed code.
                                <br/>
                                Lately, I have been focused on mastering <span id="react">React</span>, learning Python and AWS cloud computing.
                                </p>
                            </div>
                        </div>
                        <div className="row justify-content-md-center" id="homeProjectsHeader">
                            <div className="col-md-10"> 
                                <h2>Recent Projects</h2>
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
                            cardImgSrc="./images/the-onion.png"
                            cardImgAlt="Mongo Scraper"
                            projectTitle="Mongo Scraper"
                            projectText="Mongoose and Cheerio used to scrape news from The Onion."
                            projectLink="https://cryptic-retreat-79047.herokuapp.com/"
                            />
                        </div>
                        <div className="row justify-content-md-center" id="homeProjectsBtn">
                            <div className="col-md-10" id="homeProjectsLink">
                                <Link to="/projects" target="_blank" rel="noreferrer noopener" className="btn btn-outline-dark" >View Projects</Link>
                            </div>
                        </div>
                        <Contact />
                    </div>
                {/* <Contact /> */}
            </div>
        );
    }
};


export default Home;