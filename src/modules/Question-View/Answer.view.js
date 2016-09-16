import React, { PropTypes } from 'react';
import InputField from './InputField.view.js';
import ChoicesButton from './ChoicesButton.view.js';

const Answer = props => {
  if (props.value === 'Boolean') {
    return (
      <ChoicesButton
        name="Possible Choices"
        updateState={ props.updateState }
        choices={ props.choices }
        default={ props.default }
      />
    );
  } else if (props.value === 'String') {
    return (
      <InputField
        label="Enter your answer here."
        hint="eg. A great pair of boots!"
        updateState={ props.updateState }
        default={ props.default }
      />
    );
  }
};

Answer.propTypes = {
  value: PropTypes.string.isRequired,
  updateState: PropTypes.func.isRequired,
  choices: PropTypes.array,
  default: PropTypes.string
};

export default Answer;
