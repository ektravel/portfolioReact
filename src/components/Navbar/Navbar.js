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
            <nav className="navbar navbar-expand-lg bg-transparent">
                <Link className="navbar-brand" to="/">
                     <img className="navbar-logo" src="./images/navLogo.png" alt="KM logo" /> 
                </Link>
                <button onClick={this.toggleNavbar} className={`${buttonClass}`} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className={`${navbarClass}`} id="navbarNav">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={this.toggleNavbar}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" onClick={this.toggleNavbar}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects" onClick={this.toggleNavbar}>Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/#contactSection" onClick={this.toggleNavbar}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;

// font-family: "Apercu",Helvetica,Arial,sans-serif;