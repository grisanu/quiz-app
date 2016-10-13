import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import QuestionView from './Question.view.js';
import choices from './../../data/answerTypesAndChoices.json';
import { addQuestion } from './QuestionActions';

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
      <QuestionView

      />
    );
  }
}

const mapStateToProps = state => ({
  questionsByQuizId: state.questionsByQuizId,
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  addQuestion: question => {
    dispatch(addQuestion(question));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
