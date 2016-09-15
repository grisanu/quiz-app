// import { ADD_QUIZ } from ;

export const initialState =
  {
    quizzes:
    [
      { id: 0, name: 'Cats?' }
    ]
  };

const quizReducer = (state = initialState.quizzes, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default quizReducer;
