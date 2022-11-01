import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Footer from '../../components/layouts/Footer';
import Header from '../../components/layouts/Header';
import MovieDetails from '../../Views/MovieDetails';

export async function getServerSideProps({ params }) {
  //console.log('id', params);
  // Fetch data from external API
  const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=ba39a97145419148bc84356cb4ec431d&language=en-US`);
  const posts = await res.json()
 // console.log('posts', posts);

  // Pass posts to the page via props
  return { props: { posts } }
}

export default function Index({posts}) {
  const data = posts
  //console.log('data', data);
  return (
    <React.Fragment>
      <Box sx={{
        background: 'url(../../hero-bg.jpg) no-repeat center/cover',
        height: "auto",
        width: "100%",
        zIndex: "-1",
        top: "0",
        left: "0",
        padding: "30px 0",
        }}>
        <Container maxWidth="lg">
          <Header />
          <MovieDetails viewDetails={ data }/>
        </Container>
      </Box>
      <Footer />


    </React.Fragment >
  );
}