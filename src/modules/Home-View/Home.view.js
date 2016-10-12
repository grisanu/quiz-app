import React, { PropTypes } from 'react';
import ModeButton from './../../components/ModeButton.js';

const HomeView = props => (
  <div>
    <ModeButton label="EDIT" handleClick={ props.handleEdit } />
    <ModeButton label="STUDENT" handleClick={ props.handleStudent } />
  </div>
);

HomeView.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleStudent: PropTypes.func.isRequired
};

export default HomeView;
