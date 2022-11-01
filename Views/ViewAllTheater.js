import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, Grid } from '@mui/material';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Rating from "../components/Rating";
import Pagination from '../components/Pagination';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',

};
export default function Index ({ viewallthreater }) {
  //console.log('data', viewallthreater);
  return (
    <React.Fragment>
      <Box sx={{
        background: 'url(./slider-bg.jpg) no-repeat center/cover',
        height: "auto",
        width: "100%",
        zIndex: "-1",
        top: "0",
        left: "0",
        padding: "30px 0",
      }}>
        <Box
          component="section"
          sx={{ display: 'flex', overflow: 'hidden' }}
        >
          <Grid container>
            {viewallthreater?.map((item ,post) => (
                <Grid item sm={2} md={3} lg={3} key={post}>
                  <Box sx={item}>
                    <Box sx={{ width: "100%", height: "100%" }}>
                      <Image src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.backdrop_path}`} alt="viewall" width={274} height={420} />
                      <Typography
                        sx={{
                          display: 'inline', color: '#fff', backgroundColor: '#f5b50a', borderRadius: '5px', padding: '5px',
                        }}
                        fontSize="12px"
                        color="#fff"
                        position="relative"
                        bottom="10rem"
                        left="1rem"
                      >
                        ACTION
                      </Typography>
                      <Typography
                        noWrap
                        component="a"
                        href="/interstellar"
                        sx={{
                          display: 'block',
                          color: '#fff',
                          '&:hover': {
                            color: '#dcf836',
                          },
                          fontWeight: 'bold',
                          textDecoration: 'none'
                        }}
                        color="#fff"
                        position="relative"
                        bottom="9rem"
                        left="19px"

                      >
                        {item.title}
                      </Typography>
                      <Box sx={{ position: "relative", bottom: "8rem", left: "1rem" }}>
                        <Rating  rating={item.vote_average} />
                      </Box>
                    </Box>
                  </Box>
                </Grid>

            ))}
          </Grid>
        </Box>
      </Box>
    </React.Fragment >
  );
}