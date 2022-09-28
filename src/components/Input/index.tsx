import React from 'react';
import styled from 'styled-components';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string; // placeholder of the input
}

const StyledInputContainer = styled.div``;

const StyledInput = styled.input`
  border: 2px solid ${({ theme }) => theme.TEXT_DARK.HIGHLIGHT};
  border-radius: 2px;
  padding: 12px 16px;
  height: 48px;
  outline: none;
  width: 100%;
  font-family: 'Inter', sans-serif;

  &::placeholder {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.15px;
  }
`;

export const Input: React.FC<InputProps> = React.memo(({ placeholder, value, onChange, ...rest }) => {
  return (
    <StyledInputContainer {...rest}>
      <StyledInput placeholder={placeholder} value={value} onChange={onChange} data-testid="input" />
    </StyledInputContainer>
  );
});
