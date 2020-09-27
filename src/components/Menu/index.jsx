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
          <HomeIcon color="primary" />
        </ListItemIcon>
        <Link to="/" component={RouterLink} color="secondary">
          <ListItemText primary="Home" />
        </Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <PetsIcon color="primary" />
        </ListItemIcon>
        <Link to="/animals" component={RouterLink} color="secondary">
          <ListItemText primary="Animals" />
        </Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <EditIcon color="primary" />
        </ListItemIcon>
        <Link to="/people" component={RouterLink} color="secondary">
          <ListItemText primary="People " />
        </Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <BusinessIcon color="primary" />
        </ListItemIcon>
        <Link to="/kennels" component={RouterLink} color="secondary">
          <ListItemText primary="Kennels" />
        </Link>
      </ListItem>
    </List>
  </div>
);

export default MenuWrapper;
