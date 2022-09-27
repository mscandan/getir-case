/* eslint-disable default-param-last */
import ActionTypes from 'store/actions/types';
import { PaginationStateType } from 'types';

const InitialState: PaginationStateType = {
  selectedPageIndex: 0,
};

type ActionType = { type: ActionTypes.SET_PAGINATION_SELECTED_PAGE_INDEX; payload: number };

export const paginationReducer = (state: PaginationStateType = InitialState, action: ActionType) => {
  switch (action.type) {
    case ActionTypes.SET_PAGINATION_SELECTED_PAGE_INDEX:
      return {
        ...state,
        selectedPageIndex: action.payload,
      };
    default:
      return state;
  }
};
