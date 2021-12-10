import { React, useState, Component } from 'react';
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap/';
import Logo from '../../images/led2.png';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RefreshIcon from '@mui/icons-material/Refresh';
import PrintIcon from '@mui/icons-material/Print';

import './appBar.css';
//import other pages to routes
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SearchReport from '../pages/report/report.js';
import ColumnGroupingTable from '../pages/report/barChart/barChart.js';
import Home from    '../pages/home/home.js';
import Products from '../pages/products/product';
import CompForm from '../pages/home/newComp/newComp.js'
import Stages from '../pages/stages/stage.js';
import DefectReason from '../pages/defects/defect';
import Operator from '../pages/operators/operator';
import ViewWorkOrder from '../pages/viewWorkOrder/viewWorkOrder';
import AddOrder from '../pages/viewWorkOrder/addOrder/addOrder';
import AddOperator from '../pages/operators/addOperator/addOperator';
import AddProduct from '../pages/products/addProduct/addProduct';
import AddStage from '../pages/stages/addStage/addStage';
import AddDefect from '../pages/defects/addDefect/addDefect';

//<Route path="/Setting/WorkOrder/AddOrder" element={<OrderForm />} />

export default function AppBar() {
    // refresh button component
    function RefButton(props) {
        return (
            <Button  
                color="secondary"
                id="ref-bttn"
                onClick={() => window.location.reload(false)}
                sx={{ zIndex: 'tooltip' }}
                >
                    <RefreshIcon />
            </Button>
        );
    }

    // print button component
    function PrintButton(props){
        return(
            <Button    
                color="secondary"
                id="print-bttn"
                onClick={() => window.print()}
                sx={{ zIndex: 'tooltip' }}
            >
                <PrintIcon />
            </Button>
        );
    }

    // add button component
    function AddButton(props) {
        var formUrl;
        let styling = {
            marginLeft: '2%', 
            marginRight: '2%'
        }
        // ver value of 2 indicates a form page button
        if (props.ver === '2') {
            styling.marginLeft = 'auto';
        }
        // if statements tell the plus button which path to send
        // you too based on your current path.
        if (props.pathName === "/home" || props.pathName === "/") {
            formUrl = "/AddCompletion";
        }
        else if (props.pathName === "/Setting/WorkOrder") {
            formUrl = "/Setting/WorkOrder/AddOrder";
        }
        else if (props.pathName === "/Setting/Products") {
            formUrl = "/Setting/Products/AddProduct";
        }
        else if (props.pathName === "/Setting/Stages") {
            formUrl = "/Setting/Stages/AddStage";
        }
        else if (props.pathName === "/Setting/Defect_Reason") {
            formUrl = "/Setting/Defect_Reason/AddDefect";
        }
        else if (props.pathName === "/Setting/Operator") {
            formUrl = "/Setting/Operator/AddOperator";
        }
        else
            formUrl = "/";
        return (
            <Link to={formUrl} style={styling}>
            <Button
            style={props.styleType}  
            color="secondary"
            id="add-bttn"
            onClick={ForceUpdate}
            >
                <AddIcon />
            </Button>
            </Link>
        );
    }

    // This does nothing, but re-renders page
    const [bttn, setBttn] = useState(Math.random());
    function ForceUpdate() {
        setBttn(bttn => Math.random());
    }

    // determines which buttons to render on screen based on current path
    function RenderButtons() {
        let currPath = window.location.pathname;
        // if we are on home page, display both refresh and add button
        if (currPath === '/' || currPath === '/home') {
            return [<RefButton key='1' pathName={currPath}/>, <AddButton key='0' pathName={currPath} ver='1'/> ];
        }
        else if(currPath === '/report'){
            return [<RefButton key='1' pathName={currPath}/>, <PrintButton pathName={currPath}/>]
        }
        // if we are on settings pages, only display add button
        else if (currPath === '/Setting/WorkOrder' || currPath === '/Setting/Products' 
        || currPath === '/Setting/Stages' || currPath === '/Setting/Defect_Reason' || currPath === '/Setting/Operator') {
            return <AddButton key='0' pathName={currPath} ver='2'/>;
        }
        // otherwise do not display any buttons
        return null;
    }

    return (
        <Router>
            <div className="navBarWrapper">
            <Navbar bg="dark" variant="dark" style={{width: '100%'}}>
            <Nav>
                <Navbar.Brand as={Link} to={"/home"} id="logowrapper" onClick={ForceUpdate}><Image className="logo" src={Logo}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav.Link className="links" as={Link} to={"/home"} onClick={ForceUpdate}>View Orders</Nav.Link>
                <Nav.Link className="links" as={Link} to={"/SearchReport"} onClick={ForceUpdate}>Report</Nav.Link>
                <NavDropdown className="links" href="/Setting" title="Settings" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} className="drop-downs" to={"Setting/WorkOrder"} onClick={ForceUpdate}>Work Orders</NavDropdown.Item>
                    <NavDropdown.Item as={Link} className="drop-downs" to={"Setting/Products"} onClick={ForceUpdate}>Products</NavDropdown.Item>
                    <NavDropdown.Item as={Link} className="drop-downs" to={"Setting/Stages"} onClick={ForceUpdate}>Stages</NavDropdown.Item>
                    <NavDropdown.Item as={Link} className="drop-downs" to={"Setting/Defect_Reason"} onClick={ForceUpdate}>Defect Reasons</NavDropdown.Item>
                    <NavDropdown.Item as={Link} className="drop-downs" to={"Setting/Operator"} onClick={ForceUpdate}>Operators</NavDropdown.Item>
                </NavDropdown>
                </Navbar.Collapse>
            </Nav>
            <RenderButtons />
            </Navbar>
            </div>
            <div>       
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/AddCompletion" element={<CompForm />} />  
                    <Route path="/SearchReport" element={<SearchReport />} />
                    <Route path="/Report" element={<ColumnGroupingTable/>}/>
                    <Route path="/Setting/Products" element={<Products />} />
                    <Route path="/Setting/Products/AddProduct" element={<AddProduct />} />
                    <Route path="/Setting/Stages" element={<Stages />} />
                    <Route path="/Setting/Stages/AddStage" element={<AddStage />} />
                    <Route path="/Setting/Defect_Reason" element={<DefectReason />} />
                    <Route path="/Setting/Defect_Reason/AddDefect" element={<AddDefect />} />
                    <Route path="/Setting/Operator" element={<Operator />} />
                    <Route path="/Setting/Operator/AddOperator" element={<AddOperator />} />
                    <Route path="/Setting/WorkOrder" element={<ViewWorkOrder />} />
                    <Route path="/Setting/WorkOrder/AddOrder" element={<AddOrder />} />
                </Routes>
            </div>
        </Router>
    );
}
