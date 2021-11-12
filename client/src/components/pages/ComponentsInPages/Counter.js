import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";


class Counter extends Component {

  render() {
    return (
      <div style={{display: this.props.unique === 0 ? "none" : "flex",}}>
        <Col>
        <Button onClick={() => this.props.onIncrement(this.props.counter)}>
          +
        </Button>
        
        <Col>
        </Col>
        <Button onClick={() => this.props.onDecrease(this.props.counter)}>
          -
        </Button>
        </Col>
      </div>
    );
  }
}

export default Counter;