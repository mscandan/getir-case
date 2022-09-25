import React from 'react';
import { storiesOf } from '@storybook/react';
import GlobalStyles from 'lib/globalStyles';
import styled from 'styled-components';
import { Radio } from '.';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const RadioItems = [
  { id: '0', label: 'item 1' },
  { id: '1', label: 'item 2' },
  { id: '2', label: 'item 3' },
  { id: '3', label: 'item 4' },
];

storiesOf('Radio', module).add('Radio Component', () => {
  const [selectedRadioId, setSelectedRadioId] = React.useState(RadioItems[0].id);

  const handleRadioSelectionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadioId(e.target.id);
  };

  return (
    <Container>
      <GlobalStyles />
      {RadioItems.map(el => {
        return (
          <Radio key={el.id} isSelected={el.id === selectedRadioId} onChange={handleRadioSelectionChange} id={el.id} />
        );
      })}
    </Container>
  );
});
