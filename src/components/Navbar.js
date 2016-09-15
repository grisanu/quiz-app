import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import { browserHistory } from 'react-router';

const backToHome = () => {
  browserHistory.push('/');
};

const Navbar = props => (
  <div>
    <AppBar
      title="Terminal Quiz"
      iconElementLeft={
        <IconButton onTouchTap={ backToHome }>
          <ActionHome />
        </IconButton> }
      onTitleTouchTap={ backToHome }
    />
    <div>
      { props.children }
    </div>
  </div>
);

export default Navbar;
