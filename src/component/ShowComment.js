import React from "react";
import ItemComment from "./ItemComment";


export default function ShowComment(props) {
  const {comment,commentDelete} = props;
  


  return (
    <center>
    <div className="container-post" >
        {comment.map((element) => {
          console.log(element);
          console.log("idShowpost",element.id);
          return( 
            <div  key={element.id}>

            <ItemComment {...element} id={element.id} />
            <button className="btn-edite" >Edite</button>
            <button className="btn-delete" onClick={()=> commentDelete(element.id)}>Delete</button>
            </div>
          )

        })}
    </div>
    </center>
  );
}
