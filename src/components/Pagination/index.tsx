/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Icon } from '../Icon';
import * as styles from './styles';

interface PaginationProps {
  pageCount: number;
  selectedPageIndex: number;
  onChange: (newSelectedValue: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ pageCount, onChange, selectedPageIndex = 0, ...rest }) => {
  const handlePageClick = (event: { selected: number }) => onChange(event.selected);

  const getLabel = React.useCallback((isNextPage: boolean) => {
    return (
      <styles.StyledLabel>
        {!isNextPage && <Icon name="arrowLeft" size={14} />}
        <styles.StyledLabelText>{isNextPage ? 'Next' : 'Prev'}</styles.StyledLabelText>
        {isNextPage && <Icon name="arrowRight" size={14} />}
      </styles.StyledLabel>
    );
  }, []);

  return (
    <styles.StyledReactPaginate
      breakLabel={<styles.StyledThreeDotsIcon name="threeDots" />}
      nextLabel={getLabel(true)}
      breakLinkClassName="rp-break-link"
      pageClassName="rp-page"
      breakClassName="rp-break"
      onPageChange={handlePageClick}
      selectedPageRel="active"
      pageRangeDisplayed={3}
      pageLinkClassName="rp-link"
      pageCount={pageCount}
      previousLabel={getLabel(false)}
      forcePage={selectedPageIndex}
      {...rest}
    />
  );
};
