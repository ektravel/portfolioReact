import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import "./About.css"

const About = () => {
    return (
        <div class="container-fluid">
            <div className="row justify-content-md-center about" id="aboutHeader">
                <div className="col-md-10">
                    <h1 id="animatedText">Constantly learning, constantly improving.</h1>
                </div>
            </div>

            <div className="row justify-content-md-center about">
                <div className="col-md-10">
                    <h2>About Me</h2>
                    <p>
                        I am a web developer based in Austin, TX. I enjoy working through challenges and complex problems and my previous experience as a senior buyer has taught me how to work with clients in an efficient and diplomatic way. I have a passion for research and learning new skills, a strong work ethic, and a desire to give back to the community. I enjoy being a part of a team but work equally well independently. Lately, I have been focused on mastering React, learning Python and familiarizing myself with AWS cloud computing services.
                    </p> 
                    <p>
                        When I am not in front of my computer, I try to spend time outdoors. If I am not working, you will most likely find me jogging on one of the Lady Bird Lake trails, attending a yoga class, or drinking a cold beer at one for the local breweries. I like to think of myself as a down-to-earth easy-to-connect-with person with a good (slightly odd) sense of humor. 
                    </p>
                    <p> 
                        I am open to contract work as well as a full-time employment in Austin, TX or remotely. If you hire me, you will get an outgoing hard-working employee who puts 100% of effort into every project and proactively looks for ways to contribute and help the team.
                    </p>
                </div>
            </div>

            <div className="row justify-content-md-center about">
                <div className="col-md-6">
                    <h2>Technical Skills</h2>
                    <ul className="aboutSkills">
                        <li>HTML5 / CSS3</li>
                        <li>Bootstrap</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>Node</li>
                        <li>React</li>
                        <li>GIT</li>
                        <li>MongoDB (limited)</li>
                        <li>AWS basics</li>
                        <li>SendGrid</li>
                        <li>Python3 (learning)</li>
                        <li>Domain Configuration</li>
                        <li>Production Deployment</li>
                    </ul>
                </div>
                <div className="col-md-4"><img id="headshotImg" src="./images/headshot.png" alt="headshot"/>
                </div>
            </div>

            <div className="row justify-content-md-center about">
                <div className="col-md-6">
                    <span>
                        <Link to="/images/EkaterinaMacedo_Resume_2019_online.pdf" target="_blank" rel="noreferrer noopener" className="btn btn-outline-dark" id="resumeLink">Download Resume</Link>
                    </span>
                </div>
                <div className="col-md-4">
                    <p>Ready to work together?</p>
                    <p>
                        <HashLink id="aboutPageContactLink" to="/#contactSection">contact me <img id="arrow-right" src="images/arrow-right.png" alt="arrow"></img></HashLink>
                    </p>
                </div>
            </div>
        </div>

    );
}


export default About;