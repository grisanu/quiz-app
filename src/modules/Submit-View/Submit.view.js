import React, { PropTypes } from 'react';
import Button from './../../components/ModeButton.js';
import {Card, CardActions} from 'material-ui/Card';
import { cyan500 } from 'material-ui/styles/colors';
import { browserHistory } from 'react-router';

const style = {
  score: {
    textAlign: 'center',
    color: cyan500,
    fontSize: '10em'
  }
};

class Submit extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      score: 0,
      total: 0
    };
  }

  componentWillMount () {
    /**
    * Answers are compared and scores are computed here
    */
    const quizId = this.props.session.currentQuiz.id;
    const answers = this.props.session.answers;
    const questions = this.props.questionsByQuizId[quizId];
    const entryScore = answers.reduce((score, answer, index) => {
      return answer === questions[index].answer ? score+1 : score;
    }, 0);

    this.setState({ score: entryScore, total: answers.length }, () => {
      this.props.addEntry({
        id: this.props.entries.length+1,
        quizId: quizId,
        score: [ entryScore, answers.length ]
      });
    });
  }

  handleClick () {
    browserHistory.push('/');
  }

  render () {
    return (
      <Card>
        <h2>You Got:</h2>
        <h1 style={ style.score }>{ this.state.score.toString() + '/' + this.state.total.toString() }</h1>
        <CardActions>
          <Button label="Done" handleClick={ this.handleClick.bind(this) }></Button>
        </CardActions>
      </Card>
    );
  }
}

Submit.propTypes = {
  session: PropTypes.object.isRequired,
  questionsByQuizId: PropTypes.object.isRequired,
  entries: PropTypes.array.isRequired,
  addEntry: PropTypes.func.isRequired
};

export default Submit;
