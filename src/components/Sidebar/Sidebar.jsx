import React from 'react';
import "./sidebar.scss";
import img from "../../images/profile.jpg";
const Sidebar = () => {
    return (
        <div className="sidebar" id="sidebar">
            <div className="sidebar-item">
                <h1 className="sidebar-title">About us</h1>
                <img src={img} alt="..." />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eos, animi sit! Quidem voluptate atque.
                </p>
            </div>
            <div className="sidebar-item">
                <h1 className="sidebar-title">Categories</h1>
                <div className="sidebar-list">
                    <ul className="cat-list">
                        <li>life</li>
                        <li>music</li>
                        <li>style</li>
                        <li>Sport</li>
                        <li>Tech</li>
                        <li>Cinema</li>
                    </ul>
                </div>
            </div>
            <div className="sidebar-item">
                <h1 className="sidebar-title">Follow us</h1>
                <div className="sidebar-list">
                    <ul className="links-media">
                            <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="/"><i className="fab fa-youtube"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
