import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import { makeStyles } from '@material-ui/core/styles';
import BusinessIcon from '@material-ui/icons/Business';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const MenuWrapper = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.root} color="primary">

        <List component="nav" aria-label="Menu">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <Link to="/" component={RouterLink}>
              <ListItemText primary="Home" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <Link to="/admission" component={RouterLink}>
              <ListItemText primary="Admission" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <BusinessIcon />
            </ListItemIcon>
            <Link to="/kennels" component={RouterLink}>
              <ListItemText primary="Kennels" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <BusinessIcon />
            </ListItemIcon>
            <Link to="/layoutEditor" component={RouterLink}>
              <ListItemText primary="LayoutEditor" />
            </Link>
          </ListItem>
        </List>
      </Typography>

    </div >
  );
};

export default MenuWrapper;
