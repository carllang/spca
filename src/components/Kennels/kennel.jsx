import React from 'react';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 100,
    minHeight: 50,
    padding: 5,
    marginBottom: 10,
    backgroundColor: 'white',
  },
}));

const Kennel = ({ kennel: { id } }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <span>
        {id}
      </span>
    </Card>
  );
};

export default Kennel;
