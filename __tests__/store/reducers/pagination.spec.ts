import { paginationReducer } from '../../../src/store/reducers/pagination';
import ActionTypes from '../../../src/store/actions/types';
import { PaginationStateType } from '../../../src/types';

describe('Pagination Reducer Tests', () => {
  let initialState = {} as PaginationStateType;
  beforeEach(() => {
    initialState = {
      selectedPageIndex: 0,
    };
  });
  it('should return given index as selectedPageIndex from state', () => {
    const res = paginationReducer(initialState, { type: ActionTypes.SET_PAGINATION_SELECTED_PAGE_INDEX, payload: 3 });
    expect(res.selectedPageIndex).toEqual(3);
  });
});
