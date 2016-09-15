export const ADD_QUESTION = 'ADD_QUESTION';

/** Payload
* {quizId, question, answerType, answer}
*/
export const addQuestion = payload => ({
  type: ADD_QUESTION,
  payload
});
