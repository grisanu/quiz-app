import entryReducer from './entryReducer';

describe('Entry Reducer', () => {
  it('should not mutate original state', () => {
    // original state shpuld remain unchanged
    // should return a new state
  });

  it('should be able handle ADD_ENTRY', () => {
    // correctly takes in ADD_ENTRY
    const entries = [
      { test: 'init', california: [7,8,9] }
    ];
    const action = {
      type: 'ADD_ENTRY',
      payload: {
        test: 'test123',
        california: [1,2,3,4]
      }
    }

    const newEntries = entryReducer(entries, action);

    // should add 1 entry
    expect(newEntries.length).toEqual(entries.length+1);
    // entry should be the same as action.payload
    expect()
  });
});
