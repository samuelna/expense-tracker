'use strict';

import React from 'react';
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from '@material-ui/core';
import { spacing } from '@material-ui/system';

const dummyData = [
  ['Health', 'Physical Theraphy', 50],
  ['Transportation', 'Uber', 6.51],
  ['Social', 'Lunch w Sojung', 34],
  ['Personal: Food & Drinks', 'Coffee', 2.75],
  ['Bill', 'T-mobile', 79.30]
];

export default function ExpenseList(props) {
  return (
    <Grid container spacing={ 2 }>
      <Grid item xs={ 12 }>
        <div className="data-row">
          <List>
            {
              dummyData.map((el, idx) => (
                <ListItem button key={ idx } >
                  <ListItemText
                    primary={ `${el[0]}` }
                    secondary={ `${el[1]}` }
                  />
                  <ListItemSecondaryAction>
                    <ListItemText edge="end" primary={ `$${el[2].toFixed(2)}` } />
                  </ListItemSecondaryAction>
                </ListItem>
              ))
            }
          </List>
        </div>
      </Grid>
    </Grid>
  );
}
