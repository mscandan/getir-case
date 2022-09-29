/* eslint-disable indent */
/* eslint-disable no-console */
import axios from 'axios';
import API_URL from 'constants/api';
import PRODUCTS_PER_PAGE from 'constants/productCount';
import { AppDispatch } from 'store';
import { CompanyType, ProductItemsItemType, ProductItemType, SortingType } from 'types';
import ActionTypes from './types';

export const getAllProducts = () => async (dispatch: AppDispatch) => {
  const { data } = await axios.get(`${API_URL}/items`);
  try {
    dispatch({
      type: ActionTypes.GET_ALL_PRODUCTS,
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getProducts =
  (
    itemType: ProductItemsItemType,
    selectedTags: Array<string>,
    selectedBrands: Array<string>,
    allBrands: Array<CompanyType>,
    sortingType: SortingType,
    selectedPageIndex = 0,
  ) =>
  async (dispatch: AppDispatch) => {
    const filteredTags = selectedTags.includes('All') ? [] : selectedTags;
    const filteredBrands = selectedBrands.includes('All')
      ? []
      : allBrands.filter(brand => selectedBrands.includes(brand.name));

    const brandsQuery = filteredBrands.map(brand => `&manufacturer=${brand.slug}`).join('');
    const tagsQuery = filteredTags.map(tag => `&tags_like=${tag}`).join('');

    const { data, headers } = await axios.get(
      `${API_URL}/items?_page=${selectedPageIndex + 1}&_limit=16&itemType=${itemType}${tagsQuery}${brandsQuery}&_sort=${
        sortingType.value === 'date' ? 'added' : sortingType.value
      }&_order=${sortingType.type}`,
    );

    dispatch({ type: ActionTypes.SET_PRODUCTS_LOADING, payload: true });

    try {
      if (data) dispatch({ type: ActionTypes.SET_PRODUCTS_LOADING, payload: false });
      dispatch({
        type: ActionTypes.GET_PRODUCTS,
        payload: data,
      });
      dispatch({
        type: ActionTypes.GET_PRODUCTS_COUNT,
        payload: Number(headers['x-total-count']),
      });
      if (Number(headers['x-total-count']) / PRODUCTS_PER_PAGE <= selectedPageIndex) {
        dispatch({
          type: ActionTypes.SET_PAGINATION_SELECTED_PAGE_INDEX,
          payload: 0,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

export const getProductsByItemType =
  (products: Array<ProductItemType>, itemType: ProductItemsItemType) => async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: ActionTypes.GET_PRODUCTS_BY_ITEM_TYPE,
        payload: products.filter(product => product.itemType === itemType),
      });
    } catch (error) {
      console.error(error);
    }
  };

export const getProductsCount = (products: Array<ProductItemType>) => async (dispatch: AppDispatch) => {
  dispatch({
    type: ActionTypes.GET_PRODUCTS_COUNT,
    payload: products.length,
  });
};
