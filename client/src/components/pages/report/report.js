import Button from '@restart/ui/esm/Button';
import { React, useState } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Paper } from '@mui/material';
import './report.css';
import BasicDateRangePicker from './datePicker/datePicker';
import FormControlLabelPosition from './checkbox/checkbox';


//This will be removed. Temporary product name for static data
const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

//need to fix in css
//temp: left border css for checking space
function MultipleSelectNative() {
  const [personName, setPersonName] = useState([]);
  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0; i < options.length; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };
  

  return (
    <div>
      <FormControl className = "border" sx={{ m: 15, minWidth: 120, maxWidth: 300, height: 200}}>
        <InputLabel shrink htmlFor="select-multiple-native">
          Products
        </InputLabel>
        <Select
          multiple
          native
          value={personName}
          // @ts-ignore Typings are not considering `native`
          onChange={handleChangeMultiple}
          label="Native"
          inputProps={{
            id: 'select-multiple-native',
          }}
        >
          {names.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </Select>
      </FormControl>
      
    </div>
  );

}

export default function SearchReport() {

  // This does nothing, but re-renders page
  const [bttn, setBttn] = useState(Math.random());
  function ForceUpdate() {
      setBttn(bttn => Math.random());
  }
  function ViewButton(props){
      return(                                    
              <Link to = "/report">
                  <Button 
                  color="secondary"
                  onClick={ForceUpdate}
                  >
                      View                
                  <VisibilityIcon/>
                  </Button>
              </Link>     
      );
  }

  return (
      <div>                   
          <h3 className="center">Add Completions</h3>
              <Paper
              component="form"
              sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
              >
                  <MultipleSelectNative/>
                  <BasicDateRangePicker/>
                  <FormControlLabelPosition/>                 
              </Paper>

          <ViewButton/>
      </div>

  );
}