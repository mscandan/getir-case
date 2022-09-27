import React from 'react';
import styled from 'styled-components';
import { useOutsideClick } from '../../hooks/useOutsideClick';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (newOpenStatus: boolean) => void;
  top?: number;
  bottom?: number;
  right?: number;
  left?: number;
}

const StyledModalContainer = styled.div<{ top?: number; bottom?: number; right?: number; left?: number }>`
  position: absolute;
  top: ${({ top }) => top && `${top}px`};
  bottom: ${({ bottom }) => bottom && `${bottom}px`};
  right: ${({ right }) => right && `${right}px`};
  left: ${({ left }) => left && `${left}px`};
`;

export const Modal: React.FC<ModalProps & React.PropsWithChildren> = ({
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
