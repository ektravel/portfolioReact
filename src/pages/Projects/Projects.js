import React from "react";
import "./Projects.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard.js";

const Projects = () => {
    return (
        <div class="container-fluid">
            <div className="row justify-content-md-center">
                <div className="col-md-12">
                    <h3 id="projectsHeader">Projects</h3>
                </div>
            </div>
            <div className="row justify-content-md-center projectsPage">

                <ProjectCard
                cardImgSrc = "./images/inti-provisions.png"
                cardImgAlt = "Inti Provisions"
                projectTitle = "Inti Provisions"
                projectText = "Company website built using React."
                projectLink = "http://www.intiprovisions.com/"
                />                
                <ProjectCard
                cardImgSrc = "./images/duck-tales.png"
                cardImgAlt = "Ducktales"
                projectTitle = "Ducktales"
                projectText = "Memory game built using React."
                projectLink = "https://stormy-earth-97502.herokuapp.com/"
                />
                <ProjectCard
                cardImgSrc = "./images/the-onion.png"
                cardImgAlt = "Mongo Scraper"
                projectTitle = "Mongo Scraper"
                projectText = "Mongoose and Cheerio used to scrape news from The Onion."
                projectLink = "https://cryptic-retreat-79047.herokuapp.com/"
                />
                <ProjectCard
                cardImgSrc = "./images/feed-me-tacos.png"
                cardImgAlt = "Feed Me Tacos"
                projectTitle = "Feed Me Tacos"
                projectText = "A logger created using MySQL, Node, Express, Handlebars and MVC."
                projectLink = "https://morning-cliffs-50595.herokuapp.com/"
                />
                <ProjectCard
                cardImgSrc = "./images/friend-finder.png"
                cardImgAlt = "Friend Finder"
                projectTitle = "Friend Finder"
                projectText = "Full-stack app. Express used to handle routing."
                projectLink = "https://blooming-sierra-90590.herokuapp.com/"
                />
                <ProjectCard
                cardImgSrc = "./images/edc.png"
                cardImgAlt = "Eat Drink Cook"
                projectTitle = "Eat Drink Cook"
                projectText = "Team Project 1: Used three APIs and AJAX to pull data."
                projectLink = "https://ektravel.github.io/TeamProject1"
                />                
                <ProjectCard
                cardImgSrc = "./images/italy-train.png"
                cardImgAlt = "Florence Train Schedule"
                projectTitle = "Train Schedule"
                projectText = "Firebase used to host data. Information is retrieved and manipulated with Moment.js."
                projectLink = "https://ektravel.github.io/trainScheduler/"
                />
                <ProjectCard
                cardImgSrc = "./images/giftastic.png"
                cardImgAlt = "GifTastic"
                projectTitle = "GifTastic"
                projectText = "GIPHY API. JavaScript and jQuery used to change HTML. Click image for animation."
                projectLink = "https://ektravel.github.io/GifTastic/"
                />
                <ProjectCard
                cardImgSrc = "./images/trivia.png"
                cardImgAlt = "Trivia Game"
                projectTitle = "Trivia Game"
                projectText = "JavaScript used for the logic and jQuery used to manipulate HTML."
                projectLink = "https://ektravel.github.io/TriviaGame/"
                />                
                <ProjectCard
                cardImgSrc = "./images/magic-sushi.png"
                cardImgAlt = "Sushi Collector Game"
                projectTitle = "Sushi Collector Game"
                projectText = "Dynamically updated HTML pages powered by the jQuery library."
                projectLink = "https://ektravel.github.io/unit-4-game/"
                />
                <ProjectCard
                cardImgSrc = "./images/its-italian.png"
                cardImgAlt = "Word Guess Game"
                projectTitle = "It's Italian!"
                projectText = "Dynamically updated HTML and CSS powered by JavaScript and jQuery."
                projectLink = "https://ektravel.github.io/italian-food/"
                />   
            </div>
        </div>
    );
}


export default Projects;

