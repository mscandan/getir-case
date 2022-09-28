import React from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';

interface CheckboxProps {
  isChecked: boolean; // checked status of chechbox
  onChange: (newCheckedStatus: boolean) => void; // function to invoke on check status change
  label: string; // label of the checkbox
  count: number; // count of the checkbox
}

const StyledCheckbox = styled.div<{ isChecked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ isChecked, theme }) => (isChecked ? theme.COMPONENT_BG.BASE : theme.TEXT_LIGHT.HIGHLIGHT)};
  box-shadow: 0px 1px 7px rgba(93, 56, 192, 0.4);
  border-radius: 2px;
  height: 22px;
  width: 22px;
  transition: all 0.2s;
`;

const StyledCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const StyledCheckboxLabel = styled.div`
  margin-left: 8px;
  display: flex;
  width: 200px;
`;

const StyledCheckboxLabelText = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: ${({ theme }) => theme.TEXT_DARK.BASE};
`;

const StyledCheckboxCount = styled.span`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: ${({ theme }) => theme.TEXT_LIGHT.BASE};
  margin-left: 4px;
`;

const StyledIcon = styled(Icon)`
  width: 10.67px;
  height: 7.33px;
  stroke: ${({ theme }) => theme.TEXT_LIGHT.HIGHLIGHT};
`;

export const Checkbox: React.FC<CheckboxProps> = React.memo(({ isChecked, onChange, label, count, ...rest }) => {
  const handleClick = () => {
    if (onChange) onChange(!isChecked);
  };

  return (
    <StyledCheckboxWrapper onClick={handleClick} {...rest} data-testid="checkbox">
      <StyledCheckbox isChecked={isChecked}>{isChecked && <StyledIcon name="vector" />}</StyledCheckbox>
      <StyledCheckboxLabel title={`${label} (${count})`}>
        <StyledCheckboxLabelText>{label}</StyledCheckboxLabelText>
        <StyledCheckboxCount> ({count})</StyledCheckboxCount>
      </StyledCheckboxLabel>
    </StyledCheckboxWrapper>
  );
});
