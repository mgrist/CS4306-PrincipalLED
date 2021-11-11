
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'
import Logo from '../../images/led2.png';
import 'bootstrap/dist/css/bootstrap.css';
import './appBar.css';

export default function AppBar() {
    return (
        <Navbar bg="dark" variant="dark">
        <Nav>
            <Navbar.Brand id="logowrapper" href="/home"><Image className="logo" src={Logo}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link className="links" href="#home">Work Orders</Nav.Link>
            <Nav.Link className="links" href="#link">Report</Nav.Link>
            <NavDropdown className="links" title="Settings" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            </Navbar.Collapse>
        </Nav>
        </Navbar>
    );
}