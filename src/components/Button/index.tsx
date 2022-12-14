import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 22px;
  cursor: pointer;
  border-radius: 2px;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  outline: none;
  border: none;
  width: 100%;
  background-color: ${({ theme }) => theme.COMPONENT_BG.BASE};
  color: ${({ theme }) => theme.TEXT_LIGHT.HIGHLIGHT};

  &:hover {
    cursor: pointer;
  }
`;

export const Button: React.FC<React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>> = React.memo(
  ({ children, onClick, type = 'button', ...rest }) => {
    return (
      <StyledButton type={type} onClick={onClick} {...rest} data-testid="button">
        {children}
      </StyledButton>
    );
  },
);
