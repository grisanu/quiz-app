// import { MAKE_SUMMARY } = from;

const summaryByQuizIdReducer = (state = {}, action) => {
  switch (action.type) {
    case MAKE_SUMMARY:
      return Object.assign({}, state, { [action.quizId]: action.payload });
    default:
      return state;
  }
};

export default summaryByQuizIdReducer;
