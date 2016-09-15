import React, { PropTypes } from 'react';
import InputField from './InputField.view.js';
import ChoicesButton from './ChoicesButton.view.js';
import Answer from './Answer.view.js';
import { browserHistory } from 'react-router';

const styles = {
};

/** Answer types
*
*
*/
const choices = [
  { value: 'Boolean', label: 'True/False'},
  { value: 'String', label: 'Text' }
];

class Question extends React.Component {
  constructor (props) {
    super(props);
    this.state = { answerType: choices[0].value };
  }

  handleAnswerType (e, value) {
    this.setState({ answerType: value }, () => {
      console.log(JSON.stringify(this.state));
    });
  }

  render () {
    return (
      <div>
        <InputField hint="Enter question here..." label="Question" />
        { "Answer Type:" }
        <ChoicesButton name="Answer Type Choices" default={ choices[0].value } choices={ choices } handleAnswerType={ this.handleAnswerType.bind(this) }/>
        <Answer value={ this.state.answerType } />
      </div>
    );
  }
}

Question.proptypes = {
  addQuestion: PropTypes.func.isRequired
};

export default Question;
