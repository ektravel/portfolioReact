import React from "react";
import { Link } from "react-router-dom";
import "./About.css"

const About = () => {
    return (
        <div className="conainer">
            <div className="row justify-content-md-center about">
                    <h2>Constantly learning and ready to experiment with new technologies.</h2>
            </div>

            <div className="row justify-content-md-center about">
                <div className="col-md-9">
                    <h2>About Me</h2>
                    <p>
                        I am a web developer currently living in Austin, TX. I enjoy working through challenges and complex problems and my previous experience as a senior buyer has taught me how to work with clients in an efficient and diplomatic way. I have a passion for application development, a strong work-ethic, and the ability to work independently as well as collaboratively in a team environment. If you hire me, you will get an outgoing hard-working employee who will  put 100% of effort into every project, and proactively look for ways to contribute and help the team.
                    </p>
                </div>
            </div>

            <div className="row justify-content-md-center about">
                <div className="col-md-9">
                    <h2>Skills</h2>
                    <ul className="aboutSkills">
                        <li>Front-end Development</li>
                        <li>HTML5 / CSS3</li>
                        <li>CSS Frameworks (Bootstrap, Bulma, Skeleton)</li>
                        <li>Javascript</li>
                        <li>jQuery</li>
                        <li>ES6</li>
                    </ul>

                    <ul className="aboutSkills">
                        <li>Node.Js</li>
                        <li>React</li>
                        <li>GIT</li>
                        <li>Heroku</li>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                    </ul>
                </div>
            </div>

            <div className="row justify-content-md-center about">
                <div className="col-md-9">
                    <span>
                        <Link to="/images/EkaterinaMacedo_Resume.pdf" target="_blank" rel="noreferrer noopener" id="resumeLink">Download Resume</Link>
                    </span>

                </div>
            </div>
            <div className="row justify-content-md-center about">
            <div className="col-md-9">
            <p>Ready to work together?</p>
            <p>
            <Link to="/contact">contact me <img id="arrow-right" src="images/arrow-right.png"></img></Link>
                 </p>
            </div>

        </div>
        </div>
       
    );
}


export default About;