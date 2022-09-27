/* eslint-disable default-param-last */
import ActionTypes from 'store/actions/types';
import { SidebarStateType } from 'types';

const InitialState: SidebarStateType = {
  isSidebarOpen: false,
};

type ActionType = { type: ActionTypes.SET_TOGGLE_SIDEBAR } | { type: ActionTypes.SET_CLOSE_SIDEBAR };

export const sidebarReducer = (state: SidebarStateType = InitialState, action: ActionType): SidebarStateType => {
  switch (action.type) {
    case ActionTypes.SET_TOGGLE_SIDEBAR:
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };
    case ActionTypes.SET_CLOSE_SIDEBAR:
      return {
        ...state,
        isSidebarOpen: false,
      };

    default:
      return state;
  }
};
