import React, { Component } from 'react';
import twoPlayer from "./images/twoplayers.svg"
import onePlayer from "./images/oneplayer.svg"
import OnePlayer from "./OnePlayer.js"
import {Image, Col, Row, Container, Button,  } from "react-bootstrap";

class App extends Component {
  state = {
    onePlayer: true,
    twoPlayer: "false",
    game: false,
    rps: { rock: false, paper: false, scissors: false,}
  }

  toggleOnePlayer = () => this.setState({onePlayer: !this.state.onePlayer})

  toggletwoPlayer = () => this.setState({twoPlayer: !this.state.twoPlayer})

  

  render() {
    return (
      <Container className="bg-dark text-light text-center mt-5 shadow-lg rounded" style={{minHeight: "450px"}}>
        <Row>
          <Col xs={12}>
            <h1>Welcome To Rock Paper scissors</h1>
          </Col>
          {this.state.onePlayer ? 
          <Row>
            <Col xs={6}>
              <Button variant="outline-primary" onClick={this.toggleOnePlayer} style={{height: "300px", width: "100%", marginLeft: "30%"}}><Image src={onePlayer} style={{ height: "280px"}} /></Button>
            </Col>
            <Col xs={6}>
              <Button variant="outline-warning" style={{ height: "300px", width: "100%", marginLeft: "50%"}}><Image src={twoPlayer} style={{ width:"100%"}} /></Button>
            </Col> 
          </Row> : <OnePlayer />}
        </Row>
      </Container>
    );
  }
}

export default App;
