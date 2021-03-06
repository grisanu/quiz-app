import { ADD_ENTRY } from './../modules/Student-View/addEntryActions';
import initialState from './../data/initialState.json';

const entryReducer = (state = initialState.entries, action) => {
  switch (action.type) {
    case ADD_ENTRY:
      return [ ...state, action.payload ];
    default:
      return state;
  }
};

export default entryReducer;
