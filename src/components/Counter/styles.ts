import styled from 'styled-components';
import { Icon } from '../Icon';
import { Button } from '../Button';

export const StyledCounterWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 76.64px;
  padding-top: 17.35px;
  border-bottom: 1.02px solid ${({ theme }) => theme.BORDER.LOWLIGHT};

  &:first-child {
    height: 59.29px;
    padding: 0;
  }
`;

export const StyledProduct = styled.div`
  padding-left: 6px;
  width: 160px;
`;

export const StyledProductName = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: ${({ theme }) => theme.TEXT_DARK.LOWLIGHT};
`;

export const StyledProductPrice = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
  line-break: break-word;
  color: ${({ theme }) => theme.COMPONENT_BG.BASE};
`;

export const StyledCounter = styled.div`
  display: flex;
  width: 74px;
  height: 32.7px;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  margin-right: 7px;
`;

export const StyledCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 37px;
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0px;
  background-color: ${({ theme }) => theme.COMPONENT_BG.BASE};
  color: ${({ theme }) => theme.TEXT_LIGHT.HIGHLIGHT};
`;

export const StyledIcon = styled(Icon)<{ name: string }>`
  width: ${({ name }) => (name === 'minus' ? '10px' : '12px')};
  height: ${({ name }) => (name === 'minus' ? '3px' : '12px')};
  color: ${({ theme }) => theme.COMPONENT_BG.BASE};

  &:hover {
    cursor: pointer;
  }
`;

export const StyledCountActionButton = styled(Button)`
  background-color: transparent;
  width: 12px;
`;
