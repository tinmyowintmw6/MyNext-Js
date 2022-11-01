import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Filters from '/components/Filters';
import SearchFilters from '/components/Search';
import styled from '@emotion/styled';


const item = {
  flexDirection: 'column',
  alignItems: 'center',
};

const Search = styled('div')({
  position: 'relative',
  backgroundColor: '#233a50 ',
  '&:hover': {
    backgroundColor: "#233a50 ",
  },
  width: '100%',
  height: '100%',

});

const HomeSearchFilters = () => {
  return (
    <Box
      component="section"
    >

      <Grid container>
        <Grid item xs={12} md={4}>
          <Box sx={item}>
            <Search>
              <Filters />
            </Search>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box sx={item}>
            <Search>
              <SearchFilters />
            </Search>
          </Box>
        </Grid>

      </Grid>

    </Box>

  );
}

export default HomeSearchFilters;