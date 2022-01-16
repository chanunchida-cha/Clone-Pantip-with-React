import React from "react";
import { Link } from "react-router-dom";
import './ItemPost.css'
export default function ItemPost(props) {
  const { auther, topic, post, id } = props;
  return (
    <div>
      <div className="post-list" key={id}>
        <Link to={`/post/${id} `}>
          <p className="app-topic" key={id}>{topic}</p>
        </Link>
        <p className="post">{post}</p>
        
      </div>
     

    </div>
    
  );
}
