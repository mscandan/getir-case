import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import GlobalStyles from 'lib/globalStyles';
import { ButtonGroupDataType } from 'types';
import { ButtonGroup } from '.';

const ButtonGroupData: Array<ButtonGroupDataType> = [
  { id: '0', label: 'button 0' },
  { id: '1', label: 'button 1' },
  { id: '2', label: 'button 2' },
];

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

storiesOf('ButtonGroup', module).add('Button Group Component', () => {
  const [selectedButtonId, setSelectedButtonId] = React.useState('1');

  const handleOnChange = (newSelected: ButtonGroupDataType) => {
    setSelectedButtonId(newSelected.id);
  };

  return (
    <Container>
      <GlobalStyles />
      <ButtonGroup data={ButtonGroupData} onSelectedButtonChange={handleOnChange} selectedButtonId={selectedButtonId} />
    </Container>
  );
});
