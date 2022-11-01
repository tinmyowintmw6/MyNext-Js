import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';
import HeaderSlide from '../components/HeaderSlide';
import HomeSearchFilters from '../components/layouts/Show';
import InTheator from '../Views/InTheater';

export async function getStaticProps() {

  const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=ba39a97145419148bc84356cb4ec431d&language=en-US&page=1');
  
  const posts = await res.json()
  return {
    props: {
      posts,
    },
  }
}

export default function Index({ posts }) {
  const data = posts.results

  return (
    <React.Fragment>
      <Box sx={{
        background: 'url(/slider-bg.jpg) no-repeat center/cover',
        height: "auto",
        width: "100%",
        zIndex: "-1",
        top: "0",
        left: "0",
        padding: "30px 0",
      }}>
        <Container maxWidth="lg">
          <Header />
          <HomeSearchFilters />
          <Box sx={{ my: 4 }}>
            <HeaderSlide homeSlideData={data} />
          </Box>
        </Container>
      </Box>
      <InTheator theaterSlideData={data} />
      <Footer />
    </React.Fragment >
  );
}