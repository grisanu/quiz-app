import { connect } from 'react-redux';
import Question from './Question.view.js';
import { addQuestion } from './QuestionActions';

const mapStateToProps = state => ({
  questionsByQuizId: state.questionsByQuizId,
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  addQuestion: (question) => {
    dispatch(addQuestion(question));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);