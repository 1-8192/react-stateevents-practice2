import React from "react";
import BeyCard from './BeyCard'

const BeyContainer = (props) => {

    return (
      <div className="index">
        <h1>Index</h1>
        {props.beys.map(bey => <BeyCard beyId={bey.id} name={bey.name} img={bey.img} handleClick={props.handleClick}/>)}
      </div>
    );
}

export default BeyContainer;
