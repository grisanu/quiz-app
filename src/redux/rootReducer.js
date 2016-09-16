import { combineReducers } from 'redux';
import quizReducer from './quizReducer';
import sessionReducer from './sessionReducer';
import questionReducer from './questionReducer';
import questionsByQuizIdReducer from './questionsByQuizIdReducer';
import entryReducer from './entryReducer';
// import summaryByQuizIdReducer from './summaryByQuizIdReducer';

const rootReducer = combineReducers({
  quizzes: quizReducer,
  session: sessionReducer,
  questionsByQuizId: questionsByQuizIdReducer,
  questions: questionReducer,
  entries: entryReducer,
  // summary: summaryByQuizIdReducer
});

export default rootReducer;
