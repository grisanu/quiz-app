import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  display: "block",
  width: "30%",
  margin: "15em auto",
};

const ModeButton = props => (
  <RaisedButton
    label={ props.label }
    secondary={ true }
    onTouchTap={ props.handleClick }
    style={ props.style ? props.style : style }
  />
);

ModeButton.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  style: PropTypes.object
};

export default ModeButton;
