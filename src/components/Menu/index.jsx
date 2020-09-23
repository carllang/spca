import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import BusinessIcon from '@material-ui/icons/Business';
import PetsIcon from '@material-ui/icons/Pets';
import { Link } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

const MenuWrapper = () => (
  <div>
    <List component="nav" aria-label="Menu">
      <ListItem button>
        <ListItemIcon>
          <HomeIcon color="secondary" />
        </ListItemIcon>
        <Link to="/" component={RouterLink}>
          <ListItemText primary="Home" />
        </Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <PetsIcon color="secondary" />
        </ListItemIcon>
        <Link to="/animals" component={RouterLink}>
          <ListItemText primary="Animals" />
        </Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <BusinessIcon color="secondary" />
        </ListItemIcon>
        <Link to="/kennels" component={RouterLink}>
          <ListItemText primary="Kennels" />
        </Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <EditIcon color="secondary" />
        </ListItemIcon>
        <Link to="/layoutEditor" component={RouterLink}>
          <ListItemText primary="LayoutEditor" />
        </Link>
      </ListItem>
    </List>
  </div>
);

export default MenuWrapper;
