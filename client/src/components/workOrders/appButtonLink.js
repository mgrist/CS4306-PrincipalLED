/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { Box, Link } from '@mui/material';
import './appButton.css';


const preventDefault = (event) => event.preventDefault();

export default function UnderlineLink() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        typography: 'body1',
        fontSize: '18px',
        '& > :not(style) + :not(style)': {
          ml: 6,
        },
      }}
      onClick={preventDefault}
    >

      <Link href="#" color= "gray" underline="hover">
        {'Work Order'}
      </Link>

      <Link href="#" color= "gray" underline="hover">
        {'Export'}
      </Link>

      <Link href="#" color= "gray" underline="hover">
        {'Setting'}
      </Link>

    </Box>
  );
}