import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function ControlledCheckbox() {
    const [checked, setChecked] = React.useState(true);
  
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
  
    return (
      <Checkbox
        label="hello"
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
    );
  }

  export default function FormControlLabelPosition() {
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">Stages</FormLabel>
        <FormGroup aria-label="position">

          <FormControlLabel
            value="end"
            control={<Checkbox />}
            label="Select All"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox />}
            label="SMT"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox />}
            label="Soldering"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox />}
            label="Taping"
            labelPlacement="end"
          />

        </FormGroup>
      </FormControl>
    );
  }