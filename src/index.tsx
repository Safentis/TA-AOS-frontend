import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App/App';

import './index.css';
import 'antd/dist/antd.css';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={'TA-AOS-frontend/'}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
