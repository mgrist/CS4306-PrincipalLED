import React from "react";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import './Counter.css';


export default function Counter() {
  return (
      <div className="wrapper">
        <Col>
        <Button id="bttn1">
          +
        </Button>
        </Col>

        <Col>
        <Button id="bttn2">
          -
        </Button>
        </Col>
      </div>
  );
}