import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, TextField, MenuItem } from '@mui/material';
import './newOrder.css';

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
    }
  },
});

export default function AppBar() {
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
        
        <div className='center'>
        <div className='inWrap' style={{marginLeft: 'unset'}}>
          <h5>Product</h5>
          <TextField
            id="filled-select-currency"
            select
            label="Select"
            value={currency}
            onChange={handleChange}
            helperText="Select the product"
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
          <h5>Stage</h5>
          <TextField
            id="stage"
            select
            label="Select"
            value={currency}
            onChange={handleChange}
            helperText="Select the stage"
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
          <h5>Quantity Completed</h5>
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
          <h5>Quantity Defective</h5>
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
          <h5>Defect Type</h5>
          <TextField
            id="filled-select-currency"
            select
            label="Select"
            value={currency}
            onChange={handleChange}
            helperText="Select the defect reason"
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
            <h5>Operator</h5>
            <TextField
              id="filled-helperText"
              label="Initials"
              helperText="Enter Operator Initials"
              variant="filled"
              style={{width: '100%'}}
            />
            </div>
        </div>
        </ThemeProvider>
      </div>
    );
}