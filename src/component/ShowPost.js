import React from "react";
import ItemPost from "./ItemPost";

export default function ShowPost(props) {
  const { items,handleDelete} = props;


  return (
    <center>
    <div className="container-post" >
        {items.map((element) => {
          console.log(element);
          console.log("idShowpost",element.id);
          return( 
            <div  key={element.id}>

            <ItemPost {...element} id={element.id} />
            {/* <button className="btn-edite" onClick={()=>{editPost(element.id)}}>Edite</button> */}
            <button className="btn-delete" onClick={()=> handleDelete(element.id)}>Delete</button>
            </div>
          )

        })}
    </div>
    </center>
  );
}
