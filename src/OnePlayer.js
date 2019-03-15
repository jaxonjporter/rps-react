import React, {Component, } from "react";
import update from 'immutability-helper';


class OnePlayer extends Component {
  state = { player: {rock: false, paper:false, scissors:false,},
            computer: ["rock", "paper", "scissors"],
            random: ""
          }
  
  handleClick = () => this.setState({players: update(this.state.players, {rock: {$set: !this.state.player.rock}})})


  componentDidUpdate(){
    if (this.state.rock)
    console.log("you updated state")
  }
  render () {
    return (
      <div className="col-12">
        <h3 style={{color: "#a3a3a3"}}>Pick Your Weapon</h3>
        <div class="row">
        <div className="col-4" onClick={this.handleClick}>
        <h1>Rock</h1>

        </div>
        <div className="col-4">
        <h1>Paper</h1>

        </div>
        <div className="col-4">
        <h1>Scissors</h1>

        </div>
        </div>
      </div>
    )
  }
}



export default OnePlayer