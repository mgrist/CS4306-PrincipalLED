import React, { Component } from "react";
import { Container, InputGroup, Form, FormControl, Col, Button } from "react-bootstrap";
import Counter from "../counter/Counter";

export default class Workorder extends Component{
    render(){
        return(
            <Container>
            <Col>
            <div>
            <h3> Product</h3>

                <Form.Select aria-label="Product label">
                    <option></option>
                    <option value="1">M-PTLG0-41</option>
                    <option value="2">M-PTLG0-50</option>
                    <option value="3">M-PTLG0-65</option>
                    <option value="4">M-PTLG0-71</option>
                    <option value="5">Y/M-PTLG0-27/S1</option>
                    <option value="6">Y/M-PTLG0-65/S1</option>
                </Form.Select>
            </div>
            </Col>

            <Col>
            <div>
            <h3>Stage</h3>

            <Form.Select aria-label="Product Stage">
                    <option></option>
                    <option value="1">SMT</option>
                    <option value="2">Soldering</option>
                    <option value="3">Lenses & Injection Molding</option>
                    <option value="4">Taping</option>
                    <option value="5">Packaging</option>
                </Form.Select>
            </div>
            </Col>
            <Col>
            <h3>Quantity Completed</h3>
            <InputGroup className="Product Quantity">
                <FormControl
                placeholder="Quantity you made"
                aria-label="Quantity you made"
                aria-describedby="basic-addon2"
                />
                <Counter></Counter>
            </InputGroup>
            </Col>

            <Col>
            <h3>Quantity Defective</h3>
            <InputGroup className="Product Defectives">
                <FormControl
                placeholder="0"
                aria-label="0"
                aria-describedby="basic-addon2"
                />
                <Counter></Counter>
            </InputGroup>
            
            </Col>

            <Col>
            <div>
            <h3>Defect</h3>

            <Form.Select aria-label="Defects">
                    <option></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </Form.Select>
            </div>
            </Col>

            <Col>
            <h3>Operator</h3>
            <InputGroup className="Operator">
                <FormControl
                placeholder="Operator"
                aria-label="Operator"
                aria-describedby="basic-addon2"
                />
            </InputGroup>
            </Col>

            <Button as="input" type="Cancel" value="Cancel" />{' '}
            <Button as="input" type="Save" value="Save" />{''}
            </Container>
        );
    }

}