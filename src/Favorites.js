import React, { Component } from "react";
import BeyCard from './BeyCard'

const Favorites = (props) => {

    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {props.favoriteBeys.length > 0 ? props.favoriteBeys.map(bey => <BeyCard beyId={bey.id} name={bey.name} img={bey.img} handleClick={props.handleClick}/>) : null}
      </div>
    );
}

export default Favorites
