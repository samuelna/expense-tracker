'use strict';

import CssBaseline from '@material-ui/core/CssBaseline'; // global css reset
import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import BottomNav from './components/BottomNav.jsx';
import Data from './components/Data.jsx';
import ExpenseList from './components/ExpenseList.jsx';
import MonthData from './components/MonthData.jsx';
import Reports from './components/Reports.jsx';
import './app.scss';

const MainBody = (props) => {
  switch(props.tab) {
    case 'expenses':
      if (props.selectedData === null) {
        return <ExpenseList data={ props.data } setSelectedData={ props.setSelectedData }/>
      } else {
        return <Data data={ props.selectedData }/>
      }
      break;
    case 'currentMonth':
      return <MonthData />
      break;
    case 'reports':
      return <Reports />
      break;
    default:
      return <ExpenseList data={ props.data } setSelectedData={ props.setSelectedData }/>
  }
};

export default function App() {
  const [currentTab, setCurrentTab] = useState('expenses');
  const [selectedData, setSelectedData] = useState(null);

  return (
    <div>
      <CssBaseline />

      <Container disableGutters={ true } className="body-container" p={ 2 }>
        <MainBody tab={ currentTab } selectedData={ selectedData } setSelectedData={ setSelectedData }/>
      </Container>
      <BottomNav currentTab={ currentTab } setCurrentTab={ setCurrentTab } setSelectedData={ setSelectedData }/>
    </div>
  );
}
