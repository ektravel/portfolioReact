import React from "react";
import "./Projects.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard.js";

const Projects = () => {
    return (
        <div className="row">
            <div className="col-md-9">
                <ProjectCard/>;
            </div>
        </div>
    );
}


export default Projects;