'use strict';

import React from 'react';
import { DatePicker, List } from 'antd-mobile';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>hello this my react app component</h1>
        <p>wowwww</p>
        <DatePicker
          mode="date"
          title="Select Date"
          value=""
          // onChange={}
        >
          <List.Item arrow="horizontal">Date</List.Item>
        </DatePicker>
      </div>
    );
  }
}
