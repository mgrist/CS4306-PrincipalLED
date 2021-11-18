import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export default function appButton() {
  return (
    <Stack direction="row" spacing={4}>
      <Button variant="contained"> Work Order </Button>
      <Button variant="contained"> Export </Button>
      <Button variant="contained"> Settings </Button>
    </Stack>
  );
}



export default function DisableElevation() {
  return (
    <Button variant="contained" disableElevation>
      Disable elevation
    </Button>
  );
}