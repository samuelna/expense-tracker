'use strict';

import CssBaseline from '@material-ui/core/CssBaseline'; // global css reset
import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import BottomNav from './components/BottomNav.jsx';

export default function App() {
  const [currentTab, setCurrentTab] = useState('expenses');

  return (
    <div>
      <CssBaseline />

      <Container disableGutters={ true } className="body-container">
        {/* TODO: replace with Grid and list of expenses component */}
      </Container>
      <BottomNav currentTab={ currentTab } setCurrentTab={ setCurrentTab } />
    </div>
  );
}
