import { connect } from 'react-redux';
import Student from './Student.view.js';
import { makeQuestionsList } from './../Edit-View/makeQuestionsListActions';

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

export default connect(mapStateToProps, mapDispatchToProps)(Student);
