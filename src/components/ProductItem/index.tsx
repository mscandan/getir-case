import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button';

interface ProductItemProps {
  price: number; // price of the item
  name: string; // name of the item
  imageSource: string; // image source of the item
  onAddButtonClick: (e: React.MouseEvent) => void; // function to invoke on click on add button
}

const StyledProductCard = styled.div`
  width: 124px;
  height: 225px;
`;

const StyledImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  height: 124px;
  width: 124px;
  background: ${({ theme }) => theme.PAGE_BG.LOWLIGHT};
  border: 1.17px solid ${({ theme }) => theme.BORDER.HIGHLIGHT};
`;

const StyledImage = styled.img`
  height: 100%;
`;

const StyledProductPrice = styled.div`
  font-size: 14px;
  line-height: 20px;
  margin-top: 8px;
  font-weight: 600;
  color: ${({ theme }) => theme.COMPONENT_BG.BASE};
`;

const StyledProductName = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 8px;
  height: 40px;
  color: ${({ theme }) => theme.TEXT_DARK.LOWLIGHT};
`;

const StyledImageInnerWrapper = styled.div`
  width: 92px;
  height: 92px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductItem: React.FC<ProductItemProps> = React.memo(
  ({ price, imageSource, name, onAddButtonClick, ...rest }) => {
    return (
      <StyledProductCard {...rest}>
        <StyledImageWrapper>
          <StyledImageInnerWrapper>
            <StyledImage src={imageSource} />
          </StyledImageInnerWrapper>
        </StyledImageWrapper>
        <StyledProductPrice>₺ {price}</StyledProductPrice>
        <StyledProductName>{name}</StyledProductName>
        <Button onClick={onAddButtonClick}>Add</Button>
      </StyledProductCard>
    );
  },
);
