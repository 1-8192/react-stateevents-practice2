import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BeyContainer from './BeyContainer'
import Favorites from './Favorites'

class App extends Component {

  state = {
    beys: []
  }

  componentDidMount() {
    fetch('http://localhost:4000/beys')
      .then(response => response.json())
      .then(beysData => this.setState({beys: beysData}))
  };

   favoriteBeys = () => {
    return this.state.beys.filter(bey => bey.favorite === true)
  }

   handleClick = (clickedBey) => {
     // Bad because it breaks React conventions
     // let newBey = this.state.beys.find(bey => bey.id === clickedBey)
     // newBey.favorite = !newBey.favorite
     // let newBeyArray = [...this.state.beys]
     // this.setState({
     //   beys: newBeyArray
     // })

     //preserves state conventions
     const newBeys = this.state.beys.map(bey => {
       if (bey.id === clickedBey) {
         return {...bey, favorite: !bey.favorite}
       } else {
         return bey
       }
     })
     this.setState({
       beys: newBeys
     })
  }

  render() {
  return (
    <div className="container">
      <BeyContainer beys={this.state.beys} handleClick={this.handleClick}/>
      <Favorites favoriteBeys = {this.favoriteBeys()} handleClick={this.handleClick}/>
    </div>
  );
}

};

export default App;
