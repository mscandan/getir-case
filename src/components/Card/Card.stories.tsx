import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import GlobalStyles from 'lib/globalStyles';
import { Card } from '.';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

storiesOf('Card', module).add('Card Component', () => {
  return (
    <Container>
      <GlobalStyles />
      <Card title="small card title" size="sm">
        card content
      </Card>
      <Card title="big card title" size="sm">
        card content
      </Card>
    </Container>
  );
});
