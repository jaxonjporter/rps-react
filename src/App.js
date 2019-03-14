import React, { Component } from 'react';
import {Image, Col, Row, Container,  } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <Container className="bg-dark text-light text-center">
        <Row>
          <Col>
          <h1>Rock</h1>
          </Col>
          <Col>
          <h1>Paper</h1>
          </Col>
          <Col>
          <h1>Scissors</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
