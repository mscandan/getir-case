import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button';

interface ProductItemProps {
  itemPrice: number;
  imageSource: string;
  itemName: string;
  onClick: (e: React.MouseEvent) => void;
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
  ({ itemPrice, imageSource, itemName, onClick, ...rest }) => {
    return (
      <StyledProductCard {...rest}>
        <StyledImageWrapper>
          <StyledImageInnerWrapper>
            <StyledImage src={imageSource} />
          </StyledImageInnerWrapper>
        </StyledImageWrapper>
        <StyledProductPrice>₺ {itemPrice}</StyledProductPrice>
        <StyledProductName>{itemName}</StyledProductName>
        <Button onClick={onClick}>Add</Button>
      </StyledProductCard>
    );
  },
);
