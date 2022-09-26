import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import GlobalStyles from 'lib/globalStyles';
import { Checkbox } from '.';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const CheckboxContainer = styled.div`
  width: 500px;
  height: 50px;
`;

storiesOf('Checkbox', module).add('Checkbox Comp', () => {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckChange = () => {
    setIsChecked(oldValue => !oldValue);
  };

  return (
    <Container>
      <GlobalStyles />
      <CheckboxContainer>
        <Checkbox isChecked={isChecked} onChange={handleCheckChange} label="label" count={3} />
      </CheckboxContainer>
    </Container>
  );
});
