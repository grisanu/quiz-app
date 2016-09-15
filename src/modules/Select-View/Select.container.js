import { connect } from 'react-redux';
import Select from './Select.view.js';
import { chooseQuiz } from './SelectActions';
import { chooseMode } from './../Home-View/chooseModeActions';

const mapStateToProps = state => ({
  quizzes: state.quizzes,
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  chooseQuiz: quiz => {
    dispatch(chooseQuiz(quiz));
  },
  chooseMode: mode => {
    dispatch(chooseMode(mode));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Select);
