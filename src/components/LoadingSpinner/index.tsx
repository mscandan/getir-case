import React from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';

const StyledLoading = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
  background-color: ${({ theme }) => theme.TEXT_LIGHT.HIGHLIGHT};
`;

const StyledIcon = styled(Icon)`
  width: 100px;
  height: 100px;
  opacity: 1;
`;

export const LoadingSpinner: React.FC = React.memo(() => {
  return (
    <StyledLoading>
      <StyledIcon name="loading" />
    </StyledLoading>
  );
});
