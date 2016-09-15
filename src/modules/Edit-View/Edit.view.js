import React, { PropTypes } from 'react';
import Button from './../Home-View/ModeButton.view.js';
import IconButton from 'material-ui/IconButton';
import BackArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import QuestionsTable from './QuestionsTable.view.js';
import { browserHistory } from 'react-router';

const styles = {
  questionButton: {
    display: "inline-block",
    width: "10em"
  },
  largeIcon: {
    width: 60,
    height: 60
  },
  large: {
    width: 120,
    height: 120,
    padding: 30
  }
};

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { questionsList: [] };
  }

  componentWillMount () {
    this.setState( { questionsList: this.makeList(this.props.questions).bind(this) });
  }

  makeList (listOfAllQuestions) {
    this.session.quiz.
  }

  handleBack () {
    browserHistory.push('/select');
  }

  handleAdd () {
    // browserHistory.push();
  }

  render () {
    return (
      <div>
        <IconButton onTouchTap={ this.handleBack.bind(this) } iconStyle={ styles.largeIcon } style={ styles.large }>
          <BackArrow />
        </IconButton>
        <Button label="Add A Question" handleClick={ this.handleAdd.bind(this) } style={ styles.questionButton }/>
      {JSON.stringify(this.props.questions)}
      <QuestionsTable />
      </div>
    );
  }
}

Edit.proptypes = {
  questions: PropTypes.array.isRequired,
  session: PropTypes.object.isRequired,
  questionsByQuizId: PropTypes.object.isRequired,
  makeQuestionsList: PropTypes.func.isRequired
};

export default Edit;
