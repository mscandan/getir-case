/* eslint-disable default-param-last */
import ActionTypes from 'store/actions/types';
import { SortingStateType, SortingType } from 'types';

const InitialState: SortingStateType = {
  sortingType: { value: 'price', type: 'asc' },
  selectedSortingId: 'priceLowToHigh',
};

type ActionType =
  | { type: ActionTypes.SET_SORTING_TYPE; payload: SortingType }
  | { type: ActionTypes.SET_SELECTED_SORTING_ID; payload: string };

export const sortingReducer = (state: SortingStateType = InitialState, action: ActionType): SortingStateType => {
  switch (action.type) {
    case ActionTypes.SET_SORTING_TYPE:
      return {
        ...state,
        sortingType: action.payload,
      };
    case ActionTypes.SET_SELECTED_SORTING_ID:
      return {
        ...state,
        selectedSortingId: action.payload,
      };
    default:
      return state;
  }
};
