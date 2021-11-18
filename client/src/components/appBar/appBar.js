
import React from 'react';
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap/';
import Logo from '../../images/led2.png';
import 'bootstrap/dist/css/bootstrap.css';
import './appBar.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Workorder from '../pages/newOrder/newOrder';
import Report from '../pages/Report';
import Home from    '../pages/Home';
import Products from '../pages/Product';
import Stages from '../pages/stages/Stages.js';
import DefactReason from '../pages/DefactReason';
import Operator from '../pages/Operator';


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
                <NavDropdown className="links" href="/Setting" title="Settings" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to={"Setting/Products"}>Products</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"Setting/Stages"}>Stages</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"Setting/Defact_Reason"}>Defect Reasons</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"Setting/Operator"}>Operator</NavDropdown.Item>
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
                    <Route path="Setting/Products" element={<Products />} />
                    <Route path="Setting/Stages" element={<Stages />} />
                    <Route path="Setting/Defact_Reason" element={<DefactReason />} />
                    <Route path="Setting/Operator" element={<Operator />} />
                </Routes>
            </div>
        </Router>
    );
}