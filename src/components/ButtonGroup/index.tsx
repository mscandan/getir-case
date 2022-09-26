import React from 'react';
import styled from 'styled-components';
import { ButtonGroupDataType } from 'types';
import { Button } from '../Button';

interface ButtonGroupProps {
  data: Array<ButtonGroupDataType>;
  onChange: (newSelectedButton: ButtonGroupDataType) => void;
  selectedButtonId?: string;
}

const StyledButtonGroup = styled.div`
  display: flex;
  align-items: center;
`;

const StyledButton = styled(Button)<{ isSelected: boolean }>`
  height: 30px;
  padding: 0 16px;
  margin-right: 8px;
  font-size: 13px;
  line-height: 18px;
  background-color: ${({ isSelected, theme }) => (isSelected ? theme.COMPONENT_BG.BASE : theme.COMPONENT_BG.HIGHLIGHT)};
  color: ${({ isSelected, theme }) => (isSelected ? theme.TEXT_LIGHT.HIGHLIGHT : theme.COMPONENT_BG.BASE)};
`;

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ data, onChange, selectedButtonId, ...rest }) => {
  const [activeButtonId, setActiveButtonId] = React.useState(selectedButtonId ?? data[0].id);

  const handleOnClick = (id: string, label: string) => {
    setActiveButtonId(id);
    if (onChange) onChange({ id, label });
  };

  return (
    <StyledButtonGroup {...rest}>
      {data.map(button => (
        <StyledButton
          onClick={() => handleOnClick(button.id, button.label)}
          isSelected={activeButtonId === button.id}
          key={button.id}
        >
          {button.label}
        </StyledButton>
      ))}
    </StyledButtonGroup>
  );
};
