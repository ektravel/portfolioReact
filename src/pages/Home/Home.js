import React, { Component } from "react";
import "./Home.css";
import Contact from "../Contact/Contact.js";
import ProjectCard from "../../components/ProjectCard/ProjectCard.js";
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div className="container-fluid">
            <div id="homeBanner">
            </div>
                <div className="row">
                    <div className="col-md-12">
                        <h3>Hi, I'm Katya Macedo</h3>
                        <h4>a web developer focused on React.</h4>

                        <p>
                            I am passionate about coding and enjoy delivering compelling front end software solutions.
                        </p>
                        <p>
                            I am a self-motivated, independent learner with a strong attention to details and a drive to write beautiful, well-designed code. </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9">
                        <h3>Recent Projects</h3>
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
                        <Link to="/projects" target="_blank" rel="noreferrer noopener" className="btn btn-outline-dark">projects</Link>
                    </div>
                </div>
                <Contact />
            </div>
        );
    }
};


export default Home;