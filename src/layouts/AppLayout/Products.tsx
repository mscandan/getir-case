/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { AnyAction } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { mediaBreakpointDown } from 'lib/styleHelpers';
import { getBrands } from 'store/actions/brand';
import { getCompanies } from 'store/actions/company';
import { getAllProducts, getProducts, getProductsByItemType } from 'store/actions/products';
import { getTags } from 'store/actions/tags';
import { ButtonGroup, LoadingSpinner, Pagination, ProductItem } from 'components';
import { ButtonGroupDataType, ProductItemType, ReduxStateType } from 'types';
import ActionTypes from 'store/actions/types';
import PRODUCTS_PER_PAGE from 'constants/productCount';

const ITEM_TYPES: ButtonGroupDataType[] = [
  { id: 'mug', label: 'mug' },
  { id: 'shirt', label: 'shirt' },
];

const StyledProducts = styled.div`
  margin: 36.38px 16px 0;

  ${mediaBreakpointDown(1290)} {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const StyledProductTitle = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0.25px;
  color: ${({ theme }) => theme.PAGE_TITLE.BASE};
`;

const StyledButtonGroup = styled(ButtonGroup)`
  width: 140px;
  margin: 16px 0;
`;

const StyledProductContent = styled.div`
  box-shadow: 0px 4px 24px rgba(93, 62, 188, 0.04);
  border-radius: 2px;
  padding: 12px 8px;
  width: 608px;
  height: 1008px;
  flex-wrap: wrap;
  display: flex;
  align-content: flex-start;
  position: relative;
  background-color: ${({ theme }) => theme.TEXT_LIGHT.HIGHLIGHT};

  ${mediaBreakpointDown('tablet')} {
    width: 95%;
    height: auto;
    justify-content: center;
    align-items: center;
  }
`;

const StyledProductCard = styled(ProductItem)`
  margin: 10px 12px;

  ${mediaBreakpointDown('tablet')} {
    margin: 10px 12px;
  }
`;

const StyledPagination = styled(Pagination)`
  margin-top: 34px;
  margin-bottom: 136px;
`;

export const Products = () => {
  const dispatch = useDispatch();
  const { products, allProducts, productsCount, itemType, filteredProducts, isProductsLoading } = useSelector(
    (state: ReduxStateType) => state.products,
  );
  const { allBrands, selectedBrands } = useSelector((state: ReduxStateType) => state.brands);
  const { selectedTags } = useSelector((state: ReduxStateType) => state.tags);
  const { selectedPageIndex } = useSelector((state: ReduxStateType) => state.pagination);
  const { allCompanies } = useSelector((state: ReduxStateType) => state.companies);
  const { sortingType } = useSelector((state: ReduxStateType) => state.sorting);
  const { basketList } = useSelector((state: ReduxStateType) => state.basket);

  const handleOnClick = (product: ProductItemType) => {
    if (basketList.length > 0) {
      basketList.forEach(item => {
        if (item.name === product.name) {
          dispatch({ type: ActionTypes.INCREASE_BASKET_ITEM_QUANTITY, payload: product.name });
        }
      });
    }
    if (!basketList.map(item => item.name).includes(product.name)) {
      dispatch({
        type: ActionTypes.SET_BASKET_LIST,
        payload: { name: product.name, price: product.price, count: 1 },
      });
    }
  };

  React.useEffect(() => {
    dispatch(getAllProducts() as unknown as AnyAction);
    dispatch(getCompanies() as unknown as AnyAction);
  }, [dispatch]);

  React.useEffect(() => {
    if (allCompanies.length !== 0 && filteredProducts.length !== 0) {
      dispatch(getBrands(filteredProducts, allCompanies) as unknown as AnyAction);
    }
  }, [dispatch, allCompanies, filteredProducts]);

  React.useEffect(() => {
    if (filteredProducts.length !== 0) dispatch(getTags(filteredProducts) as unknown as AnyAction);
  }, [dispatch, filteredProducts]);

  React.useEffect(() => {
    dispatch(
      getProducts(
        itemType,
        selectedTags,
        selectedBrands,
        allBrands,
        sortingType,
        selectedPageIndex,
      ) as unknown as AnyAction,
    );
  }, [dispatch, selectedPageIndex, itemType, selectedTags, selectedBrands, sortingType, allBrands]);

  React.useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch(getProductsByItemType(allProducts, itemType) as any);
  }, [dispatch, allProducts, itemType]);

  return (
    <StyledProducts>
      <StyledProductTitle>Products</StyledProductTitle>
      <StyledButtonGroup
        data={ITEM_TYPES}
        onChange={({ label }) => {
          dispatch({ type: ActionTypes.SET_PRODUCTS_ITEM_TYPE, payload: label });
        }}
        selectedButtonId={itemType}
      />
      <StyledProductContent>
        {products.length !== 0
          ? products.map(product => (
              <StyledProductCard
                key={product.added}
                itemName={product.name}
                itemPrice={product.price}
                imageSource="https://picsum.photos/200/200"
                onClick={() => handleOnClick(product)}
              />
            ))
          : 'No items'}
        {isProductsLoading && <LoadingSpinner />}
      </StyledProductContent>
      <StyledPagination
        pageCount={Math.ceil(productsCount / PRODUCTS_PER_PAGE)}
        selectedPageIndex={selectedPageIndex}
        onChange={pageIndex => dispatch({ type: ActionTypes.SET_PAGINATION_SELECTED_PAGE_INDEX, payload: pageIndex })}
      />
    </StyledProducts>
  );
};
