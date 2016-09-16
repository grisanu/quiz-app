import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import { cyan500 } from 'material-ui/styles/colors';

const style = {
  color: cyan500
};

const InputField = props => (
  <TextField
    hintText={ props.hint }
    floatingLabelText={ props.label }
    onChange={ props.updateState }
    value={ props.default ? props.default : '' }
    multiLine={ true }
    errorText="This field is required."
    errorStyle={ props.style ? props.style : style }
    rows={ 1 }
  />
);

InputField.propTypes = {
  hint: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  updateState: PropTypes.func.isRequired,
  default: PropTypes.string
};

export default InputField;
