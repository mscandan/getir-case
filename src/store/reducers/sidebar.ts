/* eslint-disable default-param-last */

import ActionTypes from 'store/actions/types';

type SidebarStateType = {
  isSidebarOpen: boolean;
};

const InitialState: SidebarStateType = {
  isSidebarOpen: false,
};

type ActionType = { type: ActionTypes.SET_TOGGLE_SIDEBAR } | { type: ActionTypes.SET_CLOSE_SIDEBAR };

export const sidebarReducer = (state: SidebarStateType = InitialState, action: ActionType) => {
  switch (action.type) {
    case ActionTypes.SET_TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarIsOpen: !state.isSidebarOpen,
      };
    case ActionTypes.SET_CLOSE_SIDEBAR:
      return {
        ...state,
        sidebarIsOpen: false,
      };

    default:
      return state;
  }
};
