import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import '../../bootstrap.min.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = { 
            isNavbarCollapsed: true
         };
    }
    toggleNavbar() {
        this.setState({ 
            isNavbarCollapsed: !this.state.isNavbarCollapsed
         });
    }

    render() {
        const collapsed = this.state.isNavbarCollapsed;
        const navbarClass = collapsed 
            ? "collapse navbar-collapse" 
            : "collapse navbar-collapse show";
        const buttonClass = collapsed 
            ? "navbar-toggler navbar-toggler-right collapsed custom-toggler" 
            : "navbar-toggler navbar-toggler-right custom-toggler";
    
        return (
            <nav className="navbar navbar-expand-lg ">
                <Link className="navbar-brand" to="/">
                <img className="navbar-logo" src="./images/Logotype.png" alt="inti logo" />
                </Link>
                <button onClick={this.toggleNavbar} className={`${buttonClass}`} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"/>
                </button>

                <div className={`${navbarClass}`} id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" onClick={this.toggleNavbar}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products" onClick={this.toggleNavbar}>Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" onClick={this.toggleNavbar}>Contact</Link>
                        </li>
                    </ul>
                   
                    <ul className="social">
                        <li className="social-item"><a className="social-link facebook" href="https://www.facebook.com/intiprovisions" target="_blank" rel= "noopener noreferrer"><img className="socialImage" src="/images/social_media_facebook_white.png" alt="facebook icon" /></a></li>
                        <li className="social-item"><a className="social-link twitter" href="https://twitter.com/IntiProvisions" target="_blank" rel= "noopener noreferrer"><img className="socialImage" src="/images/social_media_twitter_white.png" alt="twitter icon" /></a></li>
                        <li className="social-item"><a className="social-link instagram" href="https://www.instagram.com/intiprovisions/" target="_blank" rel= "noopener noreferrer"><img className="socialImage" src="/images/social_media_instagram_white.png" alt="instagram icon" /></a></li>
                        <li className="social-item"><a className="social-link pinterest" href="https://www.pinterest.com/intiprovisions/" target="_blank" rel= "noopener noreferrer"><img className="socialImage" src="/images/social_media_pinterest_white.png" alt="pinterest icon" /></a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;

// font-family: "Apercu",Helvetica,Arial,sans-serif;