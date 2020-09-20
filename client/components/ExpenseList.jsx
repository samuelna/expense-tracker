'use strict';

import React from 'react';
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    height: 'inherit'
  },
  item: {
    height: 'inherit',
    overflow: 'auto'
  }
});

export default function ExpenseList(props) {
  const classes = useStyles();

  return (
    <Grid container className={ classes.container }>
      <Grid item xs={ 12 } className={ classes.item }>
        <List>
          {
            props.data.map((el, idx) => (
              <ListItem
                button
                key={ idx }
                onClick={ (event) => props.setSelectedData(el) }
              >
                <ListItemText
                  primary={ `${el[0]}` }
                  secondary={ `${el[1]}` }
                />
                <ListItemSecondaryAction>
                  <ListItemText edge="end" primary={ `$${el[2].toFixed(2)}` }/>
                </ListItemSecondaryAction>
              </ListItem>
            ))
          }
        </List>
      </Grid>
    </Grid>
  );
}
