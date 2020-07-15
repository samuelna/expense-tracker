'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import { LocaleProvider } from 'antd-mobile';
import enUS from 'antd-mobile/lib/locale-provider/en_US';

ReactDOM.render(
  <LocaleProvider locale={enUS}><App /></LocaleProvider>,
  document.getElementById('app')
);
