import { CHOOSE_MODE } from './../modules/Home-View/chooseModeActions';
import { CHOOSE_QUIZ } from './../modules/Select-View/SelectActions';

const sessionReducer = (state = {}, action) => {
  switch (action.type) {
    case CHOOSE_MODE:
      return Object.assign({}, state, { mode: action.payload });
    case CHOOSE_QUIZ:
      return Object.assign({}, state, { currentQuiz: action.payload });
    default:
      return state;
  }
};

export default sessionReducer;
