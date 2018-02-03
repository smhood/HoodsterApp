import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router histoy={browserHistory} routes={routes} />,
  document.getElementById('root')
);
