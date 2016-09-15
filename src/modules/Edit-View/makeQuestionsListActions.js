export const MAKE_QUESTIONS_LIST = 'MAKE_QUESTIONS_LIST';

export const makeQuestionsList = (quizId, payload) => ({
    type: MAKE_QUESTIONS_LIST,
    quizId,
    payload
});
