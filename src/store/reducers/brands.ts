/* eslint-disable default-param-last */
import ActionTypes from 'store/actions/types';
import { BrandStateType, CompanyType } from 'types';

type ActionType =
  | { type: ActionTypes.GET_ALL_BRANDS; payload: Array<CompanyType> }
  | { type: ActionTypes.INCLUDE_SELECTED_BRANDS; payload: string }
  | { type: ActionTypes.EXCLUDE_SELECTED_BRANDS; payload: string }
  | { type: ActionTypes.FILTER_BRANDS; payload: Array<CompanyType> };

const initialState: BrandStateType = {
  allBrands: [],
  brands: [],
  selectedBrands: ['All'],
};

const includeSelectedBrandsHelper = (selectedBrands: BrandStateType['selectedBrands'], payload: string) => {
  if (selectedBrands.length > 0 && selectedBrands.includes('All')) {
    return [...selectedBrands, payload].filter(tag => tag !== 'All');
  }

  if (payload === 'All') return ['All'];

  return [...selectedBrands, payload];
};

export const brandsReducer = (state: BrandStateType = initialState, action: ActionType): BrandStateType => {
  switch (action.type) {
    case ActionTypes.GET_ALL_BRANDS:
      return {
        ...state,
        allBrands: action.payload,
        brands: action.payload,
      };
    case ActionTypes.INCLUDE_SELECTED_BRANDS:
      return {
        ...state,
        selectedBrands: includeSelectedBrandsHelper(state.selectedBrands, action.payload),
      };
    case ActionTypes.EXCLUDE_SELECTED_BRANDS:
      return {
        ...state,
        selectedBrands: state.selectedBrands.filter(item => item !== action.payload),
      };
    case ActionTypes.FILTER_BRANDS:
      return {
        ...state,
        brands: action.payload,
      };
    default:
      return state;
  }
};
