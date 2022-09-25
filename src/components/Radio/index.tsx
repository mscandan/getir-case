import React from 'react';
import styled from 'styled-components';

interface RadioProps {
  isSelected: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
}

const StyledRadioButton = styled.input`
  appearance: none;
  border: 2px solid ${({ theme }) => theme.BORDER.BASE};
  border-radius: 50%;
  height: 22px;
  width: 22px;

  &:hover {
    cursor: pointer;
  }

  &:checked {
    position: relative;
    border: 2px solid ${({ theme }) => theme.COMPONENT_BG.BASE};
    &::after {
      content: '✓';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: ${({ theme }) => theme.COMPONENT_BG.BASE};
    }
  }
`;

export const Radio: React.FC<RadioProps> = React.memo(({ isSelected, onChange, id, ...rest }) => {
  return (
    <StyledRadioButton
      type="radio"
      checked={isSelected}
      onChange={onChange}
      id={id}
      data-testid={`radio-${id}`}
      {...rest}
    />
  );
});
