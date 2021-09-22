import React from 'react';
import "../Header/Header.css";
import { CgSearch } from "react-icons/cg";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
function header(props) {
    return (
        <Router>
           <div className="header">
                <Link className="logo" to = "/">
                    <img src="../logo.png" />
                </Link >  
                <form onSubmit={props.handleSubmit} className="form-movie">
                    <input className ="search" placeholder="Search movie name..." onChange={props.handleSearch} value={props.searchMovie} />
                    <div className="search-icon" onClick={props.handleSubmit}><CgSearch /></div>
                </form>
           </div>
        </Router>
    );
}

export default header;