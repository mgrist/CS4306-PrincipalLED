import React from 'react';
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap/';
import Logo from '../../images/led2.png';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RefreshIcon from '@mui/icons-material/Refresh';

import './appBar.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Report from '../pages/Report/Report';
import Home from    '../pages/Home';
import Products from '../pages/Product/Product';
import OrderForm from '../pages/newOrder/newOrder'
import Stages from '../pages/stages/Stages.js';
import DefactReason from '../pages/DefactReason/DefactReason';
import Operator from '../pages/Operator/Operator';
import ViewWorkOrder from '../pages/ViewWorkOrder/ViewWorkOrder';


export default function AppBar() {
    return (
        <Router>
            <div className="navBarWrapper">
            <Navbar bg="dark" variant="dark" style={{width: '100%'}}>
            <Nav>
                <Navbar.Brand as={Link} to={"/home"} id="logowrapper"><Image className="logo" src={Logo}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav.Link className="links" as={Link} to={"/AddOrder"}>View Orders</Nav.Link>
                <Nav.Link className="links" as={Link} to={"/report"}>Report</Nav.Link>
                <NavDropdown className="links" href="/Setting" title="Settings" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} className="drop-downs" to={"Setting/WorkOrder"}>Work Order</NavDropdown.Item>
                    <NavDropdown.Item as={Link} className="drop-downs" to={"Setting/Products"}>Products</NavDropdown.Item>
                    <NavDropdown.Item as={Link} className="drop-downs" to={"Setting/Stages"}>Stages</NavDropdown.Item>
                    <NavDropdown.Item as={Link} className="drop-downs" to={"Setting/Defact_Reason"}>Defect Reasons</NavDropdown.Item>
                    <NavDropdown.Item as={Link} className="drop-downs" to={"Setting/Operator"}>Operator</NavDropdown.Item>
                </NavDropdown>
                </Navbar.Collapse>
            </Nav>
            <Button  
            color="secondary"
            id="ref-bttn"
            sx={{ zIndex: 'tooltip' }}
            >
                <RefreshIcon />
            </Button>
            
            <Button  
            color="secondary"
            id="add-bttn"
            >
                <AddIcon />
            </Button>
            </Navbar>

            </div>
            <div>       
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/AddOrder" element={<OrderForm />} />
                    <Route path="Setting/WorkOrder" element={<ViewWorkOrder />} />
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
