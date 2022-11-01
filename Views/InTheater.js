import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Theater from '../components/Theater';
import OnTV from '../components/OnTV';
import { Grid } from '@mui/material';
import Sidebar from '../Views/RightSideBar';


const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const InTheator = ({ theaterSlideData }) => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: '#020d18',
        height: "auto",
        width: "100%",
        padding: "60px 0",
      }}
    >
      <Container sx={{ mt: 7, mb: 10}}>
        <Grid container>
          <Grid item xs={12} md={8}>
            <Box sx={item}>
              <Theater data={theaterSlideData}/>
            </Box>
            <Box sx={item}>
              <OnTV data={theaterSlideData}/>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Sidebar />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>

  );
}


export default InTheator;

