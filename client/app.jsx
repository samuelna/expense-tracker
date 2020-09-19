'use strict';

import React from 'react';
import Button from '@material-ui/core/Button';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>hello this my react app component</h1>
        <p>wowwww</p>

        <Button color="primary" variant="contained">Test button</Button>
      </div>
    );
  }
}
