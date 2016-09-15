import { createStore } from 'redux';
import rootReducer from './redux/rootReducer';

export default initialState => {
  const store = createStore(
    rootReducer,
    initialState
  );

  return store;
};