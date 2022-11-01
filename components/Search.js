import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';


const SearchIconWrapper = styled('div')({
  padding: '8px',
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  alignItems: 'center',
  justifyContent: 'right',
  right: '1rem',
  top: '3px',
  color: '#ffffff'
});

const StyledInputBase = styled(InputBase)({
  color: '#abb7c4',
});

const SearchFilters = () => {
  return (
    <div>

      <StyledInputBase
        placeholder="Search for a movie, TV Show or celebrity that you are looking for"
        inputProps={{ 'aria-label': 'search' }}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </div>
  );
}

export default SearchFilters;
