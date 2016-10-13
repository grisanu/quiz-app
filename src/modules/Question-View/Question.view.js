import React, { PropTypes } from 'react';
import InputField from './../../components/InputField.js';
import ChoicesButton from './../../components/ChoicesButton.js';
import Answer from './../../components/Answer.js';
import Button from './../../components/ModeButton.js';

const styles = {
  buttons: {
    display: "block",
    width: "10em"
  }
};

class Question extends React.Component {

  render () {
    return (
      <div>
        <p>Question:</p>
        <InputField
          label="Enter your question here."
          hint="eg. What do cats love?"
          default={ this.state.question === '' ? null : this.state.question }
          updateState={ this.updateState.bind(this, 'question') }
        />
        <p>Answer Type:</p>
        <ChoicesButton
          name="Answer Type Choices"
          default={ this.state.type }
          choices={ choices }
          updateState={ this.updateState.bind(this, 'type') }
        />
        <p>Answer:</p>
        <Answer
          value={ this.state.type }
          default={ this.state.answer === '' ? null : this.state.answer }
          updateState={ this.updateState.bind(this, 'answer') }
          choices={ choices.filter(type => type.value === this.state.type)[0].choices }
        />
        <Button
          label="Cancel"
          style={ styles.buttons }
          handleClick={ this.handleClick.bind(this, 'cancel') }
        />
        <Button
          label="Submit"
          style={ styles.buttons }
          handleClick={ this.handleClick.bind(this, 'submit') }
        />
      </div>
    );
  }
}

Question.propTypes = {
  addQuestion: PropTypes.func.isRequired,
  questionsByQuizId: PropTypes.object.isRequired,
  session: PropTypes.object.isRequired
};

export default Question;
