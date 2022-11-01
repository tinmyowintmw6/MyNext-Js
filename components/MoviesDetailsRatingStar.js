import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

export default function CustomizedRating() {
  return (
    <Box
    sx={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
    }}
  >
      <Rating name="customized-10" defaultValue={9} max={10} precision={0.5} readOnly
        emptyIcon={<StarIcon style={{ opacity: 0.55 , color: '#fff'}} fontSize="inherit" />} />
    </Box>
  );
}
