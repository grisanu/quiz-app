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
    const questionsList = this.makeList.bind(this)(this.props.questions);

    // update store
    this.props.makeQuestionsList(this.props.session.currentQuiz.id, questionsList);
    // update state
    this.setState( { questionsList: questionsList });
  }

  makeList (listOfAllQuestions, cb) {
    /**
    * cb(array of question object)
    * Objective: mutate the array to change question object order
    * Return: new array with new order
    */
    cb = cb === undefined ? arr => arr : cb;

    return cb(listOfAllQuestions.filter(question => {
      return question.quizId === this.props.session.currentQuiz.id;
    }));
  }

  handleBack () {
    browserHistory.push('/select');
  }

  handleAdd () {
    browserHistory.push('/edit/addQuestion');
  }

  handlePlay () {
    browserHistory.push('/student');
  }

  render () {
    return (
      <div>
        <IconButton
          onTouchTap={ this.handleBack.bind(this) }
          iconStyle={ styles.largeIcon }
          style={ styles.large }
        >
          <BackArrow />
        </IconButton>
        <Button
          label="Add A Question"
          handleClick={ this.handleAdd.bind(this) }
          style={ styles.questionButton }
        />
        <Button
          label="Student Mode"
          handleClick={ this.handlePlay.bind(this) }
          style={ styles.questionButton }
        />
        <QuestionsTable
          questionsList={ this.state.questionsList }
          session={ this.props.session }
        />
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
