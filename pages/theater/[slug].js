import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ViewAllTheater from '../../Views/ViewAllTheater';
import Header from '../../components/layouts/Header';
import Footer from '../../components/layouts/Footer';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

// export async function getStaticProps() {

//   const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=ba39a97145419148bc84356cb4ec431d&language=en-US&page=1');
  
//   const posts = await res.json()
//   return {
//     props: {
//       posts,
//     },
//   }
// }

// This gets called on every request
export async function getServerSideProps({ params, query }) {
  // console.log('query', query)
  // console.log('parms', params);
  // Fetch data from external API
  const res = await fetch(`https://api.themoviedb.org/3/movie/${params.slug}?api_key=ba39a97145419148bc84356cb4ec431d&language=en-US&page=${query.page}`);
  const posts = await res.json()

  // Pass posts to the page via props
  return { props: { posts } }
}

export default function Index( { posts } ) {
  const data = posts?.results
  const router = useRouter();

  // handle load more and push to next page with query params
  const handleNext = (e) => {
    router.push({
      pathname: `/theater/${router.query.slug}`,
      query: { page: posts?.page + 1 }
    })
  }

  const handlePrev = (e) => {
    if (posts?.page > 1) {
      router.push({
        pathname: `/theater/${router.query.slug}`,
        query: { page: posts?.page - 1 }
      })
    }
  }

  return (
    <React.Fragment>

      <Box sx={{
        background: 'url(../../slider-bg.jpg) no-repeat center/cover',
        height: "auto",
        width: "100%",
        zIndex: "-1",
        top: "0",
        left: "0",
        padding: "30px 0",
      }}>
        <Container maxWidth="lg">
          <Header />
          <Box>
            <ViewAllTheater viewallthreater={data}/>
            <Button onClick={() => handlePrev()}>
              Prev
            </Button>
            <Button onClick={() => handleNext()}>
              Next
            </Button>
          </Box>
        </Container>
      </Box>
      <Footer />
    </React.Fragment >
  );
}