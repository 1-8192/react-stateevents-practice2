import React, { Component } from "react";
import BeyCard from './BeyCard'

export default class Favorites extends Component {

  render() {
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {this.props.favoriteBeys.length > 0 ? this.props.favoriteBeys.map(bey => <BeyCard beyId={bey.id} name={bey.name} img={bey.img} handleClick={this.props.handleClick}/>) : null}
      </div>
    );
  }
}
