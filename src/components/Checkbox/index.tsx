import React from 'react';
import styled from 'styled-components';

interface CheckboxProps {
  isChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledCheckbox = styled.input`
  appearance: none;
  width: 22px;
  height: 22px;
  border-radius: 2px;
  margin-right: 12px;
  box-shadow: 0px 1px 7px rgba(93, 56, 192, 0.4);
  padding: 6px;
  transition: background-color 0.4s;

  &:hover {
    cursor: pointer;
  }

  &:checked {
    position: relative;
    background-color: ${({ theme }) => theme.COMPONENT_BG.BASE};
    &::after {
      content: '✓';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: ${({ theme }) => theme.TEXT_LIGHT.HIGHLIGHT};
    }
  }
`;

export const Checkbox: React.FC<CheckboxProps> = React.memo(({ isChecked, onChange, ...rest }) => {
  return <StyledCheckbox type="checkbox" checked={isChecked} onChange={onChange} data-testid="checkbox" {...rest} />;
});
