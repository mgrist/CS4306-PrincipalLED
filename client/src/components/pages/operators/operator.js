import { React, useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './operator.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
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

export default function CustomizedTables() {
  /* creating a react state hook, calling a GET api request to backend, then
  /  adding response data to the operators array variable. */
  const [operators, setOperator] = useState([]);
  
  const getOperators = () => {
    Axios.get("http://localhost:5000/operators/get-operators").then((response) => {
      setOperator(response.data);
    });
  };

  useEffect(() => {
    getOperators();
  }, []);
  
  return (
    <div>
    <h3 className='table'>Operators</h3>
    <TableContainer className='table' style={{marginTop: '1%'}}>
      <Table sx={{ width: '95%' }} className='center' aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell 
            align='left' 
            style={{ borderRight: '0.3px solid #879D9E', width: '33%' }}
            > 
              First Name
            </StyledTableCell>

            <StyledTableCell 
            align='left' 
            style={{ borderRight: '0.3px solid #879D9E', width: '33%' }}
            > 
              Last Name
            </StyledTableCell>
            
            <StyledTableCell align='left'> Initials </StyledTableCell>
            
            <StyledTableCell 
            align='left' 
            style={{ borderRight: '0.3px solid #879D9E'}}
            > 
              Action
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {operators.map((operator) => (
            <StyledTableRow key={operator.initials}>
              <StyledTableCell 
              style={{ borderRight: '0.3px solid #879D9E', width: '33%' }} 
              component="th" 
              scope="operator" 
              align='left'
              >
                {operator.first_name}
              </StyledTableCell>

              <StyledTableCell 
              style={{ borderRight: '0.3px solid #879D9E', width: '33%' }} 
              component="th" 
              align='left'
              >
                {operator.last_name}
              </StyledTableCell>

              <StyledTableCell align='left'>
                {operator.initials}
              </StyledTableCell>

              <StyledTableCell 
              style={{ borderRight: '0.3px solid #879D9E' }} 
              component="th" 
              align='left'
              ><EditIcon/><DeleteForeverIcon/></StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}