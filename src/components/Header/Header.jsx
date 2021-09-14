import React from 'react';
import "./header.scss";
import img from "../../images/profile.jpg";
const Header = () => {
    return (
        <div id="header">
            <div className="headerTitles">
                   <div className="headerTitleSm"> React &amp; Node</div>
                   <div className="headerTitleLg">Blog</div>
            </div>
            <img className="headerImg" alt="myImage" src={img}/>
        </div>
    )
}

export default Header
