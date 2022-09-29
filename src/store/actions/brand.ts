import { AppDispatch } from 'store';
import { CompanyType, ProductItemType } from 'types';
import ActionTypes from './types';

export const filterBrands = (allBrands: Array<CompanyType>, keyword: string) => async (dispatch: AppDispatch) => {
  const filteredBrands = allBrands.filter(brand => brand.name.toLowerCase().includes(keyword.toLowerCase()));

  dispatch({
    type: ActionTypes.FILTER_BRANDS,
    payload: filteredBrands,
  });
};

export const getBrands =
  (filteredProducts: Array<ProductItemType>, allCompanies: Array<CompanyType>) => async (dispatch: AppDispatch) => {
    let totalCount = 0;
    const brands = allCompanies.map(brand => {
      const itemLength = filteredProducts.filter(item => item.manufacturer === brand.slug).length;
      totalCount += itemLength;

      return {
        count: itemLength,
        name: brand.name,
        slug: brand.slug,
      } as CompanyType;
    });

    dispatch({
      type: ActionTypes.GET_ALL_BRANDS,
      payload: [{ name: 'All', count: totalCount } as CompanyType, ...brands],
    });
  };
