import React from "react";
import { Link } from "react-router-dom";
import "./About.css"

const About = () => {
    return (
        <div class="container-fluid">
            <div className="row justify-content-md-center about" id="aboutHeader">
                <div className="col-md-10">
                    <h3>Constantly learning, constantly improving.</h3>
                </div>
            </div>

            <div className="row justify-content-md-center about">
                <div className="col-md-10">
                    <h2>About Me</h2>
                    <p>
                        I am a web developer currently living in Austin, TX. I enjoy working through challenges and complex problems and my previous experience as a senior buyer has taught me how to work with clients in an efficient and diplomatic way. I have a passion for application development, a strong work-ethic, and the ability to work independently as well as collaboratively in a team environment. If you hire me, you will get an outgoing hard-working employee who puts 100% of effort into every project and proactively looks for ways to contribute and help the team.
                    </p>
                </div>
            </div>

            <div className="row justify-content-md-center about">
                <div className="col-md-6">
                    <h2>Skills</h2>
                    <ul className="aboutSkills">
                        <li>Front-end Development</li>
                        <li>HTML5 / CSS3</li>
                        <li>CSS Frameworks (Bootstrap, Bulma, Skeleton)</li>
                        <li>Javascript</li>
                        <li>jQuery</li>
                        <li>ES6</li>
                        <li>Node.Js</li>
                        <li>React</li>
                        <li>GIT</li>
                        <li>Heroku</li>
                        <li>MongoDB (limited)</li>
                        <li>MySQL (limited)</li>
                    </ul>
                </div>
                <div className="col-md-4"><img id="headshotImg" src="./images/headshot.png" alt="headshot"/>
                </div>
            </div>

            <div className="row justify-content-md-center about">
                <div className="col-md-6">
                    <span>
                        <Link to="/images/Ekaterina_Macedo_Resume.pdf" target="_blank" rel="noreferrer noopener" className="btn btn-outline-dark" id="resumeLink">Download Resume</Link>
                    </span>
                </div>
                <div className="col-md-4">
                    <p>Ready to work together?</p>
                    <p>
                        <Link id="aboutPageContactLink" to="/contact">contact me <img id="arrow-right" src="images/arrow-right.png" alt="arrow"></img></Link>
                    </p>
                </div>
            </div>
        </div>

    );
}


export default About;