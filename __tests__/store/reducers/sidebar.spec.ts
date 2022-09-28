import { sidebarReducer } from '../../../src/store/reducers/sidebar';
import ActionTypes from '../../../src/store/actions/types';
import { SidebarStateType } from '../../../src/types';

describe('Sidebar Reducer Tests', () => {
  let initialState: SidebarStateType = {} as SidebarStateType;
  beforeEach(() => {
    initialState = { isSidebarOpen: false };
  });
  it('should toggle sidebar status', () => {
    const res = sidebarReducer(initialState, { type: ActionTypes.SET_TOGGLE_SIDEBAR });
    expect(res.isSidebarOpen).toEqual(true);
  });
  it('should set sidebar status to false', () => {
    let res = sidebarReducer(initialState, { type: ActionTypes.SET_TOGGLE_SIDEBAR });
    expect(res.isSidebarOpen).toEqual(true);
    res = sidebarReducer(res, { type: ActionTypes.SET_CLOSE_SIDEBAR });
    expect(res.isSidebarOpen).toEqual(false);
  });
});
