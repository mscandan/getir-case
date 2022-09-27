import React from 'react';
import { AnyAction } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { mediaBreakpointDown } from 'lib/styleHelpers';
import { filterBrands } from 'store/actions/brand';
import { filterTags } from 'store/actions/tags';
import { Card, Checkbox, Input, Radios } from 'components';
import { ReduxStateType } from 'types';
import ActionTypes from 'store/actions/types';

const SORTING_OPTIONS = [
  { id: 'priceLowToHigh', label: 'Price low to high' },
  { id: 'priceHighToLow', label: 'Price high to low' },
  { id: 'newToOld', label: 'New to old' },
  { id: 'oldToNew', label: 'Old to new' },
];

const StyledSidebar = styled.div<{ isOpen: boolean }>`
  margin-top: 38.36px;
  transition: ${({ isOpen }) => isOpen && '0.2s opacity'};

  ${mediaBreakpointDown(980)} {
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    position: fixed;
    left: 0;
    top: 0;
    background: ${({ theme }) => theme.TEXT_LIGHT.HIGHLIGHT};
    height: 100%;
    margin: 76.63px 0;
    z-index: 1;
    padding: 38.36px 10px;
    overflow-y: auto;
    padding-bottom: 100px;
    -webkit-overflow-scrolling: touch;
  }

  ${mediaBreakpointDown(500)} {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const StyledCard = styled(Card)`
  margin-bottom: 24px;
`;

const StyledInput = styled(Input)`
  padding: 12px 12px 0;
`;

const StyledCheckboxContent = styled.div`
  overflow-y: auto;
  margin-top: 17px;
  padding: 4px 0;
  margin-right: 12px;
  padding-left: 12px;
  height: 131px;
  margin-bottom: 12px;
`;

const StyledCheckbox = styled(Checkbox)`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const StyledRadios = styled(Radios)`
  padding: 12px;
`;

const StyledBackgroundFilter = styled.div<{ isOpen: boolean }>`
  ${mediaBreakpointDown(980)} {
    position: fixed;
    left: 316px;
    top: 76.68px;
    height: 100%;
    width: 100%;
    z-index: 1;
    background: ${({ theme }) => theme.COMPONENT_BG.BASE};
    opacity: ${({ isOpen }) => (isOpen ? '0.5' : '0')};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    transition: ${({ isOpen }) => isOpen && '0.2s opacity'};
  }

  ${mediaBreakpointDown(500)} {
    display: none;
  }
`;

export const Sidebar: React.FC = () => {
  const { isSidebarOpen } = useSelector((state: ReduxStateType) => state.sidebar);
  const { selectedBrands } = useSelector((state: ReduxStateType) => state.brands);
  const { brands, allBrands } = useSelector((state: ReduxStateType) => state.brands);
  const { tags, allTags, selectedTags } = useSelector((state: ReduxStateType) => state.tags);
  const { selectedSortingId } = useSelector((state: ReduxStateType) => state.sorting);
  const dispatch = useDispatch();

  const handleOnChangeBrands = (checked: boolean, brandName: string) => {
    if (checked) dispatch({ type: ActionTypes.INCLUDE_SELECTED_BRANDS, payload: brandName });
    if (!checked) dispatch({ type: ActionTypes.EXCLUDE_SELECTED_BRANDS, payload: brandName });
  };

  const handleOnChangeTags = (checked: boolean, tagsName: string) => {
    if (checked) dispatch({ type: ActionTypes.INCLUDE_SELECTED_TAGS, payload: tagsName });
    if (!checked) dispatch({ type: ActionTypes.EXCLUDE_SELECTED_TAGS, payload: tagsName });
  };

  const handleOnChangeSorting = (id: string) => {
    dispatch({ type: ActionTypes.SET_SELECTED_SORTING_ID, payload: id });
    if (id === 'priceLowToHigh') {
      dispatch({ type: ActionTypes.SET_SORTING_TYPE, payload: { value: 'price', type: 'asc' } });
    }
    if (id === 'priceHighToLow') {
      dispatch({ type: ActionTypes.SET_SORTING_TYPE, payload: { value: 'price', type: 'desc' } });
    }
    if (id === 'newToOld') dispatch({ type: ActionTypes.SET_SORTING_TYPE, payload: { value: 'added', type: 'desc' } });
    if (id === 'oldToNew') dispatch({ type: ActionTypes.SET_SORTING_TYPE, payload: { value: 'added', type: 'asc' } });
  };

  return (
    <>
      <StyledSidebar isOpen={isSidebarOpen}>
        <StyledCard title="Sorting" size="sm">
          <StyledRadios data={SORTING_OPTIONS} onChange={handleOnChangeSorting} selectedOptionId={selectedSortingId} />
        </StyledCard>
        <StyledCard title="Brands" size="sm">
          <StyledInput
            placeholder="Search brands"
            value=""
            onChange={e => dispatch(filterBrands(allBrands, e.target.value) as unknown as AnyAction)}
          />
          <StyledCheckboxContent>
            {brands.map(brand => (
              <StyledCheckbox
                label={brand.name}
                count={brand.count}
                onChange={newStatus => handleOnChangeBrands(newStatus, brand.name)}
                key={brand.name}
                isChecked={selectedBrands.includes(brand.name)}
              />
            ))}
          </StyledCheckboxContent>
        </StyledCard>
        <StyledCard title="Tags" size="sm">
          <StyledInput
            placeholder="Search tags"
            value=""
            onChange={e => dispatch(filterTags(allTags, e.target.value) as unknown as AnyAction)}
          />
          <StyledCheckboxContent>
            {tags.map(tag => {
              return (
                <StyledCheckbox
                  label={tag.name}
                  count={tag.count}
                  onChange={newStatus => handleOnChangeTags(newStatus, tag.name)}
                  key={tag.name}
                  isChecked={selectedTags.includes(tag.name)}
                />
              );
            })}
          </StyledCheckboxContent>
        </StyledCard>
      </StyledSidebar>
      <StyledBackgroundFilter
        isOpen={isSidebarOpen}
        onClick={() => dispatch({ type: ActionTypes.SET_CLOSE_SIDEBAR })}
      />
    </>
  );
};
