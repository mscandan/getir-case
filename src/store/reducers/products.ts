/* eslint-disable default-param-last */
import ActionTypes from '../actions/types';
import { ProductItemType, ProductsStateType } from '../../types';

const InitialState: ProductsStateType = {
  allProducts: [],
  products: [],
  isProductsLoading: false,
  filteredProducts: [],
  productsCount: 0,
  itemType: 'mug',
  allBrands: [],
};

type ActionType =
  | { type: ActionTypes.GET_PRODUCTS; payload: Array<ProductItemType> }
  | {
      type: ActionTypes.GET_PRODUCTS_COUNT;
      payload: number;
    }
  | {
      type: ActionTypes.GET_ALL_PRODUCTS;
      payload: Array<ProductItemType>;
    }
  | {
      type: ActionTypes.SET_PRODUCTS_ITEM_TYPE;
      payload: 'mug' | 'shirt';
    }
  | {
      type: ActionTypes.GET_PRODUCTS_BY_ITEM_TYPE;
      payload: Array<ProductItemType>;
    }
  | {
      type: ActionTypes.SET_PRODUCTS_LOADING;
      payload: boolean;
    };

export const productsReducer = (state: ProductsStateType = InitialState, action: ActionType): ProductsStateType => {
  switch (action.type) {
    case ActionTypes.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ActionTypes.GET_PRODUCTS_COUNT:
      return { ...state, productsCount: action.payload };
    case ActionTypes.SET_PRODUCTS_ITEM_TYPE:
      return { ...state, itemType: action.payload };
    case ActionTypes.GET_ALL_PRODUCTS:
      return { ...state, allProducts: action.payload };
    case ActionTypes.GET_PRODUCTS_BY_ITEM_TYPE:
      return { ...state, filteredProducts: action.payload };
    case ActionTypes.SET_PRODUCTS_LOADING:
      return { ...state, isProductsLoading: action.payload };
    default:
      return state;
  }
};
