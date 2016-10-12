import React, { PropTypes } from 'react';
import Button from './../../components/ModeButton.js';
import IconButton from 'material-ui/IconButton';
import BackArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import QuestionsTable from './QuestionsTable.view.js';

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

const EditView = props => (
  <div>
    <IconButton
      onTouchTap={ props.onTouchTap }
      iconStyle={ styles.largeIcon }
      style={ styles.large }
    >
      <BackArrow />
    </IconButton>
    <Button
      label="Add A Question"
      handleClick={ props.handleAdd }
      style={ styles.questionButton }
    />
    <Button
      label="Student Mode"
      handleClick={ props.handlePlay }
      style={ styles.questionButton }
    />
    <QuestionsTable
      questionsList={ props.questionsList }
      session={ props.session }
    />
  </div>
);

EditView.PropTypes = {
  onTouchTap: PropTypes.func.isRequired,
  handleAdd: PropTypes.func.isRequired,
  handlePlay: PropTypes.func.isRequired,
  questionsList: PropTypes.array.isRequired,
  session: PropTypes.object.isRequired
};

export default EditView;
