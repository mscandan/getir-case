import React from 'react';
import styled from 'styled-components';
import { RadiosDataType } from 'types';
import { Icon } from '../Icon';

interface RadiosProps {
  data: Array<RadiosDataType>;
  onSelectedRadioChange: (newSelectedId: string) => void;
  selectedOptionId: string;
}

const StyledRadiosContent = styled.div``;

const StyledRadioWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const StyledRadio = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${({ theme }) => theme.TEXT_LIGHT.HIGHLIGHT};
  border: 2px solid ${({ isActive, theme }) => (isActive ? theme.COMPONENT_BG.BASE : theme.BORDER.BASE)};
  transition: 0.2s all;
`;

const StyledRadioLabel = styled.div`
  letter-spacing: 0.16px;
  font-size: 14px;
  line-height: 18px;
  margin-left: 12px;
  color: ${({ theme }) => theme.TEXT_DARK.BASE};
`;

const StyledIcon = styled(Icon)`
  width: 10px;
  height: 7px;
  stroke: ${({ theme }) => theme.COMPONENT_BG.BASE};
`;

export const Radios: React.FC<RadiosProps> = ({ data, onSelectedRadioChange, selectedOptionId, ...rest }) => {
  const [selectedRadioId, setSelectedRadioId] = React.useState(selectedOptionId);

  const handleClick = (id: string) => {
    setSelectedRadioId(id);
    if (onSelectedRadioChange) onSelectedRadioChange(id);
  };

  return (
    <StyledRadiosContent {...rest}>
      {data.map(item => (
        <StyledRadioWrapper onClick={() => handleClick(item.id)} key={item.id} data-testid={`radio-${item.id}`}>
          <StyledRadio isActive={item.id === selectedRadioId}>
            {item.id === selectedRadioId && <StyledIcon name="vector" />}
          </StyledRadio>
          <StyledRadioLabel>{item.label}</StyledRadioLabel>
        </StyledRadioWrapper>
      ))}
    </StyledRadiosContent>
  );
};
