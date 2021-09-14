import React from 'react';
import Post from "./Post/Post";
import "./posts.scss";
const Posts = () => {
    return (
        <div className="posts center-left" id="posts">
           <Post />
           <Post />
           <Post />
           <Post />
        </div>
    )
}

export default Posts
