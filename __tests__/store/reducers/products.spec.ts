import { productsReducer } from '../../../src/store/reducers/products';
import ActionTypes from '../../../src/store/actions/types';
import { ProductItemType, ProductsStateType } from '../../../src/types';

describe('Products Reducer Tests', () => {
  let initialState = {} as ProductsStateType;
  const product: ProductItemType = {
    tags: [],
    price: 3,
    name: 'name',
    description: 'desc',
    slug: 'slug',
    added: 2,
    manufacturer: 'manufacturer',
    itemType: 'mug',
  };
  beforeEach(() => {
    initialState = {
      allProducts: [],
      products: [],
      isProductsLoading: false,
      filteredProducts: [],
      productsCount: 0,
      itemType: 'mug',
      allBrands: [],
    };
  });
  it('should set the given products to state', () => {
    const res = productsReducer(initialState, { type: ActionTypes.GET_PRODUCTS, payload: [product] });
    expect(res.products.length).toEqual(1);
    expect(res.products[0].name).toEqual('name');
  });
  it('should set the given productsCount to state', () => {
    const res = productsReducer(initialState, { type: ActionTypes.GET_PRODUCTS_COUNT, payload: 2 });
    expect(res.productsCount).toEqual(2);
  });
  it('should set the given itemType to state', () => {
    const res = productsReducer(initialState, { type: ActionTypes.SET_PRODUCTS_ITEM_TYPE, payload: 'shirt' });
    expect(res.itemType).toEqual('shirt');
  });
  it('should set the given itemType to state', () => {
    const res = productsReducer(initialState, { type: ActionTypes.SET_PRODUCTS_ITEM_TYPE, payload: 'shirt' });
    expect(res.itemType).toEqual('shirt');
  });
  it('should set the given allProducts to state', () => {
    const res = productsReducer(initialState, { type: ActionTypes.GET_ALL_PRODUCTS, payload: [product] });
    expect(res.allProducts.length).toEqual(1);
    expect(res.allProducts[0].name).toEqual('name');
  });
  it('should set the given filteredProducts to state', () => {
    const res = productsReducer(initialState, { type: ActionTypes.GET_PRODUCTS_BY_ITEM_TYPE, payload: [product] });
    expect(res.filteredProducts.length).toEqual(1);
    expect(res.filteredProducts[0].name).toEqual('name');
  });
  it('should set the given filteredProducts to state', () => {
    const res = productsReducer(initialState, { type: ActionTypes.SET_PRODUCTS_LOADING, payload: false });
    expect(res.isProductsLoading).toEqual(false);
  });
});
