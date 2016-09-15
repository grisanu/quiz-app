import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const Root = (props) => (
  <MuiThemeProvider>
    <Provider store={ props.store }>
      <Router history={ props.history }>
        { props.routes }
      </Router>
    </Provider>
  </MuiThemeProvider>
);

Root.propTypes = {
  history: PropTypes.object.isRequired,
  routes: PropTypes.element.isRequired,
  store: PropTypes.object.isRequired
};

export default Root;
