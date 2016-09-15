import React, { PropTypes } from 'react';
import InputField from './InputField.view.js';
import ChoicesButton from './ChoicesButton.view.js';

const Answer = props => {
  if (props.value === 'Boolean') {
    return (
      <ChoicesButton
        name="Possible Choices"
        choices={
          [
            { value: 'true', label: 'True' },
            { value: 'false', label: 'False'}
          ]
        }
      />
    );
  } else if (props.value === 'String') {
    return (
      <InputField hint="Enter answer here..." label="Answer" />
    );
  }
};

Answer.propTypes = {
  value: PropTypes.string.isRequired
};

export default Answer;
