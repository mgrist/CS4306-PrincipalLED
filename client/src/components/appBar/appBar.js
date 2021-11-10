
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.css';
import Logo from '../../images/led2.png';

export default function AppBar() {
    // styling for PLED logo
    const logo = {
        height: '15%', 
        width: '15%', 
        paddingLeft: '20px',
        paddingRight: '20px'
    }
    // styling for links, added padding on both sides
    const links = {
        paddingLeft: '15px',
        paddingRight: '15px'
    }

    return (
        <Navbar bg="dark" variant="dark">
        <Nav>
            <Image src={Logo} href="#home" style={logo}/>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link style={links} href="#home">Work Orders</Nav.Link>
            <Nav.Link style={links} href="#link">Report</Nav.Link>
            <NavDropdown style={links} title="Settings" id="basic-nav-dropdown">
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