import React from 'react';
import { storiesOf } from '@storybook/react';
import GlobalStyles from 'lib/globalStyles';
import styled from 'styled-components';
import { Button } from 'components/Button';
import { Modal } from '.';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: flex-start;
`;

const ButtonContainer = styled.div`
  width: 100px;
`;

storiesOf('Modal', module).add('Modal Component', () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <Container>
      <GlobalStyles />
      <ButtonContainer>
        <Button onClick={() => setIsModalOpen(oldValue => !oldValue)}>Trigger modal</Button>
      </ButtonContainer>
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} right={0} top={10}>
        <div>inside of the modal</div>
      </Modal>
    </Container>
  );
});
