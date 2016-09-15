// import { MAKE_SUMMARY } = from;
import initialState from './../data/initialState.json';

const summaryByQuizIdReducer = (state = initialState.summaryByQuizId, action) => {
  switch (action.type) {
    case MAKE_SUMMARY:
      return Object.assign({}, state, { [action.quizId]: action.payload });
    default:
      return state;
  }
};

export default summaryByQuizIdReducer;
