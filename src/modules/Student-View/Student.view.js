import React, { Proptypes } from 'react';
import IconButton from 'material-ui/IconButton';
import Next from 'material-ui/svg-icons/av/fast-forward';
import Previous from 'material-ui/svg-icons/av/fast-rewind';

const styles ={
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
  }

  changeQuestion (nextOrPrevious) {

  }

  render () {
    return (
      <div>
        <IconButton
          onTouchTap={ this.changeQuestion.bind(this, 'previous') }
          iconStyle={ styles.mediumIcon }
          style={ styles.medium }
        >
          <Previous />
        </IconButton>
        <IconButton
          onTouchTap={ this.changeQuestion.bind(this, 'next') }
          iconStyle={ styles.mediumIcon }
          style={ styles.medium }
        >
          <Next />
        </IconButton>
      </div>
    );
  }
}

export default Student;
