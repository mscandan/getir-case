import React from 'react';
import { ButtonSize, ButtonType } from 'types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: ButtonSize;
  buttonType: ButtonType;
}

export const Button: React.FC<ButtonProps & React.PropsWithChildren> = ({ children, onClick, type = 'button' }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};
