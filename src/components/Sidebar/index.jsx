import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import Menu from '../Menu';
import Logo from '../../images/SPCALogo.png';


const useStyles = makeStyles({
  root: {
    overflow: 'visible',
  },

});

// eslint-disable-next-line react/prefer-stateless-function
const Sidebar = () => {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.root}>
      <img src={Logo} alt="spca logo" style={{ padding: '20px' }} />
      <Menu />
    </Card>
  );
};

export default Sidebar;
