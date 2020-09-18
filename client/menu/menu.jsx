/* eslint global-require:0, no-nested-ternary:0 */

'use strict';

import React from 'react';

import { Icon } from 'antd-mobile';
import { TabBar } from 'antd-mobile';

import './menu.less';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      fullScreen: true
    }
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: '60px' }}>Clicked {pageText} tab. Show {pageText} data</div>
        <a
          style={{ display: 'block', marginBottom: '600', color: '#108ee9' }}
          onClick={ev => {
            ev.preventDefault();
            this.setState({ fullScreen: !this.state.fullScreen });
          }}
        >
          Click to toggle full screen
        </a>
      </div>
    );
  }

  render() {
    return (
      <div style={ this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 } }>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={ this.state.hidden }
        >
          <TabBar.Item
            title="Add Expense"
            key="add-expense"
            icon={
              <div style={{
                  width: "22px",
                  height: "22px",
                  background: "url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
            selected={ this.state.selectedTab === 'blueTab' }
            onPress={ () => { this.setState({ selectedTab: 'blueTab' }) }}
            data-seed="addExpense"
          >
            { this.renderContent('Add Expense') }
          </TabBar.Item>

          <TabBar.Item
            title="Report"
            key="report"
            icon={
              <div style={{
                  width: "22px",
                  height: "22px",
                  background: "url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
            selected={ this.state.selectedTab === 'blueTab' }
            onPress={ () => { this.setState({ selectedTab: 'blueTab' }) }}
            data-seed="report"
          >
            { this.renderContent('Check Report') }
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
