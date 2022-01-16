import React, { useState } from "react";
import'./comment.css'

let genID = 0;

export default function Comment(props) {
  const [auther, setAuther] = useState("");
  const [post, setPost] = useState("");

  const inputAuther = (event) => {
    setAuther(event.target.value);
  };

  const inputPost = (event) => {
    setPost(event.target.value);
  };

  const saveItem =(event)=> {
    event.preventDefault();
    const itemData = {
        postId: props.post.id,
        id:genID ++,
        auther:auther,
        post:post,
    }
    console.log("itemData",itemData);
    props.onAddNewComment(itemData)
    setAuther("")

    setPost("")
    
}



  return (
    <center>
      <h1>Comment</h1>
    <div className="container">
      <div className="bgg">
      <form onSubmit={saveItem}>
        <div >
          <label className="text">Username</label>
          <p></p>
          <input type="text" placeholder="username" className="username" onChange={inputAuther} value={auther} />
        </div>
        <div >
          <label className="text">Comment</label>
          <p></p>
          <textarea
            rows="6"
            type="text"
            name="content"
            placeholder="What's happen?"
            className="content"
            onChange={inputPost}
            value={post}
          ></textarea>
        </div>
        <div>
          <button type="submit" className="btn-post" >
            comment
          </button>
        </div>
      </form>
      </div>
    </div>
    </center>
  );
}
