import React from 'react';
import styled from 'styled-components';
import { mediaBreakpointUp } from '../../lib/styleHelpers';

interface DropdownProps {
  content: React.ReactNode;
}

const StyledDropdownContent = styled.div`
  position: absolute;
  right: 0;
  z-index: 1;
  display: none;

  ${mediaBreakpointUp(1290)} {
    display: none;
  }
`;

const StyledDropdownContainer = styled.div`
  position: relative;

  &:hover {
    cursor: pointer;
  }

  &:focus-within ${StyledDropdownContent} {
    display: block;
  }
`;

const StyledChildrenContainer = styled.div``;

export const Dropdown: React.FC<DropdownProps & React.PropsWithChildren> = React.memo(
  ({ children, content, ...rest }) => {
    return (
      <StyledDropdownContainer tabIndex={0} {...rest}>
        <StyledChildrenContainer>{children}</StyledChildrenContainer>
        <StyledDropdownContent tabIndex={0} data-testid="dropdown">
          {content}
        </StyledDropdownContent>
      </StyledDropdownContainer>
    );
  },
);
