import { connect } from 'react-redux';
import Home from './Home.view.js';
import { chooseMode } from './chooseModeActions';

const mapDispatchToProps = dispatch => ({
  chooseMode: mode => {
    dispatch(chooseMode(mode));
  }
});

export default connect(null, mapDispatchToProps)(Home);
