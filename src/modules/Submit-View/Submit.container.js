import Submit from './Submit.view.js';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  questionsByQuizId: state.questionsByQuizId,
  session: state.session,
  entries: state.entries
});

export default connect(mapStateToProps)(Submit);
