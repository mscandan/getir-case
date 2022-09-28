import React from 'react';
import * as styles from './styles';

interface CounterProps {
  name: string; // name of the counter item
  price: number; // price of the counter item
  itemCount: number; // current item count of the counter item
  onCountChange: (newNumber: number) => void; // function to invoke on count number change
}

export const Counter: React.FC<CounterProps> = ({ name, price, itemCount, onCountChange, ...rest }) => {
  const [count, setCount] = React.useState(itemCount);

  React.useEffect(() => setCount(itemCount), [itemCount]);

  const handleDecreaseCount = () => {
    if (count > 0) {
      setCount(oldValue => oldValue - 1);
      if (onCountChange) onCountChange(count - 1);
    }
  };

  const handleIncreaseCount = () => {
    setCount(oldValue => oldValue + 1);
    if (onCountChange) onCountChange(count + 1);
  };

  return (
    <styles.StyledCounterWrapper {...rest}>
      <styles.StyledProduct>
        <styles.StyledProductName>{name}</styles.StyledProductName>
        <styles.StyledProductPrice>₺{price}</styles.StyledProductPrice>
      </styles.StyledProduct>
      <styles.StyledCounter>
        <styles.StyledCountActionButton onClick={handleDecreaseCount}>
          <styles.StyledIcon name="minus" />
        </styles.StyledCountActionButton>
        <styles.StyledCount>{count}</styles.StyledCount>
        <styles.StyledCountActionButton onClick={handleIncreaseCount}>
          <styles.StyledIcon name="plus" />
        </styles.StyledCountActionButton>
      </styles.StyledCounter>
    </styles.StyledCounterWrapper>
  );
};
