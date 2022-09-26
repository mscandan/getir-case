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
  background-color: ${({ theme }) => theme.COMPONENT_BG.BASE};
  color: ${({ theme }) => theme.TEXT_LIGHT.HIGHLIGHT};

  &:hover {
    cursor: pointer;
  }
`;

const StyledButtonContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & React.PropsWithChildren> = React.memo(
  ({ children, onClick, type = 'button', ...rest }) => {
    return (
      <StyledButton type={type} onClick={onClick} {...rest} data-testid="button">
        <StyledButtonContentContainer>{children}</StyledButtonContentContainer>
      </StyledButton>
    );
  },
);
