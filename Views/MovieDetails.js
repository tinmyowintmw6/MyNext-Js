import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import MoviesDetailsRating from '../components/MoviesDetailsRatingStar';
import SocialShare from '../Views/SocialShare';
import DetailTab from '../Views/DetailsTab';
import Rating from "../components/Rating";


const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
};

const item2 = {
  display: 'flex',
  flexDirection: 'column',

}
const item3 = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '18px',
  border: '3px solid #0c1c2c',
}

const MovieDetails = ({ viewDetails }) => {
  // console.log('data', viewDetails);
  return (
    <Box
      component="section"
    >
      <Grid container sx={{ mt: 7, mb: 10 }}>
        <Grid item xs={12} md={4} >
          <Box sx={item}>
            <Image className="details-image" src={`https://image.tmdb.org/t/p/w220_and_h330_face${viewDetails.backdrop_path}`} alt="Quantum of Spectre" width={330} height={506} />
          </Box>
          <Box sx={item3}>
            <Box className='btn-transform transform-vertical red' sx={{ marginBottom: '15px', position: 'relative', height: '45px', display: 'inline-block', transation: 'background-color 0.3s ease', width: '100%', textAlign: 'center' }}>
              <Typography
                noWrap
                component="a"
                href="/"
                color="#fff"
                sx={{
                  display: 'block',
                  color: '#fff',
                  fontWeight: 'bold',
                  padding: '13px 25px;',
                  backgroundColor: '#dd003f',
                  fontSize: '14px',
                  height: '45px',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  '&:hover': {
                    color: '#dcf836',
                  }

                }}
              >
                WATCH TRAILER
              </Typography>
            </Box>
            <Box className='btn-transform transform-vertical' sx={{ marginBottom: '15px', position: 'relative', height: '45px', display: 'inline-block', transation: 'background-color 0.3s ease', width: '100%', textAlign: 'center' }}>
              <Typography
                noWrap
                component="a"
                href="/"
                color="#fff"
                sx={{
                  display: 'block',
                  color: '#000',
                  padding: '13px 25px;',
                  backgroundColor: '#dcf836',
                  fontSize: '14px',
                  height: '45px',
                  borderRadius: '5px',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  '&:hover': {
                    color: '#dcf836',
                  }

                }}
              >
                BUY TICKET
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item2 xs={12} md={8}>
          <Box sx={item2} >
            <Typography color="#fff" fontWeight="700" fontSize="36px" variant="h3" marked="center" fontFamily={"Dosis , sans-serif"} sx={{ ml: { md: 10 }, mt: { xs: 4, sm: 10, md: 0 } }} >
              {viewDetails.title}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', ml: { md: 10 }, mt: { xs: 4, sm: 10, md: 10 }, mb: { xs: 4, sm: 10 } }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingRight: '30px' }}>
              <Typography sx={{ display: 'inline' }} color="#abb7c4" varient="subtitle1" fontSize="18px">
                Director:
              </Typography>
            </Box>
            <SocialShare />
          </Box>


          <Box sx={{ display: 'flex', justifyContent: 'flex-start', borderTop: '1px solid #405266;', borderBottom: '1px solid #405266;', marginBottom: '70px', alignItems: 'center', ml: { md: 10 }, mt: { xs: 4, sm: 10, md: 0 } }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingRight: '30px' }}>
              <StarIcon style={{ color: '#f5b50a', fontSize: '36px' }} />
              <Box sx={{ ml: '10px' }}>
                <Typography sx={{ display: 'inline' }} color="#fff" varient="body1" fontSize="16px">
                  <Rating rating={viewDetails.vote_average} />
                </Typography><br />

                <Typography sx={{ display: 'inline' }} color="#4280bf" varient="body2" fontSize="12px">
                  56 Reviews
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: '-webkit-box', justifyContent: 'flex-start', alignItems: 'center', height: '54px', paddingLeft: '30px', borderLeft: '1px solid #405266' }}>
              <Typography sx={{ display: 'inline', marginRight: '15px' }} color="#abb7c4" varient="subtitle1" fontSize="18px">
                Rate This Movie:
              </Typography>
              <MoviesDetailsRating />
            </Box>
          </Box>
          <Box sx={{ ml: { md: 10 }, mt: { xs: 4, sm: 10, md: 10 }, mb: { xs: 4, sm: 10 } }}>
            <DetailTab detailTab={ viewDetails }/>
          </Box>
        </Grid>
      </Grid>
    </Box>

  );
}


export default MovieDetails;

