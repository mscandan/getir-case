/* eslint-disable indent */
/* eslint-disable no-console */
import axios from 'axios';
import API_URL from 'constants/api';
import PRODUCTS_PER_PAGE from 'constants/productCount';
import { Dispatch } from 'redux';
import { CompanyType, ProductItemType, SortingType } from 'types';
import ActionTypes from './types';

export const getAllProducts = () => async (dispatch: Dispatch) => {
  const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/items`);
  try {
    dispatch({
      payload: data,
      type: ActionTypes.GET_ALL_PRODUCTS,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getProducts =
  (
    itemType: 'mug' | 'shirt',
    selectedTags: Array<string>,
    selectedBrands: Array<string>,
    allBrands: Array<CompanyType>,
    sortingType: SortingType,
    selectedPageIndex = 0,
  ) =>
  async (dispatch: Dispatch) => {
    const filteredTags = selectedTags.includes('All') ? [] : selectedTags;
    const filteredBrands = selectedBrands.includes('All')
      ? []
      : allBrands.filter(brand => selectedBrands.includes(brand.name));

    const brandsQuery = filteredBrands.map(brand => `&manufacturer=${brand.slug}`).join('');
    const tagsQuery = filteredTags.map(tag => `&tags_like=${tag}`).join('');

    const { data, headers } = await axios.get(
      `${API_URL}/items?_page=${selectedPageIndex + 1}&_limit=16&itemType=${itemType}${tagsQuery}${brandsQuery}&_sort=${
        sortingType.value
      }&_order=${sortingType.type}`,
    );

    dispatch({ type: ActionTypes.SET_PRODUCTS_LOADING, payload: true });

    try {
      if (data) dispatch({ type: ActionTypes.SET_PRODUCTS_LOADING, payload: false });
      dispatch({
        payload: data,
        type: ActionTypes.GET_PRODUCTS,
      });
      dispatch({
        payload: headers['x-total-count'],
        type: ActionTypes.GET_PRODUCTS_COUNT,
      });
      if (Number(headers['x-total-count']) / PRODUCTS_PER_PAGE <= selectedPageIndex) {
        dispatch({
          payload: 0,
          type: ActionTypes.SET_PAGINATION_SELECTED_PAGE_INDEX,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

export const getProductsByItemType =
  (products: Array<ProductItemType>, itemType: 'mug' | 'shirt') => async (dispatch: Dispatch) => {
    try {
      dispatch({
        payload: products.filter(product => product.itemType === itemType),
        type: ActionTypes.GET_PRODUCTS_BY_ITEM_TYPE,
      });
    } catch (error) {
      console.error(error);
    }
  };

export const getProductsCount = (products: Array<ProductItemType>) => async (dispatch: Dispatch) => {
  dispatch({
    payload: products.length,
    type: ActionTypes.GET_PRODUCTS_COUNT,
  });
};
