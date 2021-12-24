import * as React from 'react';
import TextField from '@mui/material/TextField';
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import './datePicker.css';

export default function BasicDateRangePicker() {
    const [value, setValue] = React.useState([null, null]);
  
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateRangePicker
          calendars={1}
          startText="Date start"
          endText="Date end"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <Box>
              <Box style={{marginBottom: '2px'}}>
                <TextField {...startProps} />
              </Box>
                <center>to</center> 
              <Box style={{marginTop: '8px'}}> 
              <TextField {...endProps} />
              </Box>
              </Box>
            </React.Fragment>
          )}
        />
      </LocalizationProvider>
    );
  }