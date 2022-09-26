import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import GlobalStyles from 'lib/globalStyles';
import { Input } from '.';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

storiesOf('Input', module).add('Input Component', () => {
  const [inputValue, setInputValue] = React.useState('');

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Container>
      <GlobalStyles />
      <Input placeholder="input placeholder" value={inputValue} onChange={handleValueChange} />
    </Container>
  );
});
