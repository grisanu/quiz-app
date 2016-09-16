import React, { PropTypes } from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

const style = {
  marginBottom: 16
};

const ChoicesButton = props => (
  <RadioButtonGroup
    name={ props.name }
    valueSelected={ props.default ? props.default : null }
    onChange={ props.updateState ? props.updateState : () => {} }
  >
    {
      props.choices.map((choice, i) => (
        <RadioButton
          key={ i }
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
  updateState: PropTypes.func
};

export default ChoicesButton;
