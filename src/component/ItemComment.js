import React from "react";
import { Link } from "react-router-dom";

export default function ItemComment(props) {
  const { auther, post, id } = props;
  return (
    <div>
      <div className="post-list" key={id}>
          <p className="app-topic" key={id}>{auther}</p>
        <p className="post">{post}</p>
      </div>

    </div>
    
  );
}
