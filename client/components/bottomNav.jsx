'use strict';

import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  BottomNavigation,
  BottomNavigationAction,
} from '@material-ui/core';
import {
  BarChartRounded,
  TrendingDownRounded,
  ViewListRounded
} from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    // width: 500,
  },
});

const monthMap = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'Jun',
  6: 'Jul',
  7: 'Aug',
  8: 'Sep',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec'
};

export default function BottomNav(props) {
  const [value, setValue] = useState('expenses');
  const classes = useStyles();
  const [currentMonth, setCurrentMonth] = useState(null)

  useEffect(() => {
    const date = new Date();
    setCurrentMonth(monthMap[date.getMonth()]);
  });

  return (
    <div>
      <BottomNavigation
        value={value}
        onChange={ (event, newValue) => setValue(newValue) }
        className={ classes.root }
        showLabels
      >
        <BottomNavigationAction label="Data" value="data" icon={ <TrendingDownRounded /> }></BottomNavigationAction>
        <BottomNavigationAction label={ currentMonth } value="currentMonth" icon={ <BarChartRounded /> }></BottomNavigationAction>
        <BottomNavigationAction label="Expenses" value="expenses" icon={ <ViewListRounded /> }></BottomNavigationAction>
      </BottomNavigation>
    </div>
  );
}
