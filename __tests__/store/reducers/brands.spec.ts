import { brandsReducer } from '../../../src/store/reducers/brands';
import ActionTypes from '../../../src/store/actions/types';
import { BrandStateType } from '../../../src/types';

describe('Brands Reducer Tests', () => {
  let initialState: BrandStateType = {} as BrandStateType;
  const company = {
    slug: 'slug',
    name: 'name',
    address: 'address',
    city: 'city',
    state: 'state',
    zip: 'zip',
    account: 1,
    contact: 'contact',
    count: 2,
  };
  beforeEach(() => {
    initialState = { allBrands: [], brands: [], selectedBrands: ['All'] };
  });

  it('should return all the brands from state', () => {
    const res = brandsReducer(initialState, { type: ActionTypes.GET_ALL_BRANDS, payload: [company] });
    expect(res.allBrands.length).toEqual(1);
    expect(res.brands.length).toEqual(1);
  });
  it('should include all the brands from state except All', () => {
    const res = brandsReducer(initialState, { type: ActionTypes.INCLUDE_SELECTED_BRANDS, payload: 'brand1' });
    expect(res.selectedBrands.length).toEqual(1);
    expect(res.selectedBrands[0]).toEqual('brand1');
  });
  it('should return All as selectedBrands if the payload is All', () => {
    initialState = { allBrands: [], brands: [], selectedBrands: ['brand1', 'brand2'] };
    const res = brandsReducer(initialState, { type: ActionTypes.INCLUDE_SELECTED_BRANDS, payload: 'All' });
    expect(res.selectedBrands.length).toEqual(1);
    expect(res.selectedBrands[0]).toEqual('All');
  });
  it("should return all selectedBrands if the payload is not All and state doesn't have All in it", () => {
    initialState = { allBrands: [], brands: [], selectedBrands: ['brand1', 'brand2'] };
    const res = brandsReducer(initialState, { type: ActionTypes.INCLUDE_SELECTED_BRANDS, payload: 'brand3' });
    expect(res.selectedBrands.length).toEqual(3);
    expect(res.selectedBrands[0]).toEqual('brand1');
    expect(res.selectedBrands[1]).toEqual('brand2');
    expect(res.selectedBrands[2]).toEqual('brand3');
  });
  it('should exclude given brand from the state', () => {
    initialState = { allBrands: [], brands: [], selectedBrands: ['brand1', 'brand2'] };
    const res = brandsReducer(initialState, { type: ActionTypes.EXCLUDE_SELECTED_BRANDS, payload: 'brand2' });
    expect(res.selectedBrands.length).toEqual(1);
    expect(res.selectedBrands[0]).toEqual('brand1');
  });
  it('should return given brands from the state', () => {
    initialState = { allBrands: [], brands: [], selectedBrands: ['brand1', 'brand2'] };
    const res = brandsReducer(initialState, { type: ActionTypes.FILTER_BRANDS, payload: [company] });
    expect(res.brands.length).toEqual(1);
  });
});
