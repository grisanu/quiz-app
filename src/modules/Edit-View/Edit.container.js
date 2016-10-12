import { connect } from 'react-redux';
import Edit from './Edit.view.js';
import { makeQuestionsList } from './makeQuestionsListActions';

class Edit extends React.Component {

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
