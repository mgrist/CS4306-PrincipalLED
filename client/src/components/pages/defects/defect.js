import { React, useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './defect.css';
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
  /  adding response data to the defects array variable. */
  const [defects, setDefect] = useState([]);
  
  const getDefects = () => {
    Axios.get("http://localhost:5000/reasons/get-reasons").then((response) => {
      setDefect(response.data);
      console.log("defects reasons: ", response.data);
    });
  };

  useEffect(() => {
    getDefects();
  }, []);
  
  return (
    <div>
    <h3 className='table'>Defect Reasons</h3>
    <TableContainer className='table' style={{marginTop: '1%'}}>
      <Table sx={{ width: '95%' }} className='center' aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell 
            align='left' 
            style={{ borderRight: '0.3px solid #879D9E'}}
            > 
              Label
            </StyledTableCell>

            <StyledTableCell 
            align='left' 
            style={{ borderRight: '0.3px solid #879D9E'}}
            > 
              Description
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
          {defects.map((defect) => (
            <StyledTableRow key={defect.label}>
              <StyledTableCell 
              style={{ borderRight: '0.3px solid #879D9E' }} 
              component="th" 
              scope="defect" 
              align='left'
              >
                {defect.label}
              </StyledTableCell>

              <StyledTableCell 
              style={{ borderRight: '0.3px solid #879D9E' }} 
              component="th" 
              align='left'
              >
                {defect.description}
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