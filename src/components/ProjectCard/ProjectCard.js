import React from "react";
import "./ProjectCard.css";

const ProjectCard = props => (
    <div className="card col-md-3">
        <img className="projectCardImg card-img-top" src={props.cardImgSrc} alt={props.cardImgAlt} />
        <div className="card-body">
            <h5 className="card-title">{props.projectTitle}</h5>
            <p className="card-text">{props.projectText}</p>
            <p>
                <a className="projectLink card-link"
                    href={props.projectLink} target="_blank" rel="noopener noreferrer">
                    View Project <img id="arrow-right" src="images/arrow-right.png" alt="arrow" />
                </a>
            </p>
        </div>
    </div>
);

export default ProjectCard;


// text-center