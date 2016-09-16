import React, { PropTypes } from 'react';
import InputField from './InputField.view.js';
import ChoicesButton from './ChoicesButton.view.js';
import Answer from './Answer.view.js';
import Button from './../Home-View/ModeButton.view.js';
import choices from './../../data/answerTypesAndChoices.json';
import { browserHistory } from 'react-router';

const styles = {
  buttons: {
    display: "block",
    width: "10em"
  }
};

class Question extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      question: '',
      type: 'Boolean',
      answer: ''
    };
  }

  updateState (key, _, value) {
    const newState = key === 'type' ? { [key]: value, answer: '' } : { [key]: value };

    this.setState(newState);
  }

  handleClick (type) {
    if (type === 'submit') {
      this.props.addQuestion({
        id: this.props.questionsByQuizId[this.props.session.currentQuiz.id].length + 1,
        quizId: this.props.session.currentQuiz.id,
        question: this.state.question,
        type: this.state.type,
        answer: this.state.answer
      });
    }

    browserHistory.push('/edit');
  }

  render () {
    return (
      <div>
        <p>Question:</p>
        <InputField
          label="Enter your question here."
          hint="eg. What do cats love?"
          updateState={ this.updateState.bind(this, 'question') }
        />
        <p>Answer Type:</p>
        <ChoicesButton
          name="Answer Type Choices"
          default={ 'Boolean' }
          choices={ choices }
          updateState={ this.updateState.bind(this, 'type') }
        />
        <p>Answer:</p>
        <Answer
          value={ this.state.type }
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
