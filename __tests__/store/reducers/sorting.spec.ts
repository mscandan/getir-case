import { sortingReducer } from '../../../src/store/reducers/sorting';
import ActionTypes from '../../../src/store/actions/types';
import { SortingStateType } from '../../../src/types';

describe('Sorting Reducer Tests', () => {
  let initialState = {} as SortingStateType;
  beforeEach(() => {
    initialState = {
      sortingType: { value: 'price', type: 'asc' },
      selectedSortingId: 'priceLowToHigh',
    };
  });
  it('should set giving sortingType to state', () => {
    const res = sortingReducer(initialState, {
      type: ActionTypes.SET_SORTING_TYPE,
      payload: { type: 'desc', value: 'date' },
    });
    expect(res.sortingType.value).toEqual('date');
    expect(res.sortingType.type).toEqual('desc');
  });
  it('should set given sortingId to state', () => {
    const res = sortingReducer(initialState, { type: ActionTypes.SET_SELECTED_SORTING_ID, payload: 'selected' });
    expect(res.selectedSortingId).toEqual('selected');
  });
});
