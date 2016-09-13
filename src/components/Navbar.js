import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

const Navbar = () => (
  <AppBar
    title="terminal.com Quiz"
    iconElementLeft={ <IconButton><ActionHome /></IconButton> }
  />
);

export default Navbar;
