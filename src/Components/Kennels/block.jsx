import React from 'react';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Kennel from './kennel';

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 100,
    minHeight: 50,
    marginRight: 40,
    padding: 5,
    backgroundColor: 'lightgreen',
  },
}));

const Block = ({ block: { location, label } }) => {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      {label}
      {location ? location.map((kennel, id) => <Kennel key={id} kennel={kennel} />) : null}
    </Card>
  );
};

export default Block;
