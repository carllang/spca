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
      <ListItem button to="/" component={RouterLink}>
        <ListItemIcon>
          <HomeIcon color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button to="/animals" component={RouterLink}>
        <ListItemIcon>
          <PetsIcon color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Animals" />
      </ListItem>
      <ListItem button to="/people" component={RouterLink}>
        <ListItemIcon>
          <EditIcon color="secondary" />
        </ListItemIcon>
        <ListItemText primary="People " />
      </ListItem>
      <ListItem button to="/kennels" component={RouterLink}>
        <ListItemIcon>
          <BusinessIcon color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Kennels" />
      </ListItem>
    </List>
  </div>
);

export default MenuWrapper;
