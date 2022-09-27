import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import GlobalStyles from 'lib/globalStyles';
import { Dropdown } from '.';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const StyledDropdownTrigger = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COMPONENT_BG.BASE};
`;

const StyledDropdownContent = styled.div`
  width: 200px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.BORDER.BASE};
`;

storiesOf('Dropdown', module).add('Dropdown Component', () => {
  return (
    <Container>
      <GlobalStyles />
      <Dropdown content={<StyledDropdownContent>hello</StyledDropdownContent>}>
        <StyledDropdownTrigger>trigger dropdown</StyledDropdownTrigger>
      </Dropdown>
    </Container>
  );
});
