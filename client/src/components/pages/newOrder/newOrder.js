import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, TextField, MenuItem, Button } from '@mui/material';
import './newOrder.css';
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

export default function OrderForm() {
    const [currency, setCurrency] = React.useState('EUR');

    const handleChange = (event) => {
        setCurrency(event.target.value);
      };

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
        
        <h3 className='center'>Add New Work Order</h3>

        <div className='center'>
        <div className='inWrap' style={{marginLeft: 'unset'}}>
          <h6>Product</h6>
          <TextField
            id="filled-select-currency"
            select
            label="Product"
            value={currency}
            onChange={handleChange}
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
            onChange={handleChange}
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
            type="number"
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
            type="number"
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
            onChange={handleChange}
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
              helperText="Enter operator initials or name"
              variant="filled"
              style={{width: '100%'}}
            />
            </div>  
        </div>

        <div className='center'>
          <div className='inWrap button'>
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