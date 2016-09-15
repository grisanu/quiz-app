import { ADD_QUESTION } from './../modules/Edit-View/newQuestionActions';

export const initialState =
  {
    questions:
    [
      {
        id: 1,
        quizId: 0,
        question: 'Do you love cats?',
        type: Boolean,
        answer: true
      },
      {
        id: 2,
        quizId: 0,
        question: 'What is it about cats that you love?',
        type: String,
        answer: 'Their meows'
      },
      {
        id: 3,
        quizId: 0,
        question: 'Cats love Sour Patch Kids (blue)',
        type: Boolean,
        answer: true
      },
      {
        id: 4,
        quizId: 0,
        question: 'Cats love Sour Patch Kids (yellow)',
        type: Boolean,
        answer: false
      },
      {
        id: 5,
        quizId: 0,
        question: 'Pick One: Honey Straws, Gummi Worms, Sour Skittles',
        type: String,
        answer: 'Honey Straws'
      },
    ]
  };

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
