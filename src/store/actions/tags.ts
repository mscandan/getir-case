import { AppDispatch } from 'store';
import { ProductItemType, TagType } from 'types';
import ActionTypes from './types';

export const filterTags = (allTags: Array<TagType>, keyword: string) => async (dispatch: AppDispatch) => {
  const filteredBrands = allTags.filter(brand => brand.name.toLowerCase().includes(keyword.toLowerCase()));

  dispatch({
    type: ActionTypes.FILTER_TAGS,
    payload: filteredBrands,
  });
};

export const getTags = (products: Array<ProductItemType>) => async (dispatch: AppDispatch) => {
  const tags: Array<TagType> = [];
  const allTags: Array<string> = [];

  products.forEach(product => {
    allTags.push(...product.tags);
  });

  let totalCount = 0;

  allTags.forEach(tag => {
    if (tags.filter(t => t.name === tag).length === 0) {
      const tagCount = allTags.filter(t => t === tag).length;
      totalCount += tagCount;
      tags.push({ name: tag, count: tagCount });
    }
  });

  if (tags.length > 0) {
    dispatch({
      type: ActionTypes.GET_ALL_TAGS,
      payload: [{ name: 'All', count: totalCount }, ...tags],
    });
  }
};
