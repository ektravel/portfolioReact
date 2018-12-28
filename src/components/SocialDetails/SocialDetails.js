import React from "react";
import "./SocialDetails.css";

const SocialDetails = (props) => {
    return (
        <div className={props.footerElement}>
            <a className={props.socialIcon} 
            href={props.socialLink} target="_blank" rel="noopener noreferrer">
                <img className={props.socialImage} src={props.socialImageSrc} alt={props.socialImageAlt} />
            </a>
        </div>
    );
}


export default SocialDetails;

