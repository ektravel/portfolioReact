import React from "react";
import "./ProjectCard.css";

const ProjectCard = props => (
    <div className="card">
        <img className="projectCardImg" src={props.cardImgSrc} alt={props.cardImgAlt} />
        <div className="card-body">
            <h5 className="card-title">{props.projectTitle}</h5>
            <p className="card-text">{props.projectText}</p>
            <p>
                <a className="projectLink"
                    href={props.projectLink} target="_blank" rel="noopener noreferrer">
                    View Project <img id="arrow-right" src="images/arrow-right.png" alt="arrow" />
                </a>
            </p>
        </div>
    </div>
);

export default ProjectCard;


