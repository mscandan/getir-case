/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Counter } from 'components/Counter';
import ActionTypes from 'store/actions/types';
import { ReduxStateType } from 'types';

interface BasketListProps {
  className?: string;
  basketRef?: React.RefObject<HTMLDivElement>;
}

const StyledBasketList = styled.div`
  height: 338.25px;
  width: 296px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40.88px;
  outline: none;
  background-color: ${({ theme }) => theme.COMPONENT_BG.BASE};
`;

const StyledBasketInnerWrapper = styled.div`
  height: 321.9px;
  width: 280px;
  border-radius: 2px;
  padding: 26.27px 8px 16.66px;
  position: relative;
  background-color: ${({ theme }) => theme.TEXT_LIGHT.HIGHLIGHT};
`;

const StyledBasketTotalPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 16.66px;
  right: 16px;
  height: 51.1px;
  width: 92px;
  border-radius: 2px;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.COMPONENT_BG.BASE};
  border: 2px solid ${({ theme }) => theme.COMPONENT_BG.BASE};
`;

const StyledCounterWrapper = styled.div`
  height: calc(100% - 65px);
  overflow-y: scroll;
  padding: 0 8px;
  color: ${({ theme }) => theme.TEXT_DARK.LOWLIGHT};
`;

export const BasketList: React.FC<BasketListProps> = ({ className, basketRef }) => {
  const { basketList, totalPrice } = useSelector((state: ReduxStateType) => state.basket);

  const dispatch = useDispatch();

  React.useEffect(() => {
    const basketTotalPrice = basketList.reduce((acc, item) => {
      return acc + item.price * item.count;
    }, 0);

    dispatch({ type: ActionTypes.SET_BASKET_TOTAL_PRICE, payload: basketTotalPrice.toFixed(2) });
  }, [basketList, dispatch]);

  const handleOnChange = (name: string, count: number) => {
    if (count === 0) dispatch({ type: ActionTypes.REMOVE_FROM_BASKET_LIST, payload: name });
    else dispatch({ type: ActionTypes.SET_BASKET_ITEM_QUANTITY, payload: { name, count } });
  };

  return (
    <StyledBasketList className={className} ref={basketRef}>
      <StyledBasketInnerWrapper>
        <StyledCounterWrapper>
          {basketList.length > 0
            ? basketList.map(item => (
                <Counter
                  key={item.name}
                  price={item.price}
                  name={item.name}
                  itemCount={item.count}
                  onCountChange={count => handleOnChange(item.name, count)}
                />
              ))
            : 'No items in basket'}
        </StyledCounterWrapper>
        <StyledBasketTotalPrice>₺{totalPrice}</StyledBasketTotalPrice>
      </StyledBasketInnerWrapper>
    </StyledBasketList>
  );
};
