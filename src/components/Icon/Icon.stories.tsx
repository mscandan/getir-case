/* eslint-disable no-console */
import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import GlobalStyles from 'lib/globalStyles';
import { Icon } from '.';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

storiesOf('Icon', module).add('All Icons', () => {
  return (
    <Container>
      <GlobalStyles />
      <Icon name="arrowLeft" size={22} onClick={() => console.log('clicked on arrowLeft')} />
      <Icon name="arrowRight" size={22} onClick={() => console.log('clicked on arrowRight')} />
      <Icon name="basket" size={22} onClick={() => console.log('clicked on basket')} />
      <Icon name="close" size={22} onClick={() => console.log('clicked on close')} />
      <Icon name="loading" size={22} onClick={() => console.log('clicked on loading')} />
      <Icon name="logo" size={22} onClick={() => console.log('clicked on logo')} />
      <Icon name="minus" size={22} onClick={() => console.log('clicked on minus')} />
      <Icon name="plus" size={22} onClick={() => console.log('clicked on plus')} />
      <Icon name="threeDots" size={22} onClick={() => console.log('clicked on threeDots')} />
      <Icon name="vector" size={22} onClick={() => console.log('clicked on vector')} />
    </Container>
  );
});
