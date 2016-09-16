import React, { PropTypes } from 'react';
import Answer from './../../components/Answer.js';
import {Card, CardActions} from 'material-ui/Card';
import { cyan500 } from 'material-ui/styles/colors';

const style = {
  progress: {
    color: cyan500
  },
  question: {
    textAlign: 'center'
  }
};

const QuestionCard = props => (
  <Card>
    <h1 style={ style.progress }>{ (props.current).toString()+'/'+(props.total).toString() }</h1>
    <h2 style={ style.question }>
      { props.question.question }
    </h2>
    <CardActions>
      <Answer
        value={ props.question.type }
        default={ props.default }
        updateState={ props.updateState }
        choices={ props.answerChoices[props.question.type] }
      />
    </CardActions>
  </Card>
);

QuestionCard.propTypes = {
  question: PropTypes.object.isRequired,
  answerChoices: PropTypes.object.isRequired,
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  updateState: PropTypes.func.isRequired,
  default: PropTypes.string
};

export default QuestionCard;
