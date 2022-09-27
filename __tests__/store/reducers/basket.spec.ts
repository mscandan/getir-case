import { basketReducer } from '../../../src/store/reducers/basket';
import ActionTypes from '../../../src/store/actions/types';
import { BasketStateType } from '../../../src/types';

describe('basket reducer tests', () => {
  let initialState: BasketStateType = {} as BasketStateType;
  beforeEach(() => {
    initialState = { isBasketOpen: false, basketList: [], totalPrice: 0 };
  });
  it('should toogle basket open state', () => {
    const res = basketReducer(initialState, { type: ActionTypes.SET_TOGGLE_BASKET });
    expect(res.isBasketOpen).toEqual(true);
  });
  it('should add item to basket', () => {
    const res = basketReducer(initialState, {
      type: ActionTypes.SET_BASKET_LIST,
      payload: { name: 'item name', count: 1, price: 12 },
    });
    expect(res.basketList.length).toEqual(1);
  });
  it('should increase the count of the item in basket', () => {
    let res = basketReducer(initialState, {
      type: ActionTypes.SET_BASKET_LIST,
      payload: { name: 'item name', count: 1, price: 12 },
    });
    res = basketReducer(res, {
      type: ActionTypes.INCREASE_BASKET_ITEM_QUANTITY,
      payload: 'item name',
    });
    expect(res.basketList.length).toEqual(1);
    expect(res.basketList[0].count).toEqual(2);
  });
  it('should set count of item in basket', () => {
    let res = basketReducer(initialState, {
      type: ActionTypes.SET_BASKET_LIST,
      payload: { name: 'item name', count: 1, price: 12 },
    });
    res = basketReducer(res, {
      type: ActionTypes.SET_BASKET_ITEM_QUANTITY,
      payload: { name: 'item name', count: 9, price: 12 },
    });
    expect(res.basketList.length).toEqual(1);
    expect(res.basketList[0].count).toEqual(9);
  });
  it('should set total price of basket', () => {
    const res = basketReducer(initialState, {
      type: ActionTypes.SET_BASKET_TOTAL_PRICE,
      payload: 150,
    });
    expect(res.totalPrice).toEqual(150);
  });
});
