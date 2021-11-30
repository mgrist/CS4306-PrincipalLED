import { React, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, TextField, MenuItem, Button } from '@mui/material';
import axios from 'axios';
import './newComp.css';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
];

// setting a green theme with the dropdown boxes
const theme = createTheme({
  palette: {
    primary: {
      main: '#53BA4D',
    },
    secondary: {
      main: '#D22B2B'
    }
  },
});

export default function CompletionForm() {
    const [completion, setCompletion] = useState({
      product_id: 0,
      stage_id: 0,
      quantity_completed: 0,
      quantity_defective: 0,
      scrap_reason_id: 0,
      operator_initials: ''
    });

    const createCompletion = () => {
      axios.post('http://localhost:5000/completions/new-completion', completion);
    }

    return (
      <div>
        <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
        </Box>
        
        <ThemeProvider theme={theme} >
        
        <h3 className='center'>Add Completions</h3>

        <div className='center'>
        <div className='inWrap' style={{marginLeft: 'unset'}}>
          <h6>Product</h6>
          <TextField
            id="filled-select-currency"
            select
            label="Product"
            value={completion.product_id}
            variant="filled"
            style={{ width: '100%'}}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <div className='inWrap' style={{ width: '45%'}}>
          <h6>Stage</h6>
          <TextField
            id="stage"
            select
            label="Stage"
            value={completion.stage_id}
            variant="filled"
            style={{ width: '100%'}}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>      
        </div>   

        <div className='center'>
        <div className='inWrap' style={{width: '20%', marginLeft: 'unset'}}>
          <h6>Quantity Completed</h6>
          <TextField
            id="filled-number"
            label="Number"
            value={completion.quantity_completed}
            type="number"
            inputProps={{ min: 0 }}
            onChange={(event) => {
              setCompletion({...completion, quantity_completed: event.target.value});
            }}
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            style={{ width: '100%'}}
          />
          </div>

          <div className='inWrap' style={{width: '20%'}}>  
          <h6>Quantity Defective</h6>
          <TextField
            id="filled-number"
            label="Number"
            value={completion.quantity_defective}
            type="number"
            inputProps={{ min: 0 }}
            onChange={(event) => {
              setCompletion({...completion, quantity_defective: event.target.value});
            }}
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            style={{width: '100%'}}
          />  
          </div>

          <div className='inWrap'>
          <h6>Defect Type</h6>
          <TextField
            id="filled-select-currency"
            select
            label="Defect"
            value={completion.scrap_reason_id}
            variant="filled"
            style={{ width: '100%'}}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        </div>

        <div className='center'>
          <div className='inWrap' style={{width: '30%', marginLeft: 'unset'}}>
            <h6>Operator</h6>
            <TextField
              id="filled-helperText"
              label="Initials"
              value={completion.operator_initials}
              onChange={(event) => {
                setCompletion({...completion, operator_initials: event.target.value});
              }}
              helperText="Enter operator initials or name"
              variant="filled"
              style={{width: '100%'}}
            />
            </div>  
        </div>

        <div className='center'>
          <div className='inWrap' style={{width: '30%', position: 'absolute', right: '7%'}}>
            <Button  
            color="secondary"
            startIcon={<CancelIcon />}
            variant="contained">
              cancel
            </Button>
          </div>
    
          <div style={{position: 'absolute', right: '0'}}>
            <Button 
            color="success"
            startIcon={<SaveIcon />}
            variant="contained">
              save
            </Button>
          </div>
        </div>
      </ThemeProvider>
    </div>
    );
}