import * as React from "react";
import { Box } from "@mui/system";
import Spotlight from "../Views/Spotlight";
import Typography from "@mui/material/Typography";

const RightSide = () => {
  return (
    <React.Fragment>
      <Box
        component="img"
        src="./ads1.png"
        alt="ADS"
        sx={{ mb: '4px', pt: 3, pl: { xs: '0px', md: '43px' } }}
      />
      <Box sx={{ width: '375px' ,mb: '4px', pt: 3, pl: { xs: '0px', md: '43px' } }}>
        <Spotlight />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href=""
          sx={{
            display: { xs: 'flex' },
            flexGrow: 1,
            color: '#fff',
            fontSize: '12px',
            textDecoration: 'none',
            justifyContent: 'flex-start',
            marginTop: '10px',
            '&:hover': {
              color: '#dcf836',
            }
          }}
      >
        SELL ALL CELEBRITIES
      </Typography>
      </Box>
     
    </React.Fragment>
  );
}

export default RightSide;