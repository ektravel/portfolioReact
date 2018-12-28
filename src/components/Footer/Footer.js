import React, {Component} from 'react';
import "./Footer.css";
import SocialDetails from "../SocialDetails";

class Footer extends Component {
    render() {
    return (
        <footer className= "footer text-muted text-center">
            <div className="row">
                <div className="col-md-6">
                    <p id="footerText">Copyright © Katya Macedo - All rights reserved</p>
                </div>
                <div className="col-md-6">
                <SocialDetails
                footerElement = "social-item"
                socialIcon = "social-link instagram"
                socialLink = "https://www.instagram.com/bigworldtrvl/"
                socialImage = "socialImage"
                socialImageSrc = "/images/instagram.svg"
                socialImageAlt = "instagram icon"/>

                <SocialDetails
                footerElement = "social-item"
                socialIcon = "social-link linkedin"
                socialLink = "https://www.linkedin.com/in/ekaterina-macedo"
                socialImage = "socialImage"
                socialImageSrc = "/images/linkedin.svg"
                socialImageAlt = "linkedin icon"/>

                <SocialDetails
                footerElement = "social-item"
                socialIcon = "social-link github"
                socialLink = "https://github.com/ektravel "
                socialImage = "socialImage"
                socialImageSrc = "/images/github.svg"
                socialImageAlt = "github icon"/>

                <SocialDetails
                footerElement = "social-item"
                socialIcon = "social-link codewars"
                socialLink = "https://www.codewars.com/users/ektravel/"
                socialImage = "socialImage"
                socialImageSrc = "/images/codewars.svg"
                socialImageAlt = "codewars icon"/>
                </div>
            </div>
            
        </footer>
    );
}
}
export default Footer;


