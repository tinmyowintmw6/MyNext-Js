import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const item = {
  display: 'flex',
  flexDirection: 'column',
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs( {detailTab} ) {
 console.log(detailTab);
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs className='myClass' value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="OVERVIEW" {...a11yProps(0)} />
          <Tab label="REVIEWS" {...a11yProps(1)} />
          <Tab label="CAST & CREW" {...a11yProps(2)} />
          <Tab label="MEDIA" {...a11yProps(3)} />
          <Tab label="RELATED MOVIES" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container sx={{ mt: 7, mb: 10 }}>
          <Grid item xs={12} md={8}>
            <Box sx={item}>
              <Typography sx={{ display: 'flex', color: '#abb7c4', fontSize: '14px', justifyContent: 'flex-start' }}>
                {detailTab.overview}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: '30px', pl: { xs: '0px', md: '43px' } }}>
              <Typography sx={{ display: 'flex', color: '#abb7c4', fontSize: '14px', justifyContent: 'flex-start' }}>
                Director:
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href=""
                sx={{
                  display: { xs: 'flex' },
                  flexGrow: 1,
                  color: '#4280bf',
                  fontSize: '12px',
                  textDecoration: 'none',
                  justifyContent: 'flex-start',
                  marginTop: '10px',
                  '&:hover': {
                    color: '#dcf836',
                  }
                }}
              >
                Joss Whedon
              </Typography>
            </Box>
            <Box sx={{ mb: '30px', pl: { xs: '0px', md: '43px' } }}>
              <Typography sx={{ display: 'flex', color: '#abb7c4', fontSize: '14px', justifyContent: 'flex-start' }}>
                Writer:
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href=""
                sx={{
                  
                  color: '#4280bf',
                  fontSize: '12px',
                  textDecoration: 'none',
                  justifyContent: 'flex-start',
                  marginTop: '10px',
                  '&:hover': {
                    color: '#dcf836',
                  }
                }}
              >
                Joss Whedon ,
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href=""
                sx={{
                  
                  flexGrow: 1,
                  color: '#4280bf',
                  fontSize: '12px',
                  textDecoration: 'none',
                  justifyContent: 'flex-end',
                  marginTop: '10px',
                  '&:hover': {
                    color: '#dcf836',
                  }
                }}
              >
                 Stan Lee
              </Typography>
            </Box>

            <Box sx={{ mb: '30px', pl: { xs: '0px', md: '43px' } }}>
              <Typography sx={{ display: 'flex', color: '#abb7c4', fontSize: '14px', justifyContent: 'flex-start' }}>
                Stars:
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href=""
                sx={{
                  display: { xs: 'flex' },
                  flexGrow: 1,
                  color: '#4280bf',
                  fontSize: '12px',
                  textDecoration: 'none',
                  justifyContent: 'flex-start',
                  marginTop: '10px',
                  '&:hover': {
                    color: '#dcf836',
                  }
                }}
              >
                Robert Downey Jr,
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href=""
                sx={{
                  display: { xs: 'flex' },
                  flexGrow: 1,
                  color: '#4280bf',
                  fontSize: '12px',
                  textDecoration: 'none',
                  justifyContent: 'flex-start',
                  marginTop: '10px',
                  '&:hover': {
                    color: '#dcf836',
                  }
                }}
              >
                 Chris Evans,
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href=""
                sx={{
                 
                  color: '#4280bf',
                  fontSize: '12px',
                  textDecoration: 'none',
                  justifyContent: 'flex-start',
                  marginTop: '10px',
                  '&:hover': {
                    color: '#dcf836',
                  }
                }}
              >
                 Mark Ruffalo,
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href=""
                sx={{
                  
                  color: '#4280bf',
                  fontSize: '12px',
                  textDecoration: 'none',
                  justifyContent: 'flex-start',
                  marginTop: '10px',
                  '&:hover': {
                    color: '#dcf836',
                  }
                }}
              >
                 Scarlett Johansson
              </Typography>
              

            </Box>

          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
    </Box>
  );
}
