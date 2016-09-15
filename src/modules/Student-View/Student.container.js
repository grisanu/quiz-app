import { connect } from 'react-redux';
import Student from './Student.view.js';

const mapStateToProps = state => ({
  questionsByQuizId: state.questionsByQuizId,
  questions: state.questions,
  session: state.session
});

export default connect(mapStateToProps)(Student);
