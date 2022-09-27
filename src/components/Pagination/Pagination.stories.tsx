import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import GlobalStyles from 'lib/globalStyles';
import { Pagination } from '.';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

storiesOf('Pagination', module).add('Pagination Component', () => {
  return (
    <Container>
      <GlobalStyles />
      <Pagination pageCount={10} selectedPageIndex={0} onChange={(idx: number) => console.log(idx)} />
    </Container>
  );
});
