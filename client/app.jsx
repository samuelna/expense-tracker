'use strict';

import React, { useState } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import {
  BottomNavigation,
  BottomNavigationAction,
} from '@material-ui/core';
import {
  AddRounded,
  BarChartRounded,
  TrendingDownRounded
} from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function App() {
  // declare value state variable which initializes to 0
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const [currentMonth, setCurrentMonth] = useState('Sept')

  return (
    <div>
      <CssBaseline/>

      <BottomNavigation
        value={value}
        onChange={ (event, newValue) => setValue(newValue) }
        className={ classes.root }
        showLabels
      >
        <BottomNavigationAction label="Data" icon={ <TrendingDownRounded /> }></BottomNavigationAction>
        <BottomNavigationAction label={ currentMonth } icon={ <BarChartRounded /> }></BottomNavigationAction>
        <BottomNavigationAction label="Add" icon={ <AddRounded /> }></BottomNavigationAction>
      </BottomNavigation>
    </div>
  );
}
