import React, { PropTypes } from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

const style = {
  marginBottom: 16
};

const ChoicesButton = props => (
  <RadioButtonGroup
    name={ props.name }
    defaultSelected={ props.default ? props.default : null }
    onChange={ props.handleAnswerType ? props.handleAnswerType : () => {} }
    >
    {
      props.choices.map(choice => (
        <RadioButton
          value={ choice.value }
          label={ choice.label }
          style={ props.style ? props.style : style }
        />
      ))
    }
  </RadioButtonGroup>
);

ChoicesButton.propTypes = {
  choices: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  default: PropTypes.string,
  handleAnswerType: PropTypes.func
};

export default ChoicesButton;
