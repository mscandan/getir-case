import React from 'react';
import styled from 'styled-components';
import { ButtonSize, ButtonType } from 'types';
import { getBackgroundColor, getBorderStyling, getColor, getFontSize, getSize } from './utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: ButtonSize;
  buttonType?: ButtonType;
}

const StyledButton = styled.button<{ size: ButtonSize; buttonType: ButtonType }>`
  border: ${({ theme, buttonType }) => buttonType === 'outline' && getBorderStyling(theme)};
  font-size: ${({ size }) => getFontSize(size)}px;
  background-color: ${({ theme, buttonType }) => getBackgroundColor(theme, buttonType)};
  padding: ${({ size }) => getSize(size)};
  color: ${({ theme, buttonType }) => getColor(theme, buttonType)};
  border-radius: 2px;

  &:hover {
    cursor: pointer;
  }
`;

const StyledButtonContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button: React.FC<ButtonProps & React.PropsWithChildren> = React.memo(
  ({ children, onClick, type = 'button', size, buttonType = 'solid', ...rest }) => {
    return (
      <StyledButton type={type} onClick={onClick} size={size} buttonType={buttonType} {...rest} data-testid="button">
        <StyledButtonContentContainer>{children}</StyledButtonContentContainer>
      </StyledButton>
    );
  },
);
