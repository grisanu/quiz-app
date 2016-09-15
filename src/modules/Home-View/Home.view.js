import React from 'react';
import ModeButton from './ModeButton.view.js';
import { browserHistory } from 'react-router';

class Home extends React.Component {
  constructor (props) {
    super(props);
  }

  handleClick (mode) {
    this.props.chooseMode(mode);
    browserHistory.push('/select');
  }

  render () {
    return (
      <div>
        <ModeButton label="EDIT" handleClick={ this.handleClick.bind(this, "edit") } />
        <ModeButton label="STUDENT" handleClick={ this.handleClick.bind(this, "student") } />
      </div>
    );
  }
}
export default Home;
