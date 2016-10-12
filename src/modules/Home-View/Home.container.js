import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { chooseMode } from './chooseModeActions';
import HomeView from './Home.view.js';

class Home extends React.Component {
  handleClick (mode) {
    this.props.chooseMode(mode);
    browserHistory.push('/select');
  }

  render () {
    return (
      <HomeView
        handleEdit={ this.handleClick.bind(this, 'edit') }
        handleStudent={ this.handleClick.bind(this, 'student') }
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  chooseMode: mode => {
    dispatch(chooseMode(mode));
  }
});

export default connect(null, mapDispatchToProps)(Home);
