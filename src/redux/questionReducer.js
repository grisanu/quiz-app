import { ADD_QUESTION } from './../modules/Question-View/QuestionActions';
import initialState from './../data/initialState.json';

const questionReducer = (state = initialState.questions, action) => {
  switch (action.type) {
    case ADD_QUESTION:
      return
        [
          ...state,
          action.payload
        ];
    default:
      return state;
  }
};

export default questionReducer;
