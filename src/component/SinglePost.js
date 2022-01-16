import React from 'react'
import Comment from './comment';
import './SinglePost.css'


export default function SinglePost(props) {
    const {post} = props
    console.log("single",props);


    return (
        <center>
        <div className="single-post" key={post.id}>
            <div className="post-topic">
            {post.topic}
            </div>
            <div className="post-detail">
            
                {post.post}
            </div>
            <hr />
            <div>{post.auther}</div>
            
           

            
        </div>
        <p></p>
        {/* <div>
            <Comment/>
            </div> */}
        </center>
    )
}
