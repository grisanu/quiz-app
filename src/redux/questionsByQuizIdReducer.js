import { MAKE_QUESTIONS_LIST } from './../modules/Edit-View/makeQuestionsListActions';
import initialState from './../data/initialState.json';

const questionsByQuizIdReducer = (state = initialState.questionsByQuizId, action) => {
  switch (action.type) {
    case MAKE_QUESTIONS_LIST:
      return Object.assign({}, state, { [action.quizId]: action.payload });
    default:
      return state;
  }
};

export default questionsByQuizIdReducer;
