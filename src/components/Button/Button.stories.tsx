import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import GlobalStyles from 'lib/globalStyles';
import { FlatButton, OutlineButton, SolidButton } from '.';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

storiesOf('Button', module).add('Solid Button', () => {
  return (
    <Container>
      <GlobalStyles />
      <SolidButton size="sm">hello</SolidButton>
      <SolidButton size="md">hello</SolidButton>
      <SolidButton size="lg">hello</SolidButton>
    </Container>
  );
});

storiesOf('Button', module).add('Outline Button', () => {
  return (
    <Container>
      <GlobalStyles />
      <OutlineButton size="sm">hello</OutlineButton>
      <OutlineButton size="md">hello</OutlineButton>
      <OutlineButton size="lg">hello</OutlineButton>
    </Container>
  );
});

storiesOf('Button', module).add('Flat Button', () => {
  return (
    <Container>
      <GlobalStyles />
      <FlatButton size="sm">hello</FlatButton>
      <FlatButton size="md">hello</FlatButton>
      <FlatButton size="lg">hello</FlatButton>
    </Container>
  );
});
