import { MAKE_QUESTIONS_LIST } from './../modules/Edit-View/makeQuestionsListActions';

const questionsByQuizIdReducer = (state = {}, action) => {
  switch (action.type) {
    case MAKE_QUESTIONS_LIST:
      return Object.assign({}, state, { [action.quizId]: action.payload });
    default:
      return state;
  }
};

export default questionsByQuizIdReducer;
