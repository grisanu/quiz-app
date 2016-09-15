import { connect } from 'react-redux';
import Question from './Question.view.js';
import { addQuestion } from './QuestionActions';

const mapDispatchToProps = dispatch => ({
  addQuestion: (question) => {
    dispatch(addQuestion(question));
  }
});

export default connect(null, mapDispatchToProps)(Question);