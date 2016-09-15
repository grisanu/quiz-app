// import { ADD_ENTRY } from;

const entryReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ENTRY:
      return
      [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
};

export default entryReducer;
