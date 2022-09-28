/* eslint-disable default-param-last */
import ActionTypes from '../actions/types';
import { CompanyStateType, CompanyType } from '../../types';

const InitialState: CompanyStateType = {
  allCompanies: [],
};

type ActionType = { type: ActionTypes.GET_ALL_COMPANIES; payload: Array<CompanyType> };

export const companiesReducer = (state: CompanyStateType = InitialState, action: ActionType): CompanyStateType => {
  switch (action.type) {
    case ActionTypes.GET_ALL_COMPANIES:
      return {
        ...state,
        allCompanies: action.payload,
      };
    default:
      return state;
  }
};
