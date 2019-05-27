import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ConfigProvider, LocaleProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'

ReactDOM.render(<ConfigProvider><LocaleProvider locale={zh_CN}><App /></LocaleProvider></ConfigProvider>, document.getElementById('root'));