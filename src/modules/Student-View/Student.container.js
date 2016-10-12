import Student from './Student.view.js';
import { connect } from 'react-redux';
import { makeQuestionsList } from './../Edit-View/makeQuestionsListActions';
import { saveAnswers } from './saveAnswersActions';
import { addEntry } from './addEntryActions';

const mapStateToProps = state => ({
  questionsByQuizId: state.questionsByQuizId,
  questions: state.questions,
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  makeQuestionsList: (quizId, order) => {
    dispatch(makeQuestionsList(quizId, order));
  },
  saveAnswers: answers => {
    dispatch(saveAnswers(answers));
  },
  addEntry: entry => {
    dispatch(addEntry(entry));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Student);
