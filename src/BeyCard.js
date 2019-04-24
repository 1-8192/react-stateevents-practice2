import React from "react";

const BeyCard = (props) => {
  
  return (
    <div>
      <h3>{props.name}</h3>
      <img alt={props.name} src={props.img} onClick={() => {props.handleClick(props.beyId)}}/>
    </div>
  );
}

export default BeyCard;
