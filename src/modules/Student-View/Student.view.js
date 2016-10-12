import React, { PropTypes } from 'react';
import QuestionCard from './QuestionCard.view.js';
import IconButton from 'material-ui/IconButton';
import Next from 'material-ui/svg-icons/av/fast-forward';
import Previous from 'material-ui/svg-icons/av/fast-rewind';
import Button from './../../components/ModeButton.js';
import answerType from './../../data/answerTypesAndChoices.json';
import { browserHistory } from 'react-router';

const choicesByAnswerType = answerType.reduce((acc, type) => {
  acc[type.value] = type.choices;
  return acc;
}, {});

const styles ={
  buttons: {
    display: "inline-block",
    width: "10em"
  },
  mediumIcon: {
    width: 48,
    height: 48,
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24,
  }
};

class Student extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      questionsList: [],
      currentQuestionIndex: 0,
      answers: []
    };
  }

  componentWillMount () {
    const quizId = this.props.session.currentQuiz.id;
    let questionsList = this.props.questionsByQuizId[quizId];

    if (questionsList === undefined) {
      // makes new list order
      questionsList = this.makeList.bind(this)(this.props.questions);
      // update store
      this.props.makeQuestionsList(quizId, questionsList);
      console.log('updated!');
    }

    // update state
    this.setState( { questionsList: questionsList });
  }

  makeList (listOfAllQuestions, cb=a=>a) {
    /**
    * cb(array of question object)
    * Objective: mutate the array to change question object order
    * Return: new array with new order
    */

    return cb(listOfAllQuestions.filter(question => {
      return question.quizId === this.props.session.currentQuiz.id;
    }));
  }

  changeQuestion (nextOrPrevious) {
    if (nextOrPrevious === 'next') {
      this.setState({ currentQuestionIndex: this.state.currentQuestionIndex+1 });
    } else if (nextOrPrevious === 'previous') {
      this.setState({ currentQuestionIndex: this.state.currentQuestionIndex-1 });
    }
  }

  updateState (_, value) {
    const newAnswer = this.state.answers.slice();
    newAnswer[this.state.currentQuestionIndex] = value;

    this.setState({ answers: newAnswer });
  }

  handleSubmit () {
    const quizId = this.props.session.currentQuiz.id;
    const answers = this.state.answers;
    const questions = this.props.questionsByQuizId[quizId];
    /**
    * Answers saved
    */
    this.props.saveAnswers(answers);

    /**
    * Answers are compared and scores are computed here
    */
    const entryScore = answers.reduce((score, answer, index) => {
      return answer === questions[index].answer ? score+1 : score;
    }, 0);

    // save score
    this.props.saveScore([entryScore, answers.length]);
    // save entry
    this.props.addEntry({
      id: this.props.entries.length+1,
      quizId: quizId,
      score: [ entryScore, answers.length ]
    });

    browserHistory.push('/student/submit');
  }

  render () {
    return (
      <div>
        <QuestionCard
          question={ this.state.questionsList[this.state.currentQuestionIndex] }
          answerChoices={ choicesByAnswerType }
          current={ this.state.currentQuestionIndex + 1 }
          total={ this.state.questionsList.length }
          updateState={ this.updateState.bind(this) }
          default={ this.state.answers[this.state.currentQuestionIndex] === undefined ? null : this.state.answers[this.state.currentQuestionIndex] }
        />
        <IconButton
          onTouchTap={ this.changeQuestion.bind(this, 'previous') }
          iconStyle={ styles.mediumIcon }
          disabled={ this.state.currentQuestionIndex < 1 ? true : false }
          style={ styles.medium }
        >
          <Previous />
        </IconButton>
        <IconButton
          onTouchTap={ this.changeQuestion.bind(this, 'next') }
          iconStyle={ styles.mediumIcon }
          disabled={ this.state.currentQuestionIndex + 1 === this.state.questionsList.length ? true : false }
          style={ styles.medium }
        >
          <Next />
        </IconButton>
        <Button
          label="Submit"
          style={ styles.buttons }
          disabled={ this.state.answers.length !== this.state.questionsList.length ? true : false }
          handleClick={ this.handleSubmit.bind(this) }
        />
      </div>
    );
  }
}

Student.propTypes = {
  questions: PropTypes.array.isRequired,
  session: PropTypes.object.isRequired,
  entries: PropTypes.array.isRequired,
  questionsByQuizId: PropTypes.object.isRequired,
  makeQuestionsList: PropTypes.func.isRequired,
  saveAnswers: PropTypes.func.isRequired,
  saveScore: PropTypes.func.isRequired,
  addEntry: PropTypes.func.isRequired
};

export default Student;
