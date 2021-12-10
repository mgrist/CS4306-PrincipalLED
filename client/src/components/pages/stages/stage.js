import { React, useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './stage.css';
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
  /  adding response data to the stages array variable. This is used to view
  /  all of the stages in the dropdown menu.*/
  const [stages, setStage] = useState([]);
  
  const getStages = () => {
    Axios.get("http://localhost:5000/stages/get-stages").then((response) => {
      setStage(response.data);
    });
  };

  useEffect(() => {
    getStages();
  }, []);
  
  return (
    <div>
    <h3 className='table'>Stages</h3>
    <TableContainer className='table' style={{marginTop: '1%'}}>
      <Table sx={{ width: '95%' }} className='center' aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell 
            align='center' 
            style={{ borderRight: '0.3px solid #879D9E', width: '25%' }}
            > 
              Order
            </StyledTableCell>
            <StyledTableCell> Label </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stages.map((stage) => (
            <StyledTableRow key={stage.order}>
              <StyledTableCell 
              style={{ borderRight: '0.3px solid #879D9E', width: '25%'}} 
              component="th" 
              scope="stage" 
              align='center'
              >
                {stage.order}
              </StyledTableCell>
              <StyledTableCell>
                {stage.label}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}