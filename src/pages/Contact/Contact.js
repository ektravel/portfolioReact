import React from "react";
import "./Contact.css";
import MapView from "../../components/MapView/MapView";

const Contact = () => {
    return (
        <div className="row justify-content-md-center contact">
            <div className="col-md-5">
            <MapView/>
            </div>
            <div className="col-md-7">Content</div>
         
        </div>
    );
}

 
export default Contact;