/* eslint-disable default-param-last */
import ActionTypes from 'store/actions/types';
import { CompanyType } from 'types';

type CompanyStateType = {
  allCompanies: Array<CompanyType>;
};

const InitialState: CompanyStateType = {
  allCompanies: [],
};

type ActionType = { type: ActionTypes.GET_ALL_COMPANIES; payload: Array<CompanyType> };

export const companiesReducer = (state: CompanyStateType = InitialState, action: ActionType) => {
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
