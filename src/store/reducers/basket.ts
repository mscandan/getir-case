/* eslint-disable default-param-last */
import ActionTypes from 'store/actions/types';
import { BasketItemType, BasketStateType } from 'types';

const InitialState: BasketStateType = {
  isBasketOpen: false,
  basketList: [],
  totalPrice: 0,
};

type ActionType =
  | { type: ActionTypes.SET_TOGGLE_BASKET }
  | { type: ActionTypes.SET_BASKET_LIST; payload: BasketItemType }
  | { type: ActionTypes.INCREASE_BASKET_ITEM_QUANTITY; payload: string }
  | { type: ActionTypes.SET_BASKET_ITEM_QUANTITY; payload: BasketItemType }
  | { type: ActionTypes.SET_BASKET_TOTAL_PRICE; payload: number }
  | { type: ActionTypes.REMOVE_FROM_BASKET_LIST; payload: string };

export const basketReducer = (state: BasketStateType = InitialState, action: ActionType): BasketStateType => {
  switch (action.type) {
    case ActionTypes.SET_TOGGLE_BASKET:
      return {
        ...state,
        isBasketOpen: !state.isBasketOpen,
      };
    case ActionTypes.SET_BASKET_LIST:
      return {
        ...state,
        basketList: [...state.basketList, action.payload],
      };
    case ActionTypes.INCREASE_BASKET_ITEM_QUANTITY:
      return {
        ...state,
        basketList: state.basketList.map(listItem => {
          if (listItem.name === action.payload) {
            return {
              ...listItem,
              count: listItem.count + 1,
            };
          }
          return listItem;
        }),
      };
    case ActionTypes.SET_BASKET_ITEM_QUANTITY:
      return {
        ...state,
        basketList: state.basketList.map(listItem => {
          if (listItem.name === action.payload.name) {
            return {
              ...listItem,
              count: action.payload.count,
            };
          }
          return listItem;
        }),
      };
    case ActionTypes.SET_BASKET_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: action.payload,
      };
    case ActionTypes.REMOVE_FROM_BASKET_LIST:
      return {
        ...state,
        basketList: state.basketList.filter(listItem => listItem.name !== action.payload),
      };
    default:
      return state;
  }
};
