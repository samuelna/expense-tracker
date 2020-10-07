'use strict';

import React, { useState, useEffect } from 'react';
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

const fetchExpenses = async () => {
  await fetch('/expenses')
    .then(res => res.json())
    .then(data => setExpenses(data.expenses))
    .catch(err => console.error('Error retrieving expenses'));
};

export default function ExpenseList(props) {
  const classes = useStyles();
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchExpenses();
  });

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
