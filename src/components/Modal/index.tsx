import React from 'react';
import styled from 'styled-components';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { isGivenParameterNumber } from './utils';

type StylingPropertyType = number | string | undefined;
interface ModalProps {
  isOpen: boolean; // modal's open status
  setIsOpen: (newOpenStatus: boolean) => void; // function to control modal's open status
  // positioning styles
  top?: StylingPropertyType;
  bottom?: StylingPropertyType;
  right?: StylingPropertyType;
  left?: StylingPropertyType;
}

const StyledModalContainer = styled.div<{
  top: StylingPropertyType;
  bottom: StylingPropertyType;
  right: StylingPropertyType;
  left: StylingPropertyType;
}>`
  position: absolute;
  top: ${({ top }) => (top && isGivenParameterNumber(top) ? `${top}px` : `${top}`)};
  bottom: ${({ bottom }) => (bottom && isGivenParameterNumber(bottom) ? `${bottom}px` : `${bottom}`)};
  right: ${({ right }) => (right && isGivenParameterNumber(right) ? `${right}px` : `${right}`)};
  left: ${({ left }) => (left && isGivenParameterNumber(left) ? `${left}px` : `${left}`)};
`;

export const Modal: React.FC<React.PropsWithChildren<ModalProps>> = ({
  isOpen,
  setIsOpen,
  top,
  right,
  bottom,
  left,
  children,
  ...rest
}) => {
  const modalRef = React.useRef<HTMLDivElement>(null);
  const isClickedOutside = useOutsideClick(modalRef);

  React.useEffect(() => {
    if (isClickedOutside) setIsOpen(false);
  }, [isClickedOutside, setIsOpen]);

  if (!isOpen) return null;

  return (
    <StyledModalContainer ref={modalRef} top={top} right={right} left={left} bottom={bottom} {...rest}>
      {children}
    </StyledModalContainer>
  );
};
