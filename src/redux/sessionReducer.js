import { CHOOSE_MODE } from './../modules/Home-View/chooseModeActions';
import { CHOOSE_QUIZ } from './../modules/Select-View/SelectActions';
import { SAVE_ANSWERS } from './../modules/Student-View/saveAnswersActions';
import { SAVE_SCORE } from './../modules/Student-View/saveScoreActions';
import initialState from './../data/initialState.json';

const sessionReducer = (state = initialState.session, action) => {
  switch (action.type) {
    case CHOOSE_MODE:
      return Object.assign({}, state, { mode: action.payload });
    case CHOOSE_QUIZ:
      return Object.assign({}, state, { currentQuiz: action.payload });
    case SAVE_ANSWERS:
      return Object.assign({}, state, { answers: action.payload });
    case SAVE_SCORE:
      return Object.assign({}, state, { score: action.payload });
    default:
      return state;
  }
};

export default sessionReducer;
