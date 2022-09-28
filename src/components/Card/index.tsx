import React from 'react';
import styled from 'styled-components';
import { CardSizeType } from 'types';
import { getCardWidth } from './utils';

interface CardProps {
  title: string; // title of the card
  size: CardSizeType; // size of the card
}

const StyledCardContainer = styled.div``;

const StyledCard = styled.div<{ size: CardSizeType }>`
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
  border-radius: 2px;
  padding: 12px;
  width: ${({ size }) => getCardWidth(size)};
  background-color: ${({ theme }) => theme.TEXT_LIGHT.HIGHLIGHT};
`;

const StyledCardTitle = styled.div`
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  color: ${({ theme }) => theme.TEXT_LIGHT.LOWLIGHT};
`;

export const Card: React.FC<CardProps & React.PropsWithChildren> = React.memo(({ children, title, size, ...rest }) => {
  return (
    <StyledCardContainer {...rest} data-testid="card">
      <StyledCardTitle>{title}</StyledCardTitle>
      <StyledCard size={size}>{children}</StyledCard>
    </StyledCardContainer>
  );
});
