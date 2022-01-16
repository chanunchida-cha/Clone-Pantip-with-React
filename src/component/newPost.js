import React from "react";

export default function NewPost(props) {
  const { items } = props;
  return (
    <div className="item-list" >
      {items.map((item)=>{
        <div key={item.id}>
          <p>topic:{item.topic}</p>
          <p>{item.post}</p>
          <p>{item.auther}</p>

        </div>
      })
      }



    </div>
  );
}
