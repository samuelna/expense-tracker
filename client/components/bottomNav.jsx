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

export default function bottomNav(props) {
  const classes = useStyles();
  const [value, setValue] = useState(props.currentTab);
  const [currentMonth, setCurrentMonth] = useState(null)

  useEffect(() => {
    const date = new Date();
    setCurrentMonth(monthMap[date.getMonth()]);
  });

  return (
    <div>
      <BottomNavigation
        value={value}
        onChange={ (event, newValue) => {
          props.setCurrentTab(newValue)
          setValue(newValue);
        }}
        className={ classes.root }
        showLabels
      >
        <BottomNavigationAction label="Reports" value="reports" icon={ <TrendingDownRounded /> }></BottomNavigationAction>
        <BottomNavigationAction label={ currentMonth } value="currentMonth" icon={ <BarChartRounded /> }></BottomNavigationAction>
        <BottomNavigationAction label="Expenses" value="expenses" icon={ <ViewListRounded /> }></BottomNavigationAction>
      </BottomNavigation>
    </div>
  );
}
