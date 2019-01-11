import React from "react";
import "./Contact.css";
import MapView from "../../components/MapView/MapView";

const Contact = () => {
    return (
        <div className="row contact" id="contactSection">
            <div className="col-md-4">
                <MapView />
            </div>
            <div className="col-md-8">
                <h2 id="contactHeader">Contact</h2>
                <div id="address">
                    <p>
                        Have questions? Ready to work together?
                    <br />
                        You can reach me via email at <span id="email">ekaterina.macedo@gmail.com</span>.
                    </p>
                    <p>
                        I am also on
                        <a className="contactPageLinks"
                            href="https://www.linkedin.com/in/ekaterina-macedo" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>,
                        <a className="contactPageLinks"
                            href="https://www.instagram.com/bigworldtrvl/" target="_blank" rel="noopener noreferrer">
                            Instagram
                        </a>,
                        <a className="contactPageLinks"
                            href="https://github.com/ektravel" target="_blank" rel="noopener noreferrer">
                            Github
                        </a>, and
                        <a className="contactPageLinks"
                            href="https://www.codewars.com/users/ektravel/" target="_blank" rel="noopener noreferrer">
                            CodeWars
                        </a>.
                    </p>
                </div>
            </div>
        </div>
    );
}


export default Contact;