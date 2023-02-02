import {useState}from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import './style.css';

export default function BasicRating() {
  const [value, setValue] = useState(0);
  function handleRating(event:any ){
    setValue(event.target.value)
  }

  return (
    <Box>
      <Rating
        id='star'
        name="simple-controlled"
        value={value}
        onChange={handleRating}
      />

    </Box>
  );
}
