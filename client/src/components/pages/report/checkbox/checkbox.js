import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import '../report.css';

export default function IndeterminateCheckbox() {
  const [checked, setChecked] = React.useState([true, true, true, true, true]);
  const isAllSelected = checked[0] && checked[1] && checked[2] && checked[3] && checked[4];
  const isNoneSelected = !checked[0] && !checked[1] && !checked[2] && !checked[3] && !checked[4];

  const handleChange = (event) => {
    let check = event.target.checked;
    let val = event.target.value;

    // select all box
    if (val === "all") {
      setChecked([check, check, check, check, check]);
    }
    else if (val === "SMT") {
      setChecked([check, checked[1], checked[2], checked[3], checked[4]]);
    }
    else if (val === "solder") {
      setChecked([checked[0], check, checked[2], checked[3], checked[4]]);
    }
    else if (val === "LAIM") {
      setChecked([checked[0], checked[1], check, checked[3], checked[4]]);
    }
    else if (val === "tape") {
      setChecked([checked[0], checked[1], checked[2], check, checked[4]]);
    }
    else {
      setChecked([checked[0], checked[1], checked[2], checked[3], check]);
    }
  };

  return (
    <div>
      <FormControl component="fieldset">
        <h6 className='title'>Stages</h6>
        <FormControlLabel
          label="Select All"
          control={
            <Checkbox
              checked={isAllSelected}
              indeterminate={!isNoneSelected && !isAllSelected}
              value="all"
              onChange={handleChange}
              color="success"
            />
          }
        />
        <FormControlLabel
          label="SMT"
          control={
            <Checkbox 
              checked={checked[0]}
              value="SMT"
              onChange={handleChange}
              color="success"
            />
          }
        />
        <FormControlLabel
          label="Soldering"
          control={
            <Checkbox 
              checked={checked[1]} 
              value="solder"
              onChange={handleChange} 
              color="success"
            />
          }
        />
        <FormControlLabel
          label="Lens & IM"
          control={
            <Checkbox 
              checked={checked[2]}
              value="LAIM"
              onChange={handleChange} 
              color="success"
            />
          }
        />
        <FormControlLabel
          label="Taping"
          control={
            <Checkbox
              checked={checked[3]}
              value="tape"
              onChange={handleChange} 
              color="success"
            />
          }
        />
        <FormControlLabel
          label="Packaging"
          control={
            <Checkbox 
              checked={checked[4]}
              value="pack"
              onChange={handleChange} 
              color="success"
            />
          }
        />
      </FormControl>
    </div>
  );
}