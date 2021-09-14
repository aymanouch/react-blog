import React, {useState} from 'react'
import "./topBar.scss";
import img from "../../images/profile.jpg";
const TobBar = () => {
    const [bars, setBars] = useState(false);

    const toggleClose = (setBars)=> {
        setBars(!bars);
    }    
    return (
        <div className="topbar center-elements">
            <div className="navbar-container__grid">
                <div className="list-links__container">
                    <div className="icon-btn" onClick={()=>{toggleClose(setBars)}}><i className={`fa fa-${bars ? "times": "bars" }`}></i></div>
                <ul className={`hide-${bars ? "none" : "width"}`}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">register</a></li>
                    <li><a href="/">log in</a></li>
                    <li className="search-item"><input type="text" placeholder="search" /><i className="fa fa-search"></i></li>
                    <li>
                        <ul>
                            <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="/"><i className="fab fa-youtube"></i></a></li>
                        </ul>
                    </li>
                </ul>
                </div>
                <div className="blog-logo">forbes</div>
                <div className="btn-register">
                    <a href="/">
                        log in
                    </a>
                    <button>
                        register
                    </button>
                    <div className="profile-users">
                        <img alt="myImage" src={img} />
                    </div>
                </div>
            </div>
        </div>
    )
}



export default TobBar
