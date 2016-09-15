import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import { blue500 } from 'material-ui/styles/colors';

const style = {
  color: blue500
};

const InputField = props => (
  <TextField
    hintText={ props.hint }
    floatingLabelText={ props.label }
    multiLine={true}
    errorText="This field is required."
    errorStyle={ props.style ? props.style : style }
    rows={1}
  />
);

InputField.proptypes = {
  hint: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default InputField;
