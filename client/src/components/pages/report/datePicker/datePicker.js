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
          startText="Date start"
          endText="Date end"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
                <Box className="middleTime">
                <Box>
              <TextField {...startProps} />
              </Box>
                <center>to</center> 
              <Box>
              <TextField {...endProps} />
              </Box>
              </Box>
            </React.Fragment>
          )}
        />
      </LocalizationProvider>
    );
  }