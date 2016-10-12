import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import EditView from './Edit.view.js';
import { makeQuestionsList } from './makeQuestionsListActions';

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { questionsList: [] };
  }

  componentWillMount () {
    const quizId = this.props.session.currentQuiz.id;
    let questionsList = this.makeList.bind(this)(this.props.questions);

    if (this.props.questionsByQuizId[quizId] === undefined ||
        questionsList.length !== this.props.questionsByQuizId[quizId].length) {
      // update store
      this.props.makeQuestionsList(quizId, questionsList);
      console.log('updated!');
    }

    // update state
    this.setState( { questionsList: questionsList });
  }

  makeList (listOfAllQuestions, cb=a=>a) {
    /**
    * cb(array of question object)
    * Objective: mutate the array to change question object order
    * Return: new array with new order
    */
    return cb(listOfAllQuestions.filter(question => {
      return question.quizId === this.props.session.currentQuiz.id;
    }));
  }

  handleBack () {
    browserHistory.push('/select');
  }

  handleAdd () {
    browserHistory.push('/edit/addQuestion');
  }

  handlePlay () {
    browserHistory.push('/student');
  }

  render () {
    return (
      <EditView
        onTouchTap={ this.handleBack.bind(this) }
        handleAdd={ this.handleAdd.bind(this) }
        handlePlay={ this.handlePlay.bind(this) }
        questionsList={ this.state.questionsList }
        session={ this.props.session }
      />
    );
  }
}

Edit.propTypes = {
  questions: PropTypes.array.isRequired,
  session: PropTypes.object.isRequired,
  questionsByQuizId: PropTypes.object.isRequired,
  makeQuestionsList: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  questionsByQuizId: state.questionsByQuizId,
  questions: state.questions,
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  makeQuestionsList: (quizId, order) => {
    dispatch(makeQuestionsList(quizId, order));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
