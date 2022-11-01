import * as React from 'react';
import Box from '@mui/material/Box';
import StarOutlined from '@mui/icons-material/StarOutlined';


const labels = {
  0.5: '7.5/10',
  1: '7.5/10',
  1.5: '7.3/10',
  2: '7.5/10',
  2.5: '7.5/10',
  3: '7.5/10',
  3.5: '7.5/10',
  4: '7.5/10',
  4.5: '7.5/10',
  5: '7.5/10',
};

export default function TextRating({rating}) {
  const value = rating;

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
        fontWeight: 'bold',
      }}
    >
      <StarOutlined />
      {/* <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ display: 'none' }} fontSize="inherit" />}
      /> */}
      <Box sx={{ ml: 1 }}>{value} / 10</Box>
    </Box>
  );
}