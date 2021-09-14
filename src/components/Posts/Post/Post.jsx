import React from 'react'
import "./post.scss";
import img from "../../../images/postImg.jpg";
const Post = () => {
    return (
        <div className="post">
            <img 
               className="post-image"
               alt='post name'
               src={img}
               />
               <div className="postInfo">
                   <div className="postCats">
                        <span className="music">music</span>
                        <span className="life">life</span>
                   </div>
                   <span className="postTitle">
                       Title for this post
                   </span>
                   <span className="postDate">1 hour ago</span>
               </div>
               <p className="postDesc">
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.Fuga veniam distinctio quas minus commodi magni autem consectetur
                   deserunt! Dolorum consectetur amet atque, vero harum explicabo non mollitia voluptate veniam temporibus.
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.Fuga veniam distinctio quas minus commodi magni autem consectetur
                   deserunt! Dolorum consectetur amet atque, vero harum explicabo non mollitia voluptate veniam temporibus.
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.Fuga veniam distinctio quas minus commodi magni autem consectetur
                   deserunt! Dolorum consectetur amet atque, vero harum explicabo non mollitia voluptate veniam temporibus.
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.Fuga veniam distinctio quas minus commodi magni autem consectetur
                   deserunt! Dolorum consectetur amet atque, vero harum explicabo non mollitia voluptate veniam temporibus.
               </p>
        </div>
    )
}

export default Post
