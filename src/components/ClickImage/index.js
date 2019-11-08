import React from "react";
import "./index.css";
function ClickImage(props) {
  return (
    <div onClick={() => props.handleImageClick(props.id)}>
      <img className="character-image" src={props.image} />
    </div>
  );
}
export default ClickImage;