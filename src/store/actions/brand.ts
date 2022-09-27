import { Dispatch } from 'redux';
import { CompanyType, ProductItemType } from 'types';
import ActionTypes from './types';

export const filterBrands = (allBrands: Array<CompanyType>, keyword: string) => async (dispatch: Dispatch) => {
  const filteredBrands = allBrands.filter(brand => brand.name.toLowerCase().includes(keyword.toLowerCase()));

  dispatch({
    payload: filteredBrands,
    type: ActionTypes.FILTER_BRANDS,
  });
};

export const getBrands =
  (filteredProducts: Array<ProductItemType>, allCompanies: Array<CompanyType>) => async (dispatch: Dispatch) => {
    let totalCount = 0;
    const brands = allCompanies.map(brand => {
      const itemLength = filteredProducts.filter(item => item.manufacturer === brand.slug).length;
      totalCount += itemLength;

      return {
        count: itemLength,
        name: brand.name,
        slug: brand.slug,
      };
    });

    dispatch({
      payload: [{ name: 'All', count: totalCount }, ...brands],
      type: ActionTypes.GET_ALL_BRANDS,
    });
  };
