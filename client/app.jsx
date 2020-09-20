'use strict';

import CssBaseline from '@material-ui/core/CssBaseline'; // global css reset
import React from 'react';
import { Container } from '@material-ui/core';
import BottomNav from './components/BottomNav.jsx';

export default function App() {
  return (
    <div>
      <CssBaseline />

      <Container disableGutters={ true }>
        {/* TODO: replace with Grid and list of expenses component */}
      </Container>
      <BottomNav currentTab="expenses"/>
    </div>
  );
}
