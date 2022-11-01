import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import { Typography } from '@mui/material';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import OnTVSlide from '../components/OnTVSlider';
import Link from 'next/link';



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

export default function BasicTabs(data) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <Box sx={{ width: '100%' }}>
      <Typography variant="h6" sx={{ mb: '4px', pt: 3, color: '#fff' }}>
        ON TV
      </Typography>
      <Link href="/theater/top_rated?page=1" variant="h6" sx={{ color: '#fff' }}>
         <a>View Alls</a>
      </Link>
      <Box >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="#POPULAR" {...a11yProps(0)} />
          <Tab label="#COMING SOON" {...a11yProps(1)} />
          <Tab label="#TOP RATE" {...a11yProps(2)} />
          <Tab label="#MOST REVIEW" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <OnTVSlide theaterSlideData={data}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <OnTVSlide theaterSlideData={data}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <OnTVSlide theaterSlideData={data} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <OnTVSlide theaterSlideData={data} />
      </TabPanel>
    </Box>
  );
}