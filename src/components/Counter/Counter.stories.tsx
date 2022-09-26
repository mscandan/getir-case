import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import GlobalStyles from 'lib/globalStyles';
import { Counter } from '.';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const CounterContainer = styled.div`
  width: 500px;
`;

storiesOf('Counter', module).add('Counter Stories', () => {
  const [count, setCount] = React.useState(0);

  return (
    <Container>
      <GlobalStyles />
      <CounterContainer>
        <Counter name="counter" price={10} itemCount={count} onCountChange={setCount} />
      </CounterContainer>
    </Container>
  );
});
