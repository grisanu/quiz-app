import Submit from './Submit.view.js';
import { connect } from 'react-redux';
import { addEntry } from './addEntryActions';

const mapStateToProps = state => ({
  questionsByQuizId: state.questionsByQuizId,
  session: state.session,
  entries: state.entries
});

const mapDispatchToProps = dispatch => ({
  addEntry: entry => {
    dispatch(addEntry(entry));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Submit);
