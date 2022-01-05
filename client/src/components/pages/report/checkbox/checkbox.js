import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import '../report.css';

export function ControlledCheckbox(props) {
    const val = props.value;
    const [checked, setChecked] = React.useState(true);
  
    const handleChange = (event) => {
      setChecked(event.target.checked);
      // if the select all box is clicked
      if (event.target.value === 0) {
        // if box is ticked
        if (event.target.checked === true) {
          // set all boxes to ticked
        }
        // if box is unticked
        else {
          // set all boxes to unticked
        }
      }
      else {
        // if box is ticked
        if (event.target.checked === true) {
          // set box to ticked
        }
        // if box is unticked
        else {
          // set box to unticked
        }
      }
    };
  
    return (
      <Checkbox
        label="hello"
        value={val}
        color="success"
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
    );
  }

  export default function FormControlLabelPosition() {
    var [selected, setSelected] = React.useState([]);
    return (
      <FormControl component="fieldset">
        <h6 className='title'>Stages</h6>
        <FormGroup aria-label="position">

          <FormControlLabel
            value={0}
            control={<ControlledCheckbox value={0}/>}
            label="Select All"
            labelPlacement="end"
          />
          <FormControlLabel
            value={1}
            control={<ControlledCheckbox value={1}/>}
            label="SMT"
            labelPlacement="end"
          />
          <FormControlLabel
            value={2}
            control={<ControlledCheckbox value={2}/>}
            label="Soldering"
            labelPlacement="end"
          />
          <FormControlLabel
            value={3}
            control={<ControlledCheckbox value={3}/>}
            label="Lens & IM"
            labelPlacement="end"
          />
          <FormControlLabel
            value={4}
            control={<ControlledCheckbox value={4}/>}
            label="Taping"
            labelPlacement="end"
          />
          <FormControlLabel
            value={5}
            control={<ControlledCheckbox value={5}/>}
            label="Packaging"
            labelPlacement="end"
          />
        </FormGroup>
      </FormControl>
    );
  }