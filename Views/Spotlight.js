import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function AlignItemsList() {
  return (
    
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'none', paddingLeft: '0px' }}>
       <Typography variant="h6" sx={{ mb: '25px', pt: 3, color: '#fff', borderBottom: '1px solid #405266' }}>
       SPOTLIGHT CELEBRITIES
      </Typography>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="./ava1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography
                sx={{
                  display: 'inline', color: '#fff', textDecoration: 'none',
                  '&:hover': {
                    color: '#dcf836',

                  }
                }}
                component="a"
                href=""
                fontSize="12px"

              >
                Samuel N. Jack
              </Typography>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="#fff"
              >
                ACTOR
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="./ava2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography
                sx={{
                  display: 'inline', color: '#fff', textDecoration: 'none',
                  '&:hover': {
                    color: '#dcf836',

                  }
                }}
                component="a"
                href=""
                fontSize="12px"
                color="#fff"
              >
                Benjamin Carroll
              </Typography>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="#fff"
              >
                ACTOR
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start" >
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="ava3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography
                sx={{
                  display: 'inline', color: '#fff', textDecoration: 'none',
                  '&:hover': {
                    color: '#dcf836',

                  }
                }}
                component="a"
                href=""
                fontSize="12px"
                color="#fff"
              >
                Beverly Griffin
              </Typography>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="#fff"
              >
                ACTOR
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="ava4.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography
                sx={{
                  display: 'inline', color: '#fff', textDecoration: 'none',
                  '&:hover': {
                    color: '#dcf836',

                  }
                }}
                component="a"
                href=""
                fontSize="12px"
                color="#fff"
              >
                Justin Weaver
              </Typography>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="#fff"
              >
                ACTOR
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
