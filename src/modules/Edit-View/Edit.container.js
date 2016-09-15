import { connect } from 'react-redux';
import Edit from './Edit.view.js';
import { makeQuestionsList } from './makeQuestionsListActions';

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