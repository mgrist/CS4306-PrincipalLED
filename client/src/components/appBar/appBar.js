
import React from 'react';
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap/';
import Logo from '../../images/led2.png';
import 'bootstrap/dist/css/bootstrap.css';
import './appBar.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Workorder from '../pages/newOrder/newOrder';
import Report from '../pages/Report';
import Home from    '../pages/Home';

export default function AppBar() {
    return (
        <Router>
            <div>
            <Navbar bg="dark" variant="dark">
            <Nav>
                <Navbar.Brand as={Link} to={"/home"} id="logowrapper"><Image className="logo" src={Logo}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav.Link className="links" as={Link} to={"/WorkOrder"}>Work Orders</Nav.Link>
                <Nav.Link className="links" as={Link} to={"/report"}>Report</Nav.Link>
                <NavDropdown className="links" href="/action" title="Settings" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to={"action/3.1"}>Action</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"action/3.2"}>Another action</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"action/3.3"}>Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to={"action/3.4"}>Separated link</NavDropdown.Item>
                </NavDropdown>
                </Navbar.Collapse>
            </Nav>
            </Navbar>
            </div>
            <div>       
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/WorkOrder" element={<Workorder />} />
                    <Route path="/report" element={<Report />} />
                    <Route path="action/3.1" element={<Home />} />
                    <Route path="action/3.2" element={<Report />} />
                    <Route path="action/3.3" element={<Report />} />

                    <Route path="action/3.4" element={<Report />} />
                </Routes>
            </div>
        </Router>
    );
}