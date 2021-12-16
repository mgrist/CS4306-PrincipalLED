import { React, useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './product.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { ButtonGroup, Button } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
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

// setting theme with the action buttons
const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});

export function ActionButtons() {
  return (
    <ThemeProvider theme={theme}>
    <StyledTableCell 
    style={{ borderRight: '0.3px solid #879D9E' }} 
    component="th" 
    align='center'
    >
      <ButtonGroup disableElevation color="primary" variant="text">
        <Button><EditIcon/></Button>
        <Button><DeleteForeverIcon/></Button>
      </ButtonGroup>
    </StyledTableCell>
    </ThemeProvider>
  );
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

  useEffect(() => {
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
    <h3 className='table'>Products</h3>
    <TableContainer className='table' style={{marginTop: '1%'}}>
      <Table sx={{ width: '95%' }} className='center' aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell 
            align='left' 
            style={{ borderRight: '0.3px solid #879D9E', width: '25%' }}
            > 
              Part Number 
            </StyledTableCell>
            <StyledTableCell 
            align='left' 
            className="quantCell" 
            style={{ borderRight: '0.3px solid #879D9E', width: '25%' }}
            >
               Assemblie 
            </StyledTableCell>
            
            <StyledTableCell align='left' style={{ borderRight: '0.3px solid #879D9E'}}>
               Label 
            </StyledTableCell>
            
            <StyledTableCell 
            align='center' 
            style={{ borderRight: '0.3px solid #879D9E'}}
            > 
              Action
            </StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <StyledTableRow key={product.name}>
              <StyledTableCell 
              style={{ borderRight: '0.3px solid #879D9E', width: '25%' }} 
              component="th" 
              scope="product" 
              align='left'
              >
                {product.part_number}
              </StyledTableCell>
              <StyledTableCell  
              style={{ borderRight: '0.3px solid #879D9E', width: '25%' }}
              align='left'
              >
                {product.assemblie}
              </StyledTableCell>
              <StyledTableCell align='left' style={{ borderRight: '0.3px solid #879D9E'}}>
                {product.label}
              </StyledTableCell>

              <ActionButtons/>
            </StyledTableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}