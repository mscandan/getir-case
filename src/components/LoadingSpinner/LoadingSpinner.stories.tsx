import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import GlobalStyles from 'lib/globalStyles';
import { LoadingSpinner } from '.';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

storiesOf('Loading', module).add('Loading Spinner', () => {
  return (
    <Container>
      <GlobalStyles />
      <LoadingSpinner />
    </Container>
  );
});
