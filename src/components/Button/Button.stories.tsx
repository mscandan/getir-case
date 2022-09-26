import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import GlobalStyles from 'lib/globalStyles';
import { Button } from '.';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

storiesOf('Button', module).add('Button Component', () => {
  return (
    <Container>
      <GlobalStyles />
      <Button>Add</Button>
    </Container>
  );
});
