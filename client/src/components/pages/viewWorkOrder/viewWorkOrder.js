import { React, useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './viewWorkOrder.css';
import Axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontSize: 16,
    backgroundColor: '#212529',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// formats numbers with a comma delimeter
function formatNumber(number) {
  var nf = new Intl.NumberFormat();
  return nf.format(number); // "1,234,567,890"
}

export default function CustomizedTables() {
  /* creating a react state hook, calling a GET api request to backend, then
  /  adding response data to the products array variable. This is used to view
  /  all of the products in the dropdown menu.*/
  const [products, setProduct] = useState([]);
  
  const getProducts = () => {
    Axios.get("http://localhost:5000/products/get-products").then((response) => {
      setProduct(response.data);
      console.log("products: ", response.data);
    });
  };

  /* creating a react state hook, calling a GET api request to backend, then
  /  adding response data to the work orders array variable. This is used to view
  /  all of the work orders in the dropdown menu.*/
  const [workOrders, setOrder] = useState([]);
  
  const getOrders = () => {
    Axios.get("http://localhost:5000/work-orders/get-orders").then((response) => {
      setOrder(response.data);
      console.log("wo: ", response.data);
    });
  };

  useEffect(() => {
    getOrders();
    getProducts();
  }, []);

  // gets the products label that corresponds to a part number.
  // order is the supplied part number.
  const getLabel = (order) => {
    if (order === undefined) return "";
    const prod = products.find(({ part_number }) => part_number === order);
    if (prod === undefined) return ""; 
    return prod.label;
  }
  
  return (
    <div>
    <h3 className='table'>Work Orders</h3>
    <TableContainer className='table' style={{marginTop: '1%'}}>
      <Table sx={{ width: '95%' }} className='center' aria-label="customized table">
        <TableHead key="head">
          <TableRow key="row">
            <StyledTableCell
            key="woNum" 
            align='left' 
            style={{ borderRight: '0.3px solid #879D9E', width: '25%'}}
            > 
              WO Number 
            </StyledTableCell>
            <StyledTableCell 
            key="quant"
            align='left' 
            className="quantCell" 
            style={{ borderRight: '0.3px solid #879D9E', width: '25%' }}
            >
               Quantity 
            </StyledTableCell>
            <StyledTableCell align='left' key="prod"> Product </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {workOrders.map((order, i) => (
            <StyledTableRow key={i}>
              <StyledTableCell
              key={i} 
              style={{ borderRight: '0.3px solid #879D9E', width: '25%' }} 
              component="th" 
              scope="order" 
              align='left'
              >
                WO - {order.wo_number}
              </StyledTableCell>

              <StyledTableCell  
              style={{ borderRight: '0.3px solid #879D9E', width: '25%' }}
              align='left'
              key={i}
              >
                {formatNumber(order.wo_quantity)}
              </StyledTableCell>

              <StyledTableCell align='left' key={i}>
                {order.product_number}: &nbsp;{getLabel(order.product_number)}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}