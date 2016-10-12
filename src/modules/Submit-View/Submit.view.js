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
      score: this.props.session.score[0].toString(),
      total: this.props.session.score[1].toString()
    };
  }

  handleClick () {
    browserHistory.push('/');
  }

  render () {
    return (
      <Card>
        <h2>You Got:</h2>
        <h1 style={ style.score }>{ this.state.score + '/' + this.state.total }</h1>
        <CardActions>
          <Button label="Done" handleClick={ this.handleClick.bind(this) }></Button>
        </CardActions>
      </Card>
    );
  }
}

Submit.propTypes = {
  session: PropTypes.object.isRequired,
  questionsByQuizId: PropTypes.object.isRequired
};

export default Submit;
