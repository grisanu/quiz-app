import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Root from './Root';
import { browserHistory } from 'react-router';
import configureStore from './configureStore';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './index.css';

injectTapEventPlugin();

const store = configureStore({});
const routes = App();

ReactDOM.render(
  <Root history={ browserHistory } routes={ routes } store={ store } />,
  document.getElementById('root')
);
