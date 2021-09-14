import React from 'react'
import Header from "../../components/Header/Header";
import Posts from '../../components/Posts/Posts';
import Sidebar from '../../components/Sidebar/Sidebar';
import "./home.scss";
const Home = () => {
    return (
        <>
        <Header />
        <div id="home">
            <Posts />
            <Sidebar />
        </div>
        </>
    )
}

export default Home
