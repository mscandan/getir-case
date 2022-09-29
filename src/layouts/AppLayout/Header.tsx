import React from 'react';
import styled from 'styled-components';
import { mediaBreakpointDown } from 'lib/styleHelpers';
import { Modal, Icon } from 'components';
import ActionTypes from 'store/actions/types';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { BasketList } from './BasketList';

const StyledHeader = styled.div`
  width: 100%;
  height: 76.64px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.COMPONENT_BG.BASE};
`;

const StyledHeaderInnerWrapper = styled.div`
  width: 1231px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const StyledLogoIcon = styled(Icon)`
  width: 142px;
  height: 41px;

  ${mediaBreakpointDown(500)} {
    width: 100px;
  }
`;

const StyledBasketIcon = styled(Icon)`
  width: 24px;
  height: 26px;
`;

const StyledBasket = styled.div`
  width: 129px;
  height: 76.64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COMPONENT_BG.LOWLIGHT};

  ${mediaBreakpointDown(1290)} {
    cursor: pointer;
  }
`;

const StyledBasketInnerWrapper = styled.div`
  width: 81px;
  height: 24.53px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledBasketPrice = styled.div`
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.16px;
  text-align: center;
  height: 18.39px;
  white-space: nowrap;
  color: ${({ theme }) => theme.TEXT_LIGHT.HIGHLIGHT};
`;

const StyledBasketWrapper = styled.div`
  position: absolute;
  right: 0;
`;

const StyledBasketList = styled(BasketList)`
  display: none;

  ${mediaBreakpointDown(1290)} {
    display: flex;
    margin-top: 20px;
  }
`;

const StyledIcon = styled(Icon)`
  display: none;

  ${mediaBreakpointDown(980)} {
    display: block;
    position: absolute;
    left: 20px;
    cursor: pointer;
    stroke: ${({ theme }) => theme.TEXT_LIGHT.HIGHLIGHT};
  }

  ${mediaBreakpointDown(500)} {
    display: block;
    margin-right: 20px;
    width: 24px;
    cursor: pointer;
    position: unset;
    color: ${({ theme }) => theme.TEXT_LIGHT.HIGHLIGHT};
  }
`;

const StyledMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${mediaBreakpointDown(500)} {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 20px;
  }
`;

export const Header: React.FC = () => {
  const basketListRef = React.useRef(null);
  const dispatch = useAppDispatch();
  const { totalPrice } = useAppSelector(state => state.basket);
  const { isSidebarOpen } = useAppSelector(state => state.sidebar);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <StyledHeader>
      <StyledHeaderInnerWrapper>
        <StyledMenuWrapper>
          {isSidebarOpen ? (
            <StyledIcon name="close" size={24} onClick={() => dispatch({ type: ActionTypes.SET_TOGGLE_SIDEBAR })} />
          ) : (
            <StyledIcon name="menu" size={24} onClick={() => dispatch({ type: ActionTypes.SET_TOGGLE_SIDEBAR })} />
          )}
          <StyledLogoIcon name="logo" />
        </StyledMenuWrapper>
        <StyledBasketWrapper>
          <StyledBasket onClick={() => setIsModalOpen(oldValue => !oldValue)}>
            <StyledBasketInnerWrapper>
              <StyledBasketIcon name="basket" />
              <StyledBasketPrice>₺ {totalPrice}</StyledBasketPrice>
            </StyledBasketInnerWrapper>
          </StyledBasket>
        </StyledBasketWrapper>
      </StyledHeaderInnerWrapper>
      <Modal isOpen={isModalOpen} top={96} right={0} setIsOpen={setIsModalOpen}>
        <StyledBasketList basketRef={basketListRef} />
      </Modal>
    </StyledHeader>
  );
};
