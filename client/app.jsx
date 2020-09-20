'use strict';

import CssBaseline from '@material-ui/core/CssBaseline'; // global css reset
import React, { useState } from 'react';
import {
  Box,
  Container
} from '@material-ui/core';
import { spacing } from '@material-ui/system';
import BottomNav from './components/BottomNav.jsx';
import ExpenseList from './components/ExpenseList.jsx';
import MonthData from './components/MonthData.jsx';
import Reports from './components/Reports.jsx';
import './app.scss';

const MainBody = (props) => {
  switch(props.tab) {
    case 'expenses':
      return <ExpenseList />
      break;
    case 'currentMonth':
      return <MonthData />
      break;
    case 'reports':
      return <Reports />
      break;
    default:
      return <ExpenseList />
  }
};

export default function App() {
  const [currentTab, setCurrentTab] = useState('expenses');

  return (
    <div>
      <CssBaseline />

      <Container disableGutters={ true } className="body-container" p={ 2 }>
        <Box p={ 2 }>
          <MainBody tab={ currentTab } />
        </Box>
      </Container>
      <BottomNav currentTab={ currentTab } setCurrentTab={ setCurrentTab } />
    </div>
  );
}
