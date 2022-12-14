import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import GlobalStyles from 'lib/globalStyles';
import { ProductItem } from '.';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

storiesOf('Product Item', module).add('Product Item Component', () => {
  return (
    <Container>
      <GlobalStyles />
      <ProductItem
        imageSource="https://picsum.photos/200/200"
        price={2}
        name="product name"
        // eslint-disable-next-line no-console
        onAddButtonClick={() => console.log('here')}
      />
    </Container>
  );
});
